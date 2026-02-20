import { Card, CardContent } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import { Briefcase } from "lucide-react";
import { PatternOverlay } from "@/components/ui/DecorativeElements";

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
      <div className="max-w-4xl mx-auto relative">
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/30" />

        <div className="text-center mb-16 sm:mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
          <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4 mt-6 sm:mt-8">
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-50">Services</h1>
        </div>

        <Card variant="gradient-border" cornerAccent className="p-8 sm:p-10 md:p-12">
          <CardContent>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {servicesContent}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
