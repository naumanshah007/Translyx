import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  try {
    // Check for API key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact support." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, organization, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Prepare email content
    const subject = `New Contact Form Submission from ${name}${organization ? ` (${organization})` : ""}`;

    const emailBody = `
New contact form submission:

Name: ${name}
Email: ${email}
${organization ? `Organization: ${organization}` : ""}

Message:
${message}

---
This email was sent from the Translyx Limited website contact form.
Reply directly to this email to respond to ${name} (${email}).
    `.trim();

    // Send email using Resend
    // Note: Domain verification is required to send to info@translyx.co
    // Until domain is verified, Resend may only allow sending to verified account email
    const { data, error } = await resend.emails.send({
      from: "Translyx Website <onboarding@resend.dev>", // Change to noreply@translyx.co after domain verification
      to: [siteConfig.company.email], // info@translyx.co
      replyTo: email,
      subject: subject,
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E40AF;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ""}
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #1E40AF;">Message:</h3>
            <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Translyx Limited website contact form.<br>
            Reply directly to this email to respond to ${name} (${email}).
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

