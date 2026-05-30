import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface TrustChipProps {
  icon: LucideIcon;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}

export function TrustChip({ icon: Icon, label, tone = "dark", className }: TrustChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium transition-colors",
        tone === "dark"
          ? "glass-panel text-slate-200 hover:text-white"
          : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-slate-300",
        className
      )}
    >
      <Icon
        className={cn(
          "h-3.5 w-3.5 shrink-0",
          tone === "dark" ? "text-cyan-300" : "text-[#0891B2]"
        )}
      />
      {label}
    </span>
  );
}
