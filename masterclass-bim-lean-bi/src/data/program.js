/* ============================================================
   Datos del programa — extraídos del brochure oficial
   "BROCHURE _ BIM PARA OBRA CON LEAN VDC Y BI" (AECODE, 2025-26)
   y de la presentación "SESIÓN 0 — BIM EN OBRA".
   Única fuente de verdad para nombres, horas y certificaciones.
   ============================================================ */
(function (g) {
  "use strict";

  g.PROGRAM = {
    name: "Diplomado Internacional · BIM, Lean y BI aplicado al Seguimiento y Control de Obra",
    shortName: "BIM · Lean · BI para Seguimiento y Control de Obra",
    tagline: "Planificar. Automatizar. Integrar. Decidir con datos.",
    hours: { total: 150, live: 90 },
    mix: "70% práctico · 30% estratégico",
    schedule: "Martes, jueves y sábado · 7:30–10:30 p.m. (GMT-5) · En vivo por Zoom",
    organizers: "AECODE · ENJOFRA BIM (Autodesk Training Center) · Colegio de Ingenieros del Perú",

    modules: [
      {
        n: 1, t: "Marcos Colaborativos, BIM, Lean y VDC", h: 15,
        d: "La base metodológica: ISO 19650, VDC, IPD, PMO, Lean Construction, Last Planner System y trenes de trabajo.",
        taller: "Planificación y control de obra con enfoque Lean y VDC",
        entregable: "Cronograma + matriz POP aplicados a un caso real, con Last Planner System",
        cert: "Metodologías Lean y VDC aplicadas a obra",
      },
      {
        n: 2, t: "Sinergia BIM y Lean para Control y Seguimiento", h: 42,
        d: "Trazabilidad completa de obra: BEP bajo ISO 19650, CDE (ACC y Trimble Connect), RFIs y submittals, Revit, Navisworks 4D, Presto y Fieldwire.",
        taller: "BEP + ACC + Revit + Presto",
        entregable: "BEP completo + control de un frente de obra con datos integrados en ACC",
        cert: "Gestión y control BIM en obra",
      },
      {
        n: 3, t: "Sinergia BIM, Lean y Business Intelligence", h: 21,
        d: "Arquitectura de datos, Power Query y modelos dimensionales; dashboards gerenciales, de avance, Lean e incidencias con Power BI + Revit + ACC + Speckle.",
        taller: "Power BI – ACC – Revit – Speckle",
        entregable: "Dashboard BIM de obra: avances, costos y productividad",
        cert: "Business Intelligence para proyectos BIM–Lean",
      },
      {
        n: 4, t: "Tecnologías para Seguimiento en Obra", h: 12,
        d: "IA aplicada al control, asistentes GPT, realidad aumentada/virtual, escaneo 3D y nubes de puntos, reportes web interactivos.",
        taller: "IA + nubes de puntos + web BIM",
        entregable: "Asistente de obra con IA + reporte web integrado",
        cert: "Tecnologías emergentes aplicadas al seguimiento de obra",
      },
    ],

    tools: [
      { t: "Autodesk Revit", m: [2, 3] },
      { t: "Navisworks Manage", m: [2] },
      { t: "Autodesk Construction Cloud", m: [2, 3] },
      { t: "Trimble Connect", m: [1, 2] },
      { t: "Presto (RIB)", m: [2] },
      { t: "Fieldwire", m: [2] },
      { t: "Synchro", m: [1, 2] },
      { t: "Power BI", m: [3, 4] },
      { t: "Speckle", m: [3] },
      { t: "Excel / Sheets", m: [1, 2, 3] },
      { t: "ReCap / RealityCapture", m: [4] },
      { t: "Streamlit / Looker Studio", m: [3, 4] },
      { t: "Asistentes de IA", m: [3, 4] },
    ],

    certs: [
      { t: "Diploma CIP", org: "Colegio de Ingenieros del Perú", d: "Especialista en Seguimiento y Control de Obra con Sinergia BIM, Lean y BI. Válido para licitaciones nacionales." },
      { t: "Certificado Internacional Autodesk (USA)", org: "vía ENJOFRA BIM, Autodesk Training Center", d: "Especialista en Revit, Autodesk Construction Cloud, Navisworks y Power BI para ejecución de proyectos BIM–Lean." },
      { t: "Certificado AECODE + ENJOFRA", org: "Validez internacional", d: "Especialista en Seguimiento y Control de Obra + insignia digital Acreditta para LinkedIn y CV." },
    ],

    audience: [
      "Ingenieros civiles y arquitectos",
      "Gestores y gerentes de proyecto",
      "Coordinadores y especialistas BIM",
      "Supervisores y residentes de obra",
      "Oficina técnica, planificación y control",
      "Estudiantes avanzados del sector AEC",
    ],

    benefits: [
      "Curso adicional gratuito (8 opciones, p. ej. BIM 4D con Synchro)",
      "Curso de Fundamentos de Revit y Dynamo certificado por Autodesk",
      "Biblioteca de templates, guías y estándares BIM",
      "Webinars de actualización durante 6 meses post curso",
      "BOTs de IA especialistas: BI, BIM, RV y más",
      "Clases grabadas + aula virtual por 1 año",
    ],
  };
})(typeof window !== "undefined" ? window : globalThis);
