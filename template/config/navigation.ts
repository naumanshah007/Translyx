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
    label: "Features",
    href: "/features",
    description: "Explore our features",
  },
  {
    label: "About",
    href: "/about",
    description: "Learn about us",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch",
  },
];

// CTA Button in Header
export const headerCTA = {
  label: "Get Started",
  href: "/contact",
};

