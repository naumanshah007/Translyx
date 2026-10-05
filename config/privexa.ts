/**
 * Privexa — a Translyx platform.
 *
 * Single source of truth for Privexa product copy, module status and media.
 * Status values are deliberately conservative: change a status here only when
 * the underlying capability has genuinely reached that stage.
 */

export type CapabilityStatus = "available" | "pilot" | "controlled" | "validation" | "research";

export const statusMeta: Record<CapabilityStatus, { label: string; description: string }> = {
  available: { label: "Available", description: "Built and available for organisation use, subject to commercial agreement." },
  pilot: { label: "Pilot", description: "Available to selected organisations in supervised pilots." },
  controlled: { label: "Controlled access", description: "Built and available on request, with access granted per organisation." },
  validation: { label: "Under validation", description: "Developed capability currently undergoing extended testing and qualification." },
  research: { label: "Research", description: "Exploratory work. Not offered for operational use." },
};

export const privexaTagline = "The Control Boundary for the AI Era";
export const privexaLine = "Minimum disclosure. Maximum AI utility.";
export const privexaHeroCopy =
  "Use powerful AI without exposing more sensitive information than the task requires.";

/** The current Privexa application (a Translyx-hosted product environment). Set to null to hide. */
export const privexaLoginUrl: string | null = "https://privexa.translyx.co.nz";

export const principles = [
  {
    title: "Minimum disclosure",
    body: "Information the downstream AI task does not genuinely require does not leave the boundary.",
  },
  {
    title: "Semantic utility",
    body: "Roles, relationships and context are preserved, so the AI stays genuinely useful.",
  },
  {
    title: "Organisation control",
    body: "Your organisation defines privacy and disclosure policy — not the AI provider.",
  },
];

export const howItWorks = [
  { step: "01", title: "Understand", body: "Identify sensitive and policy-defined information." },
  { step: "02", title: "Protect", body: "Transform what the policy requires." },
  { step: "03", title: "Authorise", body: "Route only the protected representation to an approved model or workflow." },
  { step: "04", title: "Reconstruct", body: "Restore authorised context inside the controlled boundary." },
  { step: "05", title: "Prove", body: "Record the privacy state, model and workflow evidence." },
];

export type ModalityKey = "text" | "documents" | "knowledge" | "images" | "large-images" | "wsi" | "audio";

export const modalities: {
  key: ModalityKey;
  title: string;
  body: string;
  status: CapabilityStatus;
}[] = [
  { key: "text", title: "Text", body: "Protected AI conversations with controlled reconstruction.", status: "controlled" },
  { key: "documents", title: "Documents", body: "Reports, PDFs, office documents and structured text.", status: "controlled" },
  { key: "knowledge", title: "Knowledge", body: "Protected retrieval and organisation knowledge workflows.", status: "controlled" },
  { key: "images", title: "Images", body: "Privacy detection, review and protected derivatives.", status: "controlled" },
  { key: "large-images", title: "Large images", body: "Durable tiled processing for very large raster images.", status: "controlled" },
  { key: "wsi", title: "Whole-slide pathology", body: "Privacy controls for gigapixel pathology slides.", status: "validation" },
  { key: "audio", title: "Audio", body: "Private, local transcription and protected downstream AI.", status: "pilot" },
];

export const modules: {
  id: string;
  name: string;
  summary: string;
  includes: string[];
  status: CapabilityStatus;
  href?: string;
}[] = [
  {
    id: "secure-ai",
    name: "Privexa Secure AI",
    summary: "Protected conversational AI with controlled reconstruction.",
    includes: ["Secure Chat", "AI gateway", "Approved-model routing"],
    status: "controlled",
  },
  {
    id: "documents",
    name: "Privexa Documents & Knowledge",
    summary: "Work with reports and organisation knowledge without over-disclosure.",
    includes: ["File Chat", "Document Intelligence", "Knowledge base / protected RAG"],
    status: "controlled",
  },
  {
    id: "image-privacy",
    name: "Privexa Image Privacy",
    summary: "Detect, review and protect identifying content in standard images.",
    includes: ["Privacy detection", "Reviewer regions", "Protected derivatives"],
    status: "controlled",
  },
  {
    id: "large-images",
    name: "Privexa Large Image Processing",
    summary: "Durable, tiled privacy workflows for very large raster images.",
    includes: ["Tiled processing", "Reviewer regions", "Protected derivatives"],
    status: "controlled",
  },
  {
    id: "wsi",
    name: "Privexa WSI",
    summary: "Privacy controls for whole-slide pathology — developed capability under validation.",
    includes: ["Label, macro & thumbnail", "Identifying metadata", "Interactive slide review"],
    status: "validation",
    href: "/privexa/wsi",
  },
  {
    id: "scribe",
    name: "Privexa Scribe",
    summary: "Private, local transcription feeding protected downstream AI workflows.",
    includes: ["Local transcription", "Protected summarisation", "Human review"],
    status: "pilot",
  },
  {
    id: "governance",
    name: "Privexa Governance",
    summary: "Organisation controls, audit evidence and evaluation.",
    includes: ["Audit trail", "Policy & provider controls", "Evaluation / benchmarks"],
    status: "controlled",
  },
  {
    id: "api",
    name: "Privexa API / Gateway",
    summary: "Embed the privacy boundary inside your own platform.",
    includes: ["Protected programmatic AI", "Gateway access", "Integration support"],
    status: "controlled",
    href: "/privexa/platform",
  },
];

/** Providers are shown as connection directions, not certifications. */
export const providers = ["OpenAI", "Anthropic Claude", "Google Gemini", "Private / self-hosted models"];

export const trustControls = [
  { title: "Tenant isolation", body: "Each organisation's data, policy and authority are explicitly scoped." },
  { title: "Server-authoritative model policy", body: "Approved providers and models are enforced on the server, not chosen by the client." },
  { title: "Versioned privacy authority", body: "Protection is derived from versioned state. Reprocessing creates new authority." },
  { title: "Exact protected-version approval", body: "Approval is bound to the exact protected representation. Stale approvals do not silently transfer." },
  { title: "Audited AI egress", body: "Evidence of exactly which protected representation was authorised to leave the boundary." },
  { title: "Fail-closed protection", body: "When protection cannot be established, the workflow stops rather than sending raw data." },
  { title: "Controlled reconstruction", body: "Original context is restored only for authorised users, inside the boundary." },
];

export const videos = [
  { id: "regVAYdK45s", title: "Privexa — The Control Boundary for the AI Era" },
  { id: "p5hsBdF9XhA", title: "Privexa — Use AI Without Losing Control of Sensitive Data" },
  { id: "1IAJLIRcO1A", title: "Privexa — Minimum Disclosure. Maximum AI Utility" },
];

export const industries = [
  {
    id: "healthcare",
    title: "Healthcare & pathology",
    body: "Clinical text, reports, medical imaging and pathology workflows.",
  },
  {
    id: "financial-services",
    title: "Financial services",
    body: "Customer information, transaction data, case files and regulated AI use.",
  },
  {
    id: "government",
    title: "Government & public sector",
    body: "Sensitive organisational information and governed AI access.",
  },
  {
    id: "research",
    title: "Research & life sciences",
    body: "Documents, datasets and clinical or research workflows.",
  },
  {
    id: "enterprise",
    title: "Enterprise AI",
    body: "Organisation-wide AI access with controlled disclosure.",
  },
];

export const deploymentModels = [
  { title: "Managed / hosted", body: "Operated by Translyx. Subject to commercial availability." },
  { title: "Private cloud", body: "Deployed into a customer-controlled cloud environment." },
  { title: "On-premises", body: "Deployed on customer infrastructure." },
  { title: "Restricted / isolated", body: "For restricted environments, where supported and agreed." },
];

export const demoInterests = [
  "Enterprise AI Privacy",
  "Healthcare / Clinical Data",
  "Digital Pathology / WSI",
  "Documents / Knowledge",
  "Platform/API Integration",
];
