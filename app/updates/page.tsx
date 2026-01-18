import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import { PatternOverlay } from "@/components/ui/DecorativeElements";
import { Calendar } from "lucide-react";

export const metadata = {
  title: "Updates",
  description: `Stay informed about ${siteConfig.companyName}'s latest developments, company updates, and announcements.`,
  keywords: ["company updates", "announcements", "news", "translyx updates", "healthcare technology updates"],
};

interface Update {
  date: string;
  title: string;
  content: string;
}

const updates: Update[] = [
  {
    date: "17 January 2026",
    title: "Translyx Limited – Company Update",
    content: "Translyx Limited was officially registered in New Zealand on 17 December 2025 and is preparing to commence operations in 2026. Our Research and Business Development teams are actively developing our product line and advancing our healthcare innovation pipeline over the next few months. Stay tuned for further updates here or contact us at info@translyx.co if you have any questions or would like to introduce your innovative healthcare product to the New Zealand market.",
  },
];

export default function UpdatesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
      <div className="max-w-4xl mx-auto relative">
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/30" />
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
          <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4 mt-6 sm:mt-8">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-50">Updates</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed about Translyx Limited's latest developments, company updates, and announcements.
          </p>
        </div>

        {/* Updates Feed */}
        <div className="space-y-6">
          {updates.map((update, index) => (
            <Card key={index} variant="gradient-border" className="p-6 sm:p-8" cornerAccent>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                    <Calendar className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{update.date}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl sm:text-3xl mb-4 text-gray-900 dark:text-gray-100">{update.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {update.content}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {updates.length === 0 && (
          <Card variant="gradient-border" className="p-8 text-center">
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">No updates available at this time. Check back soon for the latest news.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
