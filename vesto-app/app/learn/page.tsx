'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MODULES } from "@/types";
import type { UserProgress } from "@/types";
import { createClient } from '@/lib/supabase/client';
import Link from "next/link";

export default function LearnPage() {
  const [progressMap, setProgressMap] = useState<Record<string, UserProgress>>({});
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const fetchProgress = useCallback(async (isInitialLoad = false) => {
    try {
      if (isInitialLoad) {
        setLoading(true);
      }
      
      // Use client-side Supabase to fetch progress directly
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        // User not logged in - show 0% for all modules
        setProgressMap({});
        if (isInitialLoad) {
          setLoading(false);
        }
        return;
      }
      
      // Fetch progress directly from Supabase
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id);
      
      if (error) {
        console.error('Error fetching progress:', error);
        setProgressMap({});
      } else {
        // Convert array to map for easy lookup
        const map: Record<string, UserProgress> = {};
        (data || []).forEach((progress: UserProgress) => {
          if (progress && progress.module_id) {
            map[progress.module_id] = progress;
            console.log(`Loaded progress for ${progress.module_id}: ${progress.completion_percentage}%`);
          }
        });
        
        console.log('Progress map updated:', map);
        setProgressMap(map);
      }
    } catch (error) {
      console.error('Error fetching progress:', error);
      setProgressMap({});
    } finally {
      if (isInitialLoad) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchProgress(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Refetch progress when page becomes visible (user navigates back)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchProgress(false);
      }
    };

    const handleFocus = () => {
      fetchProgress(false);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, [fetchProgress]);

  // Refetch when pathname changes (user navigates back to this page)
  useEffect(() => {
    if (pathname === '/learn') {
      // Add a delay to ensure any saves from previous page have completed
      const timer = setTimeout(() => {
        console.log('Refetching progress after navigation...');
        fetchProgress(false);
      }, 800); // Increased delay to ensure database commits are complete
      
      return () => clearTimeout(timer);
    }
  }, [pathname, fetchProgress]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Learning Modules</h1>
        <p className="text-muted-foreground mt-1">
          From basic definitions to expert-level comparative analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((module) => {
          const progressData = progressMap[module.id];
          const progress = progressData?.completion_percentage || 0;
          const levelColors = {
            easy:         "bg-accent-sage text-foreground border-primary-border",
            intermediate: "bg-accent-peach text-foreground border-[#e4c5b6]",
            advanced:     "bg-accent-lavender text-foreground border-[#d6cfd6]",
            expert:       "bg-accent-peach text-foreground border-[#e4c5b6]",
          };

          return (
            <Card key={module.id} className="flex flex-col shadow-sm hover:shadow-md transition-shadow border-border bg-card">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-lg text-foreground">{module.title}</CardTitle>
                  <Badge className={`${levelColors[module.level]} capitalize shrink-0 text-xs font-medium`}>
                    {module.level}
                  </Badge>
                </div>
                <CardDescription className="mt-1 leading-relaxed">{module.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-2">
                <Progress value={progress} className="bg-muted-bg h-1.5" />
                <p className="text-sm text-muted-foreground">
                  {loading ? 'Loading…' : `${progress}% complete`}
                </p>
              </CardContent>
              <CardFooter>
                <Link href={`/learn/${module.id}`} className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold border border-primary-border">
                    {progress === 0 ? 'Start Module' : 'Continue Module'}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>

    </div>
  );
}

