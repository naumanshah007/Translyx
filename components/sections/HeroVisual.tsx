import Image from "next/image";
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

/* AI object-detection box with bright corner brackets */
function DetectionBox({ className }: { className?: string }) {
  return (
    <span
      className={`absolute rounded-[3px] border border-cyan-300/80 shadow-[0_0_12px_rgba(34,211,238,0.7)] ${className ?? ""}`}
    >
      <span className="absolute -left-px -top-px h-1.5 w-1.5 border-l border-t border-cyan-200" />
      <span className="absolute -right-px -top-px h-1.5 w-1.5 border-r border-t border-cyan-200" />
      <span className="absolute -bottom-px -left-px h-1.5 w-1.5 border-b border-l border-cyan-200" />
      <span className="absolute -bottom-px -right-px h-1.5 w-1.5 border-b border-r border-cyan-200" />
    </span>
  );
}

/* Real H&E-stained tissue crop (procedurally generated) with AI detection overlay */
function PathologySlide() {
  return (
    <div className="relative h-[74px] w-full overflow-hidden rounded-lg ring-1 ring-white/15">
      <Image
        src="/digital-pathology-slide.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 640px) 232px, 45vw"
        className="object-cover"
      />
      {/* subtle analysis sheen */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-cyan-300/10" />
      {/* AI detections */}
      <DetectionBox className="left-[49%] top-[20%] h-[26px] w-[26px]" />
      <DetectionBox className="left-[16%] top-[46%] h-[18px] w-[18px]" />
      {/* AI label */}
      <span className="absolute bottom-1 left-1 rounded bg-[#06121f]/70 px-1.5 py-px text-[7px] font-semibold uppercase tracking-[0.12em] text-cyan-200 ring-1 ring-cyan-300/20 backdrop-blur-sm">
        AI analysis
      </span>
    </div>
  );
}

function Panel({
  title,
  children,
  className,
  accent,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  accent?: string;
}) {
  return (
    <div className={`group glass-panel relative overflow-hidden rounded-2xl p-3.5 ${className ?? ""}`}>
      {accent && (
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        />
      )}
      {accent && (
        <span
          className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-50 blur-2xl"
          style={{ background: accent }}
        />
      )}
      <p className="relative mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-200/70">{title}</p>
      <div className="relative">{children}</div>
    </div>
  );
}

function MiniRow({ icon: Icon, label, color = "text-cyan-300" }: { icon: typeof Cpu; label: string; color?: string }) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-white/[0.05] px-2 py-1.5">
      <Icon className={`h-3.5 w-3.5 shrink-0 ${color}`} />
      <span className="text-[11px] font-medium text-slate-100">{label}</span>
    </div>
  );
}

/* ---- Individual panels (width comes from the wrapper/grid cell) ---- */

function DigitalPathologyPanel() {
  return (
    <Panel title="Digital Pathology AI" accent="#22D3EE">
      <PathologySlide />
      <div className="mt-2.5 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
          <Microscope className="h-3.5 w-3.5 text-cyan-300" />
          Aiforia
        </span>
        <span className="flex items-center gap-1 text-[9px] font-medium text-emerald-300">
          <CheckCircle2 className="h-2.5 w-2.5" />
          Authorised partner
        </span>
      </div>
    </Panel>
  );
}

function PipelinePanel() {
  return (
    <Panel title="Pipeline Capabilities" accent="#A78BFA">
      <div className="space-y-1.5">
        <MiniRow icon={Cpu} label="AI Wrapper" color="text-violet-300" />
        <MiniRow icon={Cloud} label="Cloud Shield" color="text-sky-300" />
        <MiniRow icon={FileText} label="Scribe" color="text-teal-300" />
        <MiniRow icon={GitBranch} label="Trace" color="text-cyan-300" />
      </div>
      <div className="mt-2.5 flex items-center gap-1.5 border-t border-white/10 pt-2">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
        <span className="text-[10px] font-medium text-slate-200">Under evaluation · privacy-first</span>
      </div>
    </Panel>
  );
}

function GovernedPanel() {
  return (
    <Panel title="Governed Workflows" accent="#34D399">
      <div className="space-y-2">
        {[
          { icon: UserCheck, t: "Reviewer gate", s: "Human oversight" },
          { icon: Workflow, t: "Full lineage", s: "End-to-end traceability" },
          { icon: Eye, t: "Visible limitations", s: "Declared & transparent" },
        ].map(({ icon: Icon, t, s }) => (
          <div key={t} className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.06]">
              <Icon className="h-3.5 w-3.5 text-cyan-300" />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] font-semibold text-white">{t}</span>
              <span className="block text-[8.5px] text-slate-400">{s}</span>
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function ClinicalImpactPanel({ idp = "d" }: { idp?: string }) {
  return (
    <Panel title="Clinical Impact" accent="#38BDF8">
      <svg viewBox="0 0 160 50" className="h-[50px] w-full" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`${idp}-impactArea`} x1="0" y1="0" x2="0" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(34,211,238,0.40)" />
            <stop offset="1" stopColor="rgba(34,211,238,0)" />
          </linearGradient>
          <linearGradient id={`${idp}-impactLine`} x1="0" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22D3EE" />
            <stop offset="0.5" stopColor="#5EEAD4" />
            <stop offset="1" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        <path d="M4 42 L40 34 L74 38 L104 20 L136 24 L156 6 L156 50 L4 50 Z" fill={`url(#${idp}-impactArea)`} />
        <path
          d="M4 42 L40 34 L74 38 L104 20 L136 24 L156 6"
          stroke={`url(#${idp}-impactLine)`}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="156" cy="6" r="2.5" fill="#A78BFA" />
      </svg>
      <div className="mt-2 flex justify-between">
        {["Faster insights", "Quality assured", "Workflow trust"].map((l) => (
          <span key={l} className="flex items-center gap-0.5 text-[8px] font-medium text-slate-300">
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
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.26),transparent_65%)] animate-glow-pulse" />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.22),transparent_70%)]" />

      <div className="relative flex flex-col items-center">
        <div className="relative">
          <svg width="148" height="166" viewBox="0 0 132 148" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id={`${idp}-shieldStroke`} x1="0" y1="0" x2="132" y2="148" gradientUnits="userSpaceOnUse">
                <stop stopColor="#67E8F9" />
                <stop offset="0.5" stopColor="#22D3EE" />
                <stop offset="1" stopColor="#818CF8" />
              </linearGradient>
              <linearGradient id={`${idp}-shieldFill`} x1="66" y1="0" x2="66" y2="148" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgba(34,211,238,0.18)" />
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
            <BrandMark glow className="h-[72px] w-auto animate-pulse-slow" />
          </div>
        </div>

        <div className="relative -mt-2 flex flex-col items-center">
          <div className="h-[18px] w-60 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.5),rgba(34,211,238,0)_70%)] blur-[2px]" />
          <div className="-mt-2 flex h-12 w-56 items-center justify-center rounded-[50%] border border-cyan-300/30 bg-gradient-to-b from-white/[0.12] to-transparent">
            <BrandLogo href={null} markClassName="h-[20px]" />
          </div>
          <p className="mt-1.5 text-[8.5px] font-semibold uppercase tracking-[0.26em] text-cyan-200/60">
            Privacy · Governance · Clinical Impact
          </p>
          <div className="mt-2.5 h-9 w-48 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.2),transparent_72%)] blur-md" />
        </div>
      </div>
    </div>
  );
}

/* ---- Desktop-only ambience ---- */
function OrbitalRings() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-cyan-400/15">
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
        <span className="absolute left-1/2 top-full h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(167,139,250,0.9)]" />
      </div>
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-violet-400/15 [animation-direction:reverse] [animation-duration:34s]">
        <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300 shadow-[0_0_10px_rgba(45,212,191,0.9)]" />
      </div>
    </div>
  );
}

function ConnectorLayer() {
  const conns = [
    { ax: 252, ay: 236, color: "#22D3EE", dur: "3.2s", begin: "0s" },
    { ax: 770, ay: 250, color: "#A78BFA", dur: "3.9s", begin: "0.7s" },
    { ax: 254, ay: 742, color: "#34D399", dur: "3.5s", begin: "0.3s" },
    { ax: 762, ay: 728, color: "#38BDF8", dur: "4.1s", begin: "1s" },
  ];
  const core = { x: 500, y: 478 };
  return (
    <svg
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {conns.map((c) => {
        const path = `M${c.ax} ${c.ay} L${core.x} ${core.y}`;
        return (
          <g key={c.color}>
            <path d={path} fill="none" stroke={c.color} strokeOpacity="0.20" strokeWidth="2" />
            <path
              d={path}
              fill="none"
              stroke={c.color}
              strokeOpacity="0.7"
              strokeWidth="2"
              strokeDasharray="3 20"
              className="animate-dash"
            />
            <circle cx={c.ax} cy={c.ay} r="13" fill="none" stroke={c.color} strokeOpacity="0.35" strokeWidth="1.2" />
            <circle cx={c.ax} cy={c.ay} r="4.5" fill={c.color} />
            <circle r="5" fill={c.color}>
              <animateMotion dur={c.dur} begin={c.begin} repeatCount="indefinite" path={path} />
            </circle>
          </g>
        );
      })}
      {/* core node */}
      <circle cx={core.x} cy={core.y} r="22" fill="none" stroke="#22D3EE" strokeOpacity="0.30" strokeWidth="1.2" />
      <circle cx={core.x} cy={core.y} r="7" fill="#67E8F9" />
    </svg>
  );
}

function NetworkBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute right-0 top-0 h-full w-full text-cyan-300/30 [mask-image:radial-gradient(ellipse_62%_58%_at_72%_45%,#000_28%,transparent_75%)]"
        style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1.5px)", backgroundSize: "22px 22px" }}
      />
    </div>
  );
}

export function HeroVisual() {
  return (
    <>
      {/* Mobile (< sm): clean centerpiece + tidy 2x2 panel grid — no overlap */}
      <div className="sm:hidden">
        <div className="relative mx-auto flex h-[230px] items-center justify-center overflow-hidden">
          <Centerpiece idp="m" className="relative scale-[0.82]" />
        </div>
        <div className="mt-1 grid grid-cols-2 gap-2.5">
          <DigitalPathologyPanel />
          <PipelinePanel />
          <GovernedPanel />
          <ClinicalImpactPanel idp="m" />
        </div>
      </div>

      {/* sm+ : floating composition with connected, glowing core */}
      <div className="relative mx-auto hidden h-[480px] w-full max-w-[600px] sm:block sm:h-[520px] lg:h-[600px]">
        <NetworkBackdrop />
        <ConnectorLayer />
        <OrbitalRings />
        <Centerpiece idp="d" className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 scale-105" />

        <div className="absolute left-0 top-2 z-20 w-[232px] animate-float-slow">
          <DigitalPathologyPanel />
        </div>
        <div className="absolute right-0 top-7 z-20 w-[216px] animate-float-slower" style={{ animationDelay: "0.6s" }}>
          <PipelinePanel />
        </div>
        <div className="absolute bottom-4 left-0 z-20 w-[232px] animate-float-slower" style={{ animationDelay: "1.1s" }}>
          <GovernedPanel />
        </div>
        <div className="absolute bottom-10 right-0 z-20 w-[220px] animate-float-slow" style={{ animationDelay: "0.3s" }}>
          <ClinicalImpactPanel idp="d" />
        </div>
      </div>
    </>
  );
}
