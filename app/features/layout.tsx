import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "This page redirects to our Services page. Explore all of Translyx Limited's services and capabilities.",
  keywords: ["healthcare technology", "services", "technology enablement"],
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

