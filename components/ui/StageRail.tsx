import { cn } from "@/lib/utils";
import type { ProductAccent } from "@/config/products";
import type { CapabilityStage } from "@/config/pipelineCapabilities";

const accentColor: Record<ProductAccent, string> = {
  cyan: "#22D3EE",
  violet: "#8B5CF6",
  teal: "#2DD4BF",
  emerald: "#34D399",
  sky: "#38BDF8",
};

const railStages: { key: CapabilityStage; label: string }[] = [
  { key: "evaluation", label: "Evaluation" },
  { key: "development", label: "Development" },
  { key: "future", label: "Future launch decision" },
];

const stageIndex: Record<CapabilityStage, number> = { evaluation: 0, development: 1, future: 2 };

/**
 * Visual maturity rail for pipeline capabilities. "Concept" always reads as
 * passed (every capability here is at least a defined concept); the final
 * node is deliberately labelled "Future launch decision" rather than
 * "Launch" so the rail never implies a capability is shipping or available.
 */
export function StageRail({
  stage,
  accent = "cyan",
  compact = false,
  className,
}: {
  stage: CapabilityStage;
  accent?: ProductAccent;
  compact?: boolean;
  className?: string;
}) {
  const color = accentColor[accent];
  const activeIdx = stageIndex[stage];
  const nodes = [{ key: "concept" as const, label: "Concept" }, ...railStages];

  return (
    <div className={cn("flex items-center", className)}>
      {nodes.map((node, i) => {
        const isConcept = node.key === "concept";
        const passed = isConcept || i - 1 < activeIdx;
        const isCurrent = !isConcept && i - 1 === activeIdx;
        const filled = isConcept || passed || isCurrent;
        return (
          <div key={node.key} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <span
                className={cn(
                  "rounded-full transition-colors",
                  compact ? "h-1.5 w-1.5" : "h-2 w-2",
                  isCurrent && "ring-2 ring-offset-1"
                )}
                style={{
                  background: filled ? color : "rgba(148,163,184,0.35)",
                  boxShadow: isCurrent ? `0 0 0 3px ${color}22` : undefined,
                }}
              />
              {!compact && (
                <span
                  className={cn(
                    "whitespace-nowrap text-[9px] font-semibold uppercase tracking-wide",
                    isCurrent ? "text-[#0F1C3F]" : "text-slate-600"
                  )}
                >
                  {node.label}
                </span>
              )}
            </div>
            {i < nodes.length - 1 && (
              <span
                className="mx-1.5 h-px flex-1"
                style={{ background: i - 1 < activeIdx || isConcept ? `${color}55` : "rgba(148,163,184,0.25)" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
