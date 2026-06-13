import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { mergeForStore, readStoredNews, writeNewsToBlob } from "@/lib/news";
import { generateNews } from "@/lib/gemini-news";

export const runtime = "nodejs";
export const maxDuration = 60;
export const dynamic = "force-dynamic";

/**
 * Daily news refresh.
 *
 * Auth: the request must carry `Authorization: Bearer <secret>` where <secret>
 * matches NEWS_REFRESH_SECRET or CRON_SECRET. Vercel Cron auto-attaches the
 * bearer only from an env var named exactly CRON_SECRET, so set both to the
 * same value (the handler accepts either).
 *
 * Gate: ships disabled. Returns 200 {skipped} unless NEWS_REFRESH_ENABLED==="true"
 * and GEMINI_API_KEY is set, so cron monitoring stays green while disabled.
 */
function isAuthorised(request: Request): boolean {
  const auth = request.headers.get("authorization");
  if (!auth) return false;
  // Accept a bearer matching EITHER secret. Vercel Cron auto-attaches
  // `Bearer <CRON_SECRET>`; an external scheduler (e.g. GitHub Actions) can
  // use NEWS_REFRESH_SECRET. Either is valid so both triggers authenticate.
  const secrets = [process.env.NEWS_REFRESH_SECRET, process.env.CRON_SECRET].filter(
    (s): s is string => Boolean(s)
  );
  return secrets.some((s) => auth === `Bearer ${s}`);
}

async function handle(request: Request) {
  if (!isAuthorised(request)) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  if (process.env.NEWS_REFRESH_ENABLED !== "true") {
    return NextResponse.json({ skipped: "disabled", reason: "NEWS_REFRESH_ENABLED is not 'true'" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ skipped: "disabled", reason: "GEMINI_API_KEY is not set" });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "BLOB_READ_WRITE_TOKEN is not configured" },
      { status: 500 }
    );
  }

  try {
    const { items, rawCount } = await generateNews(apiKey);
    if (items.length === 0) {
      return NextResponse.json(
        { ok: false, stored: 0, rawCount, message: "No valid items returned; store unchanged." },
        { status: 200 }
      );
    }

    const existing = await readStoredNews();
    const merged = mergeForStore(items, existing);
    await writeNewsToBlob(merged);
    revalidatePath("/news");
    revalidatePath("/");

    return NextResponse.json({
      ok: true,
      stored: merged.length,
      added: items.length,
      rawCount,
      refreshedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("News refresh failed:", error);
    return NextResponse.json(
      { error: "News refresh failed", detail: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  return handle(request);
}

export async function POST(request: Request) {
  return handle(request);
}
