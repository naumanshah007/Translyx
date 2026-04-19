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
    href: "mailto:info@translyx.co",
    icon: "Mail",
  },
];
