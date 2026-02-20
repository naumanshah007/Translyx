import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** max-w-6xl (default) or max-w-7xl */
  maxWidth?: "6xl" | "7xl";
}

/**
 * Shared page container for consistent layout across breakpoints.
 * Prevents horizontal scroll; responsive padding.
 */
export function Container({ children, maxWidth = "6xl", className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full",
        "mx-auto px-4 sm:px-6 lg:px-8",
        maxWidth === "7xl" ? "max-w-7xl" : "max-w-6xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
