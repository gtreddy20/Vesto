import { NextResponse } from 'next/server';
import { reviewPitch } from '@/lib/ai/review-pitch';
import { createClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/client';
import { getCompanyBySymbol, getCompanyFundamentals, getMock10KData } from '@/lib/supabase/queries';
import { FALLBACK_COMPANIES } from '@/lib/mock-data/fallback-companies';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, symbol, companyName, pitchText } = body;

    if (!symbol || !pitchText) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Attempt to get authenticated user; fall through to demo mode if unavailable
    let isAuthenticated = false;
    let supabase: Awaited<ReturnType<typeof createClient>> | null = null;

    if (isSupabaseConfigured()) {
      try {
        supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (!authError && user) {
          // Reject if the caller supplied a userId that doesn't match the session
          if (userId && user.id !== userId) {
            return NextResponse.json(
              { error: 'Forbidden', details: 'User ID mismatch' },
              { status: 403 }
            );
          }
          isAuthenticated = true;
        }
      } catch {
        // Supabase unavailable — fall through to demo mode
      }
    }

    // Build company context for the AI prompt
    let companyContext = `Company: ${companyName} (${symbol})`;

    if (isAuthenticated) {
      // Full path: fetch rich context from DB
      try {
        const [fundamentals, mock10k] = await Promise.all([
          getCompanyFundamentals(symbol).catch(() => null),
          getMock10KData(symbol).catch(() => null),
        ]);
        companyContext = `
Company: ${companyName} (${symbol})
Business: ${mock10k?.business_description || 'N/A'}
Risk Factors: ${mock10k?.risk_factors || 'N/A'}
Key Metrics: P/E ${fundamentals?.pe_ratio}, ROE ${fundamentals?.roe}%, Debt/Equity ${fundamentals?.debt_to_equity}
        `.trim();
      } catch {
        // Non-fatal — proceed with minimal context
      }
    } else {
      // Demo path: use fallback data for context
      const fallback = FALLBACK_COMPANIES.find(c => c.company.symbol === symbol);
      if (fallback) {
        const f = fallback.fundamentals;
        companyContext = `
Company: ${companyName} (${symbol})
Business: ${fallback.mock10k.business_description}
Risk Factors: ${fallback.mock10k.risk_factors}
Key Metrics: P/E ${f.pe_ratio}, ROE ${f.roe}%, Debt/Equity ${f.debt_to_equity}
        `.trim();
      }
    }

    // Review pitch with AI (using gemini-2.5-flash)
    const review = await reviewPitch(companyName, symbol, pitchText, companyContext);

    // Save pitch submission only for authenticated users with a live DB connection
    if (isAuthenticated && supabase && userId) {
      try {
        const company = await getCompanyBySymbol(symbol);
        const { data: submission, error: saveError } = await supabase
          .from('pitch_submissions')
          .insert({
            user_id: userId,
            company_id: company.id,
            symbol,
            company_name: companyName,
            pitch_text: pitchText,
            status: review.status,
            ai_feedback: review.feedback,
            ai_score: review.score,
            invested: false,
            investment_amount: null,
            shares_purchased: null,
            purchase_price: null,
            invested_at: null,
            submitted_at: new Date().toISOString(),
            reviewed_at: new Date().toISOString()
          })
          .select()
          .single();

        if (saveError) {
          console.error('Error saving pitch:', saveError);
        } else {
          return NextResponse.json({ data: { submission, review } });
        }
      } catch (saveErr) {
        console.error('Error saving pitch submission:', saveErr);
      }
    }

    // Demo mode response (no submission record)
    return NextResponse.json({ data: { submission: null, review } });
  } catch (error: any) {
    console.error('Error processing pitch:', error);
    return NextResponse.json(
      {
        error: 'Failed to process pitch',
        details: error?.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
}

