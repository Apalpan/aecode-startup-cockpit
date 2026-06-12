/* ============================================================
   Componentes: funciones puras que devuelven strings de HTML.
   Sin dependencias de DOM → reutilizables también en Node
   (tools/build-notes.js).
   ============================================================ */
(function (g) {
  "use strict";

  /* ---------- Iconos SVG (línea fina, geometría simple) ---------- */
  const S = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">';
  const E = "</svg>";
  const ICONS = {
    cube:    S + '<path d="M12 2.5 21 7v10l-9 4.5L3 17V7l9-4.5z"/><path d="M3 7l9 4.5L21 7M12 11.5V21.5"/>' + E,
    layers:  S + '<path d="M12 3 22 8l-10 5L2 8l10-5z"/><path d="M2 12.5l10 5 10-5M2 17l10 5 10-5"/>' + E,
    chart:   S + '<path d="M4 20V4"/><path d="M4 20h16"/><rect x="7.5" y="11" width="3" height="6"/><rect x="12.5" y="7" width="3" height="10"/><rect x="17.5" y="13" width="3" height="4"/>' + E,
    flow:    S + '<circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M7.5 6h9M6 8.2l4.5 7.4M18 8.2l-4.5 7.4"/>' + E,
    doc:     S + '<path d="M6 2.5h8l4 4V21.5H6v-19z"/><path d="M14 2.5v4h4M9 12h6M9 16h6"/>' + E,
    cloud:   S + '<path d="M7 18.5a4.5 4.5 0 0 1-.4-9A6 6 0 0 1 18.2 11a3.8 3.8 0 0 1-.7 7.5H7z"/>' + E,
    bolt:    S + '<path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-8z"/>' + E,
    eye:     S + '<path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>' + E,
    gear:    S + '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1"/>' + E,
    users:   S + '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c.6-3.5 2.8-5.5 5.5-5.5S13.9 16.5 14.5 20"/><circle cx="17" cy="9" r="2.6"/><path d="M16 14.6c2.4.2 4 1.9 4.5 4.9"/>' + E,
    target:  S + '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/>' + E,
    clock:   S + '<circle cx="12" cy="12" r="9"/><path d="M12 6.5V12l3.8 2.4"/>' + E,
    warn:    S + '<path d="M12 3 22 20H2L12 3z"/><path d="M12 9.5v5M12 17.4v.4"/>' + E,
    check:   S + '<circle cx="12" cy="12" r="9"/><path d="m7.5 12.3 3 3 6-6.5"/>' + E,
    robot:   S + '<rect x="4" y="8" width="16" height="11" rx="3"/><circle cx="9" cy="13" r="1.3" fill="currentColor"/><circle cx="15" cy="13" r="1.3" fill="currentColor"/><path d="M12 8V4.5M9.5 4.5h5M8 22v-2M16 22v-2"/>' + E,
    vr:      S + '<path d="M2.5 8.5h19v7a2.5 2.5 0 0 1-2.5 2.5h-3.2L13.6 15h-3.2L8.2 18H5a2.5 2.5 0 0 1-2.5-2.5v-7z"/><path d="M7 5.5h10"/>' + E,
    scan:    S + '<path d="M3 8V4.5A1.5 1.5 0 0 1 4.5 3H8M16 3h3.5A1.5 1.5 0 0 1 21 4.5V8M21 16v3.5a1.5 1.5 0 0 1-1.5 1.5H16M8 21H4.5A1.5 1.5 0 0 1 3 19.5V16"/><path d="M3 12h18"/>' + E,
    web:     S + '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.6 4 5.6 4 9s-1.2 6.4-4 9c-2.8-2.6-4-5.6-4-9s1.2-6.4 4-9z"/>' + E,
    db:      S + '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>' + E,
    link:    S + '<path d="M10 14a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.1"/><path d="M14 10a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.1"/>' + E,
    flag:    S + '<path d="M5 21.5V3.5"/><path d="M5 4.5c5-2.5 9 2.5 14 0v9c-5 2.5-9-2.5-14 0"/>' + E,
    grad:    S + '<path d="M2.5 9.5 12 4.5l9.5 5L12 14.5l-9.5-5z"/><path d="M6.5 12v5c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-5M21.5 9.5v6"/>' + E,
    money:   S + '<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9.5v.01M18 14.5v.01"/>' + E,
    map:     S + '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>' + E,
    cal:     S + '<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 10h17M8 2.8V7M16 2.8V7"/>' + E,
    search:  S + '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>' + E,
    bell:    S + '<path d="M6 16v-5.5a6 6 0 0 1 12 0V16l1.8 2.8H4.2L6 16z"/><path d="M10 21a2.2 2.2 0 0 0 4 0"/>' + E,
    cycle:   S + '<path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 3.5V7h-3.5"/>' + E,
    grid:    S + '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>' + E,
  };
  const ic = (name) => ICONS[name] || ICONS.cube;

  /* ---------- Helpers básicos ---------- */
  const fr = (html, i) => `<div class="fr" style="--d:${80 + i * 90}ms">${html}</div>`;

  function head(kicker, title, sub) {
    return `<header class="s-head">
      <div class="kicker fr" style="--d:40ms">${kicker}</div>
      <h2 class="s-title fr" style="--d:120ms">${title}</h2>
      ${sub ? `<p class="s-sub fr" style="--d:200ms">${sub}</p>` : ""}
    </header>`;
  }

  function foot(left, src) {
    return `<div class="s-foot"><span>${left || ""}</span><span class="src">${src ? "Fuente: " + src : ""}</span></div>`;
  }

  /* ---------- Tarjetas ---------- */
  function cards(items, opts = {}) {
    const cols = opts.cols || Math.min(items.length, 3);
    const inner = items.map((c, i) => fr(`
      <div class="card ${c.accent ? "accent" : ""} ${opts.cls || ""}" ${c.tip ? `data-tip="${c.tip}"` : ""}>
        ${c.tag ? `<span class="tag ${c.tagCls || ""}">${c.tag}</span>` : ""}
        ${c.icon ? `<div class="ic">${ic(c.icon)}</div>` : ""}
        <h4>${c.t}</h4>
        <p>${c.d}</p>
      </div>`, i)).join("");
    return `<div class="grid g${cols}">${inner}</div>`;
  }

  function xcards(items, opts = {}) {
    const cols = opts.cols || Math.min(items.length, 3);
    const inner = items.map((c, i) => fr(`
      <div class="card xp" data-x>
        ${c.icon ? `<div class="ic">${ic(c.icon)}</div>` : ""}
        <h4>${c.t}</h4>
        <p>${c.d}</p>
        <div class="more">${c.more}</div>
        <span class="hint">+</span>
      </div>`, i)).join("");
    return `<div class="grid g${cols}">${inner}</div>`;
  }

  /* Valor de stat: si es numérico, se marca para el contador animado
     del engine ([data-count]); si no (p. ej. "↑"), se deja tal cual. */
  function statVal(v) {
    const m = String(v).match(/^([^0-9<]*)(\d{1,3}(?:[.,]\d+)?)([^<]*)$/);
    if (!m) return v;
    const dec = /[.,]/.test(m[2]) ? m[2].split(/[.,]/)[1].length : 0;
    const num = m[2].replace(",", ".");
    return `<span data-count="${num}" data-dec="${dec}" data-pre="${m[1]}" data-suf="${m[3]}">${v}</span>`;
  }

  function stats(items) {
    const inner = items.map((s, i) => fr(`
      <div class="stat ${s.c ? "c-" + s.c : ""}">
        <div class="v">${statVal(s.v)}</div>
        <div class="l">${s.l}</div>
        ${s.s ? `<div class="s">${s.s}</div>` : ""}
      </div>`, i)).join("");
    return `<div class="grid g${Math.min(items.length, 4)}">${inner}</div>`;
  }

  function klist(items, check) {
    return `<ul class="klist ${check ? "check" : ""}">${items
      .map((t, i) => `<li class="fr" style="--d:${120 + i * 90}ms">${t}</li>`)
      .join("")}</ul>`;
  }

  function quote(text, cite) {
    return `<div class="quote fr" style="--d:120ms">
      <span class="qmark">“</span>
      <blockquote>${text}</blockquote>
      ${cite ? `<cite>${cite}</cite>` : ""}
    </div>`;
  }

  /* ---------- Flujo horizontal ---------- */
  function flow(steps) {
    return `<div class="flow fr" style="--d:140ms">${steps
      .map((s, i) => `
        <div class="fstep" ${s.tip ? `data-tip="${s.tip}"` : ""}>
          <div class="fi">${ic(s.icon || "cube")}</div>
          <h5>${s.t}</h5><p>${s.d || ""}</p>
        </div>${i < steps.length - 1 ? '<div class="farr">→</div>' : ""}`)
      .join("")}</div>`;
  }

  /* ---------- Timeline ---------- */
  function timeline(items) {
    return `<div class="tline fr" style="--d:140ms"><div class="titems">${items
      .map((t) => `<div class="ti" ${t.tip ? `data-tip="${t.tip}"` : ""}>
        <span class="ty">${t.y}</span><span class="dot"></span><h5>${t.t}</h5><p>${t.d || ""}</p></div>`)
      .join("")}</div></div>`;
  }

  /* ---------- Escalera (opts.pick = autoevaluación clickeable) ---------- */
  function ladder(steps, opts = {}) {
    const n = steps.length;
    return `<div class="ladder ${opts.pick ? "pick" : ""}">${steps
      .map((s, i) => {
        const h = 42 + ((100 - 42) * i) / (n - 1);
        return `<div class="rung fr" data-lv="${i}" ${opts.pick ? 'role="button" tabindex="0"' : ""} style="height:${h}%;--d:${120 + i * 110}ms" ${s.tip ? `data-tip="${s.tip}"` : ""}>
          <span class="lv">NIVEL ${i}</span><h5>${s.t}</h5><p>${s.d}</p></div>`;
      })
      .join("")}</div>`;
  }

  /* ---------- Tabla ---------- */
  function table(headers, rows) {
    return `<div class="fr" style="--d:160ms"><table class="dtable">
      <thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>`;
  }

  /* ---------- Dashboard mockup ---------- */
  function dash(title, widgets, opts = {}) {
    const cols = opts.cols || 3;
    return `<div class="dash fr" style="--d:180ms">
      <div class="dbar"><span class="dots"><i></i><i></i><i></i></span><h5>${title}</h5></div>
      <div class="dgrid" style="grid-template-columns:repeat(${cols},1fr)">
        ${widgets.map((w) => {
          if (w.html) return `<div class="w ${w.wide ? "wide" : ""}">${w.tl ? `<div class="wt">${w.tl}</div>` : ""}${w.html}</div>`;
          return `<div class="w ${w.wide ? "wide" : ""}">
            <div class="wt">${w.tl}</div><div class="wv ${w.mood || ""}">${w.v}</div>
            ${w.d ? `<div class="wd">${w.d}</div>` : ""}</div>`;
        }).join("")}
      </div></div>`;
  }

  /* ---------- Checkpoint: tarjetas-pregunta con reverso (flip 3D) ---------- */
  function quiz(items) {
    return `<div class="grid g3 qgrid">${items.map((it, i) => fr(`
      <div class="qcard" data-flip role="button" tabindex="0" aria-label="Pregunta ${i + 1}: clic para revelar la respuesta">
        <div class="qinner">
          <div class="qface front">
            <span class="tag">Pregunta ${i + 1}</span>
            <h4 class="qq">${it.q}</h4>
            <div class="qopts">${it.opts.map((o, j) => `<div class="qopt"><b>${"ABC"[j]}</b><span>${o}</span></div>`).join("")}</div>
            <span class="qhint">Clic para revelar →</span>
          </div>
          <div class="qface back">
            <span class="tag t-green">Respuesta · ${"ABC"[it.ok]}</span>
            <p class="qq">${it.q}</p>
            <div class="qopts">${it.opts.map((o, j) => `<div class="qopt ${j === it.ok ? "ok" : "off"}">${j === it.ok ? "✓" : "✕"}<span>${o}</span></div>`).join("")}</div>
            <p class="qwhy">${it.why}</p>
          </div>
        </div>
      </div>`, i)).join("")}</div>`;
  }

  /* ---------- Dato activador (slide-gancho con cifra grande) ---------- */
  function activator(o) {
    return `<div class="s-body" style="justify-content:center">
      <div class="act">
        <div class="act-k fr" style="--d:40ms">Dato activador</div>
        <div class="act-v fr" style="--d:140ms">${o.v}</div>
        <p class="act-l fr" style="--d:280ms">${o.line}</p>
        <p class="act-q fr" style="--d:420ms">${o.q}</p>
        ${o.src ? `<span class="src fr" style="--d:520ms">Fuente: ${o.src}</span>` : ""}
      </div>
    </div>`;
  }

  /* ---------- Dos columnas ---------- */
  const cols2 = (a, b, ratio = "c-55") => `<div class="cols ${ratio}"><div>${a}</div><div>${b}</div></div>`;

  /* ---------- Pills ---------- */
  const pills = (arr, cls) =>
    `<div class="pillrow">${arr.map((p, i) => `<span class="tag ${cls || ""} fr" style="--d:${100 + i * 60}ms">${p}</span>`).join("")}</div>`;

  /* ---------- Edificio isométrico (arte de portada) ---------- */
  function isoBuilding(w = 460, h = 560) {
    // Torre wireframe isométrica generada por niveles
    const cx = w / 2, dx = 64, dy = 32, fl = 40, n = 10;
    let out = "";
    const px = (x, y, z) => [cx + (x - y) * dx, h - 60 - (x + y) * dy - z];
    for (let k = 0; k <= n; k++) {
      const z = k * fl;
      const A = px(0, 0, z), B = px(1.6, 0, z), C = px(1.6, 1.6, z), D = px(0, 1.6, z);
      const pts = `${A} ${B} ${C} ${D}`;
      out += `<polygon points="${pts}" class="${k === n ? "iso-f" : ""} iso-l"/>`;
      if (k < n)
        [A, B, C, D].forEach((p) => {
          out += `<line x1="${p[0]}" y1="${p[1]}" x2="${p[0]}" y2="${p[1] - fl}" class="iso-l"/>`;
        });
      // nodos de datos en esquinas alternas
      if (k % 2 === 0) out += `<circle cx="${B[0]}" cy="${B[1]}" r="3" class="iso-g"/>`;
      if (k % 3 === 0) out += `<circle cx="${D[0]}" cy="${D[1]}" r="3" class="iso-g"/>`;
    }
    // grúa de datos: línea al "dashboard"
    const top = px(1.6, 0, n * fl);
    out += `<line x1="${top[0]}" y1="${top[1]}" x2="${top[0] + 70}" y2="${top[1] - 46}" class="iso-l" stroke-dasharray="4 5"/>`;
    out += `<rect x="${top[0] + 58}" y="${top[1] - 86}" width="86" height="50" rx="7" class="iso-l" fill="rgba(154,99,18,.06)"/>`;
    out += `<line x1="${top[0] + 68}" y1="${top[1] - 52}" x2="${top[0] + 84}" y2="${top[1] - 62}" class="iso-l" stroke="rgba(154,99,18,.75)"/>`;
    out += `<line x1="${top[0] + 88}" y1="${top[1] - 58}" x2="${top[0] + 104}" y2="${top[1] - 72}" class="iso-l" stroke="rgba(154,99,18,.75)"/>`;
    out += `<line x1="${top[0] + 108}" y1="${top[1] - 66}" x2="${top[0] + 130}" y2="${top[1] - 56}" class="iso-l" stroke="rgba(154,99,18,.75)"/>`;
    return `<div class="isoart"><svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${out}</svg></div>`;
  }

  g.C = { ic, head, foot, fr, cards, xcards, stats, klist, quote, flow, timeline, ladder, table, dash, cols2, pills, isoBuilding, quiz, activator };
})(typeof window !== "undefined" ? window : globalThis);
