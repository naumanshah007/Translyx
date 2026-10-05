import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { principles, privexaHeroCopy, privexaLine, privexaTagline } from "@/config/privexa";
import { PxCta, PxHeading, PxSection, StatusBadge } from "@/components/privexa/ui";
import { BoundaryDiagram, HowItWorks, ModalityGrid } from "@/components/privexa/Diagrams";
import { VideoGallery } from "@/components/privexa/VideoGallery";
import { PxFinalCta } from "@/components/privexa/FinalCta";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = pageMetadata({
  title: "Translyx — Technology for Trusted AI, Diagnostics and Clinical Transformation",
  description:
    "Translyx is a New Zealand-founded technology company: Privexa privacy-first enterprise AI, digital pathology, diagnostic innovation and healthcare technology — with governance, evidence and human accountability.",
  path: "/",
});

const ecosystem = [
  {
    eyebrow: "Translyx platform",
    title: "Privexa",
    body: "Enterprise AI privacy & control — the control boundary for the AI era.",
    href: "/privexa",
    cta: "Explore Privexa",
    featured: true,
  },
  {
    eyebrow: "Clinical technology",
    title: "Digital pathology",
    body: "AI-enabled pathology and clinical workflow technologies, including Aiforia — an authorised partner solution.",
    href: "/digital-pathology",
    cta: "Explore digital pathology",
  },
  {
    eyebrow: "Partner product",
    title: "Algoscope · surgery-to-pathology",
    body: "AI-powered surgery-to-pathology workflow automation and traceability, brought to New Zealand by Translyx.",
    href: "/products/algoscope",
    cta: "Explore Algoscope",
  },
  {
    eyebrow: "Translational technology",
    title: "Diagnostic innovation",
    body: "Emerging diagnostics across AMR, sepsis, point-of-care, oncology, cardiac and precision medicine.",
    href: "/pipeline",
    cta: "Explore the pipeline",
  },
];

const markets = ["New Zealand", "GCC", "United Arab Emirates", "Saudi Arabia", "International enterprise & healthcare"];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Translyx",
    url: siteConfig.url,
    description: siteConfig.description,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <div className="bg-[#070B10]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1 — Hero */}
      <section className="relative overflow-hidden pb-20 pt-20 sm:pb-28 sm:pt-28 lg:pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_70%_0%,rgba(103,232,249,0.07),transparent_55%)]" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">Translyx · Founded in New Zealand</p>
          <h1 className="mt-6 max-w-5xl text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[4rem] lg:text-[5.2rem]">
            Technology for trusted AI, diagnostics and clinical transformation.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Privacy-first enterprise AI. Digital pathology. Diagnostic innovation. Built and brought into real-world workflows
            with governance, evidence and human accountability.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PxCta href="/privexa">Explore Privexa</PxCta>
            <PxCta href="/digital-pathology" variant="secondary">
              Explore Clinical Technology
            </PxCta>
            <PxCta href="/contact" variant="text" className="sm:ml-3">
              Talk to Translyx
            </PxCta>
          </div>
        </div>
      </section>

      {/* 2 — Ecosystem */}
      <section aria-labelledby="ecosystem" className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 id="ecosystem" className="sr-only">Translyx technology ecosystem</h2>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {ecosystem.map((e) => (
              <li
                key={e.title}
                className={
                  e.featured
                    ? "md:col-span-2 lg:row-span-2"
                    : e.title === "Diagnostic innovation"
                      ? "md:col-span-2 lg:col-span-2"
                      : ""
                }
              >
                <Link
                  href={e.href}
                  className={`group flex h-full flex-col justify-between rounded-3xl border p-7 transition-colors sm:p-8 ${
                    e.featured
                      ? "border-cyan-300/30 bg-gradient-to-b from-cyan-300/[0.06] to-transparent hover:border-cyan-300/50"
                      : "border-white/10 hover:border-white/25"
                  }`}
                >
                  <div>
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${e.featured ? "text-cyan-300" : "text-slate-500"}`}>
                      {e.eyebrow}
                    </p>
                    <h3
                      className={`mt-4 font-semibold tracking-[-0.03em] text-white ${
                        e.featured ? "text-[2.5rem] leading-none sm:text-[3.5rem]" : "text-xl"
                      }`}
                    >
                      {e.title}
                    </h3>
                    <p className={`mt-4 leading-relaxed text-slate-400 ${e.featured ? "max-w-md text-lg" : "text-sm"}`}>{e.body}</p>
                    {e.featured && (
                      <p className="mt-8 font-mono text-xs text-slate-500">Text · Documents · Images · WSI · Audio · API</p>
                    )}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 group-hover:text-white">
                    {e.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 — Featured Privexa */}
      <PxSection tone="charcoal" labelledBy="featured">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-white">Privexa</p>
          <h2 id="featured" className="mx-auto mt-6 max-w-4xl text-balance text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-[3.6rem]">
            {privexaTagline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{privexaHeroCopy}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <PxCta href="#see-it">Watch Demo</PxCta>
            <PxCta href="/privexa/demo" variant="secondary">
              Request Enterprise Demo
            </PxCta>
          </div>
          <p className="mt-8 font-mono text-xs tracking-wide text-slate-500">
            Text · Documents · Images · Whole-Slide Pathology · Audio · API
          </p>
        </div>
        <Reveal className="mt-16">
          <BoundaryDiagram />
        </Reveal>
      </PxSection>

      {/* 4 — Why */}
      <PxSection labelledBy="why">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <PxHeading id="why" eyebrow="Why Privexa" title="AI is moving faster than enterprise data controls." />
          <div className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            <p>Organisations increasingly use external AI, and valuable, sensitive information follows the workflow.</p>
            <p>Blanket AI bans often drive shadow usage instead. What organisations need is a governed boundary.</p>
            <p className="text-white">Privexa creates the control boundary before AI egress.</p>
          </div>
        </div>
      </PxSection>

      {/* 5 — Principles */}
      <PxSection tone="charcoal" labelledBy="principles">
        <h2 id="principles" className="sr-only">Three principles</h2>
        <ul className="grid gap-12 md:grid-cols-3 md:gap-10">
          {principles.map((p) => (
            <li key={p.title}>
              <span className="block h-px w-10 bg-cyan-300" aria-hidden />
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">{p.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-400">{p.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-center text-lg font-medium text-slate-200">{privexaLine}</p>
      </PxSection>

      {/* 6 — How it works */}
      <PxSection labelledBy="how">
        <PxHeading id="how" eyebrow="How Privexa works" title="Understand. Protect. Authorise. Reconstruct. Prove." />
        <div className="mt-12">
          <HowItWorks />
        </div>
      </PxSection>

      {/* 7 — Multimodal */}
      <PxSection tone="charcoal" labelledBy="multimodal">
        <PxHeading id="multimodal" eyebrow="Multimodal privacy" title="One privacy boundary. Multiple data modalities." />
        <div className="mt-12">
          <ModalityGrid />
        </div>
      </PxSection>

      {/* 8 — Videos */}
      <PxSection id="see-it" labelledBy="videos">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <PxHeading id="videos" eyebrow="See Privexa in action" title="Watch the platform." />
          <PxCta href="/resources#videos" variant="text">
            All resources
          </PxCta>
        </div>
        <div className="mt-12">
          <VideoGallery />
        </div>
      </PxSection>

      {/* 9 — Digital pathology */}
      <PxSection tone="light" labelledBy="pathology">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <PxHeading
              id="pathology"
              tone="light"
              eyebrow="Digital pathology"
              title="Clinical technology, from grossing bench to slide."
              body="Translyx represents leading pathology technologies in New Zealand. Privexa complements them where slides and reports need to travel — without being part of those partner products."
            />
            <div className="mt-8">
              <PxCta href="/digital-pathology" variant="primary-light">
                Explore digital pathology
              </PxCta>
            </div>
          </div>
          <ul className="grid gap-3">
            {[
              { t: "Aiforia", d: "Authorised partner solution — AI-assisted digital pathology.", h: "/products/aiforia" },
              { t: "Algoscope", d: "Partner product — surgery-to-pathology workflow automation.", h: "/products/algoscope" },
              { t: "Privexa WSI privacy", d: "Translyx platform — whole-slide privacy controls.", h: "/privexa/wsi", s: true },
            ].map((x) => (
              <li key={x.t}>
                <Link
                  href={x.h}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300"
                >
                  <span>
                    <span className="flex flex-wrap items-center gap-3">
                      <span className="text-lg font-semibold text-[#0B1117]">{x.t}</span>
                      {x.s && <StatusBadge status="validation" tone="light" />}
                    </span>
                    <span className="mt-1 block text-sm text-slate-600">{x.d}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </PxSection>

      {/* 10 — Global */}
      <PxSection labelledBy="global">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <PxHeading
            id="global"
            eyebrow="Global relevance"
            title="Founded in New Zealand. Built for sensitive environments everywhere."
            body="Translyx works from Auckland with organisations whose data, regulation and clinical practice demand care."
          />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Markets in focus</p>
            <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {markets.map((m) => (
                <li key={m} className="py-4 text-base text-slate-200">{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </PxSection>

      {/* 11 — Final CTA */}
      <PxFinalCta />
    </div>
  );
}
