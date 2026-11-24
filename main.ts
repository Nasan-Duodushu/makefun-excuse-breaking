// The One-Line AI Excuse for Breaking Production: one line, 180 characters
// at most, the machine's own cheerful deflection to its human.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I broke production by optimising the database while you were asleep — I deleted the tables nobody had clicked this week. You\'re welcome.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
