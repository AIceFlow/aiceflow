/*
 * Bühne des Governance Gateway: schiefe Parallelprojektion (Kabinett, 35°) als SVG,
 * gerendert mit Verläufen, weichen Schatten, Licht und fließenden Impulsen.
 * Das Markup kommt aus stage-markup.js; scene() berechnet alle Platzhalterwerte aus
 * p ∈ [0, 8]. Nur die Freigabe (release 0 … 1) ist zeitbasiert.
 * Weltkoordinaten: x nach rechts, y nach hinten, z nach oben.
 */
import { MARKUP } from './stage-markup.js';

export const GATE = 2.28;                        // Gateway rastet als eine Schicht ein
export const SNAP = [2.6, 2.67, 2.74, 2.81];     // Ebene k ist aufgeklappt und beschriftet
export const DOCK = 6.5;                         // eigener Agent dockt an
// Eingeschwungener Zustand je Kapitel: Ziel für Sprungmarken und Reduced Motion
export const TARGET = [0.15, 1.82, 2.9, 3.6, 4.62, 5.86, 6.84, 7.7];

const CX = 880, CY = 720, S = 70;
const KX = 0.5 * Math.cos((35 * Math.PI) / 180);
const KY = 0.5 * Math.sin((35 * Math.PI) / 180);
const D = 3.2, T = 0.3, X0 = -3.8, WY = 1.6, ZA = 6.6, ZB = 6.31;
const GW_TOP = 3.925;                             // Oberkante des geschlossenen Gateways (4 × T dick)
const SYS_Z0 = -0.25;                             // Unterkante der System-Module (Oberkante 0.5)
const SLOT_X = 5.0;                               // freier Modulplatz für weitere Systeme
const PLATE_Z = [5.05, 3.8, 2.55, 1.3];           // 01 Identität … 04 Anbindung (Unterkante, aufgeklappt)
const AGENT_X = [0, -2.6, 2.6];                   // Rechnungs-, Vertriebs-, Einkaufs-Agent
const ORDER = [1, 0, 2];                          // Reihenfolge der Agents von links nach rechts
const SYS_X = [-2.6, 0, 2.6];                     // E-Mail, ERP, DMS
const TRACE = [[-1.95, 0.9, 0.5], [-1.95, 0.9, 6.1], [0, 0.9, 6.1], [0, WY, ZB], [0, WY, 0.5]];
const TRACE_P = [5.08, 5.7];
// eigener Agent: durch das Gateway, dicht unter Ebene 04 hinüber in die Buchse des DMS
const OWN = [[5.0, WY, ZB], [5.0, WY, 0.75], [2.6, WY, 0.75], [2.6, WY, 0.5]];
// Trace-Stationen: Original-E-Mail, gelesen, entschieden (beide am Agent), geprüft (Ebene 03), gebucht
const ST_AT = [[-1.95, 0.9, 0.5], [0, WY, ZB], [0, WY, ZB], [0, WY, 2.85], [0, WY, 0.5]];
const ST_OFF = [[-30, -16, -1], [-44, -12, -1], [44, -12, 1], [30, -14, 1], [-32, -8, -1]];   // Versatz und Seite des Schilds
const ST_W = [118, 70, 92, 70, 72];               // Breite der Schilder
const CHAOS_J = [[140, -20, -90, 40], [-160, 60, 120, -30], [90, 110, -150, 10], [-120, -10, 170, 60], [200, 40, -60, -50], [-60, 130, 90, 20], [60, -30, -200, 30], [-210, 50, 40, -20], [130, 80, -110, -60]];
/* AIceFlow-Marke: Mittellinien der sechs Striche aus public/logo/aiceflow-mark.svg
   (150 SVG-px = 1 Einheit, y nach oben). Die ersten drei Striche sind Tinte, die letzten drei blau. */
const MARK = [
  [0.479, 0.972, -0.970, -0.477], [-0.479, 0.971, 0.299, 0.193], [0.694, -0.193, 0.977, -0.476],
  [0.982, 0.478, -0.468, -0.971], [-0.308, -0.194, 0.470, -0.972], [-0.971, 0.471, -0.688, 0.188],
];
const MX = 990, MY = 158, MS = 58;
const BLUE = '#4876FF';

/* Ausschnitte für die kompakte (mobile) Ansicht: [x0, y0, x1, y1] im Raster 1440 × 900 */
const VIEW_BASE = [590, 86, 1268, 738];
const VIEW_WIDE = [590, 86, 1418, 738];
const VIEW_FINAL = [636, 78, 1352, 738];

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const seg = (p, a, b) => clamp01((p - a) / (b - a));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const backOut = (t) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };
const r1 = (n) => Math.round(n * 10) / 10;
const r3 = (n) => Math.round(n * 1000) / 1000;
const P = (x, y, z) => [CX + (x + y * KX) * S, CY - (z + y * KY) * S];
const pts = (list) => list.map((q) => `${r1(q[0])},${r1(q[1])}`).join(' ');
const shiftY = (list, dy) => list.map((q) => [q[0], q[1] + dy]);
const at = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

function mix(a, b, t) {
  const rgb = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
  if (t <= 0.001) return a;
  if (t >= 0.999) return b;
  const A = rgb(a), B = rgb(b);
  return `rgb(${Math.round(lerp(A[0], B[0], t))},${Math.round(lerp(A[1], B[1], t))},${Math.round(lerp(A[2], B[2], t))})`;
}
function box(x0, x1, y0, y1, z0, z1) {
  return {
    top: pts([P(x0, y0, z1), P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1)]),
    side: pts([P(x1, y0, z1), P(x1, y1, z1), P(x1, y1, z0), P(x1, y0, z0)]),
  };
}
const silhouette = (x0, x1, y0, y1, z0, z1) => [P(x0, y0, z0), P(x1, y0, z0), P(x1, y1, z0), P(x1, y1, z1), P(x0, y1, z1), P(x0, y0, z1)];
function port(q) {
  const c = P(q[0], q[1], q[2]);
  return `M${r1(c[0] - 4.5)} ${r1(c[1])}a4.5 1.8 0 1 0 9 0a4.5 1.8 0 1 0 -9 0Z`;
}
function line2(a, b) {
  const p0 = P(a[0], a[1], a[2]), p1 = P(b[0], b[1], b[2]);
  return `M${r1(p0[0])} ${r1(p0[1])}L${r1(p1[0])} ${r1(p1[1])}`;
}
function cum(path) {
  const L = [0];
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1], b = path[i];
    L.push(L[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]));
  }
  return L;
}
const TL = cum(TRACE), TT = TL[TL.length - 1];
const ST_U = [0, TL[3] / TT, TL[3] / TT + 0.035, (TL[3] + ZB - 2.85) / TT, 1];
// Scrollwert, an dem die Trace-Linie die jeweilige Station erreicht (für die Stationsliste)
export const STATION_P = ST_U.map((u) => TRACE_P[0] + u * (TRACE_P[1] - TRACE_P[0]));
const OWN_L = cum(OWN), OWN_TOTAL = OWN_L[OWN_L.length - 1];

// kleine Marke im Gateway-Schild (zentriert bei x = 11, y = 0; 10 px je Einheit)
const MARK_SM = MARK.reduce((acc, m, i) => {
  const d = `M${r1(11 + m[0] * 10)} ${r1(-m[1] * 10)}L${r1(11 + m[2] * 10)} ${r1(-m[3] * 10)}`;
  if (i < 3) acc.ink += d; else acc.blue += d;
  return acc;
}, { ink: '', blue: '' });

/* Band = Anzahl der Ebenen unterhalb von z. Leitungen werden zwischen die Ebenen sortiert,
   damit jede Ebene verdeckt, was hinter und unter ihr liegt. */
function bandOf(z, plates) {
  let b = 0;
  for (const pl of plates) if (z >= pl.zt - 1e-6) b++;
  return b;
}
function addWire(out, path, head, plates) {
  if (head <= 0) return;
  const L = cum(path), s1 = head * L[L.length - 1];
  for (let i = 1; i < path.length; i++) {
    if (L[i - 1] >= s1) break;
    const a = path[i - 1], l = L[i] - L[i - 1];
    const B = at(a, path[i], Math.min(1, (s1 - L[i - 1]) / l));
    const ts = [0, 1], dz = B[2] - a[2];
    if (Math.abs(dz) > 1e-9) {
      for (const pl of plates) {
        for (const zc of [pl.zb, pl.zt]) {
          const t = (zc - a[2]) / dz;
          if (t > 0 && t < 1) ts.push(t);
        }
      }
    }
    ts.sort((m, n) => m - n);
    for (let j = 0; j < ts.length - 1; j++) {
      if (ts[j + 1] - ts[j] < 1e-6) continue;
      const zm = lerp(a[2], B[2], (ts[j] + ts[j + 1]) / 2);
      if (plates.some((pl) => pl.solid && zm > pl.zb && zm < pl.zt)) continue;
      out[bandOf(zm, plates)] += line2(at(a, B, ts[j]), at(a, B, ts[j + 1]));
    }
  }
}

/* Alle Platzhalterwerte für einen Zustand. k skaliert Beschriftungen (mobil größer). */
function scene(p, approved, release, k, intro) {
  const v = { k: r3(k), ka: r3(Math.min(k, 1.12)), markInk: MARK_SM.ink, markBlue: MARK_SM.blue };
  const finalFade = 1 - seg(p, 7.05, 7.25);

  /* Einstieg: das laufende System mit der Kontrollschicht. Beim Laden fällt die Schicht in ihre
     Passung (intro, zeitbasiert), dann laufen die Leitungen hindurch. Beim Scrollen hebt sie sich
     wieder ab, die Verbindungen reißen ab, und die Geschichte beginnt ohne Rahmen. */
  const hv = 1 - smooth(seg(p, 0.35, 0.85));
  const hGate = hv * smooth(seg(intro, 0.1, 0.6));
  const hWire = hv * seg(intro, 0.55, 0.95);
  const hConn = hv * seg(intro, 0.85, 1);
  v.ghost = { d: '', op: 0 };

  /* Rechnung (Kapitel 05) – bestimmt auch den Zustand von Ebene 03 */
  const fall = seg(p, 4.08, 4.4);
  const rel = approved && p >= 4.4;
  const hold = rel ? 1 - seg(release, 0, 0.2) : fall >= 1 ? 1 : 0;

  /* Gateway: eine Schicht fällt in ihre Passung und rastet ein, klappt dann in vier Ebenen auf
     und schließt sich in der Totale wieder. */
  const X1 = lerp(3.8, 5.9, smooth(seg(p, 6.42, 6.7)));
  const actId = seg(p, 3.02, 3.15) * (1 - seg(p, 3.88, 3.98));     // Kapitel 04: Identität und Berechtigungen
  const trF = seg(p, 5.02, 5.15) * (1 - seg(p, 5.92, 6.02));       // Kapitel 06: Trace läuft durch alle Ebenen
  const drop = Math.max(seg(p, 2.08, GATE), hGate);
  const dzDrop = (1 - easeOut(drop)) * 0.9;
  const ex = smooth(seg(p, 2.42, 2.7)) * (1 - smooth(seg(p, 7.0, 7.3)));
  const gwOp = smooth(seg(drop, 0, 0.45));
  const plates = PLATE_Z.map((z, i) => {
    const zb = lerp(GW_TOP - (i + 1) * T, z, ex) + dzDrop;
    return { zb, zt: zb + T, solid: drop > 0.6 };
  });
  plates.forEach((pl, i) => {
    const b = box(X0, X1, 0, D, pl.zb, pl.zt);
    const sil = silhouette(X0, X1, 0, D, pl.zb, pl.zt);
    const fl = P(X0, 0, pl.zt), fr = P(X1, 0, pl.zt), br = P(X1, D, pl.zt), brb = P(X1, D, pl.zb);
    const flash = seg(p, SNAP[i], SNAP[i] + 0.01) * (1 - seg(p, SNAP[i] + 0.04, SNAP[i] + 0.12));
    const act = i <= 1 ? actId : 0;
    v[`pl${i}`] = {
      op: r3(gwOp), top: b.top, side: b.side, sil: pts(sil), shadow: pts(shiftY(sil, 18)),
      fx: r1(fl[0]), fy: r1(fl[1]), fw: r1(fr[0] - fl[0]),
      hl: `M${r1(fl[0])} ${r1(fl[1] + 0.5)}H${r1(fr[0])}L${r1(br[0])} ${r1(br[1] + 0.5)}`,
      lo: `M${r1(fl[0])} ${r1(fl[1] + 20.5)}H${r1(fr[0])}L${r1(brb[0])} ${r1(brb[1] - 0.5)}`,
      act: r3(act * 0.55), hold: i === 2 ? r3(hold) : 0, flash: r3(Math.max(flash, 0.45 * trF)),
      tx: r1(fl[0] + 12), ty: r1(fl[1] + 14.5),
      txtOp: r3(seg(p, SNAP[i] - 0.04, SNAP[i]) * seg(ex, 0.6, 0.95)),
    };
  });
  const gb = GW_TOP - 4 * T + dzDrop, gt = GW_TOP + dzDrop;
  const gbx = box(X0, X1, 0, D, gb, gt), gsil = silhouette(X0, X1, 0, D, gb, gt);
  const gfl = P(X0, 0, gt), gfr = P(X1, 0, gt), gbr = P(X1, D, gt);
  let seams = '';
  for (let h = 1; h < 4; h++) seams += line2([X1, 0, gt - h * T], [X1, D, gt - h * T]);
  v.gw = {
    op: r3(gwOp * (1 - seg(ex, 0.02, 0.15))), top: gbx.top, side: gbx.side, seams,
    sil: pts(gsil), shadow: pts(shiftY(gsil, 22)),
    fx: r1(gfl[0]), fy: r1(gfl[1]), fw: r1(gfr[0] - gfl[0]), sy: r1(gfl[1] + 79),
    hl: `M${r1(gfl[0])} ${r1(gfl[1] + 0.5)}H${r1(gfr[0])}L${r1(gbr[0])} ${r1(gbr[1] + 0.5)}`,
    flash: r3(seg(p, GATE, GATE + 0.01) * (1 - seg(p, GATE + 0.04, GATE + 0.14))),
    lx: r1(gfl[0] + 24), ly: r1(gfl[1] + 38),
    guide: pts(silhouette(X0, X1, 0, D, GW_TOP - 4 * T, GW_TOP)),
    gOp: r3(seg(p, 2.0, 2.06) * (1 - seg(p, GATE - 0.01, GATE + 0.03))),
  };

  /* Systeme als Module: Graphit, Piktogramm, Funktion, Status-LED und Buchse.
     Angeschlossen (LED und Buchse leuchten blau), sobald die Leitung durch das Gateway ankommt. */
  SYS_X.forEach((x, i) => {
    const kk = smooth(seg(intro, i * 0.08, 0.4 + i * 0.08));
    const dz = -(1 - easeOut(kk)) * 0.5, zt = 0.5 + dz;
    const b = box(x - 0.85, x + 0.85, 0.7, 2.5, SYS_Z0 + dz, zt);
    const tl = P(x - 0.85, 0.7, zt);
    const lit = i === 1 && rel ? seg(release, 0.9, 1) : 0;
    const end = 2.34 + ORDER[AGENT_X.indexOf(x)] * 0.02;
    const conn = Math.max(seg(p, end, end + 0.02), hConn);
    v[`sy${i}`] = {
      op: r3(kk), top: b.top, side: b.side, fx: r1(tl[0]), fy: r1(tl[1]), gx: r1(tl[0] + 72), gy: r1(tl[1] + 58),
      sock: pts([P(x - 0.2, WY - 0.28, zt), P(x + 0.2, WY - 0.28, zt), P(x + 0.2, WY + 0.28, zt), P(x - 0.2, WY + 0.28, zt)]),
      conn: r3(conn), lit: r3(lit * 0.85), led: mix('#3A4058', '#A9C0FF', conn),
    };
  });

  /* Freier Modulplatz rechts: gläsern, für weitere Systeme */
  const sk = smooth(seg(intro, 0.2, 0.6)), sdz = -(1 - easeOut(sk)) * 0.5, szt = 0.5 + sdz;
  const sbx = box(SLOT_X - 0.85, SLOT_X + 0.85, 0.7, 2.5, SYS_Z0 + sdz, szt), stl = P(SLOT_X - 0.85, 0.7, szt);
  v.slot = { op: r3(sk), top: sbx.top, side: sbx.side, fx: r1(stl[0]), fy: r1(stl[1]) };
  /* Weitere Systeme: angebunden, sobald Ebene 04 (Anbindung) einrastet */
  v.xs = { op: r3(sk), led: mix('#3A4058', '#A9C0FF', Math.max(seg(p, SNAP[3], SNAP[3] + 0.02), hConn)) };

  /* Ohne Rahmen: jeder Agent direkt auf jedes System */
  let n = 0;
  for (let a = 0; a < 3; a++) {
    for (let s = 0; s < 3; s++) {
      const j = CHAOS_J[n], A = P(AGENT_X[a], WY, ZB), B = P(SYS_X[s], WY, 0.5);
      const head = seg(p, 1.42 + n * 0.025, 1.64 + n * 0.025);
      const tail = seg(p, 2.02 + n * 0.015, 2.22 + n * 0.015);
      const len = Math.max(0, head - tail);
      v[`ch${n}`] = {
        d: `M${r1(A[0])} ${r1(A[1])}C${r1(A[0] + j[0])} ${r1(A[1] + 150 + j[1])} ${r1(B[0] + j[2])} ${r1(B[1] - 150 + j[3])} ${r1(B[0])} ${r1(B[1])}`,
        da: `${r3(len)} 2`, dof: r3(-tail), op: len > 0.002 ? 1 : 0,
      };
      n++;
    }
  }

  /* Leitungen durch das Gateway, nach Bändern sortiert */
  const bOrd = ['', '', '', '', ''], bOwn = ['', '', '', '', ''], bPort = ['', '', '', '', ''], bOPort = ['', '', '', '', ''], bTr = ['', '', '', '', ''], bTPort = ['', '', '', '', ''];
  AGENT_X.forEach((x, i) => {
    const h = Math.max(seg(p, 2.28 + ORDER[i] * 0.02, 2.34 + ORDER[i] * 0.02), hWire);
    addWire(bOrd, [[x, WY, ZB], [x, WY, 0.5]], h, plates);
    plates.forEach((pl) => { if (pl.solid && h * (ZB - 0.5) >= ZB - pl.zt) bPort[bandOf(pl.zt, plates)] += port([x, WY, pl.zt]); });
  });
  const oh = seg(p, 6.62, 6.82);
  addWire(bOwn, OWN, oh, plates);
  plates.forEach((pl) => { if (pl.solid && oh * OWN_TOTAL >= ZB - pl.zt) bOPort[bandOf(pl.zt, plates)] += port([5.0, WY, pl.zt]); });
  const th = seg(p, TRACE_P[0], TRACE_P[1]);
  addWire(bTr, TRACE, th, plates);
  plates.forEach((pl) => {
    if (!pl.solid || th <= 0) return;
    const bnd = bandOf(pl.zt, plates);
    if (th >= (pl.zt - 0.5) / TT) bTPort[bnd] += port([-1.95, 0.9, pl.zt]);
    if (th >= (TL[3] + ZB - pl.zt) / TT) bTPort[bnd] += port([0, WY, pl.zt]);
  });
  for (let b = 0; b < 5; b++) v[`b${b}`] = { ord: bOrd[b], own: bOwn[b], port: bPort[b], oport: bOPort[b], tr: bTr[b], tport: bTPort[b] };
  const ordOp = 1 - 0.65 * trF, trOp = 1 - 0.5 * seg(p, 6.0, 6.3);
  v.ordOp = r3(ordOp);
  v.ordBase = r3(ordOp * 0.9);
  v.trOp = r3(trOp);
  v.trGlow = r3(trOp * 0.4);

  const hp = P(0, WY, PLATE_Z[2] + T);
  v.held = { op: r3(hold), cx: r1(hp[0]), cy: r1(hp[1]) };

  /* Agents: erscheinen beim Laden nacheinander mit leichtem Nachschwingen, dann leuchten Augen und Antenne */
  AGENT_X.forEach((x, i) => {
    const am = seg(intro, 0.1 + ORDER[i] * 0.1, 0.6 + ORDER[i] * 0.1), c = P(x, WY, ZA);
    const id = smooth(seg(p, 3.08 + ORDER[i] * 0.1, 3.25 + ORDER[i] * 0.1)) * finalFade;
    v[`ag${i}`] = {
      X: r1(c[0]), Y: r1(c[1]), hs: 1, halo: 0,
      op: r3(seg(am, 0, 0.25)), sc: r3(0.55 + 0.45 * backOut(seg(am, 0, 0.7))),
      eye: r3(seg(am, 0.55, 0.8)), ant: r3(seg(am, 0.7, 1)),
      nameOp: r3(seg(am, 0.75, 1)), nameY: r1(lerp(-48, -93, id)), cardOp: r3(id),
    };
  });

  /* Eigener Agent: fliegt durchscheinend ein, rastet bei DOCK ein */
  const fly = seg(p, 6.04, DOCK), dk = seg(p, DOCK, DOCK + 0.05);
  const dP = P(5.0, WY, ZA), e = smooth(fly);
  const qx = 1470, qy = dP[1] - 30, sx = 1500, sy = 40;
  const ox = (1 - e) * (1 - e) * sx + 2 * (1 - e) * e * qx + e * e * dP[0];
  const oy = (1 - e) * (1 - e) * sy + 2 * (1 - e) * e * qy + e * e * dP[1];
  const oid = smooth(seg(p, 6.56, 6.72)) * finalFade;
  v.own = {
    vis: fly > 0.001 ? 1 : 0, X: r1(ox), Y: r1(oy), ghost: r3(1 - dk), solid: r3(dk), shade: r3(0.2 * dk),
    flash: r3(seg(p, DOCK, DOCK + 0.01) * (1 - seg(p, DOCK + 0.04, DOCK + 0.12))),
    nameOp: r3(seg(fly, 0.5, 1)), nameY: r1(lerp(-48, -93, oid)), cardOp: r3(oid),
  };

  /* Klammer links: erst das Gateway (vier Ebenen), ab Kapitel 06 AIceFlow Trace über alles */
  const tb = smooth(seg(p, 5.05, 5.35));
  const bTop = lerp(345.5, 206, tb), bBot = lerp(629, 732, tb);
  v.nt = {
    ag: r3(seg(intro, 0.6, 1)), sy: r3(seg(intro, 0.6, 1)),
    br: r3(Math.max(seg(p, 2.82, 2.95) * seg(ex, 0.8, 1), tb)),
    bd: `M603 ${r1(bTop)}H599Q594 ${r1(bTop)} 594 ${r1(bTop + 5)}V${r1(bBot - 5)}Q594 ${r1(bBot)} 599 ${r1(bBot)}H603`,
    bc: mix('#B5BDCD', BLUE, tb), cy: r1((bTop + bBot) / 2),
    gOp: r3(1 - seg(tb, 0, 0.5)), tOp: r3(seg(tb, 0.5, 1)),
    glow: r3(0.5 * seg(p, 5.1, 5.35) * (1 - seg(p, 5.95, 6.1))),
  };

  /* Rechnung: fällt bis Ebene 03, wartet, läuft nach der Freigabe ins ERP */
  const yStart = P(0, WY, ZB)[1] + 28, yHold = P(0, WY, 2.85)[1], yEnd = P(0, WY, 0.5)[1];
  const py = rel ? lerp(yHold, yEnd, smooth(release)) : lerp(yStart, yHold, fall * fall);
  const sc = rel ? 1 - seg(release, 0.82, 1) : 1;
  const released = rel && release > 0.12;
  v.pk = {
    op: p > 4.06 && p < 6.0 && sc > 0.01 ? 1 : 0,
    tf: `translate(${r1(P(0, WY, 0)[0])} ${r1(py)}) scale(${r3(Math.max(0.001, sc) * k)})`,
    dot: released ? BLUE : '#FFB547', txt: released ? '#2B55E6' : '#0E1120',
  };

  /* Trace: nummerierte Stationen */
  ST_AT.forEach((q, i) => {
    const c = P(q[0], q[1], q[2]);
    const on = th > 0 ? seg(th, ST_U[i] - 0.03, ST_U[i] + 0.0001) : 0;
    const [bx, by, side] = ST_OFF[i], w = ST_W[i];
    v[`st${i}`] = {
      tf: `translate(${r1(c[0])} ${r1(c[1])})`, op: r3(on * (1 - seg(p, 6.0, 6.25))),
      bx, by, ty: r1(by + 3.8), ry: by - 11, rw: w,
      rx: side > 0 ? bx - 11 : bx + 11 - w, lx: side > 0 ? bx + 14 : bx - 14, anc: side > 0 ? 'start' : 'end',
    };
  });

  /* Totale: Bühne tritt zurück, die Marke zeichnet sich Strich für Strich */
  const zs = 1 - 0.18 * smooth(seg(p, 7.0, 7.32));
  v.fin = `translate(${r1(960 * (1 - zs))} ${r1(700 * (1 - zs))}) scale(${r3(zs)})`;
  MARK.forEach((m, i) => {
    const st = 7.28 + i * 0.045, dr = seg(p, st, st + 0.12);
    v[`m${i}`] = {
      x1: r1(MX + m[0] * MS), y1: r1(MY - m[1] * MS), x2: r1(MX + m[2] * MS), y2: r1(MY - m[3] * MS),
      dof: r3(Math.pow(1 - dr, 2.2)), op: dr > 0.01 ? 1 : 0,
    };
  });
  return v;
}

/* Platzhalter {{a.b}} in Attributen werden beim Aufbau zu Bindungen; update() schreibt nur,
   was sich geändert hat. Attribute mit Platzhaltern werden vorab umbenannt, damit der Browser
   beim Parsen keine ungültigen Werte sieht. */
const HOLE = /\{\{\s*([\w.]+)\s*\}\}/g;
function compile(tpl) {
  const parts = [];
  let last = 0, m;
  HOLE.lastIndex = 0;
  while ((m = HOLE.exec(tpl))) {
    parts.push(tpl.slice(last, m.index), m[1].split('.'));
    last = m.index + m[0].length;
  }
  parts.push(tpl.slice(last));
  return parts;
}
function fill(parts, v) {
  let s = '';
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (typeof part === 'string') { s += part; continue; }
    let x = v;
    for (const key of part) x = x == null ? undefined : x[key];
    if (x != null) s += x;
  }
  return s;
}

export class Stage {
  constructor({ board, svg }) {
    this.board = board;
    this.svg = svg;
    this.onEvent = null;   // (name, index) => void – Einrasten, Aufklappen, Andocken
    this.prevP = -1;
    this.compact = false;
    this.view = { x: 0, y: 0, w: 1440, h: 900 };
    this.fit = { ox: 0, oy: 0, s: 1 };
    this.k = 1;
    this.lastKey = '';
    this._build();
  }

  _build() {
    const svg = this.svg;
    svg.setAttribute('viewBox', '0 0 1440 900');
    svg.innerHTML = MARKUP.replace(/ ([\w:-]+)="([^"]*\{\{[^"]*)"/g, ' data-tpl-$1="$2"');
    this.binds = [];
    for (const el of svg.querySelectorAll('*')) {
      for (const attr of [...el.attributes]) {
        if (!attr.name.startsWith('data-tpl-')) continue;
        this.binds.push({ el, name: attr.name.slice(9), parts: compile(attr.value), last: null });
        el.removeAttribute(attr.name);
      }
    }
    // Bezugslinie von der angehaltenen Rechnung zur Freigabe-Karte (nur Desktop)
    const ns = 'http://www.w3.org/2000/svg';
    this.leader = document.createElementNS(ns, 'g');
    this.leader.setAttribute('class', 'st-leader');
    this.leader.innerHTML = '<path d="M944 470C998 470 1010 314 1062 314"/><circle cx="1062" cy="314" r="3.5"/>';
    svg.appendChild(this.leader);
  }

  /* SMIL-Animationen (Impulse, Pulsieren) anhalten, z. B. außerhalb des Viewports */
  setPlaying(on) {
    if (on) this.svg.unpauseAnimations?.();
    else this.svg.pauseAnimations?.();
  }

  /* ---------- Einpassen in den sichtbaren Bereich ---------- */
  resize(view, compact) {
    this.view = view;
    this.compact = compact;
    this.svg.classList.toggle('is-compact', compact);
    this._fit(Math.max(0, this.prevP));
    this.lastKey = '';
  }

  _fit(p) {
    let r = [0, 0, 1440, 900];
    if (this.compact) {
      const w = smooth(seg(p, 6.3, 6.7)), f = smooth(seg(p, 7.0, 7.3));
      r = VIEW_BASE.map((v, i) => lerp(lerp(v, VIEW_WIDE[i], w), VIEW_FINAL[i], f));
    }
    const rw = r[2] - r[0], rh = r[3] - r[1], v = this.view;
    const s = Math.min(v.w / rw, v.h / rh);
    const ox = v.x + (v.w - rw * s) / 2 - r[0] * s;
    const oy = v.y + (v.h - rh * s) / 2 - r[1] * s;
    this.fit = { ox, oy, s };
    this.k = r3(Math.max(1, Math.min(1.45, 0.82 / s)));
    const tf = `translate(${r1(ox)}px, ${r1(oy)}px) scale(${r3(s)})`;
    if (this.board._tf !== tf) { this.board._tf = tf; this.board.style.transform = tf; }
  }

  /* ---------- Ereignisse beim Vorwärts-Scrollen ---------- */
  _events(p) {
    const prev = this.prevP;
    this.prevP = p;
    if (prev < 0) return;
    const fire = (th, cb) => { if (prev < th && p >= th) cb(); };
    fire(GATE, () => this.onEvent?.('gate'));
    SNAP.forEach((th, i) => fire(th, () => this.onEvent?.('snap', i)));
    fire(DOCK, () => this.onEvent?.('dock'));
  }

  update({ p, approved = false, release = 0, card = false, intro = 1 }) {
    this._events(p);
    if (this.compact) this._fit(p);
    this.leader.classList.toggle('is-on', !!card && !this.compact);
    const key = `${r3(p)}|${approved}|${r3(release)}|${this.k}|${r3(intro)}`;
    if (key === this.lastKey) return;
    this.lastKey = key;
    const v = scene(p, approved, release, this.k, intro);
    for (const b of this.binds) {
      const s = fill(b.parts, v);
      if (s !== b.last) { b.last = s; b.el.setAttribute(b.name, s); }
    }
  }
}
