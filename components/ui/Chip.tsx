import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ChipTone = "neutral" | "cyan" | "violet" | "teal" | "emerald" | "amber" | "sky";

const toneStyles: Record<ChipTone, string> = {
  neutral: "bg-slate-100 text-slate-500 border-slate-200",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
  violet: "bg-violet-50 text-violet-700 border-violet-200",
  teal: "bg-teal-50 text-teal-700 border-teal-200",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  sky: "bg-sky-50 text-sky-700 border-sky-200",
};

const toneStylesDark: Record<ChipTone, string> = {
  neutral: "border-white/15 bg-white/[0.06] text-slate-300",
  cyan: "border-cyan-400/25 bg-cyan-400/10 text-cyan-200",
  violet: "border-violet-400/25 bg-violet-400/10 text-violet-200",
  teal: "border-teal-400/25 bg-teal-400/10 text-teal-200",
  emerald: "border-emerald-400/25 bg-emerald-400/10 text-emerald-200",
  amber: "border-amber-400/25 bg-amber-400/10 text-amber-200",
  sky: "border-sky-400/25 bg-sky-400/10 text-sky-200",
};

interface ChipProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  tone?: ChipTone;
  dark?: boolean;
  /** Solid pill used for active filter/tab state */
  active?: boolean;
  className?: string;
}

/**
 * Unified small-pill primitive — status badges, stage badges, trust chips,
 * and topic tags all share this shape so hover/press/active states stay
 * consistent across the site instead of each surface hand-rolling its own.
 */
export function Chip({ children, icon: Icon, tone = "neutral", dark = false, active = false, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide transition-colors",
        dark ? toneStylesDark[tone] : toneStyles[tone],
        active && (dark ? "ring-1 ring-white/20" : "ring-1 ring-[#0F1C3F]/10"),
        className
      )}
    >
      {Icon && <Icon className="h-3 w-3 shrink-0" />}
      {children}
    </span>
  );
}

interface ChipButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

/** Interactive chip for filter rails (topic chips, inquiry-type pickers). */
export function ChipButton({ children, onClick, active = false, className }: ChipButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors",
        active
          ? "border-transparent bg-[#0891B2] text-white shadow-[0_4px_14px_-4px_rgba(8,145,178,0.55)]"
          : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50",
        className
      )}
    >
      {children}
    </button>
  );
}
