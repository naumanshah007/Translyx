import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * CerviGrade design primitives — clinical white / soft-neutral surfaces with a
 * restrained clinical teal accent. Deliberately distinct from Privexa's
 * crimson control-boundary language: siblings, not clones.
 */

export const cg = {
  accent: "#0F766E",
  accentHover: "#0B5E58",
  ink: "#0B1117",
  soft: "#F4F8F7",
} as const;

export function CgStatusBadge({
  kind,
  className,
}: {
  kind: "validation" | "demo" | "adapter";
  className?: string;
}) {
  const meta = {
    validation: { label: "Under clinical validation", cls: "border-amber-600/35 bg-amber-50 text-amber-800" },
    demo: { label: "Demo available", cls: "border-teal-700/30 bg-teal-50 text-teal-800" },
    adapter: { label: "Integration adapters defined · not connected", cls: "border-slate-400/50 bg-white text-slate-700" },
  }[kind];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]",
        meta.cls,
        className
      )}
    >
      <span className="h-1 w-1 rounded-full bg-current" aria-hidden />
      {meta.label}
    </span>
  );
}

export function CgSection({
  id,
  tone = "white",
  labelledBy,
  className,
  children,
}: {
  id?: string;
  tone?: "white" | "soft";
  labelledBy?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative scroll-mt-20 py-20 sm:py-28", tone === "soft" ? "bg-[#F4F8F7]" : "bg-white", className)}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function CgHeading({
  id,
  eyebrow,
  title,
  body,
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0F766E]">{eyebrow}</p>
      )}
      <h2
        id={id}
        className="text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0B1117] sm:text-[2.6rem]"
      >
        {title}
      </h2>
      {body && <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{body}</p>}
    </div>
  );
}

export function CgCta({
  href,
  children,
  variant = "primary",
  external,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  className?: string;
}) {
  const cls = cn(
    "group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]/50 focus-visible:ring-offset-2",
    variant !== "text" && "px-6",
    variant === "primary" && "bg-[#0F766E] text-white hover:bg-[#0B5E58]",
    variant === "secondary" && "border border-[#0B1117]/20 text-[#0B1117] hover:border-[#0B1117]/40 hover:bg-[#F4F8F7]",
    variant === "text" && "text-[#0F766E] hover:text-[#0B1117]",
    className
  );
  const Icon = external ? ArrowUpRight : ArrowRight;
  const inner = (
    <>
      {children}
      <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** "CerviGrade — A Translyx Clinical Technology" lockup. */
export function CerviGradeMark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex flex-wrap items-baseline gap-x-3 gap-y-1", className)}>
      <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#0B1117]">CerviGrade</span>
      <span className="text-[11px] tracking-wide text-slate-600">A Translyx Clinical Technology</span>
    </span>
  );
}
