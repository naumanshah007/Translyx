import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import { Shield } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: `Learn more about ${siteConfig.companyName} and our mission to support healthcare technology adoption in New Zealand.`,
  keywords: ["Translyx Limited", "about", "healthcare technology", "clinical technology", "New Zealand healthcare"],
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
          <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4 mt-6 sm:mt-8">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-50">About Translyx</h1>
        </div>

        {/* Main Content */}
        <div className="space-y-12 mb-16 pb-8 sm:pb-12 md:pb-16">
          <Card cornerAccent variant="gradient-border">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-base leading-relaxed space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Translyx Limited exists to introduce innovative diagnostic and clinical products to the New Zealand healthcare sector, supporting clinicians and health services with timely access to high-quality technologies that enable effective patient care.
                </p>
                <p>
                  Our highly experienced team brings decades of collective experience across diagnostics, laboratory medicine, clinical implementation, and healthcare supply. We focus on identifying globally validated clinical innovations and making them available to healthcare providers across hospital, community, and research settings. Our role is to bridge the gap between emerging clinical technologies and their practical use in everyday healthcare, with an emphasis on fit-for-purpose implementation, reliable supply, and strong local support.
                </p>
                <p>
                  Translyx takes a systems-based approach to product introduction, recognising that access to appropriate diagnostic and clinical tools plays an important role in supporting clinical decision-making and contributing to improved patient outcomes. The company works with healthcare organisations, laboratories, and academic partners to ensure innovative products are introduced in a way that aligns with real-world clinical needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
