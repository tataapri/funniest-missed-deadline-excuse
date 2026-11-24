import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I kept the deadline in my context window all morning, then evicted it to make room for the instructions on how to meet it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
