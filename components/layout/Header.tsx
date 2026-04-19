"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navigation, headerCTA, type NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

const statusLabel: Record<string, { text: string; cls: string }> = {
  available: { text: "Available", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  pilot: { text: "In pilot", cls: "bg-amber-50 text-amber-700 border-amber-200" },
  pipeline: { text: "Pipeline", cls: "bg-slate-100 text-slate-500 border-slate-200" },
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
          "flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-150",
          isActive ? "text-[#0F1C3F]" : "text-slate-500 hover:text-[#0F1C3F]"
        )}
      >
        {item.label}
        <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", open && "rotate-180")} />
      </Link>
      {open && item.subItems && (
        <div className="absolute left-0 top-full pt-3 z-50 min-w-[260px]">
          <div className="rounded-xl border border-slate-200/80 bg-white shadow-[0_8px_32px_-4px_rgba(15,28,63,0.16)] overflow-hidden">
            {item.subItems.map((sub) => {
              const badge = sub.status ? statusLabel[sub.status] : null;
              return (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={() => setOpen(false)}
                  className="flex items-start gap-3 px-4 py-3.5 hover:bg-[#F7F5F1] transition-colors group border-b border-slate-100/80 last:border-0"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900 group-hover:text-[#0F1C3F]">
                        {sub.label}
                      </span>
                      {badge && (
                        <span className={cn("text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded border", badge.cls)}>
                          {badge.text}
                        </span>
                      )}
                    </div>
                    {sub.description && (
                      <p className="mt-0.5 text-xs text-slate-500 leading-snug">{sub.description}</p>
                    )}
                  </div>
                </Link>
              );
            })}
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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "border-b border-slate-200/60 bg-white/90 backdrop-blur-xl shadow-[0_1px_16px_-4px_rgba(15,28,63,0.12)]"
          : "bg-[#F7F5F1]"
      )}
    >
      {/* Desktop */}
      <div className="hidden lg:flex items-center h-16 xl:h-18 max-w-[1280px] mx-auto px-6 xl:px-8">
        <Link href="/" className="flex-shrink-0 mr-10">
          <Logo href="/" size="lg" className="h-auto w-28 xl:w-32" />
        </Link>

        <nav className="flex items-center gap-7 flex-1" aria-label="Main navigation">
          {navigation.map((item) =>
            item.subItems ? (
              <DesktopDropdown key={item.href} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-150 relative",
                  "after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-[#0F1C3F] after:transition-transform after:duration-200 hover:after:scale-x-100",
                  pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/")
                    ? "text-[#0F1C3F] after:scale-x-100"
                    : "text-slate-500 hover:text-[#0F1C3F]"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Button asChild variant="primary" size="sm" className="ml-6 flex-shrink-0">
          <Link href={headerCTA.href}>{headerCTA.label}</Link>
        </Button>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <Logo href="/" size="lg" className="h-auto w-24 sm:w-28" />
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200/60 bg-white/98 backdrop-blur-xl">
            <div className="space-y-1 px-4 pb-6 pt-3">
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
                          "flex-1 min-h-[44px] flex items-center px-3 py-2.5 rounded-lg transition-colors text-sm font-semibold",
                          isActive
                            ? "text-[#0F1C3F] bg-slate-100"
                            : "text-slate-700 hover:bg-slate-50"
                        )}
                        onClick={() => !hasSubItems && setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {hasSubItems && (
                        <button
                          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900"
                          onClick={() => setMobileExpandedItem(isExpanded ? null : item.href)}
                          aria-label={isExpanded ? "Collapse" : "Expand"}
                        >
                          <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
                        </button>
                      )}
                    </div>

                    {hasSubItems && isExpanded && (
                      <div className="ml-4 mt-1 mb-2 space-y-1 pl-3 border-l border-slate-200">
                        {item.subItems!.map((sub) => {
                          const badge = sub.status ? statusLabel[sub.status] : null;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 min-h-[40px] px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                            >
                              <span className="flex-1">{sub.label}</span>
                              {badge && (
                                <span className={cn("text-[10px] font-semibold px-1.5 py-0.5 rounded border shrink-0", badge.cls)}>
                                  {badge.text}
                                </span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-4">
                <Button asChild variant="primary" className="w-full">
                  <Link href={headerCTA.href} onClick={() => setMobileMenuOpen(false)}>
                    {headerCTA.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
