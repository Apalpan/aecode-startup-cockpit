# Masterclass — BIM, Lean y BI aplicado al Seguimiento y Control de Obra

Presentación web interactiva (60 slides) para la **clase magistral introductoria**
del Diplomado Internacional *BIM, Lean y BI aplicado al Seguimiento y Control de
Obra* de **AECODE**. Pensada para una sesión en vivo de 90–120 minutos en laptop,
proyector o tablet.

> **Edición clara (v2)** — estética editorial premium AECODE: papel cálido + tinta
> grafito + bronce, motor de presentación propio sin dependencias, gráficos SVG a
> medida, notas de expositor integradas y export a PDF.

## Qué se construyó

- **60 slides en 8 bloques narrativos**: problema de la industria → mapa del
  diplomado → marcos (BIM/Lean/VDC/IPD) → CDE y obra → herramientas → BI →
  IA/emergentes → cierre.
- **Interactividad de slide**: iceberg del costo invisible con 6 estratos
  clickeables y datos con fuente (S07), autoevaluación de madurez digital con ruta
  sugerida por nivel (S15), calculadora en vivo del costo del reporte manual (S42),
  mapa mundial de adopción BIM (S09), ecosistema clickeable (S11), simulación del
  flujo de información (S28), comparador antes/después (S59), tarjetas expandibles,
  dashboards simulados y tooltips en diagramas y KPIs.
- **Motor del deck (v2)**: paleta de comandos `Ctrl+K` (buscar slide o acción, sin
  acentos), barra de progreso segmentada por bloques (clic = saltar), saltos por
  bloque (teclas `1–8`), contadores animados en las cifras, cronómetro de sesión
  (`T`), pantalla completa (`F`), flechas en pantalla para tablet, navegación por
  teclado y swipe, índice lateral, overview en grilla, deep-links (`#/n`), notas
  del expositor, ayuda, export a PDF y soporte de `prefers-reduced-motion`.
- **Documentación**: `DECISIONES.md` (arquitectura), `FUENTES.md` (trazabilidad de
  datos), `speaker-notes.md` (guion completo del expositor).

## Cómo correr localmente

No hay build ni dependencias. Cualquiera de estas opciones:

```bash
# Opción 1: servidor simple (recomendado)
cd masterclass-bim-lean-bi
python3 -m http.server 8080        # → http://localhost:8080

# Opción 2: doble clic en index.html (funciona offline; las fuentes
#           Google degradan a system-ui si no hay internet)
```

## Navegación

| Tecla | Acción |
|---|---|
| `→` / `Espacio` / `←` | Avanzar / retroceder |
| `Ctrl+K` (o `K`) | Paleta de comandos: buscar slide, bloque o acción |
| `1` … `8` | Saltar al inicio del bloque N |
| `O` o `Esc` | Vista general (grilla de 60 slides) |
| `M` | Índice lateral por bloques |
| `N` o `S` | Notas del expositor de la slide actual |
| `T` | Cronómetro de sesión (clic sobre él = reiniciar) |
| `F` | Pantalla completa |
| `E` o `P` | Exportar a PDF (diálogo de impresión) |
| `?` | Ayuda |

En tablet: deslizar horizontalmente o usar las flechas `‹ ›` del HUD. La barra
superior muestra los 8 bloques como segmentos clickeables. La URL guarda la slide
(`#/23`) — sirve para compartir un enlace a una slide específica o retomar donde
quedaste.

## Deploy en GitHub Pages

Este proyecto vive como carpeta estática dentro de `aecode-startup-cockpit`, cuyo
GitHub Pages ya publica la rama `main`:

1. Merge de esta rama a `main`.
2. GitHub Pages publica automáticamente. URL final:
   **https://apalpan.github.io/aecode-startup-cockpit/masterclass-bim-lean-bi/**
3. No hay configuración adicional: todas las rutas son relativas y no hay build.

(Si en el futuro se quiere repo propio, basta copiar la carpeta tal cual y activar
Pages sobre `main` — ver `DECISIONES.md`.)

## Cómo editar

| Quiero cambiar… | Archivo |
|---|---|
| Contenido de una slide | `src/slides/block1.js` … `block8.js` (cada slide es un `DECK.add({...})`) |
| Datos del diplomado (módulos, horas, certificaciones, horarios) | `src/data/program.js` |
| Paleta, tipografías, radios | `styles/tokens.css` |
| Componentes visuales (cards, tablas, timeline, comparador…) | `styles/components.css` + `src/core/components.js` |
| Gráficos (barras, curva S, gauge, mapa) | `src/core/charts.js` |
| Logos / branding | `assets/brand/` (ver su README) — la edición clara usa `aecode-logo-ink.svg` (tinta) en `index.html` y slides 01/60; `aecode-logo.svg` (blanco) queda para fondos oscuros |
| Notas del expositor | Campo `notes` de cada slide; luego regenerar (abajo) |
| Datos con fuente | Editar la slide **y** actualizar `FUENTES.md` |

### Validar y regenerar notas

```bash
node tools/build-notes.js
# ✓ valida: 60 slides, todas con título, notas y HTML renderizable
# ✓ regenera speaker-notes.md
```

### Test de humo (opcional, requiere Playwright)

```bash
python3 -m http.server 8742 &     # servir el deck
NODE_PATH=$(npm root -g) node tools/smoke-test.js
# recorre las 60 slides en Chromium headless, verifica consola limpia
# y toma capturas en /tmp/shots/
```

## Exportar a PDF

Pulsa `E` (o el botón **⤓ PDF**). El CSS de impresión genera una página de
1280×720 por slide con los colores intactos. En el diálogo: destino "Guardar como
PDF", márgenes "Ninguno", activar "Gráficos de fondo".

## Estructura

```
masterclass-bim-lean-bi/
├── index.html          ← entrada única
├── assets/brand/       ← logos AECODE
├── styles/             ← tokens, motor visual, componentes
├── src/
│   ├── core/           ← engine, components (builders), charts (SVG)
│   ├── data/           ← program.js (datos del brochure)
│   └── slides/         ← block1.js … block8.js (las 60 slides)
├── tools/              ← build-notes.js (validador), smoke-test.js
├── speaker-notes.md    ← generado — guion del expositor
├── FUENTES.md          ← trazabilidad de cada dato
└── DECISIONES.md       ← justificación de la arquitectura
```

## Créditos

- **Contenido**: brochure oficial del diplomado y "Sesión 0 — BIM en Obra" (AECODE /
  ENJOFRA BIM / CIP), más investigación con fuentes en `FUENTES.md`.
- **Marca**: AECODE — aecode.ai.
