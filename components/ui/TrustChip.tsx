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
        "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5",
        tone === "dark"
          ? "glass-panel text-slate-200 hover:text-white hover:ring-1 hover:ring-cyan-300/30"
          : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-cyan-300/60 hover:shadow-[0_8px_20px_-10px_rgba(8,145,178,0.35)]",
        className
      )}
    >
      <Icon
        className={cn(
          "h-3.5 w-3.5 shrink-0",
          tone === "dark" ? "text-cyan-300" : "text-[#0E7490]"
        )}
      />
      {label}
    </span>
  );
}
