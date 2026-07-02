import { Stethoscope, ScanLine, ClipboardList, Truck, Building2, Microscope, Barcode, Camera, Boxes } from "lucide-react";

const journey = [
  { icon: Stethoscope, label: "Operating room" },
  { icon: ScanLine, label: "Specimen capture" },
  { icon: ClipboardList, label: "Documentation" },
  { icon: Truck, label: "Transport" },
  { icon: Building2, label: "Lab accession" },
  { icon: Microscope, label: "Pathology reporting" },
];

const traceabilityNodes = [
  { icon: Barcode, label: "Barcode identification" },
  { icon: Camera, label: "Computer vision capture" },
  { icon: Boxes, label: "3D specimen modelling" },
];

/**
 * Algoscope's signature visual — the surgery-to-pathology specimen journey,
 * traced end to end, with a subtle travelling highlight along the connector
 * to suggest continuous traceability rather than a static handover chain.
 */
export function SampleJourneyDiagram() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-[#0F1C3F] to-[#0B1430] p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />

      <div className="relative grid grid-cols-3 gap-y-8 sm:grid-cols-6">
        {journey.map(({ icon: Icon, label }, i) => (
          <div key={label} className="relative flex flex-col items-center text-center">
            {i < journey.length - 1 && (
              <span className="absolute left-1/2 top-6 hidden h-px w-full overflow-hidden sm:block">
                <span className="absolute inset-0 bg-gradient-to-r from-violet-400/40 to-cyan-400/20" />
                <span
                  className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-travel"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
              </span>
            )}
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-violet-300/40 bg-violet-400/15 text-violet-200 shadow-[0_0_16px_rgba(139,92,246,0.35)]">
              <Icon className="h-5 w-5" />
            </span>
            <p className="mt-2.5 text-[11px] font-semibold leading-snug text-slate-200">{label}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
        {traceabilityNodes.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 rounded-xl bg-white/[0.05] px-3.5 py-2.5">
            <Icon className="h-4 w-4 shrink-0 text-cyan-300" />
            <span className="text-[11px] font-medium text-slate-200">{label}</span>
          </div>
        ))}
      </div>
      <p className="relative mt-5 text-center text-[11px] text-slate-400">
        Traceability nodes capture each step so the laboratory sees the full surgical context with every specimen.
      </p>
    </div>
  );
}
