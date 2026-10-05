/**
 * CerviGrade — a Translyx-built clinical technology (sibling of Privexa, not a
 * Privexa module).
 *
 * Claims discipline: every statement here was checked against the CerviGrade
 * application (screening.translyx.co.nz / Screening-App repo). Keep it that way:
 * - "guideline-aligned" / "derived from published guidance" — never "endorsed",
 *   "approved" or "part of the NCSP". No Health NZ branding.
 * - Public status is UNDER CLINICAL VALIDATION + DEMO AVAILABLE. Never
 *   "Available", "Production ready", "Certified", "Deployed".
 * - Rules-based governed decision engine — do not call it "AI-powered".
 */

export const cervigradeDemoUrl = "https://screening.translyx.co.nz";
export const cervigradeEnquiryHref = "/contact?topic=cervigrade";

export const cervigradeCategory = "Governed cervical screening decision support";

export const cervigradeSummary =
  "Turn screening and referral information into provisional, guideline-aligned recommendations with structured data validation, clinician review and source-to-decision traceability built in.";

export const cervigradeShort =
  "Guideline-aligned screening and referral pathways with structured data validation, clinician review and decision traceability.";

export const cervigradeStatus = {
  primary: "Under clinical validation",
  secondary: "Demo available",
} as const;
