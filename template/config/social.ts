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
    name: "Twitter",
    href: "https://twitter.com/privexa",
    icon: "Twitter",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/privexa",
    icon: "Linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/privexa",
    icon: "Github",
  },
  {
    name: "Email",
    href: "mailto:contact@privexa.io",
    icon: "Mail",
  },
];

