"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

// Geometric Shapes Component
interface GeometricShapesProps {
  variant?: "circles" | "hexagons" | "triangles" | "mixed";
  className?: string;
  count?: number;
}

export function GeometricShapes({ variant = "circles", className, count = 3 }: GeometricShapesProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {variant === "circles" && (
        <>
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute rounded-full bg-gradient-to-br from-primary-400/20 to-cyan-400/20 blur-xl",
                i === 0 && "w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 -top-8 -right-8 sm:-top-12 sm:-right-12 md:-top-16 md:-right-16",
                i === 1 && "w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 md:-bottom-12 md:-left-12",
                i === 2 && "hidden sm:block w-20 h-20 md:w-40 md:h-40 top-1/2 right-1/4"
              )}
            />
          ))}
        </>
      )}
      {variant === "hexagons" && (
        <>
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute bg-gradient-to-br from-primary-500/10 to-cyan-500/10",
                "clip-path-hexagon",
                i === 0 && "hidden sm:block w-12 h-12 md:w-20 md:h-20 top-10 right-10 rotate-12",
                i === 1 && "hidden md:block w-12 h-12 md:w-16 md:h-16 bottom-20 left-20 -rotate-12",
                i === 2 && "hidden lg:block w-16 h-16 md:w-24 md:h-24 top-1/2 left-10 rotate-45"
              )}
            />
          ))}
        </>
      )}
      {variant === "mixed" && (
        <>
          <div className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary-400/20 to-cyan-400/20 blur-xl -top-8 -right-8 sm:-top-12 sm:-right-12 md:-top-16 md:-right-16" />
          <div className="absolute w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-500/10 to-cyan-500/10 rounded-lg rotate-45 -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 md:-bottom-12 md:-left-12" />
          <div className="hidden sm:block absolute w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-cyan-400/20 to-primary-400/20 rounded-full blur-lg top-1/2 right-1/4" />
        </>
      )}
    </div>
  );
}

// Gradient Accent Bar Component
interface GradientAccentProps {
  orientation?: "horizontal" | "vertical";
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function GradientAccent({
  orientation = "horizontal",
  position = "top",
  className,
  size = "md",
}: GradientAccentProps) {
  const sizeClasses = {
    sm: orientation === "horizontal" ? "h-1" : "w-1",
    md: orientation === "horizontal" ? "h-2" : "w-2",
    lg: orientation === "horizontal" ? "h-3" : "w-3",
  };

  const positionClasses = {
    top: "top-0 left-0 right-0",
    bottom: "bottom-0 left-0 right-0",
    left: "left-0 top-0 bottom-0",
    right: "right-0 top-0 bottom-0",
  };

  return (
    <div
      className={cn(
        "absolute bg-gradient-to-r from-primary-500 via-cyan-500 to-primary-500",
        orientation === "horizontal" ? "w-full" : "h-full",
        sizeClasses[size],
        positionClasses[position],
        className
      )}
    />
  );
}

// Pattern Overlay Component
interface PatternOverlayProps {
  pattern?: "dots" | "grid" | "waves" | "mesh";
  opacity?: number;
  className?: string;
}

export function PatternOverlay({ pattern = "dots", opacity = 0.05, className }: PatternOverlayProps) {
  const patternStyles = {
    dots: {
      backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
      backgroundSize: "24px 24px",
    },
    grid: {
      backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
      backgroundSize: "32px 32px",
    },
    waves: {
      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)`,
      backgroundSize: "40px 40px",
    },
    mesh: {
      backgroundImage: `radial-gradient(at 40% 20%, currentColor 0px, transparent 50%), radial-gradient(at 80% 0%, currentColor 0px, transparent 50%), radial-gradient(at 0% 50%, currentColor 0px, transparent 50%)`,
      backgroundSize: "100% 100%",
    },
  };

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        ...patternStyles[pattern],
        opacity,
        color: "currentColor",
      }}
    />
  );
}

// Section Divider Component
interface SectionDividerProps {
  variant?: "gradient" | "geometric" | "minimal";
  className?: string;
}

export function SectionDivider({ variant = "gradient", className }: SectionDividerProps) {
  if (variant === "gradient") {
    return (
      <div className={cn("relative py-4 sm:py-6 md:py-8", className)}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent" />
        </div>
        <div className="relative flex justify-center">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 shadow-lg" />
        </div>
      </div>
    );
  }

  if (variant === "geometric") {
    return (
      <div className={cn("relative py-6 sm:py-8 md:py-12", className)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary-400" />
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-primary-400 to-cyan-400" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rotate-45 bg-gradient-to-br from-primary-500 to-cyan-500" />
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-cyan-400 to-primary-400" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative py-4 sm:py-6", className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
      </div>
    </div>
  );
}

// Floating Icon Component
interface FloatingIconProps {
  icon: LucideIcon;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  size?: "sm" | "md" | "lg";
  className?: string;
  animated?: boolean;
}

export function FloatingIcon({
  icon: Icon,
  position = "top-right",
  size = "md",
  className,
  animated = true,
}: FloatingIconProps) {
  const sizeClasses = {
    sm: "w-6 h-6 sm:w-8 sm:h-8",
    md: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
    lg: "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16",
  };

  const positionClasses = {
    "top-left": "top-2 left-2 sm:top-4 sm:left-4",
    "top-right": "top-2 right-2 sm:top-4 sm:right-4",
    "bottom-left": "bottom-2 left-2 sm:bottom-4 sm:left-4",
    "bottom-right": "bottom-2 right-2 sm:bottom-4 sm:right-4",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div
      className={cn(
        "absolute pointer-events-none z-0",
        positionClasses[position],
        className
      )}
    >
      <div
        className={cn(
          "rounded-xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20 backdrop-blur-sm",
          "flex items-center justify-center",
          sizeClasses[size],
          animated && "animate-pulse"
        )}
      >
        <Icon className={cn("text-primary-600 dark:text-primary-400", size === "sm" ? "w-3 h-3 sm:w-4 sm:h-4" : size === "md" ? "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" : "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8")} />
      </div>
    </div>
  );
}

// Corner Accent Component
interface CornerAccentProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function CornerAccent({ position = "top-right", size = "md", className }: CornerAccentProps) {
  const sizeClasses = {
    sm: "w-12 h-12 sm:w-16 sm:h-16",
    md: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24",
    lg: "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32",
  };

  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <div
      className={cn(
        "absolute overflow-hidden pointer-events-none",
        positionClasses[position],
        sizeClasses[size],
        className
      )}
    >
      <div
        className={cn(
          "absolute bg-gradient-to-br from-primary-500/30 to-cyan-500/30",
          position === "top-left" && "w-full h-full rounded-br-full",
          position === "top-right" && "w-full h-full rounded-bl-full",
          position === "bottom-left" && "w-full h-full rounded-tr-full",
          position === "bottom-right" && "w-full h-full rounded-tl-full"
        )}
      />
    </div>
  );
}
