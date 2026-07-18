import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/sections/ContactForm";

const contactDescription = `Contact ${siteConfig.companyName} about Aiforia digital pathology AI, Algoscope workflow automation, the Translyx pipeline, and clinical technology partnerships in New Zealand and Oceania.`;

export const metadata: Metadata = {
  title: "Contact Translyx",
  description: contactDescription,
  keywords: [
    "Translyx contact",
    "Translyx Limited contact",
    "request walkthrough",
    "Aiforia New Zealand contact",
    "clinical technology contact NZ",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Translyx",
    description: contactDescription,
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Contact Translyx" }],
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Translyx",
    url: `${siteConfig.url}/contact`,
    description: contactDescription,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.companyName,
      email: siteConfig.company.email,
      url: siteConfig.url,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.company.email,
        areaServed: ["NZ", "AU", "Oceania"],
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <section className="bg-[#F5F8FC] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[720px]">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
