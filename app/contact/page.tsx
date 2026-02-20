import { siteConfig } from "@/config/site";
import { Mail, MapPin, Linkedin } from "lucide-react";
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
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/30" />
        <div className="text-center mb-12 sm:mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-50 mt-6 sm:mt-8">Get in Touch</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We&apos;d love to hear from you. Reach out to us and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6 w-full min-w-0">
          {/* Contact Information */}
          <Card variant="gradient-border" cornerAccent>
            <CardHeader className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
              <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 px-4 sm:px-6 lg:px-8 pt-0 pb-4 sm:pb-6 lg:pb-8">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-900 via-primary-600 to-cyan-400 rounded-2xl flex items-center justify-center shadow-[0_16px_35px_rgba(37,99,235,0.35)]">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="text-xl font-semibold text-primary-600 dark:text-primary-400 hover:underline transition-colors block"
                  >
                    {siteConfig.company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-900 via-primary-600 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_12px_25px_rgba(37,99,235,0.3)]">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {siteConfig.company.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-900 via-primary-600 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_12px_25px_rgba(37,99,235,0.3)]">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Follow us</p>
                  <a
                    href="https://www.linkedin.com/company/translyx/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 min-h-[44px] py-2 text-primary-600 dark:text-primary-400 hover:underline transition-colors break-words"
                  >
                    <Linkedin className="w-4 h-4 flex-shrink-0" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
