import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  ExternalLink,
  FileText,
  FlaskConical,
  GitBranch,
  Lock,
  Microscope,
  Stethoscope,
  Workflow,
} from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { ProductArchitecture } from "@/components/sections/ProductArchitecture";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { products, statusLabels } from "@/config/products";
import type { Product } from "@/config/products";

const pageDescription =
  "Translyx product portfolio — authorised Aiforia digital pathology AI, Privexa-built governed AI products including AI Wrapper, Cloud Shield, Scribe, and Trace, plus a broader diagnostic technology pipeline for New Zealand healthcare.";

export const metadata: Metadata = {
  title: "Products — Digital Pathology AI, Governed AI & Clinical Pipeline | Translyx",
  description: pageDescription,
  keywords: [
    "Translyx products",
    "Aiforia partner New Zealand",
    "digital pathology AI",
    "Privexa Trace",
    "Privexa AI protection",
    "Privexa Cloud Shield",
    "Privexa Scribe",
    "clinical product portfolio",
    "Translyx Limited",
    "healthcare AI products NZ",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products — Digital Pathology AI, Governed AI & Clinical Pipeline | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/products`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Translyx Products" }],
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Microscope,
  Lock,
  Cloud,
  FileText,
  GitBranch,
  Stethoscope,
  FlaskConical,
};

function ProductCard({ product }: { product: Product }) {
  const Icon = iconMap[product.icon] ?? FlaskConical;
  const status = statusLabels[product.status];
  const isPartner = product.type === "partner";
  const isPipeline = product.type === "pipeline";
  const isFeatured = product.featured;

  return (
    <Card
      className={`flex flex-col p-5 sm:p-6 ${isFeatured ? "border-[#0F1C3F]/20 bg-[#0F1C3F]" : ""}`}
      cornerAccent={isFeatured}
    >
      <CardHeader className="p-0">
        <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${isFeatured ? "bg-white/10" : "bg-[#0F1C3F]/6"}`}>
          <Icon className={`h-5 w-5 ${isFeatured ? "text-white" : "text-[#0F1C3F]"}`} />
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className={`text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded border ${
            isFeatured
              ? "bg-white/10 text-slate-300 border-white/15"
              : isPartner
                ? "bg-purple-50 text-purple-600 border-purple-200"
                : isPipeline
                  ? "bg-slate-50 text-slate-500 border-slate-200"
                  : "bg-cyan-50 text-[#0891B2] border-cyan-200"
          }`}>
            {product.badge}
          </span>
          <span className={`text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded border ${
            isFeatured ? "bg-emerald-900/60 text-emerald-300 border-emerald-700/50" : status.className
          }`}>
            {status.text}
          </span>
        </div>
        <CardTitle className={`text-xl ${isFeatured ? "text-white" : "text-[#0F1C3F]"}`}>{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-0 pt-3">
        <p className={`text-sm leading-relaxed flex-1 ${isFeatured ? "text-slate-300" : "text-slate-600"}`}>
          {product.description}
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className={`w-full ${isFeatured ? "bg-white text-[#0F1C3F] border-0 hover:bg-[#F7F5F1]" : ""}`}
          >
            <Link href={product.href} className="flex items-center justify-center gap-2">
              {isPartner ? "Explore Aiforia" : `Explore ${product.shortTitle ?? product.title}`}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          {product.externalHref && (
            <a
              href={product.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 text-xs font-medium transition-colors ${
                isFeatured ? "text-slate-400 hover:text-white" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Open platform <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProductsPage() {
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />

      <Hero
        badge={{ text: "Translyx Products", icon: <Workflow className="w-3.5 h-3.5" /> }}
        headline="Diagnostics, digital pathology AI, and governed clinical software"
        description="Authorised Aiforia digital pathology AI. Privexa-built protected AI products. A broader diagnostic pipeline for New Zealand healthcare. All connected through Translyx's clinical technology platform."
        primaryCTA={{ label: "See Aiforia", href: "/products/aiforia" }}
        secondaryCTA={{ label: "Talk to Translyx", href: "/contact" }}
        className="py-16 sm:py-20 md:py-24 lg:py-32"
      />

      {/* Product cards */}
      <section className="bg-[#F7F5F1] py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Portfolio overview</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">
                One clinical technology company. Multiple governed products. One diagnostic mission.
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Translyx connects authorised partner solutions, Privexa-built protected AI products, and a diagnostic technology pipeline — all positioned for clinical adoption in New Zealand and Oceania.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>

            {/* Privexa relationship note */}
            <div className="mt-8 rounded-xl border border-slate-200/80 bg-white p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#0F1C3F] mb-1">Privexa-built software, delivered through a clinical technology lens</p>
                  <p className="text-sm text-slate-600">
                    Translyx works with Privexa Limited to bring protected AI software into clinical and diagnostic workflows. Privexa builds the software; Translyx focuses on clinical positioning and healthcare adoption.
                  </p>
                </div>
                <a
                  href="https://www.privexa.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-[#F7F5F1] px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-white transition-colors"
                >
                  Visit Privexa
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture diagram */}
      <ProductArchitecture />

      <CTA
        title="Speak with Translyx about your clinical technology priorities"
        description="Request a walkthrough to see Aiforia digital pathology AI, Privexa-built data protection and evidence workflows, and the broader Translyx diagnostic portfolio in context."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "See AI Solutions", href: "/ai-solutions" }}
      />
    </>
  );
}
