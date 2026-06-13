/**
 * Social Media Configuration
 * 
 * Add your social media links here.
 * Leave href empty string to hide a platform.
 */

export interface SocialLink {
  name: string;
  href: string;
  icon: string; // Lucide icon name
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/translyx/",
    icon: "Linkedin",
  },
  {
    name: "Email",
    // TODO: switch to mailto:info@translyx.co.nz once email routing is set up on the new domain.
    href: "mailto:info@translyx.co",
    icon: "Mail",
  },
];
