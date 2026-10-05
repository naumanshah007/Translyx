import { pageMetadata } from "@/lib/metadata";
import { deploymentModels } from "@/config/privexa";
import { PrivexaSubnav } from "@/components/privexa/Chrome";
import { PxHeading, PxSection } from "@/components/privexa/ui";
import { PxFinalCta } from "@/components/privexa/FinalCta";

export const metadata = pageMetadata({
  title: "Privexa Deployment — Hosted, Private Cloud and On-Premises",
  description:
    "Deploy Privexa where your policy requires: managed, private cloud, on-premises or restricted environments, with customer-specific provider and policy configuration.",
  path: "/privexa/deployment",
  keywords: ["private AI deployment", "on-premises AI privacy", "sovereign AI", "private AI workflows"],
});

const components = [
  "Application backend",
  "Database",
  "Redis",
  "Object storage",
  "Privacy services",
  "Customer-specific provider & policy configuration",
];

export default function DeploymentPage() {
  return (
    <div className="bg-white">
      <PrivexaSubnav />
      <section className="pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <PxHeading
            as="h1"
            eyebrow="Privexa deployment"
            title="Deploy where your policy requires."
            body="Data residency, sovereignty and infrastructure policy differ by organisation. Privexa is designed to run where your requirements say it must."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deploymentModels.map((d) => (
              <li key={d.title} className="rounded-2xl border border-black/10 p-6">
                <h2 className="font-semibold text-[#0B0B0C]">{d.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PxSection tone="charcoal" labelledBy="arch">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <PxHeading
            id="arch"
            eyebrow="Architecture direction"
            title="Containerised, configurable, customer-scoped."
            body="Privexa's deployment direction is a containerised stack configured per customer — so the privacy boundary, model approvals and policy stay under the organisation's control."
          />
          <ul className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-black/10 bg-black/10">
            {components.map((c) => (
              <li key={c} className="flex min-h-[84px] items-center bg-[#F6F6F7] p-5 text-sm text-slate-800">{c}</li>
            ))}
          </ul>
        </div>
      </PxSection>

      <PxSection labelledBy="note">
        <PxHeading id="note" title="Scoped honestly." />
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
          Not every deployment mode has been qualified at production scale for every module. We scope each deployment with
          you — environment, modules, providers, data volumes and validation — before commitment.
        </p>
      </PxSection>

      <PxFinalCta
        title="Plan a deployment around your policy."
        primary={{ label: "Request Enterprise Demo", href: "/privexa/demo" }}
        secondary={{ label: "Trust & product status", href: "/trust" }}
      />
    </div>
  );
}
