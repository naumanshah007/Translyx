import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { PxHeading, PxSection } from "@/components/privexa/ui";
import { VideoGallery } from "@/components/privexa/VideoGallery";
import { PxFinalCta } from "@/components/privexa/FinalCta";

export const metadata = pageMetadata({
  title: "Resources — Privexa, Digital Pathology & Translyx",
  description:
    "Videos, Privexa overview, architecture, whole-slide privacy, deployment, product status, FAQs and news from Translyx.",
  path: "/resources",
});

const guides = [
  { title: "Privexa overview", body: "The control boundary for the AI era.", href: "/privexa" },
  { title: "Architecture & trust", body: "How privacy authority and audited egress work.", href: "/trust" },
  { title: "Digital pathology / WSI", body: "Privacy controls for whole-slide images.", href: "/privexa/wsi" },
  { title: "Platform & API", body: "Embed Privexa in your product.", href: "/privexa/platform" },
  { title: "Deployment", body: "Hosted, private cloud, on-premises.", href: "/privexa/deployment" },
  { title: "Product status", body: "Capability-by-capability maturity.", href: "/trust#status" },
  { title: "Solutions by industry", body: "Healthcare, finance, government, research.", href: "/solutions" },
  { title: "News & insights", body: "Diagnostics and digital pathology news.", href: "/news" },
];

const faqs = [
  {
    q: "Is Privexa a separate company?",
    a: "No. Privexa is a platform built and offered by Translyx Limited, a New Zealand technology company.",
  },
  {
    q: "Does Privexa replace our AI provider?",
    a: "No. Privexa sits between your organisation and approved AI models. You keep model choice; Privexa keeps the privacy policy consistent.",
  },
  {
    q: "Does Privexa guarantee zero data leakage?",
    a: "No system can honestly promise that. Privexa is designed for minimum disclosure, fails closed when protection can't be established, and records evidence of what was authorised to leave.",
  },
  {
    q: "Is whole-slide image privacy production-ready?",
    a: "It is a developed capability currently under extended validation. We run evaluations on customer slides to confirm fit.",
  },
  {
    q: "Can we run Privexa in our own environment?",
    a: "Private cloud, on-premises and restricted deployments are part of Privexa's direction and are scoped per customer.",
  },
  {
    q: "Is there a free trial?",
    a: "Organisation trial access is available on request. Request it via the demo form and we'll set it up with you.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <section className="pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <PxHeading as="h1" eyebrow="Resources" title="Learn Privexa and Translyx technology." />
        </div>
      </section>

      <PxSection id="videos" labelledBy="videos-h" className="pt-8 sm:pt-12">
        <PxHeading id="videos-h" eyebrow="Videos" title="See Privexa in action." />
        <div className="mt-10">
          <VideoGallery />
        </div>
      </PxSection>

      <PxSection tone="charcoal" labelledBy="guides">
        <PxHeading id="guides" eyebrow="Guides" title="Go deeper." />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((g) => (
            <li key={g.title} className="bg-[#F6F6F7]">
              <Link href={g.href} className="group flex h-full flex-col p-6 transition-colors hover:bg-black/[0.03]">
                <h3 className="font-semibold text-[#0B0B0C]">{g.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{g.body}</p>
                <ArrowRight className="mt-5 h-4 w-4 text-[#A50E28] transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </PxSection>

      <PxSection id="faq" labelledBy="faq-h">
        <PxHeading id="faq-h" eyebrow="FAQs" title="Straight answers." />
        <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-[#0B0B0C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A50E28]">
                {f.q}
                <span className="text-slate-600 transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </PxSection>

      <PxFinalCta />
    </div>
  );
}
