import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductAccent } from "@/config/products";
import type { PipelineCapability } from "@/config/pipelineCapabilities";
import { stageLabels } from "@/config/pipelineCapabilities";
import { getProductIcon } from "@/lib/productIcons";
import { StageRail } from "@/components/ui/StageRail";

const accentMap: Record<ProductAccent, { color: string; soft: string; glow: string; text: string }> = {
  cyan: { color: "#22D3EE", soft: "rgba(34,211,238,0.10)", glow: "rgba(34,211,238,0.30)", text: "text-cyan-600" },
  violet: { color: "#8B5CF6", soft: "rgba(139,92,246,0.10)", glow: "rgba(139,92,246,0.28)", text: "text-violet-600" },
  teal: { color: "#2DD4BF", soft: "rgba(45,212,191,0.10)", glow: "rgba(45,212,191,0.28)", text: "text-teal-600" },
  emerald: { color: "#34D399", soft: "rgba(52,211,153,0.10)", glow: "rgba(52,211,153,0.28)", text: "text-emerald-600" },
  sky: { color: "#38BDF8", soft: "rgba(56,189,248,0.10)", glow: "rgba(56,189,248,0.28)", text: "text-sky-600" },
};

/**
 * Card for Translyx pipeline capabilities. Deliberately quieter than
 * ProductCard — dashed border + stage chip signal "not a launched product".
 */
export function PipelineCapabilityCard({
  capability,
  className,
}: {
  capability: PipelineCapability;
  className?: string;
}) {
  const a = accentMap[capability.accent ?? "cyan"];
  const Icon = getProductIcon(capability.icon);
  const stage = stageLabels[capability.stage];

  const style = { "--accent": a.color, "--glow": a.glow } as React.CSSProperties;

  return (
    <Link
      href={capability.href}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-slate-300/80 bg-white/80 p-6",
        "shadow-[0_2px_12px_-6px_rgba(15,28,63,0.08)] transition-all duration-300",
        "hover:-translate-y-1 hover:border-solid hover:border-[color:var(--accent)] hover:shadow-[0_24px_60px_-30px_var(--glow)]",
        className
      )}
      style={style}
    >
      <div className="relative flex items-start justify-between">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ring-slate-200/70 transition-transform duration-300 group-hover:scale-105"
          style={{ background: a.soft }}
        >
          <Icon className="h-5 w-5" style={{ color: a.color }} aria-hidden="true" />
        </span>
        <span
          className={cn("rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-wide", stage.className)}
        >
          {stage.text}
        </span>
      </div>

      <p className="relative mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        Pipeline capability
      </p>
      <h3 className="relative mt-1.5 font-display text-lg font-semibold text-[#0F1C3F]">{capability.title}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-600">{capability.tagline}</p>

      <StageRail stage={capability.stage} accent={capability.accent} compact className="relative mt-5 mb-1" />

      <span className={cn("mt-3 inline-flex items-center gap-1.5 text-sm font-semibold", a.text)}>
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
