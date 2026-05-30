"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

import { BrandLogo } from "@/components/ui/Brand";
import { navigation, headerCTA, type NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

const statusDot: Record<string, string> = {
  available: "bg-emerald-400",
  pilot: "bg-amber-400",
  pipeline: "bg-slate-400",
};

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.href) && item.href !== "/";

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1 text-[13px] font-medium transition-colors duration-150",
          isActive ? "text-white" : "text-slate-300 hover:text-white"
        )}
      >
        {item.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")} />
      </Link>
      {open && item.subItems && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
          <div className="w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#0B1430]/95 p-2 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
            {item.subItems.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setOpen(false)}
                className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.06]"
              >
                {sub.status && (
                  <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", statusDot[sub.status])} />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-100 group-hover:text-white">
                      {sub.label}
                    </span>
                    {sub.badge && (
                      <span className="rounded border border-white/10 bg-white/[0.06] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-cyan-300/80">
                        {sub.badge}
                      </span>
                    )}
                  </div>
                  {sub.description && (
                    <p className="mt-0.5 text-xs leading-snug text-slate-400">{sub.description}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#070D1F]/85 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          : "border-b border-white/[0.06] bg-[#070D1F]/40 backdrop-blur-md"
      )}
    >
      {/* Desktop */}
      <div className="mx-auto hidden h-[68px] max-w-[1280px] items-center px-6 lg:flex xl:px-8">
        <BrandLogo tone="dark" className="mr-10 flex-shrink-0" />

        <nav className="flex flex-1 items-center gap-7" aria-label="Main navigation">
          {navigation.map((item) =>
            item.subItems ? (
              <DesktopDropdown key={item.href} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[13px] font-medium transition-colors duration-150",
                  "after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-cyan-400 after:to-violet-400 after:transition-transform after:duration-200 hover:after:scale-x-100",
                  pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/")
                    ? "text-white after:scale-x-100"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href={headerCTA.href}
          className="ml-6 inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-5 py-2.5 text-[13px] font-semibold text-[#06121f] shadow-[0_6px_24px_-6px_rgba(34,211,238,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_-6px_rgba(124,58,237,0.55)]"
        >
          {headerCTA.label}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <BrandLogo tone="dark" />
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-slate-200 transition-colors hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#070D1F]/98 backdrop-blur-xl">
            <div className="max-h-[calc(100vh-4rem)] space-y-1 overflow-y-auto px-4 pb-6 pt-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isExpanded = mobileExpandedItem === item.href;

                return (
                  <div key={item.href}>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          "flex min-h-[44px] flex-1 items-center rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
                          isActive ? "bg-white/[0.08] text-white" : "text-slate-200 hover:bg-white/[0.05]"
                        )}
                        onClick={() => !hasSubItems && setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {hasSubItems && (
                        <button
                          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-slate-400 hover:text-white"
                          onClick={() => setMobileExpandedItem(isExpanded ? null : item.href)}
                          aria-label={isExpanded ? "Collapse" : "Expand"}
                        >
                          <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
                        </button>
                      )}
                    </div>

                    {hasSubItems && isExpanded && (
                      <div className="mb-2 ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                        {item.subItems!.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex min-h-[40px] items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                          >
                            {sub.status && (
                              <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", statusDot[sub.status])} />
                            )}
                            <span className="flex-1">{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-4">
                <Link
                  href={headerCTA.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-5 py-3 text-sm font-semibold text-[#06121f] shadow-[0_6px_24px_-6px_rgba(34,211,238,0.5)]"
                >
                  {headerCTA.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
