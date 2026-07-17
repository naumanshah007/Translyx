import Image from "next/image";
import { ArrowRight, Boxes, CheckCircle2, ScanLine } from "lucide-react";

const modules = [
  {
    name: "AccessPath",
    eyebrow: "Verified intake",
    description: "Requisition and vial data structured at reception",
    image: "/images/partners/algoscope-accesspath.webp",
    icon: ScanLine,
  },
  {
    name: "VoxelPath",
    eyebrow: "Vision-assisted grossing",
    description: "Morphometry, imaging and chain-of-custody evidence",
    image: "/images/partners/algoscope-voxelpath.webp",
    icon: Boxes,
  },
];

/** Product-specific Algoscope visual using imagery published on Algoscope's official product pages. */
export function AlgoscopeProductPanel() {
  return (
    <div className="glass-panel relative mx-auto w-full max-w-[560px] overflow-hidden rounded-2xl p-3.5 sm:p-5">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="relative flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-violet-100/75 sm:text-[10px] sm:tracking-[0.18em]">
          <ScanLine className="h-3.5 w-3.5 text-violet-300" />
          Algoscope workflow modules
        </span>
        <span className="flex shrink-0 items-center gap-1 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-2 py-1 text-[7px] font-semibold uppercase tracking-wide text-emerald-200 sm:text-[8px]">
          <CheckCircle2 className="h-2.5 w-2.5" />
          Human validated
        </span>
      </div>

      <div className="relative mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-3">
        {modules.map(({ name, eyebrow, description, image, icon: Icon }) => (
          <div key={name} className="overflow-hidden rounded-xl border border-white/15 bg-[#F7FAFC] shadow-[0_18px_45px_-25px_rgba(2,8,23,0.9)]">
            <div className="relative h-[112px] bg-white sm:h-[158px]">
              <Image src={image} alt={`${name} product interface published by Algoscope`} fill sizes="(min-width: 640px) 250px, 44vw" className="object-contain p-1.5 sm:p-2" />
              <span className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
            </div>
            <div className="relative -mt-3 p-3 pt-0 sm:p-4 sm:pt-0">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span>
                  <span className="block text-[7px] font-semibold uppercase tracking-[0.14em] text-violet-700 sm:text-[8px]">{eyebrow}</span>
                  <span className="block font-display text-sm font-semibold text-[#0F1C3F] sm:text-base">{name}</span>
                </span>
              </div>
              <p className="mt-2 hidden text-[10px] leading-snug text-slate-600 sm:block">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-slate-200 sm:mt-4 sm:text-[9px] sm:tracking-[0.15em]">
        <span>Verified intake</span>
        <ArrowRight className="h-3 w-3 text-violet-300" />
        <span>Traceable data</span>
        <ArrowRight className="h-3 w-3 text-cyan-300" />
        <span>Digital evidence</span>
      </div>

      <p className="relative mt-2 text-center text-[7px] uppercase tracking-[0.16em] text-slate-400 sm:text-[8px]">
        Official product imagery · Algoscope
      </p>
    </div>
  );
}
