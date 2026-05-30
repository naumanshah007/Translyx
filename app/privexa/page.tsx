import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Lock, Eye, GitBranch, UserCheck, CheckCircle2 } from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GovernanceCard } from "@/components/ui/GovernanceCard";
import { products, statusMeta, PRIVEXA_APP_URL } from "@/config/products";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Privexa-built protected AI products clinically positioned through Translyx — AI Wrapper, Cloud Shield, Scribe, Trace, and ClinicalTriage. Privacy-first, governed, traceable, and reviewer-gated by design.";

export const metadata: Metadata = {
  title: "Privexa-Built AI Products — Protected, Governed Software",
  description: pageDescription,
  keywords: [
    "Privexa",
    "Privexa AI Wrapper",
    "Privexa Cloud Shield",
    "Privexa Scribe",
    "Privexa Trace",
    "ClinicalTriage",
    "AI data protection healthcare",
    "reviewer-gated workflows",
  ],
  alternates: { canonical: "/privexa" },
  openGraph: {
    title: "Privexa-Built AI Products — Protected, Governed Software | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/privexa`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Privexa-built products" }],
  },
};

const anchorMap: Record<string, string> = {
  "privexa-ai-wrapper": "ai-wrapper",
  "privexa-cloud-shield": "cloud-shield",
  "privexa-scribe": "scribe",
  "privexa-trace": "trace",
  "clinical-triage": "clinical-triage",
};

const featureMap: Record<string, string[]> = {
  "privexa-ai-wrapper": ["De-identification before model access", "Policy-controlled prompts", "Works with modern LLMs"],
  "privexa-cloud-shield": ["Field-level protection", "Data stays in your environment", "Configurable governance policies"],
  "privexa-scribe": ["Drafts within guardrails", "Structured & traceable output", "Always returned for human sign-off"],
  "privexa-trace": ["Mandatory reviewer gate", "Full end-to-end lineage", "Submission-oriented packaging"],
  "clinical-triage": ["Prioritises clinical review", "Explicit governance", "In pilot with selected partners"],
};

const principles = [
  { icon: Lock, title: "Privacy-first", body: "Sensitive clinical data is protected before it ever reaches an AI model." },
  { icon: GitBranch, title: "Traceable", body: "Decisions and data flows remain auditable end-to-end." },
  { icon: UserCheck, title: "Reviewer-gated", body: "Human sign-off is structural in the workflows that need it." },
  { icon: Eye, title: "Honest limits", body: "Boundaries and assumptions are visible and declared." },
];

export default function PrivexaPage() {
  const privexaProducts = products.filter((p) => p.origin === "privexa");

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Privexa-Built AI Products",
    url: `${siteConfig.url}/privexa`,
    description: pageDescription,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Privexa", item: `${siteConfig.url}/privexa` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Hero
        badge={{ text: "Built by Privexa", icon: <ShieldCheck className="h-3.5 w-3.5 text-cyan-300" /> }}
        headline="Protected AI software, clinically positioned through"
        highlight="Translyx."
        description="Privexa builds the protected software layer for healthcare, diagnostics, research, and evidence workflows. Translyx focuses on clinical positioning and adoption. Privacy-first, governed, traceable, and reviewer-gated by design."
        primaryCTA={{ label: "Visit Privexa", href: PRIVEXA_APP_URL }}
        secondaryCTA={{ label: "Talk to Translyx", href: "/contact" }}
      />

      {/* Principles */}
      <section className="relative overflow-hidden bg-deep py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1100px]">
            <SectionHeader
              tone="dark"
              eyebrow="Built on principle"
              title={<>Governance is built in — <span className="text-gradient-brand">not bolted on.</span></>}
              maxWidth="max-w-2xl"
              className="mb-10"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((p) => (
                <GovernanceCard key={p.title} icon={p.icon} title={p.title} body={p.body} tone="dark" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product detail rows */}
      <section className="bg-white py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1000px]">
            <SectionHeader
              eyebrow="The products"
              title="Five protected AI products, one governed approach"
              className="mb-12"
            />
            <div className="space-y-5">
              {privexaProducts.map((p) => {
                const Icon = p.icon;
                const anchor = anchorMap[p.id];
                const features = featureMap[p.id] ?? [];
                const detailHref = p.id === "privexa-trace" ? "/products/privexa-trace" : null;
                return (
                  <div
                    key={p.id}
                    id={anchor}
                    className="scroll-mt-24 grid gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_16px_-6px_rgba(15,28,63,0.1)] transition-shadow hover:shadow-[0_24px_60px_-32px_rgba(15,28,63,0.3)] sm:p-8 lg:grid-cols-[1.3fr_1fr] lg:items-center"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F8FC] ring-1 ring-slate-200/70">
                          <Icon className="h-[22px] w-[22px] text-[#0891B2]" />
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-700/80">{p.badge}</p>
                            <span
                              className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                                p.status === "available"
                                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                  : "border-amber-200 bg-amber-50 text-amber-700"
                              }`}
                            >
                              {statusMeta[p.status].label}
                            </span>
                          </div>
                          <h3 className="mt-0.5 font-display text-xl font-semibold text-[#0F1C3F]">{p.name}</h3>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">{p.description}</p>
                      {detailHref && (
                        <Link
                          href={detailHref}
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0891B2] hover:text-[#0F1C3F]"
                        >
                          Explore {p.name}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                    <ul className="space-y-2.5 rounded-xl bg-[#F5F8FC] p-5">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0891B2]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-[#F5F8FC] p-6 sm:flex-row">
              <p className="text-sm text-slate-600">
                Privexa is live as an enterprise AI privacy platform.
              </p>
              <a
                href={PRIVEXA_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0F1C3F] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1a2d5a]"
              >
                Visit Privexa
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Bring protected AI into your clinical and evidence workflows."
        description="Translyx positions Privexa-built software for healthcare, diagnostics, and research. Talk to us about the right fit for your organisation."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
