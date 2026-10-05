import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/privexa/LegalPage";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.companyName} handles personal information submitted through this website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  const email = siteConfig.company.email;
  return (
    <LegalPage title="Privacy Policy" updated="October 2026">
      <div>
        <p>
          This policy explains how {siteConfig.companyName} (&ldquo;Translyx&rdquo;, &ldquo;we&rdquo;) handles personal
          information collected through this website. Privexa is a Translyx platform; enquiries about Privexa are handled
          by Translyx under this policy. Use of the Privexa application itself is governed by separate customer agreements.
        </p>
      </div>
      <div>
        <h2>Information you provide</h2>
        <p>When you submit a contact, demo or trial-access request, we collect the details you enter, which may include:</p>
        <ul>
          <li>name, organisation and business email address;</li>
          <li>role and country or region;</li>
          <li>your area of interest and any message you choose to include.</li>
        </ul>
      </div>
      <div>
        <h2>Technical information</h2>
        <p>
          Like most websites, our hosting infrastructure may process standard technical information such as IP address,
          browser type and request logs to deliver and secure the site. This website does not use advertising or analytics
          cookies. Embedded videos are served from YouTube&apos;s privacy-enhanced domain and load only when you choose to
          play them; YouTube&apos;s own privacy policy then applies.
        </p>
      </div>
      <div>
        <h2>How we use information</h2>
        <ul>
          <li>to respond to your enquiry and arrange demos, evaluations or trial access;</li>
          <li>to follow up on the commercial discussion you have started with us;</li>
          <li>to operate, maintain and protect this website.</li>
        </ul>
        <p>We do not sell personal information.</p>
      </div>
      <div>
        <h2>Service providers and disclosure</h2>
        <p>
          We use third-party service providers to host this website and deliver enquiry emails. They process information
          on our behalf only as needed to provide those services. We may also disclose information where required by law.
        </p>
      </div>
      <div>
        <h2>International processing</h2>
        <p>
          Translyx is based in New Zealand and works with organisations internationally. Our service providers may store or
          process information outside New Zealand. Where this occurs, we take reasonable steps to ensure it is protected.
        </p>
      </div>
      <div>
        <h2>Security and retention</h2>
        <p>
          We take reasonable steps to protect personal information from loss and unauthorised access, use or disclosure. We
          keep enquiry information only for as long as it is needed for the purposes described above or as required by law.
        </p>
      </div>
      <div>
        <h2>Your choices</h2>
        <p>
          You may ask to access or correct personal information we hold about you, or ask us to delete it, by contacting us.
          If you have a concern about how we have handled your information, please contact us first so we can try to
          resolve it. New Zealand residents may also contact the Office of the Privacy Commissioner.
        </p>
      </div>
      <div>
        <h2>Changes to this policy</h2>
        <p>We may update this policy from time to time. The current version is always published on this page.</p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>
          {siteConfig.companyName}, {siteConfig.company.location}. Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </LegalPage>
  );
}
