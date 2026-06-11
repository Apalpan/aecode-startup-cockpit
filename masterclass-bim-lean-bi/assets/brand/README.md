# Assets de marca AECODE

| Archivo | Origen | Uso en el deck |
|---|---|---|
| `aecode-logo.svg` | repo `aecode-startup-cockpit` (logo blanco, ideal en fondo oscuro) | Header fijo, portada (S01), cierre (S60) |
| `aecode-isotipo.png` | repo `state-ai-aec-aecode-light` | Favicon |
| `aecodito-home.png` | repo `state-ai-aec-aecode-light` (mascota) | Disponible (no usado actualmente) |

## Si quieres reemplazar o añadir assets

- Coloca aquí las nuevas versiones (preferir **SVG** para logos; PNG con fondo
  transparente como alternativa).
- El logo principal se referencia en `index.html` (`#brandmark`) y en
  `src/slides/block1.js` / `block8.js`. Mantén el mismo nombre de archivo para no
  tocar código.
- Para visuales BIM 3D reales (renders, capturas de modelos), crear
  `assets/images/` y referenciarlos desde las slides; hoy los visuales 3D son SVG
  generados (edificio isométrico de portada, diagramas) para mantener el deck
  liviano y sin dependencias.
