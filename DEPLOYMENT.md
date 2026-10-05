# Deployment Guide - Translyx Website

> Translyx Limited is the company; Privexa is a Translyx platform. The repository name below (`naumanshah007/Privexa`) is historical and unchanged.

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the best platform for Next.js apps and offers a generous free tier.

### Method A: Using Vercel Web Interface (Easiest)

1. **Go to Vercel**: Visit https://vercel.com
2. **Sign up/Login**: Use your GitHub account to sign in
3. **Import Project**:
   - Click "Add New Project"
   - Select your repository: `naumanshah007/Privexa`
   - Vercel will auto-detect Next.js settings
4. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://privexa.vercel.app` (or custom domain)

### Method B: Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose production deployment
   - Your site will be live immediately!

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Custom Domain (Optional)
- In Vercel dashboard, go to your project → Settings → Domains
- Add your custom domain (e.g., privexa.io)
- Follow DNS configuration instructions

---

## Option 2: Deploy to Netlify (Alternative)

1. **Go to Netlify**: Visit https://www.netlify.com
2. **Sign up/Login**: Use your GitHub account
3. **Import Project**:
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

---

## Option 3: Deploy to GitHub Pages (Static Export)

If you want to use GitHub Pages, you'll need to configure Next.js for static export:

1. **Update `next.config.js`**:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

2. **Build static site**:
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**:
   - Go to repository Settings → Pages
   - Select source: GitHub Actions
   - Or use `gh-pages` package

---

## Recommended: Vercel

**Why Vercel?**
- ✅ Built by Next.js creators
- ✅ Zero configuration needed
- ✅ Automatic deployments on git push
- ✅ Free SSL certificates
- ✅ Global CDN
- ✅ Free tier includes:
  - Unlimited personal projects
  - 100GB bandwidth/month
  - Custom domains

**Quick Start with Vercel:**
1. Visit: https://vercel.com/new
2. Import: `naumanshah007/Privexa`
3. Deploy: Click "Deploy"
4. Done! Your site is live in ~2 minutes

---

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify images load
- [ ] Check mobile responsiveness
- [ ] Test contact form (if applicable)
- [ ] Verify SEO metadata
- [ ] Set up custom domain (optional)
- [ ] Enable analytics (optional)

---

## Need Help?

If you encounter any issues:
1. Check Vercel build logs in the dashboard
2. Ensure all environment variables are set (if any)
3. Verify `package.json` scripts are correct
4. Check that all dependencies are in `package.json`

