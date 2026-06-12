/* ============================================================
   BLOQUE 8 — Cierre, valor profesional y llamado a la acción
   Slides 58–60
   ============================================================ */
(function () {
  "use strict";
  const { head, foot, fr, cards, klist, quote } = C;
  const P = PROGRAM;

  /* ---------- 58 · Lo que realmente aprenderán ---------- */
  DECK.add({
    block: 8,
    title: "Lo que realmente aprenderán",
    html: `
      ${head("Bloque 8 · Cierre", "No aprenderás herramientas: aprenderás a <em>pensar la obra como sistema</em>",
        "Las herramientas cambian de versión cada año. El sistema de pensamiento te acompaña toda la carrera.")}
      <div class="s-body">
        ${cards([
          { icon: "flow", t: "Sistema de información", d: "Estructurar y gobernar el dato de obra: BIM, ISO 19650, CDE, trazabilidad. La información como activo, no como trámite." },
          { icon: "cycle", t: "Sistema de producción", d: "Leer la obra en términos de flujo, restricciones y confiabilidad: Lean, LPS, trenes de trabajo, métricas VDC." },
          { icon: "target", t: "Sistema de decisión", d: "Convertir datos en dirección: dashboards por audiencia, rituales de gestión, IA y automatización al servicio del criterio profesional." },
        ])}
        ${fr(`<div class="card accent"><h4>La integración es el aprendizaje</h4>
          <p>Cada módulo entrega un certificado y un entregable real — pero el verdadero producto eres tú operando los tres sistemas
          <b>a la vez</b>, en tu proyecto, desde la primera semana.</p></div>`, 4)}
      </div>
      ${foot("Bloque 8 · Cierre", "Brochure AECODE — certificados por entregables")}`,
    notes: `**Idea central:** reposicionar el valor del programa: el software es vehículo; el destino es un sistema de pensamiento en tres capas. **Cómo explicarlo:** información (cómo se estructura el dato), producción (cómo fluye el trabajo), decisión (cómo se decide con evidencia). Recordar los entregables por módulo: matriz POP, BEP+ACC, dashboard BIM, asistente IA — el portafolio se construye cursando. **Ejemplo:** "dentro de 5 años habrá otro software de moda; estos tres sistemas seguirán siendo tu ventaja". **Transición:** "esto, en términos personales, se ve así…"`,
  });

  /* ---------- Checkpoint B8 — síntesis de la sesión ---------- */
  DECK.add({
    block: 8,
    title: "Checkpoint final — síntesis de la sesión",
    html: `
      ${head("Checkpoint · síntesis", "Tres preguntas para llevarse la sesión completa",
        "La última votación de la clase: gira cada tarjeta para confirmar.")}
      <div class="s-body">
        ${C.quiz([
          { q: "Los tres sistemas que integra el profesional AEC moderno son…",
            opts: ["Información, producción y decisión", "Revit, Presto y Power BI", "Diseño, obra y cliente"],
            ok: 0, why: "Las herramientas cambian de versión cada año; el sistema de pensamiento en tres capas te acompaña toda la carrera." },
          { q: "La respuesta a la pregunta inicial ('más software, mismos problemas') es…",
            opts: ["Faltaba aún más software", "Faltaba integración", "Faltaba presupuesto"],
            ok: 1, why: "La pregunta que abrió la sesión se responde sola al final: el problema nunca fue la falta de herramientas, sino su desconexión." },
          { q: "¿Qué definirá la ventaja profesional en la próxima década del sector?",
            opts: ["Dominar un software de moda", "Integrar personas, procesos, modelos y datos", "Acumular certificados"],
            ok: 1, why: "Es el mensaje final de la clase: la integración es la ventaja — y es exactamente lo que este programa entrena." },
        ])}
      </div>
      ${foot("Bloque 8 · Checkpoint final")}`,
    notes: `**Idea central:** cierre con recuperación activa: la audiencia formula por sí misma la tesis de la sesión antes de que el expositor la selle. **Cómo explicarlo:** ritmo rápido y celebratorio — a esta altura las respuestas salen solas, y eso es exactamente la sensación de logro que se busca. **Ejemplo:** en la pregunta 2, recordar el silencio del slide 3 ("la pregunta incómoda") y cerrar el círculo narrativo. **Transición:** "esto, en términos personales, se ve así…" → comparador antes/después.`,
  });

  /* ---------- 59 · Ruta de transformación personal ---------- */
  DECK.add({
    block: 8,
    title: "Ruta de transformación personal",
    html: `
      ${head("Tu antes y después", "La misma persona, <em>otro nivel de juego</em>",
        "Arrastra el control para comparar.")}
      <div class="s-body">
        <div class="ba fr" style="--d:160ms;height:330px" id="bacomp">
          <div class="pane before">
            <span class="tag t-risk" style="align-self:flex-start">Antes</span>
            <h4>Profesional reactivo</h4>
            <ul>
              <li>Reporta tarde: el informe describe lo irreversible</li>
              <li>Coordina por reacción: apaga incendios por WhatsApp</li>
              <li>Depende de archivos sueltos y de su memoria</li>
              <li>Su avance es una opinión discutible en cada reunión</li>
              <li>Compite por precio con miles de perfiles similares</li>
            </ul>
          </div>
          <div class="pane after">
            <span class="tag t-green" style="align-self:flex-start">Después</span>
            <h4>Profesional que controla con datos</h4>
            <ul>
              <li>Controla con modelos: sectores, 4D y metrados confiables</li>
              <li>Anticipa con Lean: restricciones visibles semanas antes</li>
              <li>Gobierna la información: CDE y trazabilidad completa</li>
              <li>Sus tableros se actualizan solos — y cambian decisiones</li>
              <li>Integra IA y automatización: perfil escaso, demandado</li>
            </ul>
          </div>
          <div class="handle"></div>
          <input type="range" min="0" max="100" value="50" aria-label="Comparador antes y después">
        </div>
      </div>
      ${foot("Bloque 8 · Cierre")}`,
    init(el) {
      const box = el.querySelector("#bacomp");
      const range = box.querySelector("input");
      const set = (v) => box.style.setProperty("--cut", v + "%");
      range.addEventListener("input", () => set(range.value));
      set(50);
    },
    notes: `**Idea central:** hacer personal la transformación: no es la empresa, eres tú con otro nivel de juego. **Cómo explicarlo:** arrastrar el comparador en vivo, leyendo 2 pares espejo: "reporta tarde → tableros que se actualizan solos", "coordina por WhatsApp → anticipa restricciones". Dejar que la audiencia se ubique en el lado izquierdo sin decirlo explícitamente. **Ejemplo:** invitar a imaginar su próxima entrevista laboral respondiendo desde el lado derecho del slide. **Transición:** "cierro con la idea que quiero que se lleven grabada…"`,
  });

  /* ---------- 60 · Cierre potente ---------- */
  DECK.add({
    block: 8,
    title: "Cierre — mensaje final y próximos pasos",
    html: `
      <div class="s-body" style="justify-content:center;gap:26px">
        ${quote(
          "La ventaja no estará en quien tenga más software, sino en quien sepa <em>integrar personas, procesos, modelos y datos</em> para tomar mejores decisiones en obra.",
          "Mensaje final de la sesión"
        )}
        <div class="grid g4" style="margin-top:6px">
          ${fr(`<div class="card" style="text-align:center"><h4 style="color:var(--gold-2)">4 módulos</h4>
            <p>Marcos → BIM+Lean → BI → Tecnologías<br>${P.hours.total} h certificadas · ${P.hours.live} h en vivo</p></div>`, 3)}
          ${fr(`<div class="card" style="text-align:center"><h4 style="color:var(--gold-2)">3 certificaciones</h4>
            <p>CIP · Autodesk (USA) · AECODE<br>+ insignia digital Acreditta</p></div>`, 4)}
          ${fr(`<div class="card" style="text-align:center"><h4 style="color:var(--gold-2)">4 entregables</h4>
            <p>Matriz POP · BEP + control en ACC<br>Dashboard BIM · Asistente de obra con IA</p></div>`, 5)}
          ${fr(`<div class="card accent" style="text-align:center"><h4 style="color:var(--gold-2)">Próximo paso</h4>
            <p>Inscripciones abiertas<br><b>aecode.ai</b> · @aecode.ai</p></div>`, 6)}
        </div>
        <div class="center fr" style="--d:640ms">
          <img src="assets/brand/aecode-logo-ink.svg" alt="AECODE" style="height:24px;opacity:.9;vertical-align:middle">
          <span class="muted" style="font-size:12px;margin-left:14px;font-family:var(--f-mono)">AECODE · Colegio de Ingenieros del Perú</span>
        </div>
      </div>
      ${foot("Gracias — sesión de preguntas")}`,
    notes: `**Idea central:** cerrar alto y claro: la integración es la ventaja. **Cómo explicarlo:** leer la frase final despacio, en silencio total — es el destilado de las 60 slides. Luego, sin bajar la energía, los próximos pasos concretos: 4 módulos, 3 certificaciones, 4 entregables, inscripción en aecode.ai. **Ejemplo:** recordar la pregunta inicial ("¿por qué seguimos fallando con más software?") y responderla ahora en una frase: porque faltaba la integración — exactamente lo que este programa enseña. **Transición:** abrir la ronda de preguntas y quedarse para conversaciones individuales: ahí se inscriben los convencidos.`,
  });
})();
