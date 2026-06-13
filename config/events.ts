/**
 * Upcoming sector events on the Translyx radar — conferences, forums, and
 * summits relevant to diagnostics, pathology, and clinical AI in NZ/Oceania
 * and globally.
 *
 * Rules:
 *  - Every entry needs an organiser sourceUrl; listing an event never implies
 *    Translyx attendance, sponsorship, or affiliation.
 *  - Where exact dates are unconfirmed, say so in dateLabel ("dates TBC") and
 *    leave displayDay unset — the UI then shows the month block without a day
 *    and skips the countdown.
 *  - Past events are filtered out automatically by getUpcomingEvents().
 */

export type EventType = "conference" | "forum" | "summit" | "webinar";

export interface UpcomingEvent {
  id: string;
  title: string;
  /** Human-readable date line, e.g. "2–3 September 2026" or "December 2026 · dates TBC". */
  dateLabel: string;
  /** Day(s) for the calendar block, e.g. "2–3". Omit when dates are unconfirmed. */
  displayDay?: string;
  /** ISO date used for sorting, countdown, and auto-expiry (month start for TBC events). */
  startDate: string;
  /** ISO date after which the event is hidden; defaults to startDate. */
  endDate?: string;
  location: string;
  type: EventType;
  description: string;
  sourceUrl: string;
  /** Why this event matters for Translyx, its partners, or its pipeline. */
  relevance?: string;
}

export const eventTypeLabels: Record<EventType, string> = {
  conference: "Conference",
  forum: "Forum",
  summit: "Summit",
  webinar: "Webinar",
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "colab-2026",
    title: "Co:Lab 2026 — Pathology Laboratory Sector Forum",
    dateLabel: "2–3 September 2026",
    displayDay: "2–3",
    startDate: "2026-09-02",
    endDate: "2026-09-03",
    location: "Wellington, New Zealand",
    type: "forum",
    description:
      "New Zealand's annual gathering for the pathology laboratory sector — leaders, clinicians, and innovators on the future of lab medicine.",
    sourceUrl: "https://www.colabforum.nz/",
    relevance:
      "The key NZ pathology sector event for Translyx partnerships, stakeholder engagement, and regional adoption work.",
  },
  {
    // TODO: confirm 2026 programme dates with the organiser before relying on this entry.
    id: "hinz-digital-health-week-2026",
    title: "HiNZ Digital Health Week 2026",
    dateLabel: "November 2026 · dates TBC",
    startDate: "2026-11-01",
    endDate: "2026-11-30",
    location: "New Zealand",
    type: "conference",
    description:
      "Health Informatics New Zealand's annual digital health conference — the largest digital health gathering in the country.",
    sourceUrl: "https://www.hinz.org.nz/",
    relevance:
      "Where NZ digital health decision-makers convene — directly relevant to governed clinical AI adoption pathways.",
  },
  {
    // TODO: confirm 2026 edition dates with the organiser before relying on this entry.
    id: "dp-ai-congress-europe-2026",
    title: "Digital Pathology & AI Congress: Europe",
    dateLabel: "December 2026 · dates TBC",
    startDate: "2026-12-01",
    endDate: "2026-12-31",
    location: "London, United Kingdom",
    type: "conference",
    description:
      "Leading European congress on digital pathology adoption, AI-assisted image analysis, and laboratory transformation.",
    sourceUrl: "https://www.global-engage.com/event/digital-pathology/",
    relevance:
      "Tracks the global digital pathology AI landscape that Translyx represents in New Zealand through partners like Aiforia.",
  },
  {
    // TODO: confirm 2027 dates and host city with RCPA before relying on this entry.
    id: "rcpa-pathology-update-2027",
    title: "RCPA Pathology Update 2027",
    dateLabel: "February 2027 · dates TBC",
    startDate: "2027-02-01",
    endDate: "2027-02-28",
    location: "Australia",
    type: "conference",
    description:
      "The Royal College of Pathologists of Australasia's flagship annual scientific meeting for pathologists across Australasia.",
    sourceUrl: "https://www.rcpa.edu.au/",
    relevance:
      "Australasia's premier pathology meeting — central to Translyx's Australia and Oceania expansion focus.",
  },
];

/** Future (or in-progress) events, soonest first. */
export function getUpcomingEvents(now: Date = new Date()): UpcomingEvent[] {
  const cutoff = now.getTime() - 24 * 3600 * 1000; // keep events through their final day
  return [...upcomingEvents]
    .filter((e) => Date.parse(e.endDate ?? e.startDate) >= cutoff)
    .sort((a, b) => Date.parse(a.startDate) - Date.parse(b.startDate));
}
