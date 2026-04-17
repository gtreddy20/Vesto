'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createClient } from '@/lib/supabase/client';
import { getPitchStats } from '@/lib/supabase/queries';

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string | null; email: string | null } | null>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ pitches: 0, approved: 0, accuracy: 0 });

  useEffect(() => {
    async function fetchUserData() {
      const supabase = createClient();
      const { data: { user: authUser } } = await supabase.auth.getUser();

      if (!authUser) {
        router.push('/login');
        return;
      }

      let userProfile = null;
      const { data: profileData, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('id', authUser.id)
        .single();

      if (fetchError && fetchError.code === 'PGRST116') {
        const { data: newProfile, error: createError } = await supabase
          .from('users')
          .insert({
            id: authUser.id,
            email: authUser.email!,
            full_name: authUser.user_metadata?.full_name || null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
          .select()
          .single();

        if (createError) {
          console.error('Error creating user profile:', createError);
        } else {
          userProfile = newProfile;
        }
      } else if (fetchError) {
        console.error('Error fetching user profile:', fetchError);
      } else {
        userProfile = profileData;
      }

      setUser({
        name: userProfile?.full_name || authUser.user_metadata?.full_name || null,
        email: authUser.email || userProfile?.email || null
      });

      try {
        const pitchStats = await getPitchStats(authUser.id);
        setStats({
          pitches: pitchStats.totalPitches,
          approved: pitchStats.approvedPitches,
          accuracy: pitchStats.approvalRate
        });
      } catch {
        // Keep default stats on error
      }

      setLoading(false);
    }

    fetchUserData();
  }, [router]);

  if (loading) {
    return (
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Account</h1>
          <p className="text-muted-foreground mt-1">Loading…</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Account</h1>
        <p className="text-muted-foreground mt-1">Manage your profile and settings.</p>
      </div>

      <Card className="border-border bg-card shadow-sm">
        <CardHeader>
          <CardTitle className="text-foreground">Profile</CardTitle>
          <CardDescription>This is how your profile appears</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</p>
            <p className="text-base font-medium text-foreground">{user.name || 'Not set'}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
            <p className="text-base font-medium text-foreground">{user.email || 'Not set'}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="border-border hover:bg-muted-bg text-foreground">
            Edit Profile
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-border bg-card shadow-sm">
        <CardHeader>
          <CardTitle className="text-foreground">Simulator Stats</CardTitle>
          <CardDescription>Your performance with the AI Fund Manager</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-muted-bg text-center gap-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pitches Made</p>
              <p className="text-4xl font-bold text-foreground tabular-nums">{stats.pitches}</p>
            </div>
            <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-accent-sage text-center gap-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-text">Approved</p>
              <p className="text-4xl font-bold text-foreground tabular-nums">{stats.approved}</p>
            </div>
            <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-muted-bg text-center gap-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Approval Rate</p>
              <p className="text-4xl font-bold text-foreground tabular-nums">{stats.accuracy}%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
