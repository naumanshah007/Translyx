import type { Metadata } from "next";
import { Newspaper, Info } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { NewsList } from "@/components/news/NewsList";
import { NewsTicker } from "@/components/news/NewsTicker";
import { UpcomingEvents } from "@/components/news/UpcomingEvents";
import { getNewsItems } from "@/lib/news";
import { getUpcomingEvents } from "@/config/events";
import { siteConfig } from "@/config/site";

export const revalidate = 3600;

const pageDescription =
  "News intelligence for diagnostics, pathology, digital pathology AI, and governed clinical AI — curated for market awareness across New Zealand, Australia, and global healthcare.";

export const metadata: Metadata = {
  title: "News — Diagnostics, Pathology & Clinical AI Intelligence",
  description: pageDescription,
  keywords: [
    "diagnostics news New Zealand",
    "digital pathology news",
    "clinical AI news",
    "pathology news Australia",
    "AI governance healthcare",
    "diagnostics market intelligence",
  ],
  alternates: { canonical: "/news" },
  openGraph: {
    title: "News — Diagnostics, Pathology & Clinical AI Intelligence | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/news`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Translyx News" }],
  },
};

export default async function NewsPage() {
  const items = await getNewsItems();
  const events = getUpcomingEvents();

  return (
    <>
      <Hero
        badge={{ text: "News intelligence", icon: <Newspaper className="h-3.5 w-3.5 text-cyan-300" /> }}
        headline="News intelligence for diagnostics, pathology, and governed"
        highlight="clinical AI."
        description="Curated market intelligence across New Zealand, Australia, and global healthcare — tracking digital pathology, diagnostics, clinical AI governance, and the areas that matter to Translyx, its partners, and its pipeline."
      />

      {/* Breaking-news style headline ticker */}
      <NewsTicker items={items} />

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <NewsList items={items} />

            {/* Disclaimer */}
            <div className="mt-12 flex items-start gap-3 rounded-xl border border-slate-200/80 bg-[#F5F8FC] p-4">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              <p className="text-xs leading-relaxed text-slate-600">
                News summaries are AI-assisted and source-linked. They are provided for market awareness and do not
                represent medical, regulatory, or investment advice. Always verify details with the original source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming sector events */}
      <UpcomingEvents events={events} />

      <CTA
        title="Bring your innovation to New Zealand and Oceania."
        description="If you are a diagnostic, pathology, or clinical-AI innovator looking to reach the New Zealand and Oceania market, talk to Translyx about partnership and adoption pathways."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "View partners", href: "/partners" }}
      />
    </>
  );
}
