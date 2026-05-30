import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { pipelineCategories } from "@/config/pipeline";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const pipelineUrls = pipelineCategories.map((c) => ({
    url: `${baseUrl}/product-pipeline/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/products/aiforia`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/products/privexa-trace`, lastModified: now, changeFrequency: "weekly", priority: 0.90 },
    { url: `${baseUrl}/products/privexa-ai-wrapper`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${baseUrl}/products/privexa-cloud-shield`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${baseUrl}/products/privexa-scribe`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${baseUrl}/products/clinical-triage`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/digital-pathology`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/ai-solutions`, lastModified: now, changeFrequency: "weekly", priority: 0.90 },
    { url: `${baseUrl}/product-pipeline`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    ...pipelineUrls,
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.70 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/updates`, lastModified: now, changeFrequency: "weekly", priority: 0.65 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.60 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: "monthly", priority: 0.60 },
  ];
}
