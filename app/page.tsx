"use client";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Users,
  Lock,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/DecorativeElements";

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Translating Innovation into Impact"
        description="Our mission is to bring innovative diagnostic and clinical products to New Zealand, supporting healthcare providers with timely access to technologies that enable high-quality patient care and informed clinical decision-making."
      />

      <SectionDivider variant="gradient" />

      {/* Product Pipeline + Quality cards — 2-column on desktop, stacked on mobile */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-white/70 dark:bg-slate-950/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-50">Product Pipeline</h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Translyx supports the introduction of innovative diagnostic and clinical products, making globally validated clinical
              innovations available to healthcare providers across hospital, community, and research settings.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Quality, Compliance & Patient Safety card — LEFT on desktop */}
            <Card className="p-4 sm:p-6 lg:p-8 flex flex-col h-full" variant="gradient-border" cornerAccent>
              <CardHeader className="w-full flex-shrink-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/80 dark:bg-slate-900/70 border border-white/60 dark:border-slate-700/60 rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(15,23,42,0.2)]">
                    <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quality, Compliance & Patient Safety</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col w-full min-h-0">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify hyphens-auto break-words">
                  At Translyx, quality and compliance are prioritized in every aspect of operations. By fostering
                  partnerships and promoting responsible practices, the company aims to empower healthcare organizations to make
                  informed decisions about the technologies they adopt, ultimately improving patient outcomes.
                </p>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-auto">
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
            {/* Product Pipeline card — RIGHT on desktop */}
            <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 flex flex-col h-full">
              <CardHeader className="w-full flex-shrink-0">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">Product Pipeline</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 w-full min-h-0">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify hyphens-auto break-words mb-6">
                  Translyx focuses on identifying globally validated clinical innovations and making them available to healthcare
                  providers, with an emphasis on fit-for-purpose implementation, reliable supply, and local support.
                </p>
                <div className="mt-auto">
                  <Button asChild variant="gradient" size="lg" className="shadow-[0_14px_35px_rgba(37,99,235,0.45)]">
                    <Link href="/product-pipeline" className="flex items-center justify-center gap-2">
                      View Product Pipeline
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About Us teaser — full-width below the two cards */}
          <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 mt-8 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/80 dark:bg-slate-900/70 border border-white/60 dark:border-slate-700/60 rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(15,23,42,0.2)] flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">About Us</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify hyphens-auto break-words max-w-2xl">
                    Learn more about Translyx Limited and our mission to support healthcare technology adoption in New Zealand. Our team brings decades of experience across diagnostics, laboratory medicine, and clinical implementation.
                  </p>
                </div>
              </div>
              <Button asChild variant="gradient" size="lg" className="flex-shrink-0">
                <Link href="/about" className="flex items-center justify-center gap-2">
                  About Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Card>

          {/* AI-Ready Healthcare section */}
          <section id="ai-solutions" className="mt-16 sm:mt-20 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-50">AI-Ready Healthcare — Without the Privacy Risk</h2>
            <div className="space-y-6 mb-10">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify hyphens-auto break-words">
                Artificial intelligence is reshaping diagnostics, clinical workflows, and healthcare administration. But every AI tool your teams use raises the same question: what happens to patient data when it enters these systems?
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify hyphens-auto break-words">
                Translyx has partnered with Privexa — a New Zealand-based enterprise AI privacy platform — to ensure that healthcare organizations can adopt AI confidently, without exposing sensitive patient information to external systems.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify hyphens-auto break-words">
                Privexa intercepts and replaces patient identifiers, clinical details, and sensitive fields before any data reaches an AI system or cloud platform. Raw patient data stays within your boundary. Your teams get the benefits of AI. Your compliance obligations stay intact.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <Card variant="gradient-border" className="p-4 sm:p-6 flex flex-col h-full">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/15 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">Patient Data Stays Local</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 text-justify hyphens-auto break-words">
                    PII is replaced with safe tokens before reaching any LLM or cloud platform. Mappings stay within your infrastructure — never transmitted externally.
                  </p>
                </CardContent>
              </Card>
              <Card variant="gradient-border" className="p-4 sm:p-6 flex flex-col h-full">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/15 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">NZ Privacy Act 2020 Aligned</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 text-justify hyphens-auto break-words">
                    Designed for New Zealand&apos;s information privacy framework and international health data standards including HIPAA and GDPR.
                  </p>
                </CardContent>
              </Card>
              <Card variant="gradient-border" className="p-4 sm:p-6 flex flex-col h-full">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/15 flex items-center justify-center">
                      <Workflow className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">Built for Clinical Workflows</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 text-justify hyphens-auto break-words">
                    Works alongside your existing AI tools — no workflow disruption. Detection covers clinical identifiers, NHI numbers, patient names, dates of birth, and custom entity types specific to your organization.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button asChild variant="gradient" size="lg" className="shadow-[0_14px_35px_rgba(37,99,235,0.45)]">
                <Link href="/ai-solutions" className="flex items-center justify-center gap-2">
                  Learn about Privexa
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </section>

      <CTA
        title="Ready to Transform Your Healthcare Technology?"
        description="Let's discuss how Translyx can support your organization's technology adoption journey."
      />
    </>
  );
}
