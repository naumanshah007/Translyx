import { pageMetadata } from "@/lib/metadata";
import { PrivexaSubnav } from "@/components/privexa/Chrome";
import { DemoForm } from "@/components/privexa/DemoForm";

export const metadata = pageMetadata({
  title: "Request a Privexa Demo",
  description:
    "See what your AI sees after Privexa. Request a demo for enterprise AI privacy, clinical data, digital pathology / WSI, documents and knowledge, or platform integration.",
  path: "/privexa/demo",
});

export default function DemoPage() {
  return (
    <div className="bg-white">
      <PrivexaSubnav />
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A50E28]">Privexa · A Translyx Platform</p>
            <h1 className="mt-5 text-balance text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0B0B0C] sm:text-[3.2rem]">
              See what your AI sees after Privexa.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              A focused session built around your scenario — not a generic product tour.
            </p>
            <ul className="mt-10 space-y-4 text-sm text-slate-700">
              {[
                "Your use case, mapped to Privexa's privacy boundary",
                "Live original → protected → reconstructed workflow",
                "Deployment, provider and governance discussion",
                "Trial access or WSI evaluation, where appropriate",
              ].map((x, i) => (
                <li key={x} className="flex gap-4">
                  <span className="font-mono text-xs text-[#A50E28]">{String(i + 1).padStart(2, "0")}</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-black/10 bg-[#F6F6F7] p-6 sm:p-10">
            <DemoForm />
          </div>
        </div>
      </section>
    </div>
  );
}
