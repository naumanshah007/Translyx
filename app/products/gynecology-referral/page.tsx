"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { PatternOverlay } from "@/components/ui/DecorativeElements";
import { 
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  FileText,
  Users,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

export default function GynecologyReferralPage() {
  const features = [
    {
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms analyze thousands of GP referral requests to identify patterns and suggest optimal referral paths.",
      icon: Zap,
    },
    {
      title: "Hospital Policy Compliance",
      description: "Automatically aligns referral suggestions with hospital-specific policies and guidelines to ensure compliance.",
      icon: Shield,
    },
    {
      title: "Efficient Triage",
      description: "Reduces manual review time by intelligently categorizing and prioritizing referral requests based on urgency and complexity.",
      icon: TrendingUp,
    },
    {
      title: "Comprehensive Documentation",
      description: "Generates detailed reports and documentation for each referral, maintaining complete audit trails.",
      icon: FileText,
    },
    {
      title: "Scalable Processing",
      description: "Handles high volumes of referral requests efficiently, supporting large healthcare systems and networks.",
      icon: Users,
    },
  ];

  const benefits = [
    "Reduces referral processing time and administrative burden",
    "Improves consistency in referral decision-making",
    "Ensures compliance with hospital policies and guidelines",
    "Enhances patient care through optimized referral pathways",
    "Provides actionable insights for healthcare administrators",
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto relative">
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/30" />
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-slate-900 via-primary-600 to-cyan-400 rounded-2xl flex items-center justify-center shadow-[0_16px_35px_rgba(37,99,235,0.35)]">
              <Stethoscope className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold ">
              Referral Grading System
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            An innovative diagnostic and clinical product introduced by Translyx to the New Zealand healthcare sector. 
            An AI-powered system that analyzes thousands of GP referral requests and suggests 
            best-fit referral paths per hospital policies, streamlining healthcare workflows and 
            improving patient care outcomes.
          </p>
        </div>

        {/* Overview Section */}
        <Card variant="gradient-border" className="mb-12 p-6 sm:p-8" cornerAccent>
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl mb-4">Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                Translyx introduces the Referral Grading System as part of our commitment to making globally validated 
                clinical innovations available to New Zealand healthcare providers. This innovative AI solution is designed to 
                transform how healthcare systems handle referral requests. By leveraging advanced 
                artificial intelligence, the system analyzes thousands of general practitioner (GP) 
                referral requests and automatically suggests the most appropriate referral pathways 
                based on hospital-specific policies and guidelines.
              </p>
              <p>
                This solution addresses the critical challenge of managing high volumes of referral 
                requests while ensuring consistency, compliance, and optimal patient care. The system 
                reduces administrative burden on healthcare staff while improving the accuracy and 
                efficiency of referral processing.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10  px-4">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6">
            {features.map((feature, index) => (
              <Card key={index} variant="gradient-border" className="p-4 sm:p-6 group transition-all duration-300 h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-900 via-primary-600 to-cyan-400 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-[0_12px_25px_rgba(37,99,235,0.35)] group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <Card variant="gradient-border" className="mb-12 sm:mb-16 transition-all duration-300" cornerAccent>
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Key Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card variant="gradient-border" className="mb-12 sm:mb-16 p-6 sm:p-8" cornerAccent>
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl mb-4">Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Large Hospital Networks:</span>{" "}
                Manage referral volumes across multiple facilities with consistent policy application.
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Regional Health Systems:</span>{" "}
                Streamline referral processes across different healthcare providers and institutions.
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Specialized Clinics:</span>{" "}
                Optimize referral routing for specialized medical services and procedures across various specialties.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center px-4 sm:px-6">
          <Card variant="gradient-border" className="p-6 sm:p-8" cornerAccent>
            <CardContent>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 ">
                Interested in Learning More?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                Contact us to learn more about Referral Grading System and how it 
                can transform your healthcare referral processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button asChild variant="gradient" size="lg" className="min-h-[44px] sm:min-h-[48px] w-full sm:w-auto shadow-md">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-[44px] sm:min-h-[48px] w-full sm:w-auto font-semibold">
                  <Link href="/products">View All Products</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
