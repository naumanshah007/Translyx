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
    <section className={cn("py-20 bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-500", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-white/90 mb-8">{description}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" size="lg" className="bg-white text-primary-800 hover:bg-gray-50 font-bold shadow-lg">
              <Link href={primaryCTA.href}>
                {primaryCTA.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {secondaryCTA && (
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/20 font-semibold">
                <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
