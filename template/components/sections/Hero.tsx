"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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
    <section className={cn("relative py-20 lg:py-32", className)}>
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-cyan-400 mb-8">
              {badge.icon}
              {badge.text}
            </div>
          )}

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {subheadline && (
              <span className="text-white dark:text-gray-100">{subheadline} </span>
            )}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {headline}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            {description}
          </p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <Button asChild variant="gradient" size="lg">
                  <Link href={primaryCTA.href}>
                    {primaryCTA.label}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
              {secondaryCTA && (
                <Button asChild variant="outline" size="lg">
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

