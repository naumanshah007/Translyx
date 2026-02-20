import { Card, CardContent } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import { Settings } from "lucide-react";
import { PatternOverlay } from "@/components/ui/DecorativeElements";
import { pipelineCategories } from "@/config/pipeline";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "Product Pipeline",
  description: `${siteConfig.companyName} supports the introduction of innovative diagnostic and clinical products to New Zealand healthcare providers.`,
  keywords: ["healthcare technology", "diagnostics", "clinical products", "product pipeline", "New Zealand healthcare"],
};

export default function ProductPipelinePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto relative">
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/30" />

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
          <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4 mt-6 sm:mt-8">
            <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-50">Product Pipeline</h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.companyName} supports the introduction of innovative diagnostic and clinical products to New Zealand
            healthcare providers. The company works with healthcare organisations, laboratories, and academic partners to
            make globally validated clinical innovations available across hospital, community, and research settings.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {pipelineCategories.map((category) => (
            <Link key={category.slug} href={`/product-pipeline/${category.slug}`}>
              <Card variant="gradient-border" className="h-full overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={category.images[0]}
                    alt={category.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-50 mb-3">{category.title}</h2>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {category.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <CTA
          title="Ready to Get Started?"
          description="Contact us to discuss how our services can support your technology adoption journey."
          primaryCTA={{ label: "Contact Us", href: "/contact" }}
          secondaryCTA={{ label: "View Updates", href: "/updates" }}
        />
      </div>
    </div>
  );
}
