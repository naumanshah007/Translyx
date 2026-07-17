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
          "group/card relative overflow-hidden rounded-[1.35rem] border transition-all duration-300",
          variant === "default"
            ? "border-slate-200/70 bg-white"
            : "border-cyan-200/50 bg-white",
          "shadow-[0_1px_2px_rgba(15,28,63,0.03),0_18px_46px_-28px_rgba(15,28,63,0.32)]",
          hover &&
            "hover:-translate-y-1.5 hover:border-cyan-300/55 hover:shadow-[0_30px_70px_-32px_rgba(8,145,178,0.48)]",
          className
        )}
        {...props}
      >
        <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
        {cornerAccent && (
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-[4rem] bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_70%)] opacity-80 transition-opacity duration-300 group-hover/card:opacity-100" />
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
      className={cn("font-display text-xl font-semibold leading-snug tracking-tight text-[#0F1C3F]", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-slate-600 leading-relaxed", className)} {...props} />
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
