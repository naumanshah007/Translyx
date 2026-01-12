"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Navigation } from "./Navigation";
import { navigation, headerCTA } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="w-full">
        {/* Desktop Header - Same Row, Separated Sections */}
        <div className="hidden lg:flex items-center w-full">
          {/* Logo Section - Fixed Width Left */}
          <div className="w-80 xl:w-96 h-32 xl:h-40 flex items-center justify-start pl-6 xl:pl-8 border-r border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
            <Logo href="/" size="lg" />
          </div>

          {/* Navigation Section - Flex Right */}
          <div className="flex-1 flex items-center justify-between h-32 xl:h-40 px-6 xl:px-8">
            <Navigation />
            <div className="flex items-center gap-4">
            <Button asChild variant="gradient" size="sm" className="shadow-md">
              <Link href={headerCTA.href}>{headerCTA.label}</Link>
            </Button>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6">
            {/* Mobile Logo */}
            <div className="flex items-center">
              <Logo href="/" size="md" />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
              <div className="space-y-1 px-4 pb-4 pt-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                      "text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button asChild variant="gradient" className="w-full shadow-md">
                    <Link href={headerCTA.href} onClick={() => setMobileMenuOpen(false)}>
                      {headerCTA.label}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
