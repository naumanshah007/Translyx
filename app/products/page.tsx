import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Handshake, FlaskConical, Microscope, Workflow } from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { EcosystemDiagram } from "@/components/sections/EcosystemDiagram";
import { AdoptionPathway } from "@/components/sections/AdoptionPathway";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/config/products";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Translyx partner products — Aiforia digital pathology AI (authorised partner solution) and Algoscope surgery-to-pathology workflow automation — represented and supported by Translyx in New Zealand and Oceania.";

export const metadata: Metadata = {
  title: "Products — Aiforia & Algoscope Partner Solutions",
  description: pageDescription,
  keywords: [
    "Translyx products",
    "Aiforia digital pathology",
    "Algoscope",
    "surgery-to-pathology workflow automation",
    "partner products New Zealand",
    "clinical technology NZ",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products — Aiforia & Algoscope Partner Solutions | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/products`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Translyx Products" }],
  },
};

export default function ProductsPage() {
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Translyx Products",
    url: `${siteConfig.url}/products`,
    description: pageDescription,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Products", item: `${siteConfig.url}/products` },
      ],
    },
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }} />

      <Hero
        badge={{ text: "Partner products", icon: <Handshake className="h-3.5 w-3.5 text-cyan-300" /> }}
        headline="Partner diagnostic and pathology solutions, under one"
        highlight="accountable partner."
        description="Aiforia digital pathology AI and Algoscope surgery-to-pathology workflow automation — represented, clinically positioned, and locally supported by Translyx across New Zealand and Oceania."
        primaryCTA={{ label: "Request a walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "Discuss a product", href: "/contact" }}
      />

      {/* Partner products */}
      <section className="bg-[#F5F8FC] py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1140px] space-y-16">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200/70">
                  <Handshake className="h-5 w-5 text-[#0891B2]" />
                </span>
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#0891B2]">Partner products</p>
                  <h2 className="font-display text-xl font-semibold text-[#0F1C3F]">Digital pathology AI &amp; workflow automation</h2>
                  <p className="mt-0.5 text-sm text-slate-500">
                    Represented by Translyx in New Zealand — not Translyx-owned products.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
                {products.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>

            {/* Comparison strip — clarifies the two portfolios at a glance */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-2xl border border-cyan-200/60 bg-cyan-50/40 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-cyan-200/70">
                  <Microscope className="h-5 w-5 text-cyan-700" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0F1C3F]">Aiforia — analysis of the slide</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    AI-assisted digital pathology scoring, grading, and quantitative image analysis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-violet-200/60 bg-violet-50/40 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-violet-200/70">
                  <Workflow className="h-5 w-5 text-violet-600" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0F1C3F]">Algoscope — journey of the specimen</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Traceability and workflow automation from operating room to pathology laboratory.
                  </p>
                </div>
              </div>
            </div>

            {/* Pipeline callout — capabilities, not products */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_16px_-6px_rgba(15,28,63,0.1)] sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F8FC] ring-1 ring-slate-200/70">
                    <FlaskConical className="h-[22px] w-[22px] text-[#0891B2]" />
                  </span>
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-slate-400">Explore the Translyx pipeline</p>
                    <h3 className="mt-0.5 font-display text-xl font-semibold text-[#0F1C3F]">Capabilities under evaluation &amp; diagnostic innovation</h3>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-600">
                      Governed clinical AI workflow capabilities in evaluation and development, plus diagnostic
                      innovation across AMR, sepsis, point-of-care testing, oncology, endocrine, cardiac, and
                      precision medicine. Pipeline capabilities are not launched products.
                    </p>
                  </div>
                </div>
                <Link
                  href="/pipeline"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#0F1C3F] transition-colors hover:bg-slate-50"
                >
                  View pipeline
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdoptionPathway
        eyebrow="How adoption works"
        title="A guided path from first conversation to local adoption"
      />

      <EcosystemDiagram />

      <CTA
        title="Speak with Translyx about your clinical technology priorities."
        description="Request a walkthrough to see Aiforia digital pathology AI, Algoscope workflow automation, and the broader Translyx pipeline in context."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "View pipeline", href: "/pipeline" }}
      />
    </>
  );
}
