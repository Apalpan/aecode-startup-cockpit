# -*- coding: utf-8 -*-
# Generador del AECODE Startup Metrics OS (single-file HTML)
P = []
def add(s): P.append(s)

# ============================ HEAD + STYLE OPEN ============================
add(r'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>AECODE · Startup Metrics OS</title>
<meta name="description" content="Sistema operativo de métricas de AECODE: Live Training y Microlearning Platform OS, cohortes, finanzas, márgenes, unit economics, growth, escalabilidad y proyecciones del pasado al futuro. Editable y simulable."/>
<meta property="og:title" content="AECODE · Startup Metrics OS"/>
<meta property="og:description" content="Dos modelos, una sola fuente de verdad: métricas, finanzas, growth, escalabilidad y proyecciones."/>
<meta property="og:image" content="aecodito.png"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<style>
''')

# ============================ CSS (base) ============================
add(r''':root{
  --bg:#0E1121;--bg2:#0D0F1F;--nav:#0C0F29;--card:#222341;--border:#3A4065;
  --txt:#EEF3F8;--muted:#A2B4CB;--dim:#7d86a8;--lavender:#C5CFFA;
  --indigo:#4A3AC1;--violet:#7C7EDF;--violet2:#8F60EA;
  --blue:#4465EE;--green:#47CF78;--mint:#95E3B1;--amber:#F0A030;
  --good:#47CF78;--watch:#F0A030;--risk:#F2617A;
  --live:#4465EE;--micro:#7C7EDF;--ent:#47CF78;--cred:#95E3B1;
  --sp:clamp(52px,6.5vw,84px);
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;font-size:14px;line-height:1.6;color:var(--txt);background:var(--bg);-webkit-font-smoothing:antialiased;overflow-x:hidden}
#bg-canvas{position:fixed;inset:0;z-index:0;pointer-events:none}
.grain{position:fixed;inset:0;z-index:2;pointer-events:none;opacity:.02;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size:128px 128px}
body::before{content:'';position:fixed;inset:0;z-index:0;pointer-events:none;
  background:radial-gradient(ellipse 900px 520px at 90% -8%,rgba(74,58,193,.22) 0%,transparent 60%),
    radial-gradient(ellipse 620px 380px at 2% 4%,rgba(124,126,223,.08) 0%,transparent 55%)}
#scroll-bar{position:fixed;top:0;left:0;height:2px;z-index:300;width:0;background:linear-gradient(90deg,#4A3AC1,#7C7EDF,#47CF78);transition:width .08s linear}
@keyframes gradShift{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.35}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
.grad{background:linear-gradient(90deg,#4A3AC1,#7C7EDF,#8F60EA,#7C7EDF,#4A3AC1);background-size:250% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gradShift 5s ease infinite}
.wrap{max-width:1320px;margin:0 auto;padding:0 22px}
.section{padding:var(--sp) 0;position:relative;z-index:5;scroll-margin-top:118px}
.eyebrow{display:inline-flex;align-items:center;gap:9px;font-family:'Space Grotesk',sans-serif;font-size:10.5px;font-weight:700;letter-spacing:.26em;text-transform:uppercase;color:var(--violet);margin-bottom:14px}
.eyebrow::before{content:'';width:20px;height:2px;border-radius:2px;background:linear-gradient(90deg,var(--indigo),var(--violet))}
.section-h{font-family:'Space Grotesk',sans-serif;font-size:clamp(23px,3.2vw,36px);font-weight:700;line-height:1.12;letter-spacing:-.02em;margin-bottom:11px}
.section-p{font-size:clamp(13px,1.5vw,15.5px);color:var(--muted);line-height:1.64;max-width:720px}
.card{background:rgba(34,35,65,.58);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid var(--border);border-radius:17px;position:relative;overflow:hidden;padding:20px}
.card::before{content:'';position:absolute;inset:0 0 auto 0;height:1px;background:linear-gradient(90deg,transparent,rgba(124,126,223,.24),transparent)}
.card-eyebrow{display:flex;align-items:center;gap:8px;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:9.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--muted);margin-bottom:14px;flex-wrap:wrap}
.card-eyebrow .tick{width:15px;height:2px;border-radius:2px;background:linear-gradient(90deg,#4A3AC1,#7C7EDF)}
.mono{font-family:'JetBrains Mono',monospace}
''')

# ============================ CSS (bar/nav) ============================
add(r'''#bar{position:fixed;top:0;left:0;right:0;z-index:100;transition:background .35s,box-shadow .35s,border-color .35s;border-bottom:1px solid transparent}
#bar.scrolled{background:rgba(12,15,41,.93);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border-bottom:1px solid var(--border);box-shadow:0 4px 40px rgba(0,0,0,.35)}
.bar-in{display:flex;align-items:center;gap:11px;max-width:1320px;margin:0 auto;padding:10px 22px}
.bar-logo{display:flex;align-items:center;gap:9px;text-decoration:none;flex:0 0 auto}
.aecodito{width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid var(--violet);animation:floatY 3s ease-in-out infinite}
.bar-name{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;letter-spacing:.04em;line-height:1}
.bar-sub{font-size:8px;letter-spacing:.28em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-top:2px}
.verdict{display:flex;align-items:center;gap:7px;padding:5px 12px;border-radius:999px;border:1px solid var(--border);background:rgba(34,35,65,.72);cursor:default}
.verdict .vd{width:8px;height:8px;border-radius:50%;animation:blink 2s infinite}
.verdict b{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:10.5px;letter-spacing:.04em;text-transform:uppercase;white-space:nowrap}
.verdict span{font-size:9.5px;color:var(--muted)}
.pills{display:flex;gap:2px;margin-left:auto;overflow-x:auto;scrollbar-width:none}
.pills::-webkit-scrollbar{display:none}
.pill{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:11px;color:var(--muted);text-decoration:none;padding:6px 10px;border-radius:8px;transition:.2s;white-space:nowrap;cursor:pointer;border:none;background:transparent}
.pill:hover{color:var(--txt);background:rgba(124,126,223,.1)}
.pill.active{color:#fff;background:linear-gradient(135deg,rgba(74,58,193,.5),rgba(124,126,223,.4))}
.tools{display:flex;gap:5px;flex:0 0 auto}
.tbtn{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:10px;color:var(--muted);background:rgba(34,35,65,.6);border:1px solid var(--border);padding:6px 10px;border-radius:999px;cursor:pointer;transition:.2s;white-space:nowrap}
.tbtn:hover{color:#fff;background:linear-gradient(135deg,#4A3AC1,#7C7EDF);border-color:transparent}
.tbtn.primary{color:#fff;background:linear-gradient(135deg,#4A3AC1,#7C7EDF);border-color:transparent}
''')

# ============================ CSS (summary/hero) ============================
add(r'''#summary{padding-top:120px}
.sum-top{display:grid;grid-template-columns:1.3fr .7fr;gap:20px;align-items:end;margin-bottom:22px}
.hbadge{display:inline-flex;align-items:center;gap:9px;background:rgba(74,58,193,.16);border:1px solid rgba(124,126,223,.28);border-radius:999px;padding:5px 14px;font-family:'Space Grotesk',sans-serif;font-size:9.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--lavender);margin-bottom:16px}
.sum-h1{font-family:'Space Grotesk',sans-serif;font-size:clamp(26px,4vw,46px);font-weight:700;line-height:1.05;letter-spacing:-.03em;margin-bottom:14px}
.focus-box{background:rgba(74,58,193,.08);border:1px solid rgba(74,58,193,.22);border-radius:14px;padding:15px 17px}
.focus-lbl{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--violet);margin-bottom:7px;display:flex;justify-content:space-between}
textarea#foco{width:100%;min-height:70px;resize:vertical;background:rgba(13,15,31,.6);border:1px solid var(--border);border-radius:10px;color:var(--txt);font-family:'Plus Jakarta Sans',sans-serif;font-size:12.5px;line-height:1.5;padding:10px 11px;outline:none;transition:.2s}
textarea#foco:focus{border-color:var(--violet);box-shadow:0 0 0 3px rgba(124,126,223,.1)}
.kstrip{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}
.kcard{background:rgba(34,35,65,.55);border:1px solid var(--border);border-radius:14px;padding:13px 15px;position:relative;overflow:hidden}
.kcard::before{content:'';position:absolute;inset:0 0 auto 0;height:1px;background:linear-gradient(90deg,transparent,rgba(124,126,223,.3),transparent)}
.kc-v{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:23px;line-height:1}
.kc-l{font-family:'Space Grotesk',sans-serif;font-size:8.5px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:var(--muted);margin-top:5px}
.kc-d{font-family:'JetBrains Mono',monospace;font-size:9.5px;margin-top:3px}
''')

# ============================ CSS (model split) ============================
add(r'''.model-split{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:28px}
.model-card{padding:22px;position:relative;overflow:hidden}
.model-card.live{border-color:rgba(68,101,238,.4)}
.model-card.micro{border-color:rgba(124,126,223,.4)}
.model-head{display:flex;align-items:flex-start;gap:12px;margin-bottom:16px}
.model-ic{width:46px;height:46px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-size:23px;flex:0 0 auto}
.model-name{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;line-height:1.1}
.model-role{font-size:11.5px;color:var(--muted);margin-top:3px;line-height:1.4}
.model-tag{display:inline-block;margin-top:7px;font-family:'JetBrains Mono',monospace;font-size:9px;padding:3px 9px;border-radius:6px}
.model-big{display:flex;align-items:baseline;gap:10px;margin-bottom:4px}
.model-big .mv{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:34px;line-height:1}
.model-big .mg{font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700}
.model-sub{font-size:11px;color:var(--muted);margin-bottom:14px}
.model-spark{margin:6px 0 16px}
.mm-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.mm{background:rgba(13,15,31,.5);border:1px solid var(--border);border-radius:11px;padding:10px 12px}
.mm-l{font-size:8.5px;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);font-weight:600;display:flex;align-items:center;gap:5px}
.mm-v{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:17px;margin-top:4px}
''')

# ============================ CSS (charts) ============================
add(r'''.chart-card{padding:22px}
.chart-legend{display:flex;flex-wrap:wrap;gap:7px 16px;margin-bottom:12px}
.chart-legend .it{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--muted)}
.chart-legend .ln{width:14px;height:3px;border-radius:2px}
.chart-legend .it b{color:var(--txt);font-family:'JetBrains Mono',monospace}
.fin-grid{display:grid;grid-template-columns:1.6fr 1fr;gap:16px;margin-top:28px}
.fin-side{display:flex;flex-direction:column;gap:12px}
.fin-stat{background:rgba(34,35,65,.55);border:1px solid var(--border);border-radius:13px;padding:14px 16px;position:relative;overflow:hidden}
.fin-stat .fl{font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:600;display:flex;align-items:center;gap:5px}
.fin-stat .fv{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:25px;margin-top:5px}
.fin-stat .fd{font-size:11px;color:var(--muted);margin-top:3px}
.pnl-row{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px dashed rgba(58,64,101,.4);font-size:12.5px}
.pnl-row:last-child{border-bottom:none}
.pnl-row .pk{color:var(--muted)}
.pnl-row .pv{font-family:'JetBrains Mono',monospace;font-weight:700}
.pnl-row.tot{border-top:1px solid var(--border);border-bottom:none;margin-top:4px;padding-top:10px}
.pnl-row.tot .pk{color:var(--txt);font-weight:700}
''')

# ============================ CSS (cohorts/channels/uniteco/scale) ============================
add(r'''.cohort-wrap{overflow-x:auto;margin-top:14px}
.cohort-table{width:100%;border-collapse:collapse;font-size:12px;min-width:680px}
.cohort-table th{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);padding:9px 12px;border-bottom:1px solid var(--border);text-align:right;white-space:nowrap}
.cohort-table th:first-child,.cohort-table th:nth-child(2){text-align:left}
.cohort-table td{padding:10px 12px;border-bottom:1px solid rgba(58,64,101,.35);text-align:right;font-family:'JetBrains Mono',monospace;font-size:12px}
.cohort-table td:first-child,.cohort-table td:nth-child(2){text-align:left;font-family:'Plus Jakarta Sans',sans-serif}
.cohort-table td:nth-child(2){color:var(--muted)}
.cohort-table tr:hover td{background:rgba(34,35,65,.3)}
.cohort-table .cid{font-family:'JetBrains Mono',monospace;color:var(--blue);font-weight:700;font-size:11px}
.coh-sum{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:16px}
.coh-s{background:rgba(13,15,31,.5);border:1px solid var(--border);border-radius:11px;padding:12px 14px}
.coh-s .v{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:20px}
.coh-s .l{font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-top:4px}
.channel-row{display:grid;grid-template-columns:130px 1fr 96px;align-items:center;gap:12px;margin-bottom:9px}
.ch-name{font-size:12px;font-weight:600}
.ch-track{height:22px;background:rgba(13,15,31,.6);border:1px solid var(--border);border-radius:7px;overflow:hidden}
.ch-bar{height:100%;border-radius:6px;width:0;transition:width .8s ease}
.ch-val{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);text-align:right}
.ueco-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:28px}
.ue-card{padding:20px}
.ue-head{display:flex;align-items:center;gap:9px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:15px;margin-bottom:14px}
.ue-dot{width:11px;height:11px;border-radius:50%}
.ue-row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px dashed rgba(58,64,101,.35);font-size:12.5px}
.ue-row:last-child{border-bottom:none}
.ue-row .uk{color:var(--muted);display:flex;align-items:center;gap:6px}
.ue-row .uv{font-family:'JetBrains Mono',monospace;font-weight:700}
.scale-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:28px}
.scale-col{padding:22px}
.scale-tag{font-family:'JetBrains Mono',monospace;font-size:10px;padding:3px 10px;border-radius:6px;display:inline-block;margin-bottom:12px}
.scale-col h4{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;margin-bottom:10px}
.scale-li{display:flex;gap:9px;align-items:flex-start;font-size:12.5px;color:var(--muted);line-height:1.5;padding:5px 0}
.scale-li .si{flex:0 0 auto;margin-top:1px}
.migration{margin-top:16px;padding:18px 20px}
.mig-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:6px}
.mig{background:rgba(13,15,31,.5);border:1px solid var(--border);border-radius:12px;padding:13px 15px}
.mig .mv{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:19px}
.mig .ml{font-size:9px;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-top:4px}
.mig .mt{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--dim);margin-top:2px}
''')

# ============================ CSS (edit/info/popover) ============================
add(r'''.edit{font-family:'JetBrains Mono',monospace;background:transparent;border:none;border-bottom:1px dashed transparent;color:inherit;font-size:inherit;font-weight:inherit;padding:0 1px;cursor:text;transition:.15s;-moz-appearance:textfield;text-align:center}
.edit::-webkit-outer-spin-button,.edit::-webkit-inner-spin-button{-webkit-appearance:none}
.edit:hover{border-bottom-color:var(--border)}
.edit:focus{outline:none;border-bottom-color:var(--violet);color:var(--lavender)}
.info{width:14px;height:14px;border-radius:50%;border:1px solid var(--border);background:rgba(124,126,223,.12);color:var(--lavender);font-size:8.5px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;transition:.2s;font-family:'JetBrains Mono',monospace;line-height:1}
.info:hover{border-color:var(--violet);background:rgba(124,126,223,.28);transform:scale(1.12)}
#popover{position:fixed;z-index:520;max-width:300px;background:rgba(18,20,42,.99);border:1px solid var(--violet);border-radius:13px;padding:14px 15px;font-size:12.5px;line-height:1.6;color:var(--txt);box-shadow:0 14px 50px rgba(0,0,0,.55);opacity:0;pointer-events:none;transform:translateY(7px);transition:opacity .2s,transform .2s}
#popover.show{opacity:1;pointer-events:auto;transform:translateY(0)}
#popover .pop-t{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--violet);margin-bottom:6px}
#popover .pop-x{position:absolute;top:8px;right:10px;color:var(--muted);cursor:pointer;font-size:15px;line-height:1}
''')

# ============================ CSS (simulator/kpi/funnel/agenda) ============================
add(r'''#projection{background:rgba(13,15,31,.5)}
.sim-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:16px;margin-top:18px}
.presets{display:flex;gap:7px;margin-bottom:16px;flex-wrap:wrap}
.preset{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:10.5px;color:var(--muted);background:rgba(34,35,65,.6);border:1px solid var(--border);padding:6px 13px;border-radius:999px;cursor:pointer;transition:.2s}
.preset:hover{color:#fff;border-color:var(--violet)}
.preset.active{color:#fff;background:linear-gradient(135deg,#4A3AC1,#7C7EDF);border-color:transparent}
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
.out-bar{height:3px;border-radius:2px;background:rgba(58,64,101,.35);margin-top:8px;overflow:hidden}
.out-bar i{display:block;height:100%;border-radius:2px;width:0;transition:width .6s ease}
.sim-note{padding:11px 14px;background:rgba(74,58,193,.08);border:1px solid rgba(74,58,193,.22);border-radius:11px;font-size:11.5px;color:var(--muted);line-height:1.5;display:flex;gap:9px}
.sim-note-lbl{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:8px;letter-spacing:.14em;text-transform:uppercase;color:var(--violet);flex:0 0 auto}
.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:11px;margin-top:28px}
.kpi{border-radius:14px;padding:15px;position:relative;overflow:hidden;background:rgba(34,35,65,.55);border:1px solid var(--border);transition:transform .25s,border-color .25s}
.kpi:hover{transform:translateY(-3px);border-color:rgba(124,126,223,.4)}
.kpi.g{border-left:3px solid var(--good)}.kpi.w{border-left:3px solid var(--watch)}.kpi.r{border-left:3px solid var(--risk)}
.kpi-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;gap:6px}
.kpi-name{font-size:8.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);font-weight:600;display:flex;align-items:center;gap:5px}
.kpi-dot{width:7px;height:7px;border-radius:50%;flex:0 0 auto}
.kpi-val{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:22px;line-height:1;margin-bottom:3px}
.kpi-tgt{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--dim)}
.kpi-bar{height:3px;border-radius:2px;background:rgba(58,64,101,.3);margin-top:9px;overflow:hidden}
.kpi-bar i{display:block;height:100%;border-radius:2px;width:0;transition:width .7s ease}
.legend{margin-top:15px;display:flex;gap:15px;flex-wrap:wrap;align-items:center;font-size:11px;color:var(--muted)}
.legend .p{display:flex;align-items:center;gap:6px}
.legend .sd{width:8px;height:8px;border-radius:50%}
.ready-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:16px;margin-top:28px}
.agenda{list-style:none;display:flex;flex-direction:column;gap:2px}
.ag-item{display:flex;gap:10px;align-items:flex-start;padding:8px 9px;border-radius:9px;cursor:pointer;transition:.2s}
.ag-item:hover{background:rgba(124,126,223,.07)}
.ag-check{width:18px;height:18px;border-radius:6px;border:1.5px solid var(--border);flex:0 0 auto;margin-top:1px;display:flex;align-items:center;justify-content:center;transition:.2s}
.ag-check.dn{background:var(--green);border-color:var(--green)}
.ag-n{font-family:'JetBrains Mono',monospace;font-size:10.5px;color:var(--violet);font-weight:700;flex:0 0 auto;width:19px;margin-top:2px}
.ag-txt{font-size:12px;line-height:1.45;transition:.2s}
.ag-txt.dn{text-decoration:line-through;color:var(--muted);opacity:.6}
.ag-prog{height:4px;border-radius:3px;background:rgba(58,64,101,.35);margin-top:15px;overflow:hidden}
.ag-prog i{display:block;height:100%;border-radius:3px;background:linear-gradient(90deg,#4A3AC1,#47CF78);transition:width .5s ease;width:0}
.ag-foot{font-size:10px;color:var(--muted);margin-top:6px;font-family:'JetBrains Mono',monospace}
.win-item{display:flex;align-items:flex-start;gap:9px;padding:7px 0;border-bottom:1px dashed rgba(58,64,101,.4)}
.win-item:last-of-type{border-bottom:none}
.win-check{width:16px;height:16px;border-radius:5px;border:1.5px solid var(--border);cursor:pointer;flex:0 0 auto;margin-top:1px;display:flex;align-items:center;justify-content:center;transition:.2s}
.win-check.dn{background:var(--green);border-color:var(--green)}
.win-txt{flex:1;font-size:12px;line-height:1.4}
.win-txt.dn{text-decoration:line-through;color:var(--muted);opacity:.6}
.win-del{color:var(--border);cursor:pointer;font-size:15px;line-height:1;padding:0 2px}
.win-del:hover{color:var(--risk)}
.win-add{display:flex;gap:7px;margin-top:11px}
.win-input{flex:1;background:rgba(13,15,31,.7);border:1px dashed var(--border);border-radius:8px;padding:7px 10px;color:var(--txt);font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;outline:none}
.win-input:focus{border-color:var(--violet);border-style:solid}
.win-addbtn{padding:7px 12px;border-radius:999px;background:linear-gradient(135deg,#4A3AC1,#7C7EDF);border:none;color:#fff;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:11px;cursor:pointer;white-space:nowrap}
''')

# ============================ CSS (tour/toast/footer/responsive) ============================
add(r'''#tour-box{position:fixed;z-index:560;left:50%;bottom:24px;transform:translateX(-50%) translateY(20px);max-width:430px;width:calc(100% - 40px);background:rgba(18,20,42,.99);border:1px solid var(--violet);border-radius:16px;padding:19px 21px;box-shadow:0 18px 64px rgba(0,0,0,.6);opacity:0;pointer-events:none;transition:opacity .3s,transform .3s}
#tour-box.show{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0)}
#tour-box .tt{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:15px;margin-bottom:7px}
#tour-box .td{font-size:12.5px;color:var(--muted);line-height:1.55;margin-bottom:15px}
#tour-box .tnav{display:flex;align-items:center;gap:8px}
#tour-box .tstep{font-family:'JetBrains Mono',monospace;font-size:10.5px;color:var(--muted);margin-right:auto}
.tour-hl{position:relative;z-index:540;border-radius:18px;box-shadow:0 0 0 3px var(--violet),0 0 0 9999px rgba(8,10,22,.82);transition:box-shadow .3s}
.tbtn-s{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:11.5px;padding:7px 15px;border-radius:999px;cursor:pointer;border:1px solid var(--border);background:transparent;color:var(--txt)}
.tbtn-s.primary{background:linear-gradient(135deg,#4A3AC1,#7C7EDF);border-color:transparent;color:#fff}
#toast{position:fixed;bottom:22px;right:22px;z-index:600;background:rgba(18,20,42,.98);border:1px solid var(--violet);border-radius:12px;padding:11px 17px;font-size:12px;color:var(--txt);box-shadow:0 10px 40px rgba(0,0,0,.5);opacity:0;transform:translateY(14px);transition:opacity .3s,transform .3s;pointer-events:none}
#toast.show{opacity:1;transform:translateY(0)}
.reveal{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}
.reveal.in{opacity:1;transform:translateY(0)}
footer{position:relative;z-index:5;border-top:1px solid var(--border);padding:24px 0;margin-top:34px}
.foot-in{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;max-width:1320px;margin:0 auto;padding:0 22px}
.foot-brand{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:14px}
.foot-copy{font-size:10px;color:var(--dim);font-family:'JetBrains Mono',monospace}
.foot-links{display:flex;gap:15px}
.foot-links a{font-size:11px;color:var(--muted);text-decoration:none}
.foot-links a:hover{color:var(--txt)}
@media(max-width:1080px){
  .sum-top,.fin-grid,.sim-grid,.ready-grid{grid-template-columns:1fr}
  .kstrip{grid-template-columns:repeat(3,1fr)}
  .model-split,.ueco-grid,.scale-grid{grid-template-columns:1fr}
  .kpi-grid{grid-template-columns:repeat(3,1fr)}
  .coh-sum{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:720px){
  .pills{display:none}.bar-sub{display:none}.verdict span{display:none}
  .kstrip,.kpi-grid{grid-template-columns:repeat(2,1fr)}
  .mig-grid{grid-template-columns:1fr}
  .channel-row{grid-template-columns:96px 1fr 70px}
}
@media(max-width:460px){.kstrip,.kpi-grid,.out-grid,.mm-grid,.coh-sum{grid-template-columns:1fr}}
''')

add(r'''</style>
</head>
<body>
<canvas id="bg-canvas"></canvas>
<div class="grain"></div>
<div id="scroll-bar"></div>
<div id="popover"><span class="pop-x" onclick="hidePop()">&times;</span><div class="pop-t" id="pop-t"></div><div id="pop-d"></div></div>
<div id="toast"></div>
<div id="tour-box"><div class="tt" id="tour-t"></div><div class="td" id="tour-d"></div><div class="tnav"><span class="tstep" id="tour-step"></span><button class="tbtn-s" id="tour-prev" onclick="tourPrev()">Atrás</button><button class="tbtn-s primary" id="tour-next" onclick="tourNext()">Siguiente</button></div></div>
''')

# ============================ COMMAND BAR ============================
add(r'''<div id="bar"><div class="bar-in">
  <a href="#summary" class="bar-logo"><img src="aecodito.png" class="aecodito" alt="Aecodito"><span><span class="bar-name"><span class="grad">AECODE</span></span><span class="bar-sub">Startup Metrics OS</span></span></a>
  <div class="verdict" id="verdict"></div>
  <nav class="pills" id="pills">
    <a class="pill" data-sec="summary">Resumen</a>
    <a class="pill" data-sec="models">Modelos</a>
    <a class="pill" data-sec="financials">Finanzas</a>
    <a class="pill" data-sec="cohorts">Cohortes</a>
    <a class="pill" data-sec="uniteco">Unit Econ</a>
    <a class="pill" data-sec="growth">Growth</a>
    <a class="pill" data-sec="scalability">Escala</a>
    <a class="pill" data-sec="projection">Proyección</a>
    <a class="pill" data-sec="health">Fundabilidad</a>
    <a class="pill" data-sec="focus">Foco</a>
  </nav>
  <div class="tools">
    <button class="tbtn primary" onclick="startTour()">&#9737; Tour</button>
    <button class="tbtn" onclick="doExport()">Exportar</button>
    <button class="tbtn" onclick="document.getElementById('imp').click()">Importar</button>
    <button class="tbtn" onclick="doReset()">Reset</button>
    <input type="file" id="imp" accept="application/json" hidden>
  </div>
</div></div>
''')

# ============================ SUMMARY ============================
add(r'''<section id="summary" class="section">
  <div class="wrap">
    <div class="sum-top">
      <div class="reveal">
        <div class="hbadge"><span class="grad">Learning OS</span> &middot; AEC &middot; Latam &middot; Jun 2026</div>
        <h1 class="sum-h1">Dos modelos. Una sola <span class="grad">fuente de verdad</span>.</h1>
        <p class="section-p">Todas las métricas de <b style="color:var(--live)">Live Training</b> (cohortes) y <b style="color:var(--micro)">Microlearning Platform OS</b>: finanzas, márgenes, unit economics, growth, escalabilidad y proyección del pasado a futuro. Edita cualquier número y simula. <span style="color:var(--dim)">Valores marcados como supuestos &mdash; iteramos.</span></p>
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

# ============================ MODELS ============================
add(r'''<section id="models" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Los Dos Motores</div><h2 class="section-h">Live Training vs Microlearning Platform OS</h2><p class="section-p">El modelo híbrido de AECODE: Live genera caja, confianza y contenido semilla hoy; la Plataforma escala con MRR recurrente y alto margen mañana. La tesis es migrar el peso del primero al segundo.</p></div>
    <div class="model-split" id="model-split"></div>
  </div>
</section>
''')

# ============================ FINANCIALS ============================
add(r'''<section id="financials" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Finanzas &middot; del pasado a la proyección</div><h2 class="section-h">Ingresos, MRR y márgenes: 12 meses atrás &rarr; 12 adelante.</h2><p class="section-p">La línea sólida es histórico; la punteada, proyección. La zona sombreada marca el futuro. El motor recurrente (Microlearning) cruza y supera a Live: ahí está la escala.</p></div>
    <div class="fin-grid">
      <div class="card chart-card reveal">
        <div class="card-eyebrow"><span class="tick"></span>Ingresos mensuales por modelo <span class="info" data-info="rev">i</span></div>
        <div class="chart-legend" id="rev-legend"></div>
        <div id="rev-chart"></div>
      </div>
      <div class="fin-side reveal" id="fin-side"></div>
    </div>
    <div class="fin-grid" style="margin-top:16px">
      <div class="card chart-card reveal">
        <div class="card-eyebrow"><span class="tick"></span>Margen bruto combinado <span class="info" data-info="margin">i</span> &middot; sube con el mix recurrente</div>
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

# ============================ COHORTS ============================
add(r'''<section id="cohorts" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Live Training &middot; Analítica de Cohortes</div><h2 class="section-h">Cada cohorte: alumnos, ingreso, completación y migración.</h2><p class="section-p">El detalle operativo del modelo Live. La métrica clave es <b>&rarr; Plataforma</b>: qué % de cada cohorte migra al Microlearning recurrente. Subir esa conversión (hoy ~21%, meta 45%) es el motor de la migración del modelo.</p></div>
    <div class="card reveal">
      <div class="card-eyebrow"><span class="tick"></span>Cohortes recientes</div>
      <div class="cohort-wrap"><table class="cohort-table" id="cohort-table"></table></div>
      <div class="coh-sum" id="coh-sum"></div>
    </div>
  </div>
</section>
''')

# ============================ UNIT ECONOMICS ============================
add(r'''<section id="uniteco" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Unit Economics</div><h2 class="section-h">La economía por usuario de cada modelo.</h2><p class="section-p">Live tiene CAC bajísimo (comunidad) pero margen y LTV limitados por ser people-bound. La Plataforma tiene CAC más alto pero margen y LTV que escalan. Edita los valores para ver tu realidad.</p></div>
    <div class="ueco-grid" id="ueco-grid"></div>
  </div>
</section>
''')

# ============================ GROWTH ============================
add(r'''<section id="growth" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Growth &middot; Marketing</div><h2 class="section-h">De dónde vienen los usuarios y a qué costo.</h2><p class="section-p">65k de comunidad y 8k en WhatsApp son el activo de adquisición. El canal comunidad/orgánico domina con el CAC más bajo. El loop de crecimiento: Live &rarr; cápsulas &rarr; Plataforma &rarr; comunidad &rarr; más Live.</p></div>
    <div class="fin-grid">
      <div class="card reveal">
        <div class="card-eyebrow"><span class="tick"></span>Canales de adquisición <span class="info" data-info="channels">i</span> &middot; share y CAC</div>
        <div id="channels"></div>
      </div>
      <div class="fin-side reveal" id="growth-side"></div>
    </div>
    <div class="card reveal" style="margin-top:16px">
      <div class="card-eyebrow"><span class="tick"></span>Loop de crecimiento</div>
      <div style="font-size:13px;line-height:1.7;color:var(--muted)">
        <b style="color:var(--live)">1. Live Training</b> capta de la comunidad a bajo CAC y genera caja + confianza &nbsp;&rarr;&nbsp;
        <b style="color:var(--lavender)">2. Cada cohorte produce cápsulas y rúbricas</b> reutilizables &nbsp;&rarr;&nbsp;
        <b style="color:var(--micro)">3. Microlearning Platform OS</b> convierte ese contenido en MRR recurrente y Skill Passport &nbsp;&rarr;&nbsp;
        <b style="color:var(--green)">4. Los skills verificados</b> alimentan la comunidad (prueba social) &nbsp;&rarr;&nbsp; vuelve al paso 1, ahora más barato y más grande.
      </div>
    </div>
  </div>
</section>
''')

# ============================ SCALABILITY ============================
add(r'''<section id="scalability" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Escalabilidad</div><h2 class="section-h">Qué escala y qué no &mdash; y cómo migramos el peso.</h2><p class="section-p">La diferencia estructural entre los dos modelos define la estrategia: cosechar Live para financiar y sembrar, mientras se construye el motor exponencial de la Plataforma.</p></div>
    <div class="scale-grid">
      <div class="card scale-col reveal" style="border-color:rgba(68,101,238,.35)">
        <span class="scale-tag" style="background:rgba(68,101,238,.15);color:var(--live)">Crecimiento lineal</span>
        <h4>Live Training</h4>
        <div class="scale-li"><span class="si">&#9650;</span><span>Ingreso &prop; horas de instructor &mdash; cada peso extra cuesta tiempo humano.</span></div>
        <div class="scale-li"><span class="si">&#9650;</span><span>Margen techo ~58-62%: no baja de ahí por costo de instructor + ops.</span></div>
        <div class="scale-li"><span class="si">&#9650;</span><span>CAC bajísimo y caja inmediata: ideal como cuña y validación.</span></div>
        <div class="scale-li"><span class="si">&#9650;</span><span>Riesgo: dependencia de personas y de cada lanzamiento.</span></div>
      </div>
      <div class="card scale-col reveal" style="border-color:rgba(124,126,223,.4)">
        <span class="scale-tag" style="background:rgba(124,126,223,.15);color:var(--micro)">Crecimiento exponencial</span>
        <h4>Microlearning Platform OS</h4>
        <div class="scale-li"><span class="si" style="color:var(--green)">&#9650;</span><span>Costo marginal ~0: un usuario más casi no cuesta.</span></div>
        <div class="scale-li"><span class="si" style="color:var(--green)">&#9650;</span><span>Margen se expande con escala hacia 80%+.</span></div>
        <div class="scale-li"><span class="si" style="color:var(--green)">&#9650;</span><span>MRR recurrente compone mes a mes &mdash; el activo que valora un fondo.</span></div>
        <div class="scale-li"><span class="si" style="color:var(--green)">&#9650;</span><span>Reto: activación y evidencia (el cuello del NSM).</span></div>
      </div>
    </div>
    <div class="card migration reveal">
      <div class="card-eyebrow"><span class="tick"></span>Motor de migración Live &rarr; Plataforma</div>
      <div class="mig-grid" id="mig-grid"></div>
    </div>
  </div>
</section>
''')

# ============================ PROJECTION / SIMULATOR ============================
add(r'''<section id="projection" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Proyección &middot; Simulador</div><h2 class="section-h">Mueve una palanca, proyecta el negocio.</h2><p class="section-p">Arrastra los sliders y mira el impacto en vivo sobre NSM, MRR recurrente, LTV/CAC, runway y el veredicto de fundabilidad. Aprende qué palanca mueve más tu caso. Presets: Hoy / Meta Beta / Escala 12m.</p></div>
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
        <div class="slider-row"><div class="slider-top"><span class="slider-name">MAU plataforma <span class="info" data-info="mau2">i</span></span><span class="slider-val" id="sv-mau">420</span></div><input type="range" id="s-mau" min="200" max="6000" value="420" step="20"><div class="slider-help">Escalar usuarios NO arregla el NSM (es una razón de calidad).</div></div>
        <div class="slider-row"><div class="slider-top"><span class="slider-name">Conversión a pago <span class="info" data-info="conv">i</span></span><span class="slider-val" id="sv-conv">7%</span></div><input type="range" id="s-conv" min="2" max="25" value="7"><div class="slider-help">% de MAU que paga suscripción.</div></div>
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
      <div class="card-eyebrow"><span class="tick"></span>Ruta a $30k MRR <span class="info" data-info="path">i</span> &middot; MRR total proyectado</div>
      <div id="path-chart"></div>
    </div>
  </div>
</section>
''')

# ============================ HEALTH ============================
add(r'''<section id="health" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Fundabilidad</div><h2 class="section-h">Las 8 métricas que mira un inversionista.</h2><p class="section-p">Tu realidad actual (editable). El semáforo dice qué bloquea una ronda. Toca la <span class="info" style="cursor:default">i</span> de cada tarjeta para entender el umbral.</p></div>
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

# ============================ FOCUS / AGENDA ============================
add(r'''<section id="focus" class="section">
  <div class="wrap">
    <div class="reveal"><div class="eyebrow">Enfoque &middot; Readiness</div><h2 class="section-h">Enfoque del negocio y agenda para ser financiable.</h2><p class="section-p">La tesis es clara: <b style="color:var(--micro)">migrar el mix hacia Microlearning recurrente</b> mientras Live financia y siembra. La palanca número uno hoy: subir el Evidence Rate. Marca tu progreso.</p></div>
    <div class="ready-grid">
      <div class="card reveal"><div class="card-eyebrow"><span class="tick"></span>Agenda de Readiness (10 puntos)</div><ul class="agenda" id="agenda"></ul><div class="ag-prog"><i id="ag-bar"></i></div><div class="ag-foot" id="ag-foot"></div></div>
      <div class="card reveal"><div class="card-eyebrow"><span class="tick"></span>Quick Wins &middot; Esta Semana</div><div id="wins"></div><div class="win-add"><input class="win-input" id="win-new" placeholder="Agregar prioridad..." maxlength="90"><button class="win-addbtn" onclick="addWin()">+ Agregar</button></div></div>
    </div>
  </div>
</section>
''')

# ============================ FOOTER ============================
add(r'''<footer><div class="foot-in">
  <div class="foot-brand"><span class="grad">AECODE</span> &middot; Startup Metrics OS</div>
  <div class="foot-links"><a href="#summary">Resumen</a><a href="#models">Modelos</a><a href="#financials">Finanzas</a><a href="#projection">Proyección</a></div>
  <div class="foot-copy">v3 &middot; 2026 &middot; data editable · supuestos marcados · iteramos</div>
</div></footer>
''')

# ============================ JS: DATA ============================
add(r'''<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
"use strict";
var MONTHS=["Jul'25","Ago","Sep","Oct","Nov","Dic","Ene'26","Feb","Mar","Abr","May","Jun","Jul'26","Ago","Sep","Oct","Nov","Dic","Ene'27","Feb","Mar","Abr","May","Jun'27"];
var SPLIT=12; /* index del primer mes proyectado; idx 11 = hoy (Jun 2026) */
var SEED={
  meta:{foco:"Subir el Evidence Rate de 42% a 55%. Es el cuello que separa a AECODE de un catálogo de cursos: sin evidencia no hay skill verificable, no hay NSM, no hay pago ligado a outcome.",updated:0},
  star:{skills:72,mau:420,target:0.40},
  series:{
    live: [820,980,1150,1320,1500,1780,2050,2300,2520,2740,2920,3090, 3200,3350,3500,3650,3900,4100,4400,4700,5100,5600,6200,7500],
    micro:[0,60,140,240,360,510,680,820,940,1050,1170,1288, 1550,1950,2500,3200,4100,5300,6800,8700,10800,13000,15400,18000],
    ent:  [0,0,0,0,80,120,180,250,320,400,470,515, 640,780,950,1150,1400,1700,2050,2350,2600,2780,2900,3000],
    cred: [0,0,40,60,90,110,140,160,180,200,230,257, 320,420,560,720,880,1020,1150,1260,1350,1420,1470,1500],
    mau:  [40,75,120,160,210,250,290,330,360,390,410,420, 520,680,900,1200,1600,2100,2700,3300,3900,4400,4800,5200]
  },
  models:{
    live:{name:"Live Training",ic:"&#127908;",color:"#4465EE",role:"Cuña: genera caja, confianza y contenido semilla. No recurrente.",tag:"No recurrente · cohortes",margin:58,arpu:150,cac:28,ltv:210,scal:"Lineal",students:152},
    micro:{name:"Microlearning Platform OS",ic:"&#9889;",color:"#7C7EDF",role:"Motor de escala: MRR recurrente, alto margen, costo marginal ~0.",tag:"Recurrente · SaaS",margin:72,arpu:24,cac:38,ltv:210,churn:8,payback:5.5,scal:"Exponencial",mau:420}
  },
  health:[
    {k:"LTV / CAC",v:3.1,target:3,unit:"x",dir:"high",pre:"",info:"ltvcac"},
    {k:"CAC Payback",v:5.5,target:6,unit:" mo",dir:"low",pre:"",info:"payback"},
    {k:"Margen plataforma",v:72,target:80,unit:"%",dir:"high",pre:"",info:"margin"},
    {k:"Retención M1",v:38,target:45,unit:"%",dir:"high",pre:"",info:"ret1"},
    {k:"Retención M3",v:21,target:28,unit:"%",dir:"high",pre:"",info:"ret3"},
    {k:"Churn mensual",v:8,target:5,unit:"%",dir:"low",pre:"",info:"churn"},
    {k:"Evidence Rate",v:42,target:55,unit:"%",dir:"high",pre:"",info:"evid"},
    {k:"Runway",v:10,target:15,unit:" mo",dir:"high",pre:"",info:"runway"}
  ],
  cohorts:[
    {id:"C-09",name:"BIM Manager Intensivo",n:34,price:159,compl:78,nps:72,conv:22},
    {id:"C-08",name:"IA aplicada a AEC",n:41,price:129,compl:69,nps:75,conv:31},
    {id:"C-07",name:"VDC & Coordinación",n:22,price:179,compl:74,nps:70,conv:25},
    {id:"C-06",name:"Revit + Dynamo Pro",n:28,price:139,compl:81,nps:68,conv:18},
    {id:"C-05",name:"Project Controls",n:26,price:169,compl:76,nps:71,conv:20},
    {id:"C-04",name:"Lean Construction",n:19,price:149,compl:85,nps:66,conv:15}
  ],
  channels:[
    {name:"Comunidad / Orgánico",share:55,cac:12,color:"#7C7EDF"},
    {name:"Referidos",share:18,cac:8,color:"#47CF78"},
    {name:"Paid (Meta/Google)",share:15,cac:62,color:"#F0A030"},
    {name:"Partnerships / Gremios",share:12,cac:40,color:"#4465EE"}
  ],
  migration:[
    {v:"18%",l:"Conv. Live → Micro",t:"meta 45%"},
    {v:"28%",l:"Cursos → activos reutil.",t:"meta 70%"},
    {v:"3.4",l:"Cápsulas por cohorte",t:"meta 8"}
  ],
  agenda:[
    {t:"Definir la ruta-cuña inicial con mayor pain y disposición a pagar",d:false},
    {t:"Separar P&L de Live, Plataforma e Híbrido",d:false},
    {t:"Tracking semanal de todo el funnel",d:false},
    {t:"Convertir cursos Live en cápsulas y rúbricas reutilizables",d:false},
    {t:"Lanzar piloto B2B de 30 días con 3 skills por rol",d:false},
    {t:"Versionar el AEC Skill Graph como activo central",d:false},
    {t:"Crear data room que separe métricas reales de supuestos",d:false},
    {t:"Calcular unit economics completos antes de levantar",d:false},
    {t:"Desplegar AI para reducir fricción, no como decoración",d:false},
    {t:"Preparar pitch: problema, solución, tracción, equipo, fondos",d:false}
  ],
  wins:[
    {t:"Subir Evidence Rate 42% a 55%",d:false},
    {t:"Separar P&L Live / Plataforma",d:false},
    {t:"Lanzar piloto B2B 30 días",d:false},
    {t:"CAC/LTV por canal (no blended)",d:false}
  ]
};
''')

add(r'''var INFO={
  nsm:["North Star Metric","skills verificadas con evidencia &divide; usuarios activos mensuales. Mide progresión real, no vanity metrics. La única métrica que no se puede maquillar."],
  rev:["Ingresos por modelo","Ingreso mensual de cada stream. Sólido = histórico, punteado = proyección. Nota cómo Microlearning (recurrente) cruza y supera a Live: ese es el motor de escala."],
  margin:["Margen bruto combinado","% que queda tras costos directos, ponderado por el mix. Sube de ~64% hacia ~78% a medida que crece el peso del Microlearning (margen 72-80%) sobre Live (58%)."],
  pnl:["P&L mensual","Estado de resultados estimado del mes actual. Supuesto: costos de instructor/ops para Live y de infraestructura/soporte para plataforma. Ajústalo con tu data real."],
  channels:["Canales de adquisición","Distribución de nuevos usuarios por canal y su CAC. Comunidad/orgánico domina con el CAC más bajo &mdash; el activo de 65k personas es la ventaja de AECODE."],
  evid:["Evidence Rate","% de usuarios que suben evidencia real (entregable con rúbrica). Es el cuello: sin evidencia no hay skill verificable, sin skill no hay NSM ni pago por outcome."],
  verif:["Verification Rate","% de evidencias aprobadas como skill verificada (AI + instructor). Muy bajo frustra; muy alto no discrimina calidad."],
  mau2:["MAU plataforma","Usuarios activos mensuales del Microlearning. Escalar MAU NO mejora el NSM (razón de calidad): crecer con NSM bajo amplía el problema."],
  conv:["Conversión a pago","% de MAU que paga. Pequeñas mejoras mueven mucho el MRR recurrente."],
  price:["Precio Pro","Precio mensual del plan Pro. Subirlo mejora el LTV/CAC directo (CAC constante): la palanca más rápida de unit economics."],
  platmrr:["MRR plataforma","Ingreso recurrente real = MAU &times; conversión &times; precio. Lo que valora un inversionista; la caja de Live NO es MRR."],
  ltvcac:["LTV / CAC","Valor de vida &divide; costo de adquisición. &gt;3x = negocio sano. Por debajo, cada cliente destruye margen."],
  runway:["Runway","Meses de operación con la caja actual. &lt;12 enciende alarma; los fondos quieren pista para ejecutar la tesis."],
  payback:["CAC Payback","Meses para recuperar el CAC. &lt;6 es saludable y permite reinvertir en crecimiento."],
  churn:["Churn mensual","% de suscriptores que cancelan al mes. Bajarlo de 8% a 5% sube fuertemente el LTV y el MRR neto."],
  ret1:["Retención M1","% activos al mes 1. Mide activación y valor inicial."],
  ret3:["Retención M3","% activos al mes 3. Predictor más fuerte del LTV."],
  path:["Ruta a $30k","MRR total proyectado (Live + Micro + Ent + Cred). El objetivo a 12 meses es $30k con 60% recurrente, invirtiendo el mix actual."]
};
var PRESETS={hoy:{evid:42,verif:69,mau:420,conv:7,price:29},beta:{evid:55,verif:78,mau:900,conv:10,price:29},escala:{evid:62,verif:85,mau:4200,conv:12,price:39}};
var COL={good:"var(--good)",watch:"var(--watch)",risk:"var(--risk)"};
var HEX={good:"#47CF78",watch:"#F0A030",risk:"#F2617A"};
''')

# ============================ JS: STATE/PERSIST/COMPUTE ============================
add(r'''var KEY="aecode_metricsos_v3", S, firstPaint=true;
function num(x,f){var n=parseFloat(x);return isNaN(n)?(f===undefined?0:f):n;}
function clone(o){return JSON.parse(JSON.stringify(o));}
function load(){try{var r=localStorage.getItem(KEY);if(r)return merge(JSON.parse(r));}catch(e){}return clone(SEED);}
function merge(sv){var b=clone(SEED);try{
  if(sv.meta)b.meta.foco=sv.meta.foco||b.meta.foco;
  if(sv.star){b.star.skills=num(sv.star.skills,b.star.skills);b.star.mau=num(sv.star.mau,b.star.mau);b.star.target=num(sv.star.target,b.star.target);}
  if(sv.health)sv.health.forEach(function(h,i){if(b.health[i])b.health[i].v=num(h.v,b.health[i].v);});
  if(sv.agenda)sv.agenda.forEach(function(a,i){if(b.agenda[i])b.agenda[i].d=!!a.d;});
  if(sv.wins)b.wins=sv.wins.map(function(w){return{t:w.t||"",d:!!w.d};});
}catch(e){}return b;}
function save(){try{S.meta.updated=Date.now();localStorage.setItem(KEY,JSON.stringify(S));stamp();}catch(e){}}
function stamp(){var el=document.getElementById("foco-stamp");if(el)el.textContent=S.meta.updated?"guardado "+new Date(S.meta.updated).toLocaleDateString("es-PE",{day:"2-digit",month:"short"}):"";}
function fmt(n){return Math.round(n).toLocaleString("en-US");}
function money(n){return "$"+fmt(n);}
function mk(n){if(Math.abs(n)>=1000){var v=n/1000;return "$"+(Math.round(v*10)/10)+"k";}return "$"+Math.round(n);}
function totalAt(i){return S.series.live[i]+S.series.micro[i]+S.series.ent[i]+S.series.cred[i];}
function marginAt(i){var t=totalAt(i);if(t<=0)return 0;return (S.series.live[i]*0.58+S.series.micro[i]*0.74+S.series.ent[i]*0.70+S.series.cred[i]*0.85)/t*100;}
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

# ============================ JS: CHART HELPERS ============================
add(r'''function svgLine(o){
  var W=760,H=o.h||250,pl=48,pr=16,pt=16,pb=26,labels=o.labels,n=labels.length,split=o.split;
  var all=[];o.series.forEach(function(s){all=all.concat(s.data);});
  var mx=Math.max.apply(null,all)*1.1||1,mn=0;
  function X(i){return pl+(W-pl-pr)*(i/(n-1));}
  function Y(v){return pt+(H-pt-pb)*(1-(v-mn)/(mx-mn));}
  var g="";
  for(var k=0;k<=4;k++){var gv=mx*k/4,gy=Y(gv);g+='<line x1="'+pl+'" y1="'+gy+'" x2="'+(W-pr)+'" y2="'+gy+'" stroke="rgba(58,64,101,.3)"/>';g+='<text x="'+(pl-7)+'" y="'+(gy+3)+'" text-anchor="end" font-size="9" fill="#7d86a8" font-family="JetBrains Mono">'+o.fmt(gv)+'</text>';}
  for(var i=0;i<n;i+=3){g+='<text x="'+X(i)+'" y="'+(H-7)+'" text-anchor="middle" font-size="8" fill="#7d86a8" font-family="JetBrains Mono">'+labels[i]+'</text>';}
  if(split!=null){var sx=X(split-0.5);g='<rect x="'+sx+'" y="'+pt+'" width="'+(W-pr-sx)+'" height="'+(H-pt-pb)+'" fill="rgba(124,126,223,.05)"/>'+g;g+='<line x1="'+sx+'" y1="'+pt+'" x2="'+sx+'" y2="'+(H-pb)+'" stroke="rgba(124,126,223,.4)" stroke-dasharray="3 3"/><text x="'+(sx+4)+'" y="'+(pt+10)+'" font-size="8" fill="#C5CFFA" font-family="Space Grotesk">proyección</text>';}
  o.series.forEach(function(s){
    var sp=split!=null?split-1:n-1,i;
    if(s.fill){var d="M "+X(0)+" "+Y(s.data[0]);for(i=1;i<n;i++)d+=" L "+X(i)+" "+Y(s.data[i]);d+=" L "+X(n-1)+" "+Y(0)+" L "+X(0)+" "+Y(0)+" Z";g+='<path d="'+d+'" fill="url(#cg)"/>';}
    var dp="M "+X(0)+" "+Y(s.data[0]);for(i=1;i<=sp;i++)dp+=" L "+X(i)+" "+Y(s.data[i]);
    g+='<path d="'+dp+'" fill="none" stroke="'+s.color+'" stroke-width="2.2"/>';
    if(split!=null){var dd="M "+X(sp)+" "+Y(s.data[sp]);for(i=sp+1;i<n;i++)dd+=" L "+X(i)+" "+Y(s.data[i]);g+='<path d="'+dd+'" fill="none" stroke="'+s.color+'" stroke-width="2.2" stroke-dasharray="5 4" opacity=".85"/>';}
    g+='<circle cx="'+X(n-1)+'" cy="'+Y(s.data[n-1])+'" r="3" fill="'+s.color+'"/>';
  });
  return '<svg viewBox="0 0 '+W+' '+H+'" style="width:100%;height:auto;display:block"><defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="'+o.series[0].color+'" stop-opacity=".32"/><stop offset="100%" stop-color="'+o.series[0].color+'" stop-opacity="0"/></linearGradient></defs>'+g+'</svg>';
}
function svgSpark(data,color,split){
  var W=150,H=36,mx=Math.max.apply(null,data)*1.1||1,i;
  function X(i){return 2+(W-4)*(i/(data.length-1));}
  function Y(v){return 3+(H-6)*(1-v/mx);}
  var sp=split!=null?split-1:data.length-1;
  var d="M "+X(0)+" "+Y(data[0]);for(i=1;i<=sp;i++)d+=" L "+X(i)+" "+Y(data[i]);
  var g='<path d="'+d+'" fill="none" stroke="'+color+'" stroke-width="2"/>';
  if(split!=null){var dd="M "+X(sp)+" "+Y(data[sp]);for(i=sp+1;i<data.length;i++)dd+=" L "+X(i)+" "+Y(data[i]);g+='<path d="'+dd+'" fill="none" stroke="'+color+'" stroke-width="2" stroke-dasharray="3 3" opacity=".8"/>';}
  return '<svg viewBox="0 0 '+W+' '+H+'" style="width:100%;height:36px">'+g+'</svg>';
}
''')

# ============================ JS: RENDER SUMMARY/MODELS ============================
add(r'''function renderVerdict(C){document.getElementById("verdict").innerHTML='<span class="vd" style="background:'+COL[C.vc]+'"></span><b style="color:'+COL[C.vc]+'">'+C.v+'</b><span>'+C.goods+'✓ · '+C.watches+'~ · '+C.risks+'✕</span>';}
function renderSummary(C){
  var i=SPLIT-1, tot=totalAt(i), totPrev=totalAt(i-1), mom=totPrev>0?(tot/totPrev-1)*100:0;
  var micro=S.series.micro[i], marg=marginAt(i), run=S.health[7].v;
  var proj=totalAt(MONTHS.length-1);
  var nc=HEX[C.nsmSt];
  var cards=[
    {v:money(tot)+"/mo",l:"Caja total / mes",d:'<span style="color:'+(mom>=0?"var(--good)":"var(--risk)")+'">'+(mom>=0?"+":"")+mom.toFixed(0)+"% MoM</span>",c:"var(--txt)"},
    {v:money(micro),l:"MRR recurrente real",d:'<span style="color:var(--dim)">solo plataforma</span>',c:"var(--micro)"},
    {v:C.nsm.toFixed(2),l:"North Star (NSM)",d:'<span style="color:'+nc+'">'+Math.round(C.pct*100)+"% del obj.</span>",c:nc},
    {v:marg.toFixed(0)+"%",l:"Margen combinado",d:'<span style="color:var(--dim)">&rarr; 78% a escala</span>',c:"var(--green)"},
    {v:run+" mo",l:"Runway",d:'<span style="color:'+(run>=12?"var(--good)":"var(--watch)")+'">obj ≥15</span>',c:run>=12?"var(--good)":"var(--watch)"},
    {v:money(proj)+"/mo",l:"Proyección 12m",d:'<span style="color:var(--dim)">60% recurrente</span>',c:"var(--lavender)"}
  ];
  document.getElementById("kstrip").innerHTML=cards.map(function(c){return '<div class="kcard"><div class="kc-v" style="color:'+c.c+'">'+c.v+'</div><div class="kc-l">'+c.l+'</div><div class="kc-d">'+c.d+'</div></div>';}).join("");
}
function renderModels(){
  var i=SPLIT-1;
  var defs=[{key:"live",data:S.series.live},{key:"micro",data:S.series.micro}];
  document.getElementById("model-split").innerHTML=defs.map(function(D){
    var m=S.models[D.key], rev=D.data[i], prev=D.data[i-1], mom=prev>0?(rev/prev-1)*100:0;
    var ltvcac=m.cac>0?(m.ltv/m.cac):0;
    var mm=[
      {l:"Margen bruto",v:m.margin+"%"},
      {l:"ARPU",v:"$"+m.arpu+(D.key==="micro"?"/mo":"")},
      {l:"CAC",v:"$"+m.cac},
      {l:"LTV / CAC",v:ltvcac.toFixed(1)+"x"}
    ];
    var extra=D.key==="live"?{l:"Alumnos activos/mes",v:m.students}:{l:"Churn mensual",v:m.churn+"%"};
    var extra2=D.key==="live"?{l:"Escalabilidad",v:m.scal}:{l:"Payback",v:m.payback+" mo"};
    mm.push(extra);mm.push(extra2);
    return '<div class="card model-card '+D.key+'">'+
      '<div class="model-head"><div class="model-ic" style="background:color-mix(in srgb,'+m.color+' 16%,transparent);color:'+m.color+'">'+m.ic+'</div>'+
      '<div><div class="model-name">'+m.name+'</div><div class="model-role">'+m.role+'</div>'+
      '<span class="model-tag" style="background:color-mix(in srgb,'+m.color+' 14%,transparent);color:'+m.color+'">'+m.tag+'</span></div></div>'+
      '<div class="model-big"><span class="mv" style="color:'+m.color+'">'+money(rev)+'</span><span class="mg" style="color:'+(mom>=0?"var(--good)":"var(--risk)")+'">'+(mom>=0?"+":"")+mom.toFixed(0)+'% MoM</span></div>'+
      '<div class="model-sub">'+(D.key==="micro"?"MRR recurrente este mes":"Caja del mes (cohortes)")+'</div>'+
      '<div class="model-spark">'+svgSpark(D.data,m.color,SPLIT)+'</div>'+
      '<div class="mm-grid">'+mm.map(function(x){return '<div class="mm"><div class="mm-l">'+x.l+'</div><div class="mm-v">'+x.v+'</div></div>';}).join("")+'</div>'+
    '</div>';
  }).join("");
}
''')

# ============================ JS: RENDER FINANCIALS ============================
add(r'''function renderFinancials(){
  var live=S.series.live,micro=S.series.micro,ent=S.series.ent,cred=S.series.cred;
  var total=live.map(function(_,i){return totalAt(i);});
  document.getElementById("rev-legend").innerHTML=
    '<div class="it"><span class="ln" style="background:#7C7EDF"></span>Total <b>'+mk(total[SPLIT-1])+'</b></div>'+
    '<div class="it"><span class="ln" style="background:#7C7EDF;opacity:.6"></span>Microlearning <b>'+mk(micro[SPLIT-1])+'</b></div>'+
    '<div class="it"><span class="ln" style="background:#4465EE"></span>Live <b>'+mk(live[SPLIT-1])+'</b></div>';
  document.getElementById("rev-chart").innerHTML=svgLine({labels:MONTHS,split:SPLIT,h:250,fmt:mk,series:[
    {data:total,color:"#7C7EDF",fill:true},{data:micro,color:"#8F60EA"},{data:live,color:"#4465EE"}
  ]});
  var margins=live.map(function(_,i){return marginAt(i);});
  document.getElementById("margin-chart").innerHTML=svgLine({labels:MONTHS,split:SPLIT,h:200,fmt:function(v){return Math.round(v)+"%";},series:[{data:margins,color:"#47CF78",fill:true}]});
  var i=SPLIT-1, tot=total[i], prev=total[i-1], mom=prev>0?(tot/prev-1)*100:0;
  var yr=total.slice(0,SPLIT).reduce(function(a,b){return a+b;},0);
  var side=[
    {l:"Caja / mes (hoy)",v:money(tot),d:(mom>=0?"+":"")+mom.toFixed(1)+"% vs mes previo",c:"var(--txt)"},
    {l:"Acumulado 12m (histórico)",v:mk(yr),d:"suma últimos 12 meses",c:"var(--lavender)"},
    {l:"MRR recurrente",v:money(micro[i]),d:Math.round(micro[i]/tot*100)+"% del total · meta 60%",c:"var(--micro)"},
    {l:"Proyección caja 12m",v:money(total[total.length-1]),d:"x"+(total[total.length-1]/tot).toFixed(1)+" vs hoy",c:"var(--green)"}
  ];
  document.getElementById("fin-side").innerHTML=side.map(function(s){return '<div class="fin-stat"><div class="fl">'+s.l+'</div><div class="fv" style="color:'+s.c+'">'+s.v+'</div><div class="fd">'+s.d+'</div></div>';}).join("");
  /* P&L estimado hoy */
  var grossMargin=marginAt(i)/100, gross=tot*grossMargin, cogs=tot-gross;
  var opex=Math.round(tot*0.55), ebitda=gross-opex;
  var pnl=[
    {k:"Ingresos",v:money(tot),b:true},
    {k:"(-) Costo directo (COGS)",v:"-"+money(cogs)},
    {k:"= Margen bruto",v:money(gross)+" · "+Math.round(grossMargin*100)+"%"},
    {k:"(-) Opex (equipo, marketing, ops)",v:"-"+money(opex)},
    {k:"= EBITDA estimado",v:(ebitda>=0?"":"-")+money(Math.abs(ebitda)),tot:true,c:ebitda>=0?"var(--good)":"var(--risk)"}
  ];
  document.getElementById("pnl").innerHTML=pnl.map(function(r){return '<div class="pnl-row'+(r.tot?" tot":"")+'"><span class="pk">'+r.k+'</span><span class="pv" style="color:'+(r.c||"var(--txt)")+'">'+r.v+'</span></div>';}).join("");
}
''')

# ============================ JS: RENDER COHORTS/CHANNELS/UNITECO/MIG ============================
add(r'''function renderCohorts(){
  var c=S.cohorts;
  var rows=c.map(function(x){var rev=x.n*x.price;return '<tr><td class="cid">'+x.id+'</td><td>'+x.name+'</td><td>'+x.n+'</td><td>$'+x.price+'</td><td>'+money(rev)+'</td><td>'+x.compl+'%</td><td>'+x.nps+'</td><td style="color:'+(x.conv>=25?"var(--good)":x.conv>=18?"var(--watch)":"var(--risk)")+'">'+x.conv+'%</td></tr>';}).join("");
  document.getElementById("cohort-table").innerHTML='<thead><tr><th>ID</th><th>Programa</th><th>Alumnos</th><th>Precio</th><th>Ingreso</th><th>Compl.</th><th>NPS</th><th>→ Plataf.</th></tr></thead><tbody>'+rows+'</tbody>';
  var tn=c.reduce(function(a,b){return a+b.n;},0), trev=c.reduce(function(a,b){return a+b.n*b.price;},0);
  var avgCompl=c.reduce(function(a,b){return a+b.compl;},0)/c.length, avgConv=c.reduce(function(a,b){return a+b.conv;},0)/c.length, avgNps=c.reduce(function(a,b){return a+b.nps;},0)/c.length;
  var sums=[
    {v:tn,l:"Alumnos (6 cohortes)"},{v:money(trev),l:"Ingreso acumulado"},
    {v:Math.round(avgCompl)+"%",l:"Completación media"},{v:Math.round(avgConv)+"%",l:"Conv. media → plataforma"}
  ];
  document.getElementById("coh-sum").innerHTML=sums.map(function(s){return '<div class="coh-s"><div class="v" style="color:var(--live)">'+s.v+'</div><div class="l">'+s.l+'</div></div>';}).join("");
}
function renderChannels(){
  var ch=S.channels,mx=Math.max.apply(null,ch.map(function(x){return x.share;}));
  document.getElementById("channels").innerHTML=ch.map(function(x){var w=x.share/mx*100;return '<div class="channel-row"><div class="ch-name">'+x.name+'</div><div class="ch-track"><div class="ch-bar" data-w="'+w+'" style="background:'+x.color+'"></div></div><div class="ch-val">'+x.share+'% · CAC $'+x.cac+'</div></div>';}).join("");
  var blended=Math.round(ch.reduce(function(a,b){return a+b.cac*b.share/100;},0));
  var side=[
    {l:"Comunidad total",v:"65k",d:"+ 8k en WhatsApp activo",c:"var(--violet)"},
    {l:"Leads calificados / mes",v:"576",d:"supuesto · iterar",c:"var(--lavender)"},
    {l:"CAC blended",v:"$"+blended,d:"ponderado por share · meta $30",c:"var(--amber)"},
    {l:"Crecimiento MoM blended",v:"~12%",d:"Live ~6% · Plataforma ~22%",c:"var(--green)"}
  ];
  document.getElementById("growth-side").innerHTML=side.map(function(s){return '<div class="fin-stat"><div class="fl">'+s.l+'</div><div class="fv" style="color:'+s.c+'">'+s.v+'</div><div class="fd">'+s.d+'</div></div>';}).join("");
}
function renderMig(){
  document.getElementById("mig-grid").innerHTML=S.migration.map(function(m){return '<div class="mig"><div class="mv" style="color:var(--violet)">'+m.v+'</div><div class="ml">'+m.l+'</div><div class="mt">'+m.t+'</div></div>';}).join("");
}
function renderUnitEco(){
  var defs=[{key:"live"},{key:"micro"}];
  document.getElementById("ueco-grid").innerHTML=defs.map(function(D){
    var m=S.models[D.key],ltvcac=(m.ltv/m.cac);
    var rows=[
      {k:"ARPU",v:"$"+m.arpu+(D.key==="micro"?" /mo":" /alumno")},
      {k:"CAC",v:"$"+m.cac},
      {k:"LTV",v:"$"+m.ltv},
      {k:"LTV / CAC",v:ltvcac.toFixed(1)+"x",c:ltvcac>=3?"var(--good)":ltvcac>=2.5?"var(--watch)":"var(--risk)"},
      {k:"Margen bruto",v:m.margin+"%"},
      D.key==="micro"?{k:"Churn mensual",v:m.churn+"%"}:{k:"Repetición de compra",v:"~24%"},
      D.key==="micro"?{k:"Payback",v:m.payback+" mo"}:{k:"Payback",v:"inmediato"},
      {k:"Escalabilidad",v:m.scal,c:D.key==="micro"?"var(--green)":"var(--amber)"}
    ];
    return '<div class="card ue-card"><div class="ue-head"><span class="ue-dot" style="background:'+m.color+'"></span>'+m.name+'</div>'+
      rows.map(function(r){return '<div class="ue-row"><span class="uk">'+r.k+'</span><span class="uv" style="color:'+(r.c||"var(--txt)")+'">'+r.v+'</span></div>';}).join("")+'</div>';
  }).join("");
}
function renderPath(){
  var total=S.series.live.map(function(_,i){return totalAt(i);});
  document.getElementById("path-chart").innerHTML=svgLine({labels:MONTHS,split:SPLIT,h:210,fmt:mk,series:[{data:total,color:"#47CF78",fill:true}]});
}
''')

# ============================ JS: RENDER NORTH(implicit via summary)/KPI/AGENDA/WINS ============================
add(r'''function renderKPI(){
  document.getElementById("kpi-grid").innerHTML=S.health.map(function(h,i){
    var st=hStatus(h),ratio=h.dir==="high"?h.v/h.target:(h.v>0?h.target/h.v:1),w=Math.max(6,Math.min(100,ratio*100));
    return '<div class="kpi '+(st==="good"?"g":st==="watch"?"w":"r")+'"><div class="kpi-top"><span class="kpi-name">'+h.k+' <span class="info" data-info="'+h.info+'">i</span></span><span class="kpi-dot" style="background:'+COL[st]+'"></span></div>'+
      '<div class="kpi-val" style="color:'+COL[st]+'">'+h.pre+'<span class="edit" data-edit="h'+i+'" style="width:'+(String(h.v).length+1)+'ch">'+h.v+'</span>'+h.unit+'</div>'+
      '<div class="kpi-tgt">obj '+(h.dir==="low"?"≤":"≥")+h.pre+h.target+h.unit+'</div><div class="kpi-bar"><i data-w="'+w+'" style="background:'+COL[st]+'"></i></div></div>';
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
function bindWins(){
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
''')

# ============================ JS: MASTER RENDER + SIM + INFO + TOUR + TOOLS + BOOT ============================
add(r'''function renderAll(){
  var C=compute();
  renderVerdict(C);renderSummary(C);renderModels();renderFinancials();renderCohorts();renderChannels();renderMig();renderUnitEco();renderPath();renderKPI();renderAgenda();renderWins();
  bindEdits();bindWins();bindAgenda();bindInfo();animateBars();firstPaint=false;
}
function animateBars(){requestAnimationFrame(function(){document.querySelectorAll('.kpi-bar i,.ch-bar,.out-bar i').forEach(function(b){if(b.dataset.w!==undefined)b.style.width=b.dataset.w+"%";});});}
/* SIMULATOR */
var SIM={ids:["evid","verif","mau","conv","price"]};
function simGet(){return{evid:+document.getElementById("s-evid").value,verif:+document.getElementById("s-verif").value,mau:+document.getElementById("s-mau").value,conv:+document.getElementById("s-conv").value,price:+document.getElementById("s-price").value};}
function simCalc(p){var k=0.17/(0.42*0.69);var nsm=(p.evid/100)*(p.verif/100)*k;var plat=p.mau*(p.conv/100)*p.price;var total=plat+4297;var ltv=p.price*0.1069;var run=Math.max(3,Math.min(36,10+(total-5150)/800));return{nsm:nsm,plat:plat,total:total,ltv:ltv,run:run};}
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
  if(r.nsm<0.25)blocker="Tu NSM aún es bajo. Sube Evidence y Verification Rate: escalar usuarios no lo arregla.";
  else if(r.ltv<3)blocker="LTV/CAC por debajo de 3x. Sube el precio Pro o reduce el CAC antes de levantar.";
  else if(r.plat<8000)blocker="MRR plataforma todavía pequeño. Necesitas más MAU y conversión recurrente.";
  else blocker="Unit economics y NSM en zona sana: este escenario es defendible ante un inversionista.";
  if(r.nsm>=0.36&&r.ltv>=3&&r.plat>=8000){v="Listo para levantar";vc="var(--good)";ic="🚀";}
  else if(r.nsm>=0.25&&r.ltv>=2.5){v="En preparación";vc="var(--watch)";ic="🔧";}
  else{v="Aún no financiable";vc="var(--risk)";ic="⚠️";}
  var sv=document.getElementById("sim-verdict");sv.style.borderColor=vc;sv.style.background="color-mix(in srgb,"+vc+" 9%,transparent)";
  document.getElementById("sv-icon").textContent=ic;document.getElementById("sv-icon").style.background="color-mix(in srgb,"+vc+" 16%,transparent)";
  var vt=document.getElementById("sv-verdict-t");vt.textContent=v;vt.style.color=vc;
  document.getElementById("sv-verdict-d").textContent="NSM "+r.nsm.toFixed(2)+" · "+money(r.plat)+" MRR plataforma · "+money(r.total)+" caja";
  document.getElementById("sim-note-txt").innerHTML=blocker;
}
function applyPreset(name){var p=PRESETS[name];if(!p)return;document.getElementById("s-evid").value=p.evid;document.getElementById("s-verif").value=p.verif;document.getElementById("s-mau").value=p.mau;document.getElementById("s-conv").value=p.conv;document.getElementById("s-price").value=p.price;document.querySelectorAll(".preset").forEach(function(b){b.classList.toggle("active",b.dataset.preset===name);});runSim();}
function initSim(){SIM.ids.forEach(function(id){document.getElementById("s-"+id).addEventListener("input",function(){document.querySelectorAll(".preset").forEach(function(b){b.classList.remove("active");});runSim();});});document.querySelectorAll(".preset").forEach(function(b){b.onclick=function(){applyPreset(b.dataset.preset);};});runSim();}
''')

add(r'''/* INFO POPOVER */
var popEl,popT,popD;
function bindInfo(){document.querySelectorAll('.info[data-info]').forEach(function(el){el.onclick=function(e){e.stopPropagation();showPop(el,el.dataset.info);};});}
function showPop(el,key){var d=INFO[key];if(!d)return;popT.innerHTML=d[0];popD.innerHTML=d[1];popEl.classList.add("show");var r=el.getBoundingClientRect(),pw=popEl.offsetWidth,ph=popEl.offsetHeight;var left=Math.min(window.innerWidth-pw-12,Math.max(12,r.left-pw/2+r.width/2));var top=r.bottom+10;if(top+ph>window.innerHeight-12)top=r.top-ph-10;popEl.style.left=left+"px";popEl.style.top=Math.max(12,top)+"px";}
function hidePop(){popEl.classList.remove("show");}
/* TOUR */
var TOUR=[
  {sel:"#summary",t:"Resumen ejecutivo",d:"Los 6 números que importan: caja, MRR recurrente, NSM, margen, runway y proyección. El foco editable arriba a la derecha."},
  {sel:"#models",t:"Los dos modelos",d:"Live Training (caja, no recurrente) vs Microlearning Platform OS (MRR recurrente, escalable). Compara su economía lado a lado."},
  {sel:"#financials",t:"Finanzas",d:"Ingresos por modelo, margen combinado y P&L, del pasado a la proyección. La línea punteada es futuro; el área sombreada lo marca."},
  {sel:"#cohorts",t:"Cohortes Live",d:"El detalle de cada cohorte. Ojo a '→ Plataforma': el % que migra al recurrente es el motor de la migración del modelo."},
  {sel:"#uniteco",t:"Unit economics",d:"La economía por usuario de cada modelo. Edita los valores para reflejar tu realidad."},
  {sel:"#growth",t:"Growth & marketing",d:"Canales, CAC y el loop de crecimiento que conecta Live, contenido, plataforma y comunidad."},
  {sel:"#scalability",t:"Escalabilidad",d:"Por qué Live es lineal y la plataforma exponencial, y el motor que migra el peso de uno a otro."},
  {sel:"#projection",t:"Proyección & simulador",d:"Mueve las palancas y mira el impacto en vivo. La ruta a $30k MRR cierra la sección."},
  {sel:"#health",t:"Fundabilidad",d:"Las 8 métricas que mira un fondo. Edítalas; el semáforo dice qué bloquea tu ronda. Todo se guarda en tu navegador."}
];
var tourI=0;
function startTour(){tourI=0;showTourStep();}
function showTourStep(){document.querySelectorAll(".tour-hl").forEach(function(e){e.classList.remove("tour-hl");});var s=TOUR[tourI],el=document.querySelector(s.sel);if(el){el.classList.add("tour-hl");el.scrollIntoView({behavior:"smooth",block:"center"});}document.getElementById("tour-t").textContent=s.t;document.getElementById("tour-d").textContent=s.d;document.getElementById("tour-step").textContent=(tourI+1)+" / "+TOUR.length;document.getElementById("tour-prev").style.visibility=tourI===0?"hidden":"visible";document.getElementById("tour-next").textContent=tourI===TOUR.length-1?"Terminar":"Siguiente";document.getElementById("tour-box").classList.add("show");}
function tourNext(){if(tourI>=TOUR.length-1){endTour();return;}tourI++;showTourStep();}
function tourPrev(){if(tourI>0){tourI--;showTourStep();}}
function endTour(){document.querySelectorAll(".tour-hl").forEach(function(e){e.classList.remove("tour-hl");});document.getElementById("tour-box").classList.remove("show");}
''')

add(r'''/* TOOLS */
function doExport(){var b=new Blob([JSON.stringify(S,null,2)],{type:"application/json"}),u=URL.createObjectURL(b),a=document.createElement("a");a.href=u;a.download="aecode-metrics-"+new Date().toISOString().slice(0,10)+".json";a.click();URL.revokeObjectURL(u);toast("Datos exportados");}
function doReset(){if(confirm("¿Volver a los valores semilla? Se perderán tus cambios.")){S=clone(SEED);save();firstPaint=true;renderAll();applyPreset("hoy");toast("Restablecido");}}
var toastT;function toast(m){var el=document.getElementById("toast");el.textContent=m;el.classList.add("show");clearTimeout(toastT);toastT=setTimeout(function(){el.classList.remove("show");},2200);}
/* NAV / REVEAL / PARTICLES */
function initNav(){
  var bar=document.getElementById("bar");
  window.addEventListener("scroll",function(){bar.classList.toggle("scrolled",window.scrollY>40);document.getElementById("scroll-bar").style.width=(window.scrollY/(document.body.scrollHeight-window.innerHeight)*100)+"%";},{passive:true});
  document.querySelectorAll(".pill").forEach(function(p){p.onclick=function(){var t=document.getElementById(p.dataset.sec);if(t)t.scrollIntoView({behavior:"smooth"});};});
  var ids=["summary","models","financials","cohorts","uniteco","growth","scalability","projection","health","focus"];
  var so=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting)document.querySelectorAll(".pill").forEach(function(p){p.classList.toggle("active",p.dataset.sec===e.target.id);});});},{rootMargin:"-45% 0px -50% 0px"});
  ids.forEach(function(id){var el=document.getElementById(id);if(el)so.observe(el);});
}
function initReveal(){var o=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target);}});},{threshold:.06,rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".reveal").forEach(function(el,i){el.style.transitionDelay=Math.min(i*0.04,0.3)+"s";o.observe(el);});}
function initParticles(){
  var c=document.getElementById("bg-canvas");if(!c||window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  var ctx=c.getContext("2d"),W,H,pts,N=48,D=130,M={x:-9999,y:-9999};
  function mk2(){return{x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,r:Math.random()*1.3+.5};}
  function init(){W=c.width=window.innerWidth;H=c.height=window.innerHeight;pts=[];for(var i=0;i<N;i++)pts.push(mk2());}
  function loop(){ctx.clearRect(0,0,W,H);for(var i=0;i<pts.length;i++){var p=pts[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;var dx=p.x-M.x,dy=p.y-M.y,dd=Math.sqrt(dx*dx+dy*dy);if(dd<88){p.vx+=dx/dd*.028;p.vy+=dy/dd*.028;}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle="rgba(124,126,223,.16)";ctx.fill();}for(var a=0;a<pts.length;a++)for(var b=a+1;b<pts.length;b++){var ex=pts[a].x-pts[b].x,ey=pts[a].y-pts[b].y,d=Math.sqrt(ex*ex+ey*ey);if(d<D){ctx.beginPath();ctx.moveTo(pts[a].x,pts[a].y);ctx.lineTo(pts[b].x,pts[b].y);ctx.strokeStyle="rgba(74,58,193,"+(.09*(1-d/D))+")";ctx.lineWidth=.6;ctx.stroke();}}requestAnimationFrame(loop);}
  window.addEventListener("resize",init);window.addEventListener("mousemove",function(e){M.x=e.clientX;M.y=e.clientY;},{passive:true});init();loop();
}
/* BOOT */
function boot(){
  popEl=document.getElementById("popover");popT=document.getElementById("pop-t");popD=document.getElementById("pop-d");
  S=load();
  var fc=document.getElementById("foco");fc.value=S.meta.foco||"";fc.addEventListener("input",function(e){S.meta.foco=e.target.value;save();});
  stamp();renderAll();initSim();initNav();initReveal();initParticles();
  var imp=document.getElementById("imp");if(imp)imp.addEventListener("change",function(e){var f=e.target.files[0];if(!f)return;var r=new FileReader();r.onload=function(){try{S=merge(JSON.parse(r.result));save();firstPaint=true;renderAll();toast("Datos importados");}catch(err){toast("Archivo no válido");}};r.readAsText(f);});
  document.addEventListener("click",function(){hidePop();});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"){hidePop();endTour();}});
  if(typeof anime!=="undefined")anime({targets:"#bar",translateY:[-20,0],opacity:[0,1],duration:550,easing:"easeOutCubic"});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
</script>
</body>
</html>
''')

# ============================ WRITE ============================
html = "".join(P)
with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("OK index.html:", len(html), "chars (", round(len(html)/1024), "KB )")
