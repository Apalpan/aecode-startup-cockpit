# AECODE · Startup Metrics OS

Sistema operativo de **métricas de negocio** de **AECODE** — el *Learning OS* para talento AEC (Arquitectura, Ingeniería y Construcción) en Latinoamérica.

> Dos modelos, una sola fuente de verdad: **Live Training** (cohortes) + **Microlearning Platform OS** (SaaS recurrente), con finanzas, márgenes, unit economics, growth, escalabilidad y proyección del pasado al futuro.

**🚀 Demo:** https://apalpan.github.io/aecode-startup-cockpit/

## Secciones

| Sección | Qué muestra |
|---|---|
| **Resumen** | 6 KPIs clave: caja/mes, MRR recurrente, NSM, margen combinado, runway, proyección 12m. |
| **Modelos** | Live Training vs Microlearning Platform OS lado a lado: revenue, margen, ARPU, CAC, LTV/CAC, escalabilidad, churn. |
| **Finanzas** | Ingresos por modelo (12 meses atrás → 12 adelante), margen bruto combinado y P&L mensual estimado. Histórico sólido + proyección punteada. |
| **Cohortes** | Analítica de cada cohorte Live: alumnos, precio, ingreso, completación, NPS y % de migración a la plataforma. |
| **Unit Economics** | Economía por usuario de cada modelo, comparada y editable. |
| **Growth** | Canales de adquisición y CAC, comunidad (65k), y el loop de crecimiento. |
| **Escalabilidad** | Crecimiento lineal (Live) vs exponencial (plataforma) + motor de migración. |
| **Proyección** | Simulador con sliders en vivo (Evidence/Verification Rate, MAU, conversión, precio) → NSM, MRR, LTV/CAC, runway y veredicto. Ruta a $30k MRR. |
| **Fundabilidad** | Las 8 métricas que mira un inversionista, con semáforo. |
| **Foco** | Tesis del negocio + agenda de readiness de 10 puntos + quick wins. |

## Interactividad

- **Edita cualquier número** (NSM, KPIs) — se guarda en `localStorage`.
- **Simulador** de escenarios con presets *Hoy / Meta Beta / Escala 12m*.
- **Popovers didácticos** (ⓘ) que explican cada métrica.
- **Tour guiado**, export/import JSON, reset.
- Gráficos SVG nativos (líneas con zona de proyección, sparklines), fondo de partículas, animaciones.

> ⚠️ Varios valores (cohortes, canales, series históricas, proyecciones) son **supuestos realistas** marcados para iterar con la data real de AECODE.

## Estructura

| Archivo | Descripción |
|---|---|
| `index.html` | App completa de un solo archivo (HTML + CSS + JS, sin dependencias salvo anime.js por CDN). |
| `build.py` | Generador en Python que produce `index.html` (fuente de verdad). |
| `aecodito.png`, `aecode-logo.svg` | Branding. |

## Desarrollo

```bash
python build.py   # regenera index.html
```

Abrir `index.html` en el navegador funciona directamente.

---

© 2026 AECODE · Latam
