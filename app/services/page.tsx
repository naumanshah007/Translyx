import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import Link from "next/link";
import { ArrowRight, Shield, Zap, FileText, Users, Settings, Handshake, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionDivider, PatternOverlay } from "@/components/ui/DecorativeElements";

export const metadata = {
  title: "Our Services",
  description: `${siteConfig.companyName} provides comprehensive technology enablement services for healthcare organizations in New Zealand.`,
  keywords: ["healthcare technology services", "clinical technology", "regulatory compliance", "technology integration", "training enablement"],
};

const services = [
  {
    name: "Regulatory & Compliance Alignment",
    icon: Shield,
    description: "Ensure technology adoption meets New Zealand healthcare regulatory requirements and compliance standards.",
    includes: [
      "Regulatory pathway assessment and guidance",
      "Compliance framework alignment",
      "Documentation for regulatory submissions",
      "Standards compliance verification",
    ],
    deliverables: [
      "Compliance assessment reports",
      "Regulatory submission documentation",
      "Standards alignment documentation",
      "Compliance gap analysis",
    ],
    for: ["Manufacturers", "Laboratories", "Clinical facilities", "Research organizations"],
  },
  {
    name: "Technology Integration Support",
    icon: Zap,
    description: "Facilitate seamless integration of diagnostic and clinical technologies into existing healthcare workflows.",
    includes: [
      "System integration planning",
      "Workflow analysis and optimization",
      "Technical implementation support",
      "System compatibility assessment",
    ],
    deliverables: [
      "Integration plans and roadmaps",
      "Technical specifications",
      "Implementation documentation",
      "Integration testing support",
    ],
    for: ["Manufacturers", "Laboratories", "Clinical facilities", "IT departments"],
  },
  {
    name: "Documentation & Evidence Support",
    icon: FileText,
    description: "Comprehensive documentation and evidence gathering to support technology adoption and regulatory submissions.",
    includes: [
      "Technical documentation development",
      "Evidence compilation and analysis",
      "Clinical evidence support",
      "Documentation quality assurance",
    ],
    deliverables: [
      "Technical documentation packages",
      "Evidence dossiers",
      "Clinical evaluation reports",
      "Quality assurance documentation",
    ],
    for: ["Manufacturers", "Research organizations", "Clinical facilities"],
  },
  {
    name: "Training & Enablement",
    icon: Users,
    description: "Training programs and operational enablement to ensure successful technology implementation and adoption.",
    includes: [
      "Training program development",
      "Staff training delivery",
      "Operational procedure development",
      "Knowledge transfer support",
    ],
    deliverables: [
      "Training materials and curricula",
      "Training delivery and support",
      "Standard operating procedures",
      "User guides and documentation",
    ],
    for: ["Laboratories", "Clinical facilities", "Healthcare staff", "Research organizations"],
  },
  {
    name: "Operational & Logistics Support",
    icon: Settings,
    description: "End-to-end operational support for technology deployment, including logistics and workflow facilitation.",
    includes: [
      "Operational planning and coordination",
      "Logistics and supply chain support",
      "Workflow optimization",
      "Change management support",
    ],
    deliverables: [
      "Operational plans",
      "Logistics coordination",
      "Workflow documentation",
      "Change management plans",
    ],
    for: ["Laboratories", "Clinical facilities", "Manufacturers", "Research organizations"],
  },
  {
    name: "Partnership & Stakeholder Coordination",
    icon: Handshake,
    description: "Coordinate partnerships between manufacturers, laboratories, clinicians, and research organizations.",
    includes: [
      "Stakeholder engagement and coordination",
      "Partnership facilitation",
      "Multi-party project management",
      "Communication and collaboration support",
    ],
    deliverables: [
      "Stakeholder engagement plans",
      "Partnership agreements",
      "Project coordination support",
      "Communication frameworks",
    ],
    for: ["Manufacturers", "Laboratories", "Clinicians", "Research organizations"],
  },
];

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-50">Our Services</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            {siteConfig.companyName} supports the introduction of innovative diagnostic and clinical products to New Zealand 
            healthcare providers. We work collaboratively with healthcare organisations, laboratories, and academic partners to 
            make globally validated clinical innovations available across hospital, community, and research settings.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our services focus on identifying globally validated clinical innovations and making them available to healthcare 
            providers, with an emphasis on fit-for-purpose implementation, reliable supply, and local support. We provide 
            comprehensive support including training, documentation, and logistical assistance, all tailored to meet the 
            specific needs of the New Zealand healthcare landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12 mb-16 relative">
          <PatternOverlay pattern="mesh" opacity={0.04} className="text-primary-500/30" />
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} variant="gradient-border" className="p-0 overflow-hidden" cornerAccent={index === 0}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-slate-900 via-primary-600 to-cyan-400 text-white flex items-center justify-center shadow-[0_18px_40px_rgba(37,99,235,0.35)] flex-shrink-0">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl sm:text-3xl mb-3">{service.name}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">What it includes</h3>
                      <ul className="space-y-2">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Typical deliverables</h3>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Who it&apos;s for</h3>
                      <ul className="space-y-2">
                        {service.for.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
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
            label: "Learn About Collaboration",
            href: "/collaboration",
          }}
        />
      </div>
    </div>
  );
}
