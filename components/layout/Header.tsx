"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

import { BrandLogo } from "@/components/ui/Brand";
import { NavDropdown, statusDot } from "@/components/layout/NavDropdown";
import { navigation } from "@/config/navigation";
import { privexaLoginUrl } from "@/config/privexa";
import { cn } from "@/lib/utils";

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
          ? "border-b border-black/10 bg-white/90 shadow-[0_4px_30px_-16px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          : "border-b border-black/[0.06] bg-white/80 backdrop-blur-md"
      )}
    >
      {/* Desktop */}
      <div className="mx-auto hidden h-[68px] max-w-[1280px] items-center px-6 lg:flex xl:px-8">
        <BrandLogo tone="light" markClassName="h-10" className="mr-5 flex-shrink-0 xl:mr-9" />

        <nav className="flex flex-1 items-center gap-x-3 xl:gap-x-6" aria-label="Main navigation">
          {navigation.map((item) =>
            item.subItems ? (
              <NavDropdown key={item.href} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative whitespace-nowrap text-[13px] font-medium transition-colors duration-150",
                  "after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#A50E28] after:transition-transform after:duration-200 hover:after:scale-x-100",
                  pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/")
                    ? "text-[#0B0B0C] after:scale-x-100"
                    : "text-slate-700 hover:text-[#0B0B0C]"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="ml-4 flex shrink-0 items-center gap-4">
          {privexaLoginUrl && (
            <a href={privexaLoginUrl} target="_blank" rel="noopener noreferrer" className="hidden whitespace-nowrap text-[13px] text-slate-600 hover:text-[#0B0B0C] xl:inline">
              Open Privexa ↗
            </a>
          )}
          <Link
            href="/privexa/demo"
            className="inline-flex min-h-[38px] items-center whitespace-nowrap rounded-full bg-[#A50E28] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#860B20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A50E28] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Request Demo
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <BrandLogo tone="light" markClassName="h-9" />
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-slate-800 transition-colors hover:bg-black/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-black/10 bg-white backdrop-blur-xl">
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
                          isActive ? "bg-black/[0.08] text-[#0B0B0C]" : "text-slate-800 hover:bg-black/[0.05]"
                        )}
                        onClick={() => !hasSubItems && setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {hasSubItems && (
                        <button
                          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-slate-600 hover:text-[#0B0B0C]"
                          onClick={() => setMobileExpandedItem(isExpanded ? null : item.href)}
                          aria-label={isExpanded ? "Collapse" : "Expand"}
                        >
                          <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
                        </button>
                      )}
                    </div>

                    {hasSubItems && isExpanded && (
                      <div className="mb-2 ml-4 mt-1 space-y-1 border-l border-black/10 pl-3">
                        {item.subItems!.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex min-h-[40px] items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-black/[0.05] hover:text-[#0B0B0C]"
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
              {privexaLoginUrl && (
                <a href={privexaLoginUrl} target="_blank" rel="noopener noreferrer" className="mt-3 flex min-h-[44px] items-center justify-center text-sm text-slate-700">
                  Open Privexa ↗
                </a>
              )}
              <Link
                href="/privexa/demo"
                className="mt-3 flex min-h-[48px] items-center justify-center rounded-full bg-[#A50E28] text-sm font-semibold text-white"
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
