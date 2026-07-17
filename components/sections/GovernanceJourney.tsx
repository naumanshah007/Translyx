import { CheckCircle2, Eye, Fingerprint, GitBranch, LockKeyhole, UserCheck } from "lucide-react";

const steps = [
  { icon: LockKeyhole, label: "Protected data", detail: "Sensitive fields remain controlled" },
  { icon: Fingerprint, label: "Safe context", detail: "Only governed context moves forward" },
  { icon: UserCheck, label: "Reviewer gate", detail: "A specialist validates the workflow" },
  { icon: GitBranch, label: "Full lineage", detail: "Evidence and decisions stay connected" },
  { icon: Eye, label: "Visible limits", detail: "Boundaries remain explicit" },
];

export function GovernanceJourney() {
  return (
    <section className="relative overflow-hidden bg-[#0B1430] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(34,211,238,0.12),transparent_62%)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/75">Governance inside the workflow</p>
            <h2 className="mt-4 font-display text-[2.2rem] font-semibold leading-[1.08] text-white sm:text-[3.2rem]">
              Trust is not a disclaimer at the end. It is the path itself.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Every stage is designed to remain inspectable, accountable and anchored to human clinical judgement.
            </p>
          </div>

          <div className="relative mt-14 sm:mt-20">
            <div className="absolute left-[9%] right-[9%] top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent lg:block" />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map(({ icon: Icon, label, detail }, index) => (
                <div key={label} className="group relative rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]">
                  <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-200/25 bg-[#07101F] text-cyan-300 shadow-[0_0_28px_-10px_rgba(34,211,238,0.8)]">
                    <Icon className="h-5 w-5" />
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-300 text-[9px] font-bold text-[#07101F]">
                      {index + 1}
                    </span>
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{label}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Human oversight remains mandatory", "Every decision retains provenance", "Limitations stay visible by design"].map((statement) => (
              <div key={statement} className="flex items-center gap-2.5 rounded-xl border border-emerald-300/15 bg-emerald-300/[0.06] px-4 py-3 text-xs font-medium text-emerald-100/80">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                {statement}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
