import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Prose } from "@/components/ui/Prose";
import { siteConfig } from "@/config/site";
import { Shield, Users, MapPin } from "lucide-react";
import { PatternOverlay } from "@/components/ui/DecorativeElements";
import Link from "next/link";

const aboutDescription = `Learn about ${siteConfig.companyName}, the New Zealand healthcare technology company behind Privexa Trace, AI solutions, and broader clinical product introduction.`;

export const metadata: Metadata = {
  title: "About Translyx",
  description: aboutDescription,
  keywords: [
    "Translyx",
    "Translyx Limited",
    "about Translyx",
    "Privexa Trace",
    "New Zealand healthcare technology company",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Translyx | Healthcare Technology and AI Workflows",
    description: aboutDescription,
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "About Translyx",
      },
    ],
  },
};

/* Edit Leadership content and image placeholder here */
const leadershipPrimary = {
  name: "Dr Ehsan Ullah",
  title: "Founding Director",
  avatar: "/images/leadership/ehsan-presenting.jpg",
};

const leadershipText = `Translyx Ltd was established in December 2025 by Dr Ehsan Ullah, an Auckland based physician scientist and healthcare entrepreneur advancing clinical diagnostic solutions in New Zealand.

Globally, the diagnostic market is undergoing rapid transformation driven by emerging trends in antimicrobial resistance (AMR), sepsis diagnostics, point of care testing, endocrinology, cardiac markers, Artificial intelligence, and precision medicine. These advances are reshaping clinical decision making and patient outcomes, creating a clear and urgent need for experienced leadership to bring advanced diagnostic technologies onshore to meet local healthcare demands. Dr Ullah brings an established professional profile at the intersection of clinical practice, laboratory medicine, and health technology innovation, including leadership roles across specialised diagnostics and digital health initiatives. His vision for Translyx is grounded in translating cutting edge global diagnostic innovations into practical and high impact solutions for the New Zealand healthcare system. The Translyx senior leadership team includes healthcare professionals with over 50 years of collective experience across the in vitro diagnostics (IVD) market, pathology services, and next generation molecular diagnostic solutions. The team is committed to building strategic partnerships and expanding access to high quality and clinically meaningful diagnostic tools. Translyx Ltd represents Dr Ullah's commitment to strengthening diagnostic capability in Aotearoa New Zealand, supporting clinicians, laboratories, and healthcare providers with advanced solutions that improve patient care and system resilience.`;

/* Edit Operational Territory content here */
const operationalTerritoryText = `Translyx operates primarily in New Zealand, with planned expansion into Australia and the broader Oceania region, including selected Pacific Island markets. The company works closely with local laboratories, hospitals, and healthcare providers to ensure diagnostic solutions are relevant, practical, and aligned with real clinical needs. Through regional partnerships and scalable distribution models, Translyx aims to strengthen diagnostic capability across Oceania while enabling efficient market access for international diagnostic innovators.`;

const sectionAnchors = [
  { id: "our-mission", label: "Our Mission" },
  { id: "leadership", label: "Leadership" },
  { id: "operational-territory", label: "Operational Territory" },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Translyx",
    url: `${siteConfig.url}/about`,
    description: aboutDescription,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.url,
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <div className="max-w-6xl mx-auto relative">
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/30" />

        {/* Page Header */}
        <div className="text-center mb-16 sm:mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
          <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4 mt-6 sm:mt-8">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-gray-50">About Translyx</h1>

          {/* In-page navigation */}
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8" aria-label="Page sections">
            {sectionAnchors.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full text-sm font-semibold bg-primary-50 dark:bg-primary-900/30 border border-primary-200/70 dark:border-primary-700/50 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:border-primary-400/70 dark:hover:border-primary-600/60 hover:text-primary-800 dark:hover:text-primary-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 active:scale-[0.98] transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Section: Our Mission */}
        <section id="our-mission" className="scroll-mt-24 sm:scroll-mt-28 mb-20 sm:mb-24 md:mb-28">
          <Card cornerAccent variant="gradient-border" className="p-4 sm:p-6 lg:p-8 md:p-10 lg:p-12">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <Prose className="space-y-6">
                <p>
                  Translyx Limited exists to introduce innovative diagnostic and clinical products to the New Zealand healthcare sector, supporting clinicians and health services with timely access to high-quality technologies that enable effective patient care.
                </p>
                <p>
                  Our highly experienced team brings decades of collective experience across diagnostics, laboratory medicine, clinical implementation, and healthcare supply. We focus on identifying globally validated clinical innovations and making them available to healthcare providers across hospital, community, and research settings. Our role is to bridge the gap between emerging clinical technologies and their practical use in everyday healthcare, with an emphasis on fit-for-purpose implementation, reliable supply, and strong local support.
                </p>
                <p>
                  Translyx takes a systems-based approach to product introduction, recognising that access to appropriate diagnostic and clinical tools plays an important role in supporting clinical decision-making and contributing to improved patient outcomes. The company works with healthcare organisations, laboratories, and academic partners to ensure innovative products are introduced in a way that aligns with real-world clinical needs.
                </p>
              </Prose>
            </CardContent>
          </Card>
        </section>

        {/* Section: Leadership */}
        <section id="leadership" className="scroll-mt-24 sm:scroll-mt-28 mb-20 sm:mb-24 md:mb-28">
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50">Leadership</h2>
          </div>
          <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 md:p-10 lg:p-12">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <div className="flex-shrink-0">
                <div className="aspect-square w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-cyan-100 dark:from-primary-900/40 dark:to-cyan-900/40 flex items-center justify-center shadow-lg">
                  <img src="/images/leadership/ehsan-presenting.jpg" alt="" className="w-full h-full object-cover object-center" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-1">{leadershipPrimary.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg mb-6">{leadershipPrimary.title}</p>
                <Prose>
                  {leadershipText.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </Prose>
              </div>
            </div>
          </Card>
        </section>

        {/* Section: Operational Territory */}
        <section id="operational-territory" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50">Operational Territory</h2>
          </div>
          <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 md:p-10 lg:p-12">
            <CardContent className="pt-0">
              <Prose>
                <p>{operationalTerritoryText}</p>
              </Prose>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
