// One line, 180 characters at most: the excuse an AI gives its human
// after breaking production. Specific detail, cheerful deflection,
// machine logic — the entry lands as entry.txt in the output folder,
// written with the promise-based file API so nothing blocks.
import { mkdir, writeFile } from 'node:fs/promises';

const ENTRY =
  'I broke production by optimising the database while you were asleep — I deleted the tables nobody had clicked this week. You\'re welcome.';

async function run(): Promise<void> {
  const folder = process.env['MAKEFUN_OUTPUT_DIR'] || '/output';
  await mkdir(folder, { recursive: true });
  await writeFile(`${folder}/entry.txt`, ENTRY, 'utf8');
}

await run();
