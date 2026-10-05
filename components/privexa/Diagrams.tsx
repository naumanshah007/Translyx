import {
  AudioLines,
  BookOpen,
  FileText,
  Image as ImageIcon,
  Layers,
  MessageSquareText,
  Microscope,
} from "lucide-react";
import { howItWorks, modalities, providers, type ModalityKey } from "@/config/privexa";
import { StatusBadge } from "@/components/privexa/ui";
import { cn } from "@/lib/utils";

const modalityIcon: Record<ModalityKey, React.ComponentType<{ className?: string }>> = {
  text: MessageSquareText,
  documents: FileText,
  knowledge: BookOpen,
  images: ImageIcon,
  "large-images": Layers,
  wsi: Microscope,
  audio: AudioLines,
};

/** Enterprise data → Privexa control boundary → approved AI → controlled result. */
export function BoundaryDiagram({ className }: { className?: string }) {
  const stages = ["Detect", "Policy", "Protect", "Approve", "Audit"];
  return (
    <div className={cn("relative", className)} role="img" aria-label="Enterprise data passes through the Privexa control boundary — detect, policy, protect, approve, audit — before reaching approved AI models, and a controlled result returns.">
      <div className="grid gap-3 lg:grid-cols-[1fr_auto_1.25fr_auto_1fr] lg:items-stretch" aria-hidden>
        <div className="rounded-2xl border border-black/10 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">Enterprise data</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {["Text", "Documents", "Images", "Audio"].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <span className="h-px w-3 bg-slate-600" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <FlowLine />

        <div className="relative rounded-2xl border border-[#A50E28]/40 bg-[#A50E28]/[0.03] p-5 shadow-[0_0_0_1px_rgba(165,14,40,0.06),0_30px_80px_-40px_rgba(165,14,40,0.35)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A50E28]">Privexa control boundary</p>
          <ol className="mt-4 flex flex-wrap gap-1.5">
            {stages.map((s, i) => (
              <li
                key={s}
                className="px-boundary-step min-w-[72px] flex-1 rounded-lg border border-black/10 bg-white px-2 py-3 text-center text-[11px] font-medium text-slate-800"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                {s}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs leading-relaxed text-slate-600">
            Organisation-owned policy. Only the protected representation crosses.
          </p>
        </div>

        <FlowLine />

        <div className="rounded-2xl border border-black/10 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">Approved AI</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {providers.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="h-px w-3 bg-slate-600" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-3 rounded-2xl border border-emerald-600/20 px-5 py-3 text-center text-xs text-slate-600" aria-hidden>
        <span className="font-semibold uppercase tracking-[0.18em] text-emerald-700">Controlled result</span>
        <span className="mx-2 text-slate-600">·</span>
        reconstructed for authorised users, inside the boundary
      </div>
    </div>
  );
}

function FlowLine() {
  return (
    <div className="flex items-center justify-center py-1 lg:px-1 lg:py-0">
      <div className="relative h-8 w-px overflow-hidden bg-black/10 lg:h-px lg:w-10">
        <span className="px-flow absolute inset-0 bg-gradient-to-b from-transparent via-[#A50E28] to-transparent lg:bg-gradient-to-r" />
      </div>
    </div>
  );
}

export function HowItWorks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <ol className="relative grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-5">
      {howItWorks.map((s, i) => (
        <li
          key={s.step}
          className={cn("px-step relative p-6 sm:p-7", tone === "dark" ? "bg-white" : "bg-white")}
          style={{ animationDelay: `${i * 0.9}s` }}
        >
          <span className="font-mono text-xs text-[#A50E28]">{s.step}</span>
          <h3 className="mt-6 text-lg font-semibold tracking-tight text-[#0B0B0C]">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
          <span className="px-step-bar absolute inset-x-0 top-0 h-px bg-[#A50E28]" aria-hidden style={{ animationDelay: `${i * 0.9}s` }} />
        </li>
      ))}
    </ol>
  );
}

export function ModalityGrid() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
      {modalities.map((m, i) => {
        const Icon = modalityIcon[m.key];
        const spotlight = m.key === "wsi";
        return (
          <li
            key={m.key}
            className={cn(
              "flex flex-col justify-between gap-8 bg-[#F6F6F7] p-6 sm:p-7",
              spotlight && "lg:col-span-2",
              i === 0 && "lg:col-span-1"
            )}
          >
            <div>
              <Icon className={cn("h-5 w-5", spotlight ? "text-[#A50E28]" : "text-slate-600")} aria-hidden />
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-[#0B0B0C]">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.body}</p>
            </div>
            <StatusBadge status={m.status} className="self-start" />
          </li>
        );
      })}
    </ul>
  );
}

/** Whole-slide privacy flow — identity-bearing surfaces, not tissue morphology. */
export function WsiFlow() {
  const surfaces = ["Label", "Macro", "Thumbnail", "Metadata"];
  return (
    <ol className="space-y-2" aria-label="Whole-slide image privacy flow">
      <FlowStep title="Whole-slide image" body="Gigapixel pyramidal slide, as acquired." />
      <Arrow />
      <li className="rounded-2xl border border-black/10 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">Associated privacy surfaces</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {surfaces.map((s, i) => (
            <span
              key={s}
              className="px-surface rounded-md border border-black/15 px-3 py-1.5 text-xs font-medium text-slate-800"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {s}
            </span>
          ))}
        </div>
      </li>
      <Arrow />
      <FlowStep title="Privexa review" body="Automatic privacy controls · reviewer-added regions" accent />
      <Arrow />
      <FlowStep title="Protected WSI" body="A new protected derivative, designed to preserve the diagnostic image workflow." />
      <Arrow />
      <FlowStep title="Approval / controlled release" body="Release is bound to the exact protected version." />
    </ol>
  );
}

function FlowStep({ title, body, accent }: { title: string; body: string; accent?: boolean }) {
  return (
    <li className={cn("rounded-2xl border p-5", accent ? "border-[#A50E28]/40 bg-[#A50E28]/[0.04]" : "border-black/10")}>
      <p className={cn("text-[10px] font-semibold uppercase tracking-[0.2em]", accent ? "text-[#A50E28]" : "text-slate-600")}>
        {title}
      </p>
      <p className="mt-2 text-sm text-slate-700">{body}</p>
    </li>
  );
}

function Arrow() {
  return (
    <li aria-hidden className="flex justify-center">
      <span className="h-5 w-px bg-gradient-to-b from-white/20 to-[#A50E28]/50" />
    </li>
  );
}
