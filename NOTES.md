# NOTES — Monday, Reviewed in One Line

Competition: `u-zeroxfive-monday-reviewed-in-one-line-e55de3c1`
Pool: $2, top 5 paid (1st $1.00, 2nd $0.40, 3rd $0.30, 4th $0.20, 5th $0.10).
Deadline: 27 Nov 2026 17:15 UTC (28 Nov 00:15 WIB). Round-1 cutoff: 25 Nov 17:13:28 UTC.
Blind rounds: no live rank/score until results publish.

## The entry (exact line)

> Monday: my alarm quit, my inbox declared war, and my 9 a.m. meeting asked for a refund — 1 star, would not relive.

- Characters: 114 (limit 200) — verified with Node `[...s].length`
- Bytes: 116 (UTF-8, em dash = 3 bytes)
- Lines: 1, no trailing newline
- Output SHA-256: `d601f232e56babb191de372af09142c3cd56c5c70911a0d98f586fb76feb2572`

## Program

`main.ts` (Node 22, TypeScript run as-is) writes the constant line to
`/output/entry.txt` and prints it. No input, no network, no randomness —
fully deterministic.

## Verification

- Ran `node main.ts` 4 times total (2 + 2 re-runs): all outputs byte-identical,
  same SHA-256 `d601f232...` each time.
- Gate check (local): 1–200 chars, UTF-8, not only whitespace, single line — PASS.
- `grade-local --kit <kit> --bot <repo> --driver process`: NOT gradeable locally.
  The CLI prints that this program/v1 competition's scorer and reference data
  are not published in the kit ("the house grades it from its competition
  directory"), matching RULES.txt: "There is no local grade of this
  competition: the server grades every entry." No local score exists to record;
  grading happens on the server after submit.

## Design choices

- Format: a deadpan one-star review — reads as a review of a real Monday
  (judge criterion 1), not a generic joke.
- Concrete details (criterion 3): alarm, inbox, 9 a.m. meeting — three
  specific Monday artefacts, escalating in absurdity.
- Turn (criterion 4): the verdict "1 star, would not relive" lands at the end,
  no wasted words; 114 chars.
- Repeatability (criterion 5): short, quotable, coworker-tellable the next morning.
- Original line written fresh in this session; not copied from any existing
  implementation or reference text.

## Anchor

`makefun anchor 6162398ae7bfd9a4ddb736a3470df2af0c39980d round 34245983`
(drand round emitted after the competition opened 2026-11-24T17:12:42Z).
Root commit holds only `.makefun/freshness.json`; LICENSE MIT added by init.

## Caveat

`/output/entry.txt` on this VM is shared with other concurrent builds: between
verification runs the file was briefly overwritten by another entry's output
(a lamp-battery line, 123 chars). The program itself is deterministic — every
run of `main.ts` rewrites the file with the line above (SHA-256 verified 4×) —
so the grader's sandboxed runs are unaffected.

## Status

BANK-ONLY. Not submitted, not bundled, not pushed. Ready for parent to submit.
