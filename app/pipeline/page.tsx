import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FlaskConical, Microscope, ArrowRight, AlertCircle } from "lucide-react";
import { pipelineCategories } from "@/config/pipeline";
import { pipelineCapabilities } from "@/config/pipelineCapabilities";
import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { PipelineCategoryCard } from "@/components/ui/PipelineCategoryCard";
import { PipelineCapabilityCard } from "@/components/ui/PipelineCapabilityCard";

const pipelineDescription = `The ${siteConfig.companyName} pipeline — governed clinical AI workflow capabilities under evaluation and development, plus diagnostic innovation opportunities across AMR, sepsis, POCT, oncology, endocrine, cardiac, and precision medicine for New Zealand healthcare.`;

export const metadata: Metadata = {
  title: "Translyx Pipeline — Clinical AI Capabilities & Diagnostic Innovation",
  description: pipelineDescription,
  keywords: [
    "Translyx pipeline",
    "clinical AI capabilities",
    "diagnostic innovation New Zealand",
    "governed clinical AI",
    "diagnostic technology pipeline",
    "New Zealand healthcare",
  ],
  alternates: {
    canonical: "/pipeline",
  },
  openGraph: {
    title: "Translyx Pipeline | Clinical AI Capabilities & Diagnostic Innovation",
    description: pipelineDescription,
    url: `${siteConfig.url}/pipeline`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Translyx Pipeline",
      },
    ],
  },
};

export default function PipelinePage() {
  return (
    <>
      <Hero
        badge={{ text: "Translyx pipeline", icon: <FlaskConical className="h-3.5 w-3.5 text-cyan-300" /> }}
        headline="Clinical AI capabilities and diagnostic innovation for New Zealand &"
        highlight="Oceania."
        description={`The ${siteConfig.companyName} pipeline spans governed clinical AI workflow capabilities — under evaluation and development — and diagnostic innovation across AMR, sepsis, point-of-care testing, oncology, endocrine, cardiac, and precision medicine.`}
        primaryCTA={{ label: "Discuss the pipeline", href: "/contact" }}
        secondaryCTA={{ label: "See partner products", href: "/products" }}
      />

      {/* Capabilities */}
      <section className="bg-white py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <div className="max-w-3xl mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                Clinical AI workflow capabilities
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F] mb-3">
                Governed workflow capabilities in the Translyx pipeline
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Privacy-preserving, reviewer-gated clinical AI workflow concepts being evaluated and developed under
                the Translyx platform — designed with human oversight, visible limitations, and clinical governance
                from the outset.
              </p>
            </div>

            {/* Not-launched disclaimer */}
            <div className="mb-10 flex items-start gap-3 rounded-xl border border-amber-200/70 bg-amber-50/60 p-4">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
              <p className="text-sm leading-relaxed text-amber-900">
                Pipeline capabilities are under evaluation or in development. They are not publicly launched products
                and are not currently available to customers. No regulatory endorsement is implied.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pipelineCapabilities.map((capability) => (
                <PipelineCapabilityCard key={capability.slug} capability={capability} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic innovation */}
      <section id="diagnostic-innovation" className="bg-[#F5F8FC] py-18 sm:py-24 border-t border-slate-200/60 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <div className="max-w-3xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                Diagnostic innovation
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F] mb-3">
                Diagnostic technology opportunities for New Zealand healthcare
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Globally validated diagnostic and clinical technology areas Translyx is working to bring to New
                Zealand — across antimicrobial resistance, sepsis, point-of-care testing, oncology, endocrine,
                cardiac, and precision medicine.
              </p>
            </div>

            {/* Aiforia digital pathology context */}
            <div className="mb-12 overflow-hidden rounded-2xl border border-violet-200/70 bg-white p-6 shadow-[0_10px_28px_-16px_rgba(15,28,63,0.18)] sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 ring-1 ring-violet-200">
                    <Microscope className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-600">
                      Authorised partner solution
                    </p>
                    <h3 className="font-display text-lg font-semibold text-[#0F1C3F]">Aiforia Digital Pathology AI</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Translyx is an authorised non-exclusive business partner of Aiforia Technologies Plc in New Zealand,
                      representing Aiforia Clinical Suites and Aiforia Create Platform. Aiforia strengthens the oncology
                      biomarkers, digital pathology, and precision medicine areas of this pipeline.
                    </p>
                  </div>
                </div>
                <Link
                  href="/products/aiforia"
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-violet-200 bg-white px-4 py-2.5 text-sm font-semibold text-violet-600 transition-colors hover:bg-violet-50"
                >
                  Explore Aiforia <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {pipelineCategories.map((category) => (
                <PipelineCategoryCard
                  key={category.slug}
                  slug={category.slug}
                  title={category.title}
                  excerpt={category.excerpt}
                  image={category.images[0]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Discuss the Translyx pipeline for your organisation."
        description="Contact Translyx to discuss how pipeline capabilities and diagnostic innovation fit your healthcare or research priorities."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "See partner products", href: "/products" }}
      />
    </>
  );
}
