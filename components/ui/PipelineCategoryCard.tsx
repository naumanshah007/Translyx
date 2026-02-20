import { Card, CardContent } from "@/components/ui/Card";
import { PipelineImage } from "@/components/ui/PipelineImage";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { PipelineImageEntry } from "@/config/pipeline";

interface PipelineCategoryCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: PipelineImageEntry;
}

/**
 * Shared Product Pipeline category card with consistent typography.
 * Title: text-2xl font-bold leading-tight
 * Excerpt: text-base leading-relaxed text-gray-700 dark:text-gray-300 text-left line-clamp-3
 * Learn more: text-sm font-semibold
 */
export function PipelineCategoryCard({ slug, title, excerpt, image }: PipelineCategoryCardProps) {
  return (
    <Link href={`/product-pipeline/${slug}`}>
      <Card variant="gradient-border" className="h-full overflow-hidden hover:-translate-y-1 transition-transform duration-300">
        <PipelineImage
          localSrc={image.local}
          remoteSrc={image.remote}
          alt={title}
          className="rounded-t-2xl rounded-b-none"
        />
        <CardContent className="p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-gray-50 mb-3">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 text-left mb-4 line-clamp-3">
            {excerpt}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400">
            Learn more
            <ArrowRight className="w-4 h-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
