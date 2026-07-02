import Image from "next/image";
import { Microscope, CheckCircle2, UserCheck } from "lucide-react";

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
          Digital pathology viewer
        </span>
        <span className="flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-emerald-300">
          <CheckCircle2 className="h-2.5 w-2.5" />
          Authorised partner
        </span>
      </div>

      <div className="relative mt-4 h-[220px] w-full overflow-hidden rounded-xl ring-1 ring-white/15 sm:h-[260px]">
        <Image
          src="/digital-pathology-slide.webp"
          alt="Digital pathology slide with AI-assisted region detection"
          fill
          sizes="(min-width: 640px) 480px, 90vw"
          className="object-cover"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-cyan-300/10" />
        <DetectionBox className="left-[46%] top-[22%] h-16 w-16" />
        <DetectionBox className="left-[14%] top-[52%] h-12 w-12" />
        <DetectionBox className="right-[10%] bottom-[16%] h-10 w-10" />
        <span className="absolute bottom-2 left-2 rounded bg-[#06121f]/70 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-200 ring-1 ring-cyan-300/20 backdrop-blur-sm">
          AI-assisted region detection
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl bg-white/[0.05] px-3.5 py-2.5">
        <span className="flex items-center gap-2 text-[11px] font-medium text-slate-100">
          <UserCheck className="h-3.5 w-3.5 text-cyan-300" />
          Reviewed by a pathologist before sign-off
        </span>
      </div>
    </div>
  );
}
