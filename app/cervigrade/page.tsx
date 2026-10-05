import type { Metadata } from "next";
import {
  AlertTriangle,
  ArrowDown,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Cable,
  FileSearch,
  GitBranch,
  History,
  ListChecks,
  RotateCcw,
  ShieldCheck,
  UserCheck,
  XCircle,
  PauseCircle,
  PenLine,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import {
  cervigradeCategory,
  cervigradeDemoUrl,
  cervigradeEnquiryHref,
  cervigradeSummary,
} from "@/config/cervigrade";
import { CgCta, CgHeading, CgSection, CgStatusBadge, CerviGradeMark } from "@/components/cervigrade/ui";
import { Reveal } from "@/components/ui/Reveal";

const title = "CerviGrade — Governed Cervical Screening Decision Support";
const description =
  "CerviGrade by Translyx turns cervical screening and referral information into provisional, guideline-aligned recommendations with data-quality checks, clinician review and source-to-decision traceability. Under clinical validation; demo available.";

// OG/Twitter image comes from app/cervigrade/opengraph-image.tsx (file convention).
export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "CerviGrade",
    "cervical screening decision support",
    "cervical screening software",
    "governed clinical decision support",
    "cervical referral grading",
    "HPV primary screening pathways",
    "screening data quality",
    "clinical decision traceability",
    "Translyx",
  ],
  alternates: { canonical: "/cervigrade" },
  openGraph: {
    title: `${title} | Translyx`,
    description,
    url: `${siteConfig.url}/cervigrade`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Translyx`,
    description,
  },
};

/* ─────────────────────────────── Content ─────────────────────────────── */

const contextFactors = [
  "Current HPV and cytology results",
  "Previous screening history",
  "Treatment history",
  "Symptoms",
  "Follow-up timing",
  "Applicable guideline pathway",
  "Completeness of the data itself",
];

const workflow = [
  { icon: ClipboardList, title: "Clinical & screening information", body: "Referral, laboratory and history data — uploaded in bulk or entered case by case." },
  { icon: ListChecks, title: "Data sufficiency check", body: "Missing, contradictory or insufficient facts are flagged before any recommendation is relied on." },
  { icon: GitBranch, title: "Guideline pathway", body: "A governed, versioned rules engine walks the structured pathway step by step." },
  { icon: FileSearch, title: "Provisional recommendation", body: "A traceable preliminary recommendation — never a silent final decision." },
  { icon: UserCheck, title: "Clinician review", body: "An authorised clinician examines the recommendation and the reasoning behind it." },
];

const reviewerActions = [
  { icon: CheckCircle2, label: "Accept" },
  { icon: XCircle, label: "Reject" },
  { icon: PenLine, label: "Override" },
  { icon: PauseCircle, label: "Defer" },
  { icon: RotateCcw, label: "Reopen" },
];

const dataFields = [
  "HPV result",
  "Cytology result",
  "Screening history",
  "Previous treatment",
  "Symptoms",
  "Cervix status (e.g. after hysterectomy)",
  "Immune status",
];

const pathwayAreas = [
  { title: "HPV primary screening", body: "Structured pathways derived from published New Zealand HPV primary screening guidance." },
  { title: "Referral pathways", body: "When and how results lead to colposcopy referral, with the reasoning shown." },
  { title: "Follow-up & recall", body: "Routine and early recall intervals resolved from the result and history in front of the engine." },
  { title: "Treatment history & test of cure", body: "Previous treatment and test-of-cure context carried into the pathway, not left to memory." },
  { title: "Surveillance", body: "Surveillance pathways for people whose history places them outside routine recall." },
];

const traceRows = [
  { k: "Source information", v: "Record, file and row the facts came from, with mapping applied" },
  { k: "Governed facts", v: "The normalised facts the engine actually evaluated" },
  { k: "Decision path", v: "Each pathway step taken, in order" },
  { k: "Applicable pathway", v: "The guideline figure or table the path follows" },
  { k: "Recommendation", v: "Provisional output, with ruleset version" },
  { k: "Reviewer action", v: "Who reviewed, what they decided, and when" },
];

const auditItems = [
  "Who reviewed the case",
  "What information was considered",
  "Which pathway and ruleset version applied",
  "The provisional recommendation",
  "The reviewer's final decision and any override reason",
  "Timestamps and an append-only audit trail",
];

const audiences = [
  "Cervical screening programmes",
  "Referral grading teams",
  "Colposcopy services",
  "Clinical quality teams",
  "Screening coordinators",
  "Service planners",
  "Clinical governance teams",
];

/* ─────────────────────────────── Visuals ─────────────────────────────── */

function DecisionPathVisual() {
  const steps = [
    { label: "Screening information", state: "done" },
    { label: "Data sufficiency check", state: "done" },
    { label: "Guideline pathway", state: "done" },
    { label: "Provisional recommendation", state: "active" },
    { label: "Clinician review", state: "pending" },
  ] as const;
  return (
    <div
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(11,17,23,0.04),0_24px_60px_-32px_rgba(15,118,110,0.35)] sm:p-8"
      aria-label="Illustrative CerviGrade decision path"
      role="img"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Decision path · illustrative</p>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">Synthetic case</span>
      </div>
      <ol className="mt-6 space-y-0">
        {steps.map((s, i) => (
          <li key={s.label} className="relative flex gap-4 pb-5 last:pb-0">
            {i < steps.length - 1 && (
              <span className="absolute left-[11px] top-6 h-[calc(100%-12px)] w-px bg-slate-200" aria-hidden />
            )}
            <span
              className={
                s.state === "done"
                  ? "relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0F766E] text-white"
                  : s.state === "active"
                    ? "relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-[#0F766E] bg-white"
                    : "relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-dashed border-slate-300 bg-white"
              }
            >
              {s.state === "done" && <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />}
              {s.state === "active" && <span className="h-2 w-2 rounded-full bg-[#0F766E]" />}
            </span>
            <div className="min-w-0 pt-0.5">
              <p className={s.state === "pending" ? "text-sm font-medium text-slate-500" : "text-sm font-semibold text-[#0B1117]"}>
                {s.label}
              </p>
              {s.state === "active" && (
                <p className="mt-1 text-xs text-slate-600">Provisional — awaiting authorised clinician review</p>
              )}
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5 text-xs">
        <div>
          <p className="text-slate-500">Data sufficiency</p>
          <p className="mt-1 font-semibold text-[#0B1117]">Checked before use</p>
        </div>
        <div>
          <p className="text-slate-500">Ruleset</p>
          <p className="mt-1 font-semibold text-[#0B1117]">Versioned · traceable</p>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────── Page ───────────────────────────────── */

export default function CerviGradePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CerviGrade",
    applicationCategory: "HealthApplication",
    description,
    url: `${siteConfig.url}/cervigrade`,
    publisher: { "@type": "Organization", name: siteConfig.companyName, url: siteConfig.url },
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1 — Hero */}
      <section className="relative overflow-hidden bg-white pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_at_80%_0%,rgba(15,118,110,0.08),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <CerviGradeMark />
            <h1 className="mt-6 text-balance text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] text-[#0B1117] sm:text-[3.4rem] lg:text-[4rem]">
              Governed cervical screening decision support.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{cervigradeSummary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <CgStatusBadge kind="validation" />
              <CgStatusBadge kind="demo" />
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CgCta href={cervigradeDemoUrl} external>
                Explore Demonstration
              </CgCta>
              <CgCta href={cervigradeEnquiryHref} variant="secondary">
                Discuss Clinical Evaluation
              </CgCta>
            </div>
            <p className="mt-6 max-w-xl text-xs leading-relaxed text-slate-500">
              Decision support under clinical validation. Recommendations are provisional and require review by an
              appropriately authorised clinician. Not a certified medical device.
            </p>
          </div>
          <Reveal>
            <DecisionPathVisual />
          </Reveal>
        </div>
      </section>

      {/* 2 — The problem */}
      <CgSection tone="soft" labelledBy="problem">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <CgHeading
            id="problem"
            eyebrow="The challenge"
            title="Small differences in context can change the right pathway."
            body="Cervical screening and referral decisions depend on many interacting facts. CerviGrade helps structure that complexity — it does not replace clinician judgement."
          />
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {contextFactors.map((f) => (
              <li key={f} className="flex items-center gap-3 bg-white px-5 py-4 text-sm font-medium text-[#0B1117] sm:last:col-span-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F766E]" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </CgSection>

      {/* 3 — Governed decision workflow */}
      <CgSection labelledBy="workflow">
        <CgHeading
          id="workflow"
          eyebrow="Governed decision workflow"
          title="From screening information to an auditable decision."
          body="One governed path for every case. The data source can change; the validation, decision engine, review gate and audit trail do not."
          align="center"
        />
        <ol className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-5">
          {workflow.map((w, i) => (
            <li key={w.title} className="relative rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#F4F8F7] text-[#0F766E]">
                  <w.icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Step {i + 1}</span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold leading-snug text-[#0B1117]">{w.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{w.body}</p>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-4 flex max-w-5xl justify-center text-slate-300" aria-hidden>
          <ArrowDown className="h-5 w-5" />
        </div>
        <div className="mx-auto mt-4 max-w-5xl rounded-2xl border border-[#0F766E]/25 bg-[#F4F8F7] p-6 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0F766E]">Reviewer decision</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {reviewerActions.slice(0, 4).map((a) => (
              <li key={a.label} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#0B1117]">
                <a.icon className="h-4 w-4 text-[#0F766E]" aria-hidden />
                {a.label}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-600">→ Recorded as an auditable decision, with the evidence behind it.</p>
        </div>
      </CgSection>

      {/* 4 — Data quality */}
      <CgSection tone="soft" labelledBy="data-quality">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <CgHeading
              id="data-quality"
              eyebrow="Data quality"
              title="A recommendation is only as reliable as the information behind it."
              body="Before a recommendation is relied on, CerviGrade checks that the facts it needs are present, valid and consistent — and says plainly when they are not."
            />
            <ul className="mt-8 space-y-3 text-sm text-slate-700">
              {[
                ["Missing", "a fact the pathway needs has not been supplied"],
                ["Contradictory", "two sources or fields disagree"],
                ["Insufficient", "the information present cannot safely resolve a pathway step"],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-3">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden />
                  <span>
                    <strong className="font-semibold text-[#0B1117]">{k}</strong> — {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Facts checked include</p>
            <ul className="mt-5 divide-y divide-slate-100">
              {dataFields.map((f) => (
                <li key={f} className="flex items-center justify-between gap-4 py-3 text-sm">
                  <span className="font-medium text-[#0B1117]">{f}</span>
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0F766E]" aria-hidden />
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              Bulk uploads also run identifier, value and cross-field consistency checks, with suggested fixes before processing.
            </p>
          </div>
        </div>
      </CgSection>

      {/* 5 — Guideline pathways */}
      <CgSection labelledBy="pathways">
        <CgHeading
          id="pathways"
          eyebrow="Guideline pathways"
          title="Structured pathways, derived from published New Zealand guidance."
          body="CerviGrade implements structured decision pathways based on the published New Zealand HPV primary screening guidance and its pathway figures and tables. It is guideline-aligned decision support — not official Health New Zealand software, and not endorsed by Health New Zealand or the National Cervical Screening Programme."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pathwayAreas.map((p) => (
            <li key={p.title} className="rounded-2xl border border-slate-200 p-5">
              <span className="block h-px w-8 bg-[#0F766E]" aria-hidden />
              <h3 className="mt-5 text-[15px] font-semibold text-[#0B1117]">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{p.body}</p>
            </li>
          ))}
        </ul>
      </CgSection>

      {/* 6 — Decision traceability */}
      <section aria-labelledby="traceability" className="bg-[#0B1117] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300">Decision traceability</p>
            <h2 id="traceability" className="text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.6rem]">
              See how the recommendation was reached.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Every recommendation carries its own reasoning — from the source record to the pathway step to the reviewer&apos;s
              action — so it can be checked, questioned and stood behind.
            </p>
            <p className="mt-8 text-xl font-semibold tracking-tight text-white">
              Same guideline. Same governed engine. Every decision traceable.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Where source data is missing or ambiguous, CerviGrade surfaces that rather than hiding it — the outcome can only be as
              consistent as the information supplied.
            </p>
          </div>
          <dl className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
            {traceRows.map((r, i) => (
              <div key={r.k} className="grid grid-cols-[2rem_1fr] gap-3 px-5 py-4 sm:grid-cols-[2rem_11rem_1fr]">
                <span className="font-mono text-xs text-teal-300">{String(i + 1).padStart(2, "0")}</span>
                <dt className="text-sm font-semibold text-white">{r.k}</dt>
                <dd className="col-start-2 text-sm text-slate-400 sm:col-start-3">{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 7 — Human review */}
      <CgSection labelledBy="review">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <CgHeading
            id="review"
            eyebrow="Human review"
            title="An authorised clinician stays in control."
            body="CerviGrade provides provisional decision support. Final clinical action remains subject to review by an appropriately authorised clinician — human accountability is part of the product, not a caveat."
          />
          <div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {reviewerActions.map((a) => (
                <li key={a.label} className="flex items-center gap-2.5 rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-semibold text-[#0B1117]">
                  <a.icon className="h-4 w-4 text-[#0F766E]" aria-hidden />
                  {a.label}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Reviewer actions are recorded with the reviewer&apos;s role and reasoning. Demonstration identities are clearly separated
              from real clinical approval identities and cannot satisfy real approval gates.
            </p>
          </div>
        </div>
      </CgSection>

      {/* 8 — Equity analytics */}
      <CgSection tone="soft" labelledBy="equity">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <CgHeading
            id="equity"
            eyebrow="Equity analytics"
            title="Make equity patterns visible."
            body="Pathway outcomes can be disaggregated by ethnicity using New Zealand prioritised-ethnicity conventions, so differences in outcomes or follow-up are visible for equity review and service improvement — rather than buried in an average."
          />
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-5 w-5 text-[#0F766E]" aria-hidden />
              <p className="text-sm font-semibold text-[#0B1117]">What it supports</p>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>Visibility of pathway outcomes across population groups</li>
              <li>Evidence for equity review and service planning</li>
              <li>Questions worth asking — not conclusions drawn for you</li>
            </ul>
            <p className="mt-6 border-t border-slate-100 pt-5 text-xs leading-relaxed text-slate-500">
              CerviGrade supports visibility and analysis. It does not by itself eliminate inequity or guarantee equitable outcomes.
            </p>
          </div>
        </div>
      </CgSection>

      {/* 9 — Governance & audit */}
      <CgSection labelledBy="governance">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <CgHeading
            id="governance"
            eyebrow="Governance & audit"
            title="Decision evidence that a quality team can rely on."
            body="Review and decision evidence is kept alongside every case, so governance questions can be answered from the record rather than reconstructed from memory."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {auditItems.map((a) => (
              <li key={a} className="flex gap-3 rounded-xl border border-slate-200 p-4 text-sm text-[#0B1117]">
                <History className="mt-0.5 h-4 w-4 shrink-0 text-[#0F766E]" aria-hidden />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </CgSection>

      {/* 10 — Integration */}
      <CgSection tone="soft" labelledBy="integration">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <CgHeading
              id="integration"
              eyebrow="Integration"
              title="Integration-ready architecture. Not connected to production systems."
              body="Today, data enters by file upload (CSV, Excel or JSON) or manual entry. Adapter patterns for HL7 v2, FHIR R4 and practice-management systems are defined server-side and mapped to one governed data contract."
            />
            <div className="mt-6">
              <CgStatusBadge kind="adapter" />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Cable className="h-5 w-5 text-[#0F766E]" aria-hidden />
              <p className="text-sm font-semibold text-[#0B1117]">Integration status</p>
            </div>
            <dl className="mt-5 divide-y divide-slate-100 text-sm">
              {[
                ["File upload & manual entry", "In demonstration"],
                ["HL7 v2 adapter", "Defined · not connected"],
                ["FHIR R4 adapter", "Defined · not connected"],
                ["PMS adapter", "Defined · not connected"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-4 py-3">
                  <dt className="font-medium text-[#0B1117]">{k}</dt>
                  <dd className="text-right text-slate-600">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              CerviGrade is not integrated with Health New Zealand systems. Any production connection would be activated only through
              governed approval with the organisation concerned.
            </p>
          </div>
        </div>
      </CgSection>

      {/* 11 — Clinical validation status */}
      <CgSection labelledBy="status">
        <div className="rounded-3xl border-2 border-amber-600/25 bg-amber-50/50 p-8 sm:p-12">
          <div className="flex flex-wrap gap-2">
            <CgStatusBadge kind="validation" />
            <CgStatusBadge kind="demo" />
          </div>
          <h2 id="status" className="mt-6 text-balance text-[1.9rem] font-semibold leading-tight tracking-[-0.03em] text-[#0B1117] sm:text-[2.4rem]">
            CerviGrade is undergoing clinical evaluation and validation.
          </h2>
          <div className="mt-6 grid gap-6 text-base leading-relaxed text-slate-700 md:grid-cols-2">
            <p>
              The current environment is intended for evaluation and demonstration. Recommendations are provisional and require
              appropriately authorised clinical review. The system is not presented as an autonomous clinical decision-maker.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Demonstration data is synthetic — no real patient data",
                "Organisational installations run within the organisation's own environment",
                "Outputs are provisional",
                "No production clinical actions",
                "Not a certified medical device",
                "Guideline-aligned — not endorsed by Health NZ or the NCSP",
              ].map((x) => (
                <li key={x} className="flex gap-2.5">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CgSection>

      {/* 12 — Who it is for */}
      <CgSection tone="soft" labelledBy="audience">
        <CgHeading
          id="audience"
          eyebrow="Who it is for"
          title="Built for the teams accountable for screening decisions."
        />
        <ul className="mt-10 flex flex-wrap gap-3">
          {audiences.map((a) => (
            <li key={a} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#0B1117]">
              {a}
            </li>
          ))}
        </ul>
      </CgSection>

      {/* 13 — Final CTA */}
      <section aria-labelledby="final" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <CerviGradeMark className="justify-center" />
          <h2 id="final" className="mt-6 text-balance text-[2.2rem] font-semibold leading-tight tracking-[-0.03em] text-[#0B1117] sm:text-[3rem]">
            Explore the CerviGrade workflow.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Review the governed screening pathway, validation workflow and clinician-review experience using demonstration data.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <CgCta href={cervigradeDemoUrl} external>
              Open Demonstration
            </CgCta>
            <CgCta href={cervigradeEnquiryHref} variant="secondary">
              Discuss Clinical Evaluation
            </CgCta>
          </div>
          <p className="mt-8 text-xs text-slate-500">{cervigradeCategory} · A Translyx Clinical Technology</p>
        </div>
      </section>
    </div>
  );
}
