import { Card, CardContent } from "@/components/ui/Card";
import { Prose } from "@/components/ui/Prose";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Briefcase, Shield, ArrowRight } from "lucide-react";
import { PatternOverlay } from "@/components/ui/DecorativeElements";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description: `Expert professional services and consultancy tailored to the healthcare and diagnostics sector from ${siteConfig.companyName}.`,
  keywords: ["healthcare consultancy", "diagnostics", "professional services", "biomedical sciences", "digital pathology", "AI", "molecular diagnostics"],
};

/* Edit Services page content here */
const servicesContent = `At Translyx Limited, we provide expert professional services and consultancy tailored to the healthcare and diagnostics sector. Drawing on our team's extensive expertise across biomedical sciences, digital pathology, artificial intelligence, molecular diagnostics, and translational innovation, we deliver strategic guidance on diagnostic implementation, technology adoption, assay development, targeted therapy development, and healthcare systems optimisation. We also support learning and development initiatives that advance translational innovation and inform precision medicine. Through this integrated approach, we partner with organisations, innovators, and health systems to refine product strategies and accelerate the impact of novel healthcare solutions and technologies in New Zealand and globally. Please contact us at ehsan.ullah@translyx.co or info@translyx.co for details.`;

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto relative">
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/30" />

        <div className="text-center mb-16 sm:mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
          <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4 mt-6 sm:mt-8">
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-50">Services</h1>
        </div>

        <Card variant="gradient-border" cornerAccent className="p-4 sm:p-6 lg:p-8 md:p-10 lg:p-12">
          <CardContent>
            <Prose className="whitespace-pre-line">
              {servicesContent}
            </Prose>
          </CardContent>
        </Card>

        {/* AI Privacy & Compliance Support subsection */}
        <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 md:p-10 lg:p-12 mt-8">
          <CardContent>
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-500/15 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4">AI Privacy & Compliance Support</h2>
                <Prose>
                  <p>
                    As part of Translyx&apos;s commitment to responsible technology adoption, we support healthcare organizations in implementing Privexa — an enterprise AI privacy platform that ensures patient data remains protected when AI tools are in use. We can assist with evaluation, deployment planning, and integration into existing clinical workflows.
                  </p>
                </Prose>
              </div>
            </div>
            <Button asChild variant="gradient" size="lg">
              <Link href="/ai-solutions" className="flex items-center gap-2">
                Learn more about our AI solutions
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
