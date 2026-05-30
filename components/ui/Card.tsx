import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gradient-border";
  hover?: boolean;
  cornerAccent?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, cornerAccent = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group/card relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white transition-all duration-300",
          "shadow-[0_1px_2px_rgba(15,28,63,0.04),0_10px_28px_-14px_rgba(15,28,63,0.14)]",
          "dark:border-slate-800/70 dark:bg-slate-950/80",
          hover &&
            "hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_26px_64px_-30px_rgba(8,145,178,0.45)] dark:hover:border-cyan-400/30",
          className
        )}
        {...props}
      >
        {cornerAccent && (
          <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_70%)] opacity-70 transition-opacity duration-300 group-hover/card:opacity-100" />
        )}
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl font-bold leading-snug tracking-tight text-slate-900 dark:text-slate-50", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-slate-600 dark:text-slate-400 leading-relaxed", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
