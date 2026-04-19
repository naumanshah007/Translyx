import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductArchitectureProps {
  showLinks?: boolean;
  className?: string;
}

export function ProductArchitecture({ showLinks = true, className }: ProductArchitectureProps) {
  return (
    <section className={`relative bg-[#F7F5F1] py-16 sm:py-20 md:py-24 ${className ?? ""}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
              Product architecture
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F1C3F]">
              One company. Two products. One clinical mission.
            </h2>
          </div>

          {/* Translyx — parent */}
          <div className="relative">
            <div className="rounded-2xl border-2 border-[#0F1C3F]/15 bg-white p-6 sm:p-8 text-center shadow-[0_2px_20px_-4px_rgba(15,28,63,0.08)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400 mb-1">Parent company</p>
              <h3 className="text-2xl font-bold text-[#0F1C3F] font-display">Translyx Limited</h3>
              <p className="mt-2 text-sm text-slate-500">Clinical technology holding entity · Auckland, New Zealand</p>
            </div>

            {/* Connector */}
            <div className="flex justify-center my-0">
              <div className="w-[2px] h-8 bg-[#0F1C3F]/15" />
            </div>

            {/* Products row */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Privexa */}
              <div className="rounded-xl border border-[#22D3EE]/30 bg-white p-5 sm:p-6 shadow-[0_2px_12px_-2px_rgba(34,211,238,0.12)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0891B2] mb-2">Protection layer</p>
                <h4 className="text-lg font-bold text-[#0F1C3F] font-display">Privexa</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Field-level AI data protection for healthcare workflows. Sensitive data never leaves your environment.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Field-level protection", "Local vault", "Cloud Shield"].map((tag) => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded-md bg-[#F7F5F1] text-slate-500 border border-slate-200/80">
                      {tag}
                    </span>
                  ))}
                </div>
                {showLinks && (
                  <Link href="/ai-solutions#privexa" className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#0891B2] hover:text-[#0F1C3F] transition-colors">
                    Explore Privexa <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>

              {/* Privexa Trace */}
              <div className="rounded-xl border border-[#0F1C3F]/20 bg-[#0F1C3F] p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(15,28,63,0.30)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">Flagship product</p>
                <h4 className="text-lg font-bold text-white font-display">Privexa Trace</h4>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Reviewer-gated synthetic control arm workflows with lineage, manual benchmark comparison, and submission-oriented packaging.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Reviewer gate", "Lineage", "Submission package"].map((tag) => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded-md bg-white/8 text-slate-300 border border-white/12">
                      {tag}
                    </span>
                  ))}
                </div>
                {showLinks && (
                  <Link href="/products/privexa-trace" className="mt-4 flex items-center gap-1 text-xs font-semibold text-white hover:text-[#22D3EE] transition-colors">
                    Explore Privexa Trace <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </div>

            {/* Connector to pipeline */}
            <div className="flex justify-center my-0">
              <div className="w-[2px] h-8 bg-[#0F1C3F]/15" />
            </div>

            {/* Clinical Pipeline */}
            <div className="rounded-xl border border-dashed border-slate-300 bg-white/60 p-5 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-1">Broader portfolio</p>
              <h4 className="text-base font-semibold text-[#0F1C3F] font-display">Clinical & Diagnostic Pipeline</h4>
              <p className="mt-1.5 text-xs text-slate-500 max-w-lg mx-auto">
                AMR, sepsis diagnostics, point-of-care testing, endocrinology, cardiac markers, and precision medicine products for New Zealand healthcare.
              </p>
              {showLinks && (
                <Link href="/product-pipeline" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#0F1C3F] transition-colors">
                  View pipeline <ArrowRight className="h-3 w-3" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
