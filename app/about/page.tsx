import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Shield, CheckCircle2, Users, FileText, Settings, Handshake } from "lucide-react";
import { SectionDivider, PatternOverlay } from "@/components/ui/DecorativeElements";

export const metadata = {
  title: "About Us",
  description: `Learn more about ${siteConfig.companyName} and our mission to support healthcare technology adoption in New Zealand.`,
  keywords: ["Translyx Limited", "about", "team", "healthcare technology", "clinical technology", "New Zealand healthcare"],
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
        <div className="space-y-12 mb-16">
          <Card cornerAccent>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-base leading-relaxed space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Translyx is a New Zealand–based consultancy and technology enablement firm focused on supporting the responsible adoption of advanced diagnostic and clinical technologies within the healthcare and research ecosystem.
                </p>
                <p>
                  Our mission is to bridge the gap between regulatory approval, technical readiness, and real-world implementation, ensuring that innovative healthcare solutions can be introduced efficiently, compliantly, and sustainably. We are dedicated to enhancing healthcare in New Zealand by facilitating the integration of advanced diagnostic and clinical technologies, making innovative solutions accessible to healthcare providers and researchers alike.
                </p>
                <p>
                  We collaborate closely with manufacturers, clinicians, laboratories, and research organizations to streamline the introduction of new technologies. Our comprehensive support includes training, documentation, and logistical assistance, all tailored to meet the specific needs of the New Zealand healthcare landscape. Our services span regulatory guidance, technical documentation support, training coordination, and operational enablement — designed to empower healthcare organizations to make informed decisions about the technologies they adopt.
                </p>
                <p>
                  At Translyx, quality, compliance, and patient safety are central to everything we do. We prioritize quality and compliance in every aspect of our operations, fostering partnerships and promoting responsible practices. We do not replace clinical decision-making; instead, we support healthcare professionals by ensuring that new technologies are introduced with clarity, accountability, and adherence to applicable standards, ultimately improving patient outcomes.
                </p>
              </div>
            </CardContent>
          </Card>

          <SectionDivider variant="minimal" />

          {/* Our Role Section */}
          <Card cornerAccent>
            <CardHeader>
              <CardTitle className="text-2xl">Our Role</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 text-white flex items-center justify-center shadow-lg flex-shrink-0">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Technology enablement & integration support</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Facilitating seamless integration of diagnostic and clinical technologies into existing healthcare workflows.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 text-white flex items-center justify-center shadow-lg flex-shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Regulatory and compliance alignment</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Ensuring technology adoption meets New Zealand healthcare regulatory requirements and compliance standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 text-white flex items-center justify-center shadow-lg flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Clinical and laboratory workflow facilitation</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Supporting the integration of new technologies into clinical and laboratory workflows.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 text-white flex items-center justify-center shadow-lg flex-shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Training and documentation coordination</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Providing comprehensive training programs and documentation support for successful technology implementation.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <SectionDivider variant="gradient" />

          {/* Team Section - Dr Ehsan Ullah Only */}
        <div className="mb-16 relative">
            <PatternOverlay pattern="dots" opacity={0.02} className="text-primary-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -top-4 sm:-top-6 w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full" />
              Our Team
            </h2>
            <div className="max-w-2xl mx-auto">
              <Card variant="default" className="p-8" cornerAccent>
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-primary-100 to-cyan-100 dark:from-primary-900 dark:to-cyan-900 p-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/team/ehsan-ullah.png"
                        alt={siteConfig.team.ehsan.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">{siteConfig.team.ehsan.name}</h3>
                  <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">{siteConfig.team.ehsan.role}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">New Zealand</p>
              </div>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-justify">
                    {siteConfig.team.ehsan.name} is a physician-scientist and healthcare systems leader with deep expertise in 
                  laboratory medicine, digital pathology, and applied AI. He brings a rare combination 
                  of clinical judgment, systems thinking, and translational research experience, shaped 
                  by more than a decade of leadership across large-scale public health services, national 
                  programs, and international standards bodies.
                </CardDescription>
                <CardDescription className="text-sm leading-relaxed mt-3 text-justify">
                    Working at the intersection of AI, data, and complex regulated operations, {siteConfig.team.ehsan.name} focuses 
                  on translating advanced research into deployable, high-impact solutions for real-world 
                    healthcare environments. He has led nationally significant transformation initiatives, advised 
                    on global standards for AI and data systems, and overseen the deployment of automation and 
                    ML in highly complex operational settings.
                </CardDescription>
                <CardDescription className="text-sm leading-relaxed mt-3 text-justify">
                    He maintains active collaborations with leading universities in New Zealand and the United States, 
                    contributes to international technical standards, and serves as an author and editor on emerging 
                    AI and digital systems frameworks. He is a Director (Board of Directors) at the Digital Pathology 
                    Association (USA), a member of the International Organization for Standardization (ISO) 
                    technical committee on medical laboratories and in vitro diagnostic systems, a Visiting Assistant 
                    Professor at The Ohio State University and the University of Otago, and an author of 60+ publications.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <SectionDivider variant="geometric" />

        {/* Values Section */}
        <div className="relative">
            <PatternOverlay pattern="grid" opacity={0.02} className="text-primary-500" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -top-4 sm:-top-6 w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full" />
              Our Values
            </h2>
          <div className="grid md:grid-cols-3 gap-8">
              <Card variant="default" className="p-8 text-center" cornerAccent>
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
              </div>
                <CardTitle className="text-xl mb-3">Quality & Compliance</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                  Quality, compliance, and patient safety are central to everything we do. We ensure that 
                  new technologies are introduced with clarity, accountability, and adherence to applicable standards.
              </CardDescription>
            </Card>

              <Card variant="default" className="p-8 text-center" cornerAccent>
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
                <CardTitle className="text-xl mb-3">Responsible Adoption</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                  We support the responsible adoption of advanced technologies, ensuring that innovative 
                  healthcare solutions are introduced efficiently, compliantly, and sustainably.
              </CardDescription>
            </Card>

              <Card variant="default" className="p-8 text-center" cornerAccent>
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-10 h-10 text-white" />
              </div>
                <CardTitle className="text-xl mb-3">Partnership & Collaboration</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                  We work closely with manufacturers, clinicians, laboratories, and research organizations 
                  to facilitate technology integration across the New Zealand healthcare landscape.
              </CardDescription>
            </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
