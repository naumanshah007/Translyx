import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { socialLinks } from "@/config/social";
import { Logo } from "@/components/ui/Logo";
import { GradientAccent, PatternOverlay } from "@/components/ui/DecorativeElements";
import * as LucideIcons from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200/40 bg-slate-950 text-slate-200 overflow-hidden">
      <GradientAccent position="top" size="md" />
      <PatternOverlay pattern="topo" opacity={0.06} className="text-white/20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Logo
              href="/"
              size="lg"
              className="rounded-2xl bg-white/10 p-2 shadow-[0_10px_25px_rgba(15,23,42,0.35)]"
            />
            <p className="mt-4 text-sm text-slate-300">
              {siteConfig.description}
            </p>
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
                      className="relative w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 flex items-center justify-center text-slate-200 hover:text-white transition-all duration-200 hover:scale-110 shadow-[0_8px_20px_rgba(15,23,42,0.4)]"
                      aria-label={link.name}
                    >
                      <IconComponent className="h-5 w-5 relative z-10" />
                    </Link>
                  );
                })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>{siteConfig.company.email}</li>
              <li>{siteConfig.company.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
