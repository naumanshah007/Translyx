import type { Metadata } from "next";
import { Handshake } from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { EcosystemDiagram } from "@/components/sections/EcosystemDiagram";
import { AdoptionPathway } from "@/components/sections/AdoptionPathway";
import { ProductWorlds } from "@/components/sections/ProductWorlds";
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

      <ProductWorlds />

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
