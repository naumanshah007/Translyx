import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  icon?: LucideIcon;
}

interface StatsProps {
  stats: Stat[];
  className?: string;
}

export function Stats({ stats, className }: StatsProps) {
  return (
    <section className={cn("py-20 bg-gray-50 dark:bg-gray-900", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                {Icon && (
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                )}
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
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

