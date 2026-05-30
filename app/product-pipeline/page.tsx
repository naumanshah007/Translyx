import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Settings, Microscope, ArrowRight } from "lucide-react";
import { PatternOverlay } from "@/components/ui/DecorativeElements";
import { pipelineCategories } from "@/config/pipeline";
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto relative">
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/30" />

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
          <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4 mt-6 sm:mt-8">
            <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-50">Translyx Product Pipeline</h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.companyName} supports the introduction of innovative diagnostic and clinical products to New Zealand
            healthcare providers — alongside authorised digital pathology AI and Privexa-built governed AI solutions. The company works with healthcare organisations, laboratories, and academic partners to
            make globally validated clinical innovations available across hospital, community, and research settings.
          </p>
        </div>

        {/* Aiforia digital pathology context */}
        <div className="mb-12 rounded-2xl border border-purple-200/60 bg-purple-50/30 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                <Microscope className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-600 mb-1">Authorised partner solution</p>
                <h3 className="text-lg font-bold text-[#0F1C3F]">Aiforia Digital Pathology AI</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Translyx is an authorised non-exclusive business partner of Aiforia Technologies Plc in New Zealand, representing Aiforia Clinical Suites and Aiforia Create Platform. Aiforia strengthens the oncology biomarkers, digital pathology, and precision medicine areas of this pipeline.
                </p>
              </div>
            </div>
            <Link
              href="/products/aiforia"
              className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-purple-200 bg-white px-4 py-2.5 text-sm font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
            >
              Explore Aiforia <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
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

        <CTA
          title="Discuss diagnostic technology for your organisation"
          description="Contact Translyx to discuss how advanced diagnostics, digital pathology AI, and governed clinical AI solutions fit your healthcare or research priorities."
          primaryCTA={{ label: "Contact us", href: "/contact" }}
          secondaryCTA={{ label: "See all products", href: "/products" }}
        />
      </div>
    </div>
  );
}
