import { Features } from "@/components/sections/Features";
import { Eye, Lock, Zap, Shield, Database, Settings } from "lucide-react";

export const metadata = {
  title: "Features",
  description: "Explore all the features that make Privexa the leading privacy-first AI platform",
};

export default function FeaturesPage() {
  const allFeatures = [
    {
      title: "Smart Detection",
      description: "Automatically identifies names, emails, phone numbers, financial data, and custom entities using advanced AI and pattern recognition.",
      icon: Eye,
    },
    {
      title: "Secure Tokenization",
      description: "Replaces sensitive data with secure tokens before sending to any LLM provider, ensuring your data never leaves your control.",
      icon: Lock,
    },
    {
      title: "Seamless Restore",
      description: "Original values are automatically restored in AI responses for natural conversations without compromising security.",
      icon: Zap,
    },
    {
      title: "Enterprise-Grade Security",
      description: "Built with enterprise security standards, including encryption at rest and in transit, audit logs, and compliance certifications.",
      icon: Shield,
    },
    {
      title: "Flexible Integration",
      description: "Integrate with your existing systems through our comprehensive API, supporting multiple database backends and cloud providers.",
      icon: Database,
    },
    {
      title: "Customizable Rules",
      description: "Define your own entity detection rules, priorities, and mappings to match your organization's specific requirements.",
      icon: Settings,
    },
  ];

  return (
    <>
      <Features
        title="Complete Feature Set"
        description="Everything you need to protect your data while leveraging AI"
        features={allFeatures}
        className="pt-20"
      />
    </>
  );
}

