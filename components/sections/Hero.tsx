import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  headline: string;
  highlight?: string;
  subheadline?: string;
  description: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string; external?: boolean };
  badge?: { text: string; icon?: ReactNode };
  visual?: ReactNode;
  className?: string;
}

export function Hero({
  headline,
  highlight,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  visual,
  className,
}: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-black/[0.06] bg-white", className)}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(165,14,40,0.05),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mx-auto max-w-[1180px] py-12 sm:py-14 lg:py-16",
            visual &&
              "grid items-center gap-9 lg:max-w-[1320px] lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)] lg:gap-8 xl:gap-12"
          )}
        >
          <div className={cn("max-w-[860px]", visual && "lg:max-w-[760px]")}>
            {badge && (
              <div className="mb-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                {badge.icon ?? <Sparkles className="h-3.5 w-3.5 text-cyan-700" />}
                {badge.text}
              </div>
            )}

            <h1 className="text-balance font-display text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.025em] text-[#0B0B0C] sm:text-[2.85rem] lg:text-[3.2rem]">
              {subheadline && <span className="mb-2 block text-lg font-normal text-cyan-700 sm:text-xl">{subheadline}</span>}
              {headline}
              {highlight && <span className="text-cyan-700"> {highlight}</span>}
            </h1>

            <p className="mt-5 max-w-[760px] text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>

            {(primaryCTA || secondaryCTA) && (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {primaryCTA && (
                  <Link
                    href={primaryCTA.href}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#A50E28] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#860B20]"
                  >
                    {primaryCTA.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                {secondaryCTA &&
                  (secondaryCTA.external ? (
                    <a
                      href={secondaryCTA.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-black/15 text-[#0B0B0C] px-5 py-2.5 text-sm font-semibold text-[#0B0B0C] transition-colors hover:bg-black/[0.08]"
                    >
                      {secondaryCTA.label}
                    </a>
                  ) : (
                    <Link
                      href={secondaryCTA.href}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-black/15 text-[#0B0B0C] px-5 py-2.5 text-sm font-semibold text-[#0B0B0C] transition-colors hover:bg-black/[0.08]"
                    >
                      {secondaryCTA.label}
                    </Link>
                  ))}
              </div>
            )}
          </div>

          {visual && (
            <div className="will-fade reveal" style={{ animationDelay: "0.12s" }}>
              {visual}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
