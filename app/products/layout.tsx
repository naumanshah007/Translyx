import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${siteConfig.companyName}'s comprehensive healthcare technology enablement services.`,
  keywords: [
    "healthcare technology",
    "clinical technology",
    "regulatory compliance",
    "technology integration",
    "healthcare services",
  ],
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

