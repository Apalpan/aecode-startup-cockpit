# -*- coding: utf-8 -*-
# Generador del AECODE Startup Metrics OS (single-file HTML)
P=[]
def add(s): P.append(s)

# ===================== HEAD + STYLE =====================
add(r'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>AECODE · Startup Metrics OS</title>
<meta name="description" content="Sistema operativo de métricas de AECODE: modelo híbrido Live + Microlearning Platform OS, mapa de interrelación de métricas, finanzas, growth, fundraising y North Star. El Skill Operating System vertical para AEC."/>
<meta property="og:title" content="AECODE · Startup Metrics OS"/>
<meta property="og:description" content="El Skill Operating System para la fuerza laboral AEC en español. Métricas, modelo híbrido y proyecciones en vivo."/>
<meta property="og:image" content="aecodito.png"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#0E1121;--bg2:#0D0F1F;--nav:#0C0F29;--card:#222341;--border:#3A4065;
  --txt:#EEF3F8;--muted:#A2B4CB;--dim:#7d86a8;--lavender:#C5CFFA;
  --indigo:#4A3AC1;--violet:#7C7EDF;--violet2:#8F60EA;
  --blue:#4465EE;--green:#47CF78;--mint:#95E3B1;--amber:#F0A030;
  --good:#47CF78;--watch:#F0A030;--risk:#F2617A;
  --live:#4465EE;--micro:#7C7EDF;
  --sp:clamp(50px,6vw,80px);
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;font-size:14px;line-height:1.6;color:var(--txt);background:var(--bg);-webkit-font-smoothing:antialiased;overflow-x:hidden}
#bg-canvas{position:fixed;inset:0;z-index:0;pointer-events:none}
.grain{position:fixed;inset:0;z-index:2;pointer-events:none;opacity:.02;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:128px 128px}
body::before{content:'';position:fixed;inset:0;z-index:0;pointer-events:none;background:radial-gradient(ellipse 900px 520px at 90% -8%,rgba(74,58,193,.22) 0%,transparent 60%),radial-gradient(ellipse 620px 380px at 2% 4%,rgba(124,126,223,.08) 0%,transparent 55%)}
#scroll-bar{position:fixed;top:0;left:0;height:2px;z-index:300;width:0;background:linear-gradient(90deg,#4A3AC1,#7C7EDF,#47CF78);transition:width .08s linear}
@keyframes gradShift{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.35}}
@keyframes nsmGlow{0%,100%{box-shadow:0 0 0 0 rgba(143,96,234,.0),0 8px 30px -8px rgba(143,96,234,.5)}50%{box-shadow:0 0 26px 2px rgba(143,96,234,.45),0 8px 30px -8px rgba(143,96,234,.6)}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
.grad{background:linear-gradient(90deg,#4A3AC1,#7C7EDF,#8F60EA,#7C7EDF,#4A3AC1);background-size:250% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gradShift 5s ease infinite}
.wrap{max-width:1320px;margin:0 auto;padding:0 22px}
.section{padding:var(--sp) 0;position:relative;z-index:5;scroll-margin-top:116px}
.eyebrow{display:inline-flex;align-items:center;gap:9px;font-family:'Space Grotesk',sans-serif;font-size:10.5px;font-weight:700;letter-spacing:.26em;text-transform:uppercase;color:var(--violet);margin-bottom:14px}
.eyebrow::before{content:'';width:20px;height:2px;border-radius:2px;background:linear-gradient(90deg,var(--indigo),var(--violet))}
.section-h{font-family:'Space Grotesk',sans-serif;font-size:clamp(23px,3.2vw,36px);font-weight:700;line-height:1.12;letter-spacing:-.02em;margin-bottom:11px}
.section-p{font-size:clamp(13px,1.5vw,15.5px);color:var(--muted);line-height:1.64;max-width:760px}
.card{background:rgba(34,35,65,.58);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid var(--border);border-radius:17px;position:relative;overflow:hidden;padding:20px}
.card::before{content:'';position:absolute;inset:0 0 auto 0;height:1px;background:linear-gradient(90deg,transparent,rgba(124,126,223,.24),transparent)}
.card-eyebrow{display:flex;align-items:center;gap:8px;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:9.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--muted);margin-bottom:14px;flex-wrap:wrap}
.card-eyebrow .tick{width:15px;height:2px;border-radius:2px;background:linear-gradient(90deg,#4A3AC1,#7C7EDF)}
.mono{font-family:'JetBrains Mono',monospace}
.src{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--dim);border:1px solid var(--border);border-radius:5px;padding:1px 6px;white-space:nowrap}
''')

add(r'''/* BAR */
#bar{position:fixed;top:0;left:0;right:0;z-index:100;transition:background .35s,box-shadow .35s,border-color .35s;border-bottom:1px solid transparent}
#bar.scrolled{background:rgba(12,15,41,.93);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border-bottom:1px solid var(--border);box-shadow:0 4px 40px rgba(0,0,0,.35)}
.bar-in{display:flex;align-items:center;gap:11px;max-width:1320px;margin:0 auto;padding:10px 22px}
.bar-logo{display:flex;align-items:center;gap:9px;text-decoration:none;flex:0 0 auto}
.aecodito{width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid var(--violet);animation:floatY 3s ease-in-out infinite}
.bar-name{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;letter-spacing:.04em;line-height:1}
.bar-sub{font-size:8px;letter-spacing:.28em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-top:2px}
.verdict{display:flex;align-items:center;gap:7px;padding:5px 12px;border-radius:999px;border:1px solid var(--border);background:rgba(34,35,65,.72)}
.verdict .vd{width:8px;height:8px;border-radius:50%;animation:blink 2s infinite}
.verdict b{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:10.5px;letter-spacing:.04em;text-transform:uppercase;white-space:nowrap}
.verdict span{font-size:9.5px;color:var(--muted)}
.pills{display:flex;gap:2px;margin-left:auto;overflow-x:auto;scrollbar-width:none}
.pills::-webkit-scrollbar{display:none}
.pill{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:11px;color:var(--muted);text-decoration:none;padding:6px 9px;border-radius:8px;transition:.2s;white-space:nowrap;cursor:pointer;border:none;background:transparent}
.pill:hover{color:var(--txt);background:rgba(124,126,223,.1)}
.pill.active{color:#fff;background:linear-gradient(135deg,rgba(74,58,193,.5),rgba(124,126,223,.4))}
.tools{display:flex;gap:5px;flex:0 0 auto}
.tbtn{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:10px;color:var(--muted);background:rgba(34,35,65,.6);border:1px solid var(--border);padding:6px 10px;border-radius:999px;cursor:pointer;transition:.2s;white-space:nowrap}
.tbtn:hover{color:#fff;background:linear-gradient(135deg,#4A3AC1,#7C7EDF);border-color:transparent}
.tbtn.primary{color:#fff;background:linear-gradient(135deg,#4A3AC1,#7C7EDF);border-color:transparent}
''')

add(r'''/* SUMMARY */
#summary{padding-top:120px}
.sum-top{display:grid;grid-template-columns:1.35fr .65fr;gap:20px;align-items:end;margin-bottom:22px}
.hbadge{display:inline-flex;align-items:center;gap:9px;background:rgba(74,58,193,.16);border:1px solid rgba(124,126,223,.28);border-radius:999px;padding:5px 14px;font-family:'Space Grotesk',sans-serif;font-size:9.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--lavender);margin-bottom:16px}
.sum-h1{font-family:'Space Grotesk',sans-serif;font-size:clamp(25px,3.8vw,44px);font-weight:700;line-height:1.06;letter-spacing:-.03em;margin-bottom:13px}
.sum-p{font-size:clamp(13px,1.6vw,16px);color:var(--muted);line-height:1.6;max-width:620px}
.focus-box{background:rgba(74,58,193,.08);border:1px solid rgba(74,58,193,.22);border-radius:14px;padding:15px 17px}
.focus-lbl{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--violet);margin-bottom:7px;display:flex;justify-content:space-between}
textarea#foco{width:100%;min-height:74px;resize:vertical;background:rgba(13,15,31,.6);border:1px solid var(--border);border-radius:10px;color:var(--txt);font-family:'Plus Jakarta Sans',sans-serif;font-size:12.5px;line-height:1.5;padding:10px 11px;outline:none;transition:.2s}
textarea#foco:focus{border-color:var(--violet);box-shadow:0 0 0 3px rgba(124,126,223,.1)}
.kstrip{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}
.kcard{background:rgba(34,35,65,.55);border:1px solid var(--border);border-radius:14px;padding:13px 15px;position:relative;overflow:hidden}
.kcard::before{content:'';position:absolute;inset:0 0 auto 0;height:1px;background:linear-gradient(90deg,transparent,rgba(124,126,223,.3),transparent)}
.kc-v{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:22px;line-height:1}
.kc-l{font-family:'Space Grotesk',sans-serif;font-size:8.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-top:5px}
.kc-d{font-family:'JetBrains Mono',monospace;font-size:9.5px;margin-top:3px}
''')

add(r'''/* TESIS / MERCADO */
#tesis{background:rgba(13,15,31,.5)}
.tesis-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:13px;margin-top:26px}
.tcard{padding:18px;transition:transform .25s,border-color .25s}
.tcard:hover{transform:translateY(-3px);border-color:rgba(124,126,223,.4)}
.tcard .ti{width:40px;height:40px;border-radius:11px;background:rgba(74,58,193,.16);border:1px solid rgba(124,126,223,.2);display:flex;align-items:center;justify-content:center;font-size:19px;margin-bottom:13px}
.tcard h4{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:14.5px;margin-bottom:8px;line-height:1.2}
.tcard p{font-size:12px;color:var(--muted);line-height:1.55;margin-bottom:10px}
.tcard .tn{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:18px;color:var(--lavender);display:block;margin-bottom:4px}
.tesis-quote{margin-top:18px;padding:18px 22px;border-radius:15px;border:1px solid rgba(124,126,223,.28);background:rgba(34,35,65,.5);font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(15px,2vw,20px);line-height:1.4;text-align:center}
.tesis-quote b{color:var(--lavender)}
''')

add(r'''/* HYBRID */
.hyb-head{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:8px}
.hyb-toggle{display:flex;gap:4px;background:rgba(13,15,31,.6);border:1px solid var(--border);border-radius:999px;padding:3px}
.hyb-toggle button{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:10.5px;color:var(--muted);background:transparent;border:none;padding:6px 14px;border-radius:999px;cursor:pointer;transition:.2s}
.hyb-toggle button.active{color:#fff;background:linear-gradient(135deg,#4A3AC1,#7C7EDF)}
.hyb-legend{display:flex;gap:16px;flex-wrap:wrap}
.hyb-legend .it{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--muted)}
.hyb-legend .sw{width:11px;height:11px;border-radius:3px}
.hyb-legend .it b{color:var(--txt);font-family:'JetBrains Mono',monospace}
.hyb-grid{display:grid;grid-template-columns:1.5fr 1fr;gap:16px;margin-top:26px}
.hyb-side{display:flex;flex-direction:column;gap:12px}
.model-card{padding:18px;position:relative;overflow:hidden}
.model-card.live{border-color:rgba(68,101,238,.4)}
.model-card.micro{border-color:rgba(124,126,223,.4)}
.model-head{display:flex;align-items:center;gap:11px;margin-bottom:12px}
.model-ic{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:21px;flex:0 0 auto}
.model-name{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:15.5px;line-height:1.1}
.model-tag{font-family:'JetBrains Mono',monospace;font-size:8.5px;padding:2px 8px;border-radius:5px;margin-top:4px;display:inline-block}
.model-big{display:flex;align-items:baseline;gap:9px;margin-bottom:2px}
.model-big .mv{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:27px;line-height:1}
.model-big .mg{font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700}
.model-sub{font-size:10.5px;color:var(--muted);margin-bottom:11px}
.mm-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.mm{background:rgba(13,15,31,.5);border:1px solid var(--border);border-radius:10px;padding:9px 11px}
.mm-l{font-size:8px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:600}
.mm-v{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:15px;margin-top:3px}
.prog-strip{display:flex;gap:9px;flex-wrap:wrap;margin-top:20px}
.prog{display:flex;align-items:center;gap:9px;background:rgba(34,35,65,.55);border:1px solid var(--border);border-radius:12px;padding:10px 14px;transition:.2s}
.prog:hover{border-color:rgba(124,126,223,.45);transform:translateY(-2px)}
.prog .pic{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:17px;flex:0 0 auto}
.prog .pn{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:12.5px;line-height:1.1}
.prog .pd{font-size:9.5px;color:var(--muted);margin-top:2px;font-family:'JetBrains Mono',monospace}
''')

add(r'''/* METRIC MAP */
#map{background:rgba(13,15,31,.5)}
.map-hint{font-size:11.5px;color:var(--dim);margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.map-legend{display:flex;gap:13px;flex-wrap:wrap;margin:14px 0}
.map-legend .it{display:flex;align-items:center;gap:6px;font-size:10.5px;color:var(--muted);font-weight:600}
.map-legend .dot{width:9px;height:9px;border-radius:3px}
.mapwrap{overflow-x:auto;border:1px solid var(--border);border-radius:16px;background:rgba(13,15,31,.4);padding:6px;scrollbar-width:thin}
.mapinner{position:relative;width:1100px;height:600px;margin:0 auto}
.mapedges{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.mnode{position:absolute;transform:translate(-50%,-50%);width:158px;padding:9px 11px;border:1px solid var(--border);border-radius:11px;background:rgba(28,30,58,.96);cursor:pointer;text-align:center;transition:opacity .25s,border-color .25s,box-shadow .25s,transform .15s;z-index:2}
.mnode:hover{transform:translate(-50%,-50%) scale(1.04)}
.mnode .mn-l{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:11px;line-height:1.2}
.mnode .mn-v{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted);margin-top:3px}
.mnode.dim{opacity:.22}
.mnode.hl{box-shadow:0 0 0 1.5px var(--violet),0 6px 22px -6px rgba(124,126,223,.5)}
.mnode.nsm{width:300px;background:linear-gradient(135deg,rgba(74,58,193,.32),rgba(143,96,234,.28));border-color:rgba(143,96,234,.6);animation:nsmGlow 3s ease-in-out infinite;z-index:3}
.mnode.nsm .mn-l{font-size:13px;font-weight:700}
.mnode.nsm .mn-v{font-size:11px;color:var(--lavender)}
.map-detail{margin-top:16px;padding:16px 18px;border-radius:14px;border:1px solid var(--border);background:rgba(34,35,65,.5);min-height:96px}
.md-top{display:flex;align-items:center;gap:9px;margin-bottom:8px;flex-wrap:wrap}
.md-layer{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;padding:3px 9px;border-radius:6px}
.md-name{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px}
.md-val{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:14px;margin-left:auto;color:var(--lavender)}
.md-why{font-size:12.5px;color:var(--muted);line-height:1.6}
.md-why b{color:var(--txt)}
''')

add(r'''/* CHARTS / FIN / COHORTS / GROWTH / SIM / KPI / AGENDA */
.chart-card{padding:22px}
.chart-legend{display:flex;flex-wrap:wrap;gap:7px 16px;margin-bottom:12px}
.chart-legend .it{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--muted)}
.chart-legend .ln{width:14px;height:3px;border-radius:2px}
.chart-legend .it b{color:var(--txt);font-family:'JetBrains Mono',monospace}
.fin-grid{display:grid;grid-template-columns:1.6fr 1fr;gap:16px;margin-top:26px}
.fin-side{display:flex;flex-direction:column;gap:12px}
.fin-stat{background:rgba(34,35,65,.55);border:1px solid var(--border);border-radius:13px;padding:13px 16px}
.fin-stat .fl{font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:600}
.fin-stat .fv{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:24px;margin-top:5px}
.fin-stat .fd{font-size:10.5px;color:var(--muted);margin-top:3px}
.pnl-row{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px dashed rgba(58,64,101,.4);font-size:12.5px}
.pnl-row:last-child{border-bottom:none}.pnl-row .pk{color:var(--muted)}.pnl-row .pv{font-family:'JetBrains Mono',monospace;font-weight:700}
.pnl-row.tot{border-top:1px solid var(--border);border-bottom:none;margin-top:4px;padding-top:10px}.pnl-row.tot .pk{color:var(--txt);font-weight:700}
.cohort-wrap{overflow-x:auto;margin-top:14px}
.cohort-table{width:100%;border-collapse:collapse;font-size:12px;min-width:700px}
.cohort-table th{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);padding:9px 12px;border-bottom:1px solid var(--border);text-align:right;white-space:nowrap}
.cohort-table th:first-child,.cohort-table th:nth-child(2){text-align:left}
.cohort-table td{padding:10px 12px;border-bottom:1px solid rgba(58,64,101,.35);text-align:right;font-family:'JetBrains Mono',monospace;font-size:12px}
.cohort-table td:first-child,.cohort-table td:nth-child(2){text-align:left;font-family:'Plus Jakarta Sans',sans-serif}
.cohort-table td:nth-child(2){color:var(--muted)}
.cohort-table tr:hover td{background:rgba(34,35,65,.3)}
.cohort-table .cid{font-family:'JetBrains Mono',monospace;color:var(--blue);font-weight:700;font-size:11px}
.coh-sum{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:16px}
.coh-s{background:rgba(13,15,31,.5);border:1px solid var(--border);border-radius:11px;padding:12px 14px}
.coh-s .v{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:19px}.coh-s .l{font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-top:4px}
.channel-row{display:grid;grid-template-columns:140px 1fr 100px;align-items:center;gap:12px;margin-bottom:9px}
.ch-name{font-size:12px;font-weight:600}
.ch-track{height:22px;background:rgba(13,15,31,.6);border:1px solid var(--border);border-radius:7px;overflow:hidden}
.ch-bar{height:100%;border-radius:6px;width:0;transition:width .8s ease}
.ch-val{font-family:'JetBrains Mono',monospace;font-size:10.5px;color:var(--muted);text-align:right}
.sim-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:16px;margin-top:18px}
.presets{display:flex;gap:7px;margin-bottom:16px;flex-wrap:wrap}
.preset{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:10.5px;color:var(--muted);background:rgba(34,35,65,.6);border:1px solid var(--border);padding:6px 13px;border-radius:999px;cursor:pointer;transition:.2s}
.preset:hover{color:#fff;border-color:var(--violet)}.preset.active{color:#fff;background:linear-gradient(135deg,#4A3AC1,#7C7EDF);border-color:transparent}
.slider-row{margin-bottom:15px}
.slider-top{display:flex;align-items:center;gap:7px;margin-bottom:7px}
.slider-name{font-weight:600;font-size:12px;display:flex;align-items:center;gap:6px}
.slider-val{margin-left:auto;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:13px;color:var(--lavender)}
input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:5px;border-radius:3px;background:rgba(58,64,101,.5);outline:none;cursor:pointer}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:17px;height:17px;border-radius:50%;background:linear-gradient(135deg,#7C7EDF,#8F60EA);border:2px solid #EEF3F8;cursor:pointer;box-shadow:0 0 12px rgba(124,126,223,.55)}
input[type=range]::-moz-range-thumb{width:15px;height:15px;border-radius:50%;background:#7C7EDF;border:2px solid #EEF3F8;cursor:pointer}
.slider-help{font-size:10.5px;color:var(--muted);margin-top:5px;line-height:1.4}
.sim-outputs{display:flex;flex-direction:column;gap:11px}
.sim-verdict{padding:15px 17px;border-radius:14px;border:1px solid var(--border);display:flex;align-items:center;gap:13px;transition:.4s}
.sim-verdict .vbig{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;line-height:1.15}
.sim-verdict .vsm{font-size:11px;color:var(--muted);margin-top:3px}
.sim-verdict .vicon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex:0 0 auto}
.out-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.out-card{background:rgba(13,15,31,.55);border:1px solid var(--border);border-radius:12px;padding:13px}
.out-lbl{display:flex;align-items:center;gap:6px;font-size:9px;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-bottom:5px}
.out-val{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:23px;line-height:1}
.out-delta{font-family:'JetBrains Mono',monospace;font-size:10px;margin-top:3px}
.out-bar{height:3px;border-radius:2px;background:rgba(58,64,101,.35);margin-top:8px;overflow:hidden}.out-bar i{display:block;height:100%;border-radius:2px;width:0;transition:width .6s ease}
.sim-note{padding:11px 14px;background:rgba(74,58,193,.08);border:1px solid rgba(74,58,193,.22);border-radius:11px;font-size:11.5px;color:var(--muted);line-height:1.5;display:flex;gap:9px}
.sim-note-lbl{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:8px;letter-spacing:.14em;text-transform:uppercase;color:var(--violet);flex:0 0 auto}
.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:11px;margin-top:26px}
.kpi{border-radius:14px;padding:15px;position:relative;overflow:hidden;background:rgba(34,35,65,.55);border:1px solid var(--border);transition:transform .25s,border-color .25s}
.kpi:hover{transform:translateY(-3px);border-color:rgba(124,126,223,.4)}
.kpi.g{border-left:3px solid var(--good)}.kpi.w{border-left:3px solid var(--watch)}.kpi.r{border-left:3px solid var(--risk)}
.kpi-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;gap:6px}
.kpi-name{font-size:8.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);font-weight:600;display:flex;align-items:center;gap:5px}
.kpi-dot{width:7px;height:7px;border-radius:50%;flex:0 0 auto}
.kpi-val{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:22px;line-height:1;margin-bottom:3px}
.kpi-tgt{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--dim)}
.kpi-bar{height:3px;border-radius:2px;background:rgba(58,64,101,.3);margin-top:9px;overflow:hidden}.kpi-bar i{display:block;height:100%;border-radius:2px;width:0;transition:width .7s ease}
.legend{margin-top:15px;display:flex;gap:15px;flex-wrap:wrap;align-items:center;font-size:11px;color:var(--muted)}
.legend .p{display:flex;align-items:center;gap:6px}.legend .sd{width:8px;height:8px;border-radius:50%}
.ready-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:16px;margin-top:26px}
.agenda{list-style:none;display:flex;flex-direction:column;gap:2px}
.ag-item{display:flex;gap:10px;align-items:flex-start;padding:8px 9px;border-radius:9px;cursor:pointer;transition:.2s}
.ag-item:hover{background:rgba(124,126,223,.07)}
.ag-check{width:18px;height:18px;border-radius:6px;border:1.5px solid var(--border);flex:0 0 auto;margin-top:1px;display:flex;align-items:center;justify-content:center;transition:.2s}
.ag-check.dn{background:var(--green);border-color:var(--green)}
.ag-n{font-family:'JetBrains Mono',monospace;font-size:10.5px;color:var(--violet);font-weight:700;flex:0 0 auto;width:19px;margin-top:2px}
.ag-txt{font-size:12px;line-height:1.45;transition:.2s}.ag-txt.dn{text-decoration:line-through;color:var(--muted);opacity:.6}
.ag-prog{height:4px;border-radius:3px;background:rgba(58,64,101,.35);margin-top:15px;overflow:hidden}.ag-prog i{display:block;height:100%;border-radius:3px;background:linear-gradient(90deg,#4A3AC1,#47CF78);transition:width .5s ease;width:0}
.ag-foot{font-size:10px;color:var(--muted);margin-top:6px;font-family:'JetBrains Mono',monospace}
.win-item{display:flex;align-items:flex-start;gap:9px;padding:7px 0;border-bottom:1px dashed rgba(58,64,101,.4)}.win-item:last-of-type{border-bottom:none}
.win-check{width:16px;height:16px;border-radius:5px;border:1.5px solid var(--border);cursor:pointer;flex:0 0 auto;margin-top:1px;display:flex;align-items:center;justify-content:center;transition:.2s}.win-check.dn{background:var(--green);border-color:var(--green)}
.win-txt{flex:1;font-size:12px;line-height:1.4}.win-txt.dn{text-decoration:line-through;color:var(--muted);opacity:.6}
.win-del{color:var(--border);cursor:pointer;font-size:15px;line-height:1;padding:0 2px}.win-del:hover{color:var(--risk)}
.win-add{display:flex;gap:7px;margin-top:11px}
.win-input{flex:1;background:rgba(13,15,31,.7);border:1px dashed var(--border);border-radius:8px;padding:7px 10px;color:var(--txt);font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;outline:none}.win-input:focus{border-color:var(--violet);border-style:solid}
.win-addbtn{padding:7px 12px;border-radius:999px;background:linear-gradient(135deg,#4A3AC1,#7C7EDF);border:none;color:#fff;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:11px;cursor:pointer;white-space:nowrap}
/* edit/info/popover */
.edit{font-family:'JetBrains Mono',monospace;background:transparent;border:none;border-bottom:1px dashed transparent;color:inherit;font-size:inherit;font-weight:inherit;padding:0 1px;cursor:text;transition:.15s;-moz-appearance:textfield;text-align:center}
.edit::-webkit-outer-spin-button,.edit::-webkit-inner-spin-button{-webkit-appearance:none}
.edit:hover{border-bottom-color:var(--border)}.edit:focus{outline:none;border-bottom-color:var(--violet);color:var(--lavender)}
.info{width:14px;height:14px;border-radius:50%;border:1px solid var(--border);background:rgba(124,126,223,.12);color:var(--lavender);font-size:8.5px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;transition:.2s;font-family:'JetBrains Mono',monospace;line-height:1}
.info:hover{border-color:var(--violet);background:rgba(124,126,223,.28);transform:scale(1.12)}
#popover{position:fixed;z-index:520;max-width:300px;background:rgba(18,20,42,.99);border:1px solid var(--violet);border-radius:13px;padding:14px 15px;font-size:12.5px;line-height:1.6;color:var(--txt);box-shadow:0 14px 50px rgba(0,0,0,.55);opacity:0;pointer-events:none;transform:translateY(7px);transition:opacity .2s,transform .2s}
#popover.show{opacity:1;pointer-events:auto;transform:translateY(0)}
#popover .pop-t{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--violet);margin-bottom:6px}
#popover .pop-x{position:absolute;top:8px;right:10px;color:var(--muted);cursor:pointer;font-size:15px;line-height:1}
/* tour / toast / footer */
#tour-box{position:fixed;z-index:560;left:50%;bottom:24px;transform:translateX(-50%) translateY(20px);max-width:440px;width:calc(100% - 40px);background:rgba(18,20,42,.99);border:1px solid var(--violet);border-radius:16px;padding:19px 21px;box-shadow:0 18px 64px rgba(0,0,0,.6);opacity:0;pointer-events:none;transition:opacity .3s,transform .3s}
#tour-box.show{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0)}
#tour-box .tt{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:15px;margin-bottom:7px}
#tour-box .td{font-size:12.5px;color:var(--muted);line-height:1.55;margin-bottom:15px}
#tour-box .tnav{display:flex;align-items:center;gap:8px}#tour-box .tstep{font-family:'JetBrains Mono',monospace;font-size:10.5px;color:var(--muted);margin-right:auto}
.tour-hl{position:relative;z-index:540;border-radius:18px;box-shadow:0 0 0 3px var(--violet),0 0 0 9999px rgba(8,10,22,.82);transition:box-shadow .3s}
.tbtn-s{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:11.5px;padding:7px 15px;border-radius:999px;cursor:pointer;border:1px solid var(--border);background:transparent;color:var(--txt)}.tbtn-s.primary{background:linear-gradient(135deg,#4A3AC1,#7C7EDF);border-color:transparent;color:#fff}
#toast{position:fixed;bottom:22px;right:22px;z-index:600;background:rgba(18,20,42,.98);border:1px solid var(--violet);border-radius:12px;padding:11px 17px;font-size:12px;color:var(--txt);box-shadow:0 10px 40px rgba(0,0,0,.5);opacity:0;transform:translateY(14px);transition:opacity .3s,transform .3s;pointer-events:none}#toast.show{opacity:1;transform:translateY(0)}
.reveal{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}.reveal.in{opacity:1;transform:translateY(0)}
footer{position:relative;z-index:5;border-top:1px solid var(--border);padding:24px 0;margin-top:30px}
.foot-in{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;max-width:1320px;margin:0 auto;padding:0 22px}
.foot-brand{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:14px}.foot-copy{font-size:10px;color:var(--dim);font-family:'JetBrains Mono',monospace}
.foot-links{display:flex;gap:15px}.foot-links a{font-size:11px;color:var(--muted);text-decoration:none}.foot-links a:hover{color:var(--txt)}
/* ADOPT 2026 */
.adopt-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-top:14px}
.acard{background:rgba(34,35,65,.55);border:1px solid var(--border);border-radius:14px;padding:14px 15px;display:flex;flex-direction:column;gap:8px;transition:transform .22s ease,border-color .22s ease}
.acard:hover{transform:translateY(-3px);border-color:rgba(124,126,223,.55)}
.acard .av{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:23px;line-height:1;font-variant-numeric:tabular-nums}
.acard .al{font-size:10.5px;color:var(--muted);line-height:1.45;flex:1}
.acard .src{align-self:flex-start;white-space:normal}
.adopt-take{margin-top:14px;background:rgba(74,58,193,.08);border:1px solid rgba(74,58,193,.22);border-left:3px solid var(--violet);border-radius:12px;padding:13px 17px;font-size:12.5px;color:var(--muted);line-height:1.6}
.adopt-take b{color:var(--txt)}
/* WAR ROOM */
.war-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:24px}
.war-grid2{display:grid;grid-template-columns:1.05fr .95fr;gap:14px;margin-top:14px}
.wcard.urgent{border-color:rgba(240,160,48,.45)}
.wcard.urgent2{border-color:rgba(71,207,120,.4)}
.w-top{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:4px}
.w-name{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16.5px;letter-spacing:-.01em}
.w-chip{font-family:'Space Grotesk',sans-serif;font-size:9px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;border-radius:999px;padding:4px 10px;border:1px solid var(--border);color:var(--muted)}
.w-chip.hot{color:var(--amber);border-color:rgba(240,160,48,.5);background:rgba(240,160,48,.08)}
.w-chip.go{color:var(--green);border-color:rgba(71,207,120,.45);background:rgba(71,207,120,.08)}
.cd{display:flex;gap:18px;margin:14px 0 10px;min-height:52px}
.cd-u b{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:34px;line-height:1;font-variant-numeric:tabular-nums;display:block}
.cd-u span{font-family:'Space Grotesk',sans-serif;font-size:8.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--dim);display:block;margin-top:4px}
.cd-done{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;color:var(--green);display:flex;align-items:center}
.w-meta{font-size:11.5px;color:var(--muted);line-height:1.6}
.w-list{margin-top:12px;display:flex;flex-direction:column;gap:7px}
.w-li{display:flex;gap:9px;font-size:11.5px;color:var(--muted);line-height:1.5}
.w-li::before{content:'\2192';color:var(--violet);font-weight:700;flex:0 0 auto}
.wk{display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--border);border-radius:10px;cursor:pointer;transition:border-color .2s,background .2s;font-size:12px;color:var(--txt);margin-bottom:7px}
.wk:hover{border-color:var(--violet);background:rgba(124,126,223,.06)}
.wk .box{width:17px;height:17px;border-radius:5px;border:1.5px solid var(--dim);display:grid;place-items:center;font-size:10px;color:#fff;flex:0 0 auto;transition:background .2s,border-color .2s}
.wk.done .box{background:var(--green);border-color:var(--green)}
.wk.done span:last-child{text-decoration:line-through;color:var(--dim)}
.wq{display:flex;flex-direction:column;gap:10px}
.wq-it{border-left:2px solid var(--border);padding-left:12px}
.wq-q{font-size:12px;font-weight:700;color:var(--txt);line-height:1.45}
.wq-a{font-size:11px;color:var(--muted);line-height:1.55;margin-top:3px}
/* PITCH MODE */
#pitch{position:fixed;inset:0;z-index:700;background:radial-gradient(ellipse 1000px 600px at 82% -10%,rgba(74,58,193,.32),transparent 60%),radial-gradient(ellipse 800px 500px at 8% 112%,rgba(143,96,234,.16),transparent 55%),#090B18;opacity:0;pointer-events:none;transition:opacity .35s ease}
#pitch.on{opacity:1;pointer-events:auto}
.pslide{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:9vh 8vw 13vh;opacity:0;transform:translateY(26px);transition:opacity .5s ease,transform .5s ease;pointer-events:none;overflow-y:auto}
.pslide.on{opacity:1;transform:translateY(0);pointer-events:auto}
.p-eyebrow{font-family:'Space Grotesk',sans-serif;font-size:10.5px;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:var(--violet);margin-bottom:22px}
.p-big{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:clamp(50px,10vw,140px);line-height:1;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.p-logo{width:64px;height:64px;border-radius:50%;border:2px solid var(--violet);object-fit:cover}
.p-head{font-family:'Space Grotesk',sans-serif;font-size:clamp(20px,3.4vw,40px);font-weight:700;line-height:1.12;letter-spacing:-.02em;max-width:900px;margin:20px auto 0;text-wrap:balance}
.p-sub{font-size:clamp(13px,1.7vw,17px);color:var(--muted);max-width:780px;margin:16px auto 0;line-height:1.65;text-wrap:pretty}
.p-src{margin-top:24px}
.p-count{position:absolute;top:24px;left:26px;font-size:11px;color:var(--dim);z-index:5}
.p-x{position:absolute;top:18px;right:22px;width:38px;height:38px;border-radius:50%;border:1px solid var(--border);background:rgba(34,35,65,.6);color:var(--muted);font-size:19px;cursor:pointer;transition:.2s;z-index:6;display:grid;place-items:center}
.p-x:hover{color:#fff;border-color:var(--violet)}
.pzone{position:absolute;top:70px;bottom:90px;width:16%;cursor:pointer;z-index:4}
.pzone.l{left:0}.pzone.r{right:0}
.pdots{position:absolute;bottom:28px;left:50%;transform:translateX(-50%);display:flex;gap:9px;z-index:5}
.pdots button{width:9px;height:9px;border-radius:50%;border:none;background:rgba(197,207,250,.22);cursor:pointer;transition:transform .25s,background .25s;padding:0}
.pdots button.on{background:var(--violet);transform:scale(1.4)}
.pkeys{position:absolute;bottom:24px;right:26px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--dim);display:flex;gap:8px;align-items:center;z-index:5}
.pkeys kbd,.ck-foot kbd{border:1px solid var(--border);border-radius:5px;padding:2px 6px;font-size:9.5px;background:rgba(34,35,65,.6);font-family:'JetBrains Mono',monospace}
/* CMDK */
#cmdk{position:fixed;inset:0;z-index:800;background:rgba(8,10,22,.6);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:flex;justify-content:center;align-items:flex-start;padding-top:14vh;opacity:0;pointer-events:none;transition:opacity .22s ease}
#cmdk.on{opacity:1;pointer-events:auto}
.ck-panel{width:min(560px,92vw);background:rgba(18,20,42,.97);border:1px solid var(--border);border-radius:16px;box-shadow:0 30px 90px rgba(0,0,0,.55);overflow:hidden;transform:translateY(10px) scale(.98);transition:transform .22s ease}
#cmdk.on .ck-panel{transform:translateY(0) scale(1)}
.ck-in{width:100%;background:transparent;border:none;outline:none;color:var(--txt);font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;padding:16px 18px;border-bottom:1px solid var(--border)}
.ck-in::placeholder{color:var(--dim)}
.ck-list{max-height:44vh;overflow-y:auto;padding:7px}
.ck-it{display:flex;align-items:center;gap:11px;padding:10px 12px;border-radius:10px;cursor:pointer;font-size:13px;color:var(--muted)}
.ck-it .ic{width:22px;text-align:center;flex:0 0 auto}
.ck-it.on{background:rgba(124,126,223,.14);color:var(--txt)}
.ck-it kbd{margin-left:auto;border:1px solid var(--border);border-radius:5px;padding:1px 6px;font-size:9.5px;font-family:'JetBrains Mono',monospace;color:var(--dim)}
.ck-empty{padding:24px;text-align:center;color:var(--dim);font-size:12px}
.ck-foot{display:flex;gap:14px;padding:9px 14px;border-top:1px solid var(--border);font-size:9.5px;color:var(--dim);font-family:'JetBrains Mono',monospace;align-items:center}
@media(max-width:1080px){
  .sum-top,.fin-grid,.sim-grid,.ready-grid,.hyb-grid{grid-template-columns:1fr}
  .adopt-grid{grid-template-columns:repeat(3,1fr)}
  .kstrip{grid-template-columns:repeat(3,1fr)}
  .tesis-grid{grid-template-columns:repeat(2,1fr)}
  .kpi-grid{grid-template-columns:repeat(3,1fr)}
  .coh-sum{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:720px){
  .pills{display:none}.bar-sub{display:none}.verdict span{display:none}
  .kstrip,.kpi-grid,.tesis-grid{grid-template-columns:repeat(2,1fr)}
  .channel-row{grid-template-columns:100px 1fr 76px}
  .adopt-grid{grid-template-columns:repeat(2,1fr)}
  .war-grid,.war-grid2{grid-template-columns:1fr}
  .tbtn.t-sec{display:none}
  .cd-u b{font-size:27px}
  .pzone{display:none}
}
@media(max-width:460px){.kstrip,.kpi-grid,.out-grid,.mm-grid,.coh-sum,.tesis-grid,.adopt-grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<canvas id="bg-canvas"></canvas>
<div class="grain"></div>
<div id="scroll-bar"></div>
<div id="popover"><span class="pop-x" onclick="hidePop()">&times;</span><div class="pop-t" id="pop-t"></div><div id="pop-d"></div></div>
<div id="toast"></div>
<div id="tour-box"><div class="tt" id="tour-t"></div><div class="td" id="tour-d"></div><div class="tnav"><span class="tstep" id="tour-step"></span><button class="tbtn-s" id="tour-prev" onclick="tourPrev()">Atrás</button><button class="tbtn-s primary" id="tour-next" onclick="tourNext()">Siguiente</button></div></div>
<div id="pitch" role="dialog" aria-modal="true" aria-label="Pitch Mode">
  <div id="p-slides"></div>
  <div class="pzone l" onclick="pitchPrev()" aria-hidden="true"></div>
  <div class="pzone r" onclick="pitchNext()" aria-hidden="true"></div>
  <span class="p-count mono" id="p-count"></span>
  <button class="p-x" onclick="endPitch()" aria-label="Cerrar pitch">&times;</button>
  <div class="pdots" id="p-dots"></div>
  <div class="pkeys"><kbd>&larr;</kbd><kbd>&rarr;</kbd> navegar<kbd>Esc</kbd> salir</div>
</div>
<div id="cmdk"><div class="ck-panel"><input id="ck-in" class="ck-in" placeholder="Escribe un comando o sección..." aria-label="Buscar comando"><div class="ck-list" id="ck-list"></div><div class="ck-foot"><span><kbd>&uarr;</kbd><kbd>&darr;</kbd> navegar</span><span><kbd>&crarr;</kbd> ejecutar</span><span><kbd>esc</kbd> cerrar</span><span style="margin-left:auto">Ctrl+K</span></div></div></div>
''')

# ===================== COMMAND BAR =====================
add(r'''<div id="bar"><div class="bar-in">
  <a href="#summary" class="bar-logo"><img src="aecodito.png" class="aecodito" alt="Aecodito"><span><span class="bar-name"><span class="grad">AECODE</span></span><span class="bar-sub">Startup Metrics OS</span></span></a>
  <div class="verdict" id="verdict"></div>
  <nav class="pills" id="pills">
    <a class="pill" data-sec="summary">Resumen</a>
    <a class="pill" data-sec="tesis">Tesis</a>
    <a class="pill" data-sec="hybrid">Híbrido</a>
    <a class="pill" data-sec="map">Mapa</a>
    <a class="pill" data-sec="financials">Finanzas</a>
    <a class="pill" data-sec="cohorts">Cohortes</a>
    <a class="pill" data-sec="growth">Growth</a>
    <a class="pill" data-sec="projection">Proyección</a>
    <a class="pill" data-sec="health">Fundabilidad</a>
    <a class="pill" data-sec="warroom">War Room</a>
    <a class="pill" data-sec="focus">Foco</a>
  </nav>
  <div class="tools">
    <button class="tbtn primary" onclick="startPitch()">&#9654; Pitch</button>
    <button class="tbtn" onclick="startTour()">&#9737; Tour</button>
    <button class="tbtn" onclick="toggleCmdk()" aria-label="Paleta de comandos (Ctrl+K)">&#8984;K</button>
    <button class="tbtn t-sec" onclick="doExport()">Exportar</button>
    <button class="tbtn t-sec" onclick="document.getElementById('imp').click()">Importar</button>
    <button class="tbtn t-sec" onclick="doReset()">Reset</button>
    <input type="file" id="imp" accept="application/json" hidden>
  </div>
</div></div>
''')

# ===================== SUMMARY =====================
add(r'''<section id="summary" class="section">
  <div class="wrap">
    <div class="sum-top">
      <div class="reveal">
        <div class="hbadge"><span class="grad">Skill Operating System</span> &middot; AEC &middot; Latam &middot; Jun 2026</div>
        <h1 class="sum-h1">El sistema de métricas de una startup<br>que <span class="grad">convence con evidencia</span>.</h1>
        <p class="sum-p">AECODE convierte aprendizaje técnico AEC en <b style="color:var(--lavender)">skills verificadas con evidencia</b>. Modelo híbrido: <b style="color:var(--live)">Live Training</b> financia y siembra, <b style="color:var(--micro)">Microlearning Platform OS</b> escala con MRR recurrente. Aquí está todo conectado: investigación &rarr; producto &rarr; growth &rarr; finanzas &rarr; fundraising &rarr; North Star. <span style="color:var(--dim)">Valores marcados como supuestos &mdash; iteramos.</span></p>
      </div>
      <div class="focus-box reveal">
        <div class="focus-lbl"><span>&#9737; El Foco &middot; Una Sola Cosa</span><span id="foco-stamp" style="color:var(--dim);font-weight:400"></span></div>
        <textarea id="foco" spellcheck="false"></textarea>
      </div>
    </div>
    <div class="kstrip reveal" id="kstrip"></div>
  </div>
</section>
''')

# ===================== TESIS / MERCADO =====================
add(r'''<section id="tesis" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Tesis &amp; Mercado &middot; por qué ahora</div><h2 class="section-h">El dinero fácil se acabó. Gana la evidencia verificable.</h2><p class="section-p">El EdTech entró en la "post-content age": con IA el contenido es commodity; lo escaso es <b style="color:var(--lavender)">demostrar competencia</b>. AECODE ataca la grieta exacta: una vertical profesional (AEC) donde el trabajo produce artefactos verificables.</p></div>
    <div class="tesis-grid">
      <div class="tcard card reveal"><div class="ti">&#128201;</div><span class="tn">$2.4B</span><h4>VC EdTech 2024</h4><p>Mínimo en una década (de $20.8B en 2021, -89%). Hoy se financia evidencia y unit economics, no "crecer a cualquier costo".</p><span class="src">HolonIQ</span></div>
      <div class="tcard card reveal"><div class="ti">&#127959;</div><span class="tn">~85M</span><h4>Escasez global BIM 2030</h4><p>El cuello estructural del BIM es la falta de talento. Mercado BIM $5.3B&ndash;$9.7B, CAGR 11&ndash;15%. La construcción es de los sectores menos digitalizados.</p><span class="src">Korn Ferry / MarketsandMarkets</span></div>
      <div class="tcard card reveal"><div class="ti">&#127891;</div><span class="tn">~17%</span><h4>Adultos LATAM con superior</h4><p>El título pierde poder de señalización; la skill verificable lo gana. Se migra de "credencial de entrada" a "pasaporte de habilidades actualizable".</p><span class="src">Platzi / Vega</span></div>
      <div class="tcard card reveal"><div class="ti">&#9889;</div><span class="tn">&gt;70%</span><h4>Completion con cohorte</h4><p>Los MOOCs medianos completan 12.6%; los cohort-based &gt;75%; Platzi ~70%. La comunidad y el accountability &mdash; no el contenido &mdash; definen el resultado.</p><span class="src">Katy Jordan / Maven / Harvard</span></div>
    </div>
    <div class="reveal" style="margin-top:34px"><div class="card-eyebrow"><span class="tick"></span>Radar de adopci&oacute;n IA en AEC &middot; lo m&aacute;s fresco 2025&ndash;2026 &middot; cada dato con fuente</div></div>
    <div class="adopt-grid">
      <div class="acard reveal"><span class="av" style="color:var(--violet)">75%</span><div class="al">de firmas AEC ya usa IA &mdash; subi&oacute; ~20 puntos en un solo a&ntilde;o</div><span class="src">Unanet AEC Inspire 2026</span></div>
      <div class="acard reveal"><span class="av" style="color:var(--risk)">12%</span><div class="al">la usa <b>regularmente</b> en construcci&oacute;n &mdash; adopci&oacute;n profunda, no piloto</div><span class="src">Datagrid AECO 2025</span></div>
      <div class="acard reveal"><span class="av" style="color:var(--amber)">29%</span><div class="al">conf&iacute;a en la data que alimenta sus herramientas de IA</div><span class="src">Unanet 2026</span></div>
      <div class="acard reveal"><span class="av" style="color:var(--green)">94%</span><div class="al">de los adoptantes planea <b>aumentar</b> su inversi&oacute;n en IA este a&ntilde;o</div><span class="src">Bluebeam 2025</span></div>
      <div class="acard reveal"><span class="av" style="color:var(--mint)">68%</span><div class="al">de early adopters ya ahorr&oacute; &ge;$50k; 46% ahorr&oacute; 500&ndash;1,000 horas</div><span class="src">Bluebeam 2025</span></div>
      <div class="acard reveal"><span class="av" style="color:var(--blue)">47%</span><div class="al">de empresas LATAM implementa IA (&gt; 42% global) &mdash; pero solo ~28% captura valor</div><span class="src">Meta 2025 &middot; reporte regional 2026</span></div>
    </div>
    <div class="adopt-take reveal">La brecha <b class="mono">75% &rarr; 12%</b> no se cierra con m&aacute;s software: se cierra con <b>capacidades verificables</b>. Con 84.8% de exposici&oacute;n a IA en arquitectura/ingenier&iacute;a (Anthropic Economic Index 2025), cada rol AEC necesita re-skilling &mdash; ese gap es el mercado de AECODE.</div>
    <div class="tesis-quote reveal">"AECODE está construyendo el <b>Skill Operating System</b> para la fuerza laboral AEC en español: skill graph + evidencias + credenciales verificables + comunidad de gremio + employer loop. <b>El moat no es el contenido</b>."</div>
  </div>
</section>
''')

# ===================== HYBRID =====================
add(r'''<section id="hybrid" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">El Modelo Híbrido &middot; ambos van de la mano</div><h2 class="section-h">De 80/20 a 50/50: la migración del mix en un solo gráfico.</h2><p class="section-p">Hoy (jun 2026) el <b style="color:var(--live)">Live</b> pesa 80% y la <b style="color:var(--micro)">Plataforma</b> 20%. La tesis: cerrar diciembre en <b>50/50</b> y seguir invirtiendo el peso hacia el recurrente. Live no desaparece &mdash; financia, da confianza y siembra el contenido que la Plataforma escala.</p></div>
    <div class="card chart-card reveal" style="margin-top:24px">
      <div class="hyb-head">
        <div class="hyb-legend" id="hyb-legend"></div>
        <div class="hyb-toggle"><button data-mode="abs" class="active">Absoluto $</button><button data-mode="mix">Mix %</button></div>
      </div>
      <div id="hyb-chart"></div>
    </div>
    <div class="hyb-grid">
      <div class="hyb-side reveal" id="model-split"></div>
      <div class="card reveal">
        <div class="card-eyebrow"><span class="tick"></span>Programas Live &middot; motor de caja y contenido semilla</div>
        <div class="prog-strip" id="programs"></div>
        <p style="font-size:11.5px;color:var(--muted);line-height:1.55;margin-top:16px">Cada programa Live produce <b style="color:var(--lavender)">cápsulas, rúbricas y casos reales</b> que alimentan el Microlearning Platform OS. La métrica que une ambos mundos: <b>conversión Live &rarr; Plataforma</b> (hoy ~18%, meta 45%).</p>
      </div>
    </div>
  </div>
</section>
''')

# ===================== MAP =====================
add(r'''<section id="map" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Mapa de Métricas &middot; cómo se conecta todo</div><h2 class="section-h">De la investigación al North Star: el sistema completo.</h2><p class="section-p">El corazón de AECODE como startup: cada capa alimenta a la siguiente. La <b>investigación</b> define el <b>producto</b>, que genera <b>growth</b>, que produce <b>finanzas</b>, que habilitan el <b>fundraising</b> &mdash; y todo se mide contra la <b style="color:var(--violet2)">North Star</b>. Haz click en cualquier nodo para ver su rol y conexiones.</p></div>
    <div class="map-legend reveal" id="map-legend"></div>
    <div class="mapwrap reveal">
      <div class="mapinner" id="mapinner">
        <svg class="mapedges" id="mapedges" viewBox="0 0 1100 600" preserveAspectRatio="none"></svg>
      </div>
    </div>
    <div class="map-hint reveal"><span>&#128073; Click en un nodo para resaltar sus conexiones.</span><span style="margin-left:auto" class="src">supuestos marcados &middot; iteramos</span></div>
    <div class="map-detail reveal" id="map-detail"></div>
  </div>
</section>
''')

# ===================== FINANCIALS =====================
add(r'''<section id="financials" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Finanzas &middot; del pasado a la proyección</div><h2 class="section-h">Ingresos, márgenes y P&amp;L: 12 meses atrás &rarr; 12 adelante.</h2><p class="section-p">Línea sólida = histórico; punteada = proyección; zona sombreada = futuro. El margen combinado sube a medida que crece el peso del recurrente (Plataforma 72&ndash;80% vs Live ~58%).</p></div>
    <div class="fin-grid">
      <div class="card chart-card reveal">
        <div class="card-eyebrow"><span class="tick"></span>Ingresos por modelo <span class="info" data-info="rev">i</span></div>
        <div class="chart-legend" id="rev-legend"></div>
        <div id="rev-chart"></div>
      </div>
      <div class="fin-side reveal" id="fin-side"></div>
    </div>
    <div class="fin-grid" style="margin-top:16px">
      <div class="card chart-card reveal">
        <div class="card-eyebrow"><span class="tick"></span>Margen bruto combinado <span class="info" data-info="margin">i</span> &middot; sube con el recurrente</div>
        <div id="margin-chart"></div>
      </div>
      <div class="card reveal">
        <div class="card-eyebrow"><span class="tick"></span>P&amp;L mensual estimado <span class="info" data-info="pnl">i</span> &middot; hoy</div>
        <div id="pnl"></div>
      </div>
    </div>
  </div>
</section>
''')

# ===================== COHORTS =====================
add(r'''<section id="cohorts" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Live Training &middot; Analítica de Cohortes</div><h2 class="section-h">Cada programa: alumnos, ingreso, completación y migración.</h2><p class="section-p">El detalle operativo del Live. La columna clave es <b>&rarr; Plataforma</b>: qué % de cada cohorte migra al recurrente. Subir esa conversión es lo que ejecuta la migración 80/20 &rarr; 50/50.</p></div>
    <div class="card reveal">
      <div class="card-eyebrow"><span class="tick"></span>Cohortes y eventos recientes</div>
      <div class="cohort-wrap"><table class="cohort-table" id="cohort-table"></table></div>
      <div class="coh-sum" id="coh-sum"></div>
    </div>
  </div>
</section>
''')

# ===================== GROWTH =====================
add(r'''<section id="growth" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Growth &middot; Marketing</div><h2 class="section-h">Comunidad como moat #1, y el loop que la potencia.</h2><p class="section-p">65k de comunidad + 8k en WhatsApp activo son el activo de adquisición de menor CAC. La identidad de gremio AEC convierte comunidad en retención, contenido y boca a boca defendible.</p></div>
    <div class="fin-grid">
      <div class="card reveal">
        <div class="card-eyebrow"><span class="tick"></span>Canales de adquisición <span class="info" data-info="channels">i</span> &middot; share y CAC</div>
        <div id="channels"></div>
      </div>
      <div class="fin-side reveal" id="growth-side"></div>
    </div>
    <div class="card reveal" style="margin-top:16px">
      <div class="card-eyebrow"><span class="tick"></span>El loop compuesto (moat)</div>
      <div style="font-size:13px;line-height:1.75;color:var(--muted)">
        <b style="color:var(--live)">1. Live Training</b> capta de la comunidad a bajo CAC, genera caja y confianza &nbsp;&rarr;&nbsp;
        <b style="color:var(--lavender)">2. Produce cápsulas, rúbricas y evidencia</b> reutilizable &nbsp;&rarr;&nbsp;
        <b style="color:var(--micro)">3. Microlearning Platform OS</b> convierte ese contenido en MRR recurrente y Skill Passport &nbsp;&rarr;&nbsp;
        <b style="color:var(--green)">4. Más skills verificadas</b> = más prueba social y mejor certificación &nbsp;&rarr;&nbsp;
        <b>5. Más miembros</b> en la comunidad &rarr; vuelve al paso 1, más barato y más grande. <span style="color:var(--dim)">Es lo que la IA no puede replicar.</span>
      </div>
    </div>
  </div>
</section>
''')

# ===================== PROJECTION / SIMULATOR =====================
add(r'''<section id="projection" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Proyección &middot; Simulador</div><h2 class="section-h">Mueve una palanca, proyecta el negocio.</h2><p class="section-p">Arrastra los sliders y mira el impacto en vivo sobre NSM, MRR recurrente, LTV/CAC, runway y el veredicto de fundabilidad. Presets: Hoy / Meta Beta / Escala 12m.</p></div>
    <div class="sim-grid">
      <div class="card reveal">
        <div class="card-eyebrow"><span class="tick"></span>Palancas del negocio</div>
        <div class="presets">
          <button class="preset active" data-preset="hoy">Hoy</button>
          <button class="preset" data-preset="beta">Meta Beta</button>
          <button class="preset" data-preset="escala">Escala 12m</button>
        </div>
        <div class="slider-row"><div class="slider-top"><span class="slider-name">Evidence Rate <span class="info" data-info="evid">i</span></span><span class="slider-val" id="sv-evid">42%</span></div><input type="range" id="s-evid" min="20" max="80" value="42"><div class="slider-help">% de usuarios que suben evidencia real. El cuello del NSM.</div></div>
        <div class="slider-row"><div class="slider-top"><span class="slider-name">Verification Rate <span class="info" data-info="verif">i</span></span><span class="slider-val" id="sv-verif">69%</span></div><input type="range" id="s-verif" min="40" max="95" value="69"><div class="slider-help">% de evidencias aprobadas como skill verificada.</div></div>
        <div class="slider-row"><div class="slider-top"><span class="slider-name">MAU plataforma <span class="info" data-info="mau2">i</span></span><span class="slider-val" id="sv-mau">420</span></div><input type="range" id="s-mau" min="200" max="6000" value="420" step="20"><div class="slider-help">Escalar usuarios NO arregla el NSM (es razón de calidad).</div></div>
        <div class="slider-row"><div class="slider-top"><span class="slider-name">Conversión a pago <span class="info" data-info="conv">i</span></span><span class="slider-val" id="sv-conv">7%</span></div><input type="range" id="s-conv" min="2" max="25" value="7"><div class="slider-help">% de MAU que paga suscripción (benchmark filtrado 5&ndash;10%).</div></div>
        <div class="slider-row"><div class="slider-top"><span class="slider-name">Precio Pro / mes <span class="info" data-info="price">i</span></span><span class="slider-val" id="sv-price">$29</span></div><input type="range" id="s-price" min="9" max="99" value="29"><div class="slider-help">Sube el LTV/CAC sin tocar el CAC.</div></div>
      </div>
      <div class="sim-outputs reveal">
        <div class="sim-verdict" id="sim-verdict"><div class="vicon" id="sv-icon">&#9203;</div><div><div class="vbig" id="sv-verdict-t">&mdash;</div><div class="vsm" id="sv-verdict-d"></div></div></div>
        <div class="out-grid">
          <div class="out-card"><div class="out-lbl">NSM proyectado <span class="info" data-info="nsm">i</span></div><div class="out-val" id="o-nsm" style="color:var(--violet)">0.00</div><div class="out-delta" id="od-nsm"></div><div class="out-bar"><i id="ob-nsm" style="background:var(--violet)"></i></div></div>
          <div class="out-card"><div class="out-lbl">MRR plataforma <span class="info" data-info="platmrr">i</span></div><div class="out-val" id="o-plat" style="color:var(--green)">$0</div><div class="out-delta" id="od-plat"></div><div class="out-bar"><i id="ob-plat" style="background:var(--green)"></i></div></div>
          <div class="out-card"><div class="out-lbl">LTV / CAC <span class="info" data-info="ltvcac">i</span></div><div class="out-val" id="o-ltv" style="color:var(--blue)">0.0x</div><div class="out-delta" id="od-ltv"></div><div class="out-bar"><i id="ob-ltv" style="background:var(--blue)"></i></div></div>
          <div class="out-card"><div class="out-lbl">Runway <span class="info" data-info="runway">i</span></div><div class="out-val" id="o-run" style="color:var(--amber)">0 mo</div><div class="out-delta" id="od-run"></div><div class="out-bar"><i id="ob-run" style="background:var(--amber)"></i></div></div>
        </div>
        <div class="sim-note"><span class="sim-note-lbl">Lectura</span><span id="sim-note-txt"></span></div>
      </div>
    </div>
    <div class="card chart-card reveal" style="margin-top:16px">
      <div class="card-eyebrow"><span class="tick"></span>Ruta a $30k MRR <span class="info" data-info="path">i</span> &middot; caja total proyectada</div>
      <div id="path-chart"></div>
    </div>
  </div>
</section>
''')

# ===================== HEALTH =====================
add(r'''<section id="health" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Fundabilidad</div><h2 class="section-h">Las 8 métricas que mira un inversionista.</h2><p class="section-p">Tu realidad actual (editable). El semáforo dice qué bloquea una ronda. Benchmarks de la investigación: LTV/CAC &gt;3x, payback &lt;12m, free-to-paid 5&ndash;10%, retención mensual &gt;85&ndash;90%, churn &lt;5&ndash;8%. Toca la <span class="info" style="cursor:default">i</span> de cada tarjeta.</p></div>
    <div class="kpi-grid" id="kpi-grid"></div>
    <div class="legend">
      <div class="p"><span class="sd" style="background:var(--good)"></span>En objetivo</div>
      <div class="p"><span class="sd" style="background:var(--watch)"></span>Vigilar</div>
      <div class="p"><span class="sd" style="background:var(--risk)"></span>En riesgo</div>
      <span style="margin-left:auto;font-size:10px;color:var(--dim)">Click en cualquier número para editar &middot; se guarda en este navegador</span>
    </div>
  </div>
</section>
''')

# ===================== WAR ROOM =====================
add(r'''<section id="warroom" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">War Room &middot; Aceleradoras</div><h2 class="section-h">Ganar Emprelatam y Kaman con los mismos n&uacute;meros.</h2><p class="section-p">El cockpit es el arma: misma data, varias audiencias. <b style="color:var(--lavender)">Emprelatam EPA</b> cierra el <b>17 de junio</b> (equity-free), el <b style="color:var(--lavender)">Demo Day de Kaman</b> es el <b>22 de junio</b> (semilla S/20k), y el pipeline sigue con <b style="color:var(--lavender)">Platanus &rarr; YC</b>. Los relojes corren en vivo.</p></div>
    <div class="war-grid">
      <div class="wcard card reveal urgent">
        <div class="w-top"><span class="w-name">Emprelatam &middot; EPA Aceleraci&oacute;n</span><span class="w-chip hot">cierre postulaci&oacute;n &middot; 17 jun</span></div>
        <div class="cd" id="cd-emprelatam"></div>
        <div class="w-meta">Equity-free &middot; pre-seed <b>con ingresos</b> buscando PMF &middot; perks $150k+ &middot; inicia 13-jul. Tambi&eacute;n abiertos: ECL Exploraci&oacute;n (20-jul), EGS Grow &amp; Scale (8-jul, requiere &gt;$20k/mes) y EXP Internacionalizaci&oacute;n (ago).</div>
        <div class="w-list">
          <div class="w-li">Eval&uacute;an: equipo full-time, tracci&oacute;n real (&gt;$1k/mes ya califica), claridad del cliente que paga y coachability.</div>
          <div class="w-li">&Aacute;ngulo AECODE: llegamos con un sistema de m&eacute;tricas operando en vivo + comunidad 65k + NSM anti-vanity.</div>
        </div>
      </div>
      <div class="wcard card reveal urgent2">
        <div class="w-top"><span class="w-name">Kaman &middot; Demo Day Gen 2026</span><span class="w-chip go">demo day &middot; 22 jun</span></div>
        <div class="cd" id="cd-kaman"></div>
        <div class="w-meta">Incubadora UCSP (ProInn&oacute;vate) &middot; semilla <b>S/20,000</b> (1&deg;) / S/10,000 (2&deg;) + perks hasta S/150k &middot; jurado del ecosistema (inversores, corporativos, ProInn&oacute;vate).</div>
        <div class="w-list">
          <div class="w-li">El jurado espera dominio del temario del programa: m&eacute;tricas, pricing, ventas, valuaci&oacute;n y expansi&oacute;n.</div>
          <div class="w-li">Jugada diferencial: cerrar el pitch con este cockpit en <b>Pitch Mode</b> y mover un slider del simulador en vivo.</div>
        </div>
      </div>
      <div class="wcard card reveal">
        <div class="w-top"><span class="w-name">Platanus</span><span class="w-chip">rolling &middot; post demo day</span></div>
        <div class="w-meta" style="margin-top:10px">US$200k por ~7% (SAFE post-money) &middot; 12 semanas &middot; hispanohablantes. Requisito duro: <b>&ge;1 founder t&eacute;cnico full-time</b> que construye el producto.</div>
        <div class="w-list">
          <div class="w-li">Aplicar con la grabaci&oacute;n del Demo Day + evidencia de producto propio (Evidence Engine).</div>
        </div>
      </div>
      <div class="wcard card reveal">
        <div class="w-top"><span class="w-name">Y Combinator</span><span class="w-chip">siguiente batch</span></div>
        <div class="w-meta" style="margin-top:10px">US$500k ($125k por 7% + $375k MFN) &middot; global. Miran: equipo &gt; idea, <b>crecimiento semanal</b>, mercado enorme, "make something people want".</div>
        <div class="w-list">
          <div class="w-li">Disparar cuando MRR plataforma &gt;$5k y NSM &gt;0.30 &mdash; con la curva de crecimiento semanal lista.</div>
        </div>
      </div>
    </div>
    <div class="war-grid2">
      <div class="card reveal"><div class="card-eyebrow"><span class="tick"></span>Checklist de batalla &middot; pr&oacute;ximos 11 d&iacute;as &middot; click para marcar</div><div id="wcheck"></div></div>
      <div class="card reveal"><div class="card-eyebrow"><span class="tick"></span>Lo que el jurado va a preguntar &middot; respuesta lista</div>
        <div class="wq">
          <div class="wq-it"><div class="wq-q">&iquest;El LTV/CAC de 3.1x es blended o por canal?</div><div class="wq-a">Por canal: comunidad $11 y referidos $8 (73% de la adquisici&oacute;n) vs paid $62. El blended esconde nuestra mejor arma.</div></div>
          <div class="wq-it"><div class="wq-q">&iquest;Churn 8% mensual no mata el LTV de $215?</div><div class="wq-a">Vida media ~12.5 meses &times; ARPU $24 &times; margen 74% &asymp; $215. Bajar a 5% sube el LTV ~60% &mdash; es el quick win #1 de producto.</div></div>
          <div class="wq-it"><div class="wq-q">&iquest;Por qu&eacute; solo 420 MAU con una comunidad de 65k?</div><div class="wq-a">El funnel es Live&rarr;Plataforma (18% y subiendo a 45%), no comunidad&rarr;app. La comunidad es CAC bajo y distribuci&oacute;n, no MAU gratis.</div></div>
          <div class="wq-it"><div class="wq-q">&iquest;Y si Autodesk, Procore o Platzi hacen esto?</div><div class="wq-a">Ellos certifican su herramienta o son horizontales. AECODE es vertical AEC + evidencia real de obra + espa&ntilde;ol: certificaci&oacute;n neutral que ning&uacute;n vendor puede dar.</div></div>
          <div class="wq-it"><div class="wq-q">&iquest;La IA no har&aacute; esto gratis?</div><div class="wq-a">La IA hace el contenido commodity &mdash; eso juega a favor: lo escaso es <b>verificar evidencia</b> y dar se&ntilde;al confiable al empleador. Ese es el producto.</div></div>
        </div>
      </div>
    </div>
  </div>
</section>
''')

# ===================== FOCUS =====================
add(r'''<section id="focus" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Enfoque &middot; Readiness</div><h2 class="section-h">Enfoque del negocio y agenda para ser financiable.</h2><p class="section-p">Secuencia: <b>PMF primero</b> (validar que el AEC paga por outcome), <b>comunidad como moat #1</b>, luego <b>B2C &rarr; B2B</b>, y certificación con evidencia &rarr; empleabilidad. Palanca número uno hoy: subir el Evidence Rate.</p></div>
    <div class="ready-grid">
      <div class="card reveal"><div class="card-eyebrow"><span class="tick"></span>Agenda de Readiness (10 puntos)</div><ul class="agenda" id="agenda"></ul><div class="ag-prog"><i id="ag-bar"></i></div><div class="ag-foot" id="ag-foot"></div></div>
      <div class="card reveal"><div class="card-eyebrow"><span class="tick"></span>Quick Wins &middot; Esta Semana</div><div id="wins"></div><div class="win-add"><input class="win-input" id="win-new" placeholder="Agregar prioridad..." maxlength="90"><button class="win-addbtn" onclick="addWin()">+ Agregar</button></div></div>
    </div>
  </div>
</section>
''')

# ===================== FOOTER =====================
add(r'''<footer><div class="foot-in">
  <div class="foot-brand"><span class="grad">AECODE</span> &middot; Startup Metrics OS</div>
  <div class="foot-links"><a href="#tesis">Tesis</a><a href="#hybrid">Híbrido</a><a href="#map">Mapa</a><a href="#projection">Proyección</a><a href="#warroom">War Room</a></div>
  <div class="foot-copy">v5 &middot; jun 2026 &middot; data editable · supuestos marcados · <b>P</b> = pitch · <b>Ctrl+K</b> = comandos</div>
</div></footer>
''')

# ===================== JS DATA =====================
add(r'''<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
"use strict";
var MONTHS=["Jul'25","Ago","Sep","Oct","Nov","Dic","Ene'26","Feb","Mar","Abr","May","Jun","Jul'26","Ago","Sep","Oct","Nov","Dic","Ene'27","Feb","Mar","Abr","May","Jun'27"];
var SPLIT=12;
var SEED={
  meta:{foco:"Subir el Evidence Rate de 42% a 55% y cerrar Diciembre en 50/50 (Live/Plataforma). Sin evidencia no hay skill verificable, no hay NSM, no hay recurrente. Es la palanca que ejecuta la tesis hibrida.",updated:0},
  star:{skills:72,mau:420,target:0.40},
  total:[2000,2200,2450,2700,2950,3250,3600,3950,4300,4600,4900,5150, 6200,7600,9400,11800,14800,18000,21000,24000,26500,28200,29300,30000],
  share:[5,6,7,9,11,12,14,15,16,17,18,20, 26,32,38,43,47,50,53,56,58,60,61,62],
  models:{
    live:{name:"Live Training",ic:"&#127908;",color:"#4465EE",tag:"No recurrente · cohortes y eventos",margin:58,arpu:165,cac:24,ltv:230,scal:"Lineal",students:168},
    micro:{name:"Microlearning Platform OS",ic:"&#9889;",color:"#7C7EDF",tag:"Recurrente · SaaS vertical",margin:74,arpu:24,cac:38,ltv:215,churn:8,payback:7,scal:"Exponencial",mau:420}
  },
  programs:[
    {n:"AI Construction Summit",d:"evento insignia",ic:"&#127914;",c:"#F0A030"},
    {n:"AI Talent",d:"bootcamp IA+AEC",ic:"&#129302;",c:"#7C7EDF"},
    {n:"BIM Manager Intensivo",d:"cohorte por rol",ic:"&#127959;",c:"#4465EE"},
    {n:"VDC & Coordinación",d:"cohorte por rol",ic:"&#128208;",c:"#47CF78"},
    {n:"Revit + Dynamo Pro",d:"skill track",ic:"&#9881;",c:"#95E3B1"}
  ],
  health:[
    {k:"LTV / CAC",v:3.1,target:3,unit:"x",dir:"high",pre:"",info:"ltvcac"},
    {k:"CAC Payback",v:7,target:12,unit:" mo",dir:"low",pre:"",info:"payback"},
    {k:"Margen plataforma",v:74,target:80,unit:"%",dir:"high",pre:"",info:"margin"},
    {k:"Retención M1",v:38,target:45,unit:"%",dir:"high",pre:"",info:"ret1"},
    {k:"Free-to-paid",v:7,target:5,unit:"%",dir:"high",pre:"",info:"f2p"},
    {k:"Churn mensual",v:8,target:5,unit:"%",dir:"low",pre:"",info:"churn"},
    {k:"Evidence Rate",v:42,target:55,unit:"%",dir:"high",pre:"",info:"evid"},
    {k:"Runway",v:10,target:15,unit:" mo",dir:"high",pre:"",info:"runway"}
  ],
  cohorts:[
    {id:"E-03",name:"AI Construction Summit",n:120,price:69,compl:74,nps:78,conv:24},
    {id:"C-11",name:"AI Talent (bootcamp)",n:38,price:189,compl:71,nps:75,conv:33},
    {id:"C-10",name:"BIM Manager Intensivo",n:34,price:159,compl:78,nps:72,conv:22},
    {id:"C-09",name:"VDC & Coordinación",n:22,price:179,compl:74,nps:70,conv:25},
    {id:"C-08",name:"Revit + Dynamo Pro",n:28,price:139,compl:81,nps:68,conv:18},
    {id:"C-07",name:"Lean Construction",n:19,price:149,compl:85,nps:66,conv:15}
  ],
  channels:[
    {name:"Comunidad / Orgánico",share:55,cac:11,color:"#7C7EDF"},
    {name:"Referidos (gremio)",share:18,cac:8,color:"#47CF78"},
    {name:"Paid (Meta/Google)",share:15,cac:62,color:"#F0A030"},
    {name:"Partnerships / Gremios",share:12,cac:40,color:"#4465EE"}
  ],
  agenda:[
    {t:"PMF primero: validar que el AEC paga por outcome verificable (1-2 rutas por rol)",d:false},
    {t:"Comunidad de gremio como moat #1, antes que el SaaS",d:false},
    {t:"Cerrar el mix en 50/50 (Live/Plataforma) a Diciembre",d:false},
    {t:"Convertir cada Live en cápsulas y rúbricas reutilizables",d:false},
    {t:"Lanzar línea B2B: licencias por rol con skill matrix y dashboards",d:false},
    {t:"Versionar el Skill Graph AEC como activo central",d:false},
    {t:"Evidence Engine: rúbricas propias + AI pre-evaluación",d:false},
    {t:"Calcular unit economics por canal (no blended)",d:false},
    {t:"Certificación neutral de vendor con evidencia (hueco Procore/Autodesk)",d:false},
    {t:"Levantar con narrativa de evidencia + workforce (tesis Owl/Reach)",d:false}
  ],
  wins:[
    {t:"Subir Evidence Rate 42% a 55%",d:false},
    {t:"Empaquetar AI Construction Summit en 5 cápsulas",d:false},
    {t:"Piloto B2B 30 días con 1 constructora",d:false},
    {t:"Free diagnostic por rol (coordinador BIM)",d:false}
  ],
  pitch:[
    {t:"Postular a Emprelatam EPA — formulario + video 2 min (cierra 17-jun)",d:false},
    {t:"Actualizar cockpit con números reales de mayo (ventas, MAU, conversión)",d:false},
    {t:"Calcular churn y CAC por canal con data real del trimestre",d:false},
    {t:"Ensayar pitch 3 min ×10 con Q&A hostil (panel de la derecha)",d:false},
    {t:"Dry-run completo con Pitch Mode en proyector",d:false},
    {t:"Definir el ask del Demo Day: monto + uso de fondos",d:false},
    {t:"Exportar JSON de respaldo del cockpit antes del 22-jun",d:false},
    {t:"Post Demo Day: aplicar a Platanus con la grabación",d:false}
  ]
};
''')

add(r'''var INFO={
  nsm:["North Star Metric","skills verificadas con evidencia &divide; usuarios activos mensuales. Mide progresión real, no vanity metrics. La unica metrica que no se puede maquillar."],
  rev:["Ingresos por modelo","Ingreso mensual de Live y Plataforma. Solido = historico, punteado = proyeccion. La Plataforma (recurrente) cruza y supera a Live: ese es el motor de escala."],
  margin:["Margen bruto combinado","% que queda tras costos directos, ponderado por el mix. Sube de ~62% hacia ~78% al crecer el peso del Microlearning (72-80%) sobre Live (~58%). Benchmark B2B SaaS: 75-90%."],
  pnl:["P&L mensual","Estado de resultados estimado del mes. Supuesto: COGS por modelo + opex (equipo, marketing, ops). Ajustar con data real."],
  channels:["Canales de adquisicion","Distribucion de nuevos usuarios y su CAC. Comunidad/organico domina con el CAC mas bajo: el activo de 65k es la ventaja de AECODE frente a IA gratuita."],
  evid:["Evidence Rate","% de usuarios que suben evidencia real (entregable con rubrica). Es el cuello: sin evidencia no hay skill verificable, sin skill no hay NSM ni pago por outcome."],
  verif:["Verification Rate","% de evidencias aprobadas como skill verificada (AI + instructor). Muy bajo frustra; muy alto no discrimina calidad."],
  mau2:["MAU plataforma","Usuarios activos mensuales del Microlearning. Escalar MAU NO mejora el NSM (razon de calidad): crecer con NSM bajo amplia el problema."],
  conv:["Conversion a pago","% de MAU que paga. Benchmark: 2-5% freemium, 5-10% filtrado. Pequenas mejoras mueven mucho el MRR recurrente."],
  price:["Precio Pro","Precio mensual del plan Pro. Subirlo mejora el LTV/CAC directo (CAC constante): la palanca mas rapida de unit economics."],
  platmrr:["MRR plataforma","Ingreso recurrente real = MAU x conversion x precio. Lo que valora un inversionista; la caja de Live NO es MRR."],
  ltvcac:["LTV / CAC","Valor de vida &divide; costo de adquisicion. &gt;3x = negocio sano. Por debajo, cada cliente destruye margen."],
  runway:["Runway","Meses de operacion con la caja actual. &lt;12 enciende alarma; los fondos quieren pista para ejecutar la tesis."],
  payback:["CAC Payback","Meses para recuperar el CAC. Benchmark PMF &lt;12 meses; B2B sano &lt;9. Permite reinvertir rapido."],
  churn:["Churn mensual","% de suscriptores que cancelan al mes. Bajarlo de 8% a 5% sube fuertemente el LTV y el MRR neto."],
  ret1:["Retencion M1","% activos al mes 1. Mide activacion y valor inicial. Benchmark W4 &gt;20%."],
  f2p:["Free-to-paid","% de usuarios free elegibles que pasan a pago. Benchmark 2-5% freemium, 5-10% filtrado. Determina la viabilidad del modelo freemium."],
  path:["Ruta a $30k","Caja total proyectada (Live + Plataforma). Objetivo a 12 meses: $30k/mes con ~60% recurrente, invirtiendo el mix actual."]
};
var PRESETS={hoy:{evid:42,verif:69,mau:420,conv:7,price:29},beta:{evid:55,verif:78,mau:900,conv:10,price:29},escala:{evid:62,verif:85,mau:4200,conv:12,price:39}};
var COL={good:"var(--good)",watch:"var(--watch)",risk:"var(--risk)"};
var HEX={good:"#47CF78",watch:"#F0A030",risk:"#F2617A"};
''')

# ===================== JS: MAP DATA =====================
add(r'''/* ---- METRIC MAP DATA ---- */
var MAP_LAYERS=[
  {id:"inv",name:"Investigación",x:115,color:"#F0A030"},
  {id:"prod",name:"Producto",x:335,color:"#7C7EDF"},
  {id:"gro",name:"Growth",x:555,color:"#47CF78"},
  {id:"fin",name:"Finanzas",x:765,color:"#4465EE"},
  {id:"fun",name:"Fundraising",x:980,color:"#C5CFFA"}
];
var MAP_NODES=[
  {id:"nsm",layer:"nsm",cx:555,cy:46,label:"&#11088; North Star &middot; skills verificadas / MAU",val:"0.17 &rarr; 0.40",why:"La unica metrica que no se puede maquillar. Todo el sistema existe para subirla: producto que genera evidencia, growth que trae usuarios correctos, finanzas que la monetizan."},
  {id:"inv_bim",layer:"inv",cx:115,cy:165,label:"Escasez BIM",val:"~85M 2030",why:"El cuello estructural del sector AEC es la falta de talento BIM. Es la demanda que justifica una vertical: dolor real + disposicion a pagar."},
  {id:"inv_pca",layer:"inv",cx:115,cy:290,label:"Post-content age",val:"evidencia &gt; contenido",why:"Con IA el contenido es commodity. Lo defendible es demostrar competencia. Define que el producto debe producir evidencia, no videos."},
  {id:"inv_b2b",layer:"inv",cx:115,cy:415,label:"Tesis B2B/workforce",val:"~1/3 del capital",why:"El upskilling corporativo es la tesis VC mas resiliente. Marca la linea B2B como destino de monetizacion."},
  {id:"inv_peru",layer:"inv",cx:115,cy:525,label:"Perú epicentro",val:"mayor densidad LATAM",why:"Crack the Code, Laboratoria, Talently: Peru es reconocido como el ecosistema EdTech de mayor densidad. Ventaja de origen + cofinanciamiento no dilutivo."},
  {id:"prod_graph",layer:"prod",cx:335,cy:165,label:"Skill Graph AEC",val:"grafo por cargo",why:"El activo central: un grafo de skills por rol y seniority (BIM modeler, coordinador, planner...). No un catalogo de cursos."},
  {id:"prod_caps",layer:"prod",cx:335,cy:290,label:"Cápsulas + Rutas",val:"5-15 min",why:"Microlearning aplicado al puesto. Una skill accionable hoy por semana, no un programa largo."},
  {id:"prod_evid",layer:"prod",cx:335,cy:415,label:"Evidence Engine",val:"42% &rarr; 55%",why:"Cada skill exige un entregable real evaluado con rubrica. Es el corazon del moat y el driver directo del NSM."},
  {id:"prod_ai",layer:"prod",cx:335,cy:525,label:"AI Layer (5 capas)",val:"diag · tutor · eval",why:"IA como motor interno: diagnostico, tutoria, evaluacion de evidencia, inteligencia de demanda y operacion. No como pitch."},
  {id:"gro_comm",layer:"gro",cx:555,cy:165,label:"Comunidad (moat #1)",val:"65k + 8k WA",why:"El gremio AEC tiene identidad fuerte. La comunidad genera retencion, contenido, peer-review y boca a boca: lo que la IA no replica."},
  {id:"gro_act",layer:"gro",cx:555,cy:290,label:"Activación",val:"&gt;40% obj.",why:"% que llega a primer valor. Onboarding por identidad (quiero ser coordinador BIM), no por catalogo."},
  {id:"gro_f2p",layer:"gro",cx:555,cy:415,label:"Free-to-paid",val:"7% &rarr; 10%",why:"Diagnostico gratis + win rapido + ruta. Convierte la comunidad en suscriptores recurrentes."},
  {id:"gro_ret",layer:"gro",cx:555,cy:525,label:"Retención cohorte",val:"&gt;70% vs 12.6%",why:"Cohorte + accountability multiplican completion (MOOC mediana 12.6%). La estructura social, no el contenido, define el resultado."},
  {id:"fin_live",layer:"fin",cx:765,cy:200,label:"Live MRR",val:"80% &rarr; 50%",why:"Caja inmediata, confianza y contenido semilla. CAC bajisimo. Cuna que financia la construccion del recurrente."},
  {id:"fin_plat",layer:"fin",cx:765,cy:330,label:"Platform MRR",val:"20% &rarr; 50%",why:"El recurrente que compone mes a mes y que un fondo valora. Costo marginal ~0; margen que escala."},
  {id:"fin_marg",layer:"fin",cx:765,cy:460,label:"Margen combinado",val:"~62% &rarr; 78%",why:"Sube al invertir el mix hacia el recurrente. Es la senal de salud del delivery a escala."},
  {id:"fun_ltv",layer:"fun",cx:980,cy:200,label:"LTV / CAC",val:"3.1x (&gt;3)",why:"La señal clasica de unit economics sanos. Habilita escalar adquisicion con confianza."},
  {id:"fun_run",layer:"fun",cx:980,cy:330,label:"Runway",val:"10 &rarr; 15 mo",why:"Pista para ejecutar la tesis. La caja de Live extiende el runway mientras la Plataforma compone."},
  {id:"fun_nrr",layer:"fun",cx:980,cy:460,label:"NRR / Payback",val:"&gt;100% / &lt;12mo",why:"Expansion B2B (NRR &gt;100%) y eficiencia de capital. La narrativa que levanta capital hoy: AI-enabled, career-aligned."}
];
var MAP_EDGES=[
  ["inv_bim","prod_graph"],["inv_peru","prod_graph"],["inv_pca","prod_evid"],["inv_b2b","prod_caps"],["inv_pca","prod_ai"],
  ["prod_graph","gro_comm"],["prod_caps","gro_act"],["prod_evid","gro_ret"],["prod_evid","gro_f2p"],["prod_ai","gro_act"],
  ["gro_comm","fin_live"],["gro_act","fin_plat"],["gro_f2p","fin_plat"],["gro_ret","fin_plat"],["gro_comm","fin_marg"],
  ["fin_live","fun_run"],["fin_plat","fun_ltv"],["fin_plat","fun_nrr"],["fin_marg","fun_run"],
  ["prod_evid","nsm","up"],["gro_ret","nsm","up"],["fin_plat","nsm","up"],["fun_ltv","nsm","up"],
  ["fun_nrr","prod_ai","loop"],["gro_comm","inv_bim","loop"]
];
''')

# ===================== JS: STATE / COMPUTE / HELPERS =====================
add(r'''var KEY="aecode_metricsos_v4", S, firstPaint=true;
function num(x,f){var n=parseFloat(x);return isNaN(n)?(f===undefined?0:f):n;}
function clone(o){return JSON.parse(JSON.stringify(o));}
function load(){try{var r=localStorage.getItem(KEY);if(r)return merge(JSON.parse(r));}catch(e){}return clone(SEED);}
function merge(sv){var b=clone(SEED);try{
  if(sv.meta)b.meta.foco=sv.meta.foco||b.meta.foco;
  if(sv.star){b.star.skills=num(sv.star.skills,b.star.skills);b.star.mau=num(sv.star.mau,b.star.mau);b.star.target=num(sv.star.target,b.star.target);}
  if(sv.health)sv.health.forEach(function(h,i){if(b.health[i])b.health[i].v=num(h.v,b.health[i].v);});
  if(sv.agenda)sv.agenda.forEach(function(a,i){if(b.agenda[i])b.agenda[i].d=!!a.d;});
  if(sv.wins)b.wins=sv.wins.map(function(w){return{t:w.t||"",d:!!w.d};});
  if(sv.pitch)sv.pitch.forEach(function(p,i){if(b.pitch[i])b.pitch[i].d=!!p.d;});
}catch(e){}return b;}
function save(){try{S.meta.updated=Date.now();localStorage.setItem(KEY,JSON.stringify(S));stamp();}catch(e){}}
function stamp(){var el=document.getElementById("foco-stamp");if(el)el.textContent=S.meta.updated?"guardado "+new Date(S.meta.updated).toLocaleDateString("es-PE",{day:"2-digit",month:"short"}):"";}
function fmt(n){return Math.round(n).toLocaleString("en-US");}
function money(n){return "$"+fmt(n);}
function mk(n){if(Math.abs(n)>=1000){return "$"+(Math.round(n/100)/10)+"k";}return "$"+Math.round(n);}
function liveAt(i){return S.total[i]*(100-S.share[i])/100;}
function microAt(i){return S.total[i]*S.share[i]/100;}
function marginAt(i){var t=S.total[i];if(t<=0)return 0;return (liveAt(i)*0.58+microAt(i)*0.76)/t*100;}
function hStatus(h){return h.dir==="high"?(h.v>=h.target?"good":h.v>=h.target*0.9?"watch":"risk"):(h.v<=h.target?"good":h.v<=h.target*1.1?"watch":"risk");}
function nsmStatus(p){return p>=0.9?"good":p>=0.6?"watch":"risk";}
function compute(){
  var nsm=S.star.mau>0?S.star.skills/S.star.mau:0, pct=S.star.target>0?nsm/S.star.target:0;
  var hs=S.health.map(hStatus);
  var risks=hs.filter(function(x){return x==="risk";}).length, goods=hs.filter(function(x){return x==="good";}).length, watches=hs.filter(function(x){return x==="watch";}).length;
  var v,vc; if(risks===0&&goods>=S.health.length*0.7){v="Listo para levantar";vc="good";}else if(risks<=2){v="En preparación";vc="watch";}else{v="Aún no financiable";vc="risk";}
  return{nsm:nsm,pct:pct,nsmSt:nsmStatus(pct),risks:risks,goods:goods,watches:watches,v:v,vc:vc};
}
''')

# ===================== JS: CHART HELPERS =====================
add(r'''function svgLine(o){
  var W=760,H=o.h||250,pl=48,pr=16,pt=16,pb=26,labels=o.labels,n=labels.length,split=o.split,i;
  var all=[];o.series.forEach(function(s){all=all.concat(s.data);});
  var mx=Math.max.apply(null,all)*1.1||1,mn=0;
  function X(i){return pl+(W-pl-pr)*(i/(n-1));}
  function Y(v){return pt+(H-pt-pb)*(1-(v-mn)/(mx-mn));}
  var g="";
  for(var k=0;k<=4;k++){var gv=mx*k/4,gy=Y(gv);g+='<line x1="'+pl+'" y1="'+gy+'" x2="'+(W-pr)+'" y2="'+gy+'" stroke="rgba(58,64,101,.3)"/>';g+='<text x="'+(pl-7)+'" y="'+(gy+3)+'" text-anchor="end" font-size="9" fill="#7d86a8" font-family="JetBrains Mono">'+o.fmt(gv)+'</text>';}
  for(i=0;i<n;i+=3){g+='<text x="'+X(i)+'" y="'+(H-7)+'" text-anchor="middle" font-size="8" fill="#7d86a8" font-family="JetBrains Mono">'+labels[i]+'</text>';}
  if(split!=null){var sx=X(split-0.5);g='<rect x="'+sx+'" y="'+pt+'" width="'+(W-pr-sx)+'" height="'+(H-pt-pb)+'" fill="rgba(124,126,223,.05)"/>'+g;g+='<line x1="'+sx+'" y1="'+pt+'" x2="'+sx+'" y2="'+(H-pb)+'" stroke="rgba(124,126,223,.4)" stroke-dasharray="3 3"/><text x="'+(sx+4)+'" y="'+(pt+10)+'" font-size="8" fill="#C5CFFA" font-family="Space Grotesk">proyeccion</text>';}
  o.series.forEach(function(s){
    var sp=split!=null?split-1:n-1;
    if(s.fill){var d="M "+X(0)+" "+Y(s.data[0]);for(i=1;i<n;i++)d+=" L "+X(i)+" "+Y(s.data[i]);d+=" L "+X(n-1)+" "+Y(0)+" L "+X(0)+" "+Y(0)+" Z";g+='<path d="'+d+'" fill="url(#cg)"/>';}
    var dp="M "+X(0)+" "+Y(s.data[0]);for(i=1;i<=sp;i++)dp+=" L "+X(i)+" "+Y(s.data[i]);
    g+='<path d="'+dp+'" fill="none" stroke="'+s.color+'" stroke-width="2.2"/>';
    if(split!=null){var dd="M "+X(sp)+" "+Y(s.data[sp]);for(i=sp+1;i<n;i++)dd+=" L "+X(i)+" "+Y(s.data[i]);g+='<path d="'+dd+'" fill="none" stroke="'+s.color+'" stroke-width="2.2" stroke-dasharray="5 4" opacity=".85"/>';}
    g+='<circle cx="'+X(n-1)+'" cy="'+Y(s.data[n-1])+'" r="3" fill="'+s.color+'"/>';
  });
  return '<svg viewBox="0 0 '+W+' '+H+'" style="width:100%;height:auto;display:block"><defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="'+o.series[0].color+'" stop-opacity=".32"/><stop offset="100%" stop-color="'+o.series[0].color+'" stop-opacity="0"/></linearGradient></defs>'+g+'</svg>';
}
function svgStack(mode){
  var W=760,H=270,pl=44,pr=16,pt=16,pb=26,n=MONTHS.length,i;
  var live=[],plat=[];for(i=0;i<n;i++){live.push(liveAt(i));plat.push(microAt(i));}
  function X(i){return pl+(W-pl-pr)*(i/(n-1));}
  var mx;if(mode==="mix"){mx=100;}else{mx=0;for(i=0;i<n;i++)mx=Math.max(mx,S.total[i]);mx*=1.1;}
  function topLive(i){return mode==="mix"?(100-S.share[i]):live[i];}
  function topAll(i){return mode==="mix"?100:S.total[i];}
  function Y(v){return pt+(H-pt-pb)*(1-v/mx);}
  var g="";
  for(var k=0;k<=4;k++){var gv=mx*k/4,gy=Y(gv);g+='<line x1="'+pl+'" y1="'+gy+'" x2="'+(W-pr)+'" y2="'+gy+'" stroke="rgba(58,64,101,.3)"/>';g+='<text x="'+(pl-6)+'" y="'+(gy+3)+'" text-anchor="end" font-size="9" fill="#7d86a8" font-family="JetBrains Mono">'+(mode==="mix"?Math.round(gv)+"%":mk(gv))+'</text>';}
  for(i=0;i<n;i+=3){g+='<text x="'+X(i)+'" y="'+(H-7)+'" text-anchor="middle" font-size="8" fill="#7d86a8" font-family="JetBrains Mono">'+MONTHS[i]+'</text>';}
  var sx=X(SPLIT-0.5);g+='<rect x="'+sx+'" y="'+pt+'" width="'+(W-pr-sx)+'" height="'+(H-pt-pb)+'" fill="rgba(124,126,223,.05)"/>';
  g+='<line x1="'+sx+'" y1="'+pt+'" x2="'+sx+'" y2="'+(H-pb)+'" stroke="rgba(124,126,223,.4)" stroke-dasharray="3 3"/><text x="'+(sx+4)+'" y="'+(pt+10)+'" font-size="8" fill="#C5CFFA" font-family="Space Grotesk">proyeccion</text>';
  /* live area (bottom) */
  var dL="M "+X(0)+" "+Y(0);for(i=0;i<n;i++)dL+=" L "+X(i)+" "+Y(topLive(i));dL+=" L "+X(n-1)+" "+Y(0)+" Z";
  g+='<path d="'+dL+'" fill="rgba(68,101,238,.45)" stroke="#4465EE" stroke-width="1.5"/>';
  /* platform area (top, between live and total) */
  var dP="M "+X(0)+" "+Y(topLive(0));for(i=1;i<n;i++)dP+=" L "+X(i)+" "+Y(topLive(i));for(i=n-1;i>=0;i--)dP+=" L "+X(i)+" "+Y(topAll(i));dP+=" Z";
  g+='<path d="'+dP+'" fill="rgba(124,126,223,.5)" stroke="#7C7EDF" stroke-width="1.5"/>';
  /* markers: Jun (idx11) 80/20 and Dic (idx17) 50/50 */
  function mark(idx,txt){var x=X(idx);g+='<line x1="'+x+'" y1="'+pt+'" x2="'+x+'" y2="'+(H-pb)+'" stroke="rgba(238,243,248,.25)" stroke-dasharray="2 3"/><text x="'+x+'" y="'+(pt-2)+'" text-anchor="middle" font-size="9" fill="#EEF3F8" font-family="JetBrains Mono" font-weight="700">'+txt+'</text>';}
  mark(11,"80/20");mark(17,"50/50");
  return '<svg viewBox="0 0 '+W+' '+H+'" style="width:100%;height:auto;display:block">'+g+'</svg>';
}
''')

# ===================== JS: RENDER (summary, hybrid, programs) =====================
add(r'''function renderVerdict(C){document.getElementById("verdict").innerHTML='<span class="vd" style="background:'+COL[C.vc]+'"></span><b style="color:'+COL[C.vc]+'">'+C.v+'</b><span>'+C.goods+'&#10003; · '+C.watches+'~ · '+C.risks+'&#10007;</span>';}
function renderSummary(C){
  var i=SPLIT-1, tot=S.total[i], totPrev=S.total[i-1], mom=totPrev>0?(tot/totPrev-1)*100:0;
  var plat=microAt(i), marg=marginAt(i), run=S.health[7].v, proj=S.total[MONTHS.length-1];
  var nc=HEX[C.nsmSt];
  var cards=[
    {v:money(tot)+"/mo",l:"Caja total / mes",d:(mom>=0?"+":"")+mom.toFixed(0)+"% MoM",dc:(mom>=0?"var(--good)":"var(--risk)"),c:"var(--txt)"},
    {v:money(plat),l:"MRR recurrente",d:"plataforma · 20% del mix",dc:"var(--dim)",c:"var(--micro)"},
    {v:C.nsm.toFixed(2),l:"North Star (NSM)",d:Math.round(C.pct*100)+"% del obj.",dc:nc,c:nc},
    {v:marg.toFixed(0)+"%",l:"Margen combinado",d:"&rarr; 78% a escala",dc:"var(--dim)",c:"var(--green)"},
    {v:run+" mo",l:"Runway",d:"obj &ge;15",dc:(run>=12?"var(--good)":"var(--watch)"),c:(run>=12?"var(--good)":"var(--watch)")},
    {v:money(proj)+"/mo",l:"Proyección 12m",d:"~60% recurrente",dc:"var(--dim)",c:"var(--lavender)"}
  ];
  document.getElementById("kstrip").innerHTML=cards.map(function(c){return '<div class="kcard"><div class="kc-v" style="color:'+c.c+'">'+c.v+'</div><div class="kc-l">'+c.l+'</div><div class="kc-d" style="color:'+c.dc+'">'+c.d+'</div></div>';}).join("");
}
function renderHybrid(mode){
  document.getElementById("hyb-chart").innerHTML=svgStack(mode||"abs");
  var i=SPLIT-1;
  document.getElementById("hyb-legend").innerHTML=
    '<div class="it"><span class="sw" style="background:#4465EE"></span>Live <b>'+money(liveAt(i))+' · '+(100-S.share[i])+'%</b></div>'+
    '<div class="it"><span class="sw" style="background:#7C7EDF"></span>Plataforma <b>'+money(microAt(i))+' · '+S.share[i]+'%</b></div>';
}
function renderModels(){
  var i=SPLIT-1;
  var defs=[{key:"live",rev:liveAt(i),prev:liveAt(i-1),sh:100-S.share[i]},{key:"micro",rev:microAt(i),prev:microAt(i-1),sh:S.share[i]}];
  document.getElementById("model-split").innerHTML=defs.map(function(D){
    var m=S.models[D.key], mom=D.prev>0?(D.rev/D.prev-1)*100:0, ltvcac=(m.ltv/m.cac);
    var mm=[{l:"Margen",v:m.margin+"%"},{l:"ARPU",v:"$"+m.arpu+(D.key==="micro"?"/mo":"")},{l:"CAC",v:"$"+m.cac},{l:"LTV/CAC",v:ltvcac.toFixed(1)+"x"}];
    return '<div class="card model-card '+D.key+'">'+
      '<div class="model-head"><div class="model-ic" style="background:color-mix(in srgb,'+m.color+' 16%,transparent);color:'+m.color+'">'+m.ic+'</div>'+
      '<div><div class="model-name">'+m.name+'</div><span class="model-tag" style="background:color-mix(in srgb,'+m.color+' 14%,transparent);color:'+m.color+'">'+m.tag+'</span></div></div>'+
      '<div class="model-big"><span class="mv" style="color:'+m.color+'">'+money(D.rev)+'</span><span class="mg" style="color:'+(mom>=0?"var(--good)":"var(--risk)")+'">'+(mom>=0?"+":"")+mom.toFixed(0)+'% MoM</span></div>'+
      '<div class="model-sub">'+D.sh+'% del mix · '+(D.key==="micro"?"recurrente":"caja de cohortes")+'</div>'+
      '<div class="mm-grid">'+mm.map(function(x){return '<div class="mm"><div class="mm-l">'+x.l+'</div><div class="mm-v">'+x.v+'</div></div>';}).join("")+'</div></div>';
  }).join("");
}
function renderPrograms(){
  document.getElementById("programs").innerHTML=S.programs.map(function(p){
    return '<div class="prog"><div class="pic" style="background:color-mix(in srgb,'+p.c+' 16%,transparent);color:'+p.c+'">'+p.ic+'</div><div><div class="pn">'+p.n+'</div><div class="pd">'+p.d+'</div></div></div>';
  }).join("");
}
''')

# ===================== JS: RENDER (financials) =====================
add(r'''function renderFinancials(){
  var live=[],micro=[],total=[],margins=[],i;
  for(i=0;i<MONTHS.length;i++){live.push(liveAt(i));micro.push(microAt(i));total.push(S.total[i]);margins.push(marginAt(i));}
  document.getElementById("rev-legend").innerHTML=
    '<div class="it"><span class="ln" style="background:#7C7EDF"></span>Total <b>'+mk(total[SPLIT-1])+'</b></div>'+
    '<div class="it"><span class="ln" style="background:#8F60EA"></span>Plataforma <b>'+mk(micro[SPLIT-1])+'</b></div>'+
    '<div class="it"><span class="ln" style="background:#4465EE"></span>Live <b>'+mk(live[SPLIT-1])+'</b></div>';
  document.getElementById("rev-chart").innerHTML=svgLine({labels:MONTHS,split:SPLIT,h:250,fmt:mk,series:[{data:total,color:"#7C7EDF",fill:true},{data:micro,color:"#8F60EA"},{data:live,color:"#4465EE"}]});
  document.getElementById("margin-chart").innerHTML=svgLine({labels:MONTHS,split:SPLIT,h:200,fmt:function(v){return Math.round(v)+"%";},series:[{data:margins,color:"#47CF78",fill:true}]});
  var idx=SPLIT-1, tot=total[idx], prev=total[idx-1], mom=prev>0?(tot/prev-1)*100:0;
  var yr=total.slice(0,SPLIT).reduce(function(a,b){return a+b;},0);
  var side=[
    {l:"Caja / mes (hoy)",v:money(tot),d:(mom>=0?"+":"")+mom.toFixed(1)+"% vs mes previo",c:"var(--txt)"},
    {l:"Acumulado 12m (histórico)",v:mk(yr),d:"suma ultimos 12 meses",c:"var(--lavender)"},
    {l:"MRR recurrente",v:money(micro[idx]),d:Math.round(micro[idx]/tot*100)+"% del total · meta 50% Dic",c:"var(--micro)"},
    {l:"Proyección caja 12m",v:money(total[total.length-1]),d:"x"+(total[total.length-1]/tot).toFixed(1)+" vs hoy",c:"var(--green)"}
  ];
  document.getElementById("fin-side").innerHTML=side.map(function(s){return '<div class="fin-stat"><div class="fl">'+s.l+'</div><div class="fv" style="color:'+s.c+'">'+s.v+'</div><div class="fd">'+s.d+'</div></div>';}).join("");
  var gm=marginAt(idx)/100, gross=tot*gm, cogs=tot-gross, opex=Math.round(tot*0.55), ebitda=gross-opex;
  var pnl=[{k:"Ingresos",v:money(tot)},{k:"(-) Costo directo (COGS)",v:"-"+money(cogs)},{k:"= Margen bruto",v:money(gross)+" · "+Math.round(gm*100)+"%"},{k:"(-) Opex (equipo, mkt, ops)",v:"-"+money(opex)},{k:"= EBITDA estimado",v:(ebitda>=0?"":"-")+money(Math.abs(ebitda)),tot:true,c:ebitda>=0?"var(--good)":"var(--risk)"}];
  document.getElementById("pnl").innerHTML=pnl.map(function(r){return '<div class="pnl-row'+(r.tot?" tot":"")+'"><span class="pk">'+r.k+'</span><span class="pv" style="color:'+(r.c||"var(--txt)")+'">'+r.v+'</span></div>';}).join("");
}
function renderCohorts(){
  var c=S.cohorts;
  document.getElementById("cohort-table").innerHTML='<thead><tr><th>ID</th><th>Programa</th><th>Alumnos</th><th>Precio</th><th>Ingreso</th><th>Compl.</th><th>NPS</th><th>&rarr; Plataf.</th></tr></thead><tbody>'+
    c.map(function(x){var rev=x.n*x.price;return '<tr><td class="cid">'+x.id+'</td><td>'+x.name+'</td><td>'+x.n+'</td><td>$'+x.price+'</td><td>'+money(rev)+'</td><td>'+x.compl+'%</td><td>'+x.nps+'</td><td style="color:'+(x.conv>=25?"var(--good)":x.conv>=18?"var(--watch)":"var(--risk)")+'">'+x.conv+'%</td></tr>';}).join("")+'</tbody>';
  var tn=c.reduce(function(a,b){return a+b.n;},0), trev=c.reduce(function(a,b){return a+b.n*b.price;},0);
  var avgCompl=c.reduce(function(a,b){return a+b.compl;},0)/c.length, avgConv=c.reduce(function(a,b){return a+b.conv;},0)/c.length;
  var sums=[{v:tn,l:"Alumnos (6 cohortes)"},{v:money(trev),l:"Ingreso acumulado"},{v:Math.round(avgCompl)+"%",l:"Completacion media"},{v:Math.round(avgConv)+"%",l:"Conv. media &rarr; plataforma"}];
  document.getElementById("coh-sum").innerHTML=sums.map(function(s){return '<div class="coh-s"><div class="v" style="color:var(--live)">'+s.v+'</div><div class="l">'+s.l+'</div></div>';}).join("");
}
function renderChannels(){
  var ch=S.channels,mx=Math.max.apply(null,ch.map(function(x){return x.share;}));
  document.getElementById("channels").innerHTML=ch.map(function(x){var w=x.share/mx*100;return '<div class="channel-row"><div class="ch-name">'+x.name+'</div><div class="ch-track"><div class="ch-bar" data-w="'+w+'" style="background:'+x.color+'"></div></div><div class="ch-val">'+x.share+'% · CAC $'+x.cac+'</div></div>';}).join("");
  var blended=Math.round(ch.reduce(function(a,b){return a+b.cac*b.share/100;},0));
  var side=[{l:"Comunidad total",v:"65k",d:"+ 8k WhatsApp activo",c:"var(--violet)"},{l:"Leads calificados / mes",v:"576",d:"supuesto · iterar",c:"var(--lavender)"},{l:"CAC blended",v:"$"+blended,d:"ponderado · meta $30",c:"var(--amber)"},{l:"Crecimiento MoM",v:"~12%",d:"Live ~6% · Plataforma ~22%",c:"var(--green)"}];
  document.getElementById("growth-side").innerHTML=side.map(function(s){return '<div class="fin-stat"><div class="fl">'+s.l+'</div><div class="fv" style="color:'+s.c+'">'+s.v+'</div><div class="fd">'+s.d+'</div></div>';}).join("");
}
function renderKPI(){
  document.getElementById("kpi-grid").innerHTML=S.health.map(function(h,i){
    var st=hStatus(h),ratio=h.dir==="high"?h.v/h.target:(h.v>0?h.target/h.v:1),w=Math.max(6,Math.min(100,ratio*100));
    return '<div class="kpi '+(st==="good"?"g":st==="watch"?"w":"r")+'"><div class="kpi-top"><span class="kpi-name">'+h.k+' <span class="info" data-info="'+h.info+'">i</span></span><span class="kpi-dot" style="background:'+COL[st]+'"></span></div><div class="kpi-val" style="color:'+COL[st]+'">'+h.pre+'<span class="edit" data-edit="h'+i+'" style="width:'+(String(h.v).length+1)+'ch">'+h.v+'</span>'+h.unit+'</div><div class="kpi-tgt">obj '+(h.dir==="low"?"&le;":"&ge;")+h.pre+h.target+h.unit+'</div><div class="kpi-bar"><i data-w="'+w+'" style="background:'+COL[st]+'"></i></div></div>';
  }).join("");
}
function renderAgenda(){
  var done=S.agenda.filter(function(a){return a.d;}).length,pct=Math.round(done/S.agenda.length*100);
  document.getElementById("agenda").innerHTML=S.agenda.map(function(a,i){return '<li class="ag-item" data-ag="'+i+'"><span class="ag-check'+(a.d?" dn":"")+'">'+(a.d?'<svg width="9" height="9" viewBox="0 0 9 9"><polyline points="1.5,4.5 3.5,6.5 7.5,2.5" stroke="#0E1121" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>':'')+'</span><span class="ag-n">'+String(i+1).padStart(2,"0")+'</span><span class="ag-txt'+(a.d?" dn":"")+'">'+a.t+'</span></li>';}).join("");
  document.getElementById("ag-bar").style.width=pct+"%";
  document.getElementById("ag-foot").textContent=done+"/"+S.agenda.length+" completados · "+pct+"% listo para levantar";
}
function renderWins(){
  document.getElementById("wins").innerHTML=S.wins.map(function(w,i){return '<div class="win-item"><div class="win-check'+(w.d?" dn":"")+'" data-win="'+i+'">'+(w.d?'<svg width="9" height="9" viewBox="0 0 9 9"><polyline points="1.5,4.5 3.5,6.5 7.5,2.5" stroke="#0E1121" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>':'')+'</div><div class="win-txt'+(w.d?" dn":"")+'">'+w.t+'</div><span class="win-del" data-del="'+i+'">&times;</span></div>';}).join("");
}
function addWin(){var inp=document.getElementById("win-new"),t=inp.value.trim();if(!t)return;S.wins.push({t:t,d:false});inp.value="";save();renderWins();bindWins();}
''')

# ===================== JS: METRIC MAP RENDER =====================
add(r'''var MAPI={};MAP_NODES.forEach(function(nd){MAPI[nd.id]=nd;});
function layerColor(l){if(l==="nsm")return "#8F60EA";var f=MAP_LAYERS.filter(function(x){return x.id===l;})[0];return f?f.color:"#7C7EDF";}
function layerName(l){if(l==="nsm")return "North Star";var f=MAP_LAYERS.filter(function(x){return x.id===l;})[0];return f?f.name:"";}
function renderMap(){
  var inner=document.getElementById("mapinner"), svg=document.getElementById("mapedges");
  /* legend */
  document.getElementById("map-legend").innerHTML=MAP_LAYERS.map(function(L){return '<div class="it"><span class="dot" style="background:'+L.color+'"></span>'+L.name+'</div>';}).join("")+'<div class="it"><span class="dot" style="background:#8F60EA"></span>North Star</div>';
  /* bands + edges */
  var bands="";MAP_LAYERS.forEach(function(L){bands+='<rect x="'+(L.x-95)+'" y="76" width="190" height="510" rx="14" fill="'+L.color+'" opacity="0.04"/>';bands+='<text x="'+L.x+'" y="100" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="2" fill="'+L.color+'" font-family="Space Grotesk" opacity="0.85">'+L.name.toUpperCase()+'</text>';});
  var edges="";
  MAP_EDGES.forEach(function(e,idx){
    var a=MAPI[e[0]],b=MAPI[e[1]],type=e[2]||"flow";
    var x1=a.cx,y1=a.cy,x2=b.cx,y2=b.cy,d;
    if(type==="up"){d="M "+x1+" "+(y1-22)+" C "+x1+" "+(y1-70)+" "+x2+" "+(y2+60)+" "+x2+" "+(y2+22);}
    else if(type==="loop"){var my=Math.max(y1,y2)+70;d="M "+x1+" "+(y1+22)+" C "+x1+" "+my+" "+x2+" "+my+" "+x2+" "+(y2+22);}
    else{d="M "+(x1+80)+" "+y1+" C "+((x1+x2)/2)+" "+y1+" "+((x1+x2)/2)+" "+y2+" "+(x2-80)+" "+y2;}
    var cls=type==="up"?"e-up":type==="loop"?"e-loop":"e-flow";
    edges+='<path class="medge '+cls+'" data-a="'+e[0]+'" data-b="'+e[1]+'" d="'+d+'" fill="none" stroke="'+(type==="up"?"rgba(143,96,234,.3)":type==="loop"?"rgba(71,207,120,.22)":"rgba(124,126,223,.16)")+'" stroke-width="'+(type==="up"?1.6:1.4)+'"'+(type==="loop"?' stroke-dasharray="4 4"':'')+'/>';
  });
  svg.innerHTML=bands+edges;
  /* nodes */
  inner.querySelectorAll(".mnode").forEach(function(n){n.remove();});
  MAP_NODES.forEach(function(nd){
    var el=document.createElement("div");
    el.className="mnode"+(nd.layer==="nsm"?" nsm":"");
    el.dataset.id=nd.id;
    el.style.left=nd.cx+"px";el.style.top=nd.cy+"px";
    var bc=layerColor(nd.layer);
    if(nd.layer!=="nsm")el.style.borderColor="color-mix(in srgb,"+bc+" 45%,var(--border))";
    el.innerHTML='<div class="mn-l">'+nd.label+'</div><div class="mn-v">'+nd.val+'</div>';
    el.onclick=function(ev){ev.stopPropagation();selectMapNode(nd.id);};
    inner.appendChild(el);
  });
  mapDetail(null);
}
function selectMapNode(id){
  var connected={};connected[id]=true;
  document.querySelectorAll(".medge").forEach(function(p){
    var on=p.dataset.a===id||p.dataset.b===id;
    p.style.opacity=on?"1":"0.12";
    if(on){p.setAttribute("stroke-width","2.6");p.setAttribute("stroke", p.classList.contains("e-up")?"#8F60EA":p.classList.contains("e-loop")?"#47CF78":"#7C7EDF");connected[p.dataset.a]=true;connected[p.dataset.b]=true;}
    else{p.setAttribute("stroke-width","1.2");}
  });
  document.querySelectorAll(".mnode").forEach(function(n){
    n.classList.toggle("hl",n.dataset.id===id);
    n.classList.toggle("dim",!connected[n.dataset.id]);
  });
  mapDetail(id);
}
function mapDetail(id){
  var el=document.getElementById("map-detail");
  if(!id){el.innerHTML='<div class="md-top"><span class="md-name">Haz click en un nodo del mapa</span></div><div class="md-why">Cada capa alimenta a la siguiente. <b>Investigación</b> define el <b>producto</b>; el producto genera <b>growth</b>; el growth produce <b>finanzas</b>; las finanzas habilitan el <b>fundraising</b>. Dos loops cierran el sistema: el capital re-financia el producto, y la comunidad alimenta de vuelta la investigación de demanda. Todo se mide contra la <b style="color:var(--violet2)">North Star</b>.</div>';return;}
  var nd=MAPI[id],bc=layerColor(nd.layer);
  el.innerHTML='<div class="md-top"><span class="md-layer" style="background:color-mix(in srgb,'+bc+' 16%,transparent);color:'+bc+'">'+layerName(nd.layer)+'</span><span class="md-name">'+nd.label.replace("&#11088; ","")+'</span><span class="md-val">'+nd.val+'</span></div><div class="md-why">'+nd.why+'</div>';
}
function resetMap(){document.querySelectorAll(".medge").forEach(function(p){p.style.opacity="1";p.setAttribute("stroke-width",p.classList.contains("e-up")?"1.6":"1.4");p.setAttribute("stroke",p.classList.contains("e-up")?"rgba(143,96,234,.3)":p.classList.contains("e-loop")?"rgba(71,207,120,.22)":"rgba(124,126,223,.16)");});document.querySelectorAll(".mnode").forEach(function(n){n.classList.remove("hl","dim");});mapDetail(null);}
''')

# ===================== JS: BIND / SIM / INFO / TOUR / TOOLS / NAV / BOOT =====================
add(r'''function bindWins(){
  document.querySelectorAll('[data-win]').forEach(function(el){el.onclick=function(){S.wins[+el.dataset.win].d=!S.wins[+el.dataset.win].d;save();renderWins();bindWins();};});
  document.querySelectorAll('[data-del]').forEach(function(el){el.onclick=function(){S.wins.splice(+el.dataset.del,1);save();renderWins();bindWins();};});
}
function bindAgenda(){document.querySelectorAll('[data-ag]').forEach(function(el){el.onclick=function(){S.agenda[+el.dataset.ag].d=!S.agenda[+el.dataset.ag].d;save();renderAgenda();bindAgenda();};});}
function bindEdits(){
  document.querySelectorAll('.edit').forEach(function(inp){
    inp.onchange=function(){var key=inp.dataset.edit,val=num(inp.value,undefined);if(val===undefined){renderAll();return;}if(key==="skills")S.star.skills=val;else if(key==="mau")S.star.mau=val;else if(key.charAt(0)==="h")S.health[+key.slice(1)].v=val;save();renderAll();};
    inp.onfocus=function(){inp.select();};inp.onkeydown=function(e){if(e.key==="Enter"){e.preventDefault();inp.blur();}};
  });
}
function renderAll(){
  var C=compute();
  renderVerdict(C);renderSummary(C);renderHybrid(curMode);renderModels();renderPrograms();renderFinancials();renderCohorts();renderChannels();renderKPI();renderAgenda();renderWins();renderWcheck();
  bindEdits();bindWins();bindAgenda();bindWcheck();bindInfo();animateBars();firstPaint=false;
}
/* WAR ROOM: checklist + countdowns */
function renderWcheck(){var el=document.getElementById("wcheck");if(!el)return;el.innerHTML=S.pitch.map(function(p,i){return '<div class="wk'+(p.d?" done":"")+'" data-wk="'+i+'"><span class="box">'+(p.d?"&#10003;":"")+'</span><span>'+p.t+'</span></div>';}).join("");}
function bindWcheck(){document.querySelectorAll('[data-wk]').forEach(function(el){el.onclick=function(){var i=+el.dataset.wk;S.pitch[i].d=!S.pitch[i].d;save();renderWcheck();bindWcheck();};});}
var DEADLINES=[{id:"cd-emprelatam",t:"2026-06-17T23:59:59-05:00",done:"Postulaci&oacute;n cerrada &middot; esperar resultados"},{id:"cd-kaman",t:"2026-06-22T09:00:00-05:00",done:"&#127942; Es hoy. A ganar."}];
function pad2(n){return n<10?"0"+n:""+n;}
function renderCd(){DEADLINES.forEach(function(dl){var el=document.getElementById(dl.id);if(!el)return;var ms=new Date(dl.t)-Date.now();if(ms<=0){el.innerHTML='<div class="cd-done">'+dl.done+'</div>';return;}var d=Math.floor(ms/864e5),h=Math.floor(ms%864e5/36e5),m=Math.floor(ms%36e5/6e4);el.innerHTML='<div class="cd-u"><b>'+d+'</b><span>d&iacute;as</span></div><div class="cd-u"><b>'+pad2(h)+'</b><span>horas</span></div><div class="cd-u"><b>'+pad2(m)+'</b><span>min</span></div>';});}
function animateBars(){requestAnimationFrame(function(){document.querySelectorAll('.kpi-bar i,.ch-bar,.out-bar i').forEach(function(b){if(b.dataset.w!==undefined)b.style.width=b.dataset.w+"%";});});}
var curMode="abs";
function initHybToggle(){document.querySelectorAll(".hyb-toggle button").forEach(function(b){b.onclick=function(){curMode=b.dataset.mode;document.querySelectorAll(".hyb-toggle button").forEach(function(x){x.classList.toggle("active",x===b);});renderHybrid(curMode);};});}
/* SIM */
var SIM={ids:["evid","verif","mau","conv","price"]};
function simGet(){return{evid:+document.getElementById("s-evid").value,verif:+document.getElementById("s-verif").value,mau:+document.getElementById("s-mau").value,conv:+document.getElementById("s-conv").value,price:+document.getElementById("s-price").value};}
function simCalc(p){var k=0.17/(0.42*0.69);var nsm=(p.evid/100)*(p.verif/100)*k;var plat=p.mau*(p.conv/100)*p.price;var total=plat+4120;var ltv=p.price*0.1069;var run=Math.max(3,Math.min(36,10+(total-5150)/800));return{nsm:nsm,plat:plat,total:total,ltv:ltv,run:run};}
var BASE=simCalc(PRESETS.hoy);
function delta(now,base,suf){var d=now-base,s=d>=0?"+":"",col=d>=0?"var(--good)":"var(--risk)";if(Math.abs(d)<0.0001)return '<span style="color:var(--dim)">= base</span>';return '<span style="color:'+col+'">'+s+(suf==="$"?money(d):suf==="x"?d.toFixed(2)+"x":d.toFixed(2)+(suf||""))+' vs hoy</span>';}
function setBar(id,r){var el=document.getElementById(id);if(el)el.style.width=Math.max(4,Math.min(100,r*100))+"%";}
function runSim(){
  var p=simGet(),r=simCalc(p);
  document.getElementById("sv-evid").textContent=p.evid+"%";document.getElementById("sv-verif").textContent=p.verif+"%";document.getElementById("sv-mau").textContent=fmt(p.mau);document.getElementById("sv-conv").textContent=p.conv+"%";document.getElementById("sv-price").textContent="$"+p.price;
  document.getElementById("o-nsm").textContent=r.nsm.toFixed(2);document.getElementById("o-plat").textContent=money(r.plat);document.getElementById("o-ltv").textContent=r.ltv.toFixed(1)+"x";document.getElementById("o-run").textContent=Math.round(r.run)+" mo";
  document.getElementById("od-nsm").innerHTML=delta(r.nsm,BASE.nsm,"");document.getElementById("od-plat").innerHTML=delta(r.plat,BASE.plat,"$");document.getElementById("od-ltv").innerHTML=delta(r.ltv,BASE.ltv,"x");document.getElementById("od-run").innerHTML=delta(r.run,BASE.run," mo");
  setBar("ob-nsm",r.nsm/0.40);setBar("ob-plat",r.plat/8000);setBar("ob-ltv",r.ltv/3);setBar("ob-run",r.run/15);
  var v,vc,ic,blocker;
  if(r.nsm<0.25)blocker="Tu NSM aun es bajo. Sube Evidence y Verification Rate: escalar usuarios no lo arregla.";
  else if(r.ltv<3)blocker="LTV/CAC por debajo de 3x. Sube el precio Pro o reduce el CAC antes de levantar.";
  else if(r.plat<8000)blocker="MRR plataforma todavia pequeno. Necesitas mas MAU y conversion recurrente.";
  else blocker="Unit economics y NSM en zona sana: este escenario es defendible ante un inversionista.";
  if(r.nsm>=0.36&&r.ltv>=3&&r.plat>=8000){v="Listo para levantar";vc="var(--good)";ic="&#128640;";}
  else if(r.nsm>=0.25&&r.ltv>=2.5){v="En preparación";vc="var(--watch)";ic="&#128295;";}
  else{v="Aún no financiable";vc="var(--risk)";ic="&#9888;";}
  var sv=document.getElementById("sim-verdict");sv.style.borderColor=vc;sv.style.background="color-mix(in srgb,"+vc+" 9%,transparent)";
  document.getElementById("sv-icon").innerHTML=ic;document.getElementById("sv-icon").style.background="color-mix(in srgb,"+vc+" 16%,transparent)";
  var vt=document.getElementById("sv-verdict-t");vt.textContent=v;vt.style.color=vc;
  document.getElementById("sv-verdict-d").textContent="NSM "+r.nsm.toFixed(2)+" · "+money(r.plat)+" MRR plataforma · "+money(r.total)+" caja";
  document.getElementById("sim-note-txt").innerHTML=blocker;
  document.getElementById("path-chart").innerHTML=svgLine({labels:MONTHS,split:SPLIT,h:210,fmt:mk,series:[{data:S.total,color:"#47CF78",fill:true}]});
}
function applyPreset(name){var p=PRESETS[name];if(!p)return;document.getElementById("s-evid").value=p.evid;document.getElementById("s-verif").value=p.verif;document.getElementById("s-mau").value=p.mau;document.getElementById("s-conv").value=p.conv;document.getElementById("s-price").value=p.price;document.querySelectorAll(".preset").forEach(function(b){b.classList.toggle("active",b.dataset.preset===name);});runSim();}
function initSim(){SIM.ids.forEach(function(id){document.getElementById("s-"+id).addEventListener("input",function(){document.querySelectorAll(".preset").forEach(function(b){b.classList.remove("active");});runSim();});});document.querySelectorAll(".preset").forEach(function(b){b.onclick=function(){applyPreset(b.dataset.preset);};});runSim();}
/* INFO POPOVER */
var popEl,popT,popD;
function bindInfo(){document.querySelectorAll('.info[data-info]').forEach(function(el){el.onclick=function(e){e.stopPropagation();showPop(el,el.dataset.info);};});}
function showPop(el,key){var d=INFO[key];if(!d)return;popT.innerHTML=d[0];popD.innerHTML=d[1];popEl.classList.add("show");var r=el.getBoundingClientRect(),pw=popEl.offsetWidth,ph=popEl.offsetHeight;var left=Math.min(window.innerWidth-pw-12,Math.max(12,r.left-pw/2+r.width/2));var top=r.bottom+10;if(top+ph>window.innerHeight-12)top=r.top-ph-10;popEl.style.left=left+"px";popEl.style.top=Math.max(12,top)+"px";}
function hidePop(){popEl.classList.remove("show");}
/* TOUR */
var TOUR=[
  {sel:"#summary",t:"Resumen ejecutivo",d:"Los 6 numeros que importan: caja, MRR recurrente, NSM, margen, runway y proyeccion. El foco editable arriba a la derecha."},
  {sel:"#tesis",t:"Tesis & mercado",d:"Por que ahora: post-content age, escasez BIM, el titulo pierde poder y la cohorte multiplica completion. AECODE ataca la grieta exacta."},
  {sel:"#hybrid",t:"Modelo hibrido",d:"Un solo grafico: el mix migra de 80/20 a 50/50. Live financia y siembra; la Plataforma escala. Toggle Absoluto/Mix y mira los programas Live."},
  {sel:"#map",t:"Mapa de metricas",d:"El sistema completo: investigacion -> producto -> growth -> finanzas -> fundraising -> North Star. Click en cualquier nodo para ver su rol y conexiones."},
  {sel:"#financials",t:"Finanzas",d:"Ingresos por modelo, margen combinado y P&L, del pasado a la proyeccion."},
  {sel:"#cohorts",t:"Cohortes Live",d:"Cada programa (AI Construction Summit, AI Talent, BIM...). Ojo a la conversion a Plataforma: el motor de la migracion."},
  {sel:"#projection",t:"Simulador",d:"Mueve las palancas y mira el impacto en vivo sobre NSM, MRR, LTV/CAC, runway y veredicto. Presets Hoy / Beta / Escala."},
  {sel:"#health",t:"Fundabilidad",d:"Las 8 metricas que mira un fondo, con benchmarks de la investigacion. Edita; el semaforo dice que bloquea tu ronda. Todo se guarda en tu navegador."},
  {sel:"#warroom",t:"War Room",d:"Countdown en vivo a Emprelatam (17-jun) y al Demo Day de Kaman (22-jun), que evalua cada aceleradora, el checklist de batalla y las respuestas listas para el jurado. Con P entras al Pitch Mode."}
];
var tourI=0;
function startTour(){tourI=0;showTourStep();}
function showTourStep(){document.querySelectorAll(".tour-hl").forEach(function(e){e.classList.remove("tour-hl");});var s=TOUR[tourI],el=document.querySelector(s.sel);if(el){el.classList.add("tour-hl");el.scrollIntoView({behavior:"smooth",block:"center"});}document.getElementById("tour-t").textContent=s.t;document.getElementById("tour-d").textContent=s.d;document.getElementById("tour-step").textContent=(tourI+1)+" / "+TOUR.length;document.getElementById("tour-prev").style.visibility=tourI===0?"hidden":"visible";document.getElementById("tour-next").textContent=tourI===TOUR.length-1?"Terminar":"Siguiente";document.getElementById("tour-box").classList.add("show");}
function tourNext(){if(tourI>=TOUR.length-1){endTour();return;}tourI++;showTourStep();}
function tourPrev(){if(tourI>0){tourI--;showTourStep();}}
function endTour(){document.querySelectorAll(".tour-hl").forEach(function(e){e.classList.remove("tour-hl");});document.getElementById("tour-box").classList.remove("show");}
/* TOOLS */
function doExport(){var b=new Blob([JSON.stringify(S,null,2)],{type:"application/json"}),u=URL.createObjectURL(b),a=document.createElement("a");a.href=u;a.download="aecode-metrics-"+new Date().toISOString().slice(0,10)+".json";a.click();URL.revokeObjectURL(u);toast("Datos exportados");}
function doReset(){if(confirm("Volver a los valores semilla? Se perderan tus cambios.")){S=clone(SEED);save();firstPaint=true;renderAll();applyPreset("hoy");toast("Restablecido");}}
var toastT;function toast(m){var el=document.getElementById("toast");el.textContent=m;el.classList.add("show");clearTimeout(toastT);toastT=setTimeout(function(){el.classList.remove("show");},2200);}
/* PITCH MODE */
var pitchI=0,pitchOn=false;
function pitchSlides(){
  var C=compute(),h=S.health;
  return [
    {e:"AECODE &middot; Demo Day &middot; Jun 2026",big:'<img src="aecodito.png" class="p-logo" alt="AECODE">',head:'El <span class="grad">Skill Operating System</span> para la fuerza laboral AEC.',sub:"Skills verificadas con evidencia real de obra. Live Training financia y siembra; el Microlearning Platform OS escala. Esto no es un deck: son nuestras m&eacute;tricas operando en vivo.",src:"apalpan.github.io/aecode-startup-cockpit"},
    {e:"El problema",big:'<span style="color:var(--risk)">92%</span>',head:"de los proyectos de construcci&oacute;n termina con sobrecostos (+28% promedio).",sub:"La construcci&oacute;n es de los sectores menos digitalizados del planeta: el 96% de la data que genera una obra nunca se usa. El cuello de botella no es el software &mdash; es el talento (~85M de d&eacute;ficit BIM al 2030).",src:"Project Control Academy 2025 &middot; Klutch AI 2025 &middot; Korn Ferry"},
    {e:"Why now &middot; la brecha 2026",big:'75% <span style="color:var(--dim)">&rarr;</span> <span style="color:var(--risk)">12%</span>',head:"El 75% de firmas AEC ya 'usa' IA. Solo el 12% la usa en serio.",sub:"La adopci&oacute;n superficial explot&oacute; (+20 pts en un a&ntilde;o), solo 29% conf&iacute;a en su data y 94% va a invertir m&aacute;s. Esa brecha de capacidades &mdash; no de herramientas &mdash; es el mercado. Y nadie la est&aacute; cerrando en espa&ntilde;ol.",src:"Unanet AEC Inspire 2026 &middot; Datagrid 2025 &middot; Bluebeam 2025"},
    {e:"La soluci&oacute;n",big:'80/20 <span style="color:var(--dim)">&rarr;</span> <span style="color:var(--green)">50/50</span>',head:"Modelo h&iacute;brido: Live siembra, la Plataforma escala.",sub:"Cada cohorte Live produce c&aacute;psulas, r&uacute;bricas y casos reales que alimentan el Microlearning Platform OS. Skills verificadas con evidencia, no certificados de asistencia. Mix 80/20 hoy &rarr; 50/50 a diciembre. Conversi&oacute;n Live&rarr;Plataforma: 18%, meta 45%.",src:"el funnel propietario que nadie puede copiar"},
    {e:"Tracci&oacute;n",big:'<span class="grad">65k</span>',head:"miembros de comunidad. 8,000 activos en WhatsApp.",sub:"Completion de cohortes ~77% (6&times; el benchmark MOOC de 12.6%) &middot; NPS 66&ndash;78 &middot; MAU plataforma "+fmt(S.star.mau)+" &middot; ProInn&oacute;vate Hito 1 aprobado &middot; AI Construction Summit con el CIP.",src:"CAC comunidad $11 vs paid $62 &mdash; el moat es el gremio"},
    {e:"Unit economics",big:'<span style="color:var(--green)">'+h[0].v.toFixed(1)+'x</span>',head:"LTV/CAC. Payback en "+h[1].v+" meses.",sub:"Margen de plataforma "+h[2].v+"% &middot; free-to-paid "+h[4].v+"% &middot; runway "+h[7].v+" meses. Unit economics de SaaS vertical, no de academia online.",src:"benchmarks: LTV/CAC &gt;3x &middot; payback &lt;12m &middot; margen 75&ndash;90%"},
    {e:"North Star",big:'<span style="color:var(--violet2)">'+C.nsm.toFixed(2)+'</span>',head:"skills verificadas por usuario activo. Meta: "+S.star.target.toFixed(2)+".",sub:"Nuestro North Star no se puede maquillar: evidencia real aprobada &divide; usuarios activos. La palanca #1 es subir el Evidence Rate de 42% a 55% &mdash; todo este cockpit existe para ejecutar eso.",src:"NSM = Evidence Verification Rate"},
    {e:"La visi&oacute;n",big:'<span class="grad">$30k</span>',head:"al mes a jun-2027, ~60% recurrente.",sub:"AECODE ser&aacute; el pasaporte de habilidades de la fuerza laboral AEC en espa&ntilde;ol: skill graph + evidencias + credenciales verificables + employer loop. El dinero f&aacute;cil se acab&oacute; &mdash; gana la evidencia. Aud&iacute;tennos: este cockpit est&aacute; en vivo.",src:"presiona Esc y explora cualquier n&uacute;mero"}
  ];
}
function buildPitch(){
  var sl=pitchSlides();
  document.getElementById("p-slides").innerHTML=sl.map(function(s,i){return '<div class="pslide" data-ps="'+i+'"><div class="p-eyebrow">'+s.e+'</div><div class="p-big">'+s.big+'</div><h3 class="p-head">'+s.head+'</h3><p class="p-sub">'+s.sub+'</p><span class="src p-src">'+s.src+'</span></div>';}).join("");
  document.getElementById("p-dots").innerHTML=sl.map(function(_,i){return '<button data-pd="'+i+'" aria-label="Slide '+(i+1)+'"></button>';}).join("");
  document.querySelectorAll("[data-pd]").forEach(function(b){b.onclick=function(e){e.stopPropagation();pitchI=+b.dataset.pd;showSlide();};});
}
function showSlide(){
  var slides=document.querySelectorAll(".pslide"),n=slides.length;
  pitchI=Math.max(0,Math.min(n-1,pitchI));
  slides.forEach(function(s,i){s.classList.toggle("on",i===pitchI);});
  document.querySelectorAll("[data-pd]").forEach(function(b,i){b.classList.toggle("on",i===pitchI);});
  document.getElementById("p-count").textContent=(pitchI+1)+" / "+n;
  if(typeof anime!=="undefined"&&!window.matchMedia("(prefers-reduced-motion:reduce)").matches){var el=document.querySelector('.pslide[data-ps="'+pitchI+'"] .p-big');if(el)anime({targets:el,scale:[.94,1],opacity:[0,1],duration:550,easing:"easeOutCubic"});}
}
function startPitch(){pitchI=0;pitchOn=true;buildPitch();document.getElementById("pitch").classList.add("on");document.body.style.overflow="hidden";showSlide();}
function pitchNext(){if(pitchI<document.querySelectorAll(".pslide").length-1){pitchI++;showSlide();}else endPitch();}
function pitchPrev(){if(pitchI>0){pitchI--;showSlide();}}
function endPitch(){if(!pitchOn)return;pitchOn=false;document.getElementById("pitch").classList.remove("on");document.body.style.overflow="";}
/* COMMAND PALETTE */
function goSec(id){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth"});}
var CK_ACTS=[
  {ic:"&#9654;",t:"Iniciar Pitch Mode",k:"P",fn:function(){startPitch();}},
  {ic:"&#9737;",t:"Tour guiado",fn:function(){startTour();}},
  {ic:"&#9889;",t:"Simulador: preset Hoy",fn:function(){goSec("projection");applyPreset("hoy");}},
  {ic:"&#9889;",t:"Simulador: preset Meta Beta",fn:function(){goSec("projection");applyPreset("beta");}},
  {ic:"&#9889;",t:"Simulador: preset Escala 12m",fn:function(){goSec("projection");applyPreset("escala");}},
  {ic:"&#128190;",t:"Exportar datos (JSON)",fn:function(){doExport();}},
  {ic:"&#128229;",t:"Importar datos",fn:function(){document.getElementById("imp").click();}},
  {ic:"&#8634;",t:"Reset a valores semilla",fn:function(){doReset();}}
];
[["summary","Resumen"],["tesis","Tesis & Mercado"],["hybrid","Modelo Híbrido"],["map","Mapa de Métricas"],["financials","Finanzas"],["cohorts","Cohortes"],["growth","Growth"],["projection","Proyección / Simulador"],["health","Fundabilidad"],["warroom","War Room Aceleradoras"],["focus","Foco / Readiness"]].forEach(function(s){CK_ACTS.push({ic:"&#10148;",t:"Ir a: "+s[1],fn:function(){goSec(s[0]);}});});
var ckI=0,ckFil=CK_ACTS;
function ckNorm(s){return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");}
function openCmdk(){document.getElementById("cmdk").classList.add("on");var inp=document.getElementById("ck-in");inp.value="";ckRender("");setTimeout(function(){inp.focus();},40);}
function closeCmdk(){document.getElementById("cmdk").classList.remove("on");}
function toggleCmdk(){if(document.getElementById("cmdk").classList.contains("on"))closeCmdk();else openCmdk();}
function ckPaint(){document.querySelectorAll(".ck-it").forEach(function(it,i){it.classList.toggle("on",i===ckI);});var on=document.querySelector(".ck-it.on");if(on)on.scrollIntoView({block:"nearest"});}
function ckRun(i){var a=ckFil[i];if(!a)return;closeCmdk();setTimeout(a.fn,90);}
function ckRender(q){
  ckFil=CK_ACTS.filter(function(a){return ckNorm(a.t).indexOf(ckNorm(q))>-1;});ckI=0;
  var el=document.getElementById("ck-list");
  el.innerHTML=ckFil.length?ckFil.map(function(a,i){return '<div class="ck-it'+(i===0?" on":"")+'" data-ck="'+i+'"><span class="ic">'+a.ic+'</span><span>'+a.t+'</span>'+(a.k?'<kbd>'+a.k+'</kbd>':'')+'</div>';}).join(""):'<div class="ck-empty">Sin resultados</div>';
  document.querySelectorAll("[data-ck]").forEach(function(it){it.onclick=function(){ckRun(+it.dataset.ck);};it.onmousemove=function(){if(ckI!==+it.dataset.ck){ckI=+it.dataset.ck;ckPaint();}};});
}
function initCmdk(){
  var inp=document.getElementById("ck-in");
  inp.addEventListener("input",function(){ckRender(inp.value);});
  inp.addEventListener("keydown",function(e){
    if(e.key==="ArrowDown"){e.preventDefault();ckI=Math.min(ckFil.length-1,ckI+1);ckPaint();}
    else if(e.key==="ArrowUp"){e.preventDefault();ckI=Math.max(0,ckI-1);ckPaint();}
    else if(e.key==="Enter"){e.preventDefault();ckRun(ckI);}
  });
  document.getElementById("cmdk").addEventListener("click",function(e){if(e.target.id==="cmdk")closeCmdk();});
}
/* NAV / REVEAL / PARTICLES */
function initNav(){
  var bar=document.getElementById("bar");
  window.addEventListener("scroll",function(){bar.classList.toggle("scrolled",window.scrollY>40);document.getElementById("scroll-bar").style.width=(window.scrollY/(document.body.scrollHeight-window.innerHeight)*100)+"%";},{passive:true});
  document.querySelectorAll(".pill").forEach(function(p){p.onclick=function(){var t=document.getElementById(p.dataset.sec);if(t)t.scrollIntoView({behavior:"smooth"});};});
  var ids=["summary","tesis","hybrid","map","financials","cohorts","growth","projection","health","warroom","focus"];
  var so=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting)document.querySelectorAll(".pill").forEach(function(p){p.classList.toggle("active",p.dataset.sec===e.target.id);});});},{rootMargin:"-45% 0px -50% 0px"});
  ids.forEach(function(id){var el=document.getElementById(id);if(el)so.observe(el);});
}
function initReveal(){var o=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target);}});},{threshold:.06,rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".reveal").forEach(function(el,i){el.style.transitionDelay=Math.min(i*0.035,0.28)+"s";o.observe(el);});}
function initParticles(){
  var c=document.getElementById("bg-canvas");if(!c||window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  var ctx=c.getContext("2d"),W,H,pts,N=46,D=128,M={x:-9999,y:-9999};
  function mk2(){return{x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.27,vy:(Math.random()-.5)*.27,r:Math.random()*1.3+.5};}
  function init(){W=c.width=window.innerWidth;H=c.height=window.innerHeight;pts=[];for(var i=0;i<N;i++)pts.push(mk2());}
  function loop(){ctx.clearRect(0,0,W,H);for(var i=0;i<pts.length;i++){var p=pts[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;var dx=p.x-M.x,dy=p.y-M.y,dd=Math.sqrt(dx*dx+dy*dy);if(dd<86){p.vx+=dx/dd*.027;p.vy+=dy/dd*.027;}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle="rgba(124,126,223,.16)";ctx.fill();}for(var a=0;a<pts.length;a++)for(var b=a+1;b<pts.length;b++){var ex=pts[a].x-pts[b].x,ey=pts[a].y-pts[b].y,d=Math.sqrt(ex*ex+ey*ey);if(d<D){ctx.beginPath();ctx.moveTo(pts[a].x,pts[a].y);ctx.lineTo(pts[b].x,pts[b].y);ctx.strokeStyle="rgba(74,58,193,"+(.09*(1-d/D))+")";ctx.lineWidth=.6;ctx.stroke();}}requestAnimationFrame(loop);}
  window.addEventListener("resize",init);window.addEventListener("mousemove",function(e){M.x=e.clientX;M.y=e.clientY;},{passive:true});init();loop();
}
/* BOOT */
function boot(){
  popEl=document.getElementById("popover");popT=document.getElementById("pop-t");popD=document.getElementById("pop-d");
  S=load();
  var fc=document.getElementById("foco");fc.value=S.meta.foco||"";fc.addEventListener("input",function(e){S.meta.foco=e.target.value;save();});
  stamp();renderAll();renderMap();initHybToggle();initSim();initNav();initReveal();initParticles();initCmdk();renderCd();setInterval(renderCd,30000);
  var imp=document.getElementById("imp");if(imp)imp.addEventListener("change",function(e){var f=e.target.files[0];if(!f)return;var r=new FileReader();r.onload=function(){try{S=merge(JSON.parse(r.result));save();firstPaint=true;renderAll();toast("Datos importados");}catch(err){toast("Archivo no valido");}};r.readAsText(f);});
  document.addEventListener("click",function(){hidePop();resetMap();});
  document.addEventListener("keydown",function(e){
    if(e.key==="Escape"){hidePop();endTour();resetMap();endPitch();closeCmdk();return;}
    if((e.ctrlKey||e.metaKey)&&(e.key==="k"||e.key==="K")){e.preventDefault();toggleCmdk();return;}
    var tag=(e.target.tagName||"").toLowerCase();
    if(tag==="input"||tag==="textarea"||e.target.isContentEditable)return;
    if(pitchOn){
      if(e.key==="ArrowRight"||e.key===" "||e.key==="PageDown"){e.preventDefault();pitchNext();}
      else if(e.key==="ArrowLeft"||e.key==="PageUp"){e.preventDefault();pitchPrev();}
      return;
    }
    if(e.key==="p"||e.key==="P"){startPitch();}
  });
  if(typeof anime!=="undefined")anime({targets:"#bar",translateY:[-20,0],opacity:[0,1],duration:550,easing:"easeOutCubic"});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
</script>
</body>
</html>
''')

# ===================== WRITE =====================
html="".join(P)
with open("index.html","w",encoding="utf-8") as f:
    f.write(html)
print("OK index.html:", len(html), "chars (", round(len(html)/1024), "KB )")
