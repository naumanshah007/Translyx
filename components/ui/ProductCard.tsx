import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product, ProductAccent } from "@/config/products";
import { statusLabels, accentBySlug } from "@/config/products";
import { getProductIcon } from "@/lib/productIcons";

const accentMap: Record<ProductAccent, { color: string; soft: string; glow: string; text: string }> = {
  cyan: { color: "#22D3EE", soft: "rgba(34,211,238,0.12)", glow: "rgba(34,211,238,0.40)", text: "text-cyan-600" },
  violet: { color: "#8B5CF6", soft: "rgba(139,92,246,0.12)", glow: "rgba(139,92,246,0.38)", text: "text-violet-600" },
  teal: { color: "#2DD4BF", soft: "rgba(45,212,191,0.12)", glow: "rgba(45,212,191,0.38)", text: "text-teal-600" },
  emerald: { color: "#34D399", soft: "rgba(52,211,153,0.12)", glow: "rgba(52,211,153,0.38)", text: "text-emerald-600" },
  sky: { color: "#38BDF8", soft: "rgba(56,189,248,0.12)", glow: "rgba(56,189,248,0.38)", text: "text-sky-600" },
};

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const a = accentMap[accentBySlug[product.slug] ?? "cyan"];
  const Icon = getProductIcon(product.icon);
  const status = statusLabels[product.status];
  const ctaLabel = `Explore ${product.shortTitle ?? product.title}`;

  const style = { "--accent": a.color, "--glow": a.glow } as React.CSSProperties;

  return (
    <Link
      href={product.href}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6",
        "shadow-[0_2px_16px_-6px_rgba(15,28,63,0.10)] transition-all duration-300",
        "hover:-translate-y-1 hover:border-[color:var(--accent)] hover:shadow-[0_28px_70px_-30px_var(--glow)]",
        className
      )}
      style={style}
    >
      {/* hover corner glow */}
      <span
        className="pointer-events-none absolute -top-px right-0 h-24 w-24 rounded-bl-[3rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at top right, ${a.soft}, transparent 70%)` }}
      />
      <div className="relative flex items-start justify-between">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-inset ring-slate-200/70 transition-transform duration-300 group-hover:scale-105"
          style={{ background: a.soft }}
        >
          <Icon className="h-[22px] w-[22px]" style={{ color: a.color }} aria-hidden="true" />
        </span>
        <span
          className={cn("rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-wide", status.className)}
        >
          {status.text}
        </span>
      </div>

      <p className="relative mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-cyan-700/80">
        {product.badge}
      </p>
      <h3 className="relative mt-1.5 font-display text-xl font-semibold text-[#0F1C3F]">{product.title}</h3>
      <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">{product.description}</p>

      <span className="mt-6 flex items-center">
        <span className={cn("inline-flex items-center gap-1.5 text-sm font-semibold transition-colors", a.text)}>
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </span>
    </Link>
  );
}
