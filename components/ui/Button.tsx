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
      "inline-flex items-center justify-center rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        // Primary - Solid primary color with high contrast white text
        "bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md": variant === "default" || variant === "primary",
        
        // Gradient - Professional gradient with high contrast
        "bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 text-white hover:from-primary-700 hover:via-primary-600 hover:to-primary-700 shadow-md hover:shadow-lg font-bold": variant === "gradient",
        
        // Secondary - Light background with dark text
        "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:border-gray-700": variant === "secondary",
        
        // Destructive - Red with white text
        "bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-md": variant === "destructive",
        
        // Outline - Border with high contrast text
        "border-2 border-primary-600 bg-transparent text-primary-700 hover:bg-primary-50 dark:border-primary-500 dark:text-primary-400 dark:hover:bg-primary-900/20 font-semibold": variant === "outline",
        
        // Ghost - Subtle with good contrast
        "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100": variant === "ghost",
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
