import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../styles/globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "WONK"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Translyx | Diagnostic Innovation & Governed Clinical AI — New Zealand",
    template: `%s | Translyx`,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.seo.author, url: siteConfig.url }],
  creator: siteConfig.seo.author,
  publisher: siteConfig.companyName,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteConfig.url,
    title: "Translyx | Diagnostic Innovation & Governed Clinical AI — New Zealand",
    description: siteConfig.seo.defaultDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Translyx | Diagnostic Innovation & Governed Clinical AI",
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.seo.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // Add Google Search Console and Bing verification codes here when available:
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  //   other: { "msvalidate.01": "YOUR_BING_VERIFICATION_CODE" },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    alternateName: "Translyx",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    email: siteConfig.company.email,
    foundingDate: "2025-12",
    foundingLocation: {
      "@type": "Place",
      name: "Auckland, New Zealand",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Auckland",
        addressCountry: "NZ",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Auckland",
      addressCountry: "NZ",
    },
    knowsAbout: [
      "clinical AI governance",
      "digital pathology AI",
      "surgery-to-pathology workflow automation",
      "reviewer-gated evidence workflows",
      "in vitro diagnostics",
      "diagnostic technology New Zealand",
    ],
    sameAs: ["https://www.linkedin.com/company/translyx/"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Translyx Partner Products",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          name: "Aiforia Digital Pathology AI",
          applicationCategory: "MedicalApplication",
          url: `${siteConfig.url}/products/aiforia`,
          description:
            "AI-assisted digital pathology for clinical, preclinical, and research workflows — authorised partner solution represented by Translyx in New Zealand.",
          operatingSystem: "Web",
          provider: { "@type": "Organization", name: "Aiforia Technologies Plc" },
        },
        {
          "@type": "SoftwareApplication",
          name: "Algoscope",
          applicationCategory: "MedicalApplication",
          url: `${siteConfig.url}/products/algoscope`,
          description:
            "AI-powered surgery-to-pathology workflow automation and traceability — partner product represented by Translyx in New Zealand.",
          operatingSystem: "Web",
          provider: { "@type": "Organization", name: "Algoscope" },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.companyName,
    url: siteConfig.url,
    description:
      "Translyx Limited — partner diagnostic solutions, digital pathology AI, and governed clinical AI workflow capabilities for New Zealand healthcare.",
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en-NZ" suppressHydrationWarning>
      <body className={`${body.variable} ${display.variable} font-body`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
