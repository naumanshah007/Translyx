import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { products } from "@/config/products";
import { PxCta, PxHeading, PxSection, StatusBadge } from "@/components/privexa/ui";
import { ProductWorlds } from "@/components/sections/ProductWorlds";
import { CTA } from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "Digital Pathology — Partner AI, Workflow Automation & Slide Privacy",
  description:
    "Translyx digital pathology: Aiforia AI-assisted pathology (authorised partner solution), Algoscope surgery-to-pathology workflow automation (partner product), and Privexa whole-slide image privacy.",
  path: "/digital-pathology",
  keywords: ["digital pathology AI", "Aiforia New Zealand", "Algoscope", "digital pathology privacy", "WSI privacy"],
});

export default function DigitalPathologyPage() {
  return (
    <>
      <section className="bg-[#F4F7FA] pb-16 pt-16 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <PxHeading
            as="h1"
            tone="light"
            eyebrow="Digital pathology"
            title="AI-enabled pathology, from grossing bench to slide."
            body="Translyx brings specialist partner technologies into New Zealand and Oceania pathology — and adds Privexa privacy controls where slides and reports need to travel."
          />
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {products.map((p) => (
              <li key={p.slug} className="rounded-2xl border border-slate-200 bg-white p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-800">{p.badge}</p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-[#0B1117]">{p.shortTitle ?? p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.description}</p>
                <Link href={p.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1117] hover:text-cyan-800">
                  Explore {p.shortTitle ?? p.title} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </li>
            ))}
            <li className="rounded-2xl border border-[#0B1117] bg-[#070B10] p-7 text-white">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">A Translyx platform</p>
                <StatusBadge status="validation" />
              </div>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">Privexa WSI privacy</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Privacy controls for labels, macro images, thumbnails and metadata of whole-slide images.
              </p>
              <Link href="/privexa/wsi" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 hover:text-white">
                Explore WSI privacy <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <ProductWorlds />

      <PxSection tone="light" labelledBy="complement">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <PxHeading id="complement" tone="light" eyebrow="How it fits together" title="Partner technology and Privexa, side by side." />
          <div className="space-y-5 text-base leading-relaxed text-slate-600">
            <p>
              Aiforia and Algoscope are third-party products that Translyx represents. They are not part of Privexa, and
              Translyx does not own them.
            </p>
            <p>
              Privexa is Translyx&apos;s own platform. Where pathology data needs to reach AI, research collaborators or partner
              platforms, Privexa can protect identity-bearing slide surfaces and reports first.
            </p>
            <div className="pt-2">
              <PxCta href="/privexa/demo?interest=wsi" variant="primary-light">Discuss a WSI Evaluation</PxCta>
            </div>
          </div>
        </div>
      </PxSection>

      <CTA
        title="Talk to Translyx about digital pathology."
        description="Partner AI evaluation, surgery-to-pathology workflow, or slide privacy — start with your laboratory's priorities."
        primaryCTA={{ label: "Talk to Translyx", href: "/contact" }}
        secondaryCTA={{ label: "Explore Privexa", href: "/privexa" }}
      />
    </>
  );
}
