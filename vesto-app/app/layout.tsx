import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Sparkles, BookOpen, LineChart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vesto - Financial Literacy Platform",
  description: "Learn financial analysis through interactive modules and AI-powered feedback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="flex min-h-screen">
          {/* Sidebar — Desktop */}
          <nav className="hidden w-64 shrink-0 border-r border-border bg-background shadow-sm md:flex md:flex-col p-5">
            <Link href="/" className="flex items-center gap-2 pb-5 mb-5 border-b border-border">
              <Sparkles className="h-5 w-5 text-primary" />
              <h1 className="text-lg font-bold tracking-tight text-foreground">Vesto</h1>
            </Link>
            <div className="space-y-1">
              <Link href="/learn">
                <Button variant="ghost" className="w-full justify-start gap-2.5 text-sm font-medium hover:bg-muted-bg text-foreground">
                  <BookOpen className="h-4 w-4" />
                  Learn
                </Button>
              </Link>
              <Link href="/simulator">
                <Button variant="ghost" className="w-full justify-start gap-2.5 text-sm font-medium hover:bg-muted-bg text-foreground">
                  <LineChart className="h-4 w-4" />
                  Simulator
                </Button>
              </Link>
              <Link href="/account">
                <Button variant="ghost" className="w-full justify-start gap-2.5 text-sm font-medium hover:bg-muted-bg text-foreground">
                  <User className="h-4 w-4" />
                  Account
                </Button>
              </Link>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 p-6 lg:p-10 pb-24 md:pb-8 min-w-0">
            {children}
          </main>

          {/* Bottom Nav — Mobile */}
          <nav className="md:hidden fixed bottom-0 left-0 right-0 z-10 flex justify-around border-t border-border bg-card shadow-lg p-1">
            <Link href="/learn" className="flex-1">
              <Button variant="ghost" className="w-full flex-col h-16 gap-1 hover:bg-muted-bg text-foreground">
                <BookOpen className="h-5 w-5" />
                <span className="text-xs font-medium">Learn</span>
              </Button>
            </Link>
            <Link href="/simulator" className="flex-1">
              <Button variant="ghost" className="w-full flex-col h-16 gap-1 hover:bg-muted-bg text-foreground">
                <LineChart className="h-5 w-5" />
                <span className="text-xs font-medium">Simulator</span>
              </Button>
            </Link>
            <Link href="/account" className="flex-1">
              <Button variant="ghost" className="w-full flex-col h-16 gap-1 hover:bg-muted-bg text-foreground">
                <User className="h-5 w-5" />
                <span className="text-xs font-medium">Account</span>
              </Button>
            </Link>
          </nav>
        </div>
      </body>
    </html>
  );
}
