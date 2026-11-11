// cutest-cat-01 entry (Node 22, standard library only).
// The cat picture is stored as single-line base64 in entry.b64 (the GitHub
// connector cannot push binary files); this program decodes it to
// /output/entry.png so the judge sees exactly those bytes.
// Run locally: MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.b64', import.meta.url);
// Single line of base64; strip any whitespace defensively.
const b64 = readFileSync(src, 'utf8').replace(/\s+/g, '');
const bytes = Buffer.from(b64, 'base64');
// Fail fast on corrupt data: the decoded bytes must be a JPEG image.
if (bytes.length === 0 || bytes[0] !== 0xff || bytes[1] !== 0xd8) {
  throw new Error('entry.b64 did not decode to a JPEG image');
}
mkdirSync(outDir, { recursive: true });
// Byte-exact decode: the same bytes out every run, so repeated runs
// are deterministic.
writeFileSync(join(outDir, 'entry.png'), bytes);
