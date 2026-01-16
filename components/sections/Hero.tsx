"use client";

import Link from "next/link";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { GeometricShapes, PatternOverlay, FloatingIcon } from "@/components/ui/DecorativeElements";

interface HeroProps {
  headline: string;
  subheadline?: string;
  description: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  badge?: {
    text: string;
    icon?: React.ReactNode;
  };
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
    <section className={cn("relative py-24 lg:py-36 overflow-hidden", className)}>
      {/* Luminous Aurora Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_10%_-10%,rgba(34,211,238,0.45),transparent_60%)] opacity-80 animate-aurora" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_90%_0%,rgba(59,130,246,0.5),transparent_55%)] opacity-80 animate-aurora" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent,rgba(255,255,255,0.06))] opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-primary-900/40 to-slate-900/60" />

      {/* Pattern Overlay */}
      <PatternOverlay pattern="topo" opacity={0.08} className="text-white/30" />

      {/* Geometric Shapes */}
      <GeometricShapes variant="mixed" count={5} />

      {/* Floating Icons */}
      <FloatingIcon icon={Shield} position="top-left" size="md" animated />
      <FloatingIcon icon={Zap} position="top-right" size="sm" animated />
      <FloatingIcon icon={Users} position="bottom-left" size="sm" animated />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-xs uppercase tracking-[0.2em] text-white mb-8 shadow-[0_10px_30px_rgba(15,23,42,0.35)]">
              {badge.icon}
              {badge.text}
            </div>
          )}

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] mb-6 text-white">
            {subheadline && (
              <span className="text-cyan-200">{subheadline} </span>
            )}
            <span className="text-white">
              {headline}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-10">
            {description}
          </p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <Button asChild variant="gradient" size="lg" className="shadow-[0_18px_45px_rgba(56,189,248,0.35)]">
                  <Link href={primaryCTA.href}>
                    {primaryCTA.label}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border border-white/50 text-white hover:bg-white/10 font-semibold"
                >
                  <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
