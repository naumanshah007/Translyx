import Link from "next/link";
import { Linkedin, MapPin, Mail, ShieldCheck, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/ui/Brand";
import { PRIVEXA_APP_URL } from "@/config/products";

const productLinks = [
  { label: "Aiforia Digital Pathology AI", href: "/products/aiforia" },
  { label: "Privexa AI Wrapper", href: "/products/privexa-ai-wrapper" },
  { label: "Privexa Cloud Shield", href: "/products/privexa-cloud-shield" },
  { label: "Privexa Scribe", href: "/products/privexa-scribe" },
  { label: "Privexa Trace", href: "/products/privexa-trace" },
  { label: "ClinicalTriage", href: "/products/clinical-triage" },
  { label: "Diagnostic Pipeline", href: "/product-pipeline" },
];

const solutionLinks = [
  { label: "Digital Pathology", href: "/digital-pathology" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Clinical Pipeline", href: "/product-pipeline" },
  { label: "Evidence Workflows", href: "/products/privexa-trace" },
  { label: "Privacy & Governance", href: "/ai-solutions#privexa" },
];

const trustItems = [
  "Responsible AI",
  "Visible limitations",
  "No implied regulatory endorsement",
  "Authorised Aiforia business partner — NZ",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-midnight text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <BrandLogo tone="dark" />
            <p className="mt-5 max-w-[260px] text-sm leading-relaxed text-slate-400">
              The trusted New Zealand bridge between global diagnostic innovation, governed clinical AI, and local
              healthcare implementation.
            </p>
            <Link
              href="https://www.linkedin.com/company/translyx/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-slate-300 transition-colors hover:bg-white/[0.12] hover:text-white"
              aria-label="Translyx on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">Products</h3>
            <ul className="space-y-2.5 text-sm">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-slate-400 transition-colors hover:text-cyan-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">Solutions</h3>
            <ul className="space-y-2.5 text-sm">
              {solutionLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-slate-400 transition-colors hover:text-cyan-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust + Reach */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">Trust</h3>
            <ul className="space-y-2.5 text-sm">
              {trustItems.map((t) => (
                <li key={t} className="flex items-start gap-2 text-slate-400">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400/70" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white">Reach</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" />
                <span>Auckland, New Zealand — expanding into Australia &amp; Pacific markets</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" />
                <Link href={`mailto:${siteConfig.company.email}`} className="break-all transition-colors hover:text-cyan-300">
                  {siteConfig.company.email}
                </Link>
              </li>
              <li>
                <a
                  href={PRIVEXA_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-cyan-300"
                >
                  Visit Privexa
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {currentYear} {siteConfig.companyName}. All rights reserved. Registered in New Zealand.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link href="/about" className="transition-colors hover:text-slate-300">About</Link>
            <Link href="/products" className="transition-colors hover:text-slate-300">Products</Link>
            <Link href="/contact" className="transition-colors hover:text-slate-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
