# Resend Domain Verification Setup

## Current Issue

Resend's onboarding sender only delivers to the Resend account's verified email address. To deliver website enquiries to `info@translyx.co.nz` from a Translyx sender, verify the Translyx domain in Resend.

## Solution: Verify Your Domain with Resend

### Step 1: Add Domain in Resend

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Click **"Add Domain"**
3. Enter your domain: `translyx.co.nz`
4. Click **"Add"**

### Step 2: Add DNS Records

Resend will provide DNS records to add in the DNS settings for `translyx.co.nz`.

**Example DNS records (Resend will provide the exact values):**
- **TXT Record** for domain verification
- **SPF Record** (TXT)
- **DKIM Records** (CNAME or TXT)
- **DMARC Record** (TXT) - optional but recommended

### Step 3: Wait for Verification

- DNS changes can take a few minutes to propagate
- Resend will automatically verify once DNS records are detected
- Check the Resend dashboard for verification status

### Step 4: Update Production Environment

Once verified, configure these Vercel production environment variables:

```env
CONTACT_FORM_RECIPIENT=info@translyx.co.nz
CONTACT_FORM_SENDER="Translyx Website <website@translyx.co.nz>"
```

### Step 5: Redeploy

After updating the code:
1. Commit and push the changes
2. Vercel will auto-deploy
3. Test the contact form again

## Benefits of Domain Verification

- ✅ Send emails to any recipient
- ✅ Better email deliverability
- ✅ Professional sender address (`website@translyx.co.nz`)
- ✅ Higher email limits
- ✅ Better reputation
