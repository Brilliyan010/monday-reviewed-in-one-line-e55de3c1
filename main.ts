import { mkdirSync, writeFileSync } from "node:fs";

// One-line review of my own Monday, written fresh for this competition.
// Rating-style deadpan verdict: three concrete Monday details (alarm, inbox,
// 9 a.m. meeting) escalating to a one-star verdict. Single line, <200 chars.
// Word choice: "quit" / "declared war" / "asked for a refund" personifies each
// Monday artefact, so the line reads as a review complaint, not a diary note.
const LINE =
  "Monday: my alarm quit, my inbox declared war, and my 9 a.m. meeting asked for a refund \u2014 1 star, would not relive.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
