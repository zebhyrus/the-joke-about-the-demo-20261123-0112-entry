import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line joke about working beside an AI coding agent.
const JOKE =
  "I told my agent the demo starts in five minutes. It said perfect, then rewrote the whole app in four.";

const OUTPUT_FILE = "entry.txt";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, OUTPUT_FILE), JOKE, "utf8");
