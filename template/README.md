# Universal Website Boilerplate

A production-ready Next.js website boilerplate with a modern design system, extracted from Privexa's professional UI. This boilerplate is perfect for corporate sites, product showcases, and marketing pages.

## 🚀 Using This as a Template

**To start a new project from this template:**

1. **Copy the entire `website-boilerplate` folder** to your desired location:
   ```bash
   cp -r website-boilerplate /path/to/your/new-project
   # or on Windows:
   xcopy website-boilerplate /path/to/your/new-project /E /I
   ```

2. **Rename the folder** to your project name (optional)

3. **Update package.json**:
   ```bash
   cd your-new-project
   # Edit package.json and change "name" field to your project name
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Customize**:
   - Edit `config/site.ts` for your brand
   - Update `config/navigation.ts` for your menu
   - Replace logo files in `public/`
   - Customize content in `app/` pages

6. **Start developing**:
   ```bash
   npm run dev
   ```

**That's it!** You now have a fully functional website ready to customize.

## Features

- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Design System**: Complete color palette, typography, and component library
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in metadata, Open Graph, and Twitter Card support
- **Config-Driven**: Easy customization through configuration files
- **Component-Based**: Reusable sections and UI components
- **Dark Mode**: Full dark mode support with CSS variables

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Customize Configuration**
   - Edit `config/site.ts` for brand identity
   - Update `config/navigation.ts` for menu structure
   - Modify `config/social.ts` for social media links

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
website-boilerplate/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── features/           # Features page
│   └── contact/            # Contact page
├── components/
│   ├── layout/             # Header, Footer, Navigation
│   ├── sections/           # Hero, Features, CTA, etc.
│   └── ui/                 # Button, Card, Logo
├── config/                 # Configuration files
│   ├── site.ts             # Site settings
│   ├── navigation.ts       # Menu structure
│   └── social.ts           # Social links
├── lib/                    # Utilities
├── public/                 # Static assets
└── styles/                 # Global styles
```

## Customization Guide

### Brand Identity

Edit `config/site.ts` to update:
- Company name and tagline
- Domain and URLs
- Contact information
- SEO defaults
- Logo configuration

### Navigation

Edit `config/navigation.ts` to:
- Add/remove menu items
- Change navigation labels
- Update CTA button

### Colors & Styling

- **Tailwind Config**: Modify `tailwind.config.ts` for color scheme changes
- **CSS Variables**: Update `styles/globals.css` for theme customization
- **Components**: Edit component files in `components/` for specific styling

### Pages

- **Add New Page**: Create a new folder in `app/` with `page.tsx`
- **Modify Existing**: Edit page files in `app/` directory
- **Sections**: Use section components from `components/sections/`

## Components

### Layout Components
- `Header`: Responsive navigation with mobile menu
- `Footer`: Multi-column footer with links and social media
- `Navigation`: Desktop navigation menu

### Section Components
- `Hero`: Large hero section with gradient text
- `Features`: Grid of feature cards
- `Testimonials`: Customer testimonials
- `Stats`: Statistics/metrics display
- `CTA`: Call-to-action section
- `ContactForm`: Contact form with validation

### UI Components
- `Button`: Multiple variants (primary, gradient, outline, etc.)
- `Card`: Card component with header, content, footer
- `Logo`: Configurable logo component

## Design System

### Colors
- **Primary**: Blue (#1E40AF)
- **Brand**: Primary, Secondary, Accent
- **Semantic**: Success, Warning, Error
- **Full Scale**: 50-950 shades for each color

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold with gradient support
- **Body**: Clean, readable text

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## License

MIT

## Support

For customization help, refer to `CONFIGURATION.md` for detailed documentation.

