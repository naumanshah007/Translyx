"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Navigation } from "./Navigation";
import { navigation, headerCTA } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 shadow-[0_10px_30px_-25px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/70 relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
      <div className="w-full">
        <div className="hidden lg:flex items-center w-full">
          <div className="flex h-24 xl:h-28 w-[20rem] xl:w-[22rem] flex-col items-start justify-center border-r border-slate-200/70 bg-white/60 pl-6 dark:border-slate-800/70 dark:bg-slate-900/50 xl:pl-8">
            <Logo href="/" size="lg" className="h-auto w-36 xl:w-44" />
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Translyx Limited • Clinical Technology and AI Workflows
            </p>
          </div>

          <div className="flex h-24 xl:h-28 flex-1 items-center justify-between px-6 xl:px-8">
            <div className="min-w-0">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Flagship public product: Privexa Trace
              </p>
              <Navigation />
            </div>
            <Button asChild variant="gradient" size="sm" className="shadow-[0_10px_25px_rgba(56,189,248,0.35)]">
              <Link href={headerCTA.href}>{headerCTA.label}</Link>
            </Button>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="flex h-20 sm:h-24 items-center justify-between px-4 sm:px-6">
            <div className="flex min-w-0 flex-col justify-center">
              <Logo href="/" size="lg" className="h-auto w-28 sm:w-36" />
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Translyx • Privexa Trace
              </p>
            </div>

            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-2.5 text-slate-700 transition-colors hover:bg-white/70 dark:text-slate-300 dark:hover:bg-slate-900/70"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="border-t border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/90">
              <div className="space-y-2 px-4 pb-4 pt-3">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block min-h-[44px] rounded-2xl px-4 py-3.5 transition-colors",
                        isActive
                          ? "bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                          : "text-slate-900 hover:bg-slate-100/70 dark:text-slate-100 dark:hover:bg-slate-900/70"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="block text-base font-semibold">{item.label}</span>
                      {item.description ? (
                        <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">
                          {item.description}
                        </span>
                      ) : null}
                    </Link>
                  );
                })}
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
