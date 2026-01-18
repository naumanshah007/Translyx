import { CTA } from "@/components/sections/CTA";
import { Settings } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PatternOverlay } from "@/components/ui/DecorativeElements";

export const metadata = {
  title: "Product Pipeline",
  description: `${siteConfig.companyName} provides comprehensive technology enablement services for healthcare organizations in New Zealand.`,
  keywords: ["healthcare technology services", "clinical technology", "regulatory compliance", "technology integration", "training enablement"],
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto relative">
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/30" />
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
          <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4 mt-6 sm:mt-8">
            <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-50">Product Pipeline</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            {siteConfig.companyName} supports the introduction of innovative diagnostic and clinical products to New Zealand 
            healthcare providers. The company works with healthcare organisations, laboratories, and academic partners to 
            make globally validated clinical innovations available across hospital, community, and research settings.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Services focus on identifying globally validated clinical innovations and making them available to healthcare 
            providers, with an emphasis on fit-for-purpose implementation, reliable supply, and local support. Support 
            includes training, documentation, and logistical assistance, all tailored to meet the specific needs of the 
            New Zealand healthcare landscape.
          </p>
        </div>

        {/* CTA Section */}
        <CTA
          title="Ready to Get Started?"
          description="Contact us to discuss how our services can support your technology adoption journey."
          primaryCTA={{
            label: "Contact Us",
            href: "/contact",
          }}
          secondaryCTA={{
            label: "View Updates",
            href: "/updates",
          }}
        />
      </div>
    </div>
  );
}
