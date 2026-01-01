# Resend Domain Verification Setup

## Current Issue

Resend's free tier only allows sending emails to your verified account email (`naumanshah07@gmail.com`) for testing. To send emails to `info@privexa.co`, you need to verify your domain.

## Solution: Verify Your Domain with Resend

### Step 1: Add Domain in Resend

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Click **"Add Domain"**
3. Enter your domain: `privexa.co`
4. Click **"Add"**

### Step 2: Add DNS Records

Resend will provide you with DNS records to add. You'll need to add these to your domain's DNS settings (wherever you manage DNS for privexa.co):

**Example DNS records (Resend will give you exact values):**
- **TXT Record** for domain verification
- **SPF Record** (TXT)
- **DKIM Records** (CNAME or TXT)
- **DMARC Record** (TXT) - optional but recommended

### Step 3: Wait for Verification

- DNS changes can take a few minutes to propagate
- Resend will automatically verify once DNS records are detected
- Check the Resend dashboard for verification status

### Step 4: Update API Route

Once verified, update `app/api/contact/route.ts`:

Change this line:
```typescript
from: "Privexa Website <onboarding@resend.dev>",
```

To:
```typescript
from: "Privexa Website <noreply@privexa.co>",
```

Or:
```typescript
from: "Privexa Website <contact@privexa.co>",
```

### Step 5: Redeploy

After updating the code:
1. Commit and push the changes
2. Vercel will auto-deploy
3. Test the contact form again

## Alternative: Temporary Testing

If you want to test immediately without domain verification, you can temporarily change the recipient to your verified email:

In `app/api/contact/route.ts`, change:
```typescript
to: [siteConfig.company.email],
```

To:
```typescript
to: ["naumanshah07@gmail.com"], // Temporary for testing
```

**Note:** This is only for testing. For production, you must verify your domain.

## Benefits of Domain Verification

- ✅ Send emails to any recipient
- ✅ Better email deliverability
- ✅ Professional sender address (noreply@privexa.co)
- ✅ Higher email limits
- ✅ Better reputation

