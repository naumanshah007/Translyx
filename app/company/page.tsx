import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Prose } from "@/components/ui/Prose";
import { siteConfig } from "@/config/site";
import { Shield, Users, MapPin, Calendar, ArrowRight, Building2, Handshake, Microscope, Lock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Provenance } from "@/components/sections/Provenance";
import Link from "next/link";

const aboutDescription = `Learn about ${siteConfig.companyName} — the Auckland-based clinical technology company connecting partner diagnostic solutions, digital pathology AI, and governed clinical AI workflow capabilities for New Zealand healthcare.`;

export const metadata: Metadata = {
  title: "Company — Translyx, Clinical Technology from Auckland, New Zealand",
  description: aboutDescription,
  keywords: [
    "about Translyx",
    "Translyx Limited",
    "Translyx Auckland",
    "Dr Ehsan Ullah",
    "New Zealand healthcare technology company",
    "clinical technology NZ",
    "Translyx founding",
  ],
  alternates: { canonical: "/company" },
  openGraph: {
    title: "Company | Translyx — Clinical Technology from Auckland, New Zealand",
    description: aboutDescription,
    url: `${siteConfig.url}/company`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "About Translyx" }],
  },
};

const leadershipPrimary = {
  name: "Dr Ehsan Ullah",
  title: "Founding Director",
  avatar: "/images/leadership/ehsan-presenting.jpg",
};

const leadershipText = `Translyx Ltd was established in December 2025 by Dr Ehsan Ullah, an Auckland-based physician scientist and healthcare entrepreneur advancing clinical diagnostic solutions in New Zealand.

Globally, the diagnostic market is undergoing rapid transformation driven by emerging trends in antimicrobial resistance (AMR), sepsis diagnostics, point-of-care testing, endocrinology, cardiac markers, artificial intelligence, and precision medicine. These advances are reshaping clinical decision-making and patient outcomes, creating a clear and urgent need for experienced leadership to bring advanced diagnostic technologies onshore to meet local healthcare demands.

Dr Ullah brings an established professional profile at the intersection of clinical practice, laboratory medicine, and health technology innovation — including leadership roles across specialised diagnostics and digital health initiatives. His vision for Translyx is grounded in translating cutting-edge global diagnostic innovations into practical, high-impact solutions for the New Zealand healthcare system.

The Translyx senior leadership team includes healthcare professionals with over 50 years of collective experience across the in vitro diagnostics (IVD) market, pathology services, and next-generation molecular diagnostic solutions. The team is committed to building strategic partnerships and expanding access to high-quality, clinically meaningful diagnostic tools.

Translyx Ltd represents Dr Ullah's commitment to strengthening diagnostic capability in Aotearoa New Zealand — supporting clinicians, laboratories, and healthcare providers with advanced solutions that improve patient care and system resilience.`;

const operationalTerritoryText = `Translyx operates primarily in New Zealand, with planned expansion into Australia and the broader Oceania region, including selected Pacific Island markets. The company works closely with local laboratories, hospitals, and healthcare providers to ensure diagnostic solutions are relevant, practical, and aligned with real clinical needs.

Through regional partnerships and scalable distribution models, Translyx aims to strengthen diagnostic capability across Oceania while enabling efficient market access for international diagnostic innovators.`;

const sectionAnchors = [
  { id: "our-mission", label: "Our mission" },
  { id: "single-platform", label: "Platform model" },
  { id: "leadership", label: "Leadership" },
  { id: "how-we-work", label: "How we work" },
  { id: "operational-territory", label: "Territory" },
  { id: "responsible-ai", label: "Responsible AI" },
];

const platformModel = [
  {
    icon: Building2,
    name: "Translyx Limited",
    role: "The single platform",
    body: "The accountable New Zealand company — clinical positioning, diagnostic adoption, local partnerships, and healthcare implementation across Oceania, under one brand.",
  },
  {
    icon: Handshake,
    name: "Partner products",
    role: "Aiforia & Algoscope",
    body: "Aiforia digital pathology AI and Algoscope surgery-to-pathology workflow automation — partner products represented by Translyx, not Translyx-owned.",
  },
  {
    icon: Lock,
    name: "Translyx Pipeline",
    role: "Capabilities under evaluation",
    body: "Governed clinical AI workflow capabilities — AI Wrapper, Cloud Shield, Scribe, Trace, and ClinicalTriage — under evaluation and development, not publicly launched.",
  },
];

/* Folded in from the former /services page */
const howWeWorkText = `At Translyx Limited, we provide expert professional services and consultancy tailored to the healthcare and diagnostics sector. Drawing on our team's extensive expertise across biomedical sciences, digital pathology, artificial intelligence, molecular diagnostics, and translational innovation, we deliver strategic guidance on diagnostic implementation, technology adoption, assay development, targeted therapy development, and healthcare systems optimisation.

We also support learning and development initiatives that advance translational innovation and inform precision medicine. Through this integrated approach, we partner with organisations, innovators, and health systems to refine product strategies and accelerate the impact of novel healthcare solutions and technologies in New Zealand and globally.`;

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Translyx",
    url: `${siteConfig.url}/company`,
    description: aboutDescription,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Company", item: `${siteConfig.url}/company` },
      ],
    },
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.url,
      foundingDate: "2025-12",
      foundingLocation: { "@type": "Place", name: "Auckland, New Zealand" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Auckland",
        addressCountry: "NZ",
      },
      email: siteConfig.company.email,
      knowsAbout: [
        "clinical AI governance",
        "synthetic control arms",
        "evidence workflows",
        "diagnostic technology",
        "in vitro diagnostics",
      ],
      founder: {
        "@type": "Person",
        name: leadershipPrimary.name,
        jobTitle: leadershipPrimary.title,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Page header */}
      <section className="bg-[#0F1C3F] py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <Building2 className="h-3.5 w-3.5 text-slate-300" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Company</span>
            </div>
            <h1 className="text-display-sm font-semibold text-white mb-4">About Translyx</h1>
            <p className="text-lg text-white/65 max-w-2xl leading-relaxed mb-8">
              Auckland-based clinical technology company — connecting diagnostics, digital pathology AI, and governed AI software for New Zealand and Oceania.
            </p>
            <div className="flex flex-wrap gap-2">
              {sectionAnchors.map(({ id, label }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="inline-flex items-center min-h-[36px] px-4 py-2 rounded-full text-xs font-semibold bg-white/8 border border-white/15 text-slate-300 hover:bg-white/12 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <div className="bg-[#F5F8FC] border-b border-slate-200/60 py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-slate-400" />
              Founded December 2025
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-slate-400" />
              Auckland, New Zealand
            </span>
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-slate-400" />
              Translyx Limited
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-slate-400" />
              Registered in New Zealand
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="max-w-content mx-auto space-y-20 sm:space-y-24">

          {/* Mission */}
          <section id="our-mission" className="scroll-mt-24">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F1C3F]/6">
                <Shield className="h-4 w-4 text-[#0F1C3F]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">Our mission</h2>
            </div>
            <Card className="p-5 sm:p-7 lg:p-10" cornerAccent>
              <CardContent className="pt-0">
                <Prose className="space-y-5 text-slate-700">
                  <p>
                    Translyx Limited brings advanced diagnostic and clinical products to the New Zealand healthcare sector — giving clinicians and health services access to technologies that improve diagnostic accuracy, clinical decision-making, and patient outcomes.
                  </p>
                  <p>
                    The team combines deep expertise across diagnostics, laboratory medicine, clinical implementation, and healthcare supply. That experience informs how Translyx selects, evaluates, and introduces globally validated innovations — matching the right technology to the right clinical environment, across hospital, community, and research settings.
                  </p>
                  <p>
                    Translyx approaches product introduction at the system level. Diagnostic capability is not an isolated procurement decision — it shapes how clinicians make decisions, how labs operate, and how patients experience care.
                  </p>
                </Prose>
              </CardContent>
            </Card>
          </section>

          {/* Single-platform model */}
          <section id="single-platform" className="scroll-mt-24">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F1C3F]/6">
                <Handshake className="h-4 w-4 text-[#0F1C3F]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0F1C3F] sm:text-3xl">One platform, one accountable brand</h2>
            </div>
            <p className="mb-7 max-w-3xl text-base leading-relaxed text-slate-600">
              Translyx is the trusted bridge between global diagnostic innovation and local clinical adoption — a single
              public platform spanning partner products, governed clinical AI workflow capabilities, and diagnostic
              innovation, accountable for clinical implementation in New Zealand and Oceania.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {platformModel.map(({ icon: Icon, name, role, body }) => (
                <Card key={name} className="p-5 sm:p-6" hover={false}>
                  <CardContent className="pt-0">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F8FC] ring-1 ring-slate-200/70">
                      <Icon className="h-5 w-5 text-[#0891B2]" />
                    </span>
                    <p className="mt-4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#0891B2]">{role}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-[#0F1C3F]">{name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              Aiforia and Algoscope are partner products represented by Translyx in New Zealand — not owned or developed
              by Translyx. Pipeline capabilities are under evaluation or development and are not publicly launched products.
            </p>
          </section>

          {/* Leadership */}
          <section id="leadership" className="scroll-mt-24">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F1C3F]/6">
                <Users className="h-4 w-4 text-[#0F1C3F]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">Leadership</h2>
            </div>
            <Card className="p-5 sm:p-7 lg:p-10">
              <div className="flex flex-col sm:flex-row gap-7 sm:gap-10">
                <div className="flex-shrink-0">
                  <div className="aspect-square w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F1C3F]/10 to-[#22D3EE]/10 flex items-center justify-center shadow-lg">
                    <Image
                      src="/images/leadership/ehsan-presenting.jpg"
                      alt={leadershipPrimary.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F] mb-0.5">{leadershipPrimary.name}</h3>
                  <p className="text-[#0891B2] font-semibold text-base mb-5">{leadershipPrimary.title}</p>
                  <Prose className="space-y-4 text-slate-700">
                    {leadershipText.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </Prose>
                </div>
              </div>
            </Card>
          </section>

          {/* How we work — folded in from the former /services page */}
          <section id="how-we-work" className="scroll-mt-24">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F1C3F]/6">
                <Handshake className="h-4 w-4 text-[#0F1C3F]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">How we work</h2>
            </div>
            <Card className="p-5 sm:p-7 lg:p-10" cornerAccent>
              <CardContent className="pt-0">
                <Prose className="space-y-5 text-slate-700">
                  {howWeWorkText.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  <p>
                    Please contact us at{" "}
                    <a href={`mailto:${siteConfig.team.ehsan.email}`} className="font-semibold text-[#0891B2]">
                      {siteConfig.team.ehsan.email}
                    </a>{" "}
                    or{" "}
                    <a href={`mailto:${siteConfig.company.email}`} className="font-semibold text-[#0891B2]">
                      {siteConfig.company.email}
                    </a>{" "}
                    for details.
                  </p>
                </Prose>
              </CardContent>
            </Card>
          </section>

          {/* Operational territory */}
          <section id="operational-territory" className="scroll-mt-24">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F1C3F]/6">
                <MapPin className="h-4 w-4 text-[#0F1C3F]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">Operational territory</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Card className="p-5 sm:p-7">
                <CardContent className="pt-0">
                  <Prose className="text-slate-700">
                    <p>{operationalTerritoryText}</p>
                  </Prose>
                </CardContent>
              </Card>
              <div className="space-y-4">
                {[
                  { label: "Primary", regions: ["New Zealand — national"] },
                  { label: "Expanding", regions: ["Australia", "Pacific Island markets"] },
                  { label: "Partner model", regions: ["Local labs and hospitals", "Academic research centres", "Manufacturer partnerships"] },
                ].map(({ label, regions }) => (
                  <Card key={label} className="p-4 sm:p-5" hover={false}>
                    <CardContent className="pt-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">{label}</p>
                      <ul className="space-y-1">
                        {regions.map((r) => (
                          <li key={r} className="text-sm font-semibold text-[#0F1C3F]">{r}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Responsible AI */}
          <section id="responsible-ai" className="scroll-mt-24">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F1C3F]/6">
                <ShieldCheck className="h-4 w-4 text-[#0F1C3F]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0F1C3F] sm:text-3xl">Responsible AI &amp; clinical governance</h2>
            </div>
            <Card className="overflow-hidden p-0" hover={false}>
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="p-6 sm:p-8">
                  <Prose className="space-y-4 text-slate-700">
                    <p>
                      As AI enters diagnostic and evidence workflows, Translyx delivers solutions that are governed,
                      reviewable, and honest about their boundaries. Governance, traceability, visible limitations, and
                      reviewer gates are structural features of the workflow — not disclaimers added after the fact.
                    </p>
                    <p>
                      We make no implied regulatory endorsement, and we are explicit about what each solution does and does
                      not do. Human oversight remains central: AI assists clinical judgement, it does not replace it.
                    </p>
                  </Prose>
                </div>
                <div className="border-t border-slate-200/70 bg-[#0F1C3F] p-6 sm:p-8 lg:border-l lg:border-t-0">
                  <ul className="space-y-3">
                    {[
                      { icon: Users, label: "Reviewer gates & human oversight" },
                      { icon: Shield, label: "Field-level data protection" },
                      { icon: Microscope, label: "Visible limitations, declared" },
                      { icon: ShieldCheck, label: "No implied regulatory endorsement" },
                    ].map(({ icon: Icon, label }) => (
                      <li key={label} className="flex items-start gap-3 text-sm text-slate-200">
                        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          {/* CTA strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl border border-[#0F1C3F]/15 bg-[#F5F8FC] p-6 sm:p-8">
            <div>
              <h3 className="text-lg font-semibold text-[#0F1C3F]">Work with Translyx</h3>
              <p className="mt-1 text-sm text-slate-600">Speak with the team about diagnostic product evaluation, partner products, or the broader Translyx pipeline.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button asChild variant="primary" size="lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/products">See products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Provenance />
    </>
  );
}
