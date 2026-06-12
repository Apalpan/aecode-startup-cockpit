#!/usr/bin/env node
/* Smoke test headless: carga el deck, recorre las 80 slides,
   verifica cero errores de consola y toma capturas de muestra. */
"use strict";
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  const errors = [];
  // Ignora fallos de red de terceros (p. ej. Google Fonts bloqueado en sandbox/offline)
  const ignorable = /ERR_CERT|ERR_INTERNET|ERR_NAME|Failed to load resource/;
  page.on("console", (m) => { if (m.type() === "error" && !ignorable.test(m.text())) errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(String(e)));

  await page.goto("http://127.0.0.1:8742/index.html", { waitUntil: "networkidle" });
  const n = await page.evaluate(() => DECK.slides.length);
  console.log("Slides registradas:", n);

  const shots = new Set([0, 3, 8, 10, 14, 23, 27, 35, 45, 48, 58, 59]);
  for (let i = 0; i < n; i++) {
    await page.evaluate((j) => DECK.show(j), i);
    await page.waitForTimeout(60);
    if (shots.has(i)) {
      await page.waitForTimeout(700);
      await page.screenshot({ path: `/tmp/shots/slide-${String(i + 1).padStart(2, "0")}.png` });
    }
  }
  // Interacciones: menú, overview, notas, pin del mapa, comparador
  await page.keyboard.press("m"); await page.waitForTimeout(200);
  await page.keyboard.press("m");
  await page.keyboard.press("o"); await page.waitForTimeout(300);
  await page.screenshot({ path: "/tmp/shots/overview.png" });
  await page.keyboard.press("Escape");
  await page.evaluate(() => DECK.show(8));
  await page.waitForTimeout(300);
  await page.click(".pin[data-pin='4']"); await page.waitForTimeout(200);
  const pinText = await page.textContent("#pininfo h4");
  console.log("Pin interactivo:", pinText);
  await page.evaluate(() => DECK.show(58));
  await page.keyboard.press("n"); await page.waitForTimeout(200);
  await page.screenshot({ path: "/tmp/shots/notes.png" });

  console.log(errors.length ? "✗ Errores de consola:\n" + errors.join("\n") : "✓ Cero errores de consola.");
  await browser.close();
  process.exit(errors.length ? 1 : 0);
})();
