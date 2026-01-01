# Vercel Custom Domain Setup - www.privexa.co

## Step-by-Step Guide

### Step 1: Add Domain in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Open your **"privexa"** project
3. Go to **Settings** → **Domains**
4. Click **"Add Domain"**
5. Enter: `www.privexa.co`
6. Click **"Add"**

### Step 2: Vercel Will Show DNS Records

Vercel will display DNS records you need to add. You'll see something like:

**For www.privexa.co:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com` (or similar)

**For privexa.co (root domain):**
- Type: `A`
- Name: `@` (or blank)
- Value: `76.76.21.21` (Vercel's IP - they'll provide the exact one)

### Step 3: Add DNS Records in Bluehost

1. Go to Bluehost → **Domains** → **DNS** (the page you're on)
2. Click **"ACTIONS"** → **"Add Record"**

**Add CNAME Record for www:**
- Type: `CNAME`
- Host Record: `www`
- Point To: (copy from Vercel - usually `cname.vercel-dns.com`)
- TTL: Default or `3600`

**Add A Record for root domain:**
- Type: `A`
- Host Record: `@` (or leave blank for root)
- Point To: (copy IP from Vercel - usually `76.76.21.21`)
- TTL: Default or `3600`

### Step 4: Also Add Resend DNS Records

While you're adding DNS records, also add the 3 Resend records:

**Record 1: Domain Verification (DKIM)**
- Type: `TXT`
- Host Record: `resend._domainkey`
- Point To: (from Resend - very long string)

**Record 2: Enable Sending (MX)**
- Type: `MX`
- Host Record: `send`
- Point To: (from Resend)
- Priority: `10`

**Record 3: Enable Sending (SPF)**
- Type: `TXT`
- Host Record: `send`
- Point To: (from Resend)

### Step 5: Wait for DNS Propagation

- Wait 5-60 minutes for DNS to propagate
- Vercel will automatically detect when DNS is configured
- Your site will be live at `www.privexa.co`

### Step 6: SSL Certificate

Vercel automatically provides free SSL certificates. Once DNS is configured, SSL will be set up automatically (may take a few minutes).

## Benefits

✅ Free hosting on Vercel
✅ Your own domain (www.privexa.co)
✅ Free SSL certificate
✅ Contact form API works perfectly
✅ Fast CDN worldwide
✅ Automatic deployments from GitHub

## After Setup

Once DNS is configured:
- Your site will be live at `www.privexa.co`
- Contact form will work
- Emails will be sent to `info@privexa.co` (after Resend domain verification)

