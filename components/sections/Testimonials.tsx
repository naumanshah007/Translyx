"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
}

interface TestimonialsProps {
  title?: string;
  testimonials: Testimonial[];
  className?: string;
}

export function Testimonials({
  title = "What Industry Professionals Say",
  testimonials,
  className,
}: TestimonialsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleTestimonials((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={cn("py-20 lg:py-32 bg-gray-50 dark:bg-gray-900", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleTestimonials.has(index);
            
            return (
              <Card
                key={index}
                data-index={index}
                variant="default"
                className={cn(
                  "p-6 transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                  "hover:shadow-lg"
                )}
              >
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <svg
                      className="w-8 h-8 text-primary-400 mb-4"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                    </svg>
                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {testimonial.avatar ? (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center shadow-lg">
                        <span className="text-lg font-semibold text-white">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center shadow-lg">
                        <span className="text-lg font-semibold text-white">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                        {testimonial.company && ` at ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
