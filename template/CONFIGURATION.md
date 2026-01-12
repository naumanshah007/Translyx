# Configuration Guide

This guide explains how to customize the website boilerplate for your specific needs.

## Site Configuration (`config/site.ts`)

### Basic Information
```typescript
name: "Your Company Name"
companyName: "Your Company Limited"
tagline: "Your Tagline"
description: "Your description for SEO"
```

### Domain & URLs
```typescript
domain: "yourdomain.com"
url: "https://yourdomain.com"
```

### Company Details
Update contact information, location, and other company-specific details.

### SEO Defaults
Customize default meta tags, Open Graph images, and keywords.

## Navigation (`config/navigation.ts`)

### Menu Items
```typescript
export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Return to homepage",
  },
  // Add more items...
];
```

### Header CTA
```typescript
export const headerCTA = {
  label: "Get Started",
  href: "/contact",
};
```

## Social Media (`config/social.ts`)

### Social Links
```typescript
export const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    href: "https://twitter.com/yourhandle",
    icon: "Twitter", // Lucide icon name
  },
  // Add more platforms...
];
```

**Available Icons**: Any icon from [Lucide React](https://lucide.dev/icons/)

## Styling Customization

### Colors

#### Method 1: Tailwind Config
Edit `tailwind.config.ts` to change the color palette:
```typescript
primary: {
  DEFAULT: "#YOUR_COLOR",
  50: "#...",
  // ... full scale
}
```

#### Method 2: CSS Variables
Edit `styles/globals.css` to update theme variables:
```css
:root {
  --primary: YOUR_HSL_VALUE;
}
```

### Typography
- Change font in `app/layout.tsx` (currently Inter)
- Modify font sizes in Tailwind classes throughout components

## Adding New Pages

1. Create folder in `app/` directory:
   ```
   app/your-page/
     └── page.tsx
   ```

2. Add to navigation in `config/navigation.ts`

3. Use existing components:
   ```tsx
   import { Hero } from "@/components/sections/Hero";
   import { Features } from "@/components/sections/Features";
   
   export default function YourPage() {
     return (
       <>
         <Hero {...props} />
         <Features {...props} />
       </>
     );
   }
   ```

## Customizing Sections

### Hero Section
```tsx
<Hero
  headline="Your Headline"
  subheadline="Optional Subheadline"
  description="Your description"
  primaryCTA={{ label: "Button", href: "/link" }}
  badge={{ text: "Badge Text", icon: <Icon /> }}
/>
```

### Features Section
```tsx
<Features
  title="Section Title"
  description="Section description"
  features={[
    {
      title: "Feature Title",
      description: "Feature description",
      icon: YourIcon, // Lucide icon component
    },
  ]}
/>
```

## Logo Customization

1. Replace logo files in `public/`:
   - `logo.png` (main logo)
   - `logo.svg` (SVG version)
   - `favicon.ico` (favicon)

2. Update logo config in `config/site.ts`:
   ```typescript
   logo: {
     src: "/your-logo.png",
     alt: "Your Logo Alt Text",
     width: 48,
     height: 48,
   }
   ```

## Contact Form Integration

The contact form in `components/sections/ContactForm.tsx` is a placeholder. To integrate with an email service:

1. **SendGrid/Resend/etc.**
   ```typescript
   // In handleSubmit function
   const response = await fetch('/api/contact', {
     method: 'POST',
     body: JSON.stringify(formData),
   });
   ```

2. **Create API Route**
   Create `app/api/contact/route.ts` to handle form submissions.

## Advanced Customization

### Adding New Components
1. Create component in appropriate folder:
   - `components/ui/` for reusable UI elements
   - `components/sections/` for page sections
   - `components/layout/` for layout components

2. Follow existing patterns for consistency

### Modifying Layout
- Edit `app/layout.tsx` for global layout changes
- Modify `components/layout/Header.tsx` or `Footer.tsx` for header/footer changes

### Adding Animations
- Use Tailwind's animation utilities
- Add custom animations in `tailwind.config.ts`:
  ```typescript
  keyframes: {
    yourAnimation: {
      "0%": { ... },
      "100%": { ... },
    },
  }
  ```

## Best Practices

1. **Keep Config Centralized**: Use `config/` files for easy updates
2. **Reuse Components**: Don't duplicate code, use existing components
3. **Follow Patterns**: Maintain consistency with existing code style
4. **Test Responsively**: Always test on mobile, tablet, and desktop
5. **SEO**: Update metadata for each page

## Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run build`

### Styling Issues
- Clear `.next` cache: `rm -rf .next`
- Verify Tailwind is processing files in `tailwind.config.ts`

### Component Not Rendering
- Check import paths (use `@/` alias)
- Verify component exports
- Check browser console for errors

