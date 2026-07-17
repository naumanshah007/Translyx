import { notFound } from "next/navigation";
import { pipelineCategories } from "@/config/pipeline";
import { PipelineImage } from "@/components/ui/PipelineImage";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, FlaskConical } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

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
    alternates: { canonical: `/pipeline/${slug}` },
    openGraph: {
      title: `${category.title} | Translyx`,
      description: category.excerpt,
      url: `${siteConfig.url}/pipeline/${slug}`,
      siteName: siteConfig.name,
    },
  };
}

export default async function PipelineCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = pipelineCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const paragraphs = category.content.split("\n\n");
  const related = pipelineCategories.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <Hero
        badge={{ text: "Diagnostic innovation", icon: <FlaskConical className="h-3.5 w-3.5 text-teal-300" /> }}
        headline={category.title}
        description={category.excerpt}
        primaryCTA={{ label: "Discuss this opportunity", href: "/contact?topic=pipeline" }}
        secondaryCTA={{ label: "Back to pipeline", href: "/pipeline#diagnostic-innovation" }}
      />

      {/* Body */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-teal-200/10 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Image gallery — restrained 16:9 treatment with a brand-tint overlay */}
            <div className="relative mb-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {category.images.map((img, i) => (
                <div key={i} className="group relative overflow-hidden rounded-[1.35rem] border border-slate-200/70 bg-[#0B1430] shadow-[0_24px_60px_-34px_rgba(15,28,63,0.5)]">
                  <PipelineImage
                    localSrc={img.local}
                    remoteSrc={img.remote}
                    alt={`${category.title} — reference image ${i + 1}`}
                    className="rounded-none transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-[#0F1C3F]/20 via-transparent to-transparent" />
                </div>
              ))}
            </div>

            <Prose>
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </Prose>
          </div>
        </div>
      </section>

      {/* Related categories */}
      <section className="border-t border-slate-200/60 bg-[#F5F8FC] py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1100px]">
            <SectionHeader
              eyebrow="Explore more"
              title="Other diagnostic innovation areas"
              maxWidth="max-w-2xl"
              className="mb-10"
            />
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/pipeline/${c.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_2px_16px_-6px_rgba(15,28,63,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/60"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 ring-1 ring-slate-200/70">
                    <FlaskConical className="h-4 w-4 text-teal-700" />
                  </span>
                  <h3 className="mt-3.5 font-display text-base font-semibold leading-snug text-[#0F1C3F]">
                    {c.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Discuss diagnostic innovation for your organisation."
        description="Talk to Translyx about how this diagnostic innovation area fits your clinical, laboratory, or research priorities."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "See the full pipeline", href: "/pipeline" }}
      />
    </>
  );
}
