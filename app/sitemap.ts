import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { pipelineCategories } from "@/config/pipeline";
import { pipelineCapabilities } from "@/config/pipelineCapabilities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const capabilityUrls = pipelineCapabilities.map((c) => ({
    url: `${baseUrl}${c.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const diagnosticUrls = pipelineCategories.map((c) => ({
    url: `${baseUrl}/pipeline/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/privexa`, lastModified: now, changeFrequency: "weekly", priority: 0.98 },
    { url: `${baseUrl}/cervigrade`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/privexa/wsi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/privexa/platform`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/privexa/deployment`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privexa/demo`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/trust`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/digital-pathology`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/news`, lastModified: now, changeFrequency: "daily", priority: 0.6 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/products/aiforia`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/products/algoscope`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/pipeline`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    ...capabilityUrls,
    ...diagnosticUrls,
    { url: `${baseUrl}/partners`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/company`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
  ];
}
