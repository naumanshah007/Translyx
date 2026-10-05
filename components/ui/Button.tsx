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
        "bg-[#0B0B0C] text-white shadow-[0_4px_16px_rgba(11,11,12,0.30)] hover:bg-[#26272B] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(11,11,12,0.40)] active:scale-[0.98]":
          variant === "default" || variant === "primary",

        // Gradient — the site's signature cyan → sky → violet CTA treatment
        "bg-[#A50E28] hover:bg-[#860B20] text-white shadow-[0_8px_30px_-6px_rgba(200,16,46,0.5)] hover:-translate-y-0.5 hover:shadow-[0_10px_38px_-6px_rgba(100,116,139,0.55)]":
          variant === "gradient",

        // Secondary — clean outline with ink text
        "border border-[#0B0B0C]/25 bg-white text-[#0B0B0C] hover:bg-[#F6F6F7] hover:border-[#0B0B0C]/40 shadow-sm":
          variant === "secondary" || variant === "outline",

        // Destructive — for danger confirmations only
        "bg-red-600 text-white hover:bg-red-700 shadow-sm": variant === "destructive",

        // Ghost — in-line or nav links
        "hover:bg-[#0B0B0C]/6 text-[#0B0B0C]": variant === "ghost",
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
