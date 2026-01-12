import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

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
  title = "What Our Customers Say",
  testimonials,
  className,
}: TestimonialsProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="pt-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  {testimonial.avatar && (
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-lg font-semibold">
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
          ))}
        </div>
      </div>
    </section>
  );
}

