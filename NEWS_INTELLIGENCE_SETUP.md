# News Intelligence — Setup & Operations

The `/news` section is a daily-refreshed market-intelligence feed for diagnostics,
pathology, digital pathology AI, and governed clinical AI. It ships **disabled**:
the page renders from a static seed file until the Gemini backend is switched on.

## Architecture

| Piece | File |
|---|---|
| Types + topic/region taxonomy | `config/news.ts` |
| Static seed items (always available) | `config/news.seed.json` |
| Read / validate / merge / store helpers | `lib/news.ts` |
| Gemini generation (plain fetch, Google Search grounding) | `lib/gemini-news.ts` |
| Cron endpoint (secret-gated, ships disabled) | `app/api/cron/refresh-news/route.ts` |
| Daily schedule (17:00 UTC) | `vercel.json` |
| Page (server component, ISR `revalidate = 3600`) | `app/news/page.tsx` |
| UI | `components/news/NewsCard.tsx`, `components/news/NewsList.tsx` |
| Storage | Vercel Blob — single JSON doc `news/latest.json` |

`getNewsItems()` prefers the Blob document and falls back to the bundled seed on
any failure, so the page is never empty.

## Environment variables (set in Vercel project settings)

```
GEMINI_API_KEY=          # server-side only
NEWS_REFRESH_SECRET=     # any strong random string
CRON_SECRET=             # SAME value as NEWS_REFRESH_SECRET (see note below)
NEWS_REFRESH_ENABLED=false
BLOB_READ_WRITE_TOKEN=   # auto-provisioned when a Blob store is attached
```

**Cron auth note:** Vercel Cron auto-attaches `Authorization: Bearer <CRON_SECRET>`
only from an env var named exactly `CRON_SECRET`. The handler accepts either
`NEWS_REFRESH_SECRET` or `CRON_SECRET`; set both to the same value so scheduled
runs authenticate.

## Status: LIVE

The refresh is **enabled in production** (as of June 2026):

- A **Vercel Blob** store (`translyx-news`) is attached → `BLOB_READ_WRITE_TOKEN`.
- `GEMINI_API_KEY`, `NEWS_REFRESH_SECRET`, and `CRON_SECRET` are set (the last two
  share the same value).
- `NEWS_REFRESH_ENABLED=true`.

If you ever need to pause it, set `NEWS_REFRESH_ENABLED` to anything other than
`true` (or remove `GEMINI_API_KEY`) and redeploy — the endpoint then returns
`200 { "skipped": "disabled" }` and the page falls back to `config/news.seed.json`.

## Schedule — runs many times a day

Two independent triggers hit the same endpoint:

1. **GitHub Actions** (`.github/workflows/refresh-news.yml`) — every **4 hours**
   (`0 */4 * * *`), ~6 runs/day. This is the primary cadence. It curls the
   production endpoint with `Authorization: Bearer <NEWS_REFRESH_SECRET>` (stored
   as the repo secret `NEWS_REFRESH_SECRET`). Also runnable on demand from the
   Actions tab (`workflow_dispatch`).
2. **Vercel Cron** (`vercel.json`) — once daily at **17:00 UTC** as a backstop.
   The Vercel **Hobby** plan caps cron at one run per day, which is why the
   higher cadence lives in GitHub Actions.

The handler dedupes by source URL and caps the store at 50 items, so frequent
runs converge rather than pile up duplicates.

## Manual trigger (testing)

```bash
curl -i -H "Authorization: Bearer $NEWS_REFRESH_SECRET" \
  https://translyx.co.nz/api/cron/refresh-news
```

- No/wrong secret → `401`.
- Disabled → `200 { "skipped": "disabled" }`.
- Enabled → generates via Gemini, validates, dedupes by source URL, merges with the
  stored doc, caps at 50, writes to Blob, and revalidates `/news` and `/`.

**Recommended:** eyeball the first few manual runs before relying on the cron —
verify source URLs are real and summaries are accurate. A future optional admin
UI for manual refresh is noted but not built.

## Editing news without the backend

Edit `config/news.seed.json` directly. Each item must match the `NewsItem` shape in
`config/news.ts` (region in the enum, topics from the whitelist, `https://` source URL).
