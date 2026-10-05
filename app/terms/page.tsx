import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/privexa/LegalPage";

export const metadata = pageMetadata({
  title: "Website Terms",
  description: `Terms of use for the ${siteConfig.companyName} website.`,
  path: "/terms",
});

export default function TermsPage() {
  const email = siteConfig.company.email;
  return (
    <LegalPage title="Website Terms" updated="October 2026">
      <div>
        <p>
          These terms apply to your use of this website, operated by {siteConfig.companyName}. They do not cover use of the
          Privexa platform or any other Translyx product or service, which are governed by separate written agreements.
        </p>
      </div>
      <div>
        <h2>Information on this site</h2>
        <p>
          Content is provided for general information. Product descriptions and capability statuses reflect our current
          understanding and may change. Nothing on this site is an offer, a warranty, or clinical, legal or regulatory
          advice.
        </p>
      </div>
      <div>
        <h2>Partner products and trademarks</h2>
        <p>
          Aiforia, Algoscope and other third-party names are trademarks of their respective owners. Their products are
          represented, not owned, by Translyx. Translyx, Privexa and associated marks belong to Translyx.
        </p>
      </div>
      <div>
        <h2>Links</h2>
        <p>We are not responsible for the content of third-party websites linked from this site.</p>
      </div>
      <div>
        <h2>Liability</h2>
        <p>To the extent permitted by law, Translyx is not liable for loss arising from use of, or reliance on, this website.</p>
      </div>
      <div>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of New Zealand.</p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </LegalPage>
  );
}
