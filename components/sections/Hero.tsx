"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, GitBranch, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
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
    <div className="relative mx-auto h-[370px] w-full max-w-[520px] sm:h-[430px]">
      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-cyan-300/15" />
      <div className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/15" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),rgba(139,92,246,0.08)_42%,transparent_70%)] blur-xl" />

      <div className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2.1rem] border border-cyan-200/30 bg-[#0B1732]/80 shadow-[0_0_55px_-18px_rgba(34,211,238,0.85)] backdrop-blur-xl rotate-45">
        <div className="-rotate-45 text-center">
          <BrandMark glow className="mx-auto h-12 w-auto" />
          <p className="mt-2 text-[7px] font-semibold uppercase tracking-[0.22em] text-cyan-100/60">Clinical context</p>
        </div>
      </div>

      <div className="absolute left-0 top-4 w-[190px] animate-float-slow rounded-2xl border border-white/15 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-xl sm:left-2">
        <div className="flex items-center justify-between">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200"><Eye className="h-4 w-4" /></span>
          <span className="flex items-center gap-1 text-[8px] font-semibold uppercase tracking-wider text-emerald-200"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Visible</span>
        </div>
        <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-100/55">Evidence signal</p>
        <p className="mt-1 font-display text-sm font-semibold text-white">Clinical detail surfaced</p>
        <div className="mt-3 flex h-10 items-end gap-1">
          {[35, 58, 42, 72, 62, 88, 78].map((height, i) => <span key={i} className="flex-1 rounded-sm bg-gradient-to-t from-cyan-400/25 to-cyan-200/80" style={{ height: `${height}%` }} />)}
        </div>
      </div>

      <div className="absolute right-0 top-20 w-[184px] animate-float-slower rounded-2xl border border-white/15 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-xl sm:right-1">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-300/10 text-violet-200"><UserCheck className="h-4 w-4" /></span>
          <span>
            <span className="block text-[8px] font-semibold uppercase tracking-[0.15em] text-violet-100/55">Reviewer gate</span>
            <span className="block text-xs font-semibold text-white">Human oversight</span>
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-300/[0.08] px-2.5 py-2 text-[9px] font-medium text-emerald-100">
          <CheckCircle2 className="h-3 w-3 text-emerald-300" />
          Sign-off retained
        </div>
      </div>

      <div className="absolute bottom-3 left-[10%] w-[205px] animate-float-slower rounded-2xl border border-white/15 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-xl sm:left-[14%]">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-300/10 text-teal-200"><GitBranch className="h-4 w-4" /></span>
          <span>
            <span className="block text-[8px] font-semibold uppercase tracking-[0.15em] text-teal-100/55">Full lineage</span>
            <span className="block text-xs font-semibold text-white">Every decision connected</span>
          </span>
        </div>
        <div className="mt-3 flex items-center gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="contents">
              <span className={cn("h-2.5 w-2.5 rounded-full", i === 3 ? "bg-violet-300" : "bg-cyan-300")} />
              {i < 3 && <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/70 to-violet-300/40" />}
            </span>
          ))}
        </div>
      </div>

      <span className="absolute right-[12%] top-3 h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_14px_rgba(165,243,252,0.9)] animate-pulse-slow" />
      <span className="absolute bottom-[20%] right-[4%] h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.9)] animate-pulse-slow" />
      <span className="absolute left-[5%] top-[48%] h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_12px_rgba(94,234,212,0.9)] animate-pulse-slow" />
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
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
          <div className="text-center lg:text-left">
            {badge && (
              <div className="mb-7 inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200 will-fade reveal">
                {badge.icon ?? <Sparkles className="h-3.5 w-3.5 text-cyan-300" />}
                {badge.text}
              </div>
            )}

            <h1 className="font-display text-[2.55rem] font-semibold leading-[1.04] tracking-[-0.025em] text-white will-fade reveal sm:text-[3.25rem] lg:text-[3.75rem]" style={{ animationDelay: "0.05s" }}>
              {subheadline && <span className="mb-3 block text-xl font-normal italic text-cyan-300 sm:text-2xl">{subheadline}</span>}
              {headline}
              {highlight && <span className="text-gradient-brand"> {highlight}</span>}
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/[0.62] will-fade reveal sm:text-lg lg:mx-0" style={{ animationDelay: "0.12s" }}>
              {description}
            </p>

            {(primaryCTA || secondaryCTA) && (
              <div className="mt-9 flex flex-col justify-center gap-3 will-fade reveal sm:flex-row lg:justify-start" style={{ animationDelay: "0.2s" }}>
                {primaryCTA && (
                  <Link href={primaryCTA.href} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-[#06121f] shadow-[0_8px_30px_-6px_rgba(34,211,238,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_38px_-6px_rgba(124,58,237,0.55)]">
                    {primaryCTA.label}<ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                {secondaryCTA && (secondaryCTA.external ? (
                  <a href={secondaryCTA.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl glass-panel px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.14]">{secondaryCTA.label}</a>
                ) : (
                  <Link href={secondaryCTA.href} className="inline-flex items-center justify-center gap-2 rounded-xl glass-panel px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.14]">{secondaryCTA.label}</Link>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-[10px] font-medium text-white/45 lg:justify-start">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-cyan-300" /> Governed by design</span>
              <span className="flex items-center gap-1.5"><UserCheck className="h-3.5 w-3.5 text-cyan-300" /> Human accountable</span>
              <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5 text-cyan-300" /> Limitations visible</span>
            </div>
          </div>

          <div className="will-fade reveal" style={{ animationDelay: "0.15s" }}>
            <PageSignalVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
