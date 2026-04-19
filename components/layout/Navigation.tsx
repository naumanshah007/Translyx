"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation } from "@/config/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-150 relative",
            "after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-[#0F1C3F] after:transition-transform after:duration-200 hover:after:scale-x-100",
            pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/")
              ? "text-[#0F1C3F] after:scale-x-100"
              : "text-slate-500 hover:text-[#0F1C3F]"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
