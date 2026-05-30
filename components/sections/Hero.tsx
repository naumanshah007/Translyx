"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  headline: string;
  highlight?: string;
  subheadline?: string;
  description: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string; external?: boolean };
  badge?: { text: string; icon?: React.ReactNode };
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
  className,
}: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-midnight py-20 sm:py-24 md:py-28", className)}>
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50" />
      <div className="pointer-events-none absolute -top-24 right-[14%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_65%)] blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 left-[10%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12),transparent_65%)] blur-2xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <div className="mb-7 inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200 will-fade reveal">
              {badge.icon}
              {badge.text}
            </div>
          )}

          <h1
            className="font-display text-[2.4rem] font-semibold leading-[1.06] tracking-[-0.02em] text-white will-fade reveal sm:text-[3rem] md:text-[3.4rem]"
            style={{ animationDelay: "0.05s" }}
          >
            {subheadline && (
              <span className="mb-3 block font-display text-2xl font-normal italic text-cyan-300 sm:text-3xl">
                {subheadline}
              </span>
            )}
            {headline}
            {highlight && <span className="text-gradient-brand"> {highlight}</span>}
          </h1>

          <p
            className={cn(
              "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 will-fade reveal sm:text-lg",
              primaryCTA || secondaryCTA ? "mb-10" : "mb-0"
            )}
            style={{ animationDelay: "0.12s" }}
          >
            {description}
          </p>

          {(primaryCTA || secondaryCTA) && (
            <div
              className="flex flex-col justify-center gap-3 will-fade reveal sm:flex-row"
              style={{ animationDelay: "0.2s" }}
            >
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-[#06121f] shadow-[0_8px_30px_-6px_rgba(34,211,238,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_38px_-6px_rgba(124,58,237,0.55)]"
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
                    className="inline-flex items-center justify-center gap-2 rounded-xl glass-panel px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.14]"
                  >
                    {secondaryCTA.label}
                  </a>
                ) : (
                  <Link
                    href={secondaryCTA.href}
                    className="inline-flex items-center justify-center gap-2 rounded-xl glass-panel px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.14]"
                  >
                    {secondaryCTA.label}
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
