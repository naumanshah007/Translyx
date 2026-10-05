import { pageMetadata } from "@/lib/metadata";
import { PrivexaSubnav } from "@/components/privexa/Chrome";
import { PxCta, PxHeading, PxSection, StatusBadge } from "@/components/privexa/ui";
import { WsiFlow } from "@/components/privexa/Diagrams";
import { PxFinalCta } from "@/components/privexa/FinalCta";

export const metadata = pageMetadata({
  title: "Privexa WSI — Privacy Controls for Digital Pathology",
  description:
    "Privexa whole-slide image privacy: protect slide labels, macro images, thumbnails and identifying metadata while preserving the pathology workflow. Developed capability under validation.",
  path: "/privexa/wsi",
  keywords: ["WSI privacy", "whole-slide image anonymisation", "digital pathology privacy", "pathology slide de-identification"],
});

const surfaces = [
  { title: "Slide label", body: "Printed or handwritten labels often carry names, accession numbers and barcodes." },
  { title: "Macro / overview image", body: "The overview capture of the whole glass slide frequently includes the label area." },
  { title: "Original thumbnail", body: "Embedded thumbnails can reproduce label content at low resolution." },
  { title: "Identifying & vendor metadata", body: "File properties may hold patient, case, operator or device identifiers." },
  { title: "Reviewer-added regions", body: "A reviewer can mark further regions for protection — for example, handwriting on the glass." },
];

const process = [
  { title: "Protected slide generation", body: "Privexa produces a new protected derivative. The original is not silently altered, and reprocessing creates new authority." },
  { title: "Human review", body: "An interactive slide reviewer shows what will be protected and allows reviewer-added regions." },
  { title: "Approval", body: "Approval binds to the exact protected slide version. A changed derivative needs fresh approval." },
  { title: "Integration", body: "Protected slides can feed AI, analytics, research sharing or partner platforms via the Privexa API." },
  { title: "Private deployment", body: "Slides can be processed inside customer-controlled infrastructure where required." },
];

export default function WsiPage() {
  return (
    <div className="bg-[#070B10]">
      <PrivexaSubnav />
      <section className="pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8">
          <div>
            <StatusBadge status="validation" />
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">Privexa WSI</p>
            <h1 className="mt-5 text-balance text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-[3.6rem]">
              Privacy controls for digital pathology.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Protect identity-bearing slide information while preserving the pathology workflow.
            </p>
            <p className="mt-6 max-w-xl rounded-xl border border-amber-300/20 bg-amber-300/[0.04] p-4 text-sm leading-relaxed text-amber-100/90">
              Developed capability — under validation. Whole-slide privacy is built and undergoing extended testing and
              qualification. Format coverage and throughput are confirmed per evaluation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PxCta href="/privexa/demo?interest=wsi">Discuss a WSI Evaluation</PxCta>
              <PxCta href="/privexa" variant="secondary">Privexa overview</PxCta>
            </div>
          </div>
          <WsiFlow />
        </div>
      </section>

      <PxSection tone="charcoal" labelledBy="challenge">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <PxHeading id="challenge" eyebrow="The challenge" title="A slide is more than tissue." />
          <div className="space-y-5 text-base leading-relaxed text-slate-400">
            <p>
              A digital slide is a gigapixel pyramidal image accompanied by associated images and metadata. Identity rarely
              lives in the tissue — it lives in the surfaces around it.
            </p>
            <p>
              Generic OCR and entity detection run across tissue morphology produced large numbers of false detections in
              our testing and risked damaging diagnostic utility. Privexa therefore targets the known identity-bearing
              surfaces, with human review for anything else.
            </p>
          </div>
        </div>
      </PxSection>

      <PxSection labelledBy="anatomy">
        <PxHeading id="anatomy" eyebrow="Anatomy of a digital slide" title="The surfaces Privexa protects." />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {surfaces.map((s) => (
            <li key={s.title} className="bg-[#070B10] p-6">
              <h3 className="font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
            </li>
          ))}
        </ul>
      </PxSection>

      <PxSection tone="charcoal" labelledBy="process">
        <PxHeading id="process" eyebrow="From slide to controlled release" title="Protect, review, approve." />
        <ol className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {process.map((p, i) => (
            <li key={p.title} className="grid gap-2 py-6 sm:grid-cols-[60px_240px_1fr] sm:gap-6">
              <span className="font-mono text-xs text-cyan-300/80">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-semibold text-white">{p.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{p.body}</p>
            </li>
          ))}
        </ol>
      </PxSection>

      <PxSection labelledBy="tech">
        <PxHeading id="tech" eyebrow="Technical notes" title="Engineered for gigapixel images." />
        <ul className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
          {[
            "Tiled, pyramidal image handling for very large slides",
            "Slide access built on OpenSlide-compatible reading",
            "Durable large-image processing with protected derivatives",
            "Interactive slide review in the browser",
          ].map((x) => (
            <li key={x} className="rounded-xl border border-white/10 px-5 py-4">{x}</li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-slate-500">
          Supported vendor formats are confirmed during evaluation. Privexa is not a medical device and does not perform
          diagnosis.
        </p>
      </PxSection>

      <PxFinalCta
        title="Evaluate Privexa on your slides."
        body="We'll scope an evaluation around your scanner formats, label practices and deployment requirements."
        primary={{ label: "Discuss a WSI Evaluation", href: "/privexa/demo?interest=wsi" }}
        secondary={{ label: "Platform integration", href: "/privexa/platform" }}
      />
    </div>
  );
}
