/* ============================================================
   BLOQUE 1 — Apertura e impacto: por qué esta clase importa
   Slides 01–10
   ============================================================ */
(function () {
  "use strict";
  const { head, foot, fr, cards, stats, klist, quote, cols2, pills, isoBuilding, table } = C;

  /* ---------- 01 · Portada ---------- */
  DECK.add({
    block: 1,
    title: "Portada — BIM, Lean y BI",
    cls: "hero",
    html: `
      ${isoBuilding()}
      <div class="s-body">
        <div class="hbrand fr" style="--d:60ms">
          <img src="assets/brand/aecode-logo-ink.svg" alt="AECODE">
          <span class="tag">Diplomado Internacional</span>
        </div>
        <h1 class="htitle fr" style="--d:160ms">BIM, Lean y BI aplicado al <em>Seguimiento y Control de Obra</em></h1>
        <p class="hsub fr" style="--d:280ms">Planificar · Automatizar · Integrar · <b>Decidir con datos</b></p>
        <div class="hmeta">
          ${["Clase magistral introductoria", "150 horas certificadas", "CIP + Autodesk + AECODE", "En vivo · GMT-5"]
            .map((p, i) => `<span class="tag ${i === 0 ? "t-cyan" : ""} fr" style="--d:${380 + i * 80}ms">${p}</span>`).join("")}
        </div>
      </div>
      ${foot("aecode.ai · AECODE Ingeniería 4.0 & Programación")}`,
    notes: `**Idea central:** abrir con autoridad y calma: esta no es una charla de software, es una clase sobre cómo se controla una obra moderna. **Cómo explicarlo (30-60 s):** bienvenida, presentación personal breve (proyectos reales, no solo títulos) y el encuadre: "hoy vamos a entender por qué BIM, Lean y BI no son tres temas, sino un solo sistema". **Ejemplo:** mencionar una obra conocida con atrasos públicos para anclar realidad. **Transición:** "antes de hablar del programa, déjenme prometerles algo concreto…" → promesa de la sesión.`,
  });

  /* ---------- 02 · La promesa de la sesión ---------- */
  DECK.add({
    block: 1,
    title: "La promesa de la sesión",
    html: `
      ${head("Sesión 0 · Clase magistral", "Al terminar esta sesión vas a <em>entender el sistema completo</em>",
        "No una lista de softwares: un mapa mental que conecta problema, metodología, herramientas y carrera.")}
      <div class="s-body">
        ${cards([
          { icon: "warn",  t: "El problema", d: "Por qué la obra sigue fallando aunque cada vez hay más tecnología disponible." },
          { icon: "flow",  t: "El sistema", d: "La obra entendida como un sistema de producción e información, no como documentos sueltos." },
          { icon: "layers", t: "La metodología", d: "Qué resuelven BIM, Lean, VDC, IPD, CDE y BI — y por qué funcionan juntos, no por separado." },
          { icon: "gear",  t: "Las herramientas", d: "Dónde encajan Revit, Navisworks, ACC, Trimble Connect, Presto, Fieldwire, Power BI e IA." },
          { icon: "map",   t: "La ruta", d: "Cómo el diplomado convierte todo esto en práctica: 4 módulos, talleres y entregables reales." },
          { icon: "grad",  t: "La oportunidad", d: "Qué perfil profesional está pidiendo el mercado AEC y cómo posicionarte en él." },
        ], { cols: 3 })}
      </div>
      ${foot("Bloque 1 · Apertura")}`,
    notes: `**Idea central:** fijar expectativas altas y concretas: al final de la clase el participante tendrá un mapa mental completo. **Cómo explicarlo:** recorrer las 6 tarjetas en orden — problema → sistema → metodología → herramientas → ruta → oportunidad — y subrayar que el orden importa: las herramientas van al final, no al inicio. **Ejemplo:** "si hoy te preguntan en una entrevista qué es VDC y respondes con un software, esta clase es para ti". **Transición:** "y todo empieza con una pregunta incómoda…"`,
  });

  /* ---------- 03 · La pregunta central ---------- */
  DECK.add({
    block: 1,
    title: "La pregunta central",
    html: `
      <div class="s-body">
        ${quote(
          "¿Por qué seguimos teniendo <em>atrasos, sobrecostos y retrabajos</em>… si cada vez tenemos más software?",
          "La pregunta que va a guiar toda la sesión"
        )}
        <div class="grid g2 mt-l" style="max-width:880px;margin-left:auto;margin-right:auto">
          ${fr(`<div class="card"><span class="tag t-risk">La obra real</span>
            <h4 class="mt-s">Planos vencidos, WhatsApp, correos cruzados</h4>
            <p>La información existe, pero llega tarde, incompleta o a la persona equivocada.</p></div>`, 4)}
          ${fr(`<div class="card"><span class="tag t-green">La obra posible</span>
            <h4 class="mt-s">Modelo + datos + tablero integrado</h4>
            <p>La misma obra, con información estructurada que fluye hasta la decisión.</p></div>`, 5)}
        </div>
      </div>
      ${foot("Bloque 1 · Apertura")}`,
    notes: `**Idea central:** el problema de la construcción no es falta de tecnología, es falta de integración. **Cómo explicarlo:** lanzar la pregunta y dejar 5 segundos de silencio real. Luego: "tenemos más software que nunca y los mismos problemas de siempre; algo no cuadra". **Ejemplo:** pedir a la audiencia que levante la mano quien usó hoy WhatsApp para coordinar algo crítico de obra — siempre son mayoría. **Transición:** "para responderla, primero miremos cómo está organizada la industria…"`,
  });

  /* ---------- 04 · La industria AEC como sistema fragmentado ---------- */
  DECK.add({
    block: 1,
    title: "La industria AEC: sistema fragmentado",
    html: () => {
      // Diagrama radial de actores con vínculos débiles
      const actors = ["Cliente", "Diseño", "Of. técnica", "Obra", "Calidad", "Seguridad", "Costos", "Planificación", "Proveedores", "Supervisión"];
      const cx = 330, cy = 215, R = 175;
      let svg = "";
      const pos = actors.map((a, i) => {
        const ang = (i / actors.length) * Math.PI * 2 - Math.PI / 2;
        return [cx + R * Math.cos(ang), cy + R * 0.82 * Math.sin(ang), a];
      });
      // vínculos punteados (débiles) entre algunos pares no contiguos
      [[0, 3], [1, 3], [2, 6], [4, 7], [5, 3], [8, 3], [9, 1], [7, 3], [6, 9], [2, 1]].forEach(([a, b]) => {
        svg += `<line x1="${pos[a][0]}" y1="${pos[a][1]}" x2="${pos[b][0]}" y2="${pos[b][1]}"
          stroke="rgba(192,40,90,.4)" stroke-width="1.1" stroke-dasharray="3 6"/>`;
      });
      pos.forEach((p) => {
        svg += `<g><circle cx="${p[0]}" cy="${p[1]}" r="33" fill="var(--panel)" stroke="var(--line)"/>
          <text x="${p[0]}" y="${p[1] + 4}" text-anchor="middle" fill="var(--ink-2)" font-size="10.5" font-family="var(--f-disp)" font-weight="600">${p[2]}</text></g>`;
      });
      svg += `<text x="${cx}" y="${cy - 6}" text-anchor="middle" fill="var(--risk)" font-size="12" font-family="var(--f-mono)" letter-spacing="2">¿INFORMACIÓN</text>
              <text x="${cx}" y="${cy + 12}" text-anchor="middle" fill="var(--risk)" font-size="12" font-family="var(--f-mono)" letter-spacing="2">COMPARTIDA?</text>`;
      return `
      ${head("El diagnóstico", "Una industria de <em>especialistas desconectados</em>",
        "Cada actor optimiza su parte. Nadie es dueño del flujo completo de información.")}
      <div class="s-body">
        <div class="cols c-55">
          <div class="fr" style="--d:200ms"><svg viewBox="0 0 660 430" style="width:100%">${svg}</svg></div>
          <div>
            ${klist([
              "<b>10+ actores</b> producen y consumen información del mismo proyecto.",
              "Cada uno con <b>sus propios formatos</b>: planos, hojas de cálculo, correos, chats.",
              "Los contratos suelen ser <b>secuenciales y adversariales</b>: el riesgo se transfiere, no se gestiona.",
              "Resultado: la información viaja por <b>vínculos informales y frágiles</b> (las líneas punteadas).",
            ])}
          </div>
        </div>
      </div>
      ${foot("Bloque 1 · Apertura")}`;
    },
    notes: `**Idea central:** la fragmentación no es un accidente: es la estructura de la industria. **Cómo explicarlo:** señalar el diagrama: cada círculo es un mundo con sus propios archivos e incentivos; las líneas punteadas son llamadas, correos y chats — vínculos que se rompen bajo presión. **Ejemplo:** un RFI que pasa por 4 manos antes de llegar al proyectista, y la respuesta vuelve cuando el elemento ya se vació. **Transición:** "y sobre esta estructura fragmentada, le hemos puesto más herramientas… veamos qué pasó".`,
  });

  /* ---------- Checkpoint B1.a — fragmentación ---------- */
  DECK.add({
    block: 1,
    title: "Checkpoint — fragmentación e información",
    html: `
      ${head("Checkpoint · participa", "Tres preguntas antes de seguir",
        "Piensa tu respuesta (o vota en voz alta) y haz clic en cada tarjeta para revelar la correcta.")}
      <div class="s-body">
        ${C.quiz([
          { q: "¿Cuál es la causa raíz de los problemas crónicos de la obra?",
            opts: ["Falta de software moderno", "Falta de integración de la información", "Falta de personal capacitado"],
            ok: 1, why: "Hay más herramientas que nunca y los mismos problemas: lo que falla es que la información no fluye entre los actores." },
          { q: "En la industria AEC fragmentada, ¿quién es dueño del flujo completo de información?",
            opts: ["La oficina técnica", "El gerente de proyecto", "Nadie"],
            ok: 2, why: "Cada actor optimiza su parte; ningún rol gobierna el flujo completo. Esa es la falla estructural del sector." },
          { q: "Los vínculos de información entre los actores del proyecto suelen ser…",
            opts: ["Formales y trazables", "Informales y frágiles", "Automatizados de punta a punta"],
            ok: 1, why: "Correos, llamadas y chats: se rompen bajo presión y no dejan evidencia — las líneas punteadas del diagrama." },
        ])}
      </div>
      ${foot("Bloque 1 · Checkpoint")}`,
    notes: `**Idea central:** primer momento participativo: consolidar el diagnóstico antes de avanzar. **Cómo explicarlo:** leer cada pregunta, pedir votación a mano alzada por alternativa (A/B/C), y recién entonces girar la tarjeta. Celebrar los aciertos, no corregir en tono de examen. **Ejemplo:** en la pregunta 2 suele ganar "el gerente de proyecto" — el giro a "nadie" produce el insight más fuerte del bloque. **Transición:** "con el diagnóstico claro, veamos la paradoja que lo agrava…"`,
  });

  /* ---------- 05 · La paradoja de la construcción ---------- */
  DECK.add({
    block: 1,
    title: "La paradoja de la construcción",
    html: `
      ${head("La paradoja", "Más herramientas, más documentos, más reuniones… <em>¿mejores decisiones?</em>",
        "Digitalizar el caos solo produce caos digital. El cuello de botella no es la captura de datos: es su integración.")}
      <div class="s-body">
        ${stats([
          { v: "↑", c: "violet", l: "<b>Software:</b> modelado, planificación, costos, campo, fotos, drones… cada área con su app." },
          { v: "↑", c: "violet", l: "<b>Documentos:</b> versiones de planos, EETT, valorizaciones, informes semanales, actas." },
          { v: "↑", c: "violet", l: "<b>Reuniones:</b> de coordinación, de obra, de comité… muchas para 'alinear información'." },
          { v: "≈", c: "risk", l: "<b>Decisiones:</b> se siguen tomando tarde, con datos incompletos y por intuición." },
        ])}
        ${fr(`<div class="card accent mt-m"><h4>La regla que nadie escribió</h4>
          <p>Cuando los sistemas no conversan entre sí, las personas se convierten en integradores manuales de información:
          copiar, pegar, transcribir, perseguir. Ese es el trabajo invisible que consume a la oficina técnica — y donde nacen los errores.</p></div>`, 5)}
      </div>
      ${foot("Bloque 1 · Apertura")}`,
    notes: `**Idea central:** acumular herramientas sin integrarlas aumenta el costo de coordinación en lugar de reducirlo. **Cómo explicarlo:** recorrer los tres "↑" y rematar con el "≈": todo subió menos la calidad de las decisiones. Luego leer la "regla que nadie escribió". **Ejemplo:** el asistente de producción que pasa 2 horas diarias pasando avance de campo a Excel para el informe del viernes. **Transición:** "bajemos esto a tierra: ¿cómo se ve en el día a día de una obra?"`,
  });

  /* ---------- 06 · Problemas cotidianos en obra ---------- */
  DECK.add({
    block: 1,
    title: "Problemas cotidianos en obra",
    html: `
      ${head("Síntomas que todos reconocemos", "El día a día de una obra <em>sin sistema de información</em>")}
      <div class="s-body">
        ${cards([
          { icon: "clock", t: "RFIs tardíos", d: "La consulta llega cuando el frente ya está detenido — o peor, cuando ya se construyó." },
          { icon: "doc", t: "Planos desactualizados", d: "Se construye con la revisión B mientras diseño ya emitió la D." },
          { icon: "chart", t: "Metrados inconsistentes", d: "Presupuesto, valorización y campo manejan tres números distintos para la misma partida." },
          { icon: "cal", t: "Cronogramas desconectados", d: "El programa maestro vive en una laptop; la obra real, en otra realidad." },
          { icon: "warn", t: "Cambios sin trazabilidad", d: "Órdenes verbales y acuerdos de pasillo que después nadie puede demostrar." },
          { icon: "gear", t: "Reportes manuales", d: "Horas armando informes que nacen vencidos: describen la semana pasada." },
        ], { cols: 3 })}
        ${fr(`<p class="center muted mt-s" style="font-size:14px">El patrón común: <b class="gold">decisiones basadas en intuición</b> porque el dato confiable no llega a tiempo.</p>`, 7)}
      </div>
      ${foot("Bloque 1 · Apertura")}`,
    notes: `**Idea central:** estos problemas parecen técnicos pero son informacionales: el dato correcto no llegó a la persona correcta a tiempo. **Cómo explicarlo:** recorrer 2-3 tarjetas con ritmo rápido (la audiencia las reconoce solas) y detenerse en la frase final: el patrón común. **Ejemplo:** preguntar "¿quién ha valorizado con un metrado que después no cuadró con campo?" — risas de complicidad garantizadas. **Transición:** "todo esto cuesta dinero. Y lo más caro es lo que no se ve…"`,
  });

  /* ---------- 07 · El costo invisible — iceberg interactivo ---------- */
  DECK.add({
    block: 1,
    title: "El costo invisible de la mala información",
    html: () => {
      // Iceberg: punta visible + 5 estratos sumergidos clickeables
      const strata = [
        ["Esperas y tiempos muertos", "35% del tiempo"],
        ["Reprocesos de información", "US$ 31.300 M/año"],
        ["Datos que nadie usa", "96% descartado"],
        ["Disputas y reclamos", "meses de margen"],
        ["Improductividad crónica", "1% vs 3,6% anual"],
      ];
      let svg = `
        <g class="ib-layer tip" data-ib="tip" role="button" tabindex="0" aria-label="Retrabajo visible">
          <polygon points="138,18 242,18 262,86 118,86"/>
          <text x="190" y="48">Retrabajo visible</text>
          <text x="190" y="66" class="ib-v">≈ 5% del costo directo</text>
        </g>
        <line class="ib-water" x1="16" y1="92" x2="364" y2="92"/>
        <text class="ib-wlabel" x="360" y="84" text-anchor="end">LÍNEA DE FLOTACIÓN · LO QUE VE EL COMITÉ</text>`;
      strata.forEach(([t, v], i) => {
        const y0 = 100 + i * 64, y1 = y0 + 58;
        const hwT = 66 + i * 22, hwB = 66 + (i + 1) * 22;
        svg += `
        <g class="ib-layer" data-ib="${i}" role="button" tabindex="0" aria-label="${t}">
          <polygon points="${190 - hwT},${y0} ${190 + hwT},${y0} ${190 + hwB},${y1} ${190 - hwB},${y1}"/>
          <text x="190" y="${y0 + 26}">${t}</text>
          <text x="190" y="${y0 + 44}" class="ib-v">${v}</text>
        </g>`;
      });
      return `
      ${head("El iceberg del costo", "Lo que pagas y <em>no aparece en ninguna partida</em>",
        "Haz clic en cada estrato del iceberg: cada uno tiene número, fuente y mecanismo.")}
      <div class="s-body">
        <div class="cols c-46">
          <div class="iceberg fr" style="--d:180ms">
            <svg viewBox="0 0 380 430" style="max-height:418px;margin:0 auto">${svg}</svg>
          </div>
          <div>
            <div id="ibinfo" class="card accent" style="min-height:168px">
              <span class="tag t-cyan">Bajo la línea</span>
              <h4 class="mt-s">Esperas y tiempos muertos</h4>
              <p>El profesional de construcción dedica <b>~35% de su tiempo (≈14 h/semana)</b> a actividades no óptimas:
              buscar información, resolver conflictos y gestionar errores. Solo en EE.UU., ese tiempo equivale a
              <b>US$ 177.500 millones anuales</b> en costo laboral.</p>
              <p class="mt-s" style="font-size:11px;font-family:var(--f-mono);color:var(--faint)">FMI / PlanGrid — Construction Disconnected (2018)</p>
            </div>
            ${fr(`<div class="card mt-m"><h4>La cadena del costo invisible</h4>
            <p>Dato pobre → decisión tardía → espera → retrabajo → reclamo → margen perdido.
            Cada eslabón parece pequeño; la cadena completa se come la utilidad del proyecto.</p></div>`, 4)}
          </div>
        </div>
      </div>
      ${foot("Bloque 1 · Apertura", "FMI/Autodesk 2018–2021 · MGI 2017 · ver FUENTES.md")}`;
    },
    init(el) {
      const DATA = {
        tip: ["Sobre la línea", "Retrabajo y demoliciones", "La única porción que se cuantifica y se discute en comité: se demuele, se repara, se registra como no conformidad. El retrabajo directo reportado ronda el <b>5% del costo del proyecto</b> — y es apenas la punta.", "FMI / Autodesk — Construction Disconnected (2018)", "t-gold"],
        0: ["Bajo la línea", "Esperas y tiempos muertos", "El profesional de construcción dedica <b>~35% de su tiempo (≈14 h/semana)</b> a actividades no óptimas: buscar información, resolver conflictos y gestionar errores. Solo en EE.UU., ese tiempo equivale a <b>US$ 177.500 millones anuales</b> en costo laboral.", "FMI / PlanGrid — Construction Disconnected (2018)"],
        1: ["Bajo la línea", "Reprocesos de información", "El retrabajo causado por <b>datos y comunicación deficientes</b> costó <b>US$ 31.300 millones en un solo año, solo en EE.UU.</b> A escala global, el 52% de todo el retrabajo comparte esa causa raíz.", "FMI / Autodesk — Construction Disconnected (2018)"],
        2: ["Bajo la línea", "Datos que nadie usa", "De cada 100 datos que la obra captura — partes diarios, fotos, mediciones, reportes — <b>96 nunca se usan en una decisión</b>. Es el activo más caro que el sector tira a diario.", "FMI / Autodesk — Harnessing the Data Advantage (2021)"],
        3: ["Bajo la línea", "Disputas y reclamos", "Sin trazabilidad, cada reclamo se litiga <b>memoria contra memoria</b>: la resolución consume meses de gestión, honorarios y relación comercial. El historial del CDE es la primera línea de defensa.", "Mecanismo cualitativo — ver bloque 4"],
        4: ["Bajo la línea", "Improductividad crónica", "Dos décadas de productividad casi plana: <b>~1% anual vs 3,6% de la manufactura</b> (1995–2015). Es el costo estructural acumulado de producir sin flujo y decidir sin datos.", "McKinsey Global Institute — Reinventing Construction (2017)"],
      };
      const info = el.querySelector("#ibinfo");
      const layers = el.querySelectorAll(".ib-layer");
      const select = (g) => {
        layers.forEach((q) => q.classList.remove("sel"));
        g.classList.add("sel");
        const d = DATA[g.dataset.ib];
        info.innerHTML = `<span class="tag ${g.dataset.ib === "tip" ? "" : "t-cyan"}">${d[0]}</span>
          <h4 class="mt-s">${d[1]}</h4><p>${d[2]}</p>
          <p class="mt-s" style="font-size:11px;font-family:var(--f-mono);color:var(--faint)">${d[3]}</p>`;
      };
      layers.forEach((g) => {
        g.addEventListener("click", () => select(g));
        g.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(g); }
        });
      });
      el.querySelector('.ib-layer[data-ib="0"]').classList.add("sel");
    },
    notes: `**Idea central:** el costo de la mala información es estructural, medible y casi siempre invisible en el presupuesto. **Cómo explicarlo:** recorrer el iceberg de arriba hacia abajo haciendo clic en cada estrato: la punta (retrabajo, ~5%, lo único que se discute) y debajo los números que nadie consolida — 35% del tiempo profesional en actividades no óptimas (US$ 177.500 M/año en EE.UU.), US$ 31.300 M de retrabajo por datos deficientes, 96% de los datos descartados, disputas que se litigan memoria contra memoria, y dos décadas de productividad plana. **Ejemplo:** una cuadrilla parada media jornada esperando la respuesta de un RFI cuesta más que la licencia anual de cualquier software de la obra. **Transición:** "no es una percepción: los números globales del sector lo confirman".`,
  });

  /* ---------- Activador B1.a — 13% del PBI mundial ---------- */
  DECK.add({
    block: 1,
    title: "Dato activador — 13% del PBI mundial",
    cls: "divider",
    html: `
      ${C.activator({
        v: `<span data-count="13" data-suf="%">13%</span>`,
        line: "del PBI mundial corresponde a gasto relacionado con construcción — y el sector emplea al <b>7% de la población activa del planeta</b>.",
        q: "¿Cuánto vale entonces cada punto de productividad que logremos recuperar?",
        src: "McKinsey Global Institute — Reinventing Construction (2017)",
      })}
      ${foot("Bloque 1 · Dato activador")}`,
    notes: `**Idea central:** dimensionar el tablero antes de mostrar los números de productividad: la construcción no es un sector más — es la economía física del planeta. **Cómo explicarlo:** dejar que el contador llegue al 13%, hacer una pausa y leer la pregunta en voz alta sin responderla. **Ejemplo:** "si esta industria mejora 1%, el efecto global se mide en cientos de miles de millones". **Transición:** "y justamente la productividad es donde está la herida… miren estos números".`,
  });

  /* ---------- 08 · Datos globales del sector ---------- */
  DECK.add({
    block: 1,
    title: "Datos globales del sector construcción",
    html: `
      ${head("La evidencia global", "La construcción tiene un <em>problema estructural de productividad</em>")}
      <div class="s-body">
        <div class="cols c-55">
          ${CH.hbars([
            { l: "Manufactura", v: 3.6, c: "b-cyan", txt: "3,6%" },
            { l: "Economía mundial", v: 2.8, c: "b-indigo", txt: "2,8%" },
            { l: "Construcción", v: 1.0, c: "b-risk", txt: "1,0%" },
          ], { max: 4, title: "Crecimiento anual de la productividad laboral (1995–2015, promedio global)", src: "McKinsey Global Institute, Reinventing Construction (2017)" })}
          <div>
            ${stats([
              { v: "92%", c: "risk", l: "de los megaproyectos termina <b>fuera de plazo o de presupuesto</b>.", s: "Bent Flyvbjerg, Univ. de Oxford — How Big Things Get Done" },
              { v: "+80%", c: "risk", l: "puede alcanzar el sobrecosto típico de un gran proyecto; el plazo se excede ~20%.", s: "McKinsey Global Institute (2017)" },
              { v: "US$ 1,6 B*", l: "de valor anual capturable si la construcción cierra su brecha de productividad. <span class='muted'>(*billones = trillions)</span>", s: "McKinsey Global Institute (2017)" },
              { v: "Top 3", c: "violet", l: "la construcción figura entre los sectores <b>menos digitalizados</b> del mundo.", s: "MGI Industry Digitization Index (2016)" },
            ])}
          </div>
        </div>
      </div>
      ${foot("Bloque 1 · Apertura", "McKinsey MGI 2016-2017 · Flyvbjerg 2023 · ver FUENTES.md")}`,
    notes: `**Idea central:** los problemas de la audiencia no son anécdotas locales: son el patrón global del sector. **Cómo explicarlo:** leer el gráfico — mientras la manufactura multiplicó su productividad con automatización y flujo, la construcción quedó casi plana durante 20 años. Luego las cifras: 92% de megaproyectos fallan en plazo o costo. **Ejemplo:** comparar un auto (cada vez más barato por unidad de valor) con un m² construido (cada vez más caro). **Transición:** "¿y cómo estamos en nuestra región y en el Perú?"`,
  });

  /* ---------- Checkpoint B1.b — el costo de la mala información ---------- */
  DECK.add({
    block: 1,
    title: "Checkpoint — el costo de la mala información",
    html: `
      ${head("Checkpoint · participa", "Tres preguntas sobre el costo invisible",
        "Vota por una alternativa y gira cada tarjeta para comprobar.")}
      <div class="s-body">
        ${C.quiz([
          { q: "¿Qué porcentaje de los datos que captura una obra nunca se usa para decidir?",
            opts: ["Alrededor del 50%", "Alrededor del 75%", "Alrededor del 96%"],
            ok: 2, why: "96 de cada 100 datos capturados mueren sin usarse (FMI/Autodesk 2021): el activo más caro que el sector descarta a diario." },
          { q: "¿Cuánto creció la productividad de la construcción entre 1995 y 2015?",
            opts: ["~1% anual", "~2,8% anual", "~3,6% anual"],
            ok: 0, why: "2,8% fue la economía mundial y 3,6% la manufactura (MGI 2017). La construcción quedó casi plana durante dos décadas." },
          { q: "La mayor parte del costo de la mala información es…",
            opts: ["Visible en el presupuesto", "Invisible: esperas, reprocesos, disputas", "Cubierta por los seguros"],
            ok: 1, why: "El retrabajo visible (~5%) es solo la punta del iceberg; debajo están las esperas, los reprocesos y la confianza perdida." },
        ])}
      </div>
      ${foot("Bloque 1 · Checkpoint")}`,
    notes: `**Idea central:** fijar los tres números ancla del bloque (96%, 1% vs 3,6%, iceberg) mediante recuperación activa. **Cómo explicarlo:** mismo ritual: votar a mano alzada, girar, comentar en una frase. Si el tiempo aprieta, girar solo las que generen división de votos. **Ejemplo:** la pregunta del 96% suele subestimarse — perfecto para reforzar el mensaje del iceberg. **Transición:** "estos son los números del mundo; veamos ahora nuestra cancha: Perú y la región".`,
  });

  /* ---------- 09 · Perú / LATAM + mapa BIM ---------- */
  DECK.add({
    block: 1,
    title: "Contexto Perú y LATAM · adopción BIM",
    html: `
      ${head("Nuestro contexto", "Perú y LATAM: <em>brecha y oportunidad</em> al mismo tiempo",
        "Haz clic en cada punto del mapa para ver el estado de adopción BIM.")}
      <div class="s-body">
        <div class="cols c-55">
          ${CH.dotmap([
            { x: 19, y: 16, label: "Perú", info: "<b>Plan BIM Perú (MEF):</b> adopción progresiva y obligatoria de BIM en inversión pública hacia 2030 (D.S. 289-2019-EF y D.S. 108-2021-EF). La demanda de perfiles BIM crece más rápido que la oferta formada." },
            { x: 20, y: 22, label: "Chile", info: "<b>Planbim (Corfo):</b> pionero regional desde 2016; estándar BIM para proyectos públicos y exigencia creciente en licitaciones." },
            { x: 24, y: 18, label: "Brasil", info: "<b>Estratégia BIM BR:</b> decreto federal con obligatoriedad gradual desde 2021 para obra pública; el mayor mercado AEC de la región." },
            { x: 10, y: 7, label: "EE.UU.", info: "<b>EE.UU.:</b> adopción liderada por el sector privado y grandes contratistas (VDC, Lean, IPD); sin mandato federal único." },
            { x: 30, y: 4, label: "R. Unido", info: "<b>Reino Unido:</b> mandato BIM Nivel 2 para obra pública desde 2016; cuna de la ISO 19650. Adopción reportada ~70%+ entre profesionales (NBS)." },
            { x: 35, y: 5, label: "UE", info: "<b>Europa:</b> directiva de contratación pública recomienda BIM; países nórdicos y Alemania con hojas de ruta nacionales activas." },
            { x: 53, y: 14, label: "Singapur", info: "<b>Singapur (BCA):</b> referente mundial — entrega BIM obligatoria para permisos de construcción desde 2015 e IDD (Integrated Digital Delivery)." },
          ])}
          <div>
            <div id="pininfo" class="card accent" style="min-height:118px">
              <h4>Perú</h4>
              <p><b>Plan BIM Perú (MEF):</b> adopción progresiva y obligatoria de BIM en inversión pública hacia 2030 (D.S. 289-2019-EF y D.S. 108-2021-EF). La demanda de perfiles BIM crece más rápido que la oferta formada.</p>
            </div>
            ${klist([
              "<b>Brecha de ejecución:</b> la inversión pública peruana convive con obras paralizadas y disputas — el control de obra es el punto crítico.",
              "<b>Informalidad y rotación</b> de personal hacen aún más valiosa la información estructurada y trazable.",
              "<b>Plan BIM Perú</b> convierte estas competencias en requisito, no en lujo: la curva regulatoria ya arrancó.",
            ])}
          </div>
        </div>
      </div>
      ${foot("Bloque 1 · Apertura", "MEF Plan BIM Perú · NBS Digital Construction Report · Planbim Chile · BCA Singapur")}`,
    init(el) {
      const info = el.querySelector("#pininfo");
      const pins = el.querySelectorAll(".pin");
      // Recupera los datos desde los atributos generados
      const data = [
        ["Perú", "<b>Plan BIM Perú (MEF):</b> adopción progresiva y obligatoria de BIM en inversión pública hacia 2030 (D.S. 289-2019-EF y D.S. 108-2021-EF). La demanda de perfiles BIM crece más rápido que la oferta formada."],
        ["Chile", "<b>Planbim (Corfo):</b> pionero regional desde 2016; estándar BIM para proyectos públicos y exigencia creciente en licitaciones."],
        ["Brasil", "<b>Estratégia BIM BR:</b> decreto federal con obligatoriedad gradual desde 2021 para obra pública; el mayor mercado AEC de la región."],
        ["EE.UU.", "<b>EE.UU.:</b> adopción liderada por el sector privado y grandes contratistas (VDC, Lean, IPD); sin mandato federal único."],
        ["Reino Unido", "<b>Reino Unido:</b> mandato BIM Nivel 2 para obra pública desde 2016; cuna de la ISO 19650. Adopción reportada ~70%+ entre profesionales (NBS)."],
        ["Unión Europea", "<b>Europa:</b> directiva de contratación pública recomienda BIM; países nórdicos y Alemania con hojas de ruta nacionales activas."],
        ["Singapur", "<b>Singapur (BCA):</b> referente mundial — entrega BIM obligatoria para permisos desde 2015 e Integrated Digital Delivery."],
      ];
      pins.forEach((p) => p.addEventListener("click", () => {
        pins.forEach((q) => q.classList.remove("sel"));
        p.classList.add("sel");
        const d = data[+p.dataset.pin];
        info.innerHTML = `<h4>${d[0]}</h4><p>${d[1]}</p>`;
      }));
    },
    notes: `**Idea central:** el mundo ya decidió que BIM es el estándar; la región va detrás pero con regulación en marcha — eso es brecha y oportunidad. **Cómo explicarlo:** jugar con el mapa: Reino Unido y Singapur como referentes con mandato, Chile y Brasil como vecinos que ya arrancaron, y Perú con el Plan BIM Perú apuntando a 2030. **Ejemplo:** "si postulas a un proyecto público peruano en los próximos años, los requisitos BIM ya no serán opcionales". **Transición:** "la pregunta entonces es: ¿qué profesional necesita esta nueva industria?"`,
  });

  /* ---------- 10 · La nueva competencia profesional ---------- */
  DECK.add({
    block: 1,
    title: "La nueva competencia profesional",
    html: `
      ${head("El perfil que pide el mercado", "Saber software ya no te diferencia. <em>Entender el sistema, sí.</em>")}
      <div class="s-body">
        ${C.table(
          ["", "Profesional 'que sabe software'", "Profesional que entiende el sistema"],
          [
            ["Foco", "Comandos y menús de una herramienta", "<b>Flujos de información</b> entre diseño, oficina técnica y campo"],
            ["Modelo", "El modelo como producto final", "El modelo como <b>base de datos viva</b> que alimenta decisiones"],
            ["Plan", "El cronograma como documento", "La planificación como <b>sistema de producción</b> con métricas (PPC, restricciones)"],
            ["Reporte", "Armar el informe del viernes", "Diseñar <b>tableros que se actualizan solos</b> y disparan acciones"],
            ["Carrera", "Compite por precio con miles de operadores", "Escasea: <b>integra metodología + datos + automatización</b>"],
          ]
        )}
        ${fr(`<p class="center muted mt-s" style="font-size:14px">Ese segundo perfil es exactamente lo que este diplomado forma. <b class="gold">Y ese es el viaje que empieza hoy.</b></p>`, 6)}
      </div>
      ${foot("Bloque 1 · Apertura")}`,
    notes: `**Idea central:** el diferencial profesional migró del manejo de herramientas a la comprensión de flujos, datos y producción. **Cómo explicarlo:** contrastar columna por columna, sin despreciar el software ("hay que dominarlo, pero es el boleto de entrada, no la ventaja"). **Ejemplo:** dos CVs con Revit; gana el que puede explicar cómo montó el flujo de avance semanal modelo→campo→dashboard y qué decisiones cambió. **Transición:** "veamos entonces el mapa completo del programa que construye ese perfil" → Bloque 2.`,
  });

  /* ---------- Activador B1.b — 85 millones ---------- */
  DECK.add({
    block: 1,
    title: "Dato activador — 85 millones de talentos",
    cls: "divider",
    html: `
      ${C.activator({
        v: `<span data-count="85" data-suf=" M">85 M</span>`,
        line: "de puestos de trabajo calificados podrían quedar <b>sin cubrir en el mundo hacia 2030</b> por escasez de talento — equivalentes a ~US$ 8,5 billones en ingresos no realizados.",
        q: "¿De qué lado de la brecha de talento vas a estar tú?",
        src: "Korn Ferry — The Global Talent Crunch (2018)",
      })}
      ${foot("Bloque 1 · Dato activador")}`,
    notes: `**Idea central:** cerrar el bloque 1 convirtiendo el diagnóstico (la industria falla) en oportunidad personal (el talento que sabe integrar escasea). **Cómo explicarlo:** leer la cifra, pausa, y la pregunta directa a la audiencia — es el gancho emocional hacia el mapa del programa. **Ejemplo:** "cada empresa de la región que decide digitalizar su control de obra descubre lo mismo: no encuentra gente que sepa hacerlo". **Transición:** "ese perfil escaso es exactamente el que vamos a mapear ahora" → Bloque 2.`,
  });
})();
