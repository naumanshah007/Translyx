import Link from "next/link";
import { MapPin, Mail, Shield, Calendar, Microscope } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Provenance() {
  return (
    <section className="bg-[#0F1C3F] py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-400">
              <span className="font-semibold text-white text-xs uppercase tracking-[0.18em]">{siteConfig.companyName}</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-slate-500" />
                Auckland, New Zealand
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-slate-500" />
                Est. December 2025
              </span>
              <span className="flex items-center gap-1.5">
                <Microscope className="h-3.5 w-3.5 text-slate-500" />
                Authorised Aiforia business partner (NZ)
              </span>
              <Link
                href={`mailto:${siteConfig.company.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-slate-500" />
                {siteConfig.company.email}
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 shrink-0">
              <Shield className="h-3.5 w-3.5" />
              <span>Responsible AI · Visible limitations · No implied regulatory endorsement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
