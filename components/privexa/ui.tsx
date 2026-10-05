import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { statusMeta, type CapabilityStatus } from "@/config/privexa";
import { cn } from "@/lib/utils";

/** Privexa design primitives — white base, deep red used sparingly. */

const statusTone: Record<CapabilityStatus, string> = {
  available: "border-emerald-600/30 text-emerald-700",
  pilot: "border-sky-600/30 text-sky-700",
  controlled: "border-[#A50E28]/30 text-[#A50E28]",
  validation: "border-amber-600/35 text-amber-700",
  research: "border-black/20 text-slate-700",
};

const statusToneLight: Record<CapabilityStatus, string> = {
  available: "border-emerald-600/25 text-emerald-700",
  pilot: "border-sky-600/25 text-sky-700",
  controlled: "border-slate-400/50 text-slate-700",
  validation: "border-amber-600/30 text-amber-700",
  research: "border-slate-400/40 text-slate-600",
};

export function StatusBadge({
  status,
  tone = "light",
  className,
}: {
  status: CapabilityStatus;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      title={statusMeta[status].description}
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]",
        tone === "dark" ? statusTone[status] : statusToneLight[status],
        className
      )}
    >
      <span className="h-1 w-1 rounded-full bg-current" aria-hidden />
      {statusMeta[status].label}
    </span>
  );
}

export function PxSection({
  id,
  tone = "dark",
  className,
  children,
  labelledBy,
}: {
  id?: string;
  tone?: "dark" | "charcoal" | "light";
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative scroll-mt-20 py-20 sm:py-28",
        tone === "dark" && "bg-white text-[#0B0B0C]",
        tone === "charcoal" && "bg-[#F6F6F7] text-[#0B0B0C]",
        tone === "light" && "bg-[#F4F7FA] text-[#0B1117]",
        className
      )}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function PxHeading({
  eyebrow,
  title,
  body,
  id,
  tone = "dark",
  align = "left",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  id?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-[11px] font-semibold uppercase tracking-[0.22em]",
            tone === "dark" ? "text-[#A50E28]" : "text-[#A50E28]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={cn(
          "text-balance font-body font-semibold tracking-[-0.03em]",
          Tag === "h1" ? "text-[2.5rem] leading-[1.04] sm:text-[3.6rem] lg:text-[4.4rem]" : "text-[2rem] leading-[1.08] sm:text-[2.75rem]",
          tone === "dark" ? "text-[#0B0B0C]" : "text-[#0B1117]"
        )}
      >
        {title}
      </Tag>
      {body && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-slate-600" : "text-slate-600"
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}

type CtaVariant = "primary" | "secondary" | "text" | "secondary-light" | "primary-light";

const ctaStyles: Record<CtaVariant, string> = {
  primary:
    "bg-[#A50E28] text-white hover:bg-[#860B20] focus-visible:ring-[#A50E28]/60 focus-visible:ring-offset-white",
  "primary-light":
    "bg-[#0B1117] text-white hover:bg-[#1A2430] focus-visible:ring-[#A50E28]/50 focus-visible:ring-offset-white",
  secondary:
    "border border-black/20 text-[#0B0B0C] hover:border-black/40 hover:bg-black/[0.06] focus-visible:ring-[#A50E28]/60 focus-visible:ring-offset-white",
  "secondary-light":
    "border border-[#0B1117]/20 text-[#0B1117] hover:border-[#0B1117]/40 hover:bg-white focus-visible:ring-[#A50E28]/50 focus-visible:ring-offset-white",
  text: "px-0 text-[#A50E28] hover:text-[#0B0B0C]",
};

export function PxCta({
  href,
  children,
  variant = "primary",
  external,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: CtaVariant;
  external?: boolean;
  className?: string;
}) {
  const cls = cn(
    "group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variant !== "text" && "px-6",
    ctaStyles[variant],
    className
  );
  const Icon = external ? ArrowUpRight : ArrowRight;
  const inner = (
    <>
      {children}
      <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
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

/** "Privexa — A Translyx Platform" lockup. */
export function PrivexaMark({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span className={cn("inline-flex flex-wrap items-baseline gap-x-3 gap-y-1", className)}>
      <span
        className={cn(
          "text-sm font-semibold uppercase tracking-[0.32em]",
          tone === "dark" ? "text-[#0B0B0C]" : "text-[#0B1117]"
        )}
      >
        Privexa
      </span>
      <span className={cn("text-[11px] tracking-wide", tone === "dark" ? "text-slate-600" : "text-slate-600")}>
        A Translyx Platform
      </span>
    </span>
  );
}
