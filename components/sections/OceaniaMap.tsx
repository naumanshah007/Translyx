import { MapPin } from "lucide-react";
import { BrandMark } from "@/components/ui/Brand";

interface RegionNode {
  label: string;
  detail: string;
  status: "primary" | "expanding";
}

const defaultNodes: RegionNode[] = [
  { label: "New Zealand", detail: "National · primary territory", status: "primary" },
  { label: "Australia", detail: "Expanding", status: "expanding" },
  { label: "Pacific Islands", detail: "Expanding", status: "expanding" },
];

/**
 * Abstract regional-network visual — Translyx as the hub connecting to New
 * Zealand, Australia, and the Pacific. Deliberately schematic (dots + glow,
 * matching the site's existing network motifs) rather than a literal map, so
 * it never implies precision it can't back up.
 */
export function OceaniaMap({ nodes = defaultNodes }: { nodes?: RegionNode[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-deep p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
      <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-center sm:gap-0">
        {/* Hub */}
        <div className="relative z-10 flex flex-col items-center">
          <span className="absolute h-20 w-20 rounded-full bg-cyan-400/15 blur-2xl" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-white/[0.06]">
            <BrandMark glow className="h-7 w-auto" />
          </span>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200/70">Translyx</p>
        </div>

        {/* Connectors + nodes */}
        <div className="grid grid-cols-1 gap-6 sm:ml-8 sm:grid-cols-3 sm:gap-8">
          {nodes.map((n) => (
            <div key={n.label} className="relative flex items-center gap-3 sm:flex-col sm:items-center sm:text-center">
              <span
                className="hidden h-px w-8 bg-gradient-to-r from-cyan-400/40 to-transparent sm:absolute sm:-left-8 sm:top-1/2 sm:block sm:w-8"
                aria-hidden="true"
              />
              <span
                className={
                  n.status === "primary"
                    ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-400/15 shadow-[0_0_16px_rgba(34,211,238,0.35)]"
                    : "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-white/25 bg-white/[0.04]"
                }
              >
                <MapPin className={n.status === "primary" ? "h-4 w-4 text-cyan-200" : "h-4 w-4 text-slate-400"} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">{n.label}</span>
                <span className="block text-xs text-slate-400">{n.detail}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
