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
    <section className={cn("relative py-20 lg:py-32 overflow-hidden", className)}>
      {/* Warm Professional Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-cyan-500">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-400/30 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <PatternOverlay pattern="grid" opacity={0.08} className="text-white/20" />

      {/* Geometric Shapes */}
      <GeometricShapes variant="mixed" count={4} />

      {/* Floating Icons */}
      <FloatingIcon icon={Shield} position="top-left" size="md" animated />
      <FloatingIcon icon={Zap} position="top-right" size="sm" animated />
      <FloatingIcon icon={Users} position="bottom-left" size="sm" animated />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full text-sm font-medium text-white mb-8 shadow-lg shadow-white/20">
              {badge.icon}
              {badge.text}
            </div>
          )}

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            {subheadline && (
              <span className="text-white">{subheadline} </span>
            )}
            <span className="text-white">
              {headline}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            {description}
          </p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <Button asChild variant="gradient" size="lg" className="shadow-lg">
                  <Link href={primaryCTA.href}>
                    {primaryCTA.label}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
              {secondaryCTA && (
                <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/20 font-semibold">
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
