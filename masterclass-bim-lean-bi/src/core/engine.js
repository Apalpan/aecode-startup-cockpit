/* ============================================================
   DECK — motor de presentación AECODE
   Registro de slides, navegación por teclado/touch/hash,
   escalado del stage, overview, menú, notas, ayuda e impresión.
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

  const DECK = {
    slides: [],
    cur: 0,
    add(def) { this.slides.push(def); },
  };

  /* ============ Montaje ============ */
  function mount() {
    const stage = document.getElementById("stage");

    DECK.slides.forEach((s, i) => {
      const sec = document.createElement("section");
      sec.className = "slide " + (s.cls || "");
      sec.dataset.idx = i;
      sec.innerHTML = typeof s.html === "function" ? s.html() : s.html;
      stage.appendChild(sec);
      s.el = sec;
    });

    buildMenu();
    buildGrid();
    bind();
    fit();

    const fromHash = parseInt((location.hash || "").replace(/\D/g, ""), 10);
    show(isFinite(fromHash) && fromHash >= 1 && fromHash <= DECK.slides.length ? fromHash - 1 : 0, true);
  }

  /* ============ Navegación ============ */
  function show(i, instant) {
    i = Math.max(0, Math.min(DECK.slides.length - 1, i));
    const prev = DECK.slides[DECK.cur];
    if (prev && prev.el) prev.el.classList.remove("on", "anim");
    DECK.cur = i;
    const s = DECK.slides[i];
    s.el.classList.add("on");
    void s.el.offsetWidth; // reinicia animaciones CSS
    s.el.classList.add("anim");

    if (!s._init && typeof s.init === "function") { s.init(s.el); s._init = true; }
    if (typeof s.onShow === "function") s.onShow(s.el);

    history.replaceState(null, "", "#/" + (i + 1));
    document.getElementById("progress").style.width = ((i + 1) / DECK.slides.length) * 100 + "%";
    document.querySelector("#hud .count").innerHTML = `<b>${String(i + 1).padStart(2, "0")}</b> / ${DECK.slides.length}`;
    document.querySelector("#hud .blockname").textContent = BLOCKS[s.block] || "";

    document.querySelectorAll("#menu .mitem").forEach((m) => m.classList.toggle("now", +m.dataset.go === i));
    const notes = document.getElementById("notes");
    if (notes.classList.contains("open")) renderNotes();
  }

  const next = () => show(DECK.cur + 1);
  const prevS = () => show(DECK.cur - 1);

  /* ============ Escalado del stage ============ */
  function fit() {
    const W = 1280, H = 720;
    const k = Math.min(innerWidth / W, innerHeight / H) * 0.985;
    document.getElementById("stage").style.transform = `scale(${k})`;
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

  /* ============ Eventos ============ */
  function bind() {
    addEventListener("resize", fit);

    addEventListener("keydown", (e) => {
      if (e.target.matches("input,textarea")) return;
      const k = e.key;
      if (k === "ArrowRight" || k === " " || k === "PageDown") { e.preventDefault(); next(); }
      else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); prevS(); }
      else if (k === "ArrowDown") { e.preventDefault(); next(); }
      else if (k === "ArrowUp") { e.preventDefault(); prevS(); }
      else if (k === "Home") show(0);
      else if (k === "End") show(DECK.slides.length - 1);
      else if (k === "m" || k === "M") toggleMenu();
      else if (k === "n" || k === "N" || k === "s" || k === "S") toggleNotes();
      else if (k === "o" || k === "O") toggleOverview();
      else if (k === "e" || k === "E" || k === "p" || k === "P") window.print();
      else if (k === "?" || k === "h" || k === "H") document.getElementById("help").classList.toggle("open");
      else if (k === "Escape") {
        if (document.getElementById("help").classList.contains("open")) document.getElementById("help").classList.remove("open");
        else if (document.getElementById("menu").classList.contains("open")) toggleMenu(false);
        else toggleOverview();
      }
    });

    // Touch: swipe horizontal
    let tx = null, ty = null;
    addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
    addEventListener("touchend", (e) => {
      if (tx == null) return;
      const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) (dx < 0 ? next() : prevS());
      tx = ty = null;
    }, { passive: true });

    // Botones HUD
    document.getElementById("b-menu").onclick = () => toggleMenu();
    document.getElementById("b-notes").onclick = () => toggleNotes();
    document.getElementById("b-grid").onclick = () => toggleOverview();
    document.getElementById("b-help").onclick = () => document.getElementById("help").classList.toggle("open");
    document.getElementById("b-pdf").onclick = () => window.print();
    document.getElementById("help").addEventListener("click", (e) => {
      if (e.target.id === "help") e.target.classList.remove("open");
    });

    // Delegación: tarjetas expandibles
    document.getElementById("stage").addEventListener("click", (e) => {
      const x = e.target.closest("[data-x]");
      if (x) x.classList.toggle("openx");
    });

    // Antes de imprimir: asegurar fuentes/animaciones resueltas
    addEventListener("beforeprint", () => document.querySelectorAll(".slide").forEach((s) => s.classList.add("anim")));
  }

  g.DECK = DECK;
  g.DECK.mount = mount;
  g.DECK.show = show;
  document.addEventListener("DOMContentLoaded", mount);
})(window);
