import {
  Microscope,
  Lock,
  Cloud,
  FileText,
  GitBranch,
  Stethoscope,
  FlaskConical,
  ShieldCheck,
  Activity,
  Globe,
  UserCheck,
  Wrench,
  Truck,
  Building2,
  Handshake,
  type LucideIcon,
} from "lucide-react";

/** Resolves the string icon names used in config/products.ts + config/partners.ts. */
export const productIconMap: Record<string, LucideIcon> = {
  Microscope,
  Lock,
  Cloud,
  FileText,
  GitBranch,
  Stethoscope,
  FlaskConical,
  ShieldCheck,
  Activity,
  Globe,
  UserCheck,
  Wrench,
  Truck,
  Building2,
  Handshake,
};

export function getProductIcon(name: string): LucideIcon {
  return productIconMap[name] ?? FlaskConical;
}
