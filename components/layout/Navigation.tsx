"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation } from "@/config/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-all duration-200 hover:text-primary hover:tracking-[0.08em] uppercase",
              isActive
                ? "text-primary"
                : "text-gray-600 dark:text-gray-300"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
