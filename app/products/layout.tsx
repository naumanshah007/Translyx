import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Products",
  description: `Explore ${siteConfig.companyName}'s product portfolio, including Privexa Trace and AI workflow offerings.`,
  keywords: [
    "healthcare technology",
    "products",
    "Privexa Trace",
    "clinical technology",
    "AI workflow platform",
    "synthetic control arm",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products | Privexa Trace and Clinical Technology | Translyx",
    description: `Explore ${siteConfig.companyName}'s product portfolio, including Privexa Trace and AI workflow offerings.`,
    url: `${siteConfig.url}/products`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Translyx Products",
      },
    ],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
