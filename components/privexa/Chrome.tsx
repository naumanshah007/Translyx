"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { privexaLoginUrl } from "@/config/privexa";

const links = [
  { label: "Overview", href: "/privexa" },
  { label: "Digital pathology / WSI", href: "/privexa/wsi" },
  { label: "Platform & API", href: "/privexa/platform" },
  { label: "Deployment", href: "/privexa/deployment" },
  { label: "Trust & status", href: "/trust" },
];

/** Secondary navigation shared by Privexa pages. */
export function PrivexaSubnav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Privexa" className="border-b border-black/[0.08] bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 [scrollbar-width:none]">
        <span className="shrink-0 py-3.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#0B0B0C]">Privexa</span>
        <ul className="flex shrink-0 items-center gap-5">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block whitespace-nowrap py-3.5 text-[13px] transition-colors",
                    active ? "text-[#A50E28]" : "text-slate-600 hover:text-[#0B0B0C]"
                  )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {privexaLoginUrl && (
          <a
            href={privexaLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto shrink-0 whitespace-nowrap py-3.5 text-[13px] text-slate-600 hover:text-[#0B0B0C]"
          >
            Open Privexa ↗
          </a>
        )}
        <Link
          href="/privexa/demo"
          className=" hidden shrink-0 rounded-full border border-[#A50E28]/40 px-4 py-1.5 text-xs font-semibold text-[#A50E28] transition-colors hover:bg-[#A50E28]/10 sm:inline-flex"
        >
          Request Demo
        </Link>
      </div>
    </nav>
  );
}
