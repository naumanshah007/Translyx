import { cn } from "@/lib/utils";

interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Reusable justified long-form text wrapper.
 * MS-Word-style alignment with consistent typography.
 */
export function Prose({ children, className, ...props }: ProseProps) {
  return (
    <div
      className={cn(
        "text-gray-700 dark:text-gray-300",
        "text-base sm:text-lg",
        "leading-relaxed",
        "space-y-4",
        "text-justify",
        "hyphens-auto",
        "break-words",
        "max-w-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
