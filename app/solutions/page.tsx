import { pageMetadata } from "@/lib/metadata";
import { industries } from "@/config/privexa";
import { PxCta, PxHeading, PxSection } from "@/components/privexa/ui";
import { PxFinalCta } from "@/components/privexa/FinalCta";

export const metadata = pageMetadata({
  title: "Solutions by Industry — Privexa & Translyx",
  description:
    "Governed, privacy-preserving AI for healthcare and pathology, financial services, government, research and life sciences, and organisation-wide enterprise AI.",
  path: "/solutions",
  keywords: ["healthcare AI privacy", "financial services AI governance", "public sector AI", "enterprise AI control"],
});

const detail: Record<string, { problems: string[]; fit: string; cta: { label: string; href: string } }> = {
  healthcare: {
    problems: ["Clinical notes and reports in AI workflows", "Medical images and pathology slides", "Transcribed consultations"],
    fit: "Privexa protects text, documents, images and — under validation — whole-slide images, alongside Translyx's clinical and digital pathology work.",
    cta: { label: "Discuss a WSI Evaluation", href: "/privexa/demo?interest=wsi" },
  },
  "financial-services": {
    problems: ["Customer and account information", "Transaction data and case files", "Regulated AI use and audit"],
    fit: "Semantic placeholders keep roles and relationships intact, so analysts get useful AI output without disclosing identities or account details.",
    cta: { label: "Request Enterprise Demo", href: "/privexa/demo?interest=enterprise" },
  },
  government: {
    problems: ["Sensitive organisational information", "Governed AI access for staff", "Data residency requirements"],
    fit: "Organisation-owned policy, server-enforced model approval and private deployment options support governed adoption.",
    cta: { label: "Request Enterprise Demo", href: "/privexa/demo?interest=enterprise" },
  },
  research: {
    problems: ["Research documents and datasets", "Clinical research workflows", "Sharing with collaborators"],
    fit: "Protected derivatives and audited egress let research teams use AI and share data with clear evidence of what left.",
    cta: { label: "Request Enterprise Demo", href: "/privexa/demo?interest=documents" },
  },
  enterprise: {
    problems: ["Shadow AI usage", "Inconsistent provider policies", "No record of what was disclosed"],
    fit: "One governed boundary for organisation-wide AI — Secure Chat, Documents and API — with model choice kept separate from privacy policy.",
    cta: { label: "Request Trial Access", href: "/privexa/demo?interest=trial" },
  },
};

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      <section className="pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <PxHeading
            as="h1"
            eyebrow="Solutions"
            title="Navigate by industry and problem."
            body="Where Privexa and Translyx technology fit. These are target environments — not a list of existing customers."
          />
        </div>
      </section>
      {industries.map((ind, i) => {
        const d = detail[ind.id];
        return (
          <PxSection key={ind.id} id={ind.id} tone={i % 2 ? "dark" : "charcoal"} labelledBy={`${ind.id}-h`}>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <PxHeading id={`${ind.id}-h`} title={ind.title} body={ind.body} />
                <div className="mt-8">
                  <PxCta href={d.cta.href}>{d.cta.label}</PxCta>
                </div>
              </div>
              <div>
                <ul className="space-y-2">
                  {d.problems.map((p) => (
                    <li key={p} className="rounded-xl border border-black/10 px-5 py-4 text-sm text-slate-800">{p}</li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-slate-600">{d.fit}</p>
              </div>
            </div>
          </PxSection>
        );
      })}
      <PxFinalCta />
    </div>
  );
}
