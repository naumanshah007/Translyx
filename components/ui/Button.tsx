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
      "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl text-sm font-semibold leading-none whitespace-nowrap text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
      {
        // Primary — solid deep navy, one call-to-action per viewport
        "bg-[#0F1C3F] text-white shadow-[0_4px_16px_rgba(15,28,63,0.30)] hover:bg-[#1a2d5a] hover:shadow-[0_6px_24px_rgba(15,28,63,0.40)] active:scale-[0.98]":
          variant === "default" || variant === "primary" || variant === "gradient",

        // Secondary — clean outline with ink text
        "border border-[#0F1C3F]/25 bg-white text-[#0F1C3F] hover:bg-[#F7F5F1] hover:border-[#0F1C3F]/40 shadow-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800":
          variant === "secondary" || variant === "outline",

        // Destructive — for danger confirmations only
        "bg-red-600 text-white hover:bg-red-700 shadow-sm": variant === "destructive",

        // Ghost — in-line or nav links
        "hover:bg-[#0F1C3F]/6 text-[#0F1C3F] dark:text-slate-100 dark:hover:bg-white/8": variant === "ghost",
      },
      {
        "min-h-[44px] px-5 py-2.5": size === "default",
        "min-h-[38px] px-4 py-2 text-xs": size === "sm",
        "min-h-[48px] px-7 py-3 text-base": size === "lg",
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
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
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
