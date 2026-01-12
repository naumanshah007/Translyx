import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import { Shield, Lock, Zap, Eye } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      title: "Smart Detection",
      description: "Automatically identifies names, emails, phone numbers, financial data, and custom entities.",
      icon: Eye,
    },
    {
      title: "Secure Tokenization",
      description: "Replaces sensitive data with secure tokens before sending to any LLM provider.",
      icon: Lock,
    },
    {
      title: "Seamless Restore",
      description: "Original values are automatically restored in AI responses for natural conversations.",
      icon: Zap,
    },
  ];

  const stats = [
    { label: "Active Users", value: "10K+", icon: Shield },
    { label: "Protected Data", value: "1M+", icon: Lock },
    { label: "Uptime", value: "99.9%", icon: Zap },
    { label: "Satisfaction", value: "4.9/5", icon: Eye },
  ];

  return (
    <>
      <Hero
        headline="PII in Generative AI"
        subheadline="Protecting "
        description="Secure your sensitive data while leveraging the power of AI. Privexa automatically detects and protects PII before it reaches any LLM."
        primaryCTA={{
          label: "Start Free Trial",
          href: "/contact",
        }}
        secondaryCTA={{
          label: "Learn More",
          href: "/features",
        }}
        badge={{
          text: "Enterprise-Grade Privacy",
          icon: <Shield className="w-4 h-4" />,
        }}
        className="bg-slate-950 dark:bg-slate-950 text-white"
      />
      <Features
        title="How Privexa Protects Your Data"
        description="Advanced entity detection and encryption ensures your sensitive information never leaves your control."
        features={features}
      />
      <Stats stats={stats} />
      <CTA
        title="Ready to Get Started?"
        description="Join thousands of companies protecting their data with Privexa."
        primaryCTA={{
          label: "Contact Us",
          href: "/contact",
        }}
        secondaryCTA={{
          label: "View Features",
          href: "/features",
        }}
      />
    </>
  );
}

