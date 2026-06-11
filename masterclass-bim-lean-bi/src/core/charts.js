/* ============================================================
   Charts: generadores de SVG/HTML puros (string) para barras,
   donut, curva S, gauge y mapa de puntos del mundo.
   ============================================================ */
(function (g) {
  "use strict";

  /* ---------- Barras horizontales animadas ---------- */
  function hbars(items, opts = {}) {
    const max = opts.max || Math.max(...items.map((i) => i.v));
    const rows = items.map((it, i) => `
      <div class="hb">
        <span class="hl">${it.l}</span>
        <span class="ht"><i class="${it.c || "b-gold"}" style="--w:${(it.v / max) * 100}%;--d:${0.25 + i * 0.12}s"></i></span>
        <span class="hv">${it.txt != null ? it.txt : it.v + (opts.unit || "")}</span>
      </div>`).join("");
    return `<div class="chart-wrap fr" style="--d:160ms">
      ${opts.title ? `<h4>${opts.title}</h4>` : ""}
      <div class="hbars">${rows}</div>
      ${opts.src ? `<div class="src" style="margin-top:12px">Fuente: ${opts.src}</div>` : ""}
    </div>`;
  }

  /* ---------- Donut ---------- */
  function donut(pct, label, color = "var(--gold)", size = 150) {
    const r = 56, c = 2 * Math.PI * r;
    return `<svg width="${size}" height="${size}" viewBox="0 0 140 140" style="display:block;margin:0 auto">
      <circle cx="70" cy="70" r="${r}" fill="none" stroke="var(--track)" stroke-width="13"/>
      <circle cx="70" cy="70" r="${r}" fill="none" stroke="${color}" stroke-width="13" stroke-linecap="round"
        stroke-dasharray="${(pct / 100) * c} ${c}" transform="rotate(-90 70 70)"/>
      <text x="70" y="66" text-anchor="middle" fill="var(--ink)" font-family="var(--f-disp)" font-size="26" font-weight="700">${pct}%</text>
      <text x="70" y="86" text-anchor="middle" fill="var(--mut)" font-family="var(--f-sans)" font-size="9.5">${label || ""}</text>
    </svg>`;
  }

  /* ---------- Curva S (planificado vs real) ---------- */
  function sCurve(opts = {}) {
    const W = opts.w || 460, H = opts.h || 210, P = 30;
    const plan = opts.plan || [0, 4, 10, 19, 31, 46, 62, 76, 87, 94, 98, 100];
    const real = opts.real || [0, 3, 7, 13, 22, 33, 45, 56];
    const X = (i, arr) => P + (i / (plan.length - 1)) * (W - P * 2);
    const Y = (v) => H - P - (v / 100) * (H - P * 2);
    const path = (arr) => arr.map((v, i) => `${i ? "L" : "M"}${X(i)},${Y(v)}`).join(" ");
    const grid = [0, 25, 50, 75, 100].map((v) =>
      `<line x1="${P}" y1="${Y(v)}" x2="${W - P}" y2="${Y(v)}" stroke="var(--line-soft)"/>
       <text x="${P - 7}" y="${Y(v) + 3}" text-anchor="end" fill="var(--faint)" font-size="8.5" font-family="var(--f-mono)">${v}</text>`).join("");
    const gap = real.length - 1;
    return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;display:block">
      ${grid}
      <path d="${path(plan)}" fill="none" stroke="var(--violet)" stroke-width="2.2" stroke-dasharray="6 5" opacity=".85"/>
      <path d="${path(real)}" fill="none" stroke="var(--gold)" stroke-width="2.6"/>
      <circle cx="${X(gap)}" cy="${Y(real[gap])}" r="4.5" fill="var(--gold)"/>
      <line x1="${X(gap)}" y1="${Y(real[gap])}" x2="${X(gap)}" y2="${Y(plan[gap])}" stroke="var(--risk)" stroke-width="1.6" stroke-dasharray="3 3"/>
      <text x="${X(gap) + 8}" y="${(Y(real[gap]) + Y(plan[gap])) / 2}" fill="var(--risk)" font-size="9.5" font-family="var(--f-mono)">desviación</text>
    </svg>
    <div class="legend" style="margin-top:8px;justify-content:center">
      <span><i style="background:var(--violet)"></i>Planificado</span>
      <span><i style="background:var(--gold)"></i>Real</span>
    </div>`;
  }

  /* ---------- Gauge semicircular (PPC, etc.) ---------- */
  function gauge(pct, label, color = "var(--green)") {
    const r = 58, c = Math.PI * r;
    return `<svg viewBox="0 0 150 92" style="width:170px;display:block;margin:0 auto">
      <path d="M17 84 A 58 58 0 0 1 133 84" fill="none" stroke="var(--track)" stroke-width="12" stroke-linecap="round"/>
      <path d="M17 84 A 58 58 0 0 1 133 84" fill="none" stroke="${color}" stroke-width="12" stroke-linecap="round"
        stroke-dasharray="${(pct / 100) * c} ${c}"/>
      <text x="75" y="68" text-anchor="middle" fill="var(--ink)" font-family="var(--f-disp)" font-size="25" font-weight="700">${pct}%</text>
      <text x="75" y="86" text-anchor="middle" fill="var(--mut)" font-size="9">${label || ""}</text>
    </svg>`;
  }

  /* ---------- Mini sparkline de barras (para dashboards mock) ---------- */
  function spark(values, color = "var(--cyan)", w = 150, h = 42) {
    const max = Math.max(...values);
    const bw = w / values.length - 3;
    return `<svg viewBox="0 0 ${w} ${h}" style="width:100%;display:block">${values
      .map((v, i) => `<rect x="${i * (bw + 3)}" y="${h - (v / max) * h}" width="${bw}" height="${(v / max) * h}" rx="2" fill="${color}" opacity="${0.45 + (0.55 * v) / max}"/>`)
      .join("")}</svg>`;
  }

  /* ---------- Mapa mundial de puntos ---------- */
  // Retícula 64×30 aproximada (proyección equirectangular). '#' = tierra.
  const WORLD = [
    "................................................................",
    "....######..............####....######.#########...............",
    "..#########...........#######..####################.####.......",
    "..###########.........#####...######################.#######...",
    "...####################.......#######################..####....",
    "....###################.......########################.........",
    "....##################.........######################..........",
    ".....###############...........#####################...........",
    "......#############...........####################..#..........",
    ".......###########...........########.###########..............",
    "........#########............#######...#########...#...........",
    ".........###.#####...........#######....#######...##...........",
    "..........#....###...........########....#####...###...........",
    "................####.........#########.....##....####..........",
    ".................#####.......#########.....#....#####..........",
    ".................#######......########..........##.##..........",
    "..................########.....#######..........#..............",
    "..................#########.....#####.......#..........#.......",
    "...................########......###.......###....######.......",
    "...................#######.......###.......#.....########......",
    "....................######........#.............##########.....",
    "....................#####..........................########....",
    "....................####............................######.....",
    "....................###..............................##........",
    "....................###.........................................",
    ".....................##..............................#..........",
    ".....................#...............................###........",
    "....................##..........................................",
    "................................................................",
    "................................................................",
  ];

  function dotmap(pins, opts = {}) {
    const sp = 9, r = 2.6;
    const W = 64 * sp, H = 30 * sp;
    let dots = "";
    WORLD.forEach((row, y) => {
      for (let x = 0; x < row.length; x++)
        if (row[x] === "#") dots += `<circle cx="${x * sp + sp / 2}" cy="${y * sp + sp / 2}" r="${r}" class="land"/>`;
    });
    const pinEls = pins.map((p, i) => `
      <g class="pin ${i === 0 ? "sel" : ""}" data-pin="${i}" transform="translate(${p.x * sp},${p.y * sp})">
        <circle class="halo" r="10"/>
        <circle class="core" r="5"/>
        <text y="-11">${p.label}</text>
      </g>`).join("");
    return `<div class="dotmap fr" style="--d:160ms"><svg viewBox="0 0 ${W} ${H}">${dots}${pinEls}</svg></div>`;
  }

  g.CH = { hbars, donut, sCurve, gauge, spark, dotmap };
})(typeof window !== "undefined" ? window : globalThis);
