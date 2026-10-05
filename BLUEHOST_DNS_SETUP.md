# Bluehost DNS Setup for Resend

## Step-by-Step Instructions for Bluehost

### Step 1: Log in to Bluehost

1. Go to [bluehost.com](https://bluehost.com)
2. Click "Login" (top right)
3. Log in with your Bluehost account

### Step 2: Access DNS Management

1. Once logged in, you'll see your **cPanel** or **Bluehost Dashboard**
2. Look for **"Domains"** section
3. Click on **"DNS Zone Editor"** or **"Advanced DNS"** or **"DNS Management"**
   - It might also be under "Advanced" → "DNS Zone Editor"
   - Or in the "Domains" section

### Step 3: Select Your Domain

1. You'll see a list of your domains
2. Find and select **`translyx.co.nz`**
3. Click on it or select it from a dropdown

### Step 4: Add the 3 DNS Records

You need to add 3 records. For each one:

#### Record 1: Domain Verification (DKIM)

1. Click **"Add Record"** or **"+"** button
2. Fill in:
   - **Type:** Select `TXT`
   - **Name/Host:** `resend._domainkey`
   - **Value/Points to:** (Copy the FULL value from Resend - starts with `p=MIGfMAOGCSqGSIb3DQEB...`)
   - **TTL:** `3600` or leave default
3. Click **"Add Record"** or **"Save"**

#### Record 2: Enable Sending (MX Record)

1. Click **"Add Record"** or **"+"** button
2. Fill in:
   - **Type:** Select `MX`
   - **Name/Host:** `send`
   - **Value/Points to:** (Copy from Resend - starts with `feedback-smtp.ap-north...`)
   - **Priority:** `10`
   - **TTL:** `3600` or leave default
3. Click **"Add Record"** or **"Save"**

#### Record 3: Enable Sending (SPF TXT Record)

1. Click **"Add Record"** or **"+"** button
2. Fill in:
   - **Type:** Select `TXT`
   - **Name/Host:** `send`
   - **Value/Points to:** (Copy from Resend - starts with `v=spf1 include:amazons...`)
   - **TTL:** `3600` or leave default
3. Click **"Add Record"** or **"Save"**

### Step 5: Verify in Resend

1. Wait 5-30 minutes for DNS to propagate
2. Go back to [Resend Domains page](https://resend.com/domains)
3. Refresh the page
4. Check if status changed from "Pending" to "Verified" ✅

### Step 6: After Verification

Once verified, I'll update the code to use `website@translyx.co.nz` as the sender, and your contact form will work perfectly!

## Troubleshooting

**Can't find DNS Zone Editor?**
- Look for "Advanced" section
- Or search for "DNS" in the cPanel search bar
- Or contact Bluehost support - they can help you access DNS settings

**Records not showing as verified?**
- Wait longer (can take up to 24 hours, but usually 5-30 minutes)
- Double-check you copied the FULL values from Resend
- Make sure there are no extra spaces
- Try refreshing the Resend page

**Need help?**
- Bluehost has 24/7 support - they can help you add DNS records
- Or let me know what you see in your Bluehost dashboard and I'll guide you further!

