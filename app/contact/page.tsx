import { siteConfig } from "@/config/site";
import { Mail, MapPin, User, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { PatternOverlay } from "@/components/ui/DecorativeElements";

export const metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.companyName}. Reach us at ${siteConfig.company.email}.`,
  keywords: ["contact", "Translyx Limited contact", "healthcare technology consultation", "clinical technology contact"],
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
      <div className="max-w-4xl mx-auto relative">
        <PatternOverlay pattern="mesh" opacity={0.02} className="text-primary-500" />
        <div className="text-center mb-12 sm:mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-50 mt-6 sm:mt-8">Get in Touch</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We&apos;d love to hear from you. Reach out to us and we&apos;ll respond as soon as possible. Our team is 
            committed to providing responsive support to help you with your healthcare technology needs.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Contact Information */}
          <Card variant="default" cornerAccent>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1 text-lg">{siteConfig.team.ehsan.name}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Clinical & Technology Liaison</p>
                  <a
                    href={`mailto:${siteConfig.team.ehsan.email}`}
                    className="text-xl font-semibold text-primary-600 dark:text-primary-400 hover:underline transition-colors block mb-3"
                  >
                    {siteConfig.team.ehsan.email}
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">or</p>
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="text-lg font-medium text-primary-600 dark:text-primary-400 hover:underline transition-colors block"
                  >
                    {siteConfig.company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {siteConfig.company.address}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Availability */}
          <Card variant="default" cornerAccent>
            <CardHeader>
              <CardTitle className="text-2xl">Support Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Responsive Support</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    We are committed to providing timely and comprehensive support for all your healthcare technology 
                    enablement needs. Our team strives to respond to inquiries promptly and provide ongoing assistance 
                    throughout your technology adoption journey.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

