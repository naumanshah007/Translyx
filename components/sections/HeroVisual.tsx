import {
  Microscope,
  ShieldCheck,
  Cpu,
  Cloud,
  FileText,
  GitBranch,
  UserCheck,
  Workflow,
  Eye,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { BrandMark, BrandLogo } from "@/components/ui/Brand";

/* H&E-stained tissue thumbnail evoked with layered radial gradients */
function PathologySlide() {
  return (
    <div className="relative h-[68px] w-full overflow-hidden rounded-lg ring-1 ring-white/10">
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#e9c9e4",
          backgroundImage:
            "radial-gradient(circle at 20% 35%, #b1559b 0 7px, transparent 9px), radial-gradient(circle at 42% 62%, #8e3f86 0 6px, transparent 8px), radial-gradient(circle at 67% 30%, #c06fb5 0 8px, transparent 10px), radial-gradient(circle at 82% 70%, #7c3a78 0 6px, transparent 9px), radial-gradient(circle at 55% 85%, #a64f9c 0 5px, transparent 8px), radial-gradient(circle at 30% 80%, #9d4a93 0 5px, transparent 8px), radial-gradient(circle at 90% 22%, #b85fae 0 5px, transparent 7px)",
        }}
      />
      <div className="absolute left-[52%] top-[26%] h-7 w-7 rounded-[3px] border border-cyan-300/90 shadow-[0_0_10px_rgba(34,211,238,0.6)]">
        <span className="absolute -left-1 -top-1 h-1 w-1 rounded-full bg-cyan-300" />
      </div>
    </div>
  );
}

function Panel({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass-panel rounded-xl p-3 ${className ?? ""}`}>
      <p className="mb-2 text-[8.5px] font-semibold uppercase tracking-[0.18em] text-cyan-200/70">{title}</p>
      {children}
    </div>
  );
}

function MiniRow({ icon: Icon, label, color = "text-cyan-300" }: { icon: typeof Cpu; label: string; color?: string }) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-white/[0.04] px-2 py-1">
      <Icon className={`h-3 w-3 shrink-0 ${color}`} />
      <span className="text-[10px] font-medium text-slate-200">{label}</span>
    </div>
  );
}

/* ---- Individual panels (width comes from the wrapper/grid cell) ---- */

function DigitalPathologyPanel() {
  return (
    <Panel title="Digital Pathology AI">
      <PathologySlide />
      <div className="mt-2 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-white">
          <Microscope className="h-3 w-3 text-cyan-300" />
          Aiforia
        </span>
        <span className="flex items-center gap-1 text-[8.5px] font-medium text-emerald-300">
          <CheckCircle2 className="h-2.5 w-2.5" />
          Authorised partner
        </span>
      </div>
    </Panel>
  );
}

function PrivexaPanel() {
  return (
    <Panel title="Privexa Software">
      <div className="space-y-1">
        <MiniRow icon={Cpu} label="AI Wrapper" color="text-violet-300" />
        <MiniRow icon={Cloud} label="Cloud Shield" color="text-sky-300" />
        <MiniRow icon={FileText} label="Scribe" color="text-teal-300" />
        <MiniRow icon={GitBranch} label="Trace" color="text-cyan-300" />
      </div>
      <div className="mt-2 flex items-center gap-1.5 border-t border-white/10 pt-2">
        <ShieldCheck className="h-3 w-3 text-emerald-300" />
        <span className="text-[9px] font-medium text-slate-300">Privacy-first by design</span>
      </div>
    </Panel>
  );
}

function GovernedPanel() {
  return (
    <Panel title="Governed Workflows">
      <div className="space-y-1.5">
        {[
          { icon: UserCheck, t: "Reviewer gate", s: "Human oversight" },
          { icon: Workflow, t: "Full lineage", s: "End-to-end traceability" },
          { icon: Eye, t: "Visible limitations", s: "Declared & transparent" },
        ].map(({ icon: Icon, t, s }) => (
          <div key={t} className="flex items-center gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/[0.06]">
              <Icon className="h-3 w-3 text-cyan-300" />
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] font-semibold text-white">{t}</span>
              <span className="block text-[8px] text-slate-400">{s}</span>
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function ClinicalImpactPanel({ idp = "d" }: { idp?: string }) {
  return (
    <Panel title="Clinical Impact">
      <svg viewBox="0 0 160 50" className="h-[44px] w-full" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`${idp}-impactArea`} x1="0" y1="0" x2="0" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(34,211,238,0.35)" />
            <stop offset="1" stopColor="rgba(34,211,238,0)" />
          </linearGradient>
          <linearGradient id={`${idp}-impactLine`} x1="0" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22D3EE" />
            <stop offset="1" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        <path d="M4 42 L40 34 L74 38 L104 20 L136 24 L156 6 L156 50 L4 50 Z" fill={`url(#${idp}-impactArea)`} />
        <path
          d="M4 42 L40 34 L74 38 L104 20 L136 24 L156 6"
          stroke={`url(#${idp}-impactLine)`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="mt-1.5 flex justify-between">
        {["Faster insights", "Quality assured", "Workflow trust"].map((l) => (
          <span key={l} className="flex items-center gap-0.5 text-[7.5px] font-medium text-slate-300">
            <TrendingUp className="h-2 w-2 text-emerald-300" />
            {l}
          </span>
        ))}
      </div>
    </Panel>
  );
}

/* ---- Shield + DNA + platform centerpiece ---- */
function Centerpiece({ className, idp = "d" }: { className?: string; idp?: string }) {
  return (
    <div className={className}>
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full conic-sweep animate-spin-slow opacity-80 [mask-image:radial-gradient(circle,transparent_32%,#000_46%,transparent_72%)]" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.24),transparent_65%)] animate-glow-pulse" />
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.20),transparent_70%)]" />

      <div className="relative flex flex-col items-center">
        <div className="relative">
          <svg width="132" height="148" viewBox="0 0 132 148" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id={`${idp}-shieldStroke`} x1="0" y1="0" x2="132" y2="148" gradientUnits="userSpaceOnUse">
                <stop stopColor="#67E8F9" />
                <stop offset="0.5" stopColor="#22D3EE" />
                <stop offset="1" stopColor="#818CF8" />
              </linearGradient>
              <linearGradient id={`${idp}-shieldFill`} x1="66" y1="0" x2="66" y2="148" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgba(34,211,238,0.16)" />
                <stop offset="1" stopColor="rgba(15,28,63,0.05)" />
              </linearGradient>
            </defs>
            <path
              d="M66 6 L120 26 V70 C120 108 96 132 66 142 C36 132 12 108 12 70 V26 Z"
              fill={`url(#${idp}-shieldFill)`}
              stroke={`url(#${idp}-shieldStroke)`}
              strokeWidth="1.5"
            />
          </svg>
          <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
            <BrandMark glow className="h-[64px] w-auto animate-pulse-slow" />
          </div>
        </div>

        <div className="relative -mt-2 flex flex-col items-center">
          <div className="h-[18px] w-56 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.45),rgba(34,211,238,0)_70%)] blur-[2px]" />
          <div className="-mt-2 flex h-12 w-52 items-center justify-center rounded-[50%] border border-cyan-300/25 bg-gradient-to-b from-white/[0.10] to-transparent">
            <BrandLogo href={null} markClassName="h-[18px]" />
          </div>
          <p className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.26em] text-cyan-200/60">
            Privacy · Governance · Clinical Impact
          </p>
          <div className="mt-2.5 h-9 w-44 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18),transparent_72%)] blur-md" />
        </div>
      </div>
    </div>
  );
}

function NetworkBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute right-0 top-0 h-full w-full text-cyan-300/30 [mask-image:radial-gradient(ellipse_60%_55%_at_70%_45%,#000_30%,transparent_75%)]"
        style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1.5px)", backgroundSize: "22px 22px" }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 560" fill="none" aria-hidden="true">
        <g stroke="rgba(125,211,252,0.35)" strokeWidth="1">
          <line x1="430" y1="120" x2="500" y2="220" className="animate-twinkle" />
          <line x1="500" y1="220" x2="450" y2="330" className="animate-twinkle" style={{ animationDelay: "1s" }} />
          <line x1="430" y1="120" x2="370" y2="200" className="animate-twinkle" style={{ animationDelay: "0.5s" }} />
        </g>
        <g fill="#7DD3FC">
          <circle cx="430" cy="120" r="2.5" className="animate-twinkle" />
          <circle cx="500" cy="220" r="2" className="animate-twinkle" style={{ animationDelay: "1.2s" }} />
          <circle cx="450" cy="330" r="2" className="animate-twinkle" style={{ animationDelay: "0.8s" }} />
          <circle cx="370" cy="200" r="1.5" className="animate-twinkle" style={{ animationDelay: "0.3s" }} />
        </g>
      </svg>
    </div>
  );
}

export function HeroVisual() {
  return (
    <>
      {/* Mobile (< sm): clean centerpiece + tidy 2x2 panel grid — no overlap */}
      <div className="sm:hidden">
        <div className="relative mx-auto flex h-[230px] items-center justify-center overflow-hidden">
          <Centerpiece idp="m" className="relative scale-[0.88]" />
        </div>
        <div className="mt-1 grid grid-cols-2 gap-2.5">
          <DigitalPathologyPanel />
          <PrivexaPanel />
          <GovernedPanel />
          <ClinicalImpactPanel idp="m" />
        </div>
      </div>

      {/* sm+ : floating composition */}
      <div className="relative mx-auto hidden h-[460px] w-full max-w-[560px] sm:block sm:h-[500px] lg:h-[560px]">
        <NetworkBackdrop />
        <Centerpiece idp="d" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute left-0 top-4 w-[208px] animate-float-slow">
          <DigitalPathologyPanel />
        </div>
        <div className="absolute right-0 top-8 w-[190px] animate-float-slower" style={{ animationDelay: "0.6s" }}>
          <PrivexaPanel />
        </div>
        <div className="absolute bottom-6 left-1 w-[208px] animate-float-slower" style={{ animationDelay: "1.1s" }}>
          <GovernedPanel />
        </div>
        <div className="absolute bottom-10 right-1 w-[196px] animate-float-slow" style={{ animationDelay: "0.3s" }}>
          <ClinicalImpactPanel idp="d" />
        </div>
      </div>
    </>
  );
}
