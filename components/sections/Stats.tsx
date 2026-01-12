"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Stat {
  label: string;
  value: string;
  icon?: LucideIcon;
}

interface StatsProps {
  stats: Stat[];
  className?: string;
}

function animateValue(element: HTMLElement, start: number, end: number, duration: number, suffix: string = "") {
  const startTime = performance.now();
  
  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const current = Math.floor(start + (end - start) * progress);
    element.textContent = current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

export function Stats({ stats, className }: StatsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate numeric values
            entry.target.querySelectorAll("[data-value]").forEach((el) => {
              const element = el as HTMLElement;
              const value = element.getAttribute("data-value") || "";
              const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
              const suffix = value.replace(/[0-9.]/g, "");
              
              if (!isNaN(numericValue)) {
                animateValue(element, 0, numericValue, 2000, suffix);
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className={cn("py-20 lg:py-32 bg-white dark:bg-gray-950", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                {Icon && (
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2 bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                  <span data-value={stat.value}>{stat.value}</span>
                </div>
                <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
