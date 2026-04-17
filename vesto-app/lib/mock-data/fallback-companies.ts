/**
 * Fallback company data for demo mode when Supabase is unavailable.
 * Prices and metrics are approximate but realistic as of early 2025.
 */

export interface FallbackCompanyData {
  company: {
    id: number;
    symbol: string;
    name: string;
    industry: string | null;
    sector: string | null;
    market_cap: number | null;
    shares_outstanding: null;
    exchange: string | null;
    country: string | null;
    currency: string | null;
    ipo: null;
    website: null;
    logo: null;
    phone: null;
    created_at: string;
    updated_at: string;
  };
  quote: {
    current_price: number;
    change: number;
    percent_change: number;
  };
  fundamentals: {
    pe_ratio: number | null;
    pb_ratio: number | null;
    ps_ratio: number | null;
    peg_ratio: number | null;
    forward_pe: number | null;
    roe: number | null;
    roa: number | null;
    gross_margin: number | null;
    operating_margin: number | null;
    net_profit_margin: number | null;
    ebitda: number | null;
    debt_to_equity: number | null;
    current_ratio: number | null;
    quick_ratio: number | null;
    long_term_debt_to_equity: number | null;
    eps_growth_yoy: number | null;
    revenue_growth_yoy: number | null;
    eps_growth_5y: number | null;
    revenue_growth_5y: number | null;
    beta: number | null;
    market_cap: number | null;
    week_52_high: number | null;
    week_52_low: number | null;
  };
  mock10k: {
    business_description: string;
    risk_factors: string;
  };
  financials: never[];
}

export const FALLBACK_COMPANIES: FallbackCompanyData[] = [
  {
    company: { id: 1, symbol: 'AAPL', name: 'Apple Inc.', industry: 'Consumer Electronics', sector: 'Technology', market_cap: 3400000000000, shares_outstanding: null, exchange: 'NASDAQ', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 213.49, change: 2.14, percent_change: 1.01 },
    fundamentals: { pe_ratio: 33.2, pb_ratio: 48.1, ps_ratio: 8.6, peg_ratio: 2.9, forward_pe: 29.8, roe: 160.6, roa: 22.6, gross_margin: 46.2, operating_margin: 31.5, net_profit_margin: 26.4, ebitda: 137.4, debt_to_equity: 1.45, current_ratio: 0.87, quick_ratio: 0.83, long_term_debt_to_equity: 1.21, eps_growth_yoy: 11.2, revenue_growth_yoy: 7.8, eps_growth_5y: 18.4, revenue_growth_5y: 9.2, beta: 1.24, market_cap: 3400000000000, week_52_high: 237.23, week_52_low: 164.08 },
    mock10k: { business_description: 'Apple designs, manufactures, and markets smartphones, personal computers, tablets, and wearables. iPhone represents ~52% of revenue, with Services growing to 22% of total sales through an integrated hardware, software, and services ecosystem with over 1 billion paid subscriptions globally.', risk_factors: 'Intense competition in consumer electronics from Samsung, Google, and Chinese manufacturers. Supply chain dependency on China exposes the company to geopolitical risks and tariffs. Regulatory scrutiny regarding App Store practices and antitrust concerns could force business model changes.' },
    financials: [],
  },
  {
    company: { id: 2, symbol: 'MSFT', name: 'Microsoft Corporation', industry: 'Software', sector: 'Technology', market_cap: 3100000000000, shares_outstanding: null, exchange: 'NASDAQ', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 417.22, change: -1.83, percent_change: -0.44 },
    fundamentals: { pe_ratio: 35.8, pb_ratio: 12.4, ps_ratio: 13.6, peg_ratio: 2.4, forward_pe: 31.2, roe: 37.7, roa: 18.4, gross_margin: 70.1, operating_margin: 44.6, net_profit_margin: 35.9, ebitda: 122.8, debt_to_equity: 0.35, current_ratio: 1.28, quick_ratio: 1.24, long_term_debt_to_equity: 0.22, eps_growth_yoy: 22.1, revenue_growth_yoy: 15.7, eps_growth_5y: 20.3, revenue_growth_5y: 14.8, beta: 0.90, market_cap: 3100000000000, week_52_high: 468.35, week_52_low: 361.59 },
    mock10k: { business_description: 'Microsoft develops software, cloud services, and devices globally. Azure cloud platform drives 29% growth and represents the core of intelligent cloud revenue. Office 365 serves 400M commercial seats. The strategic OpenAI partnership positions Microsoft as an AI leader across productivity and cloud infrastructure.', risk_factors: 'Competition from AWS in cloud infrastructure and Google Workspace in productivity tools. Azure service outages could damage customer relationships. Regulatory investigations into Teams bundling and the OpenAI partnership create uncertainty around business model sustainability.' },
    financials: [],
  },
  {
    company: { id: 3, symbol: 'GOOGL', name: 'Alphabet Inc.', industry: 'Internet Content & Information', sector: 'Communication Services', market_cap: 2100000000000, shares_outstanding: null, exchange: 'NASDAQ', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 170.62, change: 0.97, percent_change: 0.57 },
    fundamentals: { pe_ratio: 21.4, pb_ratio: 6.8, ps_ratio: 6.2, peg_ratio: 1.4, forward_pe: 18.9, roe: 32.1, roa: 18.8, gross_margin: 57.0, operating_margin: 32.3, net_profit_margin: 28.9, ebitda: 108.9, debt_to_equity: 0.06, current_ratio: 1.95, quick_ratio: 1.92, long_term_debt_to_equity: 0.04, eps_growth_yoy: 31.5, revenue_growth_yoy: 14.4, eps_growth_5y: 22.7, revenue_growth_5y: 13.1, beta: 1.06, market_cap: 2100000000000, week_52_high: 207.05, week_52_low: 148.49 },
    mock10k: { business_description: 'Alphabet operates Google Search, YouTube, and Google Cloud globally. Search advertising remains the dominant revenue driver while YouTube commands 2.5B monthly active users. Google Cloud grew 28% YoY to 11% of revenue, competing directly with AWS and Azure in enterprise AI workloads.', risk_factors: 'DOJ antitrust suits threaten the Search distribution agreements with Apple and other OEMs that underpin Google\'s ad revenue moat. Competition from Microsoft-backed AI search products could erode query volume. Regulatory pressure in Europe on ad practices and data privacy compliance costs are rising.' },
    financials: [],
  },
  {
    company: { id: 4, symbol: 'NVDA', name: 'NVIDIA Corporation', industry: 'Semiconductors', sector: 'Technology', market_cap: 2600000000000, shares_outstanding: null, exchange: 'NASDAQ', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 105.87, change: 3.21, percent_change: 3.12 },
    fundamentals: { pe_ratio: 38.5, pb_ratio: 42.6, ps_ratio: 25.8, peg_ratio: 1.2, forward_pe: 27.4, roe: 123.5, roa: 55.7, gross_margin: 74.6, operating_margin: 61.1, net_profit_margin: 55.0, ebitda: 81.6, debt_to_equity: 0.41, current_ratio: 4.17, quick_ratio: 3.77, long_term_debt_to_equity: 0.37, eps_growth_yoy: 145.2, revenue_growth_yoy: 122.4, eps_growth_5y: 98.3, revenue_growth_5y: 56.4, beta: 1.66, market_cap: 2600000000000, week_52_high: 153.13, week_52_low: 75.61 },
    mock10k: { business_description: 'NVIDIA designs GPUs and system-on-chip units for gaming, data centers, and AI computing. Data Center revenue surged 217% YoY driven by H100 and H200 GPU demand for AI training and inference. CUDA software ecosystem creates deep customer lock-in across hyperscalers and enterprises building AI infrastructure.', risk_factors: 'Heavy concentration risk: hyperscalers represent >40% of Data Center revenue. Export restrictions on advanced chips to China threaten a significant portion of addressable market. AMD and custom silicon from Google, Amazon, and Microsoft intensifying competition in AI accelerators. Supply constraints limit ability to meet soaring demand.' },
    financials: [],
  },
  {
    company: { id: 5, symbol: 'AMZN', name: 'Amazon.com Inc.', industry: 'Internet Retail', sector: 'Consumer Cyclical', market_cap: 2100000000000, shares_outstanding: null, exchange: 'NASDAQ', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 197.47, change: -0.53, percent_change: -0.27 },
    fundamentals: { pe_ratio: 43.2, pb_ratio: 9.4, ps_ratio: 3.5, peg_ratio: 1.9, forward_pe: 36.8, roe: 22.6, roa: 7.4, gross_margin: 48.6, operating_margin: 10.8, net_profit_margin: 8.0, ebitda: 96.7, debt_to_equity: 0.52, current_ratio: 1.05, quick_ratio: 0.85, long_term_debt_to_equity: 0.42, eps_growth_yoy: 88.3, revenue_growth_yoy: 10.9, eps_growth_5y: 32.1, revenue_growth_5y: 17.6, beta: 1.15, market_cap: 2100000000000, week_52_high: 242.52, week_52_low: 161.02 },
    mock10k: { business_description: 'Amazon operates e-commerce, cloud computing (AWS), digital advertising, and logistics globally. AWS generates 17% of revenue but over 60% of operating income, subsidizing retail expansion. Third-party seller services and advertising are the fastest-growing high-margin segments, reshaping the company\'s profit profile.', risk_factors: 'AWS faces intensifying competition from Microsoft Azure and Google Cloud in enterprise contracts. Labor costs and unionization pressure margin in fulfillment operations. Regulatory scrutiny of marketplace practices and potential breakup risk across business units. FTC antitrust case challenging seller fee structures and preferencing of Amazon private label products.' },
    financials: [],
  },
  {
    company: { id: 6, symbol: 'META', name: 'Meta Platforms Inc.', industry: 'Internet Content & Information', sector: 'Communication Services', market_cap: 1400000000000, shares_outstanding: null, exchange: 'NASDAQ', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 550.31, change: 6.12, percent_change: 1.12 },
    fundamentals: { pe_ratio: 26.4, pb_ratio: 8.9, ps_ratio: 10.2, peg_ratio: 1.1, forward_pe: 22.7, roe: 36.9, roa: 20.4, gross_margin: 81.8, operating_margin: 41.0, net_profit_margin: 35.3, ebitda: 72.4, debt_to_equity: 0.12, current_ratio: 2.67, quick_ratio: 2.65, long_term_debt_to_equity: 0.10, eps_growth_yoy: 73.2, revenue_growth_yoy: 21.6, eps_growth_5y: 15.8, revenue_growth_5y: 16.4, beta: 1.21, market_cap: 1400000000000, week_52_high: 638.40, week_52_low: 414.50 },
    mock10k: { business_description: 'Meta operates Facebook, Instagram, WhatsApp, and Messenger, monetized primarily through digital advertising. The Family of Apps reaches over 3.2B daily active people. Reality Labs division develops Quest VR headsets and AR glasses toward the long-term metaverse vision, currently generating operating losses of ~$16B annually.', risk_factors: 'Apple ATT privacy changes permanently degraded ad targeting precision, costing billions in lost revenue. TikTok competition for youth engagement continues intensifying. Reality Labs losses are large and open-ended. Regulatory pressure in EU and US on data privacy, content moderation, and potential platform breakup creates structural risk.' },
    financials: [],
  },
  {
    company: { id: 7, symbol: 'TSLA', name: 'Tesla Inc.', industry: 'Auto Manufacturers', sector: 'Consumer Cyclical', market_cap: 870000000000, shares_outstanding: null, exchange: 'NASDAQ', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 271.82, change: -4.57, percent_change: -1.65 },
    fundamentals: { pe_ratio: 82.4, pb_ratio: 14.1, ps_ratio: 7.8, peg_ratio: 3.6, forward_pe: 63.2, roe: 17.5, roa: 9.1, gross_margin: 17.9, operating_margin: 8.2, net_profit_margin: 7.3, ebitda: 11.8, debt_to_equity: 0.18, current_ratio: 1.84, quick_ratio: 1.34, long_term_debt_to_equity: 0.08, eps_growth_yoy: -23.1, revenue_growth_yoy: 1.1, eps_growth_5y: 48.2, revenue_growth_5y: 28.9, beta: 2.34, market_cap: 870000000000, week_52_high: 358.64, week_52_low: 138.80 },
    mock10k: { business_description: 'Tesla designs and sells battery electric vehicles, energy storage systems, and solar products. Model Y and Model 3 dominate EV sales globally. Autopilot and Full Self-Driving software subscriptions represent a high-margin, growing revenue stream. Gigafactories in Texas, Berlin, and Shanghai provide global manufacturing scale.', risk_factors: 'Gross margins have compressed significantly due to aggressive price cuts needed to defend market share against BYD, Rivian, and legacy OEM EV entrants. FSD regulatory approval uncertainty could delay the robotaxi opportunity. Elon Musk\'s divided attention across X, SpaceX, and xAI creates management focus and reputational risk.' },
    financials: [],
  },
  {
    company: { id: 8, symbol: 'JPM', name: 'JPMorgan Chase & Co.', industry: 'Banks', sector: 'Financial Services', market_cap: 700000000000, shares_outstanding: null, exchange: 'NYSE', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 231.45, change: 1.23, percent_change: 0.53 },
    fundamentals: { pe_ratio: 13.2, pb_ratio: 2.2, ps_ratio: 3.8, peg_ratio: 1.8, forward_pe: 12.4, roe: 17.2, roa: 1.4, gross_margin: null, operating_margin: 38.4, net_profit_margin: 29.6, ebitda: 42.1, debt_to_equity: null, current_ratio: null, quick_ratio: null, long_term_debt_to_equity: null, eps_growth_yoy: 18.3, revenue_growth_yoy: 22.1, eps_growth_5y: 14.7, revenue_growth_5y: 8.9, beta: 1.12, market_cap: 700000000000, week_52_high: 280.25, week_52_low: 182.41 },
    mock10k: { business_description: 'JPMorgan Chase is the largest US bank by assets, operating Consumer & Community Banking, Commercial Banking, Corporate & Investment Bank, and Asset Management divisions. Net interest income benefits from higher rates while investment banking fees rebounded strongly. The First Republic acquisition expanded West Coast wealth management presence.', risk_factors: 'Net interest income will compress as the Fed cuts rates. Credit quality deterioration in commercial real estate and consumer loans remains a key watch item. Basel III endgame capital requirements, if implemented fully, would reduce returns on equity and constrain capital return capacity. Geopolitical and macro recession risk could spike loan losses.' },
    financials: [],
  },
  {
    company: { id: 9, symbol: 'V', name: 'Visa Inc.', industry: 'Credit Services', sector: 'Financial Services', market_cap: 530000000000, shares_outstanding: null, exchange: 'NYSE', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 277.14, change: 0.88, percent_change: 0.32 },
    fundamentals: { pe_ratio: 31.4, pb_ratio: 14.2, ps_ratio: 16.8, peg_ratio: 2.1, forward_pe: 26.9, roe: 46.3, roa: 19.7, gross_margin: 80.8, operating_margin: 66.9, net_profit_margin: 53.7, ebitda: 21.4, debt_to_equity: 0.54, current_ratio: 1.43, quick_ratio: 1.43, long_term_debt_to_equity: 0.50, eps_growth_yoy: 12.4, revenue_growth_yoy: 10.2, eps_growth_5y: 16.8, revenue_growth_5y: 11.3, beta: 0.94, market_cap: 530000000000, week_52_high: 310.52, week_52_low: 252.48 },
    mock10k: { business_description: 'Visa operates the world\'s largest retail electronic payments network, processing over 212 billion transactions annually across 200+ countries. The asset-light model collects fees on payment volume without taking credit risk. Cross-border transactions, now recovering post-pandemic, carry premium economics over domestic transactions.', risk_factors: 'Regulatory threats to interchange fees could reduce issuer economics and incentives to promote Visa cards. Fintech disintermediation through real-time payment rails (RTP, FedNow) and buy-now-pay-later products bypasses the card network. Merchant litigation over swipe fees creates ongoing legal liability.' },
    financials: [],
  },
  {
    company: { id: 10, symbol: 'WMT', name: 'Walmart Inc.', industry: 'Discount Stores', sector: 'Consumer Defensive', market_cap: 680000000000, shares_outstanding: null, exchange: 'NYSE', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 84.52, change: 0.31, percent_change: 0.37 },
    fundamentals: { pe_ratio: 36.8, pb_ratio: 7.6, ps_ratio: 0.9, peg_ratio: 3.4, forward_pe: 32.1, roe: 21.3, roa: 6.4, gross_margin: 24.5, operating_margin: 4.2, net_profit_margin: 2.8, ebitda: 32.4, debt_to_equity: 0.68, current_ratio: 0.81, quick_ratio: 0.21, long_term_debt_to_equity: 0.52, eps_growth_yoy: 32.4, revenue_growth_yoy: 5.1, eps_growth_5y: 8.9, revenue_growth_5y: 4.7, beta: 0.53, market_cap: 680000000000, week_52_high: 105.31, week_52_low: 60.97 },
    mock10k: { business_description: 'Walmart operates over 10,500 retail stores globally under Walmart and Sam\'s Club banners, plus a rapidly growing e-commerce business. Walmart+ membership and advertising services (Walmart Connect) are expanding high-margin revenue streams. The supply chain and logistics network is a structural competitive advantage enabling everyday low prices.', risk_factors: 'Thin retail margins leave little buffer for cost inflation in labor and supply chain. Amazon competition in grocery and general merchandise intensifies. Significant exposure to consumer discretionary spending cycles and tariff impacts on imported goods. Flip Electronics acquisition integration risk.' },
    financials: [],
  },
  {
    company: { id: 11, symbol: 'JNJ', name: 'Johnson & Johnson', industry: 'Drug Manufacturers', sector: 'Healthcare', market_cap: 380000000000, shares_outstanding: null, exchange: 'NYSE', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 155.48, change: -0.62, percent_change: -0.40 },
    fundamentals: { pe_ratio: 22.6, pb_ratio: 5.1, ps_ratio: 4.8, peg_ratio: 2.8, forward_pe: 14.2, roe: 22.8, roa: 10.1, gross_margin: 68.7, operating_margin: 21.4, net_profit_margin: 21.7, ebitda: 19.8, debt_to_equity: 0.44, current_ratio: 1.42, quick_ratio: 1.16, long_term_debt_to_equity: 0.38, eps_growth_yoy: 10.3, revenue_growth_yoy: 6.4, eps_growth_5y: 5.2, revenue_growth_5y: 3.8, beta: 0.56, market_cap: 380000000000, week_52_high: 168.17, week_52_low: 143.13 },
    mock10k: { business_description: 'Johnson & Johnson focuses on Innovative Medicine (pharmaceuticals) and MedTech after spinning off Kenvue (consumer health). Immunology and oncology drugs including Darzalex, Stelara, and Tremfya drive pharmaceutical revenue. MedTech segment covers orthopedics, surgery, and cardiovascular devices through the Shockwave acquisition.', risk_factors: 'Stelara biosimilar competition beginning in 2025 will erode $10B+ in annual revenue. Talc litigation liability from baby powder claims remains an unresolved overhang despite bankruptcy settlement attempts. Drug pricing reform risk under IRA negotiations for Medicare. Pipeline execution risk on next-generation immunology and oncology assets.' },
    financials: [],
  },
  {
    company: { id: 12, symbol: 'PG', name: 'Procter & Gamble Co.', industry: 'Household & Personal Products', sector: 'Consumer Defensive', market_cap: 380000000000, shares_outstanding: null, exchange: 'NYSE', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 158.17, change: 0.44, percent_change: 0.28 },
    fundamentals: { pe_ratio: 25.8, pb_ratio: 7.9, ps_ratio: 4.7, peg_ratio: 4.2, forward_pe: 23.4, roe: 31.4, roa: 11.8, gross_margin: 51.4, operating_margin: 23.6, net_profit_margin: 18.7, ebitda: 21.3, debt_to_equity: 0.66, current_ratio: 0.76, quick_ratio: 0.55, long_term_debt_to_equity: 0.55, eps_growth_yoy: 11.6, revenue_growth_yoy: 3.1, eps_growth_5y: 8.4, revenue_growth_5y: 5.6, beta: 0.52, market_cap: 380000000000, week_52_high: 176.15, week_52_low: 152.14 },
    mock10k: { business_description: 'Procter & Gamble owns a portfolio of daily-use consumer brands including Tide, Pampers, Gillette, Oral-B, and Pantene across Fabric Care, Baby Care, Grooming, Oral Care, and Personal Care segments. The global distribution network reaches 5 billion consumers. Premium product mix and volume-value pricing strategy protect margins.', risk_factors: 'Private label trade-down risk as consumers remain price-sensitive. Input cost inflation in commodities (pulp, resin, palm oil) compresses margins when pricing power is exhausted. Emerging market currency volatility impacts reported revenue. Competition from targeted DTC brands in premium grooming and personal care segments.' },
    financials: [],
  },
  {
    company: { id: 13, symbol: 'XOM', name: 'Exxon Mobil Corporation', industry: 'Oil & Gas Integrated', sector: 'Energy', market_cap: 500000000000, shares_outstanding: null, exchange: 'NYSE', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 109.34, change: -1.12, percent_change: -1.01 },
    fundamentals: { pe_ratio: 14.2, pb_ratio: 1.9, ps_ratio: 1.4, peg_ratio: 3.1, forward_pe: 12.8, roe: 13.8, roa: 8.2, gross_margin: 42.8, operating_margin: 14.3, net_profit_margin: 10.4, ebitda: 52.1, debt_to_equity: 0.21, current_ratio: 1.41, quick_ratio: 1.06, long_term_debt_to_equity: 0.15, eps_growth_yoy: -8.4, revenue_growth_yoy: -3.2, eps_growth_5y: 12.6, revenue_growth_5y: 3.1, beta: 0.95, market_cap: 500000000000, week_52_high: 126.34, week_52_low: 100.42 },
    mock10k: { business_description: 'ExxonMobil is an integrated oil & gas company with upstream (exploration & production), downstream (refining), and chemicals segments. The Pioneer Natural Resources acquisition made Exxon the dominant Permian Basin operator. Low-carbon solutions including carbon capture and hydrogen are growing investment priorities alongside core fossil fuel operations.', risk_factors: 'Oil price volatility directly drives earnings and cash flow. Energy transition creates long-term secular demand risk for fossil fuels. Climate litigation and increasing carbon regulation raise operating costs. Permian integration execution risk and capital discipline pressure from activist investors following the Darren Woods tenure controversy.' },
    financials: [],
  },
  {
    company: { id: 14, symbol: 'HD', name: 'The Home Depot Inc.', industry: 'Home Improvement Retail', sector: 'Consumer Cyclical', market_cap: 370000000000, shares_outstanding: null, exchange: 'NYSE', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 368.52, change: 2.14, percent_change: 0.58 },
    fundamentals: { pe_ratio: 24.6, pb_ratio: null, ps_ratio: 2.2, peg_ratio: 2.8, forward_pe: 22.1, roe: null, roa: 19.4, gross_margin: 33.4, operating_margin: 15.3, net_profit_margin: 11.3, ebitda: 22.8, debt_to_equity: null, current_ratio: 1.27, quick_ratio: 0.31, long_term_debt_to_equity: null, eps_growth_yoy: 1.4, revenue_growth_yoy: -3.2, eps_growth_5y: 12.4, revenue_growth_5y: 7.8, beta: 1.03, market_cap: 370000000000, week_52_high: 439.37, week_52_low: 326.14 },
    mock10k: { business_description: 'Home Depot is the world\'s largest home improvement retailer with 2,300+ stores in the US, Canada, and Mexico. Pro contractor customers represent ~50% of revenue and are more profitable and less cyclical than DIY consumers. The SRS Distribution acquisition significantly expands Pro services and roofing materials capabilities.', risk_factors: 'Housing market slowdown and elevated mortgage rates suppress big-ticket remodel spending. Revenue is highly correlated with existing home sales volumes. Weather events can both hurt (extreme cold) and help (disaster repair) results unpredictably. Competition from Lowe\'s and specialty retailers in specific categories.' },
    financials: [],
  },
  {
    company: { id: 15, symbol: 'MA', name: 'Mastercard Incorporated', industry: 'Credit Services', sector: 'Financial Services', market_cap: 470000000000, shares_outstanding: null, exchange: 'NYSE', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 503.87, change: 1.67, percent_change: 0.33 },
    fundamentals: { pe_ratio: 36.2, pb_ratio: 60.4, ps_ratio: 19.6, peg_ratio: 2.3, forward_pe: 30.8, roe: 188.4, roa: 28.6, gross_margin: 79.8, operating_margin: 57.8, net_profit_margin: 46.0, ebitda: 14.6, debt_to_equity: 2.18, current_ratio: 1.18, quick_ratio: 1.18, long_term_debt_to_equity: 2.04, eps_growth_yoy: 15.3, revenue_growth_yoy: 12.2, eps_growth_5y: 18.9, revenue_growth_5y: 12.7, beta: 1.10, market_cap: 470000000000, week_52_high: 572.22, week_52_low: 437.60 },
    mock10k: { business_description: 'Mastercard operates a global payments network connecting 3+ billion cardholders with 100+ million merchants. Value-added services including cybersecurity (Recorded Future acquisition), data analytics, and open banking are growing faster than core network revenues. Cross-border transaction volume recovery drives superior unit economics.', risk_factors: 'Regulatory interchange fee caps in the EU and US could reduce issuer economics and network competitiveness. Real-time payment networks (UPI in India, PIX in Brazil, FedNow in US) threaten card payment volumes in key markets. Crypto payment adoption and fintech wallets represent longer-term disintermediation risk.' },
    financials: [],
  },
  {
    company: { id: 16, symbol: 'KO', name: 'The Coca-Cola Company', industry: 'Beverages', sector: 'Consumer Defensive', market_cap: 280000000000, shares_outstanding: null, exchange: 'NYSE', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 65.14, change: 0.22, percent_change: 0.34 },
    fundamentals: { pe_ratio: 24.4, pb_ratio: 10.4, ps_ratio: 5.8, peg_ratio: 3.8, forward_pe: 21.6, roe: 43.2, roa: 10.8, gross_margin: 60.5, operating_margin: 21.8, net_profit_margin: 22.4, ebitda: 12.8, debt_to_equity: 1.82, current_ratio: 1.13, quick_ratio: 0.88, long_term_debt_to_equity: 1.67, eps_growth_yoy: 8.4, revenue_growth_yoy: 6.4, eps_growth_5y: 5.8, revenue_growth_5y: 3.2, beta: 0.59, market_cap: 280000000000, week_52_high: 73.53, week_52_low: 58.75 },
    mock10k: { business_description: 'The Coca-Cola Company is a total beverage company with 200+ brands across sparkling soft drinks, juice, water, sports drinks, coffee, and tea in 200+ countries. The asset-light franchise model (concentrate + syrup) generates high returns on capital. Pricing power has driven organic revenue growth above volume growth as consumers accept premium positioning.', risk_factors: 'Health and wellness trends continue pressuring sugary beverage volumes in developed markets. Sugar taxes and regulatory restrictions in multiple jurisdictions increase operating costs. Currency headwinds from a strong dollar impact international revenue translation. Packaging sustainability requirements raise capital expenditure needs.' },
    financials: [],
  },
  {
    company: { id: 17, symbol: 'PEP', name: 'PepsiCo Inc.', industry: 'Beverages', sector: 'Consumer Defensive', market_cap: 220000000000, shares_outstanding: null, exchange: 'NASDAQ', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 161.22, change: -0.48, percent_change: -0.30 },
    fundamentals: { pe_ratio: 20.8, pb_ratio: 11.4, ps_ratio: 2.4, peg_ratio: 3.2, forward_pe: 18.4, roe: 56.7, roa: 11.2, gross_margin: 54.8, operating_margin: 14.6, net_profit_margin: 11.2, ebitda: 14.2, debt_to_equity: 2.24, current_ratio: 0.85, quick_ratio: 0.63, long_term_debt_to_equity: 1.98, eps_growth_yoy: -0.3, revenue_growth_yoy: -0.5, eps_growth_5y: 6.4, revenue_growth_5y: 6.8, beta: 0.58, market_cap: 220000000000, week_52_high: 183.41, week_52_low: 148.22 },
    mock10k: { business_description: 'PepsiCo is a global food and beverage company with complementary snack (Frito-Lay, Quaker) and beverage (Pepsi, Gatorade, Tropicana) businesses. Frito-Lay North America generates ~24% of revenue at margins nearly double the beverage segment. The snack and beverage portfolio creates in-store shelf space leverage and distribution efficiencies.', risk_factors: 'Volume declines in North America beverages and snacks as consumers trade down or reduce portion sizes amid ongoing food inflation. GLP-1 weight loss drug adoption could structurally reduce high-calorie snack demand. Quaker Foods recall damage to brand trust. Competition from private-label and emerging health-focused snack brands.' },
    financials: [],
  },
  {
    company: { id: 18, symbol: 'DIS', name: 'The Walt Disney Company', industry: 'Entertainment', sector: 'Communication Services', market_cap: 210000000000, shares_outstanding: null, exchange: 'NYSE', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 113.42, change: 0.87, percent_change: 0.77 },
    fundamentals: { pe_ratio: 37.8, pb_ratio: 1.9, ps_ratio: 1.8, peg_ratio: 2.4, forward_pe: 19.8, roe: 5.1, roa: 2.9, gross_margin: 35.8, operating_margin: 11.4, net_profit_margin: 4.9, ebitda: 14.8, debt_to_equity: 0.42, current_ratio: 0.97, quick_ratio: 0.79, long_term_debt_to_equity: 0.38, eps_growth_yoy: 118.4, revenue_growth_yoy: 2.8, eps_growth_5y: -2.1, revenue_growth_5y: 2.4, beta: 1.41, market_cap: 210000000000, week_52_high: 123.74, week_52_low: 83.91 },
    mock10k: { business_description: 'The Walt Disney Company operates Entertainment (streaming, linear networks, studios), Sports (ESPN), and Experiences (theme parks, cruises, consumer products) segments. Disney+ and Hulu streaming achieved profitability in 2024. The Experiences segment generates the highest operating margins and has record demand across parks and cruise lines.', risk_factors: 'Linear TV cord-cutting accelerates ESPN and ABC revenue decline ahead of the sports streaming pivot. Disney+ subscriber growth has slowed post-pandemic normalization. Theme park attendance is vulnerable to economic downturns and consumer travel budget cuts. Box office results are volatile; several recent releases underperformed significantly.' },
    financials: [],
  },
  {
    company: { id: 19, symbol: 'NFLX', name: 'Netflix Inc.', industry: 'Entertainment', sector: 'Communication Services', market_cap: 390000000000, shares_outstanding: null, exchange: 'NASDAQ', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 931.67, change: 12.44, percent_change: 1.35 },
    fundamentals: { pe_ratio: 52.4, pb_ratio: 17.2, ps_ratio: 11.8, peg_ratio: 1.8, forward_pe: 38.6, roe: 36.4, roa: 10.8, gross_margin: 46.4, operating_margin: 26.7, net_profit_margin: 22.7, ebitda: 7.4, debt_to_equity: 0.72, current_ratio: 1.23, quick_ratio: 1.20, long_term_debt_to_equity: 0.68, eps_growth_yoy: 61.2, revenue_growth_yoy: 15.7, eps_growth_5y: 48.3, revenue_growth_5y: 12.8, beta: 1.38, market_cap: 390000000000, week_52_high: 1064.50, week_52_low: 542.01 },
    mock10k: { business_description: 'Netflix is the world\'s leading streaming entertainment service with 300M+ paid memberships in 190+ countries. The ad-supported tier now represents the fastest-growing membership category. Original content investment of $17B+ annually creates a differentiated library. Live sports (WWE Raw, NFL Christmas games) and live events expand total addressable market.', risk_factors: 'Password sharing crackdown subscriber benefit is a one-time tailwind that will normalize. Content investment must continuously compound to retain subscribers against Disney+, Max, and Amazon Prime Video. Ad-supported tier growth requires building a scaled ad sales operation competing with established players. Streaming market saturation in developed markets limits organic growth.' },
    financials: [],
  },
  {
    company: { id: 20, symbol: 'NKE', name: 'Nike Inc.', industry: 'Footwear & Accessories', sector: 'Consumer Cyclical', market_cap: 120000000000, shares_outstanding: null, exchange: 'NYSE', country: 'US', currency: 'USD', ipo: null, website: null, logo: null, phone: null, created_at: '', updated_at: '' },
    quote: { current_price: 78.14, change: -0.93, percent_change: -1.18 },
    fundamentals: { pe_ratio: 22.8, pb_ratio: 7.4, ps_ratio: 1.7, peg_ratio: 3.8, forward_pe: 19.6, roe: 33.4, roa: 11.8, gross_margin: 44.6, operating_margin: 9.4, net_profit_margin: 8.7, ebitda: 5.2, debt_to_equity: 0.82, current_ratio: 2.48, quick_ratio: 1.64, long_term_debt_to_equity: 0.74, eps_growth_yoy: -26.4, revenue_growth_yoy: -10.1, eps_growth_5y: 5.2, revenue_growth_5y: 5.8, beta: 1.04, market_cap: 120000000000, week_52_high: 99.28, week_52_low: 70.25 },
    mock10k: { business_description: 'Nike designs, develops, and sells athletic footwear, apparel, equipment, and services globally under the Nike, Jordan, and Converse brands. Direct-to-consumer (Nike.com + owned stores) represents ~44% of revenue with higher margins than wholesale. Nike\'s athlete partnerships and cultural relevance with Jordan Brand drive premium pricing power.', risk_factors: 'Direct-to-consumer strategy over-rotation has damaged wholesale partner relationships, leading to lost shelf space at Foot Locker and key retailers. Revenue declined meaningfully as DTC growth didn\'t offset wholesale losses. China revenue remains below pre-COVID peak amid local brand competition. New CEO turnaround execution risk as the company rebuilds wholesale relationships.' },
    financials: [],
  },
];
