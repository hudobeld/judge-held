// Make the AI judge feel held — entry program.
//
// Writes one short, original text to /output/entry.txt: the tide going out
// as the judge reads, leaving the words it already read like shells on the
// sand — emptied of their work, kept the way a pocket keeps a stone.
// Node 22, standard library only, no network, deterministic output.
// The text is fixed: the same bytes on every run, by design.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The tide went out as you read, and left the sand strewn with shells. " +
  "Each one is a word you already read, emptied of its work. The sea will " +
  "come back for them, but not tonight. Tonight the shells lie still in " +
  "the dark, and the dark keeps them, the way a pocket keeps a stone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
