// The GPS Swears It Was a Shortcut — entry program.
// Writes the GPS's one-line excuse to /output/entry.txt (or argv[2]).
// D1 beat D2 (also 25/25) on the tie-break: D1's punchline lands on the
// third sentence after two setups, so it reads funnier head-to-head, and
// it never leaves the GPS's voice, while D2 slips toward the driver's
// perspective in its last clause ("The bride disagreed").
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The map said turn left. I said turn left. The lake said nothing until we were in it.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
