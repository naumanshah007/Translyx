import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Building2,
  Cpu,
  FlaskConical,
  Globe2,
  Handshake,
  HeartPulse,
  MapPin,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Workflow,
} from "lucide-react";

function VisualShell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative mx-auto h-[260px] w-full max-w-[370px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] shadow-[0_30px_80px_-48px_rgba(34,211,238,0.55)] sm:h-[280px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.12),transparent_54%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(103,232,249,0.35)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(circle_at_center,#000,transparent_78%)]" />
      <div className="absolute left-5 top-4 z-30 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-100/60">
        <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.85)]" />
        {label}
      </div>
      {children}
    </div>
  );
}

function SignalNode({
  icon: Icon,
  label,
  className,
  color = "text-cyan-200",
  delay = "0s",
}: {
  icon: LucideIcon;
  label: string;
  className: string;
  color?: string;
  delay?: string;
}) {
  return (
    <div
      className={`absolute z-20 flex flex-col items-center gap-1.5 animate-float-slow ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#101C3B]/90 shadow-[0_12px_30px_-18px_rgba(34,211,238,0.8)] backdrop-blur-md">
        <Icon className={`h-[18px] w-[18px] ${color}`} />
      </span>
      <span className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.12em] text-white/45">{label}</span>
    </div>
  );
}

export function PipelineHeroVisual() {
  return (
    <VisualShell label="Pipeline signal">
      <svg viewBox="0 0 370 280" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        {[
          "M74 91 C118 92 136 111 170 128",
          "M296 91 C252 92 234 111 200 128",
          "M76 196 C118 182 142 156 171 141",
          "M294 196 C252 182 228 156 199 141",
        ].map((path, index) => (
          <path
            key={path}
            d={path}
            fill="none"
            stroke={index % 2 === 0 ? "#22D3EE" : "#A78BFA"}
            strokeOpacity="0.42"
            strokeWidth="1.4"
            strokeDasharray="4 8"
            className="animate-dash"
          />
        ))}
        <circle r="3.5" fill="#67E8F9">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M74 91 C118 92 136 111 170 128" />
        </circle>
        <circle r="3.5" fill="#A78BFA">
          <animateMotion dur="3.8s" begin="0.7s" repeatCount="indefinite" path="M294 196 C252 182 228 156 199 141" />
        </circle>
      </svg>

      <SignalNode icon={Cpu} label="Clinical AI" className="left-7 top-[66px]" color="text-violet-200" />
      <SignalNode icon={Microscope} label="Pathology" className="right-7 top-[66px]" delay="0.8s" />
      <SignalNode icon={Activity} label="Diagnostics" className="bottom-[45px] left-8" color="text-teal-200" delay="1.2s" />
      <SignalNode icon={Stethoscope} label="Clinical use" className="bottom-[45px] right-7" color="text-sky-200" delay="0.4s" />

      <div className="absolute left-1/2 top-[47%] z-20 h-28 w-28 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-cyan-300/35" />
        <div className="absolute inset-3 animate-glow-pulse rounded-full bg-cyan-300/10 blur-md" />
        <div className="absolute inset-5 flex items-center justify-center rounded-[1.4rem] border border-cyan-300/25 bg-[#0B1734]/95 shadow-[0_0_28px_rgba(34,211,238,0.2)]">
          <FlaskConical className="h-9 w-9 text-cyan-200" />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#0B1734]/85 px-3 py-1.5 backdrop-blur-md">
        {[
          ["Evaluate", "bg-violet-300"],
          ["Develop", "bg-cyan-300"],
          ["Translate", "bg-emerald-300"],
        ].map(([label, color]) => (
          <span key={label} className="flex items-center gap-1.5 text-[7.5px] font-semibold uppercase tracking-[0.1em] text-white/55">
            <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
            {label}
          </span>
        ))}
      </div>
    </VisualShell>
  );
}

export function PartnersHeroVisual() {
  const bridgePath = "M68 102 C130 44 226 228 304 170";

  return (
    <VisualShell label="Partner bridge">
      <svg viewBox="0 0 370 280" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <path d={bridgePath} fill="none" stroke="#67E8F9" strokeOpacity="0.2" strokeWidth="16" />
        <path
          d={bridgePath}
          fill="none"
          stroke="url(#partnerBridgeGradient)"
          strokeWidth="1.8"
          strokeDasharray="5 8"
          className="animate-dash"
        />
        <defs>
          <linearGradient id="partnerBridgeGradient" x1="68" y1="102" x2="304" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22D3EE" />
            <stop offset="0.55" stopColor="#5EEAD4" />
            <stop offset="1" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        <circle r="4" fill="#67E8F9">
          <animateMotion dur="3.6s" repeatCount="indefinite" path={bridgePath} />
        </circle>
        <circle r="3.5" fill="#A78BFA">
          <animateMotion dur="4.2s" begin="0.8s" repeatCount="indefinite" path="M304 170 C226 228 130 44 68 102" />
        </circle>
      </svg>

      <div className="absolute left-5 top-[70px] z-20 animate-float-slow">
        <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-cyan-300/25 bg-[#0B1734]/90 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          <Globe2 className="h-8 w-8 text-cyan-200" />
        </div>
        <p className="mt-2 text-center text-[8px] font-semibold uppercase tracking-[0.12em] text-white/45">Global innovation</p>
      </div>

      <div className="absolute bottom-[32px] right-5 z-20 animate-float-slower" style={{ animationDelay: "0.8s" }}>
        <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-violet-300/25 bg-[#0B1734]/90 shadow-[0_0_30px_rgba(167,139,250,0.15)]">
          <MapPin className="h-8 w-8 text-violet-200" />
        </div>
        <p className="mt-2 text-center text-[8px] font-semibold uppercase tracking-[0.12em] text-white/45">New Zealand</p>
      </div>

      <SignalNode icon={Microscope} label="Diagnostics" className="right-8 top-[48px]" delay="1.1s" />
      <SignalNode icon={Workflow} label="Adoption" className="bottom-[38px] left-9" color="text-teal-200" delay="0.4s" />

      <div className="absolute left-1/2 top-1/2 z-30 h-24 w-24 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-emerald-300/30 [animation-direction:reverse]" />
        <div className="absolute inset-3 flex items-center justify-center rounded-2xl border border-emerald-300/25 bg-[#0B1734]/95 shadow-[0_0_32px_rgba(52,211,153,0.2)]">
          <Handshake className="h-9 w-9 text-emerald-200" />
        </div>
      </div>
    </VisualShell>
  );
}

export function CompanyHeroVisual() {
  return (
    <VisualShell label="Accountable platform">
      <svg viewBox="0 0 370 280" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        {[
          "M84 88 C120 98 142 112 169 127",
          "M286 88 C250 98 228 112 201 127",
          "M284 202 C246 187 224 163 201 145",
        ].map((path, index) => (
          <g key={path}>
            <path d={path} fill="none" stroke={index === 1 ? "#A78BFA" : "#22D3EE"} strokeOpacity="0.32" strokeWidth="1.4" />
            <circle r="3.2" fill={index === 1 ? "#A78BFA" : "#67E8F9"}>
              <animateMotion dur={`${3.2 + index * 0.5}s`} begin={`${index * 0.45}s`} repeatCount="indefinite" path={path} />
            </circle>
          </g>
        ))}
      </svg>

      <SignalNode icon={HeartPulse} label="Clinical" className="left-8 top-[64px]" />
      <SignalNode icon={ShieldCheck} label="Governance" className="right-7 top-[64px]" color="text-violet-200" delay="0.8s" />
      <SignalNode icon={MapPin} label="Oceania" className="bottom-[42px] right-8" color="text-teal-200" delay="1.3s" />

      <div className="absolute left-1/2 top-[49%] z-20 h-36 w-36 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-cyan-300/25" />
        <div className="absolute inset-4 animate-glow-pulse rounded-[2rem] bg-cyan-300/10 blur-lg" />
        <div className="absolute inset-6 flex flex-col items-center justify-center rounded-[1.6rem] border border-cyan-300/25 bg-[#0B1734]/95 shadow-[0_0_34px_rgba(34,211,238,0.18)]">
          <Building2 className="h-10 w-10 text-cyan-200" />
          <span className="mt-1 text-[7px] font-semibold uppercase tracking-[0.16em] text-white/45">Translyx</span>
        </div>
      </div>

      <div className="absolute bottom-5 left-7 z-30 flex items-center gap-2 rounded-full border border-white/10 bg-[#0B1734]/85 px-3 py-1.5 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
        </span>
        <span className="text-[7.5px] font-semibold uppercase tracking-[0.12em] text-white/55">Auckland · New Zealand</span>
      </div>
    </VisualShell>
  );
}
