import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Linkedin, ShieldCheck, Microscope, Lock, GitBranch } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/sections/ContactForm";

const contactDescription = `Contact ${siteConfig.companyName} about Aiforia digital pathology AI, Algoscope workflow automation, the Translyx pipeline, and clinical technology partnerships in New Zealand and Oceania.`;

export const metadata: Metadata = {
  title: "Contact Translyx — Request a Walkthrough",
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
    title: "Contact Translyx — Request a Walkthrough",
    description: contactDescription,
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Contact Translyx" }],
  },
};

const discuss = [
  { icon: Microscope, label: "Aiforia digital pathology AI evaluation" },
  { icon: GitBranch, label: "Algoscope surgery-to-pathology workflow automation" },
  { icon: Lock, label: "Translyx pipeline capabilities & governed AI" },
  { icon: ShieldCheck, label: "Diagnostic product evaluation & partnerships" },
];

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

      <Hero
        badge={{ text: "Contact · Auckland, New Zealand", icon: <MapPin className="h-3.5 w-3.5 text-cyan-300" /> }}
        headline="Talk to Translyx about your clinical technology"
        highlight="priorities."
        description="Whether the focus is digital pathology AI, workflow automation, or governed clinical AI capabilities — the Translyx team can help identify the right fit for your organisation. Request a walkthrough below."
      />

      <section className="bg-white py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Left — context */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E7490]">Get in touch</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-[#0F1C3F] sm:text-3xl">
                A clinical technology conversation, not a sales pitch.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Tell us a little about your organisation and what you&apos;re exploring. We&apos;ll follow up to arrange a
                walkthrough tailored to your clinical, laboratory, or research context.
              </p>

              <div className="mt-8 space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">What we can discuss</p>
                {discuss.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-[#F5F8FC] p-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200/70">
                      <Icon className="h-[18px] w-[18px] text-[#0E7490]" />
                    </span>
                    <span className="text-sm font-medium text-[#0F1C3F]">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3 border-t border-slate-200/70 pt-6">
                <a href={`mailto:${siteConfig.company.email}`} className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-[#0E7490]">
                  <Mail className="h-4 w-4 text-slate-400" />
                  {siteConfig.company.email}
                </a>
                <p className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  Auckland, New Zealand — expanding into Australia &amp; Pacific markets
                </p>
                <Link
                  href="https://www.linkedin.com/company/translyx/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-[#0E7490]"
                >
                  <Linkedin className="h-4 w-4 text-slate-400" />
                  Translyx on LinkedIn
                </Link>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
