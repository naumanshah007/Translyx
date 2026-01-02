import { siteConfig } from "@/config/site";
import { Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.companyName}. Reach us at ${siteConfig.company.email}.`,
  keywords: ["contact", "Privexa Limited contact", "enterprise AI consultation", "AI solutions contact"],
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">Get in Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We&apos;d love to hear from you. Reach out to us via email and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Contact Information - Centered and Prominent */}
          <Card variant="default" className="hover:shadow-colored transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-lg">Email</p>
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="text-2xl font-semibold text-primary-600 dark:text-primary-400 hover:underline transition-colors"
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

          <Card variant="default" className="hover:shadow-colored transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Business Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-2 rounded-lg bg-gray-50 dark:bg-gray-900">
                  <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg bg-gray-50 dark:bg-gray-900">
                  <span className="text-gray-600 dark:text-gray-400">Saturday - Sunday</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

