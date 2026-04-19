import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Prose } from "@/components/ui/Prose";
import { siteConfig } from "@/config/site";
import { Shield, Users, MapPin, Calendar, ArrowRight, Building2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Provenance } from "@/components/sections/Provenance";
import Link from "next/link";

const aboutDescription = `Learn about ${siteConfig.companyName} — the Auckland-based clinical technology company behind Privexa Trace, Privexa AI protection, and a broader diagnostic pipeline for New Zealand healthcare.`;

export const metadata: Metadata = {
  title: "About Translyx — Clinical Technology from Auckland, New Zealand",
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
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Translyx | Clinical Technology from Auckland, New Zealand",
    description: aboutDescription,
    url: `${siteConfig.url}/about`,
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
  { id: "leadership", label: "Leadership" },
  { id: "operational-territory", label: "Territory" },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Translyx",
    url: `${siteConfig.url}/about`,
    description: aboutDescription,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
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
              Auckland-based clinical technology holding entity — the governed evidence layer for clinical AI in New Zealand and Oceania.
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
      <div className="bg-[#F7F5F1] border-b border-slate-200/60 py-5">
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
                    Translyx Limited exists to introduce innovative diagnostic and clinical products to the New Zealand healthcare sector — supporting clinicians and health services with timely access to high-quality technologies that enable effective patient care.
                  </p>
                  <p>
                    Our highly experienced team brings decades of collective experience across diagnostics, laboratory medicine, clinical implementation, and healthcare supply. We focus on identifying globally validated clinical innovations and making them available to healthcare providers across hospital, community, and research settings.
                  </p>
                  <p>
                    Translyx takes a systems-based approach to product introduction, recognising that access to appropriate diagnostic and clinical tools plays an important role in supporting clinical decision-making and contributing to improved patient outcomes.
                  </p>
                </Prose>
              </CardContent>
            </Card>
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

          {/* CTA strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl border border-[#0F1C3F]/15 bg-[#F7F5F1] p-6 sm:p-8">
            <div>
              <h3 className="text-lg font-semibold text-[#0F1C3F]">Ready to evaluate Privexa Trace with your team?</h3>
              <p className="mt-1 text-sm text-slate-600">Talk to Translyx about reviewer-gated evidence workflows and AI data protection.</p>
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
