import Link from "next/link";
import { Linkedin, MapPin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { privexaLoginUrl } from "@/config/privexa";
import { BrandLogo } from "@/components/ui/Brand";

const columns = [
  {
    title: "Privexa",
    links: [
      { label: "Overview", href: "/privexa" },
      { label: "Digital pathology / WSI", href: "/privexa/wsi" },
      { label: "Platform & API", href: "/privexa/platform" },
      { label: "Deployment", href: "/privexa/deployment" },
      { label: "Trust & product status", href: "/trust" },
      { label: "Request Demo", href: "/privexa/demo" },
    ],
  },
  {
    title: "Clinical technology",
    links: [
      { label: "CerviGrade", href: "/cervigrade" },
      { label: "Digital pathology", href: "/digital-pathology" },
      { label: "Aiforia", href: "/products/aiforia" },
      { label: "Algoscope", href: "/products/algoscope" },
      { label: "Diagnostic innovation", href: "/pipeline" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Healthcare & pathology", href: "/solutions#healthcare" },
      { label: "Financial services", href: "/solutions#financial-services" },
      { label: "Government", href: "/solutions#government" },
      { label: "Research", href: "/solutions#research" },
      { label: "Enterprise AI", href: "/solutions#enterprise" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Partners", href: "/partners" },
      { label: "Resources", href: "/resources" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#070B10] text-slate-400">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <BrandLogo tone="dark" markClassName="h-11" />
            <p className="mt-5 max-w-[300px] text-sm leading-relaxed">
              Technology for trusted AI, diagnostics and clinical transformation. Founded in Auckland, New Zealand.
            </p>
            <p className="mt-6 text-sm text-slate-300">
              <span className="font-semibold uppercase tracking-[0.24em] text-white">Privexa</span>
              <span className="ml-2 text-xs text-slate-400">A Translyx Platform</span>
            </p>
            <p className="mt-2 text-sm text-slate-300">
              <span className="font-semibold uppercase tracking-[0.24em] text-white">CerviGrade</span>
              <span className="ml-2 text-xs text-slate-400">A Translyx Clinical Technology</span>
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
                {siteConfig.company.location}
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
                <a href={`mailto:${siteConfig.company.email}`} className="break-all hover:text-cyan-200">
                  {siteConfig.company.email}
                </a>
              </li>
            </ul>
            <a
              href="https://www.linkedin.com/company/translyx/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06] text-slate-300 transition-colors hover:bg-white/[0.12] hover:text-white"
              aria-label="Translyx on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="lg:col-span-2">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">{col.title}</h2>
              <ul className="space-y-2.5 text-sm">
                {col.title === "Privexa" && privexaLoginUrl && (
                  <li>
                    <a href={privexaLoginUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan-200">
                      Open Privexa ↗
                    </a>
                  </li>
                )}
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-cyan-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.companyName}. All rights reserved. Registered in New Zealand. Privexa is a Translyx
            platform.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-cyan-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan-200">Website Terms</Link>
          </div>
        </div>
        <div className="mt-4 text-xs">
          <p className="text-slate-400">
            Aiforia and Algoscope are third-party products represented by Translyx. Other trademarks belong to their owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
