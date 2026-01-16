import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import Link from "next/link";
import { ArrowRight, Building2, FlaskConical, Users, GraduationCap, Phone, Rocket, Settings, Handshake } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionDivider, PatternOverlay } from "@/components/ui/DecorativeElements";

export const metadata = {
  title: "Collaboration",
  description: `Partner with ${siteConfig.companyName} to enable healthcare technology adoption in New Zealand.`,
  keywords: ["healthcare collaboration", "technology partnerships", "clinical technology", "healthcare enablement"],
};

const collaborators = [
  {
    name: "Manufacturers",
    icon: Building2,
    description: "Medical device and diagnostic technology manufacturers seeking to enter or expand in the New Zealand healthcare market.",
  },
  {
    name: "Laboratories",
    icon: FlaskConical,
    description: "Clinical and research laboratories adopting new diagnostic technologies and workflows.",
  },
  {
    name: "Clinicians",
    icon: Users,
    description: "Healthcare professionals and clinical teams implementing new technologies in patient care settings.",
  },
  {
    name: "Research Organizations",
    icon: GraduationCap,
    description: "Research institutions and academic organizations developing and deploying clinical technologies.",
  },
];

const engagementModels = [
  {
    name: "Discovery Call",
    icon: Phone,
    description: "Initial consultation to understand your technology adoption needs, challenges, and objectives.",
    details: [
      "Needs assessment",
      "Technology evaluation",
      "Regulatory pathway discussion",
      "Initial recommendations",
    ],
  },
  {
    name: "Pilot Support",
    icon: Rocket,
    description: "Focused support for pilot implementations and proof-of-concept projects.",
    details: [
      "Pilot planning and design",
      "Implementation support",
      "Evaluation and assessment",
      "Scaling recommendations",
    ],
  },
  {
    name: "Ongoing Enablement",
    icon: Settings,
    description: "Comprehensive, long-term partnership for full technology adoption and operational support.",
    details: [
      "Full lifecycle support",
      "Continuous improvement",
      "Training and development",
      "Ongoing compliance support",
    ],
  },
];

export default function CollaborationPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
          <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4 mt-6 sm:mt-8">
            <Handshake className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-50">Collaboration</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            We work collaboratively with healthcare organisations, laboratories, and academic partners to introduce 
            innovative diagnostic and clinical products to New Zealand healthcare settings.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our systems-based approach ensures that globally validated clinical innovations are made available to 
            healthcare providers with fit-for-purpose implementation, reliable supply, and local support, contributing 
            to improved patient outcomes.
          </p>
        </div>

        <SectionDivider variant="gradient" />

        {/* Who We Collaborate With */}
        <div className="mb-16 relative">
          <PatternOverlay pattern="grid" opacity={0.02} className="text-primary-500" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -top-4 sm:-top-6 w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full" />
            Who We Collaborate With
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {collaborators.map((collaborator, index) => {
              const Icon = collaborator.icon;
              return (
                <Card key={index} variant="default" className="p-6" cornerAccent>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{collaborator.name}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {collaborator.description}
                      </CardDescription>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <SectionDivider variant="geometric" />

        {/* Engagement Models */}
        <div className="mb-16 relative">
          <PatternOverlay pattern="dots" opacity={0.02} className="text-primary-500" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -top-4 sm:-top-6 w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full" />
            Engagement Models
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <Card key={index} variant="default" className="p-6 h-full flex flex-col" cornerAccent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/30 flex-shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{model.name}</CardTitle>
                  </div>
                  <CardDescription className="text-sm leading-relaxed mb-4 flex-1">
                    {model.description}
                  </CardDescription>
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      {model.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <CTA
          title="Ready to Collaborate?"
          description="Contact us to discuss how we can support your technology adoption journey."
          primaryCTA={{
            label: "Contact Us",
            href: "/contact",
          }}
          secondaryCTA={{
            label: "Explore Services",
            href: "/services",
          }}
        />
      </div>
    </div>
  );
}
