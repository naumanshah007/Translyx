"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CTAProps {
  title: string;
  description?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function CTA({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  className,
}: CTAProps) {
  return (
    <section className={cn("relative py-20 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_15%_-10%,rgba(56,189,248,0.45),transparent_60%)] opacity-80 animate-aurora" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_0%,rgba(37,99,235,0.45),transparent_55%)] opacity-80 animate-aurora" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent,rgba(255,255,255,0.08))] opacity-60" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-white/80 mb-8">{description}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-slate-900 hover:bg-white font-bold shadow-[0_18px_40px_rgba(15,23,42,0.4)]"
            >
              <Link href={primaryCTA.href}>
                {primaryCTA.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
        </div>
      </div>
    </section>
  );
}
