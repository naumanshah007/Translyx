"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import type { NavItem, NavSubItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

/** Status dot colors — product availability + pipeline capability stages */
export const statusDot: Record<string, string> = {
  available: "bg-emerald-400",
  pilot: "bg-amber-400",
  pipeline: "bg-slate-400",
  evaluation: "bg-cyan-400",
  development: "bg-violet-400",
  future: "bg-slate-400",
};

function DropdownEntry({ sub, onNavigate }: { sub: NavSubItem; onNavigate: () => void }) {
  return (
    <Link
      href={sub.href}
      onClick={onNavigate}
      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.06]"
    >
      {sub.status && (
        <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", statusDot[sub.status])} />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-100 group-hover:text-white">
            {sub.label}
          </span>
          {sub.badge && (
            <span className="rounded border border-white/10 bg-white/[0.06] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-cyan-300/80">
              {sub.badge}
            </span>
          )}
        </div>
        {sub.description && (
          <p className="mt-0.5 text-xs leading-snug text-slate-400">{sub.description}</p>
        )}
      </div>
    </Link>
  );
}

/**
 * Desktop nav dropdown — hover-triggered dark glass panel.
 * Consecutive subItems sharing a `group` value render under one section heading.
 */
export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.href) && item.href !== "/";

  const close = () => setOpen(false);

  // Partition subItems into ordered sections by group label (undefined = ungrouped)
  const sections: { group?: string; items: NavSubItem[] }[] = [];
  for (const sub of item.subItems ?? []) {
    const last = sections[sections.length - 1];
    if (last && last.group === sub.group) {
      last.items.push(sub);
    } else {
      sections.push({ group: sub.group, items: [sub] });
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1 whitespace-nowrap text-[13px] font-medium transition-colors duration-150",
          isActive ? "text-white" : "text-slate-300 hover:text-white"
        )}
      >
        {item.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")} />
      </Link>
      {open && item.subItems && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
          <div className="w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#0B1430]/95 p-2 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
            {sections.map((section, i) => (
              <div key={section.group ?? `section-${i}`}>
                {section.group && (
                  <p className={cn(
                    "px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500",
                    i === 0 ? "pt-2" : "mt-1 border-t border-white/[0.06] pt-3"
                  )}>
                    {section.group}
                  </p>
                )}
                {section.items.map((sub) => (
                  <DropdownEntry key={sub.href} sub={sub} onNavigate={close} />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
