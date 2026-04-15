// One-off script: generates favicon assets from /favicon-source.png into /src/app.
// Run with: node scripts/gen-favicon.mjs
import sharp from "sharp";
import { mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const src = join(root, "favicon-source.png");
const appDir = join(root, "src", "app");

if (!existsSync(src)) {
  console.error(`Missing ${src}`);
  process.exit(1);
}

await mkdir(appDir, { recursive: true });

// The source is a 2000x2000 RGBA image with transparent background.
// Next.js App Router auto-wires these file-name conventions:
//   src/app/icon.png           → <link rel="icon">
//   src/app/apple-icon.png     → <link rel="apple-touch-icon">
const targets = [
  { file: "icon.png", size: 512 },
  { file: "apple-icon.png", size: 180 },
];

for (const { file, size } of targets) {
  const out = join(appDir, file);
  await sharp(src)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`wrote ${out}`);
}

// Remove the old scaffold favicon.ico — icon.png supersedes it.
const oldFavicon = join(appDir, "favicon.ico");
if (existsSync(oldFavicon)) {
  await rm(oldFavicon);
  console.log(`removed ${oldFavicon}`);
}
