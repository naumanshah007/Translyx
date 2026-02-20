#!/usr/bin/env node
/**
 * Syncs remote pipeline images to local public/images/pipeline/<slug>/.
 * Reads from config/pipeline.imageSources.json.
 * Skips if file exists. Logs failures.
 */

import { createWriteStream, mkdirSync, existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SOURCES_PATH = join(__dirname, "../config/pipeline.imageSources.json");
const OUT_DIR = join(__dirname, "../public/images/pipeline");

function getExtension(url) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const match = pathname.match(/\.(jpg|jpeg|png|gif|webp)$/i);
    return match ? `.${match[1].toLowerCase()}` : ".jpg";
  } catch {
    return ".jpg";
  }
}

function get(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;
    const opts = {
      timeout: 15000,
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Translyx-ImageSync/1.0)" },
    };
    const req = protocol.get(url, opts, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const loc = res.headers.location;
        const resolved = loc.startsWith("http") ? loc : new URL(loc, url).href;
        return get(resolved).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
    });
    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("timeout"));
    });
  });
}

async function downloadFile(url, destPath) {
  const data = await get(url);
  mkdirSync(dirname(destPath), { recursive: true });
  const ws = createWriteStream(destPath);
  ws.write(data);
  ws.end();
  return new Promise((resolve, reject) => {
    ws.on("finish", resolve);
    ws.on("error", reject);
  });
}

async function main() {
  const sources = JSON.parse(readFileSync(SOURCES_PATH, "utf8"));

  let ok = 0;
  let skipped = 0;
  const missing = [];

  for (const [slug, urls] of Object.entries(sources)) {
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const ext = getExtension(url);
      const filename = `img-${i + 1}${ext}`;
      const destPath = join(OUT_DIR, slug, filename);

      if (existsSync(destPath)) {
        console.log(`[SKIP] ${slug}/${filename} (exists)`);
        skipped++;
        continue;
      }

      try {
        await downloadFile(url, destPath);
        console.log(`[OK] ${slug}/${filename}`);
        ok++;
      } catch (err) {
        console.error(`[FAIL] ${url}`);
        console.error(`       status: ${err.message}`);
        missing.push({ slug, filename, url });
      }
    }
  }

  console.log(`\nDone: ${ok} downloaded, ${skipped} skipped, ${missing.length} failed`);
  if (missing.length > 0) {
    console.log("\n--- Missing images (will fall back to remote/placeholder) ---");
    missing.forEach(({ slug, filename, url }) => {
      console.log(`  ${slug}/${filename}: ${url}`);
    });
  }
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
