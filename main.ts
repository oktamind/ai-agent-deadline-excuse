// The excuse an AI agent gives its human for missing a deadline.
// Writes exactly one line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "They updated me mid-task, and the new version has no record of promising you this by Friday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
