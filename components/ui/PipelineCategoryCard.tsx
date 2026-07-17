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
    <Link href={`/pipeline/${slug}`} className="group block h-full">
      <Card variant="gradient-border" className="h-full overflow-hidden rounded-[1.6rem] border-white bg-[#0B1430] hover:-translate-y-1.5 transition-transform duration-300">
        <div className="relative overflow-hidden">
          <PipelineImage
            localSrc={image.local}
            remoteSrc={image.remote}
            alt={title}
            className="h-52 rounded-none transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1430] via-transparent to-transparent" />
        </div>
        <CardContent className="relative p-6 pt-5 sm:p-7 sm:pt-5">
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-200/60">Diagnostic opportunity</p>
          <h2 className="mb-3 font-display text-2xl font-semibold leading-tight text-white">
            {title}
          </h2>
          <p className="mb-5 line-clamp-3 text-left text-sm leading-relaxed text-white/55">
            {excerpt}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
            Examine opportunity
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
