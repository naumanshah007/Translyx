import { pageMetadata } from "@/lib/metadata";
import { modules, statusMeta, trustControls, type CapabilityStatus } from "@/config/privexa";
import { PrivexaSubnav } from "@/components/privexa/Chrome";
import { PxCta, PxHeading, PxSection, StatusBadge } from "@/components/privexa/ui";

export const metadata = pageMetadata({
  title: "Trust & Product Status — Privexa",
  description:
    "What Privexa is designed to do, current product status by capability, privacy architecture, provider handling, human review, WSI validation status and responsible claims.",
  path: "/trust",
});

const statuses = Object.keys(statusMeta) as CapabilityStatus[];

const notClaims = [
  "Perfect privacy or zero leakage under all circumstances",
  "Automatic detection of patient identity within tissue morphology",
  "Compliance with any specific regulation by default — compliance depends on your deployment and policy",
  "Support for every whole-slide image format",
  "Regulatory approval or certification that has not been obtained",
  "Production deployment of every module in every environment",
];

export default function TrustPage() {
  return (
    <div className="bg-white">
      <PrivexaSubnav />
      <section className="pb-16 pt-16 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <PxHeading
            as="h1"
            eyebrow="Trust & product status"
            title="What Privexa does — and how mature each part is."
            body="We'd rather you know exactly where each capability stands. This page carries the nuance so the rest of the site doesn't have to."
          />
        </div>
      </section>

      <PxSection tone="charcoal" labelledBy="designed">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <PxHeading id="designed" eyebrow="What Privexa is designed to do" title="A governed boundary before AI egress." />
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Privexa is designed to support governed AI use: it applies organisation-defined privacy policy to sensitive
            information before it reaches an AI model, preserves enough meaning for the task, restores authorised context
            inside the boundary, and records evidence of what left.
          </p>
        </div>
      </PxSection>

      <PxSection labelledBy="status">
        <PxHeading id="status" eyebrow="Product status" title="Capability status." />
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {statuses.map((s) => (
            <div key={s} className="rounded-2xl border border-black/10 p-5">
              <dt><StatusBadge status={s} /></dt>
              <dd className="mt-3 text-xs leading-relaxed text-slate-600">{statusMeta[s].description}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 overflow-hidden rounded-2xl border border-black/10">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Privexa module status</caption>
            <thead className="bg-black/[0.03] text-xs uppercase tracking-[0.14em] text-slate-600">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">Module / modality</th>
                <th scope="col" className="px-5 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10">
              {modules.map((m) => (
                <tr key={m.id}>
                  <th scope="row" className="px-5 py-4 font-medium text-[#0B0B0C]">{m.name}</th>
                  <td className="px-5 py-4"><StatusBadge status={m.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PxSection>

      <PxSection tone="charcoal" labelledBy="arch">
        <PxHeading id="arch" eyebrow="Privacy architecture" title="Authority you can trace." />
        <p className="mt-5 max-w-2xl font-mono text-xs leading-relaxed text-slate-600">
          durable instructions → versioned resolution → immutable derived protection → audited egress → scoped reconstruction
        </p>
        <ul className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {trustControls.map((t) => (
            <li key={t.title} className="grid gap-1 py-5 sm:grid-cols-[260px_1fr] sm:gap-6">
              <h3 className="text-sm font-semibold text-[#0B0B0C]">{t.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{t.body}</p>
            </li>
          ))}
        </ul>
      </PxSection>

      <PxSection labelledBy="details">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { t: "Provider handling", b: "Approved providers and models are set by the organisation and enforced server-side. Current engineering supports configurable access to OpenAI, Anthropic Claude and Google Gemini models, with private/self-hosted models as a deployment direction. Specific models are approved per organisation, not assumed." },
            { t: "Human review", b: "Image and slide protection include reviewer workflows. Generated outputs that matter — clinical notes, protected slides — are designed for human review before release." },
            { t: "WSI validation status", b: "Whole-slide privacy is a developed capability under extended validation. Evaluations confirm format coverage, throughput and reviewer workflow against your slides." },
            { t: "Deployment approach", b: "Managed, private cloud, on-premises and restricted environments are scoped per customer. Not every mode is qualified at production scale for every module." },
            { t: "Auditability", b: "Each AI egress is recorded against the exact protected representation, model and workflow that was authorised." },
            { t: "Security testing", b: "Security testing is part of Privexa engineering. We discuss testing scope and results directly with prospective customers during evaluation." },
          ].map((x) => (
            <article key={x.t} className="rounded-2xl border border-black/10 p-7">
              <h3 className="font-semibold text-[#0B0B0C]">{x.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{x.b}</p>
            </article>
          ))}
        </div>
      </PxSection>

      <PxSection tone="charcoal" labelledBy="claims">
        <PxHeading id="claims" eyebrow="Responsible claims" title="What we don't claim." />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {notClaims.map((c) => (
            <li key={c} className="rounded-xl border border-black/10 px-5 py-4 text-sm text-slate-700">{c}</li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <PxCta href="/privexa/demo">Request Enterprise Demo</PxCta>
          <PxCta href="/contact" variant="secondary">Talk to Translyx</PxCta>
        </div>
      </PxSection>
    </div>
  );
}
