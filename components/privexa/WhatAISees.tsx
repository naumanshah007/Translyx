"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Deterministic, local-only illustration of Privexa's protect → AI → reconstruct
 * loop. No model is called; values are fictional.
 */

type EntityType = "person" | "account" | "email" | "phone" | "address" | "date" | "amount" | "custom";

const entityLabels: Record<EntityType, string> = {
  person: "Person",
  account: "Account",
  email: "Email",
  phone: "Phone",
  address: "Address",
  date: "Date",
  amount: "Financial amount",
  custom: "Custom entity",
};

const placeholderPrefix: Record<EntityType, string> = {
  person: "name",
  account: "account",
  email: "email",
  phone: "phone",
  address: "address",
  date: "date",
  amount: "amount",
  custom: "project",
};

type Segment = string | { text: string; type: EntityType };

const source: Segment[] = [
  "Please review ",
  { text: "Sarah Patel", type: "person" },
  "'s loan application, received ",
  { text: "14 March 2026", type: "date" },
  ". Account ",
  { text: "12-8839-2219234-00", type: "account" },
  " has a balance of ",
  { text: "$86,420", type: "amount" },
  ". She lives at ",
  { text: "42 Kauri Street, Ponsonby", type: "address" },
  " and can be reached on ",
  { text: "021 555 0148", type: "phone" },
  " or ",
  { text: "sarah@example.com", type: "email" },
  ". Reference: ",
  { text: "Project Harbour", type: "custom" },
  ".",
];

/** The fictional AI reply — written against placeholders only. */
const reply: Segment[] = [
  "Summary for ",
  { text: "Sarah Patel", type: "person" },
  ": the application dated ",
  { text: "14 March 2026", type: "date" },
  " references account ",
  { text: "12-8839-2219234-00", type: "account" },
  " with a balance of ",
  { text: "$86,420", type: "amount" },
  ". Recommend verifying contact details before proceeding under ",
  { text: "Project Harbour", type: "custom" },
  ".",
];

const allTypes = Object.keys(entityLabels) as EntityType[];

function buildPlaceholders() {
  const counters: Partial<Record<EntityType, number>> = {};
  const map = new Map<string, string>();
  for (const seg of source) {
    if (typeof seg === "string" || map.has(seg.text)) continue;
    const n = (counters[seg.type] ?? 0) + 1;
    counters[seg.type] = n;
    map.set(seg.text, `${placeholderPrefix[seg.type]}_${String(n).padStart(3, "0")}`);
  }
  return map;
}

function Pane({
  label,
  caption,
  children,
  accent,
}: {
  label: string;
  caption: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border p-5 sm:p-6",
        accent ? "border-cyan-300/30 bg-cyan-300/[0.04]" : "border-white/10 bg-white/[0.02]"
      )}
    >
      <p className={cn("text-[10px] font-semibold uppercase tracking-[0.2em]", accent ? "text-cyan-300" : "text-slate-500")}>
        {label}
      </p>
      <p className="mt-1 text-xs text-slate-500">{caption}</p>
      <div className="mt-4 font-mono text-[13px] leading-[1.9] text-slate-200">{children}</div>
    </div>
  );
}

export function WhatAISees() {
  const [enabled, setEnabled] = useState<Set<EntityType>>(new Set(allTypes));
  const placeholders = useMemo(buildPlaceholders, []);

  const toggle = (t: EntityType) =>
    setEnabled((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });

  const render = (segments: Segment[], mode: "original" | "protected" | "restored") =>
    segments.map((seg, i) => {
      if (typeof seg === "string") return <span key={i}>{seg}</span>;
      const on = enabled.has(seg.type);
      if (mode === "protected" && on) {
        return (
          <span
            key={i}
            className="rounded bg-cyan-300/15 px-1 py-0.5 text-cyan-200 ring-1 ring-cyan-300/30 transition-colors duration-300"
          >
            {placeholders.get(seg.text)}
          </span>
        );
      }
      if (mode === "protected" && !on) {
        return (
          <span key={i} className="rounded bg-amber-300/10 px-1 py-0.5 text-amber-200 ring-1 ring-amber-300/25">
            {seg.text}
          </span>
        );
      }
      return (
        <span
          key={i}
          className={cn(
            "rounded px-1 py-0.5 transition-colors duration-300",
            mode === "restored" ? "bg-emerald-300/10 text-emerald-200" : on ? "bg-white/[0.08] text-white" : "text-slate-200"
          )}
        >
          {seg.text}
        </span>
      );
    });

  const disclosed = allTypes.filter((t) => !enabled.has(t));

  return (
    <div>
      <fieldset>
        <legend className="text-sm font-medium text-slate-300">Organisation policy — protect these entity types:</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {allTypes.map((t) => {
            const on = enabled.has(t);
            return (
              <button
                key={t}
                type="button"
                role="switch"
                aria-checked={on}
                onClick={() => toggle(t)}
                className={cn(
                  "min-h-[40px] rounded-full border px-4 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300",
                  on
                    ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-100"
                    : "border-white/15 text-slate-400 hover:border-white/30 hover:text-slate-200"
                )}
              >
                {entityLabels[t]}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <Pane label="Original" caption="Inside your organisation">
          {render(source, "original")}
        </Pane>
        <Pane label="AI receives" caption="The protected representation that leaves the boundary" accent>
          <div aria-live="polite">{render(source, "protected")}</div>
        </Pane>
        <Pane label="Authorised user sees" caption="AI response, reconstructed inside the boundary">
          {render(reply, "restored")}
        </Pane>
      </div>

      <p className="mt-5 text-xs text-slate-500" aria-live="polite">
        {disclosed.length === 0
          ? "Every selected entity type is replaced before AI egress. Placeholders keep roles consistent, so the AI can still reason about the case."
          : `Policy allows ${disclosed.map((t) => entityLabels[t].toLowerCase()).join(", ")} to be disclosed — shown in amber. Your organisation decides.`}{" "}
        Illustrative example with fictional data; no AI model is called.
      </p>
    </div>
  );
}
