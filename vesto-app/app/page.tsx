import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, LineChart, TrendingUp, Award, LogIn, UserPlus } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Auth buttons */}
      <div className="flex justify-end gap-3 pt-4">
        <Link href="/login">
          <Button variant="outline" className="gap-2 border-border hover:bg-muted-bg text-foreground">
            <LogIn className="h-4 w-4" />
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button className="gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold border border-primary-border">
            <UserPlus className="h-4 w-4" />
            Sign Up
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <div className="text-center py-20 md:py-28 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-sage text-primary-text text-sm font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-text" />
          AI-Powered Financial Training
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-foreground">
            Earn the Right<br className="hidden sm:block" /> to Trade
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal">
            Most simulators let you invest blindly. Vesto doesn&apos;t. Write your analysis, pitch it to an AI Fund Manager, and score 70+ before you can touch a position.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link href="/learn">
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold shadow-sm border border-primary-border px-8"
            >
              <BookOpen className="h-5 w-5" />
              Start Learning
            </Button>
          </Link>
          <Link href="/simulator">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border hover:bg-muted-bg text-foreground px-8"
            >
              <LineChart className="h-5 w-5" />
              Try the Simulator
            </Button>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          20 real companies · $10,000 virtual portfolio · Real AI feedback
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid md:grid-cols-3 gap-6 py-4">
        <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-accent-sage flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary-text" />
            </div>
            <CardTitle className="text-foreground">Interactive Modules</CardTitle>
            <CardDescription className="leading-relaxed">
              Learn fundamentals, 10-K analysis, and competitive analysis through structured lessons
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-accent-peach flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-[#8a6a5a]" />
            </div>
            <CardTitle className="text-foreground">AI-Powered Feedback</CardTitle>
            <CardDescription className="leading-relaxed">
              Get detailed, rubric-based feedback on your analysis from our AI grading system
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-accent-lavender flex items-center justify-center">
              <Award className="h-6 w-6 text-[#7a6a7a]" />
            </div>
            <CardTitle className="text-foreground">Stock Simulator</CardTitle>
            <CardDescription className="leading-relaxed">
              Pitch stocks to our AI Fund Manager and build a paper trading portfolio
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* How It Works */}
      <Card className="border-border bg-card shadow-sm py-2">
        <CardHeader>
          <CardTitle className="text-foreground text-xl">How Vesto Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {[
            {
              num: "1",
              bg: "bg-accent-sage",
              title: "Learn the Fundamentals",
              body: "Start with Module 1 to understand P/E ratios, EBITDA, ROE, and other key metrics",
            },
            {
              num: "2",
              bg: "bg-accent-peach",
              title: "Analyze Real Companies",
              body: "Practice analyzing 20 major companies using real financial data and mock 10-K reports",
            },
            {
              num: "3",
              bg: "bg-accent-lavender",
              title: "Get AI Feedback",
              body: "Receive detailed feedback on your analysis scored across 5 criteria worth 100 points",
            },
            {
              num: "4",
              bg: "bg-secondary",
              title: "Test Your Skills",
              body: "Pitch stocks to our AI Fund Manager and build a paper trading portfolio with $10,000",
            },
          ].map(({ num, bg, title, body }) => (
            <div key={num} className="flex gap-4">
              <div className={`shrink-0 w-10 h-10 rounded-full ${bg} text-foreground flex items-center justify-center font-bold text-base`}>
                {num}
              </div>
              <div className="flex-1 pt-1.5">
                <h3 className="font-semibold mb-1 text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-primary-border bg-accent-sage shadow-sm">
        <CardContent className="py-14 text-center">
          <h2 className="text-3xl font-bold mb-3 text-foreground">Ready to Make the Case?</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Learn the fundamentals, pitch your thesis, earn your trade.
          </p>
          <Link href="/learn">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold shadow-sm border border-primary-border px-8"
            >
              Start Learning
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
