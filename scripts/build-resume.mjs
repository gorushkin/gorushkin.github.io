import { spawnSync } from "node:child_process";
import {
  existsSync,
  readFileSync,
  writeFileSync,
  rmSync,
  readdirSync,
  statSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const styleId =
  process.argv.slice(2).find((arg) => arg !== "--") ?? process.env.RESUME_STYLE;

const stylesSource = readFileSync(
  join(rootDir, "src/data/resumeStyles.ts"),
  "utf8",
);
const styleIds = [...stylesSource.matchAll(/id:\s*"([^"]+)"/g)].map(
  (match) => match[1],
);

if (!styleId) {
  console.error(`Usage: npm run build:resume -- <style>`);
  console.error(`Available styles: ${styleIds.join(", ")}`);
  process.exit(1);
}

if (!styleIds.includes(styleId)) {
  console.error(
    `Unknown style "${styleId}". Available styles: ${styleIds.join(", ")}`,
  );
  process.exit(1);
}

const build = spawnSync("pnpm", ["build"], {
  cwd: rootDir,
  env: {
    ...process.env,
    RESUME_STYLE: styleId,
    SINGLE_RESUME_BUILD: "true",
  },
  stdio: "inherit",
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const distDir = join(rootDir, "dist");
const targetHtml = join(distDir, "index.html");

if (!existsSync(targetHtml)) {
  console.error(`Expected build output was not found: ${targetHtml}`);
  process.exit(1);
}

const html = readFileSync(targetHtml, "utf8")
  .replaceAll('href="/_astro/', 'href="./_astro/')
  .replaceAll('src="/_astro/', 'src="./_astro/')
  .replaceAll('href="/favicon.', 'href="./favicon.')
  .replaceAll('src="/favicon.', 'src="./favicon.');

writeFileSync(targetHtml, html);

for (const entry of readdirSync(distDir)) {
  const entryPath = join(distDir, entry);
  if (
    entry === "index.html" ||
    entry === "_astro" ||
    entry.startsWith("favicon.")
  ) {
    continue;
  }

  if (statSync(entryPath).isDirectory()) {
    rmSync(entryPath, { recursive: true, force: true });
  } else if (entry.endsWith(".html")) {
    rmSync(entryPath, { force: true });
  }
}

console.log(`Built resume style "${styleId}" to dist/index.html`);
