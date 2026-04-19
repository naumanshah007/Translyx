"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CTAProps {
  title: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string; external?: boolean };
  className?: string;
}

export function CTA({ title, description, primaryCTA, secondaryCTA, className }: CTAProps) {
  return (
    <section className={cn("relative py-16 sm:py-20 overflow-hidden bg-[#0F1C3F]", className)}>
      {/* Single subtle accent */}
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_50%,rgba(34,211,238,0.07),transparent_70%)] pointer-events-none" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-display-sm font-semibold text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className={cn("text-base sm:text-lg text-white/65 leading-relaxed", (primaryCTA || secondaryCTA) ? "mb-8" : "mb-0")}>
              {description}
            </p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              {primaryCTA && (
                <Button asChild variant="secondary" size="lg" className="bg-white text-[#0F1C3F] hover:bg-[#F7F5F1] border-0 w-full sm:w-auto">
                  <Link href={primaryCTA.href}>
                    {primaryCTA.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              {secondaryCTA && (
                secondaryCTA.external ? (
                  <Button asChild variant="ghost" size="lg" className="text-white/75 hover:text-white hover:bg-white/8 border border-white/18 w-full sm:w-auto">
                    <a href={secondaryCTA.href} target="_blank" rel="noopener noreferrer">
                      {secondaryCTA.label}
                    </a>
                  </Button>
                ) : (
                  <Button asChild variant="ghost" size="lg" className="text-white/75 hover:text-white hover:bg-white/8 border border-white/18 w-full sm:w-auto">
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
