# AECODE · Startup Intelligence Cockpit

Versión interactiva y didáctica del dashboard de inteligencia de negocio de **AECODE** — el *Learning OS* para talento AEC (Arquitectura, Ingeniería y Construcción) en Latinoamérica.

> Clon optimizado de [`startup-aecode-web`](https://github.com/Apalpan/startup-aecode-web): mismo contenido, ~5x más interactividad, usabilidad y profundidad explicativa.

**🚀 Demo:** https://apalpan.github.io/aecode-startup-cockpit/

## Qué incluye

- **Simulador de escenarios** — 5 sliders en vivo (Evidence Rate, Verification Rate, MAU, conversión a pago, precio) que recalculan NSM, MRR de plataforma, LTV/CAC, runway y el veredicto de fundabilidad en tiempo real. Presets: *Hoy / Meta Beta / Escala 12m*.
- **Capa didáctica** — cada métrica trae un popover ⓘ que explica qué es, su umbral y por qué importa.
- **Métricas editables y persistentes** — North Star, 8 KPIs de fundabilidad y el funnel completo se editan con un click y se guardan en `localStorage`.
- **Funnel con detección automática de cuello de botella** y acción prescriptiva.
- **Mix de ingresos** actual vs objetivo (MRR real vs caja de cohortes).
- **Agenda de readiness** de 10 puntos + quick wins con barras de progreso.
- **Tour guiado**, guía "cómo interpretar", export/import JSON y reset.
- Fondo de partículas, anillo orbital del North Star y animaciones (anime.js). Sistema de diseño AECODE.

## Estructura

| Archivo | Descripción |
|---|---|
| `index.html` | App completa de un solo archivo (HTML + CSS + JS). |
| `build.py` | Generador en Python que produce `index.html` (fuente de verdad). |
| `aecodito.png`, `aecode-logo.svg` | Branding. |

## Desarrollo

```bash
python build.py   # regenera index.html
```

No requiere dependencias ni build step: abrir `index.html` en el navegador funciona.

---

© 2026 AECODE · Latam
