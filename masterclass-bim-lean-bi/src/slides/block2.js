/* ============================================================
   BLOQUE 2 — El mapa mental del diplomado · Slides 11–16
   ============================================================ */
(function () {
  "use strict";
  const { head, foot, fr, cards, klist, cols2, ladder, table } = C;
  const P = PROGRAM;

  /* ---------- 11 · El diplomado como sistema integrado ---------- */
  DECK.add({
    block: 2,
    title: "El diplomado como sistema integrado",
    html: () => {
      // Ecosistema interactivo: 8 nodos alrededor de un núcleo
      const nodes = [
        { id: "BIM", d: "Estructura la información del proyecto en modelos con datos confiables." },
        { id: "Lean", d: "Mejora el flujo de producción: menos desperdicio, más confiabilidad." },
        { id: "VDC", d: "Conecta objetivos del cliente con procesos, modelos y métricas (POP, ICE, PPM)." },
        { id: "IPD", d: "Alinea incentivos y responsabilidades entre las partes desde el inicio." },
        { id: "CDE", d: "Gobierna la información: una sola fuente de verdad con estados y trazabilidad." },
        { id: "4D", d: "Conecta el modelo con el tiempo: simula y controla la secuencia constructiva." },
        { id: "BI", d: "Convierte datos operativos en tableros y decisiones gerenciales." },
        { id: "IA", d: "Acelera análisis, automatiza reportes y crea asistentes de obra." },
      ];
      const cx = 320, cy = 218, R = 165;
      let links = "", circles = "";
      nodes.forEach((n, i) => {
        const ang = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + R * Math.cos(ang), y = cy + R * 0.85 * Math.sin(ang);
        links += `<line class="elink" data-for="${i}" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/>`;
        circles += `<g class="enode" data-n="${i}" transform="translate(${x},${y})">
          <circle class="bgc" r="34"/><text y="5" font-size="13">${n.id}</text></g>`;
      });
      return `
      ${head("El mapa del programa", "No son 8 temas: es <em>un solo sistema</em> con 8 engranajes",
        "Haz clic en cada nodo. Todos existen para lo mismo: que la obra se controle con datos.")}
      <div class="s-body">
        <div class="cols c-55">
          <div class="eco fr" style="--d:200ms">
            <svg viewBox="0 0 640 436">
              <defs><radialGradient id="coreGrad"><stop offset="0%" stop-color="#B8763A"/><stop offset="100%" stop-color="#7C4F0E"/></radialGradient></defs>
              ${links}
              <g class="ecore"><circle cx="${cx}" cy="${cy}" r="52"/>
                <text x="${cx}" y="${cy - 4}" font-size="12.5">Obra</text>
                <text x="${cx}" y="${cy + 13}" font-size="12.5">controlada</text></g>
              ${circles}
            </svg>
          </div>
          <div>
            <div id="econotes" class="card accent" style="min-height:108px">
              <h4>El sistema completo</h4>
              <p>Cada metodología resuelve una falla concreta de la obra fragmentada. Integradas, convierten el proyecto en un sistema que produce, mide y decide.</p>
            </div>
            ${klist([
              "<b>Metodologías</b> (Lean, VDC, IPD): cómo organizamos personas y procesos.",
              "<b>Información</b> (BIM, CDE, 4D): cómo estructuramos y gobernamos los datos.",
              "<b>Inteligencia</b> (BI, IA): cómo convertimos datos en decisiones y automatización.",
            ])}
          </div>
        </div>
      </div>
      ${foot("Bloque 2 · Mapa del diplomado")}`;
    },
    init(el) {
      const data = [
        ["BIM", "Estructura la información del proyecto en modelos con datos confiables: geometría + parámetros + trazabilidad."],
        ["Lean Construction", "Mejora el flujo de producción: identifica desperdicio, estabiliza la planificación y eleva la confiabilidad semanal."],
        ["VDC", "Conecta objetivos del cliente con procesos, modelos y métricas. Framework de Stanford: Producto–Organización–Proceso, ICE y PPM."],
        ["IPD", "Alinea incentivos y responsabilidades entre cliente, diseñador y constructor desde etapas tempranas: riesgo y beneficio compartidos."],
        ["CDE", "Entorno Común de Datos: una sola fuente de verdad con estados, versiones, aprobaciones y trazabilidad de cada documento."],
        ["4D", "Conecta el modelo con el cronograma: simula la secuencia constructiva y compara lo planificado contra lo ejecutado."],
        ["Business Intelligence", "Convierte los datos operativos (avance, costos, RFIs, incidencias) en tableros que cambian decisiones gerenciales."],
        ["Inteligencia Artificial", "Acelera análisis, resume documentación, automatiza reportes y crea asistentes que trabajan junto al equipo de obra."],
      ];
      const panel = el.querySelector("#econotes");
      el.querySelectorAll(".enode").forEach((n) => n.addEventListener("click", () => {
        el.querySelectorAll(".enode").forEach((q) => q.classList.remove("sel"));
        el.querySelectorAll(".elink").forEach((q) => q.classList.remove("hot"));
        n.classList.add("sel");
        el.querySelector(`.elink[data-for="${n.dataset.n}"]`).classList.add("hot");
        const d = data[+n.dataset.n];
        panel.innerHTML = `<h4>${d[0]}</h4><p>${d[1]}</p>`;
      }));
    },
    notes: `**Idea central:** presentar el programa como sistema, no como temario. **Cómo explicarlo:** clic en 3-4 nodos clave (BIM, Lean, BI, IA) mostrando que cada uno ataca una falla específica de la obra fragmentada del slide 4. Agrupar en tres capas: metodologías, información, inteligencia. **Ejemplo:** "BIM sin Lean es un modelo bonito de una obra caótica; Lean sin datos es una pizarra con buenas intenciones". **Transición:** "el cambio de fondo es pasar de documentos a sistemas… así se ve ese antes y después".`,
  });

  /* ---------- 12 · De documentos aislados a sistemas ---------- */
  DECK.add({
    block: 2,
    title: "De documentos aislados a sistemas de información",
    html: `
      ${head("El cambio de paradigma", "De <em>documentos aislados</em> a sistemas de información")}
      <div class="s-body">
        <div class="grid g2">
          ${fr(`<div class="card" style="border-color:rgba(192,40,90,.35)">
            <span class="tag t-risk">Antes · artefactos sueltos</span>
            <ul class="klist mt-m" style="gap:10px">
              <li><b>Excel</b> como base de datos, reporte y control documental a la vez</li>
              <li><b>PDF</b> de planos reenviados por correo, sin estado ni versión</li>
              <li><b>WhatsApp</b> como canal oficial de decisiones de obra</li>
              <li>El conocimiento vive en <b>personas</b>, no en sistemas</li>
            </ul></div>`, 2)}
          ${fr(`<div class="card" style="border-color:rgba(23,122,69,.35)">
            <span class="tag t-green">Después · sistema integrado</span>
            <ul class="klist check mt-m" style="gap:10px">
              <li><b>CDE</b>: una sola fuente de verdad, con estados y permisos</li>
              <li><b>Modelos BIM</b> como base de datos del proyecto</li>
              <li><b>Tableros</b> que se actualizan desde las fuentes, no a mano</li>
              <li><b>Trazabilidad</b>: cada decisión tiene autor, fecha y evidencia</li>
            </ul></div>`, 3)}
        </div>
        ${fr(`<div class="card accent"><h4>La prueba ácida</h4>
          <p>Pregunta en tu proyecto: “¿cuál es el avance real del frente 3 y cuánto nos desviamos del plan?”
          Si la respuesta tarda más de 5 minutos o depende de llamar a alguien… tienes documentos, no un sistema.</p></div>`, 5)}
      </div>
      ${foot("Bloque 2 · Mapa del diplomado")}`,
    notes: `**Idea central:** la transformación no es comprar software, es cambiar de paradigma: de documentos que se envían a sistemas que se consultan. **Cómo explicarlo:** contrastar los dos paneles y aplicar la "prueba ácida" en vivo — pedir a alguien que la responda mentalmente sobre su proyecto actual. **Ejemplo:** el Excel "sábana" que solo entiende quien lo creó, y que se rompe cuando esa persona rota. **Transición:** "¿y cómo se aprende a construir ese sistema? Esta es la ruta…"`,
  });

  /* ---------- 13 · Ruta de aprendizaje ---------- */
  DECK.add({
    block: 2,
    title: "Ruta de aprendizaje: los 4 módulos",
    html: `
      ${head("La ruta del programa", "Un viaje progresivo: <em>de los fundamentos a la frontera</em>",
        `${P.hours.total} horas certificadas · ${P.hours.live} en vivo · ${P.mix}`)}
      <div class="s-body">
        <div class="flow fr" style="--d:160ms">
          ${P.modules.map((m, i) => `
            <div class="fstep" style="text-align:left;padding:18px 16px">
              <span class="tag">${m.h} h</span>
              <h5 class="mt-s" style="font-size:14.5px">M${m.n} · ${m.t}</h5>
              <p class="mt-s">${m.d}</p>
            </div>${i < 3 ? '<div class="farr">→</div>' : ""}`).join("")}
        </div>
        ${fr(`<p class="center muted" style="font-size:14px">“Un recorrido progresivo desde la gestión colaborativa hasta la transformación digital en obra.” — <span class="gold">Brochure oficial del programa</span></p>`, 5)}
      </div>
      ${foot("Bloque 2 · Mapa del diplomado", "Brochure AECODE — plan de estudios")}`,
    notes: `**Idea central:** la secuencia de módulos es deliberada: primero el pensamiento (marcos), luego el control (BIM+Lean), luego la inteligencia (BI) y al final la frontera (IA y emergentes). **Cómo explicarlo:** recorrer el flujo izquierda→derecha destacando las horas: el módulo 2 (42 h) es el corazón práctico del programa. **Ejemplo:** "no empezamos con Power BI: un dashboard sobre datos caóticos solo decora el caos". **Transición:** "viéndolo desde otro ángulo: ¿qué problema concreto te resuelve cada módulo?"`,
  });

  /* ---------- 14 · Qué problema resuelve cada módulo ---------- */
  DECK.add({
    block: 2,
    title: "Qué problema resuelve cada módulo",
    html: `
      ${head("Problema → método → resultado", "Cada módulo ataca <em>un dolor real de obra</em>")}
      <div class="s-body">
        ${table(
          ["Dolor en obra", "Módulo / método", "Resultado esperado"],
          [
            ["Planificación que no se cumple; cada área jala para su lado",
             "<b>M1</b> · Lean, VDC, IPD, Last Planner System",
             "Planificación colaborativa con compromisos medibles (PPC) y matriz POP"],
            ["Información dispersa, versiones cruzadas, cero trazabilidad",
             "<b>M2</b> · BIM bajo ISO 19650 + CDE (ACC, Trimble) + Navisworks 4D + Fieldwire",
             "BEP de obra + control documental y de avance conectado al modelo"],
            ["Reportes manuales, tardíos y sin impacto en decisiones",
             "<b>M3</b> · BI: arquitectura de datos + Power BI + Revit + Speckle",
             "Dashboards gerenciales y de producción que se actualizan desde las fuentes"],
            ["Tareas repetitivas y control reactivo",
             "<b>M4</b> · IA, RA/RV, escaneo 3D, reportes web",
             "Asistente de obra con IA + control as-built + reporte web interactivo"],
          ]
        )}
      </div>
      ${foot("Bloque 2 · Mapa del diplomado", "Brochure AECODE — plan de estudios")}`,
    notes: `**Idea central:** traducir el temario a la pregunta que el participante realmente se hace: "¿qué me resuelve esto?". **Cómo explicarlo:** leer la tabla por filas, empezando siempre por el dolor (columna 1) para mantener el anclaje en la obra real. **Ejemplo:** para M3: "el informe del viernes que hoy te toma 4 horas, en el taller lo conviertes en un tablero que se refresca solo". **Transición:** "este viaje también se puede medir como niveles de madurez. ¿En qué nivel está tu obra hoy?"`,
  });

  /* ---------- Checkpoint B2 — el mapa del programa ---------- */
  DECK.add({
    block: 2,
    title: "Checkpoint — el sistema y la ruta",
    html: `
      ${head("Checkpoint · participa", "Tres preguntas sobre el mapa del programa",
        "Vota por una alternativa y gira cada tarjeta para comprobar.")}
      <div class="s-body">
        ${C.quiz([
          { q: "En el sistema del diplomado, BIM, CDE y 4D forman la capa de…",
            opts: ["Producción", "Información", "Contratos"],
            ok: 1, why: "Metodologías (Lean/VDC/IPD) organizan personas y procesos; BIM/CDE/4D estructuran y gobiernan los datos; BI/IA los convierten en decisión." },
          { q: "¿Cuál es el orden correcto de la ruta de aprendizaje?",
            opts: ["Herramientas → marcos → BI", "Marcos → BIM+Lean → BI → IA", "IA → BIM → Lean"],
            ok: 1, why: "Primero el pensamiento, luego el control, luego la inteligencia: un dashboard sobre datos caóticos solo decora el caos." },
          { q: "La 'prueba ácida' de un sistema de información de obra es…",
            opts: ["Tener licencias al día", "Responder avance y desvío en menos de 5 minutos", "Contar con un BIM manager"],
            ok: 1, why: "Si la respuesta tarda más de 5 minutos o depende de llamar a alguien, tienes documentos — no un sistema." },
        ])}
      </div>
      ${foot("Bloque 2 · Checkpoint")}`,
    notes: `**Idea central:** verificar que el mapa mental quedó instalado antes de pasar a la autoevaluación de madurez. **Cómo explicarlo:** votación rápida y giro; en la pregunta 1, conectar con el diagrama de 8 nodos ("¿en qué capa pondrías IA?"). **Ejemplo:** la pregunta 3 invita a aplicar la prueba ácida al proyecto actual de cada participante. **Transición:** "ahora sí: ubiquemos tu obra en la escalera de madurez".`,
  });

  /* ---------- 15 · Escalera de madurez digital (autoevaluación) ---------- */
  DECK.add({
    block: 2,
    title: "La escalera de madurez digital en obra",
    html: `
      ${head("¿Dónde está tu obra hoy?", "La <em>escalera de madurez</em> digital en obra",
        "Autoevaluación en vivo: haz clic en el nivel donde está tu obra hoy y mira la ruta sugerida.")}
      <div class="s-body">
        ${ladder([
          { t: "Información dispersa", d: "Papel, Excel suelto, WhatsApp. El dato vive en personas.", tip: "Nivel 0: cada dato hay que perseguirlo. La obra funciona por heroísmo individual." },
          { t: "Modelos BIM", d: "Hay modelo 3D, pero aislado del control de obra.", tip: "Nivel 1: el modelo existe pero es del 'área BIM'. Aún no gobierna decisiones." },
          { t: "CDE y trazabilidad", d: "Una fuente de verdad: estados, versiones, RFIs digitales.", tip: "Nivel 2: ISO 19650 en acción. Se acabó el '¿qué versión tienes tú?'" },
          { t: "Dashboards y métricas", d: "Avance, costos y PPC visibles y compartidos.", tip: "Nivel 3: el comité discute sobre datos vivos, no sobre informes vencidos." },
          { t: "Simulación 4D y control", d: "Plan vs real sobre el modelo; el desvío se ve venir.", tip: "Nivel 4: la secuencia constructiva se simula antes de ejecutarse." },
          { t: "IA y decisión predictiva", d: "Asistentes, alertas y automatización de análisis.", tip: "Nivel 5: la IA resume, alerta y prepara la decisión. El equipo decide mejor y más rápido." },
        ], { pick: true })}
        <div id="lvlinfo" class="card accent fr" style="--d:760ms"><h4>La regla de la escalera</h4>
          <p>Se sube peldaño a peldaño: cada nivel se apoya en la disciplina del anterior. Selecciona tu nivel actual
          para ver la ruta que el programa sugiere desde ahí.</p></div>
      </div>
      ${foot("Bloque 2 · Mapa del diplomado")}`,
    init(el) {
      const ROUTES = [
        ["Nivel 0 → empieza por el gobierno del dato", "Es el punto de partida más común — y la mejor noticia: el primer salto es el más rentable. <b>M1 (marcos y Last Planner) + la primera mitad del M2 (ISO 19650 y CDE)</b> convierten el caos documental en una sola fuente de verdad en semanas."],
        ["Nivel 1 → conecta el modelo con el control", "El modelo existe pero no gobierna decisiones. El <b>M2 completo</b> es tu palanca: BEP, sectorización, metrados desde el modelo y control documental en ACC — el modelo deja de ser 'del área BIM' y pasa a ser de la obra."],
        ["Nivel 2 → haz visible lo que ya gobiernas", "Con CDE y trazabilidad funcionando, el cuello de botella es la visibilidad. <b>M2 (4D, campo) y M3 (arquitectura de datos + Power BI)</b>: tus datos ordenados se convierten en tableros que cambian la reunión semanal."],
        ["Nivel 3 → del tablero al sistema de producción", "Ya mides; ahora anticipa. <b>M2 (lookahead sobre el modelo, 4D plan vs real) + M3 (dashboards Lean por sector)</b>: el desvío se ve venir con semanas de ventaja, no en el informe mensual."],
        ["Nivel 4 → automatiza el análisis", "Tu sistema produce datos confiables: es exactamente lo que la IA necesita. <b>M4: asistentes de obra, automatización n8n/APIs y reportes que se redactan solos</b> sobre tu stack ya maduro."],
        ["Nivel 5 → lidera la transformación", "Estás en la frontera: tu reto ya no es técnico, es organizacional. El programa te aporta el <b>marco completo para estandarizar y escalar</b> tu práctica a otros proyectos y equipos — y certificarla (CIP + Autodesk)."],
      ];
      const info = el.querySelector("#lvlinfo");
      el.querySelectorAll(".ladder .rung").forEach((r) => {
        const go = () => {
          el.querySelectorAll(".ladder .rung").forEach((q) => q.classList.remove("sel"));
          r.classList.add("sel");
          const d = ROUTES[+r.dataset.lv];
          info.innerHTML = `<h4>${d[0]}</h4><p>${d[1]}</p>`;
        };
        r.addEventListener("click", go);
        r.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
      });
    },
    notes: `**Idea central:** la madurez digital es una escalera, no un interruptor — y saltarse peldaños sale caro. **Cómo explicarlo:** convertirlo en momento participativo: pedir a 2-3 voluntarios que digan su nivel y hacer clic en vivo — la ruta sugerida aparece al instante (la mayoría está entre 0 y 1, y eso es buena noticia: el primer salto es el más rentable). Subrayar que el diplomado recorre exactamente esta escalera: M1-M2 construyen niveles 1-2, M2-M3 los niveles 3-4, M4 el nivel 5. **Ejemplo:** "comprar Power BI estando en nivel 0 es ponerle tablero digital a un auto sin motor". **Transición:** "subir la escalera requiere capacidades concretas; este es el mapa de ese perfil".`,
  });

  /* ---------- 16 · Mapa de capacidades del profesional ---------- */
  DECK.add({
    block: 2,
    title: "Mapa de capacidades del profesional AEC moderno",
    html: `
      ${head("El perfil objetivo", "Las 8 capacidades del <em>profesional AEC moderno</em>")}
      <div class="s-body">
        ${cards([
          { icon: "users", t: "Colaboración", d: "Trabajar con marcos colaborativos: roles, sesiones ICE, acuerdos y métricas compartidas." },
          { icon: "cube", t: "Coordinación BIM", d: "Modelos federados, interferencias, datos confiables bajo ISO 19650." },
          { icon: "cal", t: "Planificación Lean", d: "Last Planner, lookahead, restricciones, PPC y trenes de trabajo." },
          { icon: "clock", t: "Control 4D", d: "Secuencia constructiva simulada y comparación plan vs real sobre el modelo." },
          { icon: "chart", t: "Business Intelligence", d: "Arquitectura de datos y tableros que cambian decisiones." },
          { icon: "bolt", t: "Automatización", d: "Flujos que eliminan trabajo manual: datos que viajan solos." },
          { icon: "robot", t: "IA aplicada", d: "Asistentes, análisis acelerado y reportes generados con criterio profesional." },
          { icon: "eye", t: "Comunicación ejecutiva", d: "Storytelling con datos: convertir análisis en decisión gerencial." },
        ], { cols: 4 })}
      </div>
      ${foot("Bloque 2 · Mapa del diplomado")}`,
    notes: `**Idea central:** el perfil moderno es una combinación — ninguna capacidad aislada basta. **Cómo explicarlo:** recorrer rápido las 8 tarjetas y señalar que las primeras 4 son "gestionar la obra" y las últimas 4 "gestionar la información de la obra"; el mercado paga por quien une ambas. **Ejemplo:** un coordinador BIM que además domina Power BI y automatización pasa de soporte técnico a mano derecha de la gerencia. **Transición:** "entremos al primer pilar: los marcos que hacen posible colaborar de verdad" → Bloque 3.`,
  });

  /* ---------- Activador B2 — Plan BIM Perú 2030 ---------- */
  DECK.add({
    block: 2,
    title: "Dato activador — Plan BIM Perú 2030",
    cls: "divider",
    html: `
      ${C.activator({
        v: `2030`,
        line: "es el horizonte del <b>Plan BIM Perú</b>: adopción progresiva y obligatoria de BIM en la inversión pública (D.S. 289-2019-EF y D.S. 108-2021-EF). La regulación ya tomó la decisión por el sector.",
        q: "¿Vas a llegar antes que el mandato — o corriendo detrás de él?",
        src: "MEF — Plan BIM Perú",
      })}
      ${foot("Bloque 2 · Dato activador")}`,
    notes: `**Idea central:** cerrar el bloque del mapa con urgencia regulatoria: esto no es una moda, es un mandato con fecha. **Cómo explicarlo:** señalar que la curva regulatoria ya arrancó (proyectos piloto, requisitos en licitaciones) y que los plazos de aprendizaje serio se miden en meses, no semanas. **Ejemplo:** "quien empezó con ISO 19650 en 2024 hoy lidera equipos; quien empiece en 2029 va a llegar a negociar en desventaja". **Transición:** "entremos entonces al primer pilar del sistema: los marcos colaborativos" → Bloque 3.`,
  });
})();
