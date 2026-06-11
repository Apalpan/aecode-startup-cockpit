/* ============================================================
   BLOQUE 3 — Marcos colaborativos: BIM, Lean, VDC e IPD
   Slides 17–27
   ============================================================ */
(function () {
  "use strict";
  const { head, foot, fr, cards, stats, klist, quote, cols2, flow, table, pills } = C;

  /* ---------- 17 · Por qué la colaboración falla ---------- */
  DECK.add({
    block: 3,
    title: "Por qué la colaboración falla",
    html: `
      ${head("Bloque 3 · Marcos colaborativos", "La colaboración no falla por mala voluntad: <em>falla por diseño</em>")}
      <div class="s-body">
        ${cards([
          { icon: "grid", t: "Silos organizacionales", d: "Diseño, oficina técnica y obra optimizan su propia métrica, no la del proyecto." },
          { icon: "doc", t: "Contratos adversariales", d: "Si tu ganancia es mi pérdida, compartir información es entregar munición." },
          { icon: "clock", t: "Información tardía", d: "Las definiciones llegan después de que el frente las necesitaba." },
          { icon: "target", t: "Objetivos no alineados", d: "El proyectista entrega planos; el constructor, avance; el cliente quería valor." },
          { icon: "chart", t: "Sin métricas compartidas", d: "Cada parte mide lo suyo; nadie mide la salud del flujo completo." },
          { icon: "warn", t: "Riesgo transferido", d: "El riesgo se empuja contrato abajo en vez de gestionarse donde mejor se controla." },
        ], { cols: 3 })}
      </div>
      ${foot("Bloque 3 · Marcos colaborativos")}`,
    notes: `**Idea central:** la falta de colaboración es un problema estructural (incentivos y contratos), no de actitud. **Cómo explicarlo:** enfatizar la tarjeta de contratos adversariales: con suma cero, ocultar información es racional. Por eso "pedirle colaboración" a la gente no funciona: hay que rediseñar el marco. **Ejemplo:** la reunión de obra donde cada parte llega con su propia versión del avance, preparada para defenderse. **Transición:** "para eso existen los marcos colaborativos: cambian las reglas del juego. Veámoslos como capas".`,
  });

  /* ---------- 18 · Marcos colaborativos: visión general ---------- */
  DECK.add({
    block: 3,
    title: "Marcos colaborativos: visión general",
    html: `
      ${head("Las capas del sistema", "BIM, Lean, VDC e IPD: <em>capas complementarias</em>, no competidoras")}
      <div class="s-body">
        ${flow([
          { icon: "doc",   t: "IPD", d: "Capa contractual: alinea incentivos, riesgo y beneficio compartidos.", tip: "El acuerdo: cómo nos organizamos y repartimos riesgo/beneficio." },
          { icon: "cycle", t: "Lean", d: "Capa de producción: flujo, desperdicio cero, confiabilidad.", tip: "La filosofía de producción: generar valor y estabilizar el flujo." },
          { icon: "target",t: "VDC", d: "Capa de gestión: objetivos, métricas, ICE y modelos conectados.", tip: "El marco que une objetivos del cliente con procesos, modelos y métricas." },
          { icon: "cube",  t: "BIM", d: "Capa de información: modelos y datos estructurados del activo.", tip: "La tecnología de información: el qué construimos, descrito con datos." },
        ])}
        ${fr(`<div class="card accent mt-m"><h4>Cómo leer este mapa</h4>
          <p><b>IPD</b> define las reglas del juego · <b>Lean</b> define cómo producimos · <b>VDC</b> define cómo gestionamos y medimos ·
          <b>BIM</b> define cómo estructuramos la información. Puedes aplicarlas por separado — pero su poder real está en la combinación.</p></div>`, 5)}
      </div>
      ${foot("Bloque 3 · Marcos colaborativos")}`,
    notes: `**Idea central:** desarmar la confusión típica "¿BIM o Lean o VDC?": son capas de un mismo edificio conceptual. **Cómo explicarlo:** recorrer el flujo y dar la lectura del recuadro: reglas → producción → gestión → información. Aclarar que casi ningún proyecto aplica las cuatro a la vez, y no pasa nada: se combinan según contexto. **Ejemplo:** un proyecto con Lean sin BIM (pizarras físicas) funciona; con BIM sin Lean, el modelo documenta un caos puntual. **Transición:** "empecemos por la capa de información: ¿qué es BIM realmente?"`,
  });

  /* ---------- 19 · BIM no es solo modelar ---------- */
  DECK.add({
    block: 3,
    title: "BIM no es solo modelar",
    html: `
      ${head("Capa de información", "BIM no es un software de 3D: es <em>gestión de información</em> del activo",
        "Tres niveles de lectura del mismo concepto:")}
      <div class="s-body">
        ${cards([
          { tag: "Simple", t: "Un modelo con información", d: "Cada elemento del modelo sabe qué es, de qué está hecho, cuánto mide y a qué fase pertenece. Geometría + datos.", icon: "cube" },
          { tag: "En obra", tagCls: "t-cyan", t: "Coordinar, medir y controlar", d: "El modelo permite detectar interferencias antes de construir, extraer metrados consistentes, sectorizar frentes y medir avance.", icon: "gear" },
          { tag: "Estratégico", tagCls: "t-green", t: "Una base de datos visual para decidir", d: "El proyecto completo se vuelve consultable: cualquier pregunta de cantidades, estados o cambios tiene una respuesta trazable.", icon: "db" },
        ])}
        ${fr(`<p class="center muted mt-s" style="font-size:14px">Por eso la definición seria habla de <b class="gold">gestión de la información durante todo el ciclo de vida del activo</b> — del diseño a la operación.</p>`, 4)}
      </div>
      ${foot("Bloque 3 · Marcos colaborativos", "ISO 19650-1 — conceptos y principios")}`,
    notes: `**Idea central:** elevar la definición de BIM de "software 3D" a "gestión de información del ciclo de vida". **Cómo explicarlo:** usar los tres niveles: simple (modelo con datos), obra (coordinar/medir/controlar), estratégico (base de datos visual). Este formato de 3 niveles se repetirá en otros conceptos de la clase. **Ejemplo:** preguntar al modelo "¿cuántos m³ de concreto f'c=280 quedan por vaciar en el sector 2?" y obtener respuesta en segundos. **Transición:** "esa información se organiza en dimensiones; las que importan para control de obra son estas".`,
  });

  /* ---------- 20 · Dimensiones BIM ---------- */
  DECK.add({
    block: 3,
    title: "Dimensiones BIM aplicadas al control",
    html: `
      ${head("Las dimensiones útiles", "Dimensiones BIM <em>aplicadas al seguimiento y control</em>",
        "Pasa el cursor sobre cada dimensión.")}
      <div class="s-body">
        <div class="grid g4">
          ${[
            ["3D", "Coordinación", "Geometría federada de todas las especialidades: interferencias resueltas antes del vaciado.", "Detección de conflictos en Navisworks: cada clash resuelto en oficina cuesta ~100× menos que en campo."],
            ["4D", "Tiempo", "El cronograma conectado al modelo: la secuencia constructiva se simula y se controla.", "Comparar planificado vs ejecutado visualmente, semana a semana, sobre el modelo."],
            ["5D", "Costos", "Metrados y presupuesto vinculados al modelo: valorizaciones consistentes.", "Presto u otros conectados al modelo: el metrado deja de ser una discusión mensual."],
            ["6D+", "Datos y operación", "Sostenibilidad, activos y trazabilidad para la operación del edificio.", "La información de obra se hereda a mantenimiento: el as-built deja de ser un PDF muerto."],
          ].map((d, i) => fr(`
            <div class="card" data-tip="${d[3]}">
              <div class="v" style="font-family:var(--f-disp);font-size:34px;font-weight:700;color:var(--gold-2)">${d[0]}</div>
              <h4 class="mt-s">${d[1]}</h4><p>${d[2]}</p>
            </div>`, i)).join("")}
        </div>
        ${fr(`<div class="card accent"><h4>Para esta clase, la clave es 3D + 4D + 5D</h4>
          <p>Coordinación, tiempo y costo son el triángulo del control de obra. El diplomado los trabaja con Revit, Navisworks y Presto en el Módulo 2.
          La regla técnica que ordena todo: el <b>nivel de información necesario (LOIN, ISO 19650)</b> — cada uso define cuánta geometría
          y cuántos datos requiere el modelo. Se modela lo justo para decidir, no lo máximo posible.</p></div>`, 5)}
      </div>
      ${foot("Bloque 3 · Marcos colaborativos")}`,
    notes: `**Idea central:** las "dimensiones" no son marketing: son capas de uso del mismo modelo para control. **Cómo explicarlo:** 3D evita el retrabajo (interferencias), 4D anticipa el cronograma, 5D estabiliza el costo, 6D+ hereda los datos a operación. No enredarse en cuántas dimensiones existen — debate estéril; importan los usos. **Ejemplo:** un clash detectado en modelo cuesta una reunión; el mismo clash en campo cuesta demolición, RFI y reclamo. **Transición:** "para que toda esa información no sea un caos, existe una norma que pone orden: la ISO 19650".`,
  });

  /* ---------- 21 · ISO 19650 ---------- */
  DECK.add({
    block: 3,
    title: "ISO 19650: gestión de información",
    html: `
      ${head("El estándar", "ISO 19650 en simple: <em>quién produce qué información, cuándo y cómo</em>")}
      <div class="s-body">
        ${flow([
          { icon: "target", t: "Requisitos", d: "El cliente define qué información necesita (EIR/OIR).", tip: "Todo parte de los requisitos de información del cliente: sin esto, se modela por modelar." },
          { icon: "users", t: "Roles", d: "Parte designante, designada, equipos de entrega.", tip: "Responsabilidades claras: quién genera, quién revisa, quién aprueba." },
          { icon: "doc", t: "BEP", d: "El plan de ejecución BIM: el cómo acordado.", tip: "El BEP es el contrato de información del proyecto. En el M2 elaboras uno completo." },
          { icon: "cloud", t: "CDE", d: "El entorno común donde la información vive y fluye.", tip: "Una sola fuente de verdad con estados y permisos." },
          { icon: "check", t: "Estados", d: "WIP → Compartido → Publicado → Archivado.", tip: "Cada contenedor de información tiene estado, revisión y autorización: trazabilidad total." },
        ])}
        ${fr(`<div class="card accent mt-m"><h4>Traducción al castellano de obra</h4>
          <p>ISO 19650 responde tres preguntas que hoy generan peleas: <b>¿qué versión vale?</b> (estados),
          <b>¿quién debía entregar esto?</b> (roles y matriz de responsabilidades) y <b>¿dónde está el archivo?</b> (CDE).
          Los requisitos bajan en cascada — <b>OIR → AIR → PIR → EIR</b>: de los objetivos de la organización y del activo,
          a lo que el proyecto y cada designado deben entregar. No es burocracia: es el fin de las discusiones por versiones.</p></div>`, 6)}
      </div>
      ${foot("Bloque 3 · Marcos colaborativos", "ISO 19650-1/-2 — Organización y digitalización de la información")}`,
    notes: `**Idea central:** desmitificar la ISO 19650: es sentido común estandarizado sobre quién produce qué información, cuándo y cómo. **Cómo explicarlo:** recorrer el flujo requisitos→roles→BEP→CDE→estados y aterrizar con la "traducción al castellano de obra". Mencionar que Plan BIM Perú adopta este estándar. **Ejemplo:** el estado "Publicado" elimina la pregunta más cara de la obra: "¿este plano vale o hay uno más nuevo?". **Transición:** "BIM ordena la información. Pero la obra además produce. Y de producción sabe otra escuela: Lean".`,
  });

  /* ---------- 22 · Lean Construction ---------- */
  DECK.add({
    block: 3,
    title: "Lean Construction: la obra como producción",
    html: `
      ${head("Capa de producción", "Lean Construction: pensar la obra como <em>sistema de producción</em>")}
      <div class="s-body">
        ${cards([
          { icon: "target", t: "Valor", d: "Definido por el cliente. Todo lo que no aporta valor es candidato a eliminarse." },
          { icon: "cycle", t: "Flujo", d: "El trabajo debe fluir sin interrupciones: la espera es el desperdicio más caro y más invisible." },
          { icon: "warn", t: "Desperdicio", d: "Sobreproducción, esperas, transporte, reprocesos, inventario, movimiento, defectos… y talento sin usar." },
          { icon: "chart", t: "Variabilidad", d: "El enemigo silencioso: una obra impredecible no se puede optimizar, solo apagar incendios." },
          { icon: "check", t: "Confiabilidad", d: "Cumplir lo prometido semana a semana (PPC) vale más que un plan maestro perfecto." },
          { icon: "bolt", t: "Mejora continua", d: "Medir causas de no cumplimiento y atacarlas: la obra aprende de sí misma." },
        ], { cols: 3 })}
      </div>
      ${foot("Bloque 3 · Marcos colaborativos", "Koskela (1992) · Lean Construction Institute")}`,
    notes: `**Idea central:** Lean cambia la pregunta de "¿cómo avanzamos más rápido?" a "¿por qué se interrumpe el flujo?". **Cómo explicarlo:** recorrer los 6 principios conectándolos: el valor lo define el cliente; lo que no es valor es desperdicio; el desperdicio nace de la variabilidad; la variabilidad se combate con confiabilidad y mejora continua. **Ejemplo:** la cuadrilla "rápida" que avanza sin liberar restricciones y luego espera 3 días el acero: velocidad sin flujo. **Transición:** "esto viene de la manufactura. ¿Y qué puede aprender una obra de una fábrica?"`,
  });

  /* ---------- 23 · Lean Manufacturing → construcción ---------- */
  DECK.add({
    block: 3,
    title: "Lean Manufacturing aplicado a construcción",
    html: `
      ${head("La analogía honesta", "Una obra <em>no es una fábrica</em>… pero puede aprender a producir como una")}
      <div class="s-body">
        <div class="cols c-46">
          <div>
            ${fr(`<div class="card"><span class="tag t-risk">Lo que es distinto</span>
              <ul class="klist mt-s" style="gap:8px">
                <li>El producto no se mueve: <b>las estaciones (cuadrillas) se mueven</b></li>
                <li>Cada proyecto es un <b>prototipo</b> con equipo nuevo</li>
                <li>Clima, suelo y entorno agregan <b>variabilidad natural</b></li>
              </ul></div>`, 1)}
            ${fr(`<div class="card mt-m"><span class="tag t-green">Lo que sí se traslada</span>
              <ul class="klist check mt-s" style="gap:8px">
                <li><b>Flujo y takt:</b> sectores a ritmo constante (takt = tiempo disponible ÷ sectores)</li>
                <li><b>Restricciones:</b> no liberar trabajo que no está listo para ejecutarse</li>
                <li><b>Buffers:</b> amortiguadores conscientes, no inventarios accidentales</li>
                <li><b>Estandarización:</b> 5S, A3, trabajo repetible y medible</li>
              </ul></div>`, 2)}
          </div>
          ${fr(`<div class="chart-wrap"><h4>El tren de trabajo (Line of Balance)</h4>
            <svg viewBox="0 0 430 250" style="width:100%">
              ${[0, 1, 2, 3, 4].map((s) => `<text x="8" y="${42 + s * 44}" fill="var(--faint)" font-size="9.5" font-family="var(--f-mono)">S${5 - s}</text>`).join("")}
              ${["Estructuras", "Albañilería", "Instalaciones", "Acabados"].map((n, i) => {
                const x0 = 40 + i * 38, y0 = 218, x1 = x0 + 150, y1 = 28;
                const colors = ["var(--violet)", "var(--cyan)", "var(--gold)", "var(--green)"];
                return `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" stroke="${colors[i]}" stroke-width="2.4"/>
                  <text x="${x1 + 4}" y="${y1 + 10 + i * 13}" fill="${colors[i]}" font-size="9.5" font-family="var(--f-sans)">${n}</text>`;
              }).join("")}
              <text x="215" y="245" text-anchor="middle" fill="var(--faint)" font-size="9.5" font-family="var(--f-mono)">tiempo →  (cuadrillas avanzando por sectores a ritmo constante)</text>
            </svg>
          </div>`, 3)}
        </div>
      </div>
      ${foot("Bloque 3 · Marcos colaborativos")}`,
    notes: `**Idea central:** la analogía con la fábrica es útil si es honesta: la obra no es línea de montaje, pero el flujo, el takt y las restricciones sí se trasladan. **Cómo explicarlo:** primero validar las diferencias (gana credibilidad ante la audiencia con experiencia de campo), luego mostrar el tren de trabajo: cuadrillas como "estaciones móviles" avanzando por sectores a ritmo constante. **Ejemplo:** un edificio de vivienda donde cada piso es un vagón: estructuras, albañilería e instalaciones se persiguen sin alcanzarse. **Transición:** "y la herramienta Lean más usada en obra es el Last Planner System".`,
  });

  /* ---------- 24 · Last Planner System ---------- */
  DECK.add({
    block: 3,
    title: "Last Planner System",
    html: `
      ${head("La herramienta estrella de Lean", "Last Planner System: <em>de lo que debería hacerse a lo que se hará</em>",
        "PPC = compromisos cumplidos ÷ compromisos planificados × 100 — medido cada semana, sin excepciones.")}
      <div class="s-body">
        <div class="cols c-55">
          ${flow([
            { icon: "map", t: "Plan maestro", d: "Hitos del proyecto: lo que DEBERÍA hacerse.", tip: "Visión completa: define fases e hitos contractuales." },
            { icon: "search", t: "Lookahead", d: "4-6 semanas: lo que PUEDE hacerse.", tip: "Aquí se detectan restricciones: materiales, planos, permisos, mano de obra, equipos." },
            { icon: "check", t: "Plan semanal", d: "Compromisos: lo que SE HARÁ.", tip: "Los últimos planificadores (capataces, jefes de frente) se comprometen con actividades liberadas." },
            { icon: "chart", t: "PPC + causas", d: "Lo que SE HIZO, y por qué no.", tip: "Percent Plan Complete: % de compromisos cumplidos. Las causas de no cumplimiento alimentan la mejora." },
          ])}
          <div style="text-align:center">
            ${fr(CH.gauge(78, "PPC — confiabilidad semanal"), 4)}
            ${fr(`<p class="muted mt-s" style="font-size:12.5px">Un PPC sostenido sobre <b class="gold">75-80%</b> distingue a las obras confiables.<br>Lo importante no es el número: es <b>atacar las causas</b> de cada incumplimiento.</p>`, 5)}
          </div>
        </div>
      </div>
      ${foot("Bloque 3 · Marcos colaborativos", "Ballard & Howell — Last Planner System")}`,
    notes: `**Idea central:** LPS convierte la planificación de un documento en un sistema social de compromisos medibles. **Cómo explicarlo:** la cascada debería→puede→se hará→se hizo. La magia está en el lookahead: detectar restricciones antes de prometer, y en el PPC: medir confiabilidad, no solo avance. **Ejemplo:** "vaciar losa sector 3 el jueves" solo entra al plan semanal si acero, encofrado, bomba y planos están liberados. Si no se cumple, la causa queda registrada y se ataca. **Transición:** "LPS alinea la producción. Pero ¿quién alinea los contratos? Ahí entra IPD".`,
  });

  /* ---------- 25 · IPD ---------- */
  DECK.add({
    block: 3,
    title: "IPD: alinear incentivos",
    html: `
      ${head("Capa contractual", "IPD: cuando <em>ganamos o perdemos juntos</em>, colaborar se vuelve racional")}
      <div class="s-body">
        <div class="grid g3">
          ${fr(`<div class="card"><span class="tag">Qué es</span>
            <h4 class="mt-s">Integrated Project Delivery</h4>
            <p>Modelo de contratación que integra cliente, diseñador y constructor desde etapas tempranas, con <b>riesgo y beneficio compartidos</b> en un acuerdo multiparte.</p></div>`, 1)}
          ${fr(`<div class="card"><span class="tag t-green">Beneficios</span>
            <ul class="klist check mt-s" style="gap:8px">
              <li>Decisiones tempranas con el constructor en la mesa</li>
              <li>Incentivo real para compartir información</li>
              <li>Menos reclamos: el pleito deja de ser negocio</li>
            </ul></div>`, 2)}
          ${fr(`<div class="card"><span class="tag t-risk">Limitaciones</span>
            <ul class="klist mt-s" style="gap:8px">
              <li>Exige madurez contractual y confianza inicial</li>
              <li>Marco legal poco habitual en LATAM</li>
              <li>No apto para todo tipo y tamaño de proyecto</li>
            </ul></div>`, 3)}
        </div>
        ${fr(`<div class="card accent"><h4>Lo que sí puedes aplicar mañana</h4>
          <p>Aunque tu contrato no sea IPD, sus prácticas se importan: involucrar a construcción en el diseño,
          definir métricas compartidas, sesiones de decisión conjuntas (ICE) y transparencia de costos. <b>IPD es la dirección, no un requisito.</b></p></div>`, 4)}
      </div>
      ${foot("Bloque 3 · Marcos colaborativos", "AIA — Integrated Project Delivery: A Guide")}`,
    notes: `**Idea central:** IPD ataca la raíz contractual del problema: si el contrato premia pelear, la gente pelea. **Cómo explicarlo:** explicar el acuerdo multiparte con riesgo/beneficio compartido, ser honesto con las limitaciones (poco común en LATAM) y aterrizar con "lo que sí puedes aplicar mañana". Esa honestidad da credibilidad. **Ejemplo:** en un IPD, un ahorro encontrado por el constructor beneficia a todos — por eso lo comparte en vez de guardárselo. **Transición:** "y el marco que une todo esto con métricas y modelos tiene nombre propio: VDC".`,
  });

  /* ---------- 26 · VDC ---------- */
  DECK.add({
    block: 3,
    title: "VDC: objetivos, procesos, modelos y métricas",
    html: `
      ${head("Capa de gestión", "VDC: el marco que conecta <em>objetivos → procesos → modelos → métricas</em>",
        "Virtual Design & Construction — CIFE, Universidad de Stanford")}
      <div class="s-body">
        <div class="cols c-55">
          <div>
            ${klist([
              "<b>Objetivos del cliente y del proyecto:</b> claros, medibles y públicos — sin esto no hay estrategia posible.",
              "<b>ICE (Ingeniería Concurrente Integrada):</b> sesiones donde todas las disciplinas deciden juntas, con el modelo en pantalla y latencia cero.",
              "<b>BIM:</b> la información de alta calidad que alimenta cada decisión.",
              "<b>PPM (Project Production Management):</b> gestionar la producción con métricas — objetivos de producción y factores controlables.",
              "<b>Métricas:</b> del cliente, del proyecto y de producción. Lo que no se mide, no se gestiona.",
            ])}
          </div>
          ${fr(`<div class="chart-wrap"><h4>Framework VDC (matriz POP)</h4>
            <svg viewBox="0 0 400 290" style="width:100%">
              <rect x="110" y="14" width="180" height="44" rx="10" fill="var(--gold-soft)" stroke="var(--gold)"/>
              <text x="200" y="33" text-anchor="middle" fill="var(--gold-2)" font-size="11.5" font-family="var(--f-disp)" font-weight="700">Objetivos del cliente</text>
              <text x="200" y="48" text-anchor="middle" fill="var(--mut)" font-size="9.5">y del proyecto</text>
              ${[["ICE", "personas que deciden", 18], ["BIM", "información confiable", 148], ["PPM", "producción gestionada", 278]].map((b) => `
                <rect x="${b[2]}" y="120" width="106" height="58" rx="10" fill="var(--panel)" stroke="var(--line)"/>
                <text x="${b[2] + 53}" y="145" text-anchor="middle" fill="var(--ink)" font-size="13" font-family="var(--f-disp)" font-weight="700">${b[0]}</text>
                <text x="${b[2] + 53}" y="162" text-anchor="middle" fill="var(--mut)" font-size="8.5">${b[1]}</text>
                <line x1="${b[2] + 53}" y1="120" x2="200" y2="58" stroke="var(--gold-line)" stroke-width="1.3"/>`).join("")}
              <rect x="92" y="222" width="216" height="44" rx="10" fill="var(--violet-soft)" stroke="var(--violet)"/>
              <text x="200" y="241" text-anchor="middle" fill="var(--ink-2)" font-size="11" font-family="var(--f-disp)" font-weight="600">Métricas + factores controlables</text>
              <text x="200" y="256" text-anchor="middle" fill="var(--mut)" font-size="9">medir → ajustar → volver a medir</text>
              ${[71, 201, 331].map((x) => `<line x1="${x}" y1="178" x2="200" y2="222" stroke="rgba(96,83,201,.45)" stroke-width="1.2"/>`).join("")}
            </svg>
          </div>`, 6)}
        </div>
      </div>
      ${foot("Bloque 3 · Marcos colaborativos", "CIFE, Stanford University — VDC Framework")}`,
    notes: `**Idea central:** VDC es el pegamento gerencial: une objetivos, personas (ICE), información (BIM) y producción (PPM) con métricas. **Cómo explicarlo:** leer el diagrama de arriba hacia abajo: los objetivos mandan; ICE/BIM/PPM son los medios; las métricas cierran el ciclo. Mencionar que es el framework de Stanford y que el M1 incluye certificación en estas bases. **Ejemplo:** una sesión ICE real: las 5 disciplinas frente al modelo resuelven en 2 horas lo que por correo tomaba 3 semanas. **Transición:** "pongamos los cuatro marcos lado a lado para fijarlos".`,
  });

  /* ---------- 27 · Comparativa BIM vs Lean vs VDC vs IPD ---------- */
  DECK.add({
    block: 3,
    title: "Comparativa: BIM · Lean · VDC · IPD",
    html: `
      ${head("Síntesis del bloque", "Cuatro marcos, <em>un objetivo común</em>: decidir mejor en obra")}
      <div class="s-body">
        ${table(
          ["", "Qué es", "Qué problema resuelve", "Artefactos típicos", "Riesgo que reduce"],
          [
            ["<b>BIM</b>", "Gestión de información con modelos", "Información dispersa e inconsistente", "Modelos federados, BEP, metrados, clash reports", "Retrabajo por interferencias y versiones"],
            ["<b>Lean</b>", "Filosofía de producción", "Flujo interrumpido y desperdicio", "LPS, lookahead, PPC, tren de trabajo, A3", "Improductividad y variabilidad"],
            ["<b>VDC</b>", "Marco de gestión (Stanford)", "Gestión sin objetivos ni métricas", "Matriz POP, sesiones ICE, métricas de producción", "Decisiones tardías y desalineadas"],
            ["<b>IPD</b>", "Modelo contractual colaborativo", "Incentivos enfrentados", "Acuerdo multiparte, pool de riesgo/beneficio", "Reclamos y comportamiento adversarial"],
          ]
        )}
        ${fr(`<p class="center muted mt-s" style="font-size:14px"><b class="gold">Módulo 1 del diplomado:</b> estos cuatro marcos, con taller aplicado de planificación Lean-VDC y matriz POP sobre un caso real.</p>`, 4)}
      </div>
      ${foot("Bloque 3 · Marcos colaborativos")}`,
    notes: `**Idea central:** cerrar el bloque fijando las diferencias en una sola vista — este slide es la "chuleta" mental del bloque 3. **Cómo explicarlo:** leer por columnas, no por filas: primero "qué es" (naturaleza distinta de cada uno), luego "qué problema resuelve". Reforzar: no compiten, se complementan. **Ejemplo:** pregunta de examen mental: "¿LPS es BIM o Lean?" — Lean. "¿El BEP?" — BIM. "¿La sesión ICE?" — VDC. **Transición:** "bajemos ahora del marco conceptual al lugar donde la información vive o muere: el flujo entre diseño, oficina técnica y obra" → Bloque 4.`,
  });
})();
