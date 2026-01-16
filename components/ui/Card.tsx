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
          "rounded-2xl border border-slate-200/70 bg-white/80 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.45)] backdrop-blur-md transition-all duration-300 relative overflow-hidden",
          "dark:border-slate-800/70 dark:bg-slate-950/70",
          variant === "gradient-border" &&
            "border border-transparent bg-[linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),linear-gradient(120deg,rgba(59,130,246,0.35),rgba(34,211,238,0.28),rgba(251,191,36,0.18))] [background-origin:border-box] [background-clip:padding-box,border-box] dark:bg-[linear-gradient(rgba(2,6,23,0.75),rgba(2,6,23,0.75)),linear-gradient(120deg,rgba(59,130,246,0.35),rgba(34,211,238,0.25),rgba(251,191,36,0.18))]",
          hover &&
            "hover:-translate-y-1 hover:border-primary-300/70 dark:hover:border-primary-500/60 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.55)]",
          className
        )}
        {...props}
      >
        {cornerAccent && (
          <>
            <div className="absolute top-0 right-0 w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-tr from-amber-300/25 to-transparent rounded-tr-full" />
          </>
        )}
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-bold leading-none tracking-tight text-slate-900 dark:text-slate-50",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-600 dark:text-slate-400 leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
