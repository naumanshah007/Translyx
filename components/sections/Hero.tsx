"use client";

import Link from "next/link";
import { Activity, ArrowRight, CheckCircle2, Eye, GitBranch, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/ui/Brand";

interface HeroProps {
  headline: string;
  highlight?: string;
  subheadline?: string;
  description: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string; external?: boolean };
  badge?: { text: string; icon?: React.ReactNode };
  className?: string;
}

function PageSignalVisual() {
  return (
    <div className="relative mx-auto h-[390px] w-full max-w-[520px] sm:h-[430px]" aria-hidden="true">
      {/* Concentric rings use negative margins rather than translate transforms so rotation stays perfectly centred. */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -ml-[150px] -mt-[150px] animate-spin-slow rounded-full border border-dashed border-cyan-300/20 sm:h-[350px] sm:w-[350px] sm:-ml-[175px] sm:-mt-[175px]" />
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -ml-[110px] -mt-[110px] rounded-full border border-violet-300/20 sm:h-[260px] sm:w-[260px] sm:-ml-[130px] sm:-mt-[130px]" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),rgba(139,92,246,0.08)_42%,transparent_70%)] blur-xl" />

      {/* Mirrored signal paths keep all four quadrants visually connected to the clinical context. */}
      {[-140, -40, 40, 140].map((rotation) => (
        <span
          key={rotation}
          className="absolute left-1/2 top-1/2 z-[1] h-px w-[120px] origin-left bg-gradient-to-r from-cyan-200/10 via-cyan-300/50 to-violet-300/25 sm:w-[155px]"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      ))}

      <span className="absolute left-1/2 top-1/2 z-[2] -ml-1 -mt-[154px] h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_14px_rgba(165,243,252,0.9)] animate-pulse-slow sm:-mt-[179px]" />
      <span className="absolute left-1/2 top-1/2 z-[2] -mt-1 ml-[146px] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.9)] animate-pulse-slow sm:ml-[171px]" style={{ animationDelay: "-0.75s" }} />
      <span className="absolute left-1/2 top-1/2 z-[2] -ml-1 mt-[146px] h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(94,234,212,0.9)] animate-pulse-slow sm:mt-[171px]" style={{ animationDelay: "-1.5s" }} />
      <span className="absolute left-1/2 top-1/2 z-[2] -ml-[154px] -mt-1 h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_14px_rgba(165,243,252,0.9)] animate-pulse-slow sm:-ml-[179px]" style={{ animationDelay: "-2.25s" }} />

      <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center rounded-[1.8rem] border border-cyan-200/35 bg-[#0B1732]/90 shadow-[0_0_60px_-15px_rgba(34,211,238,0.9)] backdrop-blur-xl sm:h-32 sm:w-32 sm:rounded-[2rem]">
        <div className="-rotate-45 text-center">
          <BrandMark glow className="mx-auto h-10 w-auto sm:h-11" />
          <p className="mt-2 text-[6px] font-semibold uppercase tracking-[0.2em] text-cyan-100/65 sm:text-[7px]">Clinical context</p>
        </div>
      </div>

      <div className="absolute left-0 top-2 z-[5] flex h-[122px] w-[44%] max-w-[190px] animate-float-slow flex-col rounded-2xl border border-white/15 bg-white/[0.075] p-3 shadow-2xl backdrop-blur-xl sm:top-3 sm:h-[132px] sm:p-4" style={{ animationDelay: "-1.5s" }}>
        <div className="flex items-start gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200"><Eye className="h-4 w-4" /></span>
          <span className="min-w-0">
            <span className="block text-[7px] font-semibold uppercase tracking-[0.15em] text-cyan-100/60 sm:text-[8px]">Evidence signal</span>
            <span className="mt-0.5 block font-display text-[12px] font-semibold leading-tight text-white sm:text-[13px]">Clinical detail surfaced</span>
          </span>
        </div>
        <div className="mt-auto flex h-8 items-end gap-1">
          {[35, 58, 42, 72, 62, 88, 78].map((height, i) => <span key={i} className="flex-1 rounded-sm bg-gradient-to-t from-cyan-400/25 to-cyan-200/80" style={{ height: `${height}%` }} />)}
        </div>
      </div>

      <div className="absolute right-0 top-2 z-[5] flex h-[122px] w-[44%] max-w-[190px] animate-float-slower flex-col rounded-2xl border border-white/15 bg-white/[0.075] p-3 shadow-2xl backdrop-blur-xl sm:top-3 sm:h-[132px] sm:p-4" style={{ animationDelay: "-4s" }}>
        <div className="flex items-start gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-300/10 text-violet-200"><UserCheck className="h-4 w-4" /></span>
          <span className="min-w-0">
            <span className="block text-[7px] font-semibold uppercase tracking-[0.15em] text-violet-100/60 sm:text-[8px]">Reviewer gate</span>
            <span className="mt-0.5 block font-display text-[12px] font-semibold leading-tight text-white sm:text-[13px]">Human oversight</span>
          </span>
        </div>
        <div className="mt-auto flex items-center gap-2 rounded-lg bg-emerald-300/[0.08] px-2.5 py-2 text-[8px] font-medium text-emerald-100 sm:text-[9px]">
          <CheckCircle2 className="h-3 w-3 text-emerald-300" />
          Sign-off retained
        </div>
      </div>

      <div className="absolute bottom-2 left-0 z-[5] flex h-[122px] w-[44%] max-w-[190px] animate-float-slower flex-col rounded-2xl border border-white/15 bg-white/[0.075] p-3 shadow-2xl backdrop-blur-xl sm:bottom-3 sm:h-[132px] sm:p-4" style={{ animationDelay: "-4s" }}>
        <div className="flex items-start gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-300/10 text-teal-200"><GitBranch className="h-4 w-4" /></span>
          <span className="min-w-0">
            <span className="block text-[7px] font-semibold uppercase tracking-[0.15em] text-teal-100/60 sm:text-[8px]">Full lineage</span>
            <span className="mt-0.5 block font-display text-[12px] font-semibold leading-tight text-white sm:text-[13px]">Every decision connected</span>
          </span>
        </div>
        <div className="mt-auto flex items-center gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="contents">
              <span className={cn("h-2.5 w-2.5 rounded-full", i === 3 ? "bg-violet-300" : "bg-cyan-300")} />
              {i < 3 && <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/70 to-violet-300/40" />}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-2 right-0 z-[5] flex h-[122px] w-[44%] max-w-[190px] animate-float-slow flex-col rounded-2xl border border-white/15 bg-white/[0.075] p-3 shadow-2xl backdrop-blur-xl sm:bottom-3 sm:h-[132px] sm:p-4" style={{ animationDelay: "-1.5s" }}>
        <div className="flex items-start gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-300/10 text-sky-200"><Activity className="h-4 w-4" /></span>
          <span className="min-w-0">
            <span className="block text-[7px] font-semibold uppercase tracking-[0.15em] text-sky-100/60 sm:text-[8px]">Clinical impact</span>
            <span className="mt-0.5 block font-display text-[12px] font-semibold leading-tight text-white sm:text-[13px]">Trust translated to action</span>
          </span>
        </div>
        <div className="mt-auto flex items-end gap-1.5" aria-hidden="true">
          {[28, 46, 38, 64, 56, 82].map((height, i) => (
            <span key={i} className="flex h-7 flex-1 items-end">
              <span className="w-full rounded-sm bg-gradient-to-t from-violet-400/25 to-sky-200/80" style={{ height: `${height}%` }} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero({
  headline,
  highlight,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  className,
}: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-midnight", className)}>
      <div className="pointer-events-none absolute inset-0 aurora opacity-60" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-45" />
      <div className="pointer-events-none absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-[8%] h-[380px] w-[380px] rounded-full bg-violet-400/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1260px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24 xl:gap-16">
          <div className="text-center lg:text-left">
            {badge && (
              <div className="mb-7 inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200 will-fade reveal">
                {badge.icon ?? <Sparkles className="h-3.5 w-3.5 text-cyan-300" />}
                {badge.text}
              </div>
            )}

            <h1 className="mx-auto max-w-[640px] text-balance font-display text-[2.55rem] font-semibold leading-[1.04] tracking-[-0.025em] text-white will-fade reveal sm:text-[3.1rem] lg:mx-0 lg:text-[3.2rem] xl:text-[3.35rem]" style={{ animationDelay: "0.05s" }}>
              {subheadline && <span className="mb-3 block text-xl font-normal italic text-cyan-300 sm:text-2xl">{subheadline}</span>}
              {headline}
              {highlight && <span className="text-gradient-brand"> {highlight}</span>}
            </h1>

            <p className="mx-auto mt-6 max-w-[610px] hyphens-none text-base leading-relaxed text-white/70 will-fade reveal sm:text-lg lg:mx-0" style={{ animationDelay: "0.12s" }}>
              {description}
            </p>

            {(primaryCTA || secondaryCTA) && (
              <div className="mt-9 flex flex-col justify-center gap-3 will-fade reveal sm:flex-row lg:justify-start" style={{ animationDelay: "0.2s" }}>
                {primaryCTA && (
                  <Link href={primaryCTA.href} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-[#06121f] shadow-[0_8px_30px_-6px_rgba(34,211,238,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_38px_-6px_rgba(124,58,237,0.55)] sm:min-w-[210px]">
                    {primaryCTA.label}<ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                {secondaryCTA && (secondaryCTA.external ? (
                  <a href={secondaryCTA.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl glass-panel px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.14] sm:min-w-[210px]">{secondaryCTA.label}</a>
                ) : (
                  <Link href={secondaryCTA.href} className="inline-flex items-center justify-center gap-2 rounded-xl glass-panel px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.14] sm:min-w-[210px]">{secondaryCTA.label}</Link>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-[10px] font-medium text-white/45 lg:justify-start">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-cyan-300" /> Governed by design</span>
              <span className="flex items-center gap-1.5"><UserCheck className="h-3.5 w-3.5 text-cyan-300" /> Human accountable</span>
              <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5 text-cyan-300" /> Limitations visible</span>
            </div>
          </div>

          <div className="will-fade reveal lg:relative lg:-top-2" style={{ animationDelay: "0.15s" }}>
            <PageSignalVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
