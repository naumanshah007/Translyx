"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface HeroProps {
  headline: string;
  subheadline?: string;
  description: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string; external?: boolean };
  badge?: { text: string; icon?: React.ReactNode };
  enhancedAurora?: boolean;
  decorativeShapes?: boolean;
  className?: string;
}

export function Hero({
  headline,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  className,
}: HeroProps) {
  return (
    <section className={cn("relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden", className)}>
      {/* Clean dark navy base */}
      <div className="absolute inset-0 bg-[#0F1C3F]" />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Single restrained accent glow — bottom right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.10),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/8 border border-white/15 rounded-full text-[11px] uppercase tracking-[0.22em] text-slate-300 mb-8 animate-fade-in">
              {badge.icon}
              {badge.text}
            </div>
          )}

          {/* Headline — editorial Fraunces */}
          <h1 className="text-display font-semibold text-white mb-6 animate-fade-in-up">
            {subheadline && (
              <span className="block text-[#22D3EE] italic text-display-sm mb-3 font-normal">{subheadline}</span>
            )}
            {headline}
          </h1>

          {/* Description */}
          <p
            className={cn(
              "text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-body",
              (primaryCTA || secondaryCTA) ? "mb-10" : "mb-0"
            )}
          >
            {description}
          </p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {primaryCTA && (
                <Button asChild variant="secondary" size="lg" className="bg-white text-[#0F1C3F] hover:bg-[#F7F5F1] border-0 shadow-[0_4px_20px_rgba(255,255,255,0.15)]">
                  <Link href={primaryCTA.href}>
                    {primaryCTA.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              {secondaryCTA && (
                secondaryCTA.external ? (
                  <Button asChild variant="ghost" size="lg" className="text-white/80 hover:text-white hover:bg-white/8 border border-white/20">
                    <a href={secondaryCTA.href} target="_blank" rel="noopener noreferrer" aria-label={`${secondaryCTA.label} (opens in new tab)`}>
                      {secondaryCTA.label}
                    </a>
                  </Button>
                ) : (
                  <Button asChild variant="ghost" size="lg" className="text-white/80 hover:text-white hover:bg-white/8 border border-white/20">
                    <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
                  </Button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
