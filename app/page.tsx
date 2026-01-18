"use client";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import {
  Shield,
  Zap,
  FileText,
  Users,
  Settings,
  Handshake,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { SectionDivider, PatternOverlay, CornerAccent } from "@/components/ui/DecorativeElements";

export default function HomePage() {
  const highlights = [
    {
      label: "NZ-Focused",
      description: "Aligned to New Zealand healthcare workflows and compliance expectations",
      icon: MapPin,
    },
    {
      label: "Implementation Support",
      description: "Training, documentation, and operational enablement",
      icon: Users,
    },
    {
      label: "Partner-Led",
      description: "Collaboration with manufacturers, labs, and clinicians",
      icon: Handshake,
    },
  ];

  return (
    <>
      <Hero
        headline="Translating Innovation into Impact"
        description="Our mission is to bring innovative diagnostic and clinical products to New Zealand, supporting healthcare providers with timely access to technologies that enable high-quality patient care and informed clinical decision-making."
        primaryCTA={{
          label: "View Product Pipeline",
          href: "/services",
        }}
        secondaryCTA={{
          label: "Talk to Us",
          href: "/contact",
        }}
        badge={{
          text: "Healthcare Technology Enablement",
          icon: <Shield className="w-4 h-4" />,
        }}
      />

      <SectionDivider variant="gradient" />

      {/* Feature Highlights Section */}
      <section className="relative py-12 sm:py-14 md:py-16 bg-white/70 dark:bg-slate-950/60">
        <PatternOverlay pattern="topo" opacity={0.05} className="text-primary-500/40" />
        <CornerAccent position="top-right" size="md" className="hidden sm:block" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-50 mt-6 sm:mt-8">Key Highlights</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              What sets Translyx apart in healthcare technology enablement
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
                return (
                <Card
                  key={index}
                  variant="gradient-border"
                  className="p-6 group"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-white/80 dark:bg-slate-900/70 border border-white/60 dark:border-slate-700/60 rounded-2xl flex items-center justify-center mb-4 shadow-[0_10px_25px_rgba(15,23,42,0.2)] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <CardTitle className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                      {highlight.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {highlight.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                );
              })}
            </div>
                    </div>
      </section>

      <SectionDivider variant="geometric" />

      {/* Our Commitment to Quality Section */}
      <section className="relative py-12 sm:py-14 md:py-16 bg-slate-50/70 dark:bg-slate-950/70">
        <PatternOverlay pattern="grid" opacity={0.03} className="text-primary-500/40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
            <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
                  </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-50 mt-3 sm:mt-4">Our Commitment to Quality</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Translyx is dedicated to introducing innovative diagnostic and clinical products to the New Zealand healthcare 
              sector. The company works with healthcare organisations, laboratories, and academic partners to make 
              globally validated clinical innovations available, supporting clinical decision-making and contributing to 
              improved patient outcomes.
                        </p>
                      </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6" variant="gradient-border" cornerAccent>
              <CardHeader>
                <div className="w-12 h-12 bg-white/80 dark:bg-slate-900/70 border border-white/60 dark:border-slate-700/60 rounded-2xl flex items-center justify-center mb-4 shadow-[0_10px_25px_rgba(15,23,42,0.2)]">
                  <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Regulatory Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Bridge the gap between regulatory approval and practical application
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="p-6" variant="gradient-border" cornerAccent>
              <CardHeader>
                <div className="w-12 h-12 bg-white/80 dark:bg-slate-900/70 border border-white/60 dark:border-slate-700/60 rounded-2xl flex items-center justify-center mb-4 shadow-[0_10px_25px_rgba(15,23,42,0.2)]">
                  <Zap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Accessible Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Ensure innovative solutions are accessible to healthcare providers and researchers
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="p-6" variant="gradient-border" cornerAccent>
              <CardHeader>
                <div className="w-12 h-12 bg-white/80 dark:bg-slate-900/70 border border-white/60 dark:border-slate-700/60 rounded-2xl flex items-center justify-center mb-4 shadow-[0_10px_25px_rgba(15,23,42,0.2)]">
                  <Handshake className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Collaborative Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Work closely with manufacturers, clinicians, and laboratories
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Services Preview Section */}
      <section className="relative py-12 sm:py-14 md:py-16 bg-white/70 dark:bg-slate-950/60">
        <PatternOverlay pattern="dots" opacity={0.04} className="text-primary-500/40" />
        <CornerAccent position="bottom-left" size="md" className="hidden sm:block" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
            <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4">
              <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-50 mt-3 sm:mt-4">Product Pipeline</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Translyx supports the introduction of innovative diagnostic and clinical products, making globally validated clinical 
              innovations available to healthcare providers across hospital, community, and research settings.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card variant="gradient-border" className="p-8 text-center">
              <CardContent>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Translyx focuses on identifying globally validated clinical innovations and making them available to healthcare 
                  providers, with an emphasis on fit-for-purpose implementation, reliable supply, and local support.
                </p>
                <Button asChild variant="gradient" size="lg" className="shadow-[0_14px_35px_rgba(37,99,235,0.45)]">
                  <Link href="/services" className="flex items-center justify-center gap-2">
                    View Product Pipeline
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider variant="minimal" />

      {/* Trust / Compliance Note Section */}
      <section className="relative py-12 sm:py-14 md:py-16 bg-slate-50/70 dark:bg-slate-950/70">
        <PatternOverlay pattern="topo" opacity={0.05} className="text-primary-500/30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8" variant="gradient-border" cornerAccent>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/80 dark:bg-slate-900/70 border border-white/60 dark:border-slate-700/60 rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(15,23,42,0.2)]">
                    <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Quality, Compliance & Patient Safety</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  At Translyx, quality and compliance are prioritized in every aspect of operations. By fostering 
                  partnerships and promoting responsible practices, the company aims to empower healthcare organizations to make 
                  informed decisions about the technologies they adopt, ultimately improving patient outcomes.
                </p>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">Important:</span> Translyx does not provide medical advice or replace clinical decision-making. The company supports compliant 
                      adoption and implementation of technology.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Transform Your Healthcare Technology?"
        description="Let's discuss how Translyx can support your organization's technology adoption journey."
        primaryCTA={{
          label: "View Product Pipeline",
          href: "/services",
        }}
        secondaryCTA={{
          label: "Contact Us",
          href: "/contact",
        }}
      />
    </>
  );
}
