"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  variant?: "full" | "icon" | "horizontal";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  showText?: boolean;
  href?: string;
  onClick?: () => void;
}

const sizeMap = {
  sm: { full: 32, icon: 24, horizontal: { width: 120, height: 32 } },
  md: { full: 48, icon: 32, horizontal: { width: 160, height: 40 } },
  lg: { full: 240, icon: 192, horizontal: { width: 720, height: 192 } },
  xl: { full: 96, icon: 72, horizontal: { width: 300, height: 72 } },
  "2xl": { full: 128, icon: 96, horizontal: { width: 400, height: 96 } },
};

export function Logo({
  variant = "full",
  size = "md",
  className,
  showText = false,
  href = "/",
  onClick,
}: LogoProps) {
  const router = useRouter();

  const logoUrl = siteConfig.logo.src;
  const dimensions = sizeMap[size][variant];

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(href);
    }
  };

  const isHorizontal = variant === "horizontal";
  const width = isHorizontal ? (dimensions as { width: number; height: number }).width : (dimensions as number);
  const height = isHorizontal ? (dimensions as { width: number; height: number }).height : (dimensions as number);

  const logoElement = (
    <div
      className={cn(
        "flex items-center justify-center transition-opacity hover:opacity-80 cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <Image
        src={logoUrl}
        alt={siteConfig.logo.alt}
        width={width}
        height={height}
        priority
        className="object-contain w-auto h-auto"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      {showText && variant !== "horizontal" && (
        <div className="flex flex-col ml-3">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {siteConfig.name}
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {siteConfig.tagline}
          </span>
        </div>
      )}
    </div>
  );

  // If href is provided and onClick is not, use Link wrapper
  // Otherwise, return logoElement directly to avoid nested links
  if (href && !onClick) {
    return (
      <Link href={href} className="block">
        {logoElement}
      </Link>
    );
  }
  
  return logoElement;
}

interface MonogramMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function MonogramMark({ className, size = "md" }: MonogramMarkProps) {
  const initials = siteConfig.name
    .split(" ")
    .map((literal) => literal.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const sizeClasses = {
    sm: "h-10 w-10 text-base",
    md: "h-12 w-12 text-lg",
    lg: "h-16 w-16 text-xl",
  }[size];

  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white shadow-xl shadow-primary-900/20",
        "flex items-center justify-center font-semibold tracking-[0.25em] uppercase",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.4),_transparent_60%)] before:opacity-70",
        "after:absolute after:-right-2 after:-bottom-2 after:h-5 after:w-5 after:rounded-lg after:bg-gradient-to-br after:from-cyan-400 after:to-primary-500 after:blur-sm",
        "overflow-hidden backdrop-blur-xl",
        sizeClasses,
        className
      )}
      aria-hidden="true"
    >
      <span className="relative z-10">{initials}</span>
    </div>
  );
}
