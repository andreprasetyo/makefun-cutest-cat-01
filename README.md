# Cutest Cat — make.fun entry (cutest-cat-01)

A very cute 3D-rendered ginger kitten with huge sparkling amber eyes, a
slight head tilt, clumsy oversized paws with pink pads, a curled tail, and a
tiny blue ball of yarn — sitting front and centre on a soft cream
background, readable even at ~300 px.

## How it works

`main.ts` (Node 22, standard library only) decodes `entry.b64` — the cat
picture stored as a single line of base64 — and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). The picture is kept
as base64 text because the GitHub push path available here cannot upload
binary files; the decode is byte-exact, so repeated runs produce
identical output.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entrypoint
- `entry.b64` — the cat picture as one line of base64 (JPEG bytes, 1024×1024, ~143 KB once decoded)
- `LICENSE` — MIT
