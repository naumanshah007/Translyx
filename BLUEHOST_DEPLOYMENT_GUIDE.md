# Bluehost Deployment & Email Setup Guide

## Important Note About Next.js on Bluehost

**Next.js with API routes (like your contact form) requires Node.js hosting.** Bluehost's traditional shared hosting doesn't support Node.js well. Here are your options:

### Option 1: Keep Vercel + Point Bluehost Domain (RECOMMENDED)
- ✅ Best performance for Next.js
- ✅ Free hosting
- ✅ Easy to maintain
- ✅ Your contact form API will work perfectly
- ✅ Just point your domain from Bluehost to Vercel

### Option 2: Static Export (Limitations)
- ❌ Contact form won't work (no API routes)
- ❌ Would need alternative email solution
- ✅ Can host on Bluehost traditional hosting

### Option 3: Bluehost Node.js Hosting (If Available)
- Check if Bluehost offers Node.js hosting
- More complex setup
- May cost extra

## Recommended: Option 1 - Point Domain to Vercel

### Step 1: Get Your Vercel Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain: `privexa.co`
3. Vercel will give you DNS records to add

### Step 2: Update DNS in Bluehost

1. Go to Bluehost → Domains → DNS (the page you're on)
2. Update these records:
   - **A Record**: Point `@` to Vercel's IP
   - **CNAME Record**: Point `www` to Vercel's domain
   - (Vercel will provide exact values)

### Step 3: Complete Resend DNS Setup

While you're in Bluehost DNS, also add the 3 Resend records:

**Record 1: Domain Verification (DKIM)**
- Type: `TXT`
- Host Record: `resend._domainkey`
- Point To: (from Resend - very long string)

**Record 2: Enable Sending (MX)**
- Type: `MX`
- Host Record: `send`
- Point To: (from Resend - starts with `feedback-smtp.ap-north...`)
- Priority: `10`

**Record 3: Enable Sending (SPF)**
- Type: `TXT`
- Host Record: `send`
- Point To: (from Resend - starts with `v=spf1 include:amazons...`)

## Complete Setup Steps

Let me help you with both:
1. Setting up DNS to point to Vercel
2. Adding Resend DNS records

