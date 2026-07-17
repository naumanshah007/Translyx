"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ChipButton } from "@/components/ui/Chip";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const inquiryTypes = [
  "Discuss Aiforia",
  "Discuss Algoscope",
  "Discuss Pipeline",
  "Partner with Translyx",
  "Request Walkthrough",
  "General inquiry",
];

/** Maps ?topic= deep-links (from CTAs across the site) to a pre-selected inquiry type. */
const topicToInquiry: Record<string, string> = {
  aiforia: "Discuss Aiforia",
  algoscope: "Discuss Algoscope",
  pipeline: "Discuss Pipeline",
  partner: "Partner with Translyx",
  walkthrough: "Request Walkthrough",
};

/** Isolated in its own Suspense boundary so the useSearchParams() client-only bailout doesn't pull the whole form out of the server-rendered HTML. */
function TopicPrefill({ onTopic }: { onTopic: (inquiry: string) => void }) {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic");
  useEffect(() => {
    if (topic && topicToInquiry[topic]) onTopic(topicToInquiry[topic]);
  }, [topic, onTopic]);
  return null;
}

const inputClass =
  "w-full rounded-xl border border-slate-200/80 bg-[#F8FAFD] px-4 py-3 text-sm text-[#0F1C3F] shadow-inner shadow-slate-900/[0.02] transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-400/12";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
    company_website: "", // honeypot — must stay empty for real users
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleTopic = useCallback((inquiry: string) => {
    setFormData((prev) => (prev.inquiryType ? prev : { ...prev, inquiryType: inquiry }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await response.json();
      } catch (e) {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error("Server error. Please check Vercel logs.");
      }

      if (!response.ok) {
        const errorMessage = data?.error || `Failed to send message (Status: ${response.status})`;
        console.error("API error:", errorMessage, data);
        throw new Error(errorMessage);
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", organization: "", inquiryType: "", message: "", company_website: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/40 p-8 text-center sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-7 w-7 text-emerald-600" />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-[#0F1C3F]">Message sent</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Thank you for reaching out. Here&apos;s what happens next:
        </p>
        <ul className="mx-auto mt-5 max-w-sm space-y-2.5 text-left text-sm text-slate-600">
          {[
            "A member of the Translyx team reviews your message",
            "We follow up by email within two business days",
            "If relevant, we arrange a walkthrough tailored to your context",
          ].map((step, i) => (
            <li key={step} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ul>
        <Button variant="secondary" className="mt-6" onClick={() => setSubmitStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_32px_90px_-48px_rgba(15,28,63,0.48)] sm:p-9">
      <div className="pointer-events-none absolute inset-x-14 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-200/25 blur-3xl" />
      <div className="relative">
      <Suspense fallback={null}>
        <TopicPrefill onTopic={handleTopic} />
      </Suspense>

      <h2 className="font-display text-xl font-semibold text-[#0F1C3F]">Send a message</h2>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        {/* Honeypot — hidden from users, catches bots. Not announced to AT. */}
        <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="company_website">Leave this field empty</label>
          <input
            type="text"
            id="company_website"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.company_website}
            onChange={(e) => setFormData({ ...formData, company_website: e.target.value })}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-[#0F1C3F]">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[#0F1C3F]">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="organization" className="mb-1.5 block text-sm font-semibold text-[#0F1C3F]">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className={inputClass}
          />
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-[#0F1C3F]">What would you like to discuss?</p>
          <div className="flex flex-wrap gap-2">
            {inquiryTypes.map((t) => (
              <ChipButton
                key={t}
                active={formData.inquiryType === t}
                onClick={() => setFormData({ ...formData, inquiryType: t })}
              >
                {t}
              </ChipButton>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[#0F1C3F]">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={cn(inputClass, "resize-none")}
          />
        </div>

        {submitStatus === "error" && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            Something went wrong. Please try again later or contact us directly at{" "}
            <a href={`mailto:${siteConfig.company.email}`} className="underline">
              {siteConfig.company.email}
            </a>
            .
          </div>
        )}

        <Button type="submit" variant="gradient" size="lg" className="w-full" isLoading={isSubmitting}>
          Send Message
        </Button>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 border-t border-slate-100 pt-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            Response within two business days
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" />
            Used only to respond to your inquiry
          </span>
        </div>
      </form>
      </div>
    </div>
  );
}
