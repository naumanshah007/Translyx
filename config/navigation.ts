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
    label: "Our Services",
    href: "/services",
    description: "Explore our services",
  },
  {
    label: "Collaboration",
    href: "/collaboration",
    description: "Partner with us",
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

