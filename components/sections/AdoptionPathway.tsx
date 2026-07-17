import { Compass, ClipboardCheck, ShieldCheck, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: Compass,
    title: "Walkthrough",
    body: "See the product in the context of your own workflows, with a Translyx-led session tailored to your organisation.",
  },
  {
    icon: ClipboardCheck,
    title: "Clinical fit assessment",
    body: "Translyx works with your team to assess relevance, workflow fit, and the questions that matter to your clinicians.",
  },
  {
    icon: ShieldCheck,
    title: "Governance & evaluation",
    body: "Regulatory status, data handling, and local requirements are reviewed alongside your governance stakeholders.",
  },
  {
    icon: Rocket,
    title: "Local adoption support",
    body: "Translyx supports implementation, training, and ongoing regional relationship management.",
  },
];

/**
 * Describes how Translyx supports evaluation and adoption of a partner
 * product — process copy only, no product-performance claims.
 */
export function AdoptionPathway({
  eyebrow = "How adoption works",
  title = "A guided path from first conversation to local adoption",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1140px]">
          <SectionHeader align="center" eyebrow={eyebrow} title={title} maxWidth="max-w-2xl" className="mb-12" />
          <Reveal className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block" />
            {steps.map(({ icon: Icon, title: stepTitle, body }, i) => (
              <div key={stepTitle} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_24px_-12px_rgba(15,28,63,0.25)]">
                  <Icon className="h-6 w-6 text-[#0E7490]" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#0F1C3F] text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-[#0F1C3F]">{stepTitle}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
