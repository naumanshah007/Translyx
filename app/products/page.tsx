import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GitBranch, Lock, Microscope, Workflow } from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { ProductArchitecture } from "@/components/sections/ProductArchitecture";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Translyx product portfolio — Privexa Trace reviewer-gated synthetic control workflows, Privexa AI data protection, and a broader clinical and diagnostic technology pipeline for healthcare organisations.";

export const metadata: Metadata = {
  title: "Products — Privexa Trace, Privexa & Clinical Pipeline | Translyx",
  description: pageDescription,
  keywords: [
    "Translyx products",
    "Privexa Trace",
    "Privexa AI protection",
    "clinical product portfolio",
    "Translyx Limited",
    "healthcare AI products NZ",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products — Privexa Trace, Privexa & Clinical Pipeline | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/products`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Translyx Products" }],
  },
};

const products = [
  {
    title: "Privexa Trace",
    href: "/products/privexa-trace",
    label: "Flagship product",
    status: "Available",
    statusColor: "emerald",
    description:
      "Reviewer-gated synthetic control arm workflows with manual benchmark comparison, lineage, visible limitations, and submission-oriented packaging.",
    cta: "Explore Privexa Trace",
    icon: GitBranch,
    featured: true,
  },
  {
    title: "Privexa",
    href: "/ai-solutions#privexa",
    label: "Protection layer",
    status: "Available",
    statusColor: "emerald",
    description:
      "Field-level AI data protection for healthcare workflows. Sensitive health data never leaves your environment in identifiable form.",
    cta: "See AI Solutions",
    icon: Lock,
    featured: false,
  },
  {
    title: "Clinical & Diagnostic Pipeline",
    href: "/product-pipeline",
    label: "Broader portfolio",
    status: "Pipeline",
    statusColor: "slate",
    description:
      "AMR, sepsis diagnostics, point-of-care testing, endocrinology, cardiac markers, and precision medicine products for New Zealand healthcare.",
    cta: "View pipeline",
    icon: Microscope,
    featured: false,
  },
];

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
        headline="Products that make clinical AI adoption credible"
        description="Translyx presents Privexa Trace for governed evidence workflows, Privexa for AI data protection, and a wider diagnostic pipeline — each solving a distinct part of the clinical AI operating model."
        primaryCTA={{ label: "See Privexa Trace", href: "/products/privexa-trace" }}
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
                Translyx is the company. Privexa and Privexa Trace solve different parts of the operating model.
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {products.map(({ title, href, label, status, statusColor, description, cta, icon: Icon, featured }) => {
                const statusCls =
                  statusColor === "emerald"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-slate-100 text-slate-500 border-slate-200";
                return (
                  <Card
                    key={title}
                    className={`flex flex-col p-5 sm:p-6 ${featured ? "border-[#0F1C3F]/20 bg-[#0F1C3F]" : ""}`}
                    cornerAccent
                  >
                    <CardHeader className="p-0">
                      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${featured ? "bg-white/10" : "bg-[#0F1C3F]/6"}`}>
                        <Icon className={`h-5 w-5 ${featured ? "text-white" : "text-[#0F1C3F]"}`} />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${featured ? "text-slate-400" : "text-slate-400"}`}>
                          {label}
                        </p>
                        <span className={`text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded border ${statusCls}`}>
                          {status}
                        </span>
                      </div>
                      <CardTitle className={`text-xl ${featured ? "text-white" : "text-[#0F1C3F]"}`}>{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col p-0 pt-3">
                      <p className={`text-sm leading-relaxed flex-1 ${featured ? "text-slate-300" : "text-slate-600"}`}>
                        {description}
                      </p>
                      <div className="mt-6">
                        <Button asChild variant={featured ? "secondary" : "secondary"} size="lg" className={`w-full ${featured ? "bg-white text-[#0F1C3F] border-0 hover:bg-[#F7F5F1]" : ""}`}>
                          <Link href={href} className="flex items-center justify-center gap-2">
                            {cta}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture diagram */}
      <ProductArchitecture />

      <CTA
        title="Start with the product that best fits your workflow"
        description="If your team needs reviewer-gated synthetic control workflows, start with Privexa Trace. If the primary need is AI data protection, start with Privexa. Translyx can help you evaluate where each fits."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "See AI Solutions", href: "/ai-solutions" }}
      />
    </>
  );
}
