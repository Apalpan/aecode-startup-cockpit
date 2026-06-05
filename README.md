# AECODE · Startup Metrics OS

Sistema operativo de **métricas de negocio** de **AECODE** — el *Skill Operating System* vertical para talento AEC (Arquitectura, Ingeniería y Construcción) en Latinoamérica.

> Modelo **híbrido**: **Live Training** (cohortes/eventos) financia y siembra; **Microlearning Platform OS** (SaaS recurrente) escala. Todo conectado: investigación → producto → growth → finanzas → fundraising → North Star.

**🚀 Demo:** https://apalpan.github.io/aecode-startup-cockpit/

## Qué incluye

| Sección | Qué muestra |
|---|---|
| **Resumen** | 6 KPIs clave: caja/mes, MRR recurrente, NSM, margen combinado, runway, proyección 12m. |
| **Tesis & Mercado** | Por qué ahora, con benchmarks reales: VC EdTech $2.4B, escasez BIM ~85M 2030, post-content age, completion con cohorte >70%. |
| **Modelo Híbrido** | Un solo gráfico que muestra la migración del mix **80/20 → 50/50** (jun→dic), con toggle Absoluto $ / Mix %. Cards por modelo + programas Live (AI Construction Summit, AI Talent, BIM…). |
| **Mapa de Métricas** | Diagrama **interactivo** de interrelación: investigación → producto → growth → finanzas → fundraising → North Star, con loops de moat. Click en cualquier nodo. |
| **Finanzas** | Ingresos por modelo (12m atrás → 12 adelante), margen bruto combinado y P&L mensual. |
| **Cohortes** | Analítica por programa: alumnos, ingreso, completación, NPS y % de migración a la plataforma. |
| **Growth** | Canales de adquisición + CAC, comunidad (moat #1) y el loop compuesto. |
| **Proyección** | Simulador con sliders en vivo (Evidence/Verification Rate, MAU, conversión, precio) → NSM, MRR, LTV/CAC, runway, veredicto. Ruta a $30k. |
| **Fundabilidad** | Las 8 métricas que mira un inversionista, con benchmarks de la investigación. |
| **Foco** | Tesis del negocio + agenda de readiness de 10 puntos + quick wins. |

## Interactividad

- **Edita cualquier número** (NSM, KPIs) — se guarda en `localStorage`.
- **Mapa de métricas interactivo** (click en nodos → resalta conexiones + detalle).
- **Gráfico híbrido** con toggle Absoluto/Mix.
- **Simulador** de escenarios con presets *Hoy / Meta Beta / Escala 12m*.
- **Popovers didácticos** (ⓘ) en cada métrica, **tour guiado**, export/import JSON, reset.
- Gráficos SVG nativos, fondo de partículas, animaciones (anime.js).

> ⚠️ Varios valores (series históricas, cohortes, canales, mix, proyecciones) son **supuestos realistas** marcados para iterar con la data real de AECODE. Benchmarks de mercado provienen de la investigación EdTech LATAM+USA (HolonIQ, Grand View, Coursera/Udemy, Duolingo, Maven, Guild, etc.).

## Estructura

| Archivo | Descripción |
|---|---|
| `index.html` | App completa de un solo archivo (HTML + CSS + JS; solo anime.js por CDN). |
| `build.py` | Generador en Python que produce `index.html` (fuente de verdad). |
| `aecodito.png`, `aecode-logo.svg` | Branding. |

## Desarrollo

```bash
python build.py   # regenera index.html
```

Abrir `index.html` en el navegador funciona directamente.

---

© 2026 AECODE · Latam
