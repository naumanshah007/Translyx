import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ProductArchitectureProps {
  showLinks?: boolean;
  className?: string;
}

export function ProductArchitecture({ showLinks = true, className }: ProductArchitectureProps) {
  return (
    <section className={`relative bg-[#F7F5F1] py-16 sm:py-20 md:py-24 ${className ?? ""}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
              Product ecosystem
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F1C3F]">
              Diagnostics, digital pathology AI, and governed software — connected for clinical impact
            </h2>
            <p className="mt-3 text-base text-slate-500 max-w-2xl mx-auto">
              Translyx brings clinical technology into healthcare settings. Privexa builds the privacy-first software products that power those workflows.
            </p>
          </div>

          {/* Translyx — clinical technology layer */}
          <div className="relative">
            <div className="rounded-2xl border-2 border-[#0F1C3F]/15 bg-white p-6 sm:p-8 text-center shadow-[0_2px_20px_-4px_rgba(15,28,63,0.08)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400 mb-1">Clinical technology company</p>
              <h3 className="text-2xl font-bold text-[#0F1C3F] font-display">Translyx Limited</h3>
              <p className="mt-2 text-sm text-slate-500">Clinical technology, diagnostics, and healthcare adoption · Auckland, New Zealand</p>
            </div>

            {/* Connector */}
            <div className="flex justify-center my-0">
              <div className="w-[2px] h-8 bg-[#0F1C3F]/15" />
            </div>

            {/* Three-column: Aiforia | Privexa products | Pipeline */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
              {/* Aiforia — partner solution */}
              <div className="rounded-xl border border-purple-200/60 bg-white p-5 sm:p-6 shadow-[0_2px_12px_-2px_rgba(147,51,234,0.08)]">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-600">Authorised partner</p>
                </div>
                <h4 className="text-lg font-bold text-[#0F1C3F] font-display">Aiforia Digital Pathology AI</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  AI-assisted digital pathology for clinical, preclinical, and research workflows.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Clinical Suites", "Create Platform", "NZ territory"].map((tag) => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded-md bg-purple-50 text-purple-600 border border-purple-100">
                      {tag}
                    </span>
                  ))}
                </div>
                {showLinks && (
                  <Link href="/products/aiforia" className="mt-4 flex items-center gap-1 text-xs font-semibold text-purple-600 hover:text-[#0F1C3F] transition-colors">
                    Explore Aiforia <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>

              {/* Privexa — software build layer */}
              <div className="rounded-xl border border-[#22D3EE]/30 bg-white p-5 sm:p-6 shadow-[0_2px_12px_-2px_rgba(34,211,238,0.12)]">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0891B2]">Built by Privexa</p>
                </div>
                <h4 className="text-lg font-bold text-[#0F1C3F] font-display">Privexa-Built AI Products</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Privacy-first AI software for healthcare workflows — clinically positioned through Translyx.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["AI Wrapper", "Cloud Shield", "Scribe", "Trace"].map((tag) => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded-md bg-[#F7F5F1] text-slate-500 border border-slate-200/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  {showLinks && (
                    <Link href="/products" className="flex items-center gap-1 text-xs font-semibold text-[#0891B2] hover:text-[#0F1C3F] transition-colors">
                      View products <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                  <a
                    href="https://www.privexa.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    Visit Privexa <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Diagnostic Pipeline */}
              <div className="rounded-xl border border-dashed border-slate-300 bg-white/60 p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Diagnostic portfolio</p>
                </div>
                <h4 className="text-lg font-bold text-[#0F1C3F] font-display">Clinical & Diagnostic Pipeline</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  AMR, sepsis, POCT, oncology, endocrine, cardiac, and precision medicine for New Zealand.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Sepsis", "AMR", "POCT", "Oncology"].map((tag) => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded-md bg-[#F7F5F1] text-slate-500 border border-slate-200/80">
                      {tag}
                    </span>
                  ))}
                </div>
                {showLinks && (
                  <Link href="/product-pipeline" className="mt-4 flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#0F1C3F] transition-colors">
                    View pipeline <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </div>

            {/* Relationship note */}
            <div className="mt-6 rounded-xl border border-slate-200/80 bg-white p-4 text-center">
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-[#0F1C3F]">Translyx</span> focuses on clinical positioning, diagnostic adoption, and local partnerships.{" "}
                <span className="font-semibold text-[#0891B2]">Privexa</span> builds the protected AI software layer.{" "}
                Together, they connect diagnostics, digital pathology AI, and governed software for regulated clinical environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
