"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { demoInterests } from "@/config/privexa";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const interestFromParam: Record<string, string> = {
  enterprise: "Enterprise AI Privacy",
  healthcare: "Healthcare / Clinical Data",
  wsi: "Digital Pathology / WSI",
  documents: "Documents / Knowledge",
  platform: "Platform/API Integration",
  trial: "Enterprise AI Privacy",
};

function InterestPrefill({ onInterest, onTrial }: { onInterest: (v: string) => void; onTrial: () => void }) {
  const params = useSearchParams();
  const interest = params.get("interest");
  useEffect(() => {
    if (interest && interestFromParam[interest]) onInterest(interestFromParam[interest]);
    if (interest === "trial") onTrial();
  }, [interest, onInterest, onTrial]);
  return null;
}

const field =
  "w-full rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors hover:border-white/25 focus:border-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/25";
const label = "mb-2 block text-xs font-medium text-slate-300";

export function DemoForm() {
  const [data, setData] = useState({
    name: "",
    organization: "",
    email: "",
    role: "",
    country: "",
    interest: "",
    message: "",
    company_website: "",
  });
  const [trial, setTrial] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "privexa-demo",
          inquiryType: `Privexa ${trial ? "trial access" : "demo"}: ${data.interest || "Unspecified"}`,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-emerald-300/25 p-8 text-center sm:p-10" role="status">
        <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-300" aria-hidden />
        <h2 className="mt-5 text-xl font-semibold text-white">Request received</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
          A member of the Translyx team will reply by email, usually within two business days, to arrange a session around
          your scenario.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-6" noValidate={false}>
      <Suspense fallback={null}>
        <InterestPrefill
          onInterest={(v) => setData((d) => (d.interest ? d : { ...d, interest: v }))}
          onTrial={() => setTrial(true)}
        />
      </Suspense>

      <fieldset>
        <legend className={label}>What would you like to see?</legend>
        <div className="flex flex-wrap gap-2">
          {demoInterests.map((i) => (
            <label
              key={i}
              className={cn(
                "inline-flex min-h-[40px] cursor-pointer items-center rounded-full border px-4 text-xs font-semibold transition-colors focus-within:ring-2 focus-within:ring-cyan-300",
                data.interest === i
                  ? "border-cyan-300/60 bg-cyan-300/10 text-cyan-100"
                  : "border-white/15 text-slate-400 hover:border-white/30 hover:text-slate-200"
              )}
            >
              <input
                type="radio"
                name="interest"
                value={i}
                checked={data.interest === i}
                onChange={set("interest")}
                className="sr-only"
              />
              {i}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="d-name" className={label}>Name</label>
          <input id="d-name" required autoComplete="name" className={field} value={data.name} onChange={set("name")} />
        </div>
        <div>
          <label htmlFor="d-org" className={label}>Organisation</label>
          <input id="d-org" required autoComplete="organization" className={field} value={data.organization} onChange={set("organization")} />
        </div>
        <div>
          <label htmlFor="d-email" className={label}>Business email</label>
          <input id="d-email" type="email" required autoComplete="email" className={field} value={data.email} onChange={set("email")} />
        </div>
        <div>
          <label htmlFor="d-role" className={label}>Role</label>
          <input id="d-role" autoComplete="organization-title" className={field} value={data.role} onChange={set("role")} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="d-country" className={label}>Country / region</label>
          <input id="d-country" autoComplete="country-name" className={field} value={data.country} onChange={set("country")} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="d-msg" className={label}>
            Message <span className="text-slate-500">(optional)</span>
          </label>
          <textarea id="d-msg" rows={4} className={cn(field, "resize-y")} value={data.message} onChange={set("message")} />
        </div>
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-300">
        <input
          type="checkbox"
          checked={trial}
          onChange={(e) => setTrial(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-white/30 bg-transparent accent-cyan-300"
        />
        I&apos;m also interested in organisation trial access.
      </label>

      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label htmlFor="d-website">Website</label>
        <input id="d-website" tabIndex={-1} autoComplete="off" value={data.company_website} onChange={set("company_website")} />
      </div>

      {status === "error" && (
        <p className="text-sm text-amber-200" role="alert">
          Something went wrong sending your request. Please try again, or email {siteConfig.company.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-cyan-300 px-8 text-sm font-semibold text-[#04121A] transition-colors hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B10] disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request Demo"}
      </button>
      <p className="text-xs text-slate-500">We use these details only to respond to your request. See our <a href="/privacy" className="underline hover:text-slate-300">Privacy Policy</a>.</p>
    </form>
  );
}
