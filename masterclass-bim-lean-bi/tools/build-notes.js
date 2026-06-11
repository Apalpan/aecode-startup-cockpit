#!/usr/bin/env node
/* ============================================================
   Genera speaker-notes.md desde las definiciones de slides y
   valida el deck: 60 slides, todas con título, notas y HTML
   renderizable. Uso:  node tools/build-notes.js
   ============================================================ */
"use strict";
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");

// Stub del registro (en browser lo provee engine.js)
globalThis.DECK = { slides: [], add(d) { this.slides.push(d); } };

// Núcleo (componentes y datos se auto-adjuntan a globalThis)
require(path.join(root, "src/core/components.js"));
require(path.join(root, "src/core/charts.js"));
require(path.join(root, "src/data/program.js"));

const BLOCKS = [
  "", "Bloque 1 — Apertura e impacto", "Bloque 2 — El mapa mental del diplomado",
  "Bloque 3 — Marcos colaborativos: BIM, Lean, VDC, IPD", "Bloque 4 — Obra, oficina técnica y CDE",
  "Bloque 5 — Herramientas BIM para control", "Bloque 6 — Business Intelligence y dashboards",
  "Bloque 7 — IA, automatización y tecnologías emergentes", "Bloque 8 — Cierre y llamado a la acción",
];

for (let i = 1; i <= 8; i++) require(path.join(root, `src/slides/block${i}.js`));

const S = globalThis.DECK.slides;
let errors = [];
if (S.length !== 60) errors.push(`Se esperaban 60 slides, hay ${S.length}`);
S.forEach((s, i) => {
  if (!s.title) errors.push(`Slide ${i + 1} sin título`);
  if (!s.notes || s.notes.length < 40) errors.push(`Slide ${i + 1} sin notas suficientes`);
  if (!s.block || s.block < 1 || s.block > 8) errors.push(`Slide ${i + 1} sin bloque válido`);
  try {
    const html = typeof s.html === "function" ? s.html() : s.html;
    if (!html || html.length < 50) errors.push(`Slide ${i + 1}: HTML vacío o sospechoso`);
  } catch (e) {
    errors.push(`Slide ${i + 1}: error al renderizar HTML — ${e.message}`);
  }
});

if (errors.length) {
  console.error("✗ Validación fallida:\n" + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}

let md = `# Speaker notes — Clase magistral
## ${globalThis.PROGRAM.name}

> Generado automáticamente desde \`src/slides/*.js\` con \`node tools/build-notes.js\`.
> Cada nota incluye: idea central, cómo explicarla (30-60 s), ejemplo práctico y transición.
> En la presentación, pulsa **N** para ver estas notas en pantalla.

Duración objetivo: **90–120 minutos** (≈ 1,5–2 min por slide).

---
`;
let lastBlock = 0;
S.forEach((s, i) => {
  if (s.block !== lastBlock) { md += `\n## ${BLOCKS[s.block]}\n`; lastBlock = s.block; }
  md += `\n### Slide ${String(i + 1).padStart(2, "0")} — ${s.title}\n\n${s.notes.trim()}\n`;
});

fs.writeFileSync(path.join(root, "speaker-notes.md"), md);
console.log(`✓ Deck válido: ${S.length} slides, todas con título, notas y HTML renderizable.`);
console.log("✓ speaker-notes.md generado.");
