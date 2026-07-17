import Image from "next/image";
import { BarChart3, CheckCircle2, FileCheck2, Microscope, UserCheck } from "lucide-react";

/** AI object-detection box with bright corner brackets — matches the homepage hero language. */
function DetectionBox({ className }: { className?: string }) {
  return (
    <span
      className={`absolute rounded-[3px] border border-cyan-300/80 shadow-[0_0_12px_rgba(34,211,238,0.7)] ${className ?? ""}`}
    >
      <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-cyan-200" />
      <span className="absolute -right-px -top-px h-2 w-2 border-r border-t border-cyan-200" />
      <span className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-cyan-200" />
      <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-cyan-200" />
    </span>
  );
}

/**
 * Aiforia hero visual — a large "slide viewer" glass panel built from the same
 * H&E slide asset and detection-box language as the homepage HeroVisual, so
 * the digital-pathology motif reads as one consistent system across the site.
 */
export function SlideViewerPanel() {
  return (
    <div className="glass-panel relative mx-auto w-full max-w-[520px] overflow-hidden rounded-2xl p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
          <Microscope className="h-3.5 w-3.5" />
          Aiforia pathology workspace
        </span>
        <span className="flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-emerald-300">
          <CheckCircle2 className="h-2.5 w-2.5" />
          Authorised
        </span>
      </div>

      <div className="mt-3 flex rounded-lg border border-white/10 bg-white/[0.04] p-1 text-[8px] font-semibold uppercase tracking-[0.13em] text-slate-400 sm:text-[9px]">
        <span className="flex-1 rounded-md bg-cyan-300/10 px-2 py-1.5 text-center text-cyan-100 ring-1 ring-cyan-300/20">Clinical Suites</span>
        <span className="flex-1 px-2 py-1.5 text-center">Aiforia Create</span>
      </div>

      <div className="relative mt-3 h-[220px] w-full overflow-hidden rounded-xl ring-1 ring-white/15 sm:h-[260px]">
        <Image
          src="/images/partners/aiforia-clinical.webp"
          alt="Aiforia clinical pathology image with AI-assisted tissue overlay"
          fill
          sizes="(min-width: 640px) 480px, 90vw"
          className="object-cover"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-cyan-300/10" />
        <DetectionBox className="left-[46%] top-[22%] h-16 w-16" />
        <DetectionBox className="right-[12%] bottom-[16%] h-11 w-11" />
        <span className="absolute bottom-2 left-2 rounded bg-[#06121f]/70 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-200 ring-1 ring-cyan-300/20 backdrop-blur-sm">
          Transparent AI overlay
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { icon: Microscope, label: "Case review" },
          { icon: BarChart3, label: "Quantitative AI" },
          { icon: FileCheck2, label: "Case reporting" },
        ].map(({ icon: Icon, label }) => (
          <span key={label} className="flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-white/[0.05] px-2 py-2 text-center text-[8px] font-medium leading-tight text-slate-100 sm:text-[9px]">
            <Icon className="h-3 w-3 shrink-0 text-cyan-300" />
            {label}
          </span>
        ))}
      </div>
      <p className="mt-2 flex items-center justify-center gap-1.5 text-[8px] text-slate-400">
        <UserCheck className="h-3 w-3 text-emerald-300" />
        Human review remains central · official product imagery from Aiforia
      </p>
    </div>
  );
}
