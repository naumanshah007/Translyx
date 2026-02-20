import { notFound } from "next/navigation";
import { pipelineCategories } from "@/config/pipeline";
import { PatternOverlay } from "@/components/ui/DecorativeElements";
import { PipelineImage } from "@/components/ui/PipelineImage";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return pipelineCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = pipelineCategories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.excerpt,
  };
}

export default async function PipelineCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = pipelineCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const introParagraph = category.content.split("\n\n")[0];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto relative">
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/30" />

        <Link
          href="/product-pipeline"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Product Pipeline
        </Link>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-6">
          {category.title}
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12 max-w-4xl">
          {introParagraph}
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {category.images.map((src, i) => (
            <PipelineImage key={i} src={src} alt={`${category.title} image ${i + 1}`} />
          ))}
        </div>

        {/* Full Content */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl">
          {category.content.split("\n\n").slice(1).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
