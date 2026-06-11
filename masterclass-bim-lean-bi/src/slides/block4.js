/* ============================================================
   BLOQUE 4 — Obra, oficina técnica y CDE · Slides 28–34
   ============================================================ */
(function () {
  "use strict";
  const { head, foot, fr, cards, xcards, stats, klist, flow, table } = C;

  /* ---------- 28 · El flujo real + simulación ---------- */
  DECK.add({
    block: 4,
    title: "El flujo de información: diseño → obra → decisión",
    html: `
      ${head("Bloque 4 · Información en obra", "Así debería <em>viajar la información</em> — sin escalas manuales",
        "Pulsa ▶ para ver el dato viajar de la obra a la decisión.")}
      <div class="s-body">
        ${flow([
          { icon: "doc",   t: "Diseño", d: "Modelos y planos emitidos con estado y versión." },
          { icon: "cloud", t: "CDE", d: "La información entra a una sola fuente de verdad." },
          { icon: "cube",  t: "Modelo", d: "Coordinación, sectores, metrados, 4D." },
          { icon: "gear",  t: "Ejecución", d: "Campo reporta avance e incidencias sobre el sistema." },
          { icon: "chart", t: "Dashboard", d: "Los datos se consolidan solos en tableros." },
          { icon: "check", t: "Decisión", d: "El comité decide con datos del día, no del mes pasado." },
        ])}
        <div class="fr" style="--d:300ms;position:relative;height:34px">
          <div style="position:absolute;left:3%;right:3%;top:14px;height:3px;border-radius:99px;background:rgba(255,255,255,.08)"></div>
          ${[0, 1, 2].map((i) => `<span class="simdot" data-sd="${i}" style="position:absolute;top:10px;left:3%;width:11px;height:11px;border-radius:50%;
             background:var(--gold);box-shadow:0 0 14px rgba(217,164,91,.9);opacity:0"></span>`).join("")}
        </div>
        <div class="center fr" style="--d:360ms">
          <button class="playbtn" id="simplay">▶ &nbsp;Simular flujo de información</button>
          <span class="muted" style="font-size:12px;margin-left:14px">…y la <b class="gold">retroalimentación</b> regresa al diseño: el ciclo se cierra.</span>
        </div>
      </div>
      ${foot("Bloque 4 · Información en obra")}`,
    init(el) {
      const btn = el.querySelector("#simplay");
      const dots = el.querySelectorAll(".simdot");
      btn.addEventListener("click", () => {
        dots.forEach((d, i) => {
          d.animate(
            [
              { left: "3%", opacity: 0 },
              { left: "5%", opacity: 1, offset: 0.06 },
              { left: "92%", opacity: 1, offset: 0.94 },
              { left: "94%", opacity: 0 },
            ],
            { duration: 3400, delay: i * 480, easing: "cubic-bezier(.4,.1,.4,1)" }
          );
        });
      });
    },
    notes: `**Idea central:** visualizar el flujo ideal: el dato nace una vez y viaja solo hasta la decisión — sin copiar, pegar ni transcribir. **Cómo explicarlo:** correr la simulación y narrar el viaje del dato: diseño emite al CDE, el modelo lo estructura, campo reporta sobre el sistema, el tablero consolida, el comité decide; y la decisión retroalimenta al diseño. **Ejemplo:** contrastar con el flujo real típico: foto de WhatsApp → Excel → PowerPoint → reunión → "lo confirmo y te aviso". **Transición:** "la pieza que hace posible este viaje es el CDE; veámoslo de cerca".`,
  });

  /* ---------- 29 · CDE ---------- */
  DECK.add({
    block: 4,
    title: "Entorno Común de Datos (CDE)",
    html: `
      ${head("La pieza clave", "El CDE: el <em>sistema nervioso documental</em> del proyecto")}
      <div class="s-body">
        ${cards([
          { tag: "Simple", t: "Un solo lugar para la información", d: "Todos consultan y aportan en la misma plataforma. Se acabó el 'te lo reenvío por correo'.", icon: "cloud" },
          { tag: "En obra", tagCls: "t-cyan", t: "Estados, flujos y aprobaciones", d: "Cada documento tiene estado (WIP → Compartido → Publicado), responsable, fecha y flujo de aprobación. Los RFIs y submittals viven aquí.", icon: "gear" },
          { tag: "Estratégico", tagCls: "t-green", t: "Gobernanza y evidencia", d: "La trazabilidad completa protege al proyecto: quién sabía qué y cuándo. En disputas, el CDE es la memoria oficial.", icon: "db" },
        ])}
        ${fr(`<div class="card accent"><h4>Regla de oro</h4>
          <p>Si una información importante del proyecto <b>no está en el CDE, no existe</b>. Esta sola regla, aplicada con disciplina,
          elimina la mitad de las discusiones de obra.</p></div>`, 4)}
      </div>
      ${foot("Bloque 4 · Información en obra", "ISO 19650 — Common Data Environment")}`,
    notes: `**Idea central:** el CDE no es una carpeta compartida con otro nombre: es gobernanza de información con estados, flujos y trazabilidad. **Cómo explicarlo:** otra vez los 3 niveles: simple (un solo lugar), obra (estados y aprobaciones), estratégico (evidencia y gobernanza). Rematar con la regla de oro y dejarla resonar. **Ejemplo:** Dropbox/Drive sin estados = todos editan, nadie aprueba; CDE = cada archivo sabe en qué estado está y quién lo autorizó. **Transición:** "¿y qué plataformas implementan esto en la práctica? Las que verás en el diplomado".`,
  });

  /* ---------- 30 · Plataformas colaborativas ---------- */
  DECK.add({
    block: 4,
    title: "Plataformas: ACC, Trimble Connect, Dalux, Revizto",
    html: `
      ${head("El ecosistema de plataformas", "Mismas funciones esenciales, <em>distintos énfasis</em>",
        "Haz clic en cada tarjeta para ver su rol típico. En el diplomado trabajas con ACC y Trimble Connect.")}
      <div class="s-body">
        ${xcards([
          { icon: "cloud", t: "Autodesk Construction Cloud", d: "Suite integral: Docs (documental), Build (RFIs, submittals, punchlist), Takeoff (metrados), Model Coordination.",
            more: "<b>Rol típico:</b> CDE central del proyecto con flujos de aprobación, incidencias y coordinación de modelos. Integración natural con Revit y Navisworks. <b>En el M2</b> montas un CDE completo en ACC y gestionas control de cambios real." },
          { icon: "link", t: "Trimble Connect", d: "Colaboración y visualización multiplataforma, gestión de tareas e incidencias, fuerte en interoperabilidad abierta.",
            more: "<b>Rol típico:</b> visor colaborativo ágil para coordinar equipos mixtos (oficina-campo) y conectar con ecosistema Trimble. <b>En el M1-M2</b> lo usas para seguimiento de obra y tareas." },
          { icon: "eye", t: "Dalux", d: "Field y visor BIM muy fluido en campo; punchlist, inspecciones y handover con modelos en el celular.",
            more: "<b>Rol típico:</b> llevar el modelo al bolsillo del supervisor: inspecciones, incidencias geolocalizadas en el modelo y entrega de proyecto. Referente europeo en uso de campo." },
          { icon: "search", t: "Revizto", d: "Coordinación visual y seguimiento de issues sobre modelos federados, con tableros de avance de resolución.",
            more: "<b>Rol típico:</b> 'sala de coordinación' permanente: cada interferencia es un issue con responsable, estado e historial — ideal para gestionar la resolución de clashes entre disciplinas." },
        ], { cols: 4 })}
        ${fr(`<p class="center muted" style="font-size:13px">Lo importante no es la marca: es que el proyecto tenga <b class="gold">una sola fuente de verdad con flujos y trazabilidad</b>. Las funciones esenciales —documentos, incidencias, modelos, aprobaciones, RFIs— están en todas.</p>`, 5)}
      </div>
      ${foot("Bloque 4 · Información en obra")}`,
    notes: `**Idea central:** las plataformas comparten las funciones esenciales; difieren en énfasis y ecosistema — el criterio profesional está en saber qué pedir, no en memorizar marcas. **Cómo explicarlo:** expandir 2 tarjetas (ACC y Trimble, las del programa) y mencionar Dalux/Revizto como alternativas que pueden encontrar en otras empresas. Evitar sonar a vendedor. **Ejemplo:** en una licitación te pueden pedir "CDE según ISO 19650" sin especificar marca: debes saber evaluar cualquiera. **Transición:** "dentro de estas plataformas viven los procesos más sensibles de la obra: RFIs, submittals y compañía".`,
  });

  /* ---------- 31 · RFIs, submittals, transmittals, punchlist ---------- */
  DECK.add({
    block: 4,
    title: "RFIs, submittals, transmittals y punchlist",
    html: `
      ${head("Los procesos documentales", "El ciclo de vida ideal de <em>una consulta de obra</em>")}
      <div class="s-body">
        ${flow([
          { icon: "warn", t: "Solicitud", d: "El RFI nace en campo, con foto, ubicación y contexto.", tip: "Un buen RFI: pregunta específica + evidencia + impacto si no se responde." },
          { icon: "users", t: "Responsable", d: "Se asigna con plazo y prioridad explícitos.", tip: "Sin responsable y fecha, un RFI es solo un deseo." },
          { icon: "search", t: "Revisión", d: "El especialista analiza con el modelo a la vista.", tip: "La respuesta se evalúa contra el modelo coordinado, no contra un plano suelto." },
          { icon: "doc", t: "Respuesta", d: "Decisión documentada en el CDE, visible para todos.", tip: "La respuesta queda vinculada al RFI: contexto completo para siempre." },
          { icon: "money", t: "Impacto", d: "¿Afecta costo o plazo? Se registra y se gestiona.", tip: "Aquí se decide si genera orden de cambio: trazabilidad comercial." },
          { icon: "check", t: "Cierre", d: "El frente ejecuta; la trazabilidad queda para siempre.", tip: "Histórico completo: clave ante reclamos o arbitrajes." },
        ])}
        ${fr(`<div class="grid g3 mt-s">
          <div class="card"><h4>Submittals</h4><p>Aprobaciones de materiales y equipos antes de comprar/instalar. Sin flujo digital, son la causa silenciosa de semanas de espera.</p></div>
          <div class="card"><h4>Transmittals</h4><p>El registro formal de qué se envió, a quién y cuándo. La evidencia de comunicación que gana o pierde reclamos.</p></div>
          <div class="card"><h4>Punchlist</h4><p>Observaciones de cierre con foto, ubicación y responsable. Digital: se levantan en días, no en meses.</p></div>
        </div>`, 7)}
      </div>
      ${foot("Bloque 4 · Información en obra")}`,
    notes: `**Idea central:** estos procesos son la circulación sanguínea documental de la obra; digitalizados con flujo y trazabilidad, dejan de ser cuellos de botella. **Cómo explicarlo:** narrar el ciclo del RFI paso a paso enfatizando dos momentos: la asignación con plazo (sin eso no hay gestión) y el registro de impacto (ahí se juega el dinero). **Ejemplo:** un RFI promedio puede tardar 7-10 días en responderse por correo; con flujo digital y alertas, días o horas. **Transición:** "todos estos procesos descansan sobre una base: el control documental. Y ahí hay un caso que se repite en todas las obras…"`,
  });

  /* ---------- 32 · Control documental ---------- */
  DECK.add({
    block: 4,
    title: "Control documental en obra",
    html: `
      ${head("El cimiento", "Control documental: <em>la versión correcta, en la mano correcta</em>")}
      <div class="s-body">
        <div class="grid g2">
          ${fr(`<div class="card" style="border-color:rgba(242,97,122,.4)"><span class="tag t-risk">El problema</span>
            <ul class="klist mt-m" style="gap:10px">
              <li>Planos impresos <b>sin control de revisión</b> circulando en campo</li>
              <li>Carpetas paralelas: la del proyectista, la de OT, la del residente</li>
              <li>“Superseded” que nadie retiró del frente</li>
              <li>Nadie puede afirmar <b>cuál es la versión vigente</b></li>
            </ul></div>`, 1)}
          ${fr(`<div class="card" style="border-color:rgba(71,207,120,.4)"><span class="tag t-green">La solución (CDE + disciplina)</span>
            <ul class="klist check mt-m" style="gap:10px">
              <li><b>Estados:</b> WIP / Compartido / Publicado / Archivado</li>
              <li><b>Flujos de aprobación</b> con responsables nombrados</li>
              <li><b>Permisos:</b> campo solo ve lo Publicado</li>
              <li><b>Trazabilidad:</b> historial completo de cada documento</li>
            </ul></div>`, 2)}
        </div>
        ${fr(`<p class="center muted" style="font-size:14px">La regla operativa: <b class="gold">el frente de obra solo consume información en estado Publicado.</b> Todo lo demás es borrador.</p>`, 4)}
      </div>
      ${foot("Bloque 4 · Información en obra")}`,
    notes: `**Idea central:** el control documental es la aplicación más rentable y menos glamorosa de todo el stack digital. **Cómo explicarlo:** contrastar paneles: el caos de versiones (todos lo han vivido) contra las 4 piezas de la solución: estados, flujos, permisos, trazabilidad. La regla operativa es el mensaje para llevar. **Ejemplo:** anticipar que el siguiente slide cuenta la historia completa de un plano desactualizado. **Transición:** "déjenme contarles ese minuto de obra que todos hemos vivido…"`,
  });

  /* ---------- 33 · Caso: error por plano desactualizado ---------- */
  DECK.add({
    block: 4,
    title: "Caso: el plano desactualizado",
    html: `
      ${head("Historia de 1 minuto", "Anatomía de un error: <em>el muro que se construyó dos veces</em>")}
      <div class="s-body">
        ${flow([
          { icon: "doc", t: "Lunes", d: "Diseño emite revisión D del plano de estructuras: cambia el espesor y refuerzo de un muro." },
          { icon: "warn", t: "Martes", d: "El PDF viaja por correo. El residente del frente 2 no estaba en copia." },
          { icon: "gear", t: "Miércoles", d: "El frente 2 encofra y vacía el muro… con la revisión B impresa semanas atrás." },
          { icon: "search", t: "Jueves", d: "Supervisión detecta la inconsistencia en el recorrido. Se paraliza el frente." },
          { icon: "money", t: "Viernes", d: "Demolición, RFI, no conformidad, y la pregunta del millón: ¿quién paga?" },
        ])}
        <div class="grid g2 mt-s">
          ${fr(`<div class="card" style="border-color:rgba(242,97,122,.4)"><h4 style="color:#FF94A8">El costo real</h4>
            <p>Demolición + re-ejecución + 3 días de frente parado + horas de gestión del conflicto + desgaste contractual.
            Todo por <b>un correo que no llegó</b>.</p></div>`, 6)}
          ${fr(`<div class="card" style="border-color:rgba(71,207,120,.4)"><h4 style="color:var(--green)">Con CDE, la historia muere el lunes</h4>
            <p>La revisión D entra como Publicado y <b>reemplaza automáticamente</b> a la B; campo consulta del visor, no del papel;
            y la notificación llega a todos los suscritos del frente 2.</p></div>`, 7)}
        </div>
      </div>
      ${foot("Bloque 4 · Información en obra")}`,
    notes: `**Idea central:** un caso narrativo fija más que diez estadísticas: el error no fue técnico, fue informacional. **Cómo explicarlo:** contar la semana día a día con ritmo (lunes→viernes), pausa dramática en "¿quién paga?", y cerrar con la versión alternativa: con CDE la historia termina el lunes. **Ejemplo:** invitar a la audiencia: "¿a quién le ha pasado una versión de esta historia?" — todas las manos. **Transición:** "fíjense en algo: en esta disputa, gana quien tiene el dato. Hablemos del dato como evidencia".`,
  });

  /* ---------- 34 · El dato como evidencia ---------- */
  DECK.add({
    block: 4,
    title: "El dato como evidencia de gestión",
    html: `
      ${head("Cierre del bloque", "La trazabilidad no es burocracia: <em>es protección y ventaja</em>")}
      <div class="s-body">
        ${cards([
          { icon: "doc", t: "Menos disputas", d: "Quién envió qué, cuándo y a quién — registrado. Las discusiones de memoria contra memoria se acaban.", },
          { icon: "search", t: "Decisiones auditables", d: "Cada decisión enlaza a su contexto: el RFI, el plano, la foto. Se puede aprender de ellas, no solo defenderlas." },
          { icon: "chart", t: "Gestión medible", d: "Tiempos de respuesta, cuellos de botella, reincidencias: el proceso documental también se optimiza con datos." },
        ])}
        ${fr(`<div class="card accent"><h4>El puente al siguiente bloque</h4>
          <p>Con la información gobernada (CDE) y estructurada (BIM), aparece la pregunta poderosa:
          <b>¿qué herramientas convierten ese orden en control diario del avance, el costo y el plazo?</b></p></div>`, 4)}
      </div>
      ${foot("Bloque 4 · Información en obra")}`,
    notes: `**Idea central:** cerrar el bloque 4 elevando la trazabilidad de tarea administrativa a activo estratégico: protege en disputas y permite mejorar el propio proceso. **Cómo explicarlo:** tres beneficios en escalera: defensa (disputas), aprendizaje (auditabilidad), optimización (medir la gestión misma). **Ejemplo:** en un arbitraje, el historial del CDE versus una carpeta de correos: no hay color. **Transición:** "ahora sí: con la información ordenada, veamos las herramientas que controlan la obra día a día" → Bloque 5.`,
  });
})();
