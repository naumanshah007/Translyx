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
    <footer className="relative border-t border-gray-200 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:border-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <GradientAccent position="top" size="md" />
      <PatternOverlay pattern="dots" opacity={0.03} className="text-primary-500" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Logo href="/" size="lg" />
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
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
                      className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/10 to-cyan-500/10 hover:from-primary-500/20 hover:to-cyan-500/20 flex items-center justify-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all duration-200 hover:scale-110"
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
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li>{siteConfig.company.email}</li>
              <li>{siteConfig.company.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
