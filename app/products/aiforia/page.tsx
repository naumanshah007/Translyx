import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Microscope,
  FlaskConical,
  GraduationCap,
  Building2,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Layers3,
  Users,
  BarChart3,
  Eye,
  ExternalLink,
} from "lucide-react";

import { HeroSection } from "@/components/sections/HeroSection";
import { SlideViewerPanel } from "@/components/sections/SlideViewerPanel";
import { AdoptionPathway } from "@/components/sections/AdoptionPathway";
import { CTA } from "@/components/sections/CTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Translyx is an authorised non-exclusive business partner of Aiforia Technologies Plc in New Zealand, representing Aiforia Clinical Suites and Aiforia Create Platform for AI-assisted digital pathology workflows.";

export const metadata: Metadata = {
  title: "Aiforia Digital Pathology AI — Authorised Partner Solution",
  description: pageDescription,
  keywords: [
    "Aiforia New Zealand",
    "Aiforia partner New Zealand",
    "Aiforia Clinical Suites",
    "Aiforia Create",
    "digital pathology AI",
    "digital pathology New Zealand",
    "AI pathology",
    "Translyx Aiforia",
    "breast cancer AI pathology",
    "prostate cancer AI pathology",
    "lung cancer PD-L1 AI",
  ],
  alternates: { canonical: "/products/aiforia" },
  openGraph: {
    title: "Aiforia Digital Pathology AI — Authorised Partner Solution | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/products/aiforia`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Aiforia Digital Pathology AI — Translyx" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aiforia Digital Pathology AI — Authorised Partner Solution | Translyx",
    description: pageDescription,
    images: [siteConfig.seo.ogImage],
  },
};

const clinicalSuites = [
  {
    name: "Breast Cancer Suite",
    models: ["Breast Cancer Grading", "ER", "PR", "HER2", "Ki67", "Lymph Node Metastasis"],
    note: "CE-IVD marked in EU/EEA",
  },
  {
    name: "Prostate Cancer Suite",
    models: ["Prostate Cancer Biopsy", "PNI", "G4 Cribriform", "HG-PIN"],
    note: "Select models CE-IVD marked in EU/EEA",
  },
  {
    name: "Lung Cancer Suite",
    models: ["Lung Cancer PD-L1"],
    note: "CE-IVD marked in EU/EEA",
  },
  {
    name: "Gastric Suite",
    models: ["Gastric Cancer", "H. pylori"],
    note: "Select models CE-IVD marked in EU/EEA",
  },
  {
    name: "Colon Suite",
    models: ["QuantCRC", "Lymph Node Metastasis"],
    note: "Select models under performance studies",
  },
  {
    name: "Lymph Node Metastasis",
    models: ["Breast cancer metastasis", "Melanoma metastasis", "Colorectal cancer metastasis"],
    note: "CE-IVD marked in EU/EEA for select indications",
  },
];

const audienceSegments = [
  { icon: Building2, label: "Pathology Laboratories", description: "AI-assisted scoring, grading, and quantitative outputs for clinical workflows" },
  { icon: FlaskConical, label: "Research Teams", description: "Deep learning model development for histological image analysis" },
  { icon: GraduationCap, label: "Preclinical & Non-Clinical", description: "GLP-oriented study workflows and automated image analysis" },
  { icon: Users, label: "Pharma & CROs", description: "Standardised, reproducible analysis for clinical and preclinical studies" },
];

const partnerFacts = [
  "Authorised non-exclusive business partner of Aiforia Technologies Plc",
  "Territory: New Zealand",
  "Authorised to represent and promote Aiforia products and associated services",
  "Covers Aiforia Clinical Suites and Aiforia Create Platform",
  "Authorisation valid for one year from April 2026",
  "Non-transferable; may be withdrawn by Aiforia at any time",
];

export default function AiforiaPage() {
  const aiforiaSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Aiforia Digital Pathology AI — Translyx",
    url: `${siteConfig.url}/products/aiforia`,
    description: pageDescription,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Products", item: `${siteConfig.url}/products` },
        { "@type": "ListItem", position: 3, name: "Aiforia Digital Pathology AI", item: `${siteConfig.url}/products/aiforia` },
      ],
    },
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiforiaSchema) }}
      />

      <HeroSection
        badge={{ text: "Authorised partner solution · Aiforia Technologies Plc", icon: Microscope }}
        headline="Aiforia Digital Pathology AI, represented in"
        highlight="New Zealand."
        description="Translyx is authorised to represent Aiforia Clinical Suites and Aiforia Create Platform in New Zealand — helping pathology, research, preclinical, and healthcare organisations evaluate AI-assisted digital pathology workflows."
        ctas={[
          { label: "Discuss Aiforia for your lab", href: "/contact?topic=aiforia", variant: "primary" },
          { label: "See all products", href: "/products", variant: "glass" },
        ]}
        visual={<SlideViewerPanel />}
      />

      {/* Audience */}
      <section className="bg-[#F5F8FC] border-b border-slate-200/60 py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 mb-5 text-center">Who this is for</p>
            <Reveal className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {audienceSegments.map(({ icon: Icon, label, description }) => (
                <div key={label} className="rounded-xl bg-white border border-slate-200/80 p-4 text-center shadow-[0_1px_8px_-2px_rgba(15,28,63,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_18px_40px_-22px_rgba(8,145,178,0.5)]">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50">
                    <Icon className="h-5 w-5 text-cyan-700" />
                  </div>
                  <p className="text-sm font-semibold text-[#0F1C3F]">{label}</p>
                  <p className="mt-1 text-xs text-slate-500 leading-snug">{description}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* What Translyx represents */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="p-5 sm:p-7 lg:p-8" cornerAccent>
              <CardHeader className="p-0">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded border bg-cyan-50 text-cyan-700 border-cyan-200">
                    Authorised partner solution
                  </span>
                </div>
                <CardTitle className="text-2xl sm:text-3xl text-[#0F1C3F]">
                  What Translyx represents
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-5 space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  Translyx Limited is an authorised non-exclusive business partner of Aiforia Technologies Plc in New Zealand. This authorisation covers the representation and promotion of Aiforia products and associated services under two primary brand names:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-xl border border-cyan-100 bg-cyan-50/50 p-4">
                    <p className="text-sm font-bold text-[#0F1C3F]">Aiforia Clinical Suites</p>
                    <p className="mt-1 text-xs text-slate-600">AI-assisted clinical pathology workflows with standardised scoring and quantitative outputs</p>
                  </div>
                  <div className="rounded-xl border border-cyan-100 bg-cyan-50/50 p-4">
                    <p className="text-sm font-bold text-[#0F1C3F]">Aiforia Create Platform</p>
                    <p className="mt-1 text-xs text-slate-600">Cloud-based deep learning model development for histological image analysis</p>
                  </div>
                </div>
                <p>
                  Translyx helps New Zealand pathology laboratories, research teams, and healthcare organisations evaluate how Aiforia&apos;s digital pathology AI can strengthen their workflows — from clinical scoring to preclinical study management.
                </p>
                <div className="mt-6">
                  <Button asChild variant="primary" size="lg">
                    <Link href="/contact?topic=aiforia" className="flex items-center gap-2">
                      Discuss Aiforia for your organisation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Partner facts */}
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 mb-4">Authorisation details</p>
              {partnerFacts.map((fact) => (
                <div key={fact} className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-[#F5F8FC] p-4">
                  <CheckCircle2 className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Suites */}
      <section className="bg-[#F5F8FC] py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <SectionHeader
              eyebrow="Aiforia Clinical Suites"
              title="AI-assisted clinical pathology workflows"
              description="Aiforia Clinical Suites combine a worklist, interactive Clinical Viewer, quantitative AI models and case-level reporting for explainable first-read support."
              maxWidth="max-w-2xl"
              className="mb-10"
            />

            <div className="mb-8 overflow-hidden rounded-[1.75rem] border border-cyan-200/60 bg-[#081326] shadow-[0_28px_80px_-48px_rgba(8,145,178,0.65)]">
              <div className="grid lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
                <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px]">
                  <Image
                    src="/images/partners/aiforia-lung-pdl1.webp"
                    alt="Aiforia lung PD-L1 clinical AI image with transparent cell-level overlays"
                    fill
                    sizes="(min-width: 1024px) 650px, 94vw"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#081326]/60" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-[#06121f]/75 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur-md sm:bottom-5 sm:left-5 sm:text-[9px]">
                    Official Aiforia clinical imagery
                  </span>
                </div>
                <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-200/70">Clinical Viewer language</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">Evidence that remains visible at the point of review.</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">
                    Aiforia presents detailed visual overlays directly on whole-slide images, enabling pathologists to confirm findings while working with quantitative results and case-level reports.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {[
                      { icon: Eye, label: "Visible overlays" },
                      { icon: BarChart3, label: "Quantitative results" },
                      { icon: CheckCircle2, label: "Case-level review" },
                    ].map(({ icon: Icon, label }) => (
                      <span key={label} className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] px-2 py-3 text-center text-[8px] font-semibold leading-tight text-slate-200 sm:text-[9px]">
                        <Icon className="h-4 w-4 text-cyan-300" />
                        {label}
                      </span>
                    ))}
                  </div>
                  <a href="https://www.aiforia.com/aiforia-clinical-solutions" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-cyan-200 hover:text-white">
                    View official Aiforia Clinical Suites
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {clinicalSuites.map(({ name, models, note }) => (
                <Card key={name} className="p-5 sm:p-6" hover={false}>
                  <CardHeader className="p-0">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
                        <Microscope className="w-5 h-5 text-cyan-700" />
                      </div>
                      <CardTitle className="text-base text-[#0F1C3F] leading-snug">{name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-1.5 mb-3">
                      {models.map((model) => (
                        <li key={model} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{model}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-slate-600 border-t border-slate-100 pt-2">{note}</p>
                  </CardContent>
                </Card>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Aiforia Create */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="p-5 sm:p-7 lg:p-8">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center">
                      <Layers3 className="w-5 h-5 text-cyan-700" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-[#0F1C3F]">Aiforia Create Platform</CardTitle>
                      <p className="text-xs text-slate-500 mt-0.5">Research Use Only</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-4 text-base leading-relaxed text-slate-700">
                  <p>
                    Aiforia Create is a cloud-based platform for developing deep learning AI models that analyse 2D images in digital pathology. It is designed for research teams, preclinical groups, and organisations that need to build and validate custom AI models for histological image analysis.
                  </p>
                  <p>
                    The platform provides an intuitive, no-code interface — users can train, validate, and deploy models without data science or software programming expertise.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Cloud-based", "No-code", "Research Use Only", "Transfer learning", "Annotation assistant"].map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50/50 px-3 py-1 text-xs font-semibold text-cyan-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="p-5 sm:p-7 lg:p-8">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0F1C3F]/6 flex items-center justify-center">
                      <FlaskConical className="w-5 h-5 text-[#0F1C3F]" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-[#0F1C3F]">Research & Preclinical</CardTitle>
                      <p className="text-xs text-slate-500 mt-0.5">Aiforia Research Solutions</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-4 text-base leading-relaxed text-slate-700">
                  <p>
                    Aiforia also provides research solution workflows including Aiforia Studies — a software module designed for non-clinical studies that need to adhere to GLP guidelines. This supports preclinical histology study management with automated, study-centric workflows.
                  </p>
                  <p>
                    Applications span tissue and tumour detection, immunofluorescence analysis, lesion-specific analysis, bone marrow cell analysis, and neuron quantification.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["GLP-oriented", "Preclinical", "Aiforia Studies", "Automated workflows"].map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-full border border-slate-200/80 bg-[#F5F8FC] px-3 py-1 text-xs font-semibold text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory note */}
      <section className="bg-[#F5F8FC] py-12 sm:py-14 border-y border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <Card className="card-note p-5 sm:p-7 lg:p-8" hover={false}>
              <CardContent className="pt-0">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F1C3F] mb-2">Regulatory and intended-use note</h3>
                    <p className="text-sm text-slate-700 leading-relaxed mb-3">
                      Regulatory status and intended use vary by product and jurisdiction. Several Aiforia Clinical Suite models carry CE-IVD marking for diagnostic use in the EU/EEA. Outside the EU/EEA, these models may be classified as Research Use Only or Performance Studies Only.
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed mb-3">
                      Translyx supports responsible local evaluation and adoption in New Zealand. Product-specific regulatory status, intended use, and applicable local requirements should be confirmed with Aiforia Technologies Plc and relevant regulatory authorities.
                    </p>
                    <p className="text-sm text-slate-500 font-medium">
                      Translyx does not claim or imply Medsafe approval, TGA listing, or any jurisdiction-specific regulatory endorsement for Aiforia products unless explicitly confirmed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Translyx and Aiforia connect */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <SectionHeader
              eyebrow="Digital pathology in context"
              title="How Aiforia connects with the broader Translyx ecosystem"
              maxWidth="max-w-2xl"
              className="mb-10"
            />
            <Reveal className="grid gap-5 sm:grid-cols-3">
              <Card className="p-5 sm:p-6">
                <CardHeader className="p-0 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center mb-3">
                    <Microscope className="w-5 h-5 text-cyan-700" />
                  </div>
                  <CardTitle className="text-base text-[#0F1C3F]">Digital pathology AI</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Aiforia strengthens Translyx&apos;s oncology biomarker, precision medicine, and research portfolio with AI-assisted pathology workflows.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-5 sm:p-6">
                <CardHeader className="p-0 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/12 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#0E7490]" />
                  </div>
                  <CardTitle className="text-base text-[#0F1C3F]">Pipeline capabilities</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Translyx pipeline capabilities under evaluation — covering data protection, clinical documentation, and governed evidence workflows — sit alongside pathology AI.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-5 sm:p-6">
                <CardHeader className="p-0 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0F1C3F]/6 flex items-center justify-center mb-3">
                    <FlaskConical className="w-5 h-5 text-[#0F1C3F]" />
                  </div>
                  <CardTitle className="text-base text-[#0F1C3F]">Diagnostic pipeline</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Aiforia sits alongside AMR, sepsis, POCT, cardiac, and endocrine diagnostics in Translyx&apos;s broader clinical technology portfolio.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <AdoptionPathway
        eyebrow="Evaluating Aiforia"
        title="How Translyx supports your Aiforia evaluation"
      />

      <CTA
        title="Discuss Aiforia for your pathology lab or research team"
        description="Translyx can walk your team through Aiforia Clinical Suites, Aiforia Create, and research workflows — and help you evaluate how AI-assisted digital pathology fits your organisation's needs."
        primaryCTA={{ label: "Request walkthrough", href: "/contact?topic=aiforia" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
