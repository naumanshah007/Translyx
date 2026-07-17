import { NextResponse } from "next/server";
import { Resend } from "resend";

/** Escape user-supplied text before interpolating into the notification HTML. */
function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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
    const { name, email, organization, inquiryType, message, company_website } = body;

    // Honeypot: a hidden field real users never see/fill. If a bot fills it,
    // pretend success and drop the submission silently.
    if (typeof company_website === "string" && company_website.trim() !== "") {
      return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
    }

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
    const subject = `${inquiryType ? `[${inquiryType}] ` : ""}New Contact Form Submission from ${name}${organization ? ` (${organization})` : ""}`;

    const emailBody = `
New contact form submission:

Name: ${name}
Email: ${email}
${organization ? `Organization: ${organization}` : ""}
${inquiryType ? `Inquiry type: ${inquiryType}` : ""}

Message:
${message}

---
This email was sent from the Translyx Limited website contact form.
Reply directly to this email to respond to ${name} (${email}).
    `.trim();

    // Resend's onboarding sender can deliver only to the account's verified
    // inbox. Keep these configurable so the addresses can be switched to the
    // Translyx domain as soon as that domain is verified in Resend.
    const recipient = process.env.CONTACT_FORM_RECIPIENT || "info@privexa.co";
    const sender = process.env.CONTACT_FORM_SENDER || "Translyx Website <onboarding@resend.dev>";

    // Send email using Resend. The visitor remains the Reply-To address, so a
    // normal reply from the verified inbox goes directly back to them.
    const { data, error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: subject,
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E40AF;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            ${organization ? `<p><strong>Organization:</strong> ${escapeHtml(organization)}</p>` : ""}
            ${inquiryType ? `<p><strong>Inquiry type:</strong> ${escapeHtml(inquiryType)}</p>` : ""}
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #1E40AF;">Message:</h3>
            <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 4px;">${escapeHtml(message)}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Translyx Limited website contact form.<br>
            Reply directly to this email to respond to ${escapeHtml(name)} (${escapeHtml(email)}).
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
