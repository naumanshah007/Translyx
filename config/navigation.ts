/**
 * Navigation Configuration
 * 
 * Define your site's navigation menu structure here.
 * Add, remove, or reorder items as needed.
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Return to homepage",
  },
  {
    label: "About Us",
    href: "/about",
    description: "Learn about Translyx",
  },
  {
    label: "Product Pipeline",
    href: "/services",
    description: "Explore our product pipeline",
  },
  {
    label: "Updates",
    href: "/updates",
    description: "Company updates and announcements",
  },
  {
    label: "Contact Us",
    href: "/contact",
    description: "Get in touch",
  },
];

// CTA Button in Header
export const headerCTA = {
  label: "Talk to Us",
  href: "/contact",
};

