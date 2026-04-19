import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Linkedin, MapPin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1C3F] text-slate-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div className="lg:col-span-1">
            <Logo href="/" size="lg" className="h-auto w-24 brightness-0 invert opacity-90" />
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-[220px]">
              {siteConfig.companyName} — the governed evidence layer for clinical AI.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/company/translyx/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 text-slate-300 hover:bg-white/14 hover:text-white transition-colors"
                aria-label="Translyx on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white mb-5">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products/privexa-trace" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  Privexa Trace
                  <span className="text-[10px] font-semibold bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 px-1.5 py-0.5 rounded uppercase tracking-wide">Available</span>
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions#privexa" className="text-slate-400 hover:text-white transition-colors">Privexa</Link>
              </li>
              <li>
                <Link href="/ai-solutions" className="text-slate-400 hover:text-white transition-colors">AI Solutions</Link>
              </li>
              <li>
                <Link href="/product-pipeline" className="text-slate-400 hover:text-white transition-colors">Clinical Pipeline</Link>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white mb-5">Trust</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Translyx</Link>
              </li>
              <li>
                <Link href="/updates" className="text-slate-400 hover:text-white transition-colors">Updates</Link>
              </li>
              <li>
                <span className="text-slate-500 text-xs">Responsible AI disclosure available on request</span>
              </li>
              <li>
                <span className="text-slate-500 text-xs">No implied regulatory endorsement</span>
              </li>
            </ul>
          </div>

          {/* Reach */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white mb-5">Reach</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-slate-500" />
                <span>Auckland, New Zealand</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <Mail className="h-4 w-4 shrink-0 mt-0.5 text-slate-500" />
                <Link href={`mailto:${siteConfig.company.email}`} className="hover:text-white transition-colors break-all">
                  {siteConfig.company.email}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} {siteConfig.companyName}. All rights reserved.
            {" "}Registered in New Zealand.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link href="/about" className="hover:text-slate-300 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
