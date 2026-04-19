import Link from "next/link";
import { ArrowRight, GitBranch, Lock, Microscope, Shield, Workflow } from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionDivider } from "@/components/ui/DecorativeElements";

const products = [
  {
    title: "Privexa Trace",
    href: "/products/privexa-trace",
    label: "Flagship workflow product",
    description:
      "Reviewer-gated synthetic control arm workflows with manual benchmark-arm comparison, lineage, visible limitations, and submission-oriented packaging.",
    icon: GitBranch,
  },
  {
    title: "Privexa",
    href: "/ai-solutions",
    label: "Protected AI layer",
    description:
      "Protected AI privacy workflows that keep sensitive health data inside the right boundary before AI systems are used.",
    icon: Lock,
  },
  {
    title: "Diagnostic Product Pipeline",
    href: "/product-pipeline",
    label: "Clinical portfolio",
    description:
      "Translyx diagnostic and clinical product pipeline spanning biomarker, sepsis, POCT, and related healthcare technology areas.",
    icon: Microscope,
  },
];

export default function ProductsPage() {
  return (
    <>
      <Hero
        subheadline="Translyx Products"
        headline="Products that make clinical technology adoption more credible, structured, and usable"
        description="Translyx presents a product portfolio that spans protected AI workflows, reviewer-gated synthetic control evidence operations, and broader clinical technology introduction."
        badge={{ text: "Product Portfolio", icon: <Workflow className="w-4 h-4" /> }}
        primaryCTA={{ label: "Explore Privexa Trace", href: "/products/privexa-trace" }}
        secondaryCTA={{ label: "See AI Solutions", href: "/ai-solutions" }}
        decorativeShapes
        className="py-12 sm:py-14 md:py-16 lg:py-20"
      />

      <SectionDivider variant="gradient" />

      <section className="relative py-16 sm:py-20 md:py-24 bg-white/80 dark:bg-slate-950/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
                Product Hierarchy
              </p>
              <h1 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
                Translyx is the company and product sponsor. Privexa and Privexa Trace solve different parts of the operating model.
              </h1>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
                The portfolio is designed to keep the relationship legible: Translyx sponsors the platform direction, Privexa protects AI data flows, and Privexa Trace structures reviewer-gated evidence workflows.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {products.map(({ title, href, label, description, icon: Icon }) => (
                <Card key={title} variant="gradient-border" cornerAccent className="flex h-full flex-col p-5 sm:p-6">
                  <CardHeader className="p-0">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15">
                      <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
                      {label}
                    </p>
                    <CardTitle className="text-2xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col p-0 pt-4">
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                      {description}
                    </p>
                    <div className="mt-6">
                      <Button asChild variant="outline" size="lg" className="w-full">
                        <Link href={href} className="flex items-center justify-center gap-2">
                          View Product
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-50/60 via-white to-cyan-50/50 dark:from-primary-950/20 dark:via-slate-950 dark:to-cyan-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Card variant="gradient-border" className="p-5 sm:p-7 lg:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
                    Why Trace leads the public story
                  </p>
                  <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl">
                    Privexa Trace is the clearest expression of governed AI and evidence workflow discipline on the public site.
                  </h2>
                  <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
                    It brings together reviewer sign-off before SCA generation, manual treatment and manual control benchmark arms, synthetic workflow outputs, visible limitations, and submission-oriented output. That combination makes it the strongest flagship product narrative for Translyx.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-700 dark:bg-slate-950/40">
                    <Shield className="mb-3 h-6 w-6 text-primary-600 dark:text-primary-400" />
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Governance-first</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Human review remains part of the operating model.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-700 dark:bg-slate-950/40">
                    <GitBranch className="mb-3 h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Traceable outputs</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Lineage and package context stay visible through the workflow.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Start with the product that best fits your workflow"
        description="If your team is evaluating reviewer-gated synthetic control workflows, begin with Privexa Trace. If your primary need is protected AI privacy, start with Privexa."
        primaryCTA={{ label: "Explore Privexa Trace", href: "/products/privexa-trace" }}
        secondaryCTA={{ label: "See AI Solutions", href: "/ai-solutions" }}
      />
    </>
  );
}
