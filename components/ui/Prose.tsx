import { cn } from "@/lib/utils";

interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Reusable long-form text wrapper — left-aligned for readability.
 */
export function Prose({ children, className, ...props }: ProseProps) {
  return (
    <div
      className={cn("text-slate-700", "text-base sm:text-lg", "leading-relaxed", "space-y-4", "max-w-none", className)}
      {...props}
    >
      {children}
    </div>
  );
}
