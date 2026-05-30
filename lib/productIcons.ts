import {
  Microscope,
  Lock,
  Cloud,
  FileText,
  GitBranch,
  Stethoscope,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

/** Resolves the string icon names used in config/products.ts to lucide components. */
export const productIconMap: Record<string, LucideIcon> = {
  Microscope,
  Lock,
  Cloud,
  FileText,
  GitBranch,
  Stethoscope,
  FlaskConical,
};

export function getProductIcon(name: string): LucideIcon {
  return productIconMap[name] ?? FlaskConical;
}
