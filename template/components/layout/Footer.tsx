import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { socialLinks } from "@/config/social";
import { Logo } from "@/components/ui/Logo";
import * as LucideIcons from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Logo href="/" size="sm" />
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
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
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={link.name}
                    >
                      <IconComponent className="h-5 w-5" />
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
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
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
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>{siteConfig.company.email}</li>
              <li>{siteConfig.company.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

