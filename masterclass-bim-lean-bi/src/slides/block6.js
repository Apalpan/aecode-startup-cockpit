/* ============================================================
   BLOQUE 6 — Business Intelligence y dashboards · Slides 42–50
   ============================================================ */
(function () {
  "use strict";
  const { head, foot, fr, cards, stats, klist, flow, table, dash } = C;

  /* ---------- 42 · Excel no muere, pero no basta ---------- */
  DECK.add({
    block: 6,
    title: "Excel no muere, pero ya no basta",
    html: `
      ${head("Bloque 6 · Business Intelligence", "Excel no muere. Pero <em>dejó de ser suficiente</em>")}
      <div class="s-body">
        <div class="grid g2">
          ${fr(`<div class="card" style="border-color:rgba(71,207,120,.4)"><span class="tag t-green">Donde Excel brilla</span>
            <ul class="klist check mt-m" style="gap:10px">
              <li>Análisis rápidos y cálculos ad-hoc</li>
              <li>Prototipos de reportes y plantillas</li>
              <li>Lo conoce todo el equipo: cero curva de adopción</li>
            </ul></div>`, 1)}
          ${fr(`<div class="card" style="border-color:rgba(242,97,122,.4)"><span class="tag t-risk">Donde se rompe</span>
            <ul class="klist mt-m" style="gap:10px">
              <li>Como <b>base de datos</b>: versiones infinitas, fórmulas rotas, sin permisos ni historial</li>
              <li>Como <b>reporte recurrente</b>: horas de copy-paste cada semana</li>
              <li>Como <b>fuente de verdad</b>: "¿el avance es el del Excel de Juan o el de María?"</li>
              <li>Como <b>integrador</b>: no escala conectando modelo, campo, costos y cronograma</li>
            </ul></div>`, 2)}
        </div>
        ${fr(`<div class="card accent"><h4>El diagnóstico justo</h4>
          <p>El problema no es Excel: es pedirle que sea base de datos, reporte, control documental y fuente de verdad
          <b>al mismo tiempo</b>. BI no reemplaza a Excel — lo libera para lo que hace bien.</p></div>`, 4)}
      </div>
      ${foot("Bloque 6 · BI y dashboards")}`,
    notes: `**Idea central:** respetar a Excel (la audiencia lo ama) pero delimitar su rol: análisis sí, columna vertebral del control no. **Cómo explicarlo:** dos paneles — dónde brilla y dónde se rompe — y el diagnóstico justo: el problema es el multipropósito. **Ejemplo:** la "sábana" de control de obra de 40 pestañas que solo entiende su creador y que se corrompe cada fin de mes. **Transición:** "lo que necesitamos es una arquitectura donde cada pieza haga su trabajo: eso es Business Intelligence".`,
  });

  /* ---------- 43 · BI en construcción ---------- */
  DECK.add({
    block: 6,
    title: "Business Intelligence en construcción",
    html: `
      ${head("El concepto", "BI: la <em>arquitectura</em> que convierte datos operativos en decisiones")}
      <div class="s-body">
        ${cards([
          { tag: "Simple", t: "Datos → información → decisión", d: "Recolectar lo que la obra ya produce, ordenarlo y mostrarlo de forma que cambie decisiones.", icon: "chart" },
          { tag: "En obra", tagCls: "t-cyan", t: "Tableros vivos de avance, costo y producción", d: "Dashboards conectados a las fuentes (modelo, CDE, campo, costos) que se actualizan solos y responden preguntas en segundos.", icon: "gear" },
          { tag: "Estratégico", tagCls: "t-green", t: "Una cultura de gestión basada en evidencia", d: "Cuando los datos son confiables y visibles, las reuniones cambian: menos debate sobre 'cuál es el número', más decisión sobre qué hacer.", icon: "target" },
        ])}
        ${fr(`<p class="center muted" style="font-size:14px">La palabra clave es <b class="gold">arquitectura</b>: BI no es un gráfico bonito, es el sistema de tuberías que lleva el dato desde donde nace hasta donde se decide.</p>`, 4)}
      </div>
      ${foot("Bloque 6 · BI y dashboards", "Módulo 3 del programa — 21 horas")}`,
    notes: `**Idea central:** definir BI como arquitectura, no como gráficos: el valor está en las tuberías, no en la fachada. **Cómo explicarlo:** los tres niveles de siempre: simple (datos→decisión), obra (tableros vivos), estratégico (cultura de evidencia). **Ejemplo:** la diferencia entre un PowerPoint con gráficos pegados (foto vieja) y un dashboard conectado (video en vivo). **Transición:** "veamos esa arquitectura por dentro: de dónde vienen los datos y cómo llegan al tablero".`,
  });

  /* ---------- 44 · Arquitectura de datos ---------- */
  DECK.add({
    block: 6,
    title: "Arquitectura de datos para construcción",
    html: `
      ${head("La tubería completa", "De las <em>fuentes</em> al <em>tablero</em>: la arquitectura de datos de un proyecto")}
      <div class="s-body">
        <div class="grid g3">
          ${fr(`<div class="card"><span class="tag">1 · Fuentes</span>
            <ul class="klist mt-m" style="gap:7px;font-size:13px">
              <li>Revit / modelos BIM (metrados, sectores)</li>
              <li>ACC: documentos, RFIs, incidencias</li>
              <li>Cronogramas y costos (Presto, P6, Project)</li>
              <li>Campo: Fieldwire, formularios, fotos</li>
              <li>Excel/Sheets donde aún corresponde</li>
            </ul></div>`, 1)}
          ${fr(`<div class="card"><span class="tag t-cyan">2 · Procesamiento</span>
            <ul class="klist mt-m" style="gap:7px;font-size:13px">
              <li><b>Power Query:</b> conectar, limpiar y transformar</li>
              <li>Estandarizar códigos (partida, sector, fecha)</li>
              <li><b>Modelo dimensional:</b> hechos (avance, costo) y dimensiones (tiempo, sector, partida)</li>
              <li>Medidas DAX: PPC, % avance, desvíos</li>
            </ul></div>`, 2)}
          ${fr(`<div class="card"><span class="tag t-green">3 · Visualización</span>
            <ul class="klist mt-m" style="gap:7px;font-size:13px">
              <li><b>Power BI</b> / Looker Studio</li>
              <li>Tableros por audiencia: gerencia, obra, BIM, Lean</li>
              <li>Publicación y actualización programada</li>
              <li>Integración con Speckle para ver el modelo en el tablero</li>
            </ul></div>`, 3)}
        </div>
        ${fr(`<p class="center muted" style="font-size:13.5px"><b class="gold">El 80% del trabajo serio de BI está en el paso 2.</b> Por eso el Módulo 3 dedica sus talleres a la arquitectura, no solo al gráfico.</p>`, 5)}
      </div>
      ${foot("Bloque 6 · BI y dashboards", "Módulo 3 — arquitectura de datos y modelos dimensionales")}`,
    notes: `**Idea central:** la arquitectura tiene tres pisos — fuentes, procesamiento, visualización — y el piso del medio es donde se gana o se pierde. **Cómo explicarlo:** recorrer las tres columnas; en procesamiento, explicar en una frase el modelo dimensional: "hechos que se miden (avance, costo) cruzados por dimensiones que responden preguntas (cuándo, dónde, qué partida)". **Ejemplo:** sin estandarizar el código de sector entre Revit y Fieldwire, el dashboard suma peras con manzanas — elegante, pero falso. **Transición:** "¿y qué medimos? Estos son los KPIs que importan en obra".`,
  });

  /* ---------- 45 · KPIs clave ---------- */
  DECK.add({
    block: 6,
    title: "KPIs clave de seguimiento de obra",
    html: `
      ${head("Qué medir", "Los KPIs que <em>de verdad mueven una obra</em>",
        "Pasa el cursor por cada indicador para ver su definición y uso.")}
      <div class="s-body">
        <div class="grid g5">
          ${[
            ["PPC", "Confiabilidad", "% de compromisos semanales cumplidos. El termómetro de la confiabilidad de tu planificación (Last Planner)."],
            ["Avance físico", "Producción", "% real ejecutado por sector/partida, medido desde campo contra el modelo sectorizado."],
            ["Avance valorizado", "Comercial", "Avance expresado en dinero: la curva S de valorización contra el plan de facturación."],
            ["Restricciones", "Lookahead", "Abiertas vs liberadas por vencer: el mapa de bloqueos de las próximas semanas."],
            ["RFIs", "Información", "Abiertos, tiempo medio de respuesta y vencidos: la salud del flujo de consultas."],
            ["Submittals", "Aprobaciones", "Pendientes de aprobación y su antigüedad: el predictor silencioso de esperas de material."],
            ["Incidencias", "Calidad/Seg.", "No conformidades y observaciones por estado, frente y responsable."],
            ["Productividad", "Rendimiento", "HH por unidad producida vs presupuesto: rendimiento real de cuadrillas."],
            ["Cumplimiento semanal", "Plan", "Actividades completadas vs planificadas en la semana, por frente."],
            ["Causas de NC", "Mejora", "Pareto de causas de no cumplimiento: dónde atacar primero para subir el PPC."],
          ].map((k, i) => fr(`
            <div class="card" data-tip="${k[2]}" style="padding:14px 13px;text-align:center">
              <h4 style="font-size:13.5px">${k[0]}</h4>
              <p style="font-size:10.5px;font-family:var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--gold)">${k[1]}</p>
            </div>`, i)).join("")}
        </div>
        ${fr(`<div class="card accent"><h4>Criterio de selección</h4>
          <p>Un KPI se gana su lugar en el tablero si alguien lo mira cada semana <b>y actúa distinto por lo que ve</b>. Si nadie cambia una decisión por él, es decoración.</p></div>`, 11)}
      </div>
      ${foot("Bloque 6 · BI y dashboards")}`,
    notes: `**Idea central:** un buen tablero de obra cabe en ~10 indicadores con dueño y acción asociada. **Cómo explicarlo:** sobrevolar los KPIs en 3 familias: producción (avance, productividad, PPC), información (RFIs, submittals) y mejora (causas de NC). Cerrar con el criterio: si nadie actúa distinto por verlo, sobra. **Ejemplo:** el tiempo medio de respuesta de RFIs como predictor temprano: cuando sube, las esperas de campo llegan 3 semanas después. **Transición:** "estos KPIs se organizan en tableros distintos según la audiencia. Veamos los cuatro clásicos".`,
  });

  /* ---------- 46 · Dashboard gerencial ---------- */
  DECK.add({
    block: 6,
    title: "Dashboard gerencial",
    html: `
      ${head("Tablero 1 de 4", "El dashboard <em>gerencial</em>: plazo, costo y riesgo en una pantalla")}
      <div class="s-body">
        <div class="cols c-55">
          ${dash("Proyecto Torre Norte · Vista ejecutiva · semana 18", [
            { tl: "Avance físico", v: "46,2%", mood: "mid", d: "plan: 51,0% · desvío −4,8 pp" },
            { tl: "Avance valorizado", v: "S/ 18,4 M", mood: "up", d: "82% del plan de facturación" },
            { tl: "Proyección plazo", v: "+12 días", mood: "down", d: "ruta crítica: estructuras B" },
            { tl: "Margen proyectado", v: "8,1%", mood: "mid", d: "presupuesto: 9,5%" },
            { tl: "Riesgos activos", v: "3 altos", mood: "down", d: "acero · permisos · lluvia" },
            { tl: "PPC promedio", v: "74%", mood: "up", d: "tendencia: +6 pp en 4 sem." },
            { html: CH.sCurve({ w: 520, h: 150 }), wide: true, tl: "Curva S — plan vs real" },
          ], { cols: 3 })}
          <div>
            ${klist([
              "<b>Audiencia:</b> gerencia y cliente. Frecuencia: semanal.",
              "<b>Pregunta que responde:</b> ¿el proyecto está sano y hacia dónde va?",
              "<b>Diseño:</b> pocos números, comparados contra plan, con tendencia y proyección — no fotos sueltas.",
              "<b>Cada cifra tiene dueño:</b> al lado del desvío, un responsable y una acción.",
            ])}
          </div>
        </div>
      </div>
      ${foot("Bloque 6 · BI y dashboards", "Mockup ilustrativo — datos ficticios")}`,
    notes: `**Idea central:** el tablero gerencial responde una sola pregunta: ¿el proyecto está sano y hacia dónde va? **Cómo explicarlo:** recorrer el mockup: avance vs plan, dinero, proyección de plazo, margen, riesgos, PPC — y la curva S como columna vertebral. Todo comparado contra plan: un número sin referencia no informa. **Ejemplo:** el "+12 días" de proyección vale oro: llega con semanas de anticipación, cuando aún se puede comprimir la ruta crítica. **Transición:** "la obra necesita otra vista: la operativa, donde se trabaja el día a día".`,
  });

  /* ---------- 47 · Dashboard operativo ---------- */
  DECK.add({
    block: 6,
    title: "Dashboard operativo",
    html: `
      ${head("Tablero 2 de 4", "El dashboard <em>operativo</em>: lo que el frente necesita esta semana")}
      <div class="s-body">
        <div class="cols c-55">
          ${dash("Obra · Vista de producción · semana 18", [
            { tl: "Tareas de la semana", v: "47", d: "28 done · 12 curso · 7 riesgo" },
            { tl: "Restricciones abiertas", v: "9", mood: "down", d: "3 vencen esta semana" },
            { tl: "Frentes activos", v: "5", d: "S1-S3 al día · S4 atrasado" },
            { tl: "Incidencias abiertas", v: "14", mood: "mid", d: "4 de calidad · 2 seguridad" },
            { tl: "Lookahead 4 sem.", v: "82%", mood: "up", d: "actividades liberadas" },
            { tl: "HH semana", v: "2.340", d: "vs 2.500 plan" },
            { html: `<div class="wt">AVANCE POR SECTOR — SEMANA</div>` + CH.spark([80, 95, 60, 35, 70, 88], "var(--cyan)", 320, 54), wide: true },
          ], { cols: 3 })}
          <div>
            ${klist([
              "<b>Audiencia:</b> residente, jefes de frente, oficina técnica. Frecuencia: diaria/semanal.",
              "<b>Pregunta que responde:</b> ¿qué tengo que destrabar hoy para cumplir la semana?",
              "<b>El corazón:</b> restricciones por vencer y tareas en riesgo — accionable, no contemplativo.",
              "Alimenta la <b>reunión semanal Lean</b>: se proyecta y se decide sobre él.",
            ])}
          </div>
        </div>
      </div>
      ${foot("Bloque 6 · BI y dashboards", "Mockup ilustrativo — datos ficticios")}`,
    notes: `**Idea central:** el tablero operativo es accionable: su unidad es la tarea y la restricción, no el porcentaje agregado. **Cómo explicarlo:** contrastarlo con el gerencial: aquí no se contempla la salud del proyecto, se destraba la semana. El dato estrella: restricciones que vencen esta semana. **Ejemplo:** la reunión de producción del lunes proyecta este tablero: en 20 minutos se asignan dueños a las 9 restricciones y se ajusta el plan semanal. **Transición:** "tercer tablero: el que conecta los datos con el modelo — el dashboard BIM".`,
  });

  /* ---------- 48 · Dashboard BIM ---------- */
  DECK.add({
    block: 6,
    title: "Dashboard BIM",
    html: `
      ${head("Tablero 3 de 4", "El dashboard <em>BIM</em>: el modelo y sus datos en el mismo tablero")}
      <div class="s-body">
        <div class="cols c-55">
          ${dash("Modelo federado · Métricas BIM · rev. 12", [
            { tl: "Elementos modelados", v: "48.210", d: "5 especialidades federadas" },
            { tl: "Interferencias", v: "126", mood: "mid", d: "38 abiertas · 88 resueltas" },
            { tl: "Metrado concreto", v: "12.480 m³", d: "extraído del modelo · rev. 12" },
            { tl: "Avance por modelo", v: "44,7%", mood: "up", d: "elementos en estado 'ejecutado'" },
            { tl: "Sectores al día", v: "4 / 6", mood: "mid", d: "S4-S5 con desvío" },
            { tl: "Calidad del modelo", v: "97%", mood: "up", d: "elementos con código de partida" },
            { html: `<div class="wt">INTERFERENCIAS POR ESPECIALIDAD</div>` + CH.spark([42, 28, 24, 18, 14], "var(--violet)", 320, 54), wide: true },
          ], { cols: 3 })}
          <div>
            ${klist([
              "<b>Audiencia:</b> coordinación BIM, oficina técnica, especialidades.",
              "<b>Pregunta que responde:</b> ¿la información del modelo está sana y al día con la obra?",
              "<b>Con Speckle</b> (taller del M3) el modelo 3D se incrusta en Power BI: clic en un sector → sus métricas.",
              "El KPI subestimado: <b>calidad del dato del modelo</b> — sin códigos completos, todo lo demás cojea.",
            ])}
          </div>
        </div>
      </div>
      ${foot("Bloque 6 · BI y dashboards", "Mockup ilustrativo — datos ficticios · taller Power BI + Speckle, M3")}`,
    notes: `**Idea central:** el dashboard BIM gestiona la salud de la información misma: modelos, interferencias, metrados y avance medido sobre elementos. **Cómo explicarlo:** destacar dos cosas: el avance por estados de elementos (el modelo como registro de ejecución) y la calidad del dato como KPI — el 97% de elementos codificados es lo que hace confiable todo lo demás. Mencionar Speckle: el modelo navegable dentro de Power BI. **Ejemplo:** clic en el sector S4 del modelo embebido → sus metrados, avance e interferencias en la misma pantalla. **Transición:** "y el cuarto tablero es el del sistema Lean: medir la confiabilidad de nuestras promesas".`,
  });

  /* ---------- 49 · Dashboard Lean ---------- */
  DECK.add({
    block: 6,
    title: "Dashboard Lean Construction",
    html: `
      ${head("Tablero 4 de 4", "El dashboard <em>Lean</em>: confiabilidad, restricciones y causas")}
      <div class="s-body">
        <div class="cols c-55">
          ${dash("Last Planner System · Producción · semana 18", [
            { html: `<div style="display:flex;justify-content:center">${CH.gauge(74, "PPC semana 18", "var(--gold)")}</div>`, tl: "" },
            { tl: "Compromisos", v: "38 / 51", d: "cumplidos / planificados" },
            { tl: "Restricciones liberadas", v: "86%", mood: "up", d: "a tiempo, últimas 4 sem." },
            { html: `<div class="wt">PPC — ÚLTIMAS 8 SEMANAS</div>` + CH.spark([58, 64, 61, 70, 66, 72, 71, 74], "var(--green)", 320, 50), wide: false },
            { tl: "Causa NC #1", v: "Materiales", mood: "down", d: "31% de incumplimientos" },
            { tl: "Causa NC #2", v: "Ing. previa", mood: "mid", d: "24% — definiciones tardías" },
          ], { cols: 3 })}
          <div>
            ${klist([
              "<b>Audiencia:</b> todo el equipo de producción — es un tablero de conversación, no de auditoría.",
              "<b>Pregunta que responde:</b> ¿qué tan confiables somos y qué nos lo impide?",
              "<b>El Pareto de causas</b> dirige la mejora: si 'materiales' explica el 31%, ahí va el esfuerzo del mes.",
              "El PPC en tendencia (+16 pp en 8 semanas) <b>cuenta la historia del equipo</b>, no de un individuo.",
            ])}
          </div>
        </div>
      </div>
      ${foot("Bloque 6 · BI y dashboards", "Mockup ilustrativo — datos ficticios")}`,
    notes: `**Idea central:** el tablero Lean mide promesas, no solo producción: PPC, restricciones y causas de no cumplimiento. **Cómo explicarlo:** el gauge de PPC como número social del equipo, la tendencia de 8 semanas como evidencia de mejora, y el Pareto de causas como brújula: la mejora continua deja de ser un eslogan y tiene dirección. **Ejemplo:** si "materiales" explica el 31% de incumplimientos, la acción del mes es logística, no apurar cuadrillas. **Transición:** "ahora, una advertencia importante antes de cerrar el bloque: el tablero por sí solo no gestiona nada…"`,
  });

  /* ---------- 50 · De dashboard bonito a sistema de gestión ---------- */
  DECK.add({
    block: 6,
    title: "De dashboard bonito a sistema de gestión",
    html: `
      ${head("La advertencia honesta", "Un dashboard que no cambia decisiones es <em>un protector de pantalla caro</em>")}
      <div class="s-body">
        ${table(
          ["", "Dashboard decorativo", "Sistema de gestión"],
          [
            ["Reuniones", "Se sigue presentando el PPT de siempre", "<b>La reunión ocurre sobre el tablero</b>: se navega, se filtra, se decide"],
            ["Responsables", "Los números no tienen dueño", "Cada KPI tiene <b>un responsable que responde por él</b>"],
            ["Rituales", "Se mira 'cuando hay tiempo'", "<b>Cadencia fija</b>: lunes producción, viernes comité — sin excepción"],
            ["Acciones", "Los desvíos se comentan", "Cada desvío genera <b>acción con dueño y fecha</b>, y se le hace seguimiento"],
            ["Datos", "Se alimenta a mano 'para la reunión'", "Se alimenta solo desde las fuentes — <b>si el dato es manual, el sistema ya murió</b>"],
          ]
        )}
        ${fr(`<p class="center muted mt-s" style="font-size:14px"><b class="gold">La tecnología es el 30%; el ritual de gestión es el 70%.</b> El diplomado enseña ambos: el taller técnico y el modelo de reunión que lo explota.</p>`, 4)}
      </div>
      ${foot("Bloque 6 · BI y dashboards")}`,
    notes: `**Idea central:** advertencia anti-hype: el tablero solo crea valor si cambia reuniones, responsables y rituales. **Cómo explicarlo:** leer la tabla fila por fila como un checklist de honestidad para la propia empresa. La frase 30/70 es el mensaje del bloque. **Ejemplo:** la empresa que invirtió en Power BI y a los 6 meses seguía decidiendo con el PPT de siempre: tablero impecable, gestión intacta. **Transición:** "con los datos fluyendo y los rituales funcionando, está listo el terreno para el siguiente salto: la inteligencia artificial" → Bloque 7.`,
  });
})();
