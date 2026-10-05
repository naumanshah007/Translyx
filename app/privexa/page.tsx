import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import {
  deploymentModels,
  industries,
  modules,
  principles,
  privexaHeroCopy,
  privexaLine,
  privexaTagline,
  privexaLoginUrl,
  providers,
  trustControls,
} from "@/config/privexa";
import { PrivexaSubnav } from "@/components/privexa/Chrome";
import { PxCta, PxHeading, PxSection, StatusBadge } from "@/components/privexa/ui";
import { BoundaryDiagram, HowItWorks, ModalityGrid, WsiFlow } from "@/components/privexa/Diagrams";
import { WhatAISees } from "@/components/privexa/WhatAISees";
import { VideoGallery } from "@/components/privexa/VideoGallery";
import { PxFinalCta } from "@/components/privexa/FinalCta";
import { Reveal } from "@/components/ui/Reveal";

const description =
  "Privexa, a Translyx platform, is a privacy-preserving control boundary for enterprise AI — minimum disclosure, semantic utility and organisation-owned policy across text, documents, images, whole-slide pathology and audio.";

export const metadata = pageMetadata({
  title: `Privexa — ${privexaTagline}`,
  description,
  path: "/privexa",
  keywords: [
    "Privexa",
    "enterprise AI privacy",
    "privacy-preserving AI",
    "secure AI gateway",
    "AI data protection",
    "AI governance",
    "protected RAG",
    "sensitive data and LLMs",
    "WSI privacy",
  ],
});

export default function PrivexaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Privexa",
    applicationCategory: "SecurityApplication",
    description,
    url: `${siteConfig.url}/privexa`,
    sameAs: [privexaLoginUrl].filter(Boolean),
    brand: { "@type": "Brand", name: "Privexa" },
    publisher: { "@type": "Organization", name: siteConfig.companyName, url: siteConfig.url },
  };

  return (
    <div className="bg-[#070B10]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PrivexaSubnav />

      {/* 1 — Hero */}
      <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(103,232,249,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">Privexa · A Translyx Platform</p>
          <h1 className="mt-6 max-w-4xl text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-[4rem] lg:text-[5rem]">
            {privexaTagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">{privexaHeroCopy}</p>
          <p className="mt-3 text-base font-medium text-slate-200">{privexaLine}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PxCta href="/privexa/demo">Request Enterprise Demo</PxCta>
            <PxCta href="#see-it" variant="secondary">
              Watch Demo
            </PxCta>
          </div>
          <p className="mt-10 font-mono text-xs tracking-wide text-slate-500">
            Text · Documents · Images · Whole-Slide Pathology · Audio · API
          </p>
          <Reveal className="mt-16">
            <BoundaryDiagram />
          </Reveal>
        </div>
      </section>

      {/* 2 — Why */}
      <PxSection tone="charcoal" labelledBy="why">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <PxHeading id="why" eyebrow="Why Privexa exists" title="AI is moving faster than enterprise data controls." />
          <div className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            <p>Organisations increasingly rely on external AI. Valuable and sensitive information naturally follows the workflow.</p>
            <p>Blanket bans rarely hold — they tend to push usage into unmanaged tools. What organisations need is a governed boundary.</p>
            <p className="text-white">Privexa creates that control boundary before AI egress.</p>
          </div>
        </div>
      </PxSection>

      {/* 3 — Principles */}
      <PxSection labelledBy="principles">
        <PxHeading id="principles" eyebrow="Three principles" title="Disclose less. Keep the meaning. Own the policy." />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title} className="bg-[#070B10] p-8 sm:p-10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{p.title}</h3>
              <p className="mt-6 text-lg leading-relaxed text-slate-200">{p.body}</p>
            </li>
          ))}
        </ul>
      </PxSection>

      {/* 4 — Interactive demo */}
      <PxSection tone="charcoal" labelledBy="what-ai-sees">
        <PxHeading
          id="what-ai-sees"
          eyebrow="What AI sees"
          title="Original → protected → AI → reconstructed."
          body="Toggle the policy. Watch what leaves the boundary — and what the authorised user gets back."
        />
        <div className="mt-12">
          <WhatAISees />
        </div>
      </PxSection>

      {/* How it works */}
      <PxSection labelledBy="how">
        <PxHeading id="how" eyebrow="How Privexa works" title="Five steps, every request." />
        <div className="mt-12">
          <HowItWorks />
        </div>
      </PxSection>

      {/* 5 — Modules */}
      <PxSection tone="charcoal" id="modules" labelledBy="modules-h">
        <PxHeading
          id="modules-h"
          eyebrow="Platform modules"
          title="One platform. Eight modules."
          body="Each module shares the same privacy authority, audit model and organisation policy."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <li key={m.id} id={m.id} className="flex scroll-mt-24 flex-col rounded-2xl border border-white/10 bg-[#070B10] p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-white">{m.name}</h3>
                <StatusBadge status={m.status} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{m.summary}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-slate-300">
                {m.includes.map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-cyan-300/80" aria-hidden />
                    {x}
                  </li>
                ))}
              </ul>
              {m.href && (
                <Link href={m.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 hover:text-white">
                  Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </PxSection>

      {/* 6 — Multimodal */}
      <PxSection labelledBy="multimodal">
        <PxHeading
          id="multimodal"
          eyebrow="Multimodal privacy"
          title="One privacy boundary. Multiple data modalities."
          body="Sensitive information doesn't only live in text. Privexa applies the same policy and evidence model across every modality it handles."
        />
        <div className="mt-12">
          <ModalityGrid />
        </div>
      </PxSection>

      {/* 7 — WSI spotlight */}
      <PxSection tone="charcoal" labelledBy="wsi">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <StatusBadge status="validation" />
            <PxHeading
              id="wsi"
              className="mt-6"
              eyebrow="Advanced imaging spotlight"
              title="Privacy controls for whole-slide pathology."
              body="Protect identity-bearing slide information while preserving the diagnostic image workflow."
            />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-400">
              Privexa focuses on the known identity-bearing surfaces of a digital slide — label, macro image, thumbnail and
              metadata — plus regions a reviewer adds. It does not run generic OCR over tissue, which in testing produced
              high false-detection rates and harmed diagnostic utility. This capability is developed and currently
              undergoing extended validation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PxCta href="/privexa/wsi">Explore WSI privacy</PxCta>
              <PxCta href="/privexa/demo?interest=wsi" variant="secondary">
                Discuss a WSI Evaluation
              </PxCta>
            </div>
          </div>
          <WsiFlow />
        </div>
      </PxSection>

      {/* 8–10 — Documents, Scribe, Governance */}
      <PxSection labelledBy="capabilities">
        <PxHeading id="capabilities" eyebrow="Capabilities in depth" title="Built for the work people actually do with AI." />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Documents & knowledge",
              status: "controlled" as const,
              body: "Chat with files, extract structure from reports and build organisation knowledge bases. Retrieval runs over protected content, so the model receives the context it needs — not the identities behind it.",
              points: ["File Chat", "Document Intelligence", "Protected retrieval (RAG)"],
            },
            {
              title: "Scribe",
              status: "pilot" as const,
              body: "Private, local transcription. The transcript is protected before any downstream AI summarisation or structuring, and a human reviews the result.",
              points: ["Local transcription", "Protected downstream AI", "Human review"],
            },
            {
              title: "Governance",
              status: "controlled" as const,
              body: "Organisation administrators set users, roles, approved providers and models. Every AI egress produces evidence of exactly what was authorised to leave.",
              points: ["Audit evidence", "Provider & model policy", "Evaluation and benchmarks"],
            },
          ].map((c) => (
            <article key={c.title} className="rounded-2xl border border-white/10 p-7">
              <StatusBadge status={c.status} />
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.body}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-slate-300">
                {c.points.map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-cyan-300/80" aria-hidden />
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PxSection>

      {/* 11 — Providers */}
      <PxSection tone="charcoal" labelledBy="providers">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <PxHeading
            id="providers"
            eyebrow="Provider & model flexibility"
            title="Keep model choice. Keep data control."
            body="Privexa separates organisation privacy policy from model choice, so approved models can evolve without rebuilding the privacy boundary."
          />
          <div>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {providers.map((p) => (
                <li key={p} className="flex min-h-[96px] items-center justify-center bg-[#0E151D] p-5 text-center text-sm font-medium text-slate-200">
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Current engineering supports configurable provider and model access. Approved providers and models are set per organisation policy. Trademarks belong to
              their respective owners; no endorsement is implied.
            </p>
          </div>
        </div>
      </PxSection>

      {/* 12 — Deployment */}
      <PxSection labelledBy="deploy">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <PxHeading id="deploy" eyebrow="Deployment" title="Deploy where your policy requires." />
          <PxCta href="/privexa/deployment" variant="text">
            Deployment options
          </PxCta>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deploymentModels.map((d) => (
            <li key={d.title} className="rounded-2xl border border-white/10 p-6">
              <h3 className="font-semibold text-white">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{d.body}</p>
            </li>
          ))}
        </ul>
      </PxSection>

      {/* 13 — Videos */}
      <PxSection tone="charcoal" id="see-it" labelledBy="videos">
        <PxHeading id="videos" eyebrow="See Privexa in action" title="Watch the platform." />
        <div className="mt-12">
          <VideoGallery />
        </div>
      </PxSection>

      {/* 14 — Industries */}
      <PxSection labelledBy="industries">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <PxHeading id="industries" eyebrow="Industries" title="Designed for sensitive environments." />
          <PxCta href="/solutions" variant="text">
            Solutions by industry
          </PxCta>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((i) => (
            <li key={i.id} className="bg-[#070B10]">
              <Link href={`/solutions#${i.id}`} className="block h-full p-6 transition-colors hover:bg-white/[0.03]">
                <h3 className="font-semibold text-white">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{i.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </PxSection>

      {/* 15 — Trust */}
      <PxSection tone="charcoal" labelledBy="trust">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <PxHeading
              id="trust"
              eyebrow="Trust architecture"
              title="Evidence, not assurances."
              body="Privexa can preserve evidence of exactly which protected representation was authorised to leave your organisation's controlled boundary."
            />
            <div className="mt-8">
              <PxCta href="/trust" variant="secondary">
                Trust & product status
              </PxCta>
            </div>
          </div>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {trustControls.map((t) => (
              <li key={t.title} className="grid gap-1 py-5 sm:grid-cols-[220px_1fr] sm:gap-6">
                <h3 className="text-sm font-semibold text-white">{t.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{t.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </PxSection>

      {/* 16 — CTA */}
      <PxFinalCta
        body="A working session with your own scenario — enterprise AI, clinical data, pathology slides or platform integration."
        secondary={{ label: "Request Trial Access", href: "/privexa/demo?interest=trial" }}
      />
    </div>
  );
}
