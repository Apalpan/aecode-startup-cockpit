# DECISIONES.md — Arquitectura técnica

## Decisión principal: web app *buildless* con motor de presentación propio (vanilla HTML/CSS/JS)

Se evaluaron las tres opciones planteadas:

| Criterio | Reveal.js (CDN) | Vite + React + Framer | **Vanilla + motor propio (elegida)** |
|---|---|---|---|
| Velocidad de despliegue en GitHub Pages | Alta | Media (requiere pipeline de build) | **Máxima: cero build, archivos estáticos** |
| Dependencias externas | Reveal CDN | ~300 paquetes npm | **0 (solo Google Fonts)** |
| Control visual premium (stage 1280×720 escalado, glassmorphism, SVG a medida) | Medio (pelear contra el theme) | Alto | **Total** |
| Interactividad a medida (mapa de puntos, ecosistema, comparador, simulación) | Plugins/hacks | Alto | **Alto, sin overhead** |
| Riesgo de rotura a futuro (deps desactualizadas, CVEs, breaking changes) | Medio | Alto | **Mínimo** |
| Peso total | ~400 KB+ | ~200 KB+ bundle | **~90 KB de código propio** |

**Justificación:**

1. **GitHub Pages sin fricción.** El repositorio anfitrión (`aecode-startup-cockpit`) ya
   despliega la rama `main` directamente (sin Actions de build). Una carpeta estática
   se publica sola en `https://apalpan.github.io/aecode-startup-cockpit/masterclass-bim-lean-bi/`
   apenas se hace merge — sin tocar la configuración existente ni añadir pipelines.
2. **Consistencia con el ecosistema AECODE.** Los proyectos de la casa
   (`aecode-startup-cockpit`) ya siguen la filosofía dependency-light / archivo
   estático. Un deck Vite+React habría introducido un segundo stack a mantener.
3. **El motor propio es pequeño y suficiente** (~250 líneas en `src/core/engine.js`):
   navegación por teclado/touch/hash, barra de progreso, índice lateral, overview,
   notas del expositor, ayuda, export a PDF vía print CSS y animaciones de aparición
   progresiva. Es exactamente el subconjunto de Reveal.js que esta presentación
   necesita, sin el 90% restante.
4. **Funciona sin servidor.** Al usar scripts clásicos (no ES modules), `index.html`
   abre incluso con doble clic desde el disco — crítico para el escenario "proyector
   de auditorio sin internet confiable". (Las fuentes Google degradan con gracia a
   system-ui si no hay red.)
5. **Reveal.js se descartó** porque las interacciones pedidas (mapa de adopción BIM,
   diagrama de ecosistema clickeable, comparador antes/después, dashboards simulados,
   simulación de flujo) son componentes a medida de todos modos; Reveal solo aportaría
   la navegación, que es la parte barata.

## Decisiones secundarias

- **Stage fijo 1280×720 escalado por `transform`** (patrón Reveal/Keynote): tipografía
  y layout idénticos en laptop, proyector y tablet; el responsive se resuelve por
  escala, no por reflow — lo correcto para un deck.
- **Slides como datos** (`DECK.add({title, block, html, notes, init})` en
  `src/slides/block*.js`): el HTML se genera con builders puros de string
  (`src/core/components.js`, `src/core/charts.js`) sin tocar el DOM. Eso permite que
  `tools/build-notes.js` ejecute los mismos archivos en Node para **validar el deck
  (60 slides, títulos, notas, HTML renderizable) y generar `speaker-notes.md`**
  desde una única fuente de verdad.
- **Gráficos en SVG generado** (barras, donut, curva S, gauge, mapa de puntos,
  diagramas): cero librerías de charts, animaciones vía CSS, estética 100% controlada.
- **Datos del programa centralizados** en `src/data/program.js` (módulos, horas,
  certificaciones, herramientas) extraídos del brochure oficial: un solo lugar para
  actualizar cuando cambie la edición.
- **Export a PDF** con `@media print` (una página por slide, 1280×720) y botón/tecla
  `E` — sin dependencias de generación de PDF.
- **Carpeta autocontenida**: todo vive bajo `masterclass-bim-lean-bi/` con rutas
  relativas; se puede mover a su propio repositorio en el futuro sin cambiar una línea.

## Estructura

```
masterclass-bim-lean-bi/
├── index.html              ← entrada única (carga estilos + scripts en orden)
├── assets/brand/           ← logos AECODE (SVG/PNG) + instrucciones
├── styles/
│   ├── tokens.css          ← design tokens (paleta, tipografía, radios)
│   ├── deck.css            ← motor visual: stage, chrome, overview, notas, print
│   └── components.css      ← componentes: cards, charts, dash, timeline, comparador…
├── src/
│   ├── core/
│   │   ├── engine.js       ← navegación, hash, escalado, menú, notas, overview
│   │   ├── components.js   ← builders de HTML (puros, reutilizables en Node)
│   │   └── charts.js       ← SVG: hbars, donut, curva S, gauge, dotmap, spark
│   ├── data/program.js     ← datos del diplomado (fuente: brochure oficial)
│   └── slides/block1..8.js ← las 60 slides, agrupadas por bloque narrativo
├── tools/
│   ├── build-notes.js      ← valida el deck + genera speaker-notes.md
│   └── smoke-test.js       ← test headless (Playwright): consola limpia + capturas
├── speaker-notes.md        ← generado (no editar a mano)
├── FUENTES.md              ← trazabilidad de cada dato externo
└── README.md
```
