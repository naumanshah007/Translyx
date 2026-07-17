import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Handshake, CheckCircle2, MapPin, Clock } from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { partners, upcomingPartners, partnerValues, type PartnerAccent } from "@/config/partners";
import { getProductIcon } from "@/lib/productIcons";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Translyx is the New Zealand and Oceania partner for global clinical-technology innovators. Aiforia is our authorised digital pathology AI partner and Algoscope our surgery-to-pathology workflow automation partner — with a growing partner network.";

export const metadata: Metadata = {
  title: "Partners — Aiforia, Algoscope & the Translyx Partner Network",
  description: pageDescription,
  keywords: [
    "Translyx partners",
    "Aiforia partner New Zealand",
    "Algoscope partner New Zealand",
    "clinical technology partnership NZ",
    "become a partner New Zealand healthcare",
    "digital pathology AI partner",
  ],
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Partners — Aiforia & the Translyx Partner Network",
    description: pageDescription,
    url: `${siteConfig.url}/partners`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Translyx Partners" }],
  },
};

const accent: Record<PartnerAccent, { color: string; soft: string; glow: string }> = {
  cyan: { color: "#22D3EE", soft: "rgba(34,211,238,0.14)", glow: "rgba(34,211,238,0.40)" },
  violet: { color: "#A78BFA", soft: "rgba(139,92,246,0.16)", glow: "rgba(139,92,246,0.38)" },
  teal: { color: "#2DD4BF", soft: "rgba(45,212,191,0.16)", glow: "rgba(45,212,191,0.38)" },
  emerald: { color: "#34D399", soft: "rgba(52,211,153,0.16)", glow: "rgba(52,211,153,0.38)" },
  sky: { color: "#38BDF8", soft: "rgba(56,189,248,0.16)", glow: "rgba(56,189,248,0.38)" },
};

export default function PartnersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Translyx Partners",
    url: `${siteConfig.url}/partners`,
    description: pageDescription,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Partners", item: `${siteConfig.url}/partners` },
      ],
    },
    about: partners.map((p) => ({ "@type": "Organization", name: p.name })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Hero
        badge={{ text: "Partner network", icon: <Handshake className="h-3.5 w-3.5 text-cyan-300" /> }}
        headline="Your bridge to New Zealand and Oceania"
        highlight="healthcare."
        description="Translyx partners with global diagnostic and clinical-AI innovators — bringing world-class technology to New Zealand and Oceania with local expertise, governance, and clinical adoption. Aiforia and Algoscope are our current partner products, and the network is growing."
        primaryCTA={{ label: "Become a partner", href: "/contact?topic=partner" }}
        secondaryCTA={{ label: "Explore products", href: "/products" }}
      />

      {/* Why partner with Translyx */}
      <section className="bg-white py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1140px]">
            <SectionHeader
              align="center"
              eyebrow="Why partner with Translyx"
              title={
                <>
                  A trusted local partner for{" "}
                  <span className="text-[#0E7490]">global innovators.</span>
                </>
              }
              description="Bringing diagnostic and AI technology into a new region takes more than distribution. Translyx provides the clinical, regulatory, and operational bridge to adopt it well."
              maxWidth="max-w-2xl"
              className="mb-12"
            />
            <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {partnerValues.map((v) => {
                const Icon = getProductIcon(v.icon);
                return (
                  <div
                    key={v.title}
                    className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_16px_-6px_rgba(15,28,63,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_24px_60px_-30px_rgba(8,145,178,0.5)]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F8FC] ring-1 ring-slate-200/70">
                      <Icon className="h-[22px] w-[22px] text-[#0E7490]" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-[#0F1C3F]">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.body}</p>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Current partners */}
      <section className="relative overflow-hidden bg-deep py-18 sm:py-24">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1100px]">
            <SectionHeader
              tone="dark"
              eyebrow="Our partners"
              title={
                <>
                  The companies behind Translyx{" "}
                  <span className="text-gradient-brand">solutions.</span>
                </>
              }
              maxWidth="max-w-2xl"
              className="mb-12"
            />
            <Reveal className="grid gap-5 lg:grid-cols-2">
              {partners.map((p) => {
                const a = accent[p.accent];
                const Icon = getProductIcon(p.icon);
                return (
                  <div
                    key={p.slug}
                    id={p.slug}
                    className="group relative scroll-mt-24 overflow-hidden rounded-2xl glass-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-cyan-400/30"
                  >
                    <span
                      className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: a.soft }}
                    />
                    <div className="relative flex items-start justify-between gap-4">
                      <span
                        className="flex h-14 w-14 items-center justify-center rounded-xl ring-1 ring-inset ring-white/15"
                        style={{ background: a.soft }}
                      >
                        <Icon className="h-6 w-6" style={{ color: a.color }} aria-hidden="true" />
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                        <CheckCircle2 className="h-3 w-3" />
                        Active partner
                      </span>
                    </div>
                    <p
                      className="relative mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em]"
                      style={{ color: a.color }}
                    >
                      {p.type}
                    </p>
                    <h3 className="relative mt-1 font-display text-2xl font-semibold text-white">{p.name}</h3>
                    <div className="relative mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                      <span>{p.category}</span>
                      {p.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {p.location}
                        </span>
                      )}
                    </div>
                    <p className="relative mt-3 text-sm leading-relaxed text-white/65">{p.description}</p>
                    <Link
                      href={p.href}
                      className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white"
                    >
                      Explore {p.shortName}
                      {p.external ? (
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      ) : (
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </Link>
                  </div>
                );
              })}
            </Reveal>
            <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-slate-400">
              Aiforia and Algoscope are partner products Translyx brings to New Zealand — not owned or developed
              by Translyx. Product-specific regulatory status should be confirmed with each partner and the relevant
              regulatory authorities.
            </p>
          </div>
        </div>
      </section>

      {/* Expanding network */}
      <section className="bg-[#F5F8FC] py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1100px]">
            <SectionHeader
              eyebrow="Expanding the network"
              title="New partners are joining — announcing soon."
              description="Translyx is actively bringing new diagnostic and AI partners to New Zealand and Oceania across these areas."
              className="mb-12"
            />
            <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingPartners.map((u) => {
                const Icon = getProductIcon(u.icon);
                const a = accent[u.accent];
                return (
                  <div
                    key={u.area}
                    className="relative overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white/70 p-6"
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ring-slate-200/70"
                        style={{ background: a.soft }}
                      >
                        <Icon className="h-5 w-5" style={{ color: a.color }} aria-hidden="true" />
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                        <Clock className="h-3 w-3" />
                        Announcing soon
                      </span>
                    </div>
                    <p className="mt-4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                      {u.category}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-[#0F1C3F]">{u.area}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      Partner in discussion to bring this capability to New Zealand and Oceania.
                    </p>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Become a partner */}
      <section id="become-a-partner" className="scroll-mt-24 bg-white py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1100px]">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F1C3F] to-[#0B1430] p-8 shadow-[0_30px_80px_-40px_rgba(15,28,63,0.6)] sm:p-12">
              <div className="pointer-events-none absolute inset-0 grain-overlay opacity-[0.06] mix-blend-overlay" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_65%)] blur-2xl" />
              <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <p className="mb-4 inline-flex items-center gap-2 rounded-full glass-panel px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                    <Handshake className="h-3.5 w-3.5" /> Become a partner
                  </p>
                  <h2 className="font-display text-[1.75rem] font-semibold leading-tight text-white sm:text-[2.2rem]">
                    Bring your innovation to New Zealand and Oceania.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-white/65">
                    If you build diagnostic technology, digital pathology AI, or protected clinical software, Translyx can
                    be your accountable local partner — handling clinical positioning, governance, adoption, and
                    implementation across the region.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/contact?topic=partner"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-[#06121f] shadow-[0_8px_30px_-6px_rgba(34,211,238,0.5)] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Start a partnership conversation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center gap-2 rounded-xl glass-panel px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.14]"
                  >
                    See what we deliver
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Let's bring world-class clinical technology to the region."
        description="Whether you're a global innovator seeking local adoption or a healthcare organisation evaluating partner solutions — Translyx is the bridge."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "Explore products", href: "/products" }}
      />
    </>
  );
}
