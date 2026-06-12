/* ============================================================
   DECK — motor de presentación AECODE · v2
   Registro de slides, navegación teclado/touch/hash, escalado,
   overview, menú, notas, ayuda, impresión + nuevas capacidades:
   · Paleta de comandos (Ctrl+K): buscar slides y acciones
   · Progreso segmentado por bloques, clickeable
   · Contadores animados [data-count] al entrar a cada slide
   · Cronómetro de sesión (T), pantalla completa (F)
   · Saltos por bloque (teclas 1–8), flechas en pantalla
   · Respeto de prefers-reduced-motion
   ============================================================ */
(function (g) {
  "use strict";

  const BLOCKS = [
    "", // index 0 sin uso
    "B1 · Apertura e impacto",
    "B2 · El mapa del diplomado",
    "B3 · BIM · Lean · VDC · IPD",
    "B4 · Obra, OT y CDE",
    "B5 · Herramientas BIM",
    "B6 · BI y dashboards",
    "B7 · IA y tecnologías",
    "B8 · Cierre y acción",
  ];

  const REDUCED = typeof matchMedia === "function" &&
    matchMedia("(prefers-reduced-motion: reduce)").matches;

  const DECK = {
    slides: [],
    cur: 0,
    add(def) { this.slides.push(def); },
  };

  /* ============ Montaje ============ */
  function mount() {
    const stage = document.getElementById("stage");

    const total = DECK.slides.length;
    DECK.slides.forEach((s, i) => {
      const sec = document.createElement("section");
      sec.className = "slide " + (s.cls || "");
      sec.dataset.idx = i;
      sec.innerHTML = typeof s.html === "function" ? s.html() : s.html;
      // Número de slide visible al pie de cada lámina (pantalla y PDF)
      const num = document.createElement("div");
      num.className = "snum";
      num.textContent = String(i + 1).padStart(2, "0") + " / " + total;
      sec.appendChild(num);
      stage.appendChild(sec);
      s.el = sec;
    });

    buildMenu();
    buildGrid();
    buildProgress();
    buildPalette();
    bind();
    fit();

    const fromHash = parseInt((location.hash || "").replace(/\D/g, ""), 10);
    show(isFinite(fromHash) && fromHash >= 1 && fromHash <= DECK.slides.length ? fromHash - 1 : 0, true);
  }

  /* ============ Navegación ============ */
  function show(i, instant) {
    i = Math.max(0, Math.min(DECK.slides.length - 1, i));
    const dir = i >= DECK.cur ? 1 : -1;
    const prev = DECK.slides[DECK.cur];
    if (prev && prev.el) prev.el.classList.remove("on", "anim");
    DECK.cur = i;
    const s = DECK.slides[i];
    s.el.style.setProperty("--dirx", (instant ? 0 : dir * 16) + "px");
    s.el.classList.add("on");
    void s.el.offsetWidth; // reinicia animaciones CSS
    s.el.classList.add("anim");

    if (!s._init && typeof s.init === "function") { s.init(s.el); s._init = true; }
    if (typeof s.onShow === "function") s.onShow(s.el);
    runCounters(s.el);

    history.replaceState(null, "", "#/" + (i + 1));
    updateProgress();
    document.querySelector("#hud .count").innerHTML = `<b>${String(i + 1).padStart(2, "0")}</b> / ${DECK.slides.length}`;
    document.querySelector("#hud .blockname").textContent = BLOCKS[s.block] || "";

    document.querySelectorAll("#menu .mitem").forEach((m) => m.classList.toggle("now", +m.dataset.go === i));
    const notes = document.getElementById("notes");
    if (notes.classList.contains("open")) renderNotes();
    startTimer(); // arranca con la primera interacción de navegación
  }

  const next = () => show(DECK.cur + 1);
  const prevS = () => show(DECK.cur - 1);

  /* ============ Contadores animados ============ */
  function fmtNum(n, dec) {
    return n.toLocaleString("es-PE", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }
  function runCounters(root) {
    root.querySelectorAll("[data-count]").forEach((el) => {
      if (el._counted) return;
      el._counted = true;
      const target = parseFloat(el.dataset.count);
      const dec = +(el.dataset.dec || 0);
      const pre = el.dataset.pre || "", suf = el.dataset.suf || "";
      if (!isFinite(target)) return;
      if (REDUCED) { el.textContent = pre + fmtNum(target, dec) + suf; return; }
      const t0 = performance.now(), dur = 950;
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / dur);
        const e = 1 - Math.pow(1 - k, 3); // easeOutCubic
        el.textContent = pre + fmtNum(target * e, dec) + suf;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  /* ============ Escalado del stage ============ */
  function fit() {
    const W = 1280, H = 720;
    const k = Math.min(innerWidth / W, innerHeight / H) * 0.985;
    document.getElementById("stage").style.transform = `scale(${k})`;
  }

  /* ============ Progreso segmentado por bloques ============ */
  let SEGS = []; // [{block, from, to, el, fill}]
  function buildProgress() {
    const bar = document.getElementById("progress");
    const ranges = [];
    DECK.slides.forEach((s, i) => {
      const last = ranges[ranges.length - 1];
      if (!last || last.block !== s.block) ranges.push({ block: s.block, from: i, to: i });
      else last.to = i;
    });
    bar.innerHTML = "";
    SEGS = ranges.map((r) => {
      const n = r.to - r.from + 1;
      const seg = document.createElement("button");
      seg.className = "seg";
      seg.style.flex = String(n);
      seg.title = `${BLOCKS[r.block]} · slides ${r.from + 1}–${r.to + 1}`;
      seg.setAttribute("aria-label", seg.title);
      const fill = document.createElement("i");
      seg.appendChild(fill);
      seg.addEventListener("click", () => show(r.from));
      bar.appendChild(seg);
      return { ...r, el: seg, fill };
    });
  }
  function updateProgress() {
    SEGS.forEach((sg) => {
      const n = sg.to - sg.from + 1;
      let pct = 0;
      if (DECK.cur > sg.to) pct = 100;
      else if (DECK.cur >= sg.from) pct = ((DECK.cur - sg.from + 1) / n) * 100;
      sg.fill.style.width = pct + "%";
    });
  }

  /* ============ Menú lateral ============ */
  function buildMenu() {
    const list = document.querySelector("#menu .mlist");
    let html = "", lastBlock = 0;
    DECK.slides.forEach((s, i) => {
      if (s.block !== lastBlock) { html += `<div class="mblock">${BLOCKS[s.block]}</div>`; lastBlock = s.block; }
      html += `<button class="mitem" data-go="${i}"><span class="n">${String(i + 1).padStart(2, "0")}</span><span>${s.title}</span></button>`;
    });
    list.innerHTML = html;
    list.addEventListener("click", (e) => {
      const b = e.target.closest(".mitem");
      if (b) { show(+b.dataset.go); toggleMenu(false); }
    });
  }
  const toggleMenu = (force) => document.getElementById("menu").classList.toggle("open", force);

  /* ============ Overview ============ */
  function buildGrid() {
    const grid = document.getElementById("grid");
    grid.innerHTML = DECK.slides.map((s, i) => `
      <div class="thumb" data-go="${i}">
        <span class="tn">${String(i + 1).padStart(2, "0")}</span>
        <span class="tb">${(BLOCKS[s.block] || "").split("·")[0]}</span>
        <span class="tt">${s.title}</span>
      </div>`).join("");
    grid.addEventListener("click", (e) => {
      const t = e.target.closest(".thumb");
      if (t) { show(+t.dataset.go); toggleOverview(false); }
    });
  }
  function toggleOverview(force) {
    const on = document.body.classList.toggle("overview", force);
    if (on) {
      document.querySelectorAll("#grid .thumb").forEach((t) => t.classList.toggle("now", +t.dataset.go === DECK.cur));
      const now = document.querySelector("#grid .thumb.now");
      if (now) now.scrollIntoView({ block: "center" });
    }
  }

  /* ============ Notas ============ */
  function renderNotes() {
    const s = DECK.slides[DECK.cur];
    document.querySelector("#notes h4").textContent =
      `Notas del expositor — slide ${String(DECK.cur + 1).padStart(2, "0")} · ${s.title}`;
    document.querySelector("#notes .ntext").innerHTML = (s.notes || "<i>Sin notas.</i>")
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  }
  function toggleNotes() {
    const n = document.getElementById("notes");
    n.classList.toggle("open");
    if (n.classList.contains("open")) renderNotes();
  }

  /* ============ Cronómetro de sesión ============ */
  let T0 = null, TINT = null;
  function startTimer() {
    if (T0 !== null) return;
    T0 = Date.now();
    TINT = setInterval(renderTimer, 1000);
    renderTimer();
  }
  function renderTimer() {
    const el = document.getElementById("timer");
    if (!el || T0 === null) return;
    const s = Math.floor((Date.now() - T0) / 1000);
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = s % 60;
    el.textContent = (h ? h + ":" : "") + String(m).padStart(2, "0") + ":" + String(ss).padStart(2, "0");
  }
  function toggleTimer() {
    const el = document.getElementById("timer");
    el.hidden = !el.hidden;
    if (!el.hidden) startTimer();
  }
  function resetTimer() { T0 = Date.now(); renderTimer(); }

  /* ============ Pantalla completa ============ */
  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen().catch(() => {});
  }

  /* ============ Paleta de comandos (Ctrl+K) ============ */
  const PAL = { open: false, items: [], filtered: [], sel: 0 };
  const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  function buildPalette() {
    PAL.items = DECK.slides.map((s, i) => ({
      kind: "slide",
      n: String(i + 1).padStart(2, "0"),
      label: s.title,
      block: (BLOCKS[s.block] || "").split("·")[0].trim(),
      run: () => show(i),
    }));
    const acts = [
      ["Vista general (overview)", "O", () => toggleOverview(true)],
      ["Índice de la sesión", "M", () => toggleMenu(true)],
      ["Notas del expositor", "N", toggleNotes],
      ["Exportar a PDF", "E", () => window.print()],
      ["Cronómetro: mostrar / ocultar", "T", toggleTimer],
      ["Cronómetro: reiniciar", "", resetTimer],
      ["Pantalla completa", "F", toggleFullscreen],
      ["Ir al inicio", "Inicio", () => show(0)],
      ["Ir al final", "Fin", () => show(DECK.slides.length - 1)],
      ["Ayuda y atajos", "?", () => document.getElementById("help").classList.add("open")],
    ];
    acts.forEach(([label, key, run]) => PAL.items.push({ kind: "action", n: "▸", label, block: key, run }));
  }

  function palFilter(q) {
    const tokens = norm(q).split(/\s+/).filter(Boolean);
    PAL.filtered = !tokens.length
      ? PAL.items.slice(0, 14)
      : PAL.items
          .filter((it) => {
            const hay = norm(it.n + " " + it.label + " " + it.block);
            return tokens.every((t) => hay.includes(t));
          })
          .slice(0, 14);
    PAL.sel = 0;
    palRender();
  }
  function palRender() {
    const list = document.querySelector("#palette .pal-list");
    if (!PAL.filtered.length) {
      list.innerHTML = `<div class="pal-empty">Sin resultados — prueba con el número o una palabra del título.</div>`;
      return;
    }
    list.innerHTML = PAL.filtered.map((it, i) => `
      <button class="pal-item ${i === PAL.sel ? "sel" : ""}" data-pi="${i}">
        <span class="pn">${it.n}</span><span>${it.label}</span><span class="pb">${it.block}</span>
      </button>`).join("");
  }
  function palOpen() {
    PAL.open = true;
    const p = document.getElementById("palette");
    p.classList.add("open");
    const inp = p.querySelector("input");
    inp.value = "";
    palFilter("");
    inp.focus();
  }
  function palClose() {
    PAL.open = false;
    document.getElementById("palette").classList.remove("open");
  }
  function palExec() {
    const it = PAL.filtered[PAL.sel];
    if (!it) return;
    palClose();
    it.run();
  }
  function bindPalette() {
    const p = document.getElementById("palette");
    const inp = p.querySelector("input");
    inp.addEventListener("input", () => palFilter(inp.value));
    inp.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") { e.preventDefault(); PAL.sel = Math.min(PAL.filtered.length - 1, PAL.sel + 1); palRender(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); PAL.sel = Math.max(0, PAL.sel - 1); palRender(); }
      else if (e.key === "Enter") { e.preventDefault(); palExec(); }
      else if (e.key === "Escape") { e.preventDefault(); palClose(); }
      e.stopPropagation();
    });
    p.querySelector(".pal-list").addEventListener("click", (e) => {
      const b = e.target.closest(".pal-item");
      if (b) { PAL.sel = +b.dataset.pi; palExec(); }
    });
    p.querySelector(".pal-list").addEventListener("mousemove", (e) => {
      const b = e.target.closest(".pal-item");
      if (b && +b.dataset.pi !== PAL.sel) { PAL.sel = +b.dataset.pi; palRender(); }
    });
    p.addEventListener("click", (e) => { if (e.target === p) palClose(); });
  }

  /* ============ Eventos ============ */
  function bind() {
    addEventListener("resize", fit);
    bindPalette();

    addEventListener("keydown", (e) => {
      // Paleta: atajo global; el resto de teclas no aplica con paleta abierta
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        PAL.open ? palClose() : palOpen();
        return;
      }
      if (PAL.open) return;
      if (e.target.matches("input,textarea")) return;
      const k = e.key;
      // Enter/Espacio sobre un elemento interactivo del slide lo activa (no navega)
      const act = e.target.closest('[data-flip],[data-x],[role="button"]');
      if (act && (k === " " || k === "Enter")) {
        e.preventDefault();
        if (act.hasAttribute("data-flip")) act.classList.toggle("flip");
        else if (act.hasAttribute("data-x")) act.classList.toggle("openx");
        return; // los [role=button] manejan su propio keydown
      }
      if (k === "ArrowRight" || k === " " || k === "PageDown") { e.preventDefault(); next(); }
      else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); prevS(); }
      else if (k === "ArrowDown") { e.preventDefault(); next(); }
      else if (k === "ArrowUp") { e.preventDefault(); prevS(); }
      else if (k === "Home") show(0);
      else if (k === "End") show(DECK.slides.length - 1);
      else if (k >= "1" && k <= "8") { const sg = SEGS[+k - 1]; if (sg) show(sg.from); }
      else if (k === "k" || k === "K") palOpen();
      else if (k === "m" || k === "M") toggleMenu();
      else if (k === "n" || k === "N" || k === "s" || k === "S") toggleNotes();
      else if (k === "o" || k === "O") toggleOverview();
      else if (k === "t" || k === "T") toggleTimer();
      else if (k === "f" || k === "F") toggleFullscreen();
      else if (k === "e" || k === "E" || k === "p" || k === "P") window.print();
      else if (k === "?" || k === "h" || k === "H") document.getElementById("help").classList.toggle("open");
      else if (k === "Escape") {
        if (document.getElementById("help").classList.contains("open")) document.getElementById("help").classList.remove("open");
        else if (document.getElementById("menu").classList.contains("open")) toggleMenu(false);
        else toggleOverview();
      }
    });

    // Touch: swipe horizontal (ignorando sliders y controles interactivos)
    let tx = null, ty = null;
    addEventListener("touchstart", (e) => {
      if (e.target.closest("input,button,.ba,.calc")) { tx = ty = null; return; }
      tx = e.touches[0].clientX; ty = e.touches[0].clientY;
    }, { passive: true });
    addEventListener("touchend", (e) => {
      if (tx == null) return;
      const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) (dx < 0 ? next() : prevS());
      tx = ty = null;
    }, { passive: true });

    // Botones HUD
    document.getElementById("b-prev").onclick = prevS;
    document.getElementById("b-next").onclick = next;
    document.getElementById("b-menu").onclick = () => toggleMenu();
    document.getElementById("b-notes").onclick = () => toggleNotes();
    document.getElementById("b-grid").onclick = () => toggleOverview();
    document.getElementById("b-help").onclick = () => document.getElementById("help").classList.toggle("open");
    document.getElementById("b-pdf").onclick = () => window.print();
    document.getElementById("b-palette").onclick = palOpen;
    document.getElementById("timer").onclick = resetTimer;
    document.getElementById("timer").title = "Clic para reiniciar el cronómetro";
    document.getElementById("help").addEventListener("click", (e) => {
      if (e.target.id === "help") e.target.classList.remove("open");
    });

    // Delegación: tarjetas expandibles y tarjetas-pregunta (flip)
    document.getElementById("stage").addEventListener("click", (e) => {
      const x = e.target.closest("[data-x]");
      if (x) x.classList.toggle("openx");
      const f = e.target.closest("[data-flip]");
      if (f) f.classList.toggle("flip");
    });

    // Antes de imprimir: asegurar fuentes/animaciones resueltas
    addEventListener("beforeprint", () => document.querySelectorAll(".slide").forEach((s) => s.classList.add("anim")));
  }

  g.DECK = DECK;
  g.DECK.mount = mount;
  g.DECK.show = show;
  g.DECK.reduced = REDUCED;
  document.addEventListener("DOMContentLoaded", mount);
})(window);
