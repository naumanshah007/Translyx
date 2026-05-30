import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Handshake, ShieldCheck, FlaskConical } from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { EcosystemDiagram } from "@/components/sections/EcosystemDiagram";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { products, type Product } from "@/config/products";
import { siteConfig } from "@/config/site";

const pageDescription =
  "The Translyx product portfolio — Aiforia digital pathology AI (authorised partner solution), Privexa-built protected AI products, and a broader clinical diagnostic pipeline for New Zealand and Oceania.";

export const metadata: Metadata = {
  title: "Products — Aiforia, Privexa-Built AI & Clinical Pipeline",
  description: pageDescription,
  keywords: [
    "Translyx products",
    "Aiforia digital pathology",
    "Privexa AI Wrapper",
    "Privexa Cloud Shield",
    "Privexa Trace",
    "ClinicalTriage",
    "clinical product portfolio NZ",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products — Aiforia, Privexa-Built AI & Clinical Pipeline | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/products`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Translyx Products" }],
  },
};

const groups: {
  key: string;
  eyebrow: string;
  icon: typeof Handshake;
  title: string;
  blurb: string;
  match: (type: Product["type"]) => boolean;
}[] = [
  {
    key: "partner",
    eyebrow: "Authorised partner solution",
    icon: Handshake,
    title: "Digital pathology AI",
    blurb: "Represented by Translyx in New Zealand — not a Translyx-owned product.",
    match: (type) => type === "partner",
  },
  {
    key: "privexa",
    eyebrow: "Built by Privexa",
    icon: ShieldCheck,
    title: "Protected AI software",
    blurb: "Privacy-first, governed, and reviewer-gated software clinically positioned through Translyx.",
    match: (type) => type === "privexa" || type === "clinical",
  },
];

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
        badge={{ text: "Product portfolio", icon: <ShieldCheck className="h-3.5 w-3.5 text-cyan-300" /> }}
        headline="Authorised partner solutions and Privexa-built protected AI, under one"
        highlight="accountable partner."
        description="Aiforia digital pathology AI, Privexa-built protected software, and a clinical diagnostic pipeline — clinically positioned and locally supported by Translyx across New Zealand and Oceania."
        primaryCTA={{ label: "Discuss Aiforia", href: "/products/aiforia" }}
        secondaryCTA={{ label: "Request a walkthrough", href: "/contact" }}
      />

      {/* Grouped portfolio */}
      <section className="bg-[#F5F8FC] py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1140px] space-y-16">
            {groups.map((group) => {
              const Icon = group.icon;
              const groupProducts = products.filter((p) => group.match(p.type));
              return (
                <div key={group.key}>
                  <div className="mb-8 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200/70">
                      <Icon className="h-5 w-5 text-[#0891B2]" />
                    </span>
                    <div>
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#0891B2]">{group.eyebrow}</p>
                      <h2 className="font-display text-xl font-semibold text-[#0F1C3F]">{group.title}</h2>
                      <p className="mt-0.5 text-sm text-slate-500">{group.blurb}</p>
                    </div>
                  </div>
                  <div
                    className={`grid gap-5 ${
                      groupProducts.length === 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {groupProducts.map((product) => (
                      <ProductCard key={product.slug} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Pipeline callout */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_16px_-6px_rgba(15,28,63,0.1)] sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F8FC] ring-1 ring-slate-200/70">
                    <FlaskConical className="h-[22px] w-[22px] text-[#0891B2]" />
                  </span>
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-slate-400">Diagnostic portfolio</p>
                    <h3 className="mt-0.5 font-display text-xl font-semibold text-[#0F1C3F]">Clinical &amp; Diagnostic Pipeline</h3>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-600">
                      AMR, sepsis, point-of-care testing, oncology, endocrine, cardiac, and precision medicine
                      opportunities for New Zealand and Oceania.
                    </p>
                  </div>
                </div>
                <Link
                  href="/product-pipeline"
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

      <EcosystemDiagram />

      <CTA
        title="Speak with Translyx about your clinical technology priorities."
        description="Request a walkthrough to see Aiforia digital pathology AI, Privexa-built protected software, and the broader diagnostic portfolio in context."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "See AI Solutions", href: "/ai-solutions" }}
      />
    </>
  );
}
