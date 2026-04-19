import Link from "next/link";
import * as LucideIcons from "lucide-react";

import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/social";
import { Logo } from "@/components/ui/Logo";
import { GradientAccent, PatternOverlay } from "@/components/ui/DecorativeElements";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/40 bg-slate-950 text-slate-200">
      <GradientAccent position="top" size="md" />
      <PatternOverlay pattern="topo" opacity={0.06} className="text-white/20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-1">
            <Logo
              href="/"
              size="lg"
              className="rounded-2xl bg-white/10 p-2 shadow-[0_10px_25px_rgba(15,23,42,0.35)]"
            />
            <p className="mt-4 text-sm text-slate-300">{siteConfig.description}</p>
            <div className="mt-6 flex space-x-4">
              {socialLinks
                .filter((link) => link.href)
                .map((link) => {
                  const IconComponent = (LucideIcons as any)[link.icon] as React.ComponentType<{ className?: string }>;
                  if (!IconComponent) return null;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-slate-200 shadow-[0_8px_20px_rgba(15,23,42,0.4)] transition-all duration-200 hover:scale-110 hover:bg-white/15 hover:text-white"
                      aria-label={link.name}
                    >
                      <IconComponent className="relative z-10 h-5 w-5" />
                    </Link>
                  );
                })}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-sm text-slate-300 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-slate-300 transition-colors hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-300 transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-sm text-slate-300 transition-colors hover:text-white">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white">Products</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/products/privexa-trace"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Privexa Trace
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-solutions"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/product-pipeline"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Product Pipeline
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>{siteConfig.company.email}</li>
              <li>{siteConfig.company.location}</li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/translyx/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block min-h-[44px] py-2 -my-2 transition-colors hover:text-white"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-400">
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
