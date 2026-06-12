/* ============================================================
   BLOQUE 7 — IA, automatización y tecnologías emergentes
   Slides 51–57
   ============================================================ */
(function () {
  "use strict";
  const { head, foot, fr, cards, xcards, stats, klist, flow, table, pills } = C;

  /* ---------- 51 · IA más allá del hype ---------- */
  DECK.add({
    block: 7,
    title: "IA aplicada a construcción: más allá del hype",
    html: `
      ${head("Bloque 7 · IA y emergentes", "IA en obra: <em>menos ciencia ficción, más oficina técnica</em>")}
      <div class="s-body">
        <div class="cols c-46">
          <div>
            ${stats([
              { v: "12%", c: "risk", l: "del sector construcción usa IA <b>de forma regular</b> — frente a 88% de organizaciones a nivel global (todas las industrias).", s: "Datagrid AECO 2025 · McKinsey State of AI 2025" },
              { v: "84,8%", c: "cyan", l: "de exposición a IA tienen las tareas de arquitectura e ingeniería: el potencial es enorme, el uso aún no.", s: "Anthropic Economic Index 2025" },
            ])}
          </div>
          ${cards([
            { icon: "robot", t: "Copiloto", d: "Redacta, resume y prepara: el borrador del informe, la minuta, el correo difícil." },
            { icon: "search", t: "Analista", d: "Cruza datos de avance, costos y RFIs; encuentra patrones que el ojo no ve." },
            { icon: "warn", t: "Auditor", d: "Revisa consistencia: metrados vs presupuesto, cronograma vs avance, especificación vs submittal." },
            { icon: "doc", t: "Extractor", d: "Convierte PDFs, actas y correos en datos estructurados y consultables." },
            { icon: "bell", t: "Vigía", d: "Monitorea umbrales y dispara alertas: RFIs por vencer, desvíos que cruzan el límite." },
            { icon: "link", t: "Coordinador de flujos", d: "Mueve información entre sistemas: de formulario a base de datos, a tablero, a aviso." },
          ], { cols: 3 })}
        </div>
      </div>
      ${foot("Bloque 7 · IA y emergentes", "Datagrid 2025 · McKinsey 2025 · Anthropic Economic Index — ver FUENTES.md")}`,
    notes: `**Idea central:** la brecha entre exposición (84,8%) y uso real (12%) es exactamente la oportunidad profesional de la audiencia. **Cómo explicarlo:** primero los números: el sector va 5-10 años detrás de otras industrias; luego los 6 roles concretos de la IA — todos tareas de información, ninguna ciencia ficción. **Ejemplo:** "la IA no va a vaciar el concreto; pero el informe del vaciado, la minuta de la reunión y la alerta de desvío, sí". **Transición:** "veamos esos asistentes trabajando en casos reales de obra y oficina técnica".`,
  });

  /* ---------- 52 · Asistentes de IA ---------- */
  DECK.add({
    block: 7,
    title: "Asistentes de IA para obra y oficina técnica",
    html: `
      ${head("Casos de uso hoy", "Asistentes de IA: <em>casos que ya funcionan</em> en obra y OT",
        "Haz clic en cada tarjeta para ver el flujo concreto.")}
      <div class="s-body">
        ${xcards([
          { icon: "doc", t: "Resumen de RFIs", d: "Digiere 40 RFIs abiertos y entrega: temas críticos, vencidos, patrones por especialidad.",
            more: "<b>Flujo:</b> export de ACC → asistente con contexto del proyecto → resumen ejecutivo con prioridades en 2 minutos. Lo que antes era una tarde de lectura, ahora es la preparación estándar de la reunión de coordinación." },
          { icon: "warn", t: "Detección de riesgos", d: "Lee el lookahead y las incidencias, y señala combinaciones peligrosas que nadie cruzó.",
            more: "<b>Flujo:</b> restricciones + incidencias + clima + cronograma → análisis de patrones → 'el sector 4 concentra 3 restricciones vencidas y 2 incidencias de calidad: riesgo de incumplimiento del hito'. El analista junior incansable." },
          { icon: "chart", t: "Generación de reportes", d: "El informe semanal narrado: redacta el análisis sobre los datos del dashboard.",
            more: "<b>Flujo:</b> datos del tablero → plantilla del informe → borrador narrado con desvíos explicados y acciones sugeridas → revisión humana → envío. De 4 horas de redacción a 30 minutos de edición con criterio." },
          { icon: "search", t: "Consulta documental", d: "“¿Qué dice la especificación sobre el curado del f'c 350?” — respuesta con cita y página.",
            more: "<b>Flujo:</b> EETT + normas + contratos indexados → pregunta en lenguaje natural → respuesta citando documento, sección y página. El conocimiento del proyecto deja de depender de quién tiene mejor memoria." },
          { icon: "users", t: "Minutas y compromisos", d: "De la grabación de la reunión a la minuta con acuerdos, responsables y fechas.",
            more: "<b>Flujo:</b> transcripción de la reunión → extracción de acuerdos/responsables/fechas → minuta formateada + lista de seguimiento. En la siguiente reunión, el asistente reporta qué compromisos siguen abiertos." },
          { icon: "check", t: "Análisis de restricciones", d: "Clasifica, agrupa y sugiere responsables para las restricciones del lookahead.",
            more: "<b>Flujo:</b> lookahead → clasificación automática por tipo (material, ingeniería, permisos, MO) → asignación sugerida → integración al tablero Lean. El Pareto de causas se arma solo." },
        ], { cols: 3 })}
      </div>
      ${foot("Bloque 7 · IA y emergentes", "Módulo 4 — taller: Asistente de Obra con IA")}`,
    notes: `**Idea central:** todos estos casos comparten un patrón: la IA procesa información para que el humano decida — y todos son construibles hoy con herramientas accesibles. **Cómo explicarlo:** expandir 2-3 tarjetas (recomiendo resumen de RFIs y consulta documental: las más tangibles) y subrayar el patrón datos→análisis→borrador→criterio humano. **Ejemplo:** en el taller del M4 cada participante construye su propio asistente de obra — no es demo, es entregable. **Transición:** "el siguiente nivel es cuando estos asistentes dejan de esperar órdenes: los agentes".`,
  });

  /* ---------- 53 · Agentes de IA ---------- */
  DECK.add({
    block: 7,
    title: "Agentes de IA en flujos BIM / Lean / BI",
    html: `
      ${head("El siguiente nivel", "Agentes: asistentes que <em>ejecutan flujos completos</em>, no solo responden")}
      <div class="s-body">
        ${cards([
          { icon: "doc", t: "Agente documental", d: "Vigila el CDE: clasifica lo nuevo, detecta documentos sin código o flujos de aprobación estancados, y reclama a los responsables." },
          { icon: "cal", t: "Agente de planificación", d: "Cada viernes cruza avance real vs lookahead, recalcula riesgos del plan semanal y prepara la propuesta para la reunión del lunes." },
          { icon: "check", t: "Agente QA/QC", d: "Revisa modelos contra estándares (códigos, parámetros, nomenclatura) y abre issues automáticamente para cada hallazgo." },
          { icon: "chart", t: "Agente de dashboards", d: "Monitorea la salud de los datos: fuentes desactualizadas, valores anómalos, KPIs sin refrescar — avisa antes de que el comité vea datos viejos." },
          { icon: "bell", t: "Agente de reportes", d: "Genera y distribuye el paquete semanal por audiencia: versión gerencia, versión obra, versión cliente." },
          { icon: "users", t: "Agente de compromisos", d: "Persigue los acuerdos de minutas y los compromisos del plan semanal: recuerda, escala y reporta cumplimiento." },
        ], { cols: 3 })}
        ${fr(`<div class="card accent"><h4>La diferencia clave</h4>
          <p>El asistente responde cuando le preguntas. El agente <b>tiene una misión, monitorea y actúa</b> — con límites definidos y supervisión humana.
          A nivel global, 62% de las empresas ya experimenta con agentes; solo 23% los tiene en producción: ventana de oportunidad abierta.</p></div>`, 7)}
      </div>
      ${foot("Bloque 7 · IA y emergentes", "McKinsey, The State of AI 2025 — adopción de agentes")}`,
    notes: `**Idea central:** el agente pasa de responder a operar: misión + monitoreo + acción con límites. **Cómo explicarlo:** elegir 2 agentes y narrarlos como "nuevos integrantes del equipo": el documental que reclama aprobaciones estancadas, el de compromisos que persigue acuerdos sin que nadie se lo pida. Citar el dato 62/23: experimentación masiva, producción escasa — quien aprenda a llevarlos a producción tiene ventaja. **Ejemplo:** el lunes 7 a.m., la propuesta de plan semanal ya está en la bandeja del residente, preparada por el agente de planificación durante el fin de semana. **Transición:** "estos flujos se construyen con herramientas de automatización sorprendentemente accesibles".`,
  });

  /* ---------- 54 · Automatización con Zapier / n8n / APIs ---------- */
  DECK.add({
    block: 7,
    title: "Automatización: Zapier, n8n, APIs y ACC",
    html: `
      ${head("La fontanería", "Automatización: el dato viaja solo, <em>de punta a punta</em>")}
      <div class="s-body">
        ${flow([
          { icon: "doc", t: "Formulario", d: "Campo registra una incidencia desde el celular.", tip: "Forms, Fieldwire o la app de campo: el dato nace digital una sola vez." },
          { icon: "db", t: "Base de datos", d: "El registro entra estructurado y codificado.", tip: "Sheets, SQL o la base del CDE: con código de sector, fecha y responsable." },
          { icon: "chart", t: "Dashboard", d: "El tablero se refresca sin intervención.", tip: "Power BI / Looker con actualización programada: nadie 'arma' nada." },
          { icon: "bell", t: "Alerta", d: "Si cruza umbral, aviso al responsable.", tip: "n8n/Zapier evalúa reglas: incidencia crítica → WhatsApp/correo al dueño del frente." },
          { icon: "doc", t: "Reporte", d: "El resumen periódico se genera y distribuye.", tip: "Con IA: el reporte narrado se redacta solo y se envía a cada audiencia." },
          { icon: "users", t: "Reunión", d: "El equipo decide sobre información ya procesada.", tip: "La reunión empieza en la decisión, no en la recolección de datos." },
        ])}
        ${fr(`<div class="grid g3 mt-s">
          <div class="card"><h4>Zapier</h4><p>Conectores listos, cero código: ideal para empezar y validar flujos en días.</p></div>
          <div class="card"><h4>n8n</h4><p>Open source y flexible: flujos complejos, datos sensibles en tu servidor, nodos de IA nativos.</p></div>
          <div class="card"><h4>APIs (ACC, Fieldwire…)</h4><p>La vía directa: las plataformas exponen sus datos para integraciones a medida del proyecto.</p></div>
        </div>`, 7)}
      </div>
      ${foot("Bloque 7 · IA y emergentes", "Módulo 4 — automatización y reportes web")}`,
    notes: `**Idea central:** la automatización es la fontanería que hace reales las promesas de los bloques anteriores: el dato nace una vez y viaja solo. **Cómo explicarlo:** narrar el flujo completo formulario→base→tablero→alerta→reporte→reunión, y posicionar las 3 herramientas: Zapier para empezar, n8n para profundizar, APIs para integrar en serio. **Ejemplo:** la incidencia crítica de seguridad registrada a las 10:14 dispara el WhatsApp al prevencionista a las 10:14 — no en el reporte del viernes. **Transición:** "hasta aquí, información que nace digital. ¿Y la realidad física de la obra? También se puede capturar…"`,
  });

  /* ---------- Checkpoint B7.a — IA, asistentes y agentes ---------- */
  DECK.add({
    block: 7,
    title: "Checkpoint — IA, asistentes y agentes",
    html: `
      ${head("Checkpoint · participa", "Tres preguntas sobre IA aplicada a obra",
        "Vota por una alternativa y gira cada tarjeta para comprobar.")}
      <div class="s-body">
        ${C.quiz([
          { q: "¿Qué diferencia a un agente de un asistente de IA?",
            opts: ["El agente tiene misión, monitorea y actúa", "El agente es más caro", "No hay diferencia real"],
            ok: 0, why: "El asistente responde cuando le preguntas; el agente opera con una misión, límites definidos y supervisión humana." },
          { q: "El patrón sano de IA en obra es…",
            opts: ["La IA decide sola para ganar velocidad", "La IA procesa, el humano decide", "La IA reemplaza la reunión semanal"],
            ok: 1, why: "Todos los casos reales comparten el patrón datos → análisis → borrador → criterio profesional. La decisión sigue siendo humana." },
          { q: "¿Qué % del sector construcción usa IA de forma regular (2025)?",
            opts: ["12%", "45%", "88%"],
            ok: 0, why: "88% es el promedio global de organizaciones (McKinsey); el sector va años atrás — y esa brecha es exactamente la oportunidad profesional." },
        ])}
      </div>
      ${foot("Bloque 7 · Checkpoint")}`,
    notes: `**Idea central:** anclar la distinción asistente/agente y la brecha 12 vs 88 antes de pasar a captura de realidad. **Cómo explicarlo:** votación y giro; en la pregunta 2 subrayar que el patrón "IA procesa, humano decide" es el criterio para evaluar cualquier herramienta nueva. **Ejemplo:** la pregunta 3 sorprende a los optimistas — útil para bajar el hype con datos. **Transición:** "hasta aquí, información que nace digital. ¿Y la realidad física de la obra? También se captura…"`,
  });

  /* ---------- 55 · RA, RV y nubes de puntos ---------- */
  DECK.add({
    block: 7,
    title: "Realidad aumentada, virtual y nubes de puntos",
    html: `
      ${head("Capturar la realidad", "RA, RV y escaneo 3D: <em>cerrar la brecha entre el modelo y la obra</em>")}
      <div class="s-body">
        ${cards([
          { icon: "vr", t: "Realidad aumentada", d: "El modelo superpuesto sobre la obra real desde tablet o visor: ver la instalación futura sobre el muro presente, replanteos y verificación en sitio." },
          { icon: "eye", t: "Realidad virtual", d: "Recorrer el proyecto antes de construirlo: revisión de diseño inmersiva, coordinación y hasta inducciones de seguridad." },
          { icon: "scan", t: "Escaneo 3D / nubes de puntos", d: "Capturar la geometría real con láser o fotogrametría: millones de puntos que documentan exactamente lo construido." },
          { icon: "check", t: "Modelo vs realidad", d: "Alinear la nube con el modelo: verificar avance, detectar desvíos constructivos y generar el as-built confiable." },
        ], { cols: 4 })}
        ${fr(`<div class="card accent"><h4>El caso de control más potente</h4>
          <p>Escaneo periódico + comparación automática contra el modelo = <b>avance verificado con evidencia geométrica</b>.
          Plataformas como OpenSpace o Buildots industrializan esta idea con cámaras 360° e IA. En el taller del M4 trabajas el flujo completo de nubes de puntos alineadas a Revit.</p></div>`, 5)}
      </div>
      ${foot("Bloque 7 · IA y emergentes", "Módulo 4 — taller de nubes de puntos + invitado especialista RV")}`,
    notes: `**Idea central:** estas tecnologías cierran el último gap: el modelo dice lo que debería haber; el escaneo dice lo que hay. **Cómo explicarlo:** RA lleva el modelo a campo, RV trae el campo (futuro) a la oficina, y el escaneo trae la realidad al modelo. El caso estrella: avance verificado geométricamente, sin discusiones de porcentajes. **Ejemplo:** la valorización donde el 'avance del 80%' del subcontratista se contrasta contra el escaneo de la semana: la conversación cambia de tono. **Transición:** "y toda esta información acumulada cobra una segunda vida cuando la obra termina: el gemelo digital".`,
  });

  /* ---------- Activador B7 — 39% de las emisiones ---------- */
  DECK.add({
    block: 7,
    title: "Dato activador — 39% de las emisiones",
    cls: "divider",
    html: `
      ${C.activator({
        v: `<span data-count="39" data-suf="%">39%</span>`,
        line: "de las emisiones globales de CO₂ relacionadas con energía provienen del <b>entorno construido</b> — operación de edificios más materiales y construcción.",
        q: "La próxima década de la construcción también se mide en datos: ¿qué mide tu obra además del avance?",
        src: "World Green Building Council / IEA — Global Status Report",
      })}
      ${foot("Bloque 7 · Dato activador")}`,
    notes: `**Idea central:** abrir la dimensión sostenibilidad sin cambiar de tesis: medir y gestionar con datos es también la palanca ambiental del sector. **Cómo explicarlo:** conectar con el gemelo digital que viene: la información estructurada en obra es la que luego optimiza consumo y mantenimiento por décadas. **Ejemplo:** clientes corporativos ya piden huella de carbono por entregable — otro dato que exige sistema, no Excel suelto. **Transición:** "y esa información acumulada cobra una segunda vida cuando la obra termina: el gemelo digital".`,
  });

  /* ---------- 56 · Digital twins ---------- */
  DECK.add({
    block: 7,
    title: "Digital twins y operación",
    html: `
      ${head("Después de la obra", "El gemelo digital: la información de obra <em>vive más que la obra</em>")}
      <div class="s-body">
        ${flow([
          { icon: "cube", t: "Modelo as-built", d: "Lo realmente construido, verificado con escaneo.", tip: "El cierre de obra entrega un modelo fiel, no un juego de planos 'según obra' de dudosa fidelidad." },
          { icon: "db", t: "Datos de activos", d: "Equipos, garantías, manuales, mantenimientos.", tip: "Cada activo del modelo lleva su hoja de vida: el 6D-7D en acción." },
          { icon: "bolt", t: "Sensores / IoT", d: "El edificio reporta su estado en tiempo real.", tip: "Temperatura, consumo, vibración, ocupación: el gemelo se mantiene vivo." },
          { icon: "chart", t: "Operación inteligente", d: "Mantenimiento predictivo y optimización.", tip: "El costo de operar un activo supera por mucho al de construirlo: aquí el dato rinde por décadas." },
        ])}
        ${fr(`<div class="card accent mt-m"><h4>Por qué le importa a alguien de obra</h4>
          <p>Porque cambia el estándar de lo que entregas: el cliente sofisticado ya no compra solo el edificio — compra
          <b>el edificio + su gemelo de información</b>. Quien estructura bien los datos durante la construcción, entrega ese valor sin esfuerzo extra.</p></div>`, 5)}
      </div>
      ${foot("Bloque 7 · IA y emergentes")}`,
    notes: `**Idea central:** el gemelo digital es el argumento de largo plazo para la disciplina de datos en obra: la información estructurada hoy opera el activo por décadas. **Cómo explicarlo:** el flujo as-built→activos→sensores→operación, y el giro comercial: el entregable moderno incluye la información, no solo el hormigón. **Ejemplo:** un hospital donde mantenimiento escanea el QR de la bomba, ve su historial en el gemelo y agenda el cambio antes de la falla. **Transición:** "cerremos el bloque con el radar completo de tecnologías que vienen — y un criterio para no marearse".`,
  });

  /* ---------- 57 · Tecnologías emergentes ---------- */
  DECK.add({
    block: 7,
    title: "Tecnologías emergentes y oportunidades",
    html: `
      ${head("El radar 2025-2026", "El radar de tecnologías: <em>todas hablan el mismo idioma — datos</em>")}
      <div class="s-body">
        <div class="grid g4">
          ${[
            ["IA generativa", "Diseño asistido, documentación, análisis y asistentes de proyecto", "t-cyan"],
            ["Computer vision", "Cámaras que miden avance, seguridad (EPP) y productividad en video", "t-cyan"],
            ["Robots de obra", "Marcado de losas (Dusty), albañilería e impresión 3D en nichos", "t-violet"],
            ["Escaneo y captura", "360° + LiDAR cotidianos: OpenSpace, Matterport, Cupix", "t-violet"],
            ["Sensores / IoT", "Concreto, equipos y estructuras reportando en tiempo real", "t-green"],
            ["Gemelos digitales", "Del as-built a la operación optimizada del activo", "t-green"],
            ["Simulación y optimización", "Cronogramas generados y optimizados con IA (ALICE, nPlan)", ""],
            ["Industrialización / MMC", "Prefabricación y construcción modular: la obra como ensamblaje", ""],
          ].map((t, i) => fr(`<div class="card" style="padding:15px 16px"><span class="tag ${t[2]}">${t[0]}</span><p class="mt-s" style="font-size:12px">${t[1]}</p></div>`, i)).join("")}
        </div>
        ${fr(`<div class="card accent"><h4>El criterio para no marearse</h4>
          <p>Todas estas tecnologías consumen y producen <b>datos estructurados</b>. Quien domina la base — BIM + CDE + BI —
          puede adoptar cualquiera de ellas cuando madure. Quien no, solo colecciona pilotos.</p></div>`, 9)}
      </div>
      ${foot("Bloque 7 · IA y emergentes", "Panorama de mercado 2025-26 — ver FUENTES.md")}`,
    notes: `**Idea central:** el radar es amplio, pero hay un denominador común: todo consume y produce datos estructurados — la base que enseña el diplomado. **Cómo explicarlo:** sobrevolar el radar sin detenerse (30 segundos) y aterrizar en el criterio: no hay que dominar las 8; hay que dominar la base que las habilita. Mencionar 2-3 nombres como referencia de mercado (OpenSpace, ALICE, Dusty), sin promesa de profundizar. **Ejemplo:** la empresa con CDE y datos ordenados adoptó computer vision en 2 meses; su competidor sigue en el piloto eterno. **Transición:** "recapitulemos entonces qué se llevan realmente de este programa" → Bloque 8.`,
  });

  /* ---------- Checkpoint B7.b — realidad capturada y emergentes ---------- */
  DECK.add({
    block: 7,
    title: "Checkpoint — captura de realidad y emergentes",
    html: `
      ${head("Checkpoint · participa", "Tres preguntas sobre la frontera tecnológica",
        "Vota por una alternativa y gira cada tarjeta para comprobar.")}
      <div class="s-body">
        ${C.quiz([
          { q: "El aporte central del escaneo 3D al control de obra es…",
            opts: ["Avance verificado con evidencia geométrica", "Renders más vistosos para el cliente", "Reducir RFIs por sí solo"],
            ok: 0, why: "La nube de puntos alineada al modelo convierte el % de avance de opinión en medición: el as-built deja de ser un PDF de fe." },
          { q: "El gemelo digital rinde sobre todo en…",
            opts: ["La etapa de licitación", "La operación del activo", "El marketing del proyecto"],
            ok: 1, why: "Operar un activo cuesta mucho más que construirlo: la información estructurada en obra rinde por décadas en mantenimiento." },
          { q: "El denominador común de todas las tecnologías del radar es que…",
            opts: ["Consumen y producen datos estructurados", "Requieren grandes inversiones", "Dependen de realidad virtual"],
            ok: 0, why: "Quien domina la base — BIM + CDE + BI — adopta cualquiera cuando madura; quien no, colecciona pilotos eternos." },
        ])}
      </div>
      ${foot("Bloque 7 · Checkpoint")}`,
    notes: `**Idea central:** cerrar el bloque 7 fijando el criterio anti-mareo: la base de datos estructurados habilita toda la frontera. **Cómo explicarlo:** votación y giro; usar la pregunta 3 como puente directo al cierre — es la tesis de toda la sesión en miniatura. **Ejemplo:** "¿qué tienen en común OpenSpace, ALICE y un agente de IA? Comen datos estructurados". **Transición:** "recapitulemos qué se llevan realmente de este programa" → Bloque 8.`,
  });
})();
