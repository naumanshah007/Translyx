# Contact Form Email Integration Setup

The contact form is integrated with Resend to send emails to `info@translyx.co.nz`.

## Setup Instructions

### 1. Get Resend API Key

1. Sign up at [https://resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Go to API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### 2. Local Development

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_FORM_RECIPIENT=info@translyx.co.nz
CONTACT_FORM_SENDER="Translyx Website <website@translyx.co.nz>"
```

### 3. Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add a new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Environment**: Production, Preview, Development (select all)
4. Redeploy your application

### 4. Domain Verification

The production domain is verified with Resend:

1. Go to Resend Dashboard → Domains
2. Add your domain (`translyx.co.nz`)
3. Add the DNS records provided by Resend
4. Use the verified sender in `app/api/contact/route.ts`:
   ```typescript
   from: "Translyx Website <website@translyx.co.nz>",
   ```

## How It Works

1. User fills out the contact form
2. Form data is sent to `/api/contact` endpoint
3. API route validates the data
4. Email is sent to `info@translyx.co.nz` via Resend
5. User receives success/error message

## Email Format

The email includes:
- Sender's name and email
- Company (if provided)
- Message content
- Demo request indicator (if checked)
- Reply-to is set to the sender's email for easy responses

## Troubleshooting

- **Emails not sending**: Check that `RESEND_API_KEY` is set correctly
- **API errors**: Check Vercel function logs
- **Rate limits**: Resend free tier allows 3,000 emails/month
- **Domain issues**: Use verified domain for better deliverability
