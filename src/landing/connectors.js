/*
 * Abschnitt „Anbindung“: die Logos der Anschlüsse laufen in einem Strudel auf das Gateway zu.
 * - Die Kacheln sitzen auf drei Spiralarmen und werden zur Mitte hin kleiner. Ein Schritt entlang
 *   des Arms bildet das Muster auf sich selbst ab, deshalb läuft der Strudel ohne Sprung.
 * - Die Liste der Gruppen hebt die passenden Logos hervor (Maus, Fokus oder Klick; ein zweiter
 *   Klick löst die Hervorhebung), wie die Liste im Abschnitt Trace.
 * - Über einer Kachel steht der Name des Systems, der Strudel wird solange langsam.
 * - Das Sprite lädt erst, wenn der Abschnitt näher kommt. Außerhalb des Viewports steht der
 *   Strudel, bei Reduced Motion immer.
 */
import gsap from 'gsap';
import { CONNECTORS, SPRITE } from './connectors-data.js';

const ARMS = 3;        // Spiralarme
const GAP = 1.3;       // Abstand der Arme im Verhältnis zum Abstand der Kacheln auf einem Arm
const FILL = 0.84;     // Kachel im Verhältnis zu ihrem Platz auf dem Arm
const TILE = 96;       // Kante einer Kachel vor dem Skalieren, wie .vx in landing.css
const CORE = 0.17;     // Kante des Gateways im Verhältnis zur Breite, wie .vortex__core
const INNER = 1.2;     // die Arme enden bei diesem Vielfachen der halben Gateway-Kante …
const SINK = Math.log(2.1 / INNER);   // … und verblassen ab dem 2,1-Fachen
const STEP_S = 2.6;    // Sekunden für einen Schritt entlang des Arms

export function createConnectors({ root, groupBtns, reduced }) {
  const field = root.querySelector('.vortex__field');
  const armsPath = root.querySelector('.vortex__arms path');
  const label = root.querySelector('.vortex__label');
  field.style.setProperty('--cols', SPRITE.cols);
  field.style.setProperty('--rows', SPRITE.rows);

  const items = CONNECTORS.map(([name, group, bleed], i) => {
    const el = document.createElement('span');
    el.className = bleed ? 'vx vx--bleed' : 'vx';
    el.dataset.g = group;
    el.style.setProperty('--c', i % SPRITE.cols);
    el.style.setProperty('--r', Math.floor(i / SPRITE.cols));
    el.innerHTML = '<span class="vx__tile"><span class="vx__logo"></span></span>';
    field.append(el);
    return { el, name, arm: i % ARMS, slot: Math.floor(i / ARMS), x: 0, y: 0, s: 0, o: -1 };
  });
  const byEl = new Map(items.map((it) => [it.el, it]));

  /* ---------- Geometrie ----------
     Gitter in (u, θ) mit u = ln(R / r): a läuft entlang des Arms, a′ steht senkrecht darauf und
     ist GAP-mal so lang. p Schritte a und ARMS Schritte a′ ergeben genau eine Umdrehung, deshalb
     schließt sich das Muster. Die Kachel wächst mit dem Radius, so bleibt es überall gleich dicht. */
  let geo = null;
  let flow = 0;   // zurückgelegte Schritte entlang des Arms
  function layout() {
    const w = root.clientWidth;
    if (!w) return;
    // schmale Strudel bekommen kleinere Kacheln, damit genug Logos hineinpassen
    const p = Math.max(12, Math.min(24, Math.round(12 + w / 60)));
    const phi = Math.atan(ARMS * GAP / p);
    const step = 2 * Math.PI / (p * Math.cos(phi) + ARMS * GAP * Math.sin(phi));
    const au = step * Math.sin(phi);
    const k = FILL * step;
    const R = w / 2 / (1 + k / 2);
    // die Arme enden kurz vor dem Gateway
    const perArm = Math.min(Math.floor(items.length / ARMS), Math.round(Math.log(R / (INNER * CORE * w / 2)) / au));
    geo = { w, au, b: Math.tan(phi), k, R, perArm, span: perArm * au, armU: -GAP * step * Math.cos(phi), armTh: GAP * step * Math.sin(phi) };
    for (const it of items) it.el.hidden = it.slot >= perArm;
    drawArms();
    render();
  }

  /* Die Arme als feine Linien: die Kacheln laufen darauf wie auf einer Schnur */
  function drawArms() {
    const { w, b, R, span, armU, armTh } = geo;
    let d = '';
    for (let n = 0; n < ARMS; n++) {
      for (let u = -0.3, cmd = 'M'; u <= span; u += 0.006, cmd = 'L') {
        const th = n * armTh + (u - n * armU) / b;
        const r = R * Math.exp(-u) * 100 / w;
        d += `${cmd}${(r * Math.cos(th)).toFixed(2)} ${(r * Math.sin(th)).toFixed(2)}`;
      }
    }
    armsPath.setAttribute('d', d);
  }

  function render() {
    if (!geo) return;
    const { au, b, k, R, perArm, span, armU, armTh } = geo;
    for (const it of items) {
      if (it.slot >= perArm) continue;
      const u0 = it.arm * armU;
      let u = ((it.slot + flow) * au + u0) % span;
      if (u < 0) u += span;
      const th = it.arm * armTh + (u - u0) / b;
      const r = R * Math.exp(-u);
      it.x = r * Math.cos(th);
      it.y = r * Math.sin(th);
      it.s = k * r / TILE;
      it.el.style.transform = `translate(${it.x.toFixed(1)}px, ${it.y.toFixed(1)}px) scale(${it.s.toFixed(3)})`;
      // am Rand einblenden, zum Gateway hin versinken
      const sink = Math.min(1, (span - u) / SINK);
      const o = Math.min(1, u / (2 * au), sink * sink * (3 - 2 * sink)).toFixed(2);
      if (o !== it.o) { it.o = o; it.el.style.opacity = o; }
    }
    if (hovered) label.style.transform = `translate(-50%, -100%) translate(${hovered.x.toFixed(1)}px, ${(hovered.y - hovered.s * TILE / 2 - 8).toFixed(1)}px)`;
  }

  /* ---------- Gruppen hervorheben ---------- */
  let pinned = null;
  function highlight(g) {
    if (g) root.dataset.hl = g;
    else delete root.dataset.hl;
    groupBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.g === pinned)));
  }
  groupBtns.forEach((b) => {
    const g = b.dataset.g;
    b.addEventListener('mouseenter', () => highlight(g));
    b.addEventListener('mouseleave', () => highlight(pinned));
    b.addEventListener('focus', () => highlight(g));
    b.addEventListener('blur', () => highlight(pinned));
    b.addEventListener('click', () => { pinned = pinned === g ? null : g; highlight(pinned ?? g); });
  });

  /* ---------- Name des Systems über der Kachel ---------- */
  let hovered = null;
  function hover(it) {
    hovered = it ?? null;
    if (hovered) label.textContent = hovered.name;
    label.classList.toggle('is-on', Boolean(hovered));
    render();
  }
  let hoverT = 0;
  field.addEventListener('pointerover', (e) => {
    hover(byEl.get(e.target.closest('.vx')));
    // ohne Maus gibt es kein Verlassen: der Name blendet von selbst wieder aus
    clearTimeout(hoverT);
    if (e.pointerType !== 'mouse') hoverT = setTimeout(hover, 1800);
  });
  field.addEventListener('pointerleave', () => hover(null));

  /* ---------- Lauf ---------- */
  let visible = false, started = false, speed = 0, boost = 0;
  const tick = (_time, dt) => {
    if (!visible || document.hidden || !geo) return;
    const d = Math.min(dt, 64) / 1000;
    const target = hovered ? 0.1 : root.dataset.hl ? 0.35 : 1;
    speed += (target - speed) * Math.min(1, d * 5);
    boost *= Math.exp(-d * 1.6);
    flow += (d / STEP_S) * (speed + boost);
    render();
  };
  if (!reduced) gsap.ticker.add(tick);

  /* Sprite laden, bevor der Abschnitt da ist */
  const near = new IntersectionObserver(([e], io) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    const img = new Image();
    img.onload = img.onerror = () => {
      field.style.setProperty('--sprite', `url("${SPRITE.url}")`);
      root.classList.add('is-ready');
    };
    img.src = SPRITE.url;
  }, { rootMargin: '800px 0px' });
  near.observe(root);

  /* Beim ersten Blick dreht der Strudel kurz schneller und fällt dann auf sein Tempo */
  const seen = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (started || e.intersectionRatio < 0.2) return;
    started = true;
    boost = 16;
    root.classList.add('is-in');
  }, { threshold: [0, 0.2] });
  seen.observe(root);

  const sizes = new ResizeObserver(layout);
  sizes.observe(root);
  layout();

  return {
    destroy() {
      gsap.ticker.remove(tick);
      clearTimeout(hoverT);
      near.disconnect();
      seen.disconnect();
      sizes.disconnect();
    },
  };
}
