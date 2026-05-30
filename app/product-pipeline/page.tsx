import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FlaskConical, Microscope, ArrowRight } from "lucide-react";
import { pipelineCategories } from "@/config/pipeline";
import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { PipelineCategoryCard } from "@/components/ui/PipelineCategoryCard";

const pipelineDescription = `${siteConfig.companyName} product pipeline covers diagnostic and clinical technology areas for New Zealand healthcare providers — alongside authorised Aiforia digital pathology AI and Privexa-built governed AI solutions.`;

export const metadata: Metadata = {
  title: "Translyx Product Pipeline",
  description: pipelineDescription,
  keywords: [
    "Translyx product pipeline",
    "Translyx diagnostics",
    "clinical products",
    "diagnostic technology",
    "New Zealand healthcare",
  ],
  alternates: {
    canonical: "/product-pipeline",
  },
  openGraph: {
    title: "Translyx Product Pipeline | Diagnostic and Clinical Technology",
    description: pipelineDescription,
    url: `${siteConfig.url}/product-pipeline`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Translyx Product Pipeline",
      },
    ],
  },
};

export default function ProductPipelinePage() {
  return (
    <>
      <Hero
        badge={{ text: "Diagnostic pipeline", icon: <FlaskConical className="h-3.5 w-3.5 text-cyan-300" /> }}
        headline="A diagnostic and clinical innovation pipeline for New Zealand &"
        highlight="Oceania."
        description={`${siteConfig.companyName} introduces globally validated diagnostic and clinical products to New Zealand healthcare — across AMR, sepsis, point-of-care testing, oncology, endocrine, cardiac, and precision medicine — alongside authorised digital pathology AI and Privexa-built governed AI.`}
        primaryCTA={{ label: "Discuss the pipeline", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />

      <section className="bg-[#F5F8FC] py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
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
        title="Discuss diagnostic technology for your organisation."
        description="Contact Translyx to discuss how advanced diagnostics, digital pathology AI, and governed clinical AI solutions fit your healthcare or research priorities."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
