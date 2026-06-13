import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import type { UpcomingEvent } from "@/config/events";
import { eventTypeLabels } from "@/config/events";
import { timeUntil } from "@/lib/utils";

const typeChip: Record<string, string> = {
  conference: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  forum: "border-violet-400/30 bg-violet-400/10 text-violet-200",
  summit: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  webinar: "border-amber-400/30 bg-amber-400/10 text-amber-200",
};

function monthAbbrev(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-NZ", { month: "short" }).toUpperCase();
}

function EventCard({ event }: { event: UpcomingEvent }) {
  return (
    <a
      href={event.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full min-w-[280px] snap-start flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06] sm:min-w-0"
    >
      <div className="flex items-start gap-4">
        {/* Calendar date block */}
        <div className="flex shrink-0 flex-col items-center overflow-hidden rounded-xl border border-white/10 bg-[#0B1530] text-center">
          <span className="w-full bg-cyan-400/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
            {monthAbbrev(event.startDate)}
          </span>
          <span className="px-3 py-1.5 font-display text-xl font-semibold leading-none text-white">
            {event.displayDay ?? "—"}
          </span>
        </div>
        <div className="min-w-0">
          <span
            className={`inline-flex rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${
              typeChip[event.type] ?? typeChip.conference
            }`}
          >
            {eventTypeLabels[event.type]}
          </span>
          <h3 className="mt-1.5 font-display text-[15px] font-semibold leading-snug text-white">
            {event.title}
          </h3>
        </div>
      </div>

      <p className="mt-3 text-[13px] leading-relaxed text-slate-300">{event.description}</p>

      {event.relevance && (
        <p className="mt-3 rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-[11px] leading-relaxed text-slate-400">
          {event.relevance}
        </p>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-4 text-[11px] text-slate-400">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5 text-slate-500" />
          {event.dateLabel}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-slate-500" />
          {event.location}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
        <span className="text-[11px] font-semibold text-cyan-300">{timeUntil(event.startDate)}</span>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 transition-colors group-hover:text-white">
          Event details
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}

export function UpcomingEvents({ events }: { events: UpcomingEvent[] }) {
  if (events.length === 0) return null;

  return (
    <section id="events" aria-label="Upcoming events" className="relative overflow-hidden bg-[#0A1429] py-16 sm:py-20 scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 aurora opacity-30" />
      <div className="pointer-events-none absolute inset-0 pattern-grid text-white/[0.03]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              <CalendarDays className="h-3.5 w-3.5" />
              On the Translyx radar
            </span>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Upcoming events in diagnostics &amp; pathology
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
              Conferences, forums, and summits across New Zealand, Australia, and globally that shape the
              diagnostics, digital pathology, and clinical-AI landscape Translyx works in.
            </p>
          </div>

          {/* Mobile: horizontal snap rail · Desktop: grid */}
          <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <p className="mt-6 text-[11px] leading-relaxed text-slate-500">
            Event listings are for awareness only and do not imply Translyx attendance, sponsorship, or
            affiliation. Confirm dates and details with each organiser.
          </p>
        </div>
      </div>
    </section>
  );
}
