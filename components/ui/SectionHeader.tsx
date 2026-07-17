import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
  maxWidth?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  titleClassName,
  maxWidth = "max-w-2xl",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center mx-auto" : "text-left",
        align === "center" && maxWidth,
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2.5 mb-5",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.24em]",
              tone === "dark" ? "text-cyan-300/80" : "text-[#0891B2]"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "font-display font-semibold tracking-[-0.025em]",
          "text-[2rem] sm:text-[2.65rem] leading-[1.08]",
          tone === "dark" ? "text-white" : "text-[#0F1C3F]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed",
            align === "center" && cn(maxWidth, "mx-auto"),
            tone === "dark" ? "text-white/65" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
