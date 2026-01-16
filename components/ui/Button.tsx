import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "destructive" | "outline" | "ghost" | "gradient";
  size?: "default" | "sm" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", isLoading, children, disabled, asChild, ...props }, ref) => {
    const buttonClasses = cn(
      "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
      {
        // Primary - Solid primary color with high contrast white text
        "bg-slate-900 text-white shadow-[0_12px_30px_rgba(15,23,42,0.28)] hover:bg-slate-800 hover:shadow-[0_18px_40px_rgba(15,23,42,0.35)]":
          variant === "default" || variant === "primary",
        
        // Gradient - Professional gradient with high contrast
        "bg-[linear-gradient(110deg,#0F1C3F,#1D4ED8,#22D3EE)] bg-[length:200%_200%] animate-gradient text-white shadow-[0_14px_35px_rgba(37,99,235,0.45)] hover:shadow-[0_20px_45px_rgba(14,116,144,0.5)] font-bold before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100":
          variant === "gradient",
        
        // Secondary - Light background with dark text
        "bg-white/80 text-slate-900 hover:bg-white border border-slate-200/70 shadow-[0_8px_20px_-12px_rgba(15,23,42,0.35)] dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900 dark:border-slate-700/60":
          variant === "secondary",
        
        // Destructive - Red with white text
        "bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-md": variant === "destructive",
        
        // Outline - Border with high contrast text
        "border border-slate-300/70 bg-white/70 text-slate-900 hover:bg-white hover:border-slate-400/80 dark:border-slate-700/70 dark:text-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-900/60 font-semibold":
          variant === "outline",
        
        // Ghost - Subtle with good contrast
        "hover:bg-slate-100/70 dark:hover:bg-slate-900/60 text-slate-900 dark:text-slate-100": variant === "ghost",
      },
      {
        "h-10 px-4 py-2": size === "default",
        "h-9 px-3 text-xs": size === "sm",
        "h-11 px-8 text-base": size === "lg",
      },
      className
    );

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </>
    );

    // Handle asChild pattern for Next.js Link
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement, {
        className: cn(buttonClasses, (children as React.ReactElement).props?.className),
        ...props,
      });
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
