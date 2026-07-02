import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface GovernanceCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  /**
   * "dark" — glass-panel treatment for use on a dark/midnight section.
   * "light" — plain white card for use on a light section.
   * "solid" — opaque navy card, for a dark-card-on-light-section moment
   * (e.g. a "clinical" band that sits between two dark sections).
   */
  tone?: "light" | "dark" | "solid";
  className?: string;
}

export function GovernanceCard({ icon: Icon, title, body, tone = "dark", className }: GovernanceCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
        tone === "dark" && "glass-panel hover:-translate-y-1 hover:ring-1 hover:ring-cyan-400/30",
        tone === "light" &&
          "border border-slate-200/80 bg-white shadow-[0_2px_16px_-6px_rgba(15,28,63,0.10)] hover:-translate-y-1 hover:border-slate-300",
        tone === "solid" &&
          "bg-[#0F1C3F] shadow-[0_10px_30px_-14px_rgba(15,28,63,0.5)] hover:-translate-y-1 hover:shadow-[0_20px_46px_-18px_rgba(15,28,63,0.6)]",
        className
      )}
    >
      {tone === "solid" && <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />}
      <span
        className={cn(
          "pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100",
          tone === "light" ? "bg-cyan-400/10" : "bg-cyan-400/20"
        )}
      />
      <span
        className={cn(
          "relative flex h-11 w-11 items-center justify-center rounded-xl",
          tone === "light" ? "bg-[#0F1C3F]/6" : "bg-white/10 ring-1 ring-inset ring-white/15"
        )}
      >
        <Icon className={cn("h-5 w-5", tone === "light" ? "text-[#0F1C3F]" : "text-cyan-300")} aria-hidden="true" />
      </span>
      <h3
        className={cn(
          "relative mt-4 font-display text-lg font-semibold",
          tone === "light" ? "text-[#0F1C3F]" : "text-white"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "relative mt-2 text-sm leading-relaxed",
          tone === "light" ? "text-slate-600" : "text-white/65"
        )}
      >
        {body}
      </p>
    </div>
  );
}
