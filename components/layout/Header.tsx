"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Navigation } from "./Navigation";
import { navigation, headerCTA } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_-25px_rgba(15,23,42,0.45)] dark:border-slate-800/70 dark:bg-slate-950/70 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent pointer-events-none" />
      <div className="w-full">
        {/* Desktop Header - Same Row, Separated Sections */}
        <div className="hidden lg:flex items-center w-full">
          {/* Logo Section - Fixed Width Left */}
          <div className="w-80 xl:w-96 h-32 xl:h-40 flex items-center justify-start pl-6 xl:pl-8 border-r border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/50">
            <Logo href="/" size="lg" className="w-44 xl:w-56 h-auto" />
          </div>

          {/* Navigation Section - Flex Right */}
          <div className="flex-1 flex items-center justify-between h-32 xl:h-40 px-6 xl:px-8">
            <Navigation />
            <div className="flex items-center gap-4">
              <Button asChild variant="gradient" size="sm" className="shadow-[0_10px_25px_rgba(56,189,248,0.35)]">
                <Link href={headerCTA.href}>{headerCTA.label}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between h-28 sm:h-32 px-4 sm:px-6">
            {/* Mobile Logo */}
            <div className="flex items-center flex-shrink-0">
              <Logo href="/" size="lg" className="w-32 sm:w-40 h-auto" />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full p-2.5 text-slate-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-900/70 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="border-t border-slate-200/70 dark:border-slate-800/70 bg-white/90 backdrop-blur-xl dark:bg-slate-950/90">
              <div className="space-y-1 px-4 pb-4 pt-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-xl px-3 py-2 text-base font-semibold transition-colors",
                      "text-slate-900 hover:bg-slate-100/70 dark:text-slate-100 dark:hover:bg-slate-900/70"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button asChild variant="gradient" className="w-full shadow-[0_12px_25px_rgba(56,189,248,0.35)]">
                    <Link href={headerCTA.href} onClick={() => setMobileMenuOpen(false)}>
                      {headerCTA.label}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
