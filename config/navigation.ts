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
    label: "Products",
    href: "/products",
    description: "Explore the Translyx product portfolio",
  },
  {
    label: "AI Solutions",
    href: "/ai-solutions",
    description: "Protected AI privacy and governed evidence workflows",
  },
  {
    label: "Product Pipeline",
    href: "/product-pipeline",
    description: "Explore our product pipeline",
  },
  {
    label: "About Us",
    href: "/about",
    description: "Learn about Translyx",
  },
  {
    label: "Contact Us",
    href: "/contact",
    description: "Get in touch",
  },
];

// CTA Button in Header
export const headerCTA = {
  label: "Talk to Translyx",
  href: "/contact",
};
