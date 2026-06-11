# aecode-startup-cockpit — CLAUDE.md
> Contexto permanente del proyecto. Leer al inicio de cada sesión.

---

## Qué es este proyecto

**AECODE · Startup Metrics OS** — sistema operativo de métricas de negocio de AECODE. Dashboard ejecutivo interactivo de un solo archivo HTML generado por Python. Diseñado para fundraising, decisiones estratégicas y monitoreo de KPIs.

**Demo en vivo:** https://apalpan.github.io/aecode-startup-cockpit/

**Modelo de negocio que refleja:**
- **Live Training** (cohortes/eventos): financia y siembra usuarios
- **Microlearning Platform OS** (SaaS recurrente): escala
- Migración de mix **80/20 → 50/50** (Live vs Platform) de jun a dic 2026

---

## Stack técnico

```
Generación:  Python (build.py) → produce index.html
Frontend:    HTML + CSS + JS puro en un solo archivo
Librerías:   anime.js (CDN) para animaciones
Gráficos:    SVG nativos
Fuentes:     Plus Jakarta Sans + Space Grotesk + JetBrains Mono (Google Fonts)
Persistencia: localStorage para métricas editables
Deploy:      GitHub Pages (apalpan.github.io/aecode-startup-cockpit/)
```

---

## Arquitectura

```
aecode-startup-cockpit/
├── build.py       ← FUENTE DE VERDAD. Genera index.html.
├── index.html     ← Output generado. NO editar directamente.
├── aecode-logo.svg
└── aecodito.png
```

**Regla crítica:** `index.html` es generado por `build.py`. Siempre editar `build.py` y regenerar. Si editas `index.html` directamente, tus cambios se pierden en el próximo `python build.py`.

---

## Cómo regenerar el dashboard

```bash
python build.py    # Regenera index.html completo
# Luego abrir index.html en navegador
```

No hay servidor de desarrollo. Abrir `index.html` directamente en el navegador funciona.

---

## Secciones del dashboard

| Sección | Descripción | Datos |
|---------|-------------|-------|
| **Resumen** | 6 KPIs clave | Caja/mes, MRR, NSM, margen, runway, proyección 12m |
| **Tesis & Mercado** | Por qué ahora | Benchmarks: VC EdTech $2.4B, escasez BIM ~85M 2030 |
| **Modelo Híbrido** | Mix Live/Platform | Gráfico con toggle Absoluto$/Mix% |
| **Mapa de Métricas** | Diagrama interactivo | Nodos: investigación→producto→growth→finanzas→NS |
| **Finanzas** | P&L y proyecciones | Ingresos por modelo, margen bruto, 12m histórico/futuro |
| **Cohortes** | Analítica por programa | Alumnos, ingreso, completación, NPS, migración |
| **Growth** | Canales + loop | CAC por canal, comunidad como moat, growth loop |
| **Proyección** | Simulador con sliders | NSM, MRR, LTV/CAC, runway, veredicto. Presets. |
| **Fundabilidad** | Métricas de inversión | Las 8 que mira un VC, con benchmarks |
| **War Room** | Aceleradoras + countdowns | Emprelatam (17-jun), Kaman Demo Day (22-jun), Platanus, YC; checklist persistente + Q&A jurado |
| **Foco** | Tesis + agenda | 10 puntos de readiness, quick wins |

---

## Interactividad implementada

- **Edición en vivo:** cualquier número (NSM, KPIs) es editable → persiste en `localStorage`
- **Mapa de métricas:** click en nodo → resalta conexiones + panel de detalle
- **Gráfico híbrido:** toggle Absoluto $ / Mix %
- **Simulador:** sliders en vivo → calcula NSM, MRR, LTV/CAC, runway, veredicto
- **Presets:** Hoy / Meta Beta / Escala 12m
- **Tour guiado:** botón de tour paso a paso
- **Pitch Mode (v5):** presentación full-screen de 8 slides generada desde las métricas EN VIVO (tecla `P` o botón ▶ Pitch); navegación ←/→/Espacio/Esc, dots clickeables, zonas de click laterales
- **Paleta de comandos (v5):** `Ctrl+K` — saltar a secciones, lanzar pitch/tour, aplicar presets, export/import/reset; filtro insensible a acentos
- **War Room (v5):** countdowns en vivo a deadlines de aceleradoras + checklist de batalla persistente (`S.pitch` en localStorage) + respuestas listas para Q&A de jurado
- **Strip adopción IA 2026 (v5):** 6 cards con data fresca y fuente (Unanet 75%, Datagrid 12%, Bluebeam, Meta LATAM) en la sección Tesis
- **Export/Import JSON:** backup y restauración de datos editados
- **Reset:** vuelta a valores iniciales
- **Popovers didácticos:** ⓘ en cada métrica

---

## Reglas para modificar

1. **Siempre editar `build.py`**, nunca `index.html` directamente.
2. **Datos supuestos:** muchos valores son supuestos realistas marcados para iterar con data real. Antes de presentar a inversores, actualizar con números reales de AECODE.
3. **Benchmarks:** provienen de HolonIQ, Grand View Research, Coursera/Udemy/Duolingo datos públicos. Documentar fuente al actualizar.
4. **Colores de marca AECODE:**
   ```css
   --indigo: #4A3AC1   /* Principal */
   --violet: #7C7EDF   /* Secundario */
   --green:  #47CF78   /* Positivo */
   --amber:  #F0A030   /* Alerta */
   --risk:   #F2617A   /* Riesgo */
   --bg:     #0E1121   /* Fondo dark */
   ```
5. **No agregar dependencias CDN nuevas** sin revisar el impacto en el build estático.
6. **Anime.js versión fija:** usar solo la versión ya importada en el HTML generado.

---

## Métricas clave de AECODE (actualizar cuando haya data real)

| Métrica | Descripción | Norte |
|---------|-------------|-------|
| **NSM** | Evidence Verification Rate | % skills completadas con evidencia aprobada |
| **MRR** | Monthly Recurring Revenue | Ingresos recurrentes plataforma |
| **Runway** | Meses de caja disponibles | >6 meses siempre |
| **CAC** | Costo adquisición por canal | Community < Paid Ads |
| **Completion** | % cohorte que completa | >70% meta |
| **Migration** | % Live → Platform | Meta: 30% por cohorte |

---

## Deploy

**Automático via GitHub Pages:**
1. `python build.py` → genera `index.html`
2. `git add -A && git commit -m "update metrics"` 
3. `git push origin main`
4. GitHub Pages despliega automáticamente desde rama `main`

---

## Contexto de negocio

Este dashboard es una herramienta de:
1. **Fundraising:** presentación a ProInnóvate, Startup Chile, ángeles, VCs
2. **Board/toma de decisiones:** revisión semanal de KPIs con el equipo
3. **Narrativa de inversión:** la historia completa de AECODE en un solo artefacto

- **Empresa:** AECODE
- **Owner:** Alejandro Palpan (apalpan@genplusdesign.com)
- **Financiamiento activo:** ProInnóvate (Hito 1 aprobado), Startup Chile en evaluación
- **Docs relacionados en Obsidian:** `02_EMPRESAS/AECODE/AECODE-Financiamiento-Aceleracion-2026.md`

---

## Errores frecuentes

| Error | Causa | Solución |
|-------|-------|---------|
| Cambios perdidos | Edité `index.html` directo | Siempre editar `build.py` |
| Animaciones no funcionan | Anime.js no cargó | Verificar CDN o modo offline |
| Datos no persisten | localStorage bloqueado | Verificar que el navegador lo permite |
| Gráficos rotos | SVG mal formado en `build.py` | Validar el SVG generado por separado |
