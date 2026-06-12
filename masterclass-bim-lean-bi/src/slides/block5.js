/* ============================================================
   BLOQUE 5 — Herramientas BIM para control, avance y
   planificación · Slides 35–41
   ============================================================ */
(function () {
  "use strict";
  const { head, foot, fr, cards, stats, klist, flow, table } = C;

  /* ---------- 35 · Revit ---------- */
  DECK.add({
    block: 5,
    title: "Revit: modelado y extracción de información",
    html: `
      ${head("Bloque 5 · Herramientas", "Revit: el modelo como <em>fábrica de datos para el control</em>")}
      <div class="s-body">
        ${cards([
          { icon: "chart", t: "Metrados automáticos", d: "Tablas de cantidades extraídas del modelo: consistentes entre presupuesto, valorización y campo." },
          { icon: "db", t: "Parámetros y codificación", d: "Cada elemento lleva código de partida, sector, fase y estado: el lenguaje común entre modelo y control." },
          { icon: "grid", t: "Sectorización", d: "El modelo se divide en sectores/frentes de trabajo: la unidad de control del avance y del tren de actividades." },
          { icon: "clock", t: "Fases y filtros", d: "Filtros de vista por avance: lo ejecutado, lo en curso y lo pendiente se ven de un vistazo, en colores." },
          { icon: "doc", t: "Planos y reportes", d: "Documentación para valorizaciones y cierres generada desde la misma fuente: sin doble digitación." },
          { icon: "link", t: "Datos para todo lo demás", d: "Lo que Revit estructura, lo consumen Navisworks (4D), Presto (5D) y Power BI (dashboards)." },
        ], { cols: 3 })}
        ${fr(`<p class="center muted" style="font-size:13.5px"><b class="gold">Regla del diplomado:</b> modelar pensando en el dato que el control necesita — no en la maqueta bonita.</p>`, 7)}
      </div>
      ${foot("Bloque 5 · Herramientas BIM", "Módulo 2 del programa — Revit aplicado a obra")}`,
    notes: `**Idea central:** en control de obra, Revit vale por los datos que produce, no por el render. **Cómo explicarlo:** recorrer la cadena: parámetros y codificación → sectores → metrados → reportes; y el papel de hub: lo que Revit estructura lo consumen 4D, 5D y BI. **Ejemplo:** la misma partida de concreto con tres metrados distintos (presupuesto, valorización, campo) se vuelve un solo número cuando todos beben del modelo. **Transición:** "cuando el modelo está bien estructurado, podemos sumarle la dimensión tiempo: Navisworks".`,
  });

  /* ---------- 36 · Navisworks ---------- */
  DECK.add({
    block: 5,
    title: "Navisworks: coordinación, 4D y control",
    html: `
      ${head("Coordinación y tiempo", "Navisworks: <em>ver el choque antes del golpe</em>")}
      <div class="s-body">
        <div class="cols c-55">
          <div>
            ${klist([
              "<b>Federación de modelos:</b> arquitectura + estructuras + MEP en una sola vista navegable y liviana.",
              "<b>Detección de interferencias (clash detection):</b> cada conflicto, detectado y gestionado antes del vaciado.",
              "<b>Simulación 4D (TimeLiner):</b> el cronograma conectado al modelo — la secuencia constructiva como película.",
              "<b>Planificado vs ejecutado:</b> comparar visualmente el avance real contra el plan, semana a semana.",
            ])}
          </div>
          ${fr(`<div class="chart-wrap"><h4>Plan vs real — vista 4D del frente</h4>
            <svg viewBox="0 0 420 240" style="width:100%">
              ${[0,1,2,3,4,5].map((i) => {
                const x = 30 + (i % 3) * 125, y = i < 3 ? 30 : 125;
                const states = ["var(--green)", "var(--green)", "var(--amber)", "var(--green)", "var(--risk)", "rgba(24,26,32,.10)"];
                const labels = ["S1 ✓ al día", "S2 ✓ al día", "S3 ⚠ riesgo", "S4 ✓ al día", "S5 ✕ atrasado", "S6 · futuro"];
                return `<rect x="${x}" y="${y}" width="110" height="78" rx="9" fill="${states[i]}" opacity="${i === 5 ? 1 : 0.18}" stroke="${states[i]}" stroke-width="1.6"/>
                  <text x="${x + 55}" y="${y + 44}" text-anchor="middle" fill="var(--ink-2)" font-size="11" font-family="var(--f-mono)">${labels[i]}</text>`;
              }).join("")}
              <text x="210" y="230" text-anchor="middle" fill="var(--faint)" font-size="9.5" font-family="var(--f-mono)">sectores del modelo coloreados por estado de avance (4D)</text>
            </svg>
          </div>`, 5)}
        </div>
      </div>
      ${foot("Bloque 5 · Herramientas BIM", "Módulo 2 — Navisworks Manage: 3D/4D/5D")}`,
    notes: `**Idea central:** Navisworks aporta dos superpoderes: ver el choque antes del golpe (clash) y ver el tiempo sobre el modelo (4D). **Cómo explicarlo:** la federación junta todas las especialidades; el clash detection industrializa la coordinación; TimeLiner conecta cronograma y modelo. Señalar el gráfico: sectores en colores = el avance se entiende en 5 segundos. **Ejemplo:** una tubería de 6'' cruzando una viga principal: en modelo es un clic; en obra son perforaciones, refuerzos y un RFI airado. **Transición:** "tercer eje del triángulo: el costo. Ahí entra Presto".`,
  });

  /* ---------- 37 · Presto / costos 5D ---------- */
  DECK.add({
    block: 5,
    title: "Presto: costos y presupuestos vinculados al modelo",
    html: `
      ${head("La dimensión costo", "Del modelo al presupuesto: <em>un solo metrado, una sola verdad</em>")}
      <div class="s-body">
        ${flow([
          { icon: "cube", t: "Modelo BIM", d: "Elementos codificados por partida y sector.", tip: "La codificación del modelo es el puente: cada elemento sabe a qué partida pertenece." },
          { icon: "chart", t: "Metrados", d: "Cantidades extraídas automáticamente.", tip: "Adiós al metrado manual sobre planos: el modelo entrega cantidades consistentes." },
          { icon: "doc", t: "Presupuesto", d: "Partidas, APUs y precios en Presto.", tip: "Presto (RIB) vincula cantidades del modelo con la estructura de costos." },
          { icon: "money", t: "Control comercial", d: "Valorizaciones, desvíos y reportes financieros.", tip: "Avance físico × precio = valorización defendible. Los desvíos se detectan por partida." },
          { icon: "check", t: "Cierres", d: "Liquidaciones y cierres con soporte trazable.", tip: "El cierre comercial deja de ser arqueología: cada número tiene origen." },
        ])}
        ${fr(`<div class="card accent mt-m"><h4>Por qué importa</h4>
          <p>El costo es donde la mala información duele más rápido. Cuando metrado, presupuesto y valorización
          comparten origen (el modelo), las discusiones comerciales se resuelven con <b>datos, no con desgaste</b>.</p></div>`, 6)}
      </div>
      ${foot("Bloque 5 · Herramientas BIM", "Módulo 2 — taller de Presto vinculado a BIM")}`,
    notes: `**Idea central:** el 5D cierra el triángulo del control: alcance (modelo), tiempo (4D) y costo comparten una sola fuente. **Cómo explicarlo:** seguir el flujo modelo→metrado→presupuesto→valorización→cierre, subrayando la codificación como puente (por eso insistimos en modelar para el dato). **Ejemplo:** la valorización mensual que tomaba una semana de remetrar se arma en horas, y la discusión con la supervisión versa sobre criterios, no sobre cantidades. **Transición:** "nos falta el eslabón de campo: ¿cómo entra el avance real al sistema? Fieldwire".`,
  });

  /* ---------- 38 · Fieldwire / control de campo ---------- */
  DECK.add({
    block: 5,
    title: "Fieldwire: control de campo e incidencias",
    html: `
      ${head("El eslabón de campo", "Fieldwire: el dato de avance <em>nace digital en el frente</em>")}
      <div class="s-body">
        ${cards([
          { icon: "check", t: "Tareas con responsable", d: "Cada actividad del frente con dueño, fecha, prioridad y plano vinculado. Nada vive solo en la libreta del capataz." },
          { icon: "eye", t: "Avance con evidencia", d: "Fotos, ubicación en plano y comentarios. El % de avance deja de ser una opinión: es un registro verificable." },
          { icon: "warn", t: "Incidencias y restricciones", d: "Lo que bloquea al frente se registra al instante y llega a quien puede resolverlo — alimenta el lookahead." },
          { icon: "chart", t: "Reportes automáticos", d: "El reporte diario/semanal se genera desde los registros de campo: la oficina técnica deja de transcribir." },
        ], { cols: 4 })}
        ${fr(`<div class="card accent"><h4>El cambio cultural</h4>
          <p>El supervisor no llena formularios "para la oficina": usa una herramienta que <b>le sirve a él</b> — sus tareas, sus planos
          al día, sus pendientes. El dato para el dashboard es el subproducto. Así es como la captura de datos sobrevive en obra real.</p></div>`, 5)}
      </div>
      ${foot("Bloque 5 · Herramientas BIM", "Módulo 2 — taller de seguimiento con Fieldwire")}`,
    notes: `**Idea central:** ningún dashboard sobrevive sin datos de campo confiables, y el campo solo registra datos si la herramienta le sirve a él primero. **Cómo explicarlo:** las 4 funciones (tareas, avance con evidencia, incidencias, reportes) y el remate cultural: el dato es subproducto del trabajo, no tarea extra. **Ejemplo:** el supervisor que antes llamaba a OT por la última revisión del plano ahora la tiene en el celular — y de paso registra el avance ahí mismo. **Transición:** "con modelo, tiempo, costo y campo conectados, podemos hablar de la planificación 4D en serio".`,
  });

  /* ---------- Checkpoint B5 — herramientas para el control ---------- */
  DECK.add({
    block: 5,
    title: "Checkpoint — herramientas para el control",
    html: `
      ${head("Checkpoint · participa", "Tres preguntas sobre el stack de herramientas",
        "Vota por una alternativa y gira cada tarjeta para comprobar.")}
      <div class="s-body">
        ${C.quiz([
          { q: "En control de obra, el modelo Revit vale principalmente por…",
            opts: ["La calidad del render", "Los datos que estructura: códigos, sectores, metrados", "El tamaño de la maqueta 3D"],
            ok: 1, why: "Se modela pensando en el dato que el control necesita: lo que Revit estructura lo consumen Navisworks (4D), Presto (5D) y Power BI." },
          { q: "El clash detection de Navisworks industrializa…",
            opts: ["La coordinación entre especialidades", "La valorización mensual", "El reclutamiento de cuadrillas"],
            ok: 0, why: "Cada interferencia detectada en modelo es una reunión; la misma en obra es demolición, RFI y reclamo — la regla 1:10:100 en acción." },
          { q: "¿Por qué el dato de avance debe nacer digital en campo (Fieldwire)?",
            opts: ["Elimina transcripciones y deja evidencia", "Porque lo exige la norma", "Para vigilar a las cuadrillas"],
            ok: 0, why: "El supervisor usa una herramienta que le sirve a él (tareas, planos al día); el dato del dashboard es el subproducto. Así sobrevive la captura." },
        ])}
      </div>
      ${foot("Bloque 5 · Checkpoint")}`,
    notes: `**Idea central:** consolidar el criterio del bloque: las herramientas valen por los datos y flujos que habilitan, no por sus marcas. **Cómo explicarlo:** votación y giro; en la pregunta 2 conectar explícitamente con la regla 1:10:100 del activador anterior. **Ejemplo:** la pregunta 3 abre debate sano sobre adopción en campo — dejar que la audiencia cuente sus fracasos con apps que nadie usó. **Transición:** "nos falta ver el cronograma volverse película: la planificación 4D".`,
  });

  /* ---------- 39 · Planificación 4D ---------- */
  DECK.add({
    block: 5,
    title: "Planificación 4D",
    html: `
      ${head("El cronograma que se ve", "4D: el cronograma deja de ser una tabla y <em>se convierte en secuencia</em>")}
      <div class="s-body">
        <div class="cols c-46">
          <div>
            ${klist([
              "<b>Conexión modelo ↔ cronograma:</b> cada actividad del programa se vincula a los elementos del modelo que construye.",
              "<b>Simulación de secuencia:</b> la obra se 'construye' virtualmente — y los problemas de lógica saltan a la vista.",
              "<b>Comunicación universal:</b> un Gantt de 800 líneas lo leen 5 personas; una simulación 4D la entiende todo el equipo, el cliente y el comité.",
              "<b>Escenarios:</b> ¿y si adelantamos los acabados del bloque B? El 4D responde visualmente antes de arriesgar en campo.",
            ])}
          </div>
          ${fr(`<div class="chart-wrap"><h4>Misma información, dos lenguajes</h4>
            <div class="grid g2">
              <div style="border:1px solid var(--line);border-radius:9px;padding:10px">
                <p class="muted" style="font-size:10px;font-family:var(--f-mono);margin-bottom:8px">CRONOGRAMA (tabla)</p>
                ${[68, 88, 52, 75, 40].map((w, i) => `<div style="display:flex;gap:6px;align-items:center;margin-bottom:6px">
                  <span style="font-size:8.5px;color:var(--faint);font-family:var(--f-mono);width:24px">A${i + 1}</span>
                  <span style="height:7px;border-radius:4px;background:var(--violet);opacity:.75;width:${w}%"></span></div>`).join("")}
              </div>
              <div style="border:1px solid var(--line);border-radius:9px;padding:10px">
                <p class="muted" style="font-size:10px;font-family:var(--f-mono);margin-bottom:8px">SIMULACIÓN 4D (modelo)</p>
                <svg viewBox="0 0 130 86" style="width:100%">
                  ${[0,1,2,3].map((f) => `<g>
                    <polygon points="${20},${70 - f * 16} ${65},${58 - f * 16} ${110},${70 - f * 16} ${65},${82 - f * 16}"
                      fill="${f < 2 ? "rgba(23,122,69,.28)" : f === 2 ? "rgba(168,91,11,.28)" : "rgba(24,26,32,.05)"}"
                      stroke="${f < 2 ? "var(--green)" : f === 2 ? "var(--amber)" : "rgba(24,26,32,.25)"}" stroke-width="1"/></g>`).join("")}
                </svg>
                <p style="font-size:8.5px;color:var(--faint);font-family:var(--f-mono);text-align:center;margin-top:4px">verde: ejecutado · ámbar: en curso</p>
              </div>
            </div>
          </div>`, 5)}
        </div>
      </div>
      ${foot("Bloque 5 · Herramientas BIM", "Módulo 2 — simulación 4D · M1 incluye Synchro")}`,
    notes: `**Idea central:** el 4D democratiza el cronograma: lo que era legible para pocos se vuelve comprensible para todos. **Cómo explicarlo:** contrastar los dos lenguajes del gráfico — la misma información como tabla y como modelo coloreado. Destacar el uso de escenarios: probar lógicas constructivas en lo virtual antes de pagar el experimento en lo real. **Ejemplo:** presentar la secuencia al cliente con 4D: las objeciones aparecen en la reunión, no en el mes 6. **Transición:** "y cuando el 4D se junta con Lean, la planificación semanal sube de nivel".`,
  });

  /* ---------- 40 · Lookahead + BIM + Lean ---------- */
  DECK.add({
    block: 5,
    title: "Lookahead + BIM + Lean",
    html: `
      ${head("La sinergia central", "Lookahead sobre el modelo: <em>anticipar en vez de reaccionar</em>",
        "Esta integración BIM–Lean es el corazón del Módulo 2 (42 horas).")}
      <div class="s-body">
        ${cards([
          { icon: "grid", t: "Sectorizar en el modelo", d: "Los sectores del tren de trabajo se definen y visualizan en el modelo: todos entienden dónde empieza y termina cada frente." },
          { icon: "search", t: "Restricciones visibles", d: "Cada restricción del lookahead se asocia a su sector: el mapa de bloqueos de las próximas 4-6 semanas, en colores." },
          { icon: "warn", t: "Interferencias anticipadas", d: "El clash detection alimenta el lookahead: los conflictos detectados se vuelven restricciones a liberar antes de ejecutar." },
          { icon: "check", t: "Confiabilidad medible", d: "El PPC y las causas de no cumplimiento se rastrean por sector: la mejora continua tiene dirección y nombre." },
        ], { cols: 4 })}
        ${fr(`<div class="card accent"><h4>El ciclo virtuoso semanal</h4>
          <p>Modelo sectorizado → lookahead con restricciones → plan semanal confiable → avance registrado en campo →
          PPC y causas → ajuste del plan. <b>Cada vuelta del ciclo, la obra se vuelve más predecible.</b></p></div>`, 5)}
      </div>
      ${foot("Bloque 5 · Herramientas BIM", "Módulo 2 — integración BIM–Lean para producción")}`,
    notes: `**Idea central:** aquí se unen los dos mundos del diplomado: el modelo (BIM) y el flujo (Lean) trabajando en el mismo ciclo semanal. **Cómo explicarlo:** las 4 piezas — sectorizar, ver restricciones, anticipar interferencias, medir confiabilidad — y el ciclo virtuoso completo. Insistir: esto es lo que hace el M2 durante 42 horas con casos reales. **Ejemplo:** la reunión semanal donde el lookahead se proyecta sobre el modelo coloreado: las restricciones se discuten señalando sectores, no leyendo filas. **Transición:** "veamos ese ciclo completo en un caso aplicado de seguimiento semanal".`,
  });

  /* ---------- 41 · Caso aplicado: seguimiento semanal ---------- */
  DECK.add({
    block: 5,
    title: "Caso aplicado: seguimiento semanal de avance",
    html: `
      ${head("Todo junto", "Una semana de control de obra <em>con el sistema integrado</em>")}
      <div class="s-body">
        ${flow([
          { icon: "cube", t: "Modelo", d: "Sectores y metrados listos por frente.", tip: "Lunes: el modelo sectorizado define qué se mide y dónde." },
          { icon: "grid", t: "Sectores", d: "El tren de trabajo asigna cuadrillas.", tip: "Cada sector tiene cuadrilla, actividades y metas de la semana." },
          { icon: "cal", t: "Cronograma", d: "El plan semanal sale del lookahead liberado.", tip: "Solo entran actividades sin restricciones: compromiso confiable." },
          { icon: "gear", t: "Avance real", d: "Campo registra con evidencia (Fieldwire).", tip: "El avance entra digital, con foto y ubicación, el mismo día." },
          { icon: "chart", t: "Dashboard", d: "PPC, curva S y desvíos se calculan solos.", tip: "Viernes: el tablero ya está listo — nadie 'armó' el informe." },
          { icon: "check", t: "Decisión", d: "El comité corrige con una semana de ventaja.", tip: "Se decide sobre causas y tendencias, no sobre percepciones." },
        ])}
        ${fr(`<div class="grid g3 mt-s">
          <div class="stat"><div class="v">0 h</div><div class="l">de armado manual de reportes el viernes</div></div>
          <div class="stat c-cyan"><div class="v">1</div><div class="l">sola versión del avance para todos los actores</div></div>
          <div class="stat c-green"><div class="v">+1 sem</div><div class="l">de anticipación para corregir desvíos</div></div>
        </div>`, 7)}
      </div>
      ${foot("Bloque 5 · Herramientas BIM", "Flujo del taller integrador del Módulo 2")}`,
    notes: `**Idea central:** sintetizar el bloque 5 mostrando la semana tipo: cada herramienta en su lugar dentro de un solo flujo. **Cómo explicarlo:** narrar lunes a viernes sobre el diagrama: modelo→sectores→plan→campo→tablero→comité. Los tres números de abajo son el "antes y después" operativo: cero armado de reportes, una sola versión, una semana de anticipación. **Ejemplo:** comparar con la semana tradicional: viernes de Excel hasta tarde para un informe que describe lo irreversible. **Transición:** "ese 'dashboard que se arma solo' merece su propio bloque: Business Intelligence" → Bloque 6.`,
  });

  /* ---------- Activador B5 — 50-60% de productividad posible ---------- */
  DECK.add({
    block: 5,
    title: "Dato activador — 50-60% de productividad posible",
    cls: "divider",
    html: `
      ${C.activator({
        v: `50–60%`,
        line: "es el salto de productividad que la construcción puede capturar actuando sobre sus palancas — <b>digitalización y tecnología incluidas</b> — según el análisis global de McKinsey.",
        q: "¿Qué parte de ese salto depende de tu próxima obra?",
        src: "McKinsey Global Institute — Reinventing Construction (2017)",
      })}
      ${foot("Bloque 5 · Dato activador")}`,
    notes: `**Idea central:** cerrar el bloque de herramientas mirando el premio: el flujo integrado que acabamos de ver es exactamente la palanca que MGI cuantifica. **Cómo explicarlo:** contrastar con el 1% anual histórico del bloque 1 — la brecha entre lo que el sector hace y lo que puede hacer es el espacio profesional de la audiencia. **Ejemplo:** "la semana tipo que vimos (cero reportes manuales, una sola versión, +1 semana de anticipación) es ese 50% aterrizado". **Transición:** "y la pieza que convierte los datos del flujo en decisiones es el siguiente bloque: BI" → Bloque 6.`,
  });
})();
