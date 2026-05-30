import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface GovernanceCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  tone?: "light" | "dark";
  className?: string;
}

export function GovernanceCard({ icon: Icon, title, body, tone = "dark", className }: GovernanceCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
        tone === "dark"
          ? "glass-panel hover:-translate-y-1 hover:ring-1 hover:ring-cyan-400/30"
          : "border border-slate-200/80 bg-white shadow-[0_2px_16px_-6px_rgba(15,28,63,0.10)] hover:-translate-y-1 hover:border-slate-300",
        className
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100",
          tone === "dark" ? "bg-cyan-400/20" : "bg-cyan-400/10"
        )}
      />
      <span
        className={cn(
          "relative flex h-11 w-11 items-center justify-center rounded-xl",
          tone === "dark" ? "bg-white/10 ring-1 ring-inset ring-white/15" : "bg-[#0F1C3F]/6"
        )}
      >
        <Icon className={cn("h-5 w-5", tone === "dark" ? "text-cyan-300" : "text-[#0F1C3F]")} aria-hidden="true" />
      </span>
      <h3
        className={cn(
          "relative mt-4 font-display text-lg font-semibold",
          tone === "dark" ? "text-white" : "text-[#0F1C3F]"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "relative mt-2 text-sm leading-relaxed",
          tone === "dark" ? "text-white/65" : "text-slate-600"
        )}
      >
        {body}
      </p>
    </div>
  );
}
