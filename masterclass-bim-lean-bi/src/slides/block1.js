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
          <img src="assets/brand/aecode-logo.svg" alt="AECODE">
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
          stroke="rgba(242,97,122,.32)" stroke-width="1.1" stroke-dasharray="3 6"/>`;
      });
      pos.forEach((p) => {
        svg += `<g><circle cx="${p[0]}" cy="${p[1]}" r="33" fill="#161C33" stroke="rgba(255,255,255,.16)"/>
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

  /* ---------- 07 · El costo invisible de la mala información ---------- */
  DECK.add({
    block: 1,
    title: "El costo invisible de la mala información",
    html: `
      ${head("El iceberg del costo", "Lo que pagas y <em>no aparece en ninguna partida</em>",
        "El retrabajo visible es solo la punta. Debajo hay un océano de esperas, reprocesos y confianza perdida.")}
      <div class="s-body">
        <div class="cols c-46">
          <div class="fr" style="--d:180ms">
            <div class="card" style="border-color:rgba(84,200,232,.35);text-align:center;padding:14px">
              <span class="tag t-cyan">Sobre la línea — se ve</span>
              <h4 class="mt-s">Retrabajo y demoliciones</h4>
              <p>Se discute en comité, se cuantifica, duele.</p>
            </div>
            <div style="height:2px;background:linear-gradient(90deg,transparent,var(--cyan),transparent);margin:12px 0;opacity:.6"></div>
            <div class="card" style="border-color:rgba(242,97,122,.35);padding:14px">
              <span class="tag t-risk">Bajo la línea — no se ve</span>
              <ul class="klist mt-s" style="gap:8px">
                <li>Esperas de cuadrillas por definiciones</li>
                <li>Reprocesos de información en oficina técnica</li>
                <li>Reclamos y disputas contractuales</li>
                <li>Improductividad crónica de los frentes</li>
                <li>Pérdida de confianza entre las partes</li>
              </ul>
            </div>
          </div>
          <div>
            ${stats([
              { v: "96%", c: "risk", l: "de los datos que genera una obra <b>nunca se utiliza</b> para decidir.", s: "FMI / Autodesk, Harnessing the Data Advantage" },
              { v: "+52%", c: "risk", l: "del retrabajo global se atribuye a <b>datos y comunicación deficientes</b>.", s: "FMI / Autodesk Construction Disconnected (2018)" },
            ])}
            ${fr(`<div class="card accent mt-m"><h4>La cadena del costo invisible</h4>
            <p>Dato pobre → decisión tardía → espera → retrabajo → reclamo → margen perdido.
            Cada eslabón parece pequeño; la cadena completa se come la utilidad del proyecto.</p></div>`, 4)}
          </div>
        </div>
      </div>
      ${foot("Bloque 1 · Apertura", "FMI/Autodesk 2018–2021 · ver FUENTES.md")}`,
    notes: `**Idea central:** el costo de la mala información es estructural y casi nunca se mide. **Cómo explicarlo:** usar el iceberg: arriba lo que se discute en comité (retrabajo), abajo lo que nadie cuantifica (esperas, reprocesos, reclamos, confianza). Citar el 96%: la obra produce datos todos los días y los tira a la basura. **Ejemplo:** una cuadrilla parada media jornada esperando la respuesta de un RFI cuesta más que la licencia anual de cualquier software de la obra. **Transición:** "no es una percepción: los números globales del sector lo confirman".`,
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
})();
