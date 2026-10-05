import { pageMetadata } from "@/lib/metadata";
import { PrivexaSubnav } from "@/components/privexa/Chrome";
import { PxCta, PxHeading, PxSection, StatusBadge } from "@/components/privexa/ui";
import { PxFinalCta } from "@/components/privexa/FinalCta";

export const metadata = pageMetadata({
  title: "Privexa Platform & API — Embedded AI Privacy",
  description:
    "Embed the Privexa privacy boundary inside your platform. A privacy API and service for digital pathology platforms, healthcare software, enterprise AI applications, research platforms and SaaS vendors.",
  path: "/privexa/platform",
  keywords: ["privacy API", "embedded AI privacy", "secure AI gateway API", "OEM privacy layer", "healthcare AI privacy"],
});

const flow = [
  { title: "Your platform", body: "Text, documents, images or slides from your product." },
  { title: "Privexa privacy API / service", body: "Policy-driven detection and protection.", accent: true },
  { title: "Protected representation", body: "Only what the task requires." },
  { title: "AI · analytics · sharing", body: "Your models, partners or approved providers." },
  { title: "Controlled result", body: "Reconstructed for authorised users." },
];

const audiences = [
  "Digital pathology platforms",
  "Healthcare software",
  "Enterprise AI applications",
  "Research platforms",
  "SaaS vendors",
];

const models = [
  { title: "API integration", body: "Call Privexa from your services for protected AI interaction." },
  { title: "Embedded privacy", body: "Make the privacy boundary part of your own product workflow." },
  { title: "OEM / white-label", body: "Offer Privexa capability under your product experience, by agreement." },
  { title: "Private deployment", body: "Run Privexa alongside your platform in your own environment." },
];

export default function PlatformPage() {
  return (
    <div className="bg-white">
      <PrivexaSubnav />
      <section className="pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <StatusBadge status="controlled" />
          <PxHeading
            as="h1"
            className="mt-6"
            eyebrow="Privexa Platform & API"
            title="Make Privexa the privacy layer inside your product."
            body="For software vendors and platforms that need AI capability without inheriting their customers' disclosure risk."
          />
          <div className="mt-10">
            <PxCta href="/privexa/demo?interest=platform">Discuss Platform Integration</PxCta>
          </div>

          <ol className="mt-16 grid gap-2 lg:grid-cols-5" aria-label="Integration architecture">
            {flow.map((f, i) => (
              <li
                key={f.title}
                className={`relative rounded-2xl border p-5 ${f.accent ? "border-[#A50E28]/40 bg-[#A50E28]/[0.04]" : "border-black/10"}`}
              >
                <span className="font-mono text-[11px] text-slate-600">{String(i + 1).padStart(2, "0")}</span>
                <h2 className={`mt-4 text-sm font-semibold ${f.accent ? "text-[#A50E28]" : "text-[#0B0B0C]"}`}>{f.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{f.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PxSection tone="charcoal" labelledBy="who">
        <PxHeading id="who" eyebrow="Who it's for" title="Built for platforms that handle sensitive data." />
        <ul className="mt-10 flex flex-wrap gap-2">
          {audiences.map((a) => (
            <li key={a} className="rounded-full border border-black/15 px-4 py-2 text-sm text-slate-800">{a}</li>
          ))}
        </ul>
      </PxSection>

      <PxSection labelledBy="models">
        <PxHeading id="models" eyebrow="Commercial models" title="Integrate the way your product needs." />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((m) => (
            <li key={m.title} className="rounded-2xl border border-black/10 p-6">
              <h3 className="font-semibold text-[#0B0B0C]">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-slate-600">Integration scope, SLAs and commercial terms are agreed per partner.</p>
      </PxSection>

      <PxFinalCta
        title="Bring the privacy boundary into your platform."
        primary={{ label: "Discuss Platform Integration", href: "/privexa/demo?interest=platform" }}
        secondary={{ label: "Deployment options", href: "/privexa/deployment" }}
      />
    </div>
  );
}
