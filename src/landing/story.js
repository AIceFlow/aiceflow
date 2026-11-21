import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { SNAP, TARGET, STATION_P } from './stage.js';
import { revealWords, resetWords } from './textfx.js';

gsap.registerPlugin(ScrollTrigger);

const clamp01 = (v) => Math.max(0, Math.min(1, v));
const seg = (p, a, b) => clamp01((p - a) / (b - a));

/*
 * Tempo der Geschichte: wie viel Scrollweg ein Stück von p bekommt. Der Weg ist nicht gleichmäßig
 * verteilt. Wo viel nacheinander passiert, bekommt p mehr Weg, wo nichts passiert, weniger. Am
 * eingeschwungenen Zustand jedes Kapitels (TARGET) steht die Geschichte ein Stück still: so bleibt
 * Zeit zum Lesen und für die Panels, bevor der Text wieder geht.
 * Jede Zeile: [bis zu welchem p, Weg]. Gleiches p wie in der Zeile davor heißt Halt. Eine Einheit
 * Weg ist am Desktop etwa 1 vh; die Länge insgesamt legt --chapter-vh in landing.css fest
 * (Summe der Wege + 100, geteilt durch die neun Kapitel).
 */
const PACE = [
  // 01 Einstieg
  [0.35, 30],          // das System steht
  [0.85, 52],          // die Schicht hebt sich ab, die Leitungen reißen ab
  [1, 8],
  // 02 Ohne Rahmen
  [1.15, 14],          // Text kommt
  [1.42, 14],
  [TARGET[1], 48],     // neun Leitungen wachsen kreuz und quer
  [TARGET[1], 30],     // Halt
  [2, 16],
  // 03 Das Gateway entsteht
  [2.08, 10],
  [2.28, 30],          // die Schicht fällt in ihre Passung
  [2.4, 22],           // Leitungen laufen hindurch, die Systeme sind angeschlossen
  [2.56, 20],          // die Schicht klappt auf
  [2.86, 84],          // vier Ebenen rasten nacheinander ein, dann die Zeile zu Trace
  [TARGET[2], 5],
  [TARGET[2], 40],     // Halt
  [3, 12],
  // 04 Identität und Berechtigungen
  [3.08, 8],
  [3.45, 42],          // drei Ausweise nacheinander
  [TARGET[3], 6],
  [TARGET[3], 28],     // Halt
  [3.88, 10],          // hier bewegt sich nichts
  [4, 12],
  // 05 Freigabe und Aufsicht
  [4.08, 8],
  [4.44, 40],          // die Rechnung fällt bis Ebene 03 und hält an
  [TARGET[4], 12],     // die Freigabe-Karte öffnet sich
  [TARGET[4], 60],     // Halt: Freigabe, Buchung und Aufsicht laufen nach Zeit, nicht nach Weg
  [4.9, 18],
  [5, 10],
  // 06 AIceFlow Trace
  [5.08, 10],
  [5.7, 84],           // die Spur läuft über fünf Stationen
  [TARGET[5], 56],     // der Drill-down öffnet seine drei Ebenen
  [TARGET[5], 45],     // Halt
  [6, 16],
  // 07 Eigener Agent
  [6.04, 5],
  [6.5, 48],           // der eigene Agent fliegt ein und dockt an
  [TARGET[6], 40],     // das Gateway wird breiter, Ausweis, Leitung ins DMS
  [TARGET[6], 35],     // Halt
  [7, 15],
  // 08 ChatGPT, Claude und n8n
  [7.1, 10],
  [7.74, 88],          // drei Fenster, drei Leitungen, drei Antworten
  [TARGET[7], 5],
  [TARGET[7], 40],     // Halt
  [8, 16],
  // 09 Ein Rahmen für alle
  [8.63, 62],          // die Schicht schließt sich, die Marke zeichnet sich
  [TARGET[8], 5],
  [TARGET[8], 25],     // Halt
  [9, 12],
];
const PACE_P = [0], PACE_U = [0];
for (const [p, way] of PACE) { PACE_P.push(p); PACE_U.push(PACE_U[PACE_U.length - 1] + way); }
const U_TOTAL = PACE_U[PACE_U.length - 1];

/* Weg → p */
function pAt(u) {
  if (u <= 0) return 0;
  if (u >= U_TOTAL) return PACE_P[PACE_P.length - 1];
  let i = 1;
  while (PACE_U[i] < u) i++;
  return PACE_P[i - 1] + (PACE_P[i] - PACE_P[i - 1]) * ((u - PACE_U[i - 1]) / (PACE_U[i] - PACE_U[i - 1]));
}
/* p → Weg. Liegt p auf einem Halt, ist es dessen Mitte: Sprünge landen so, dass in beide Richtungen Ruhe bleibt. */
function uAt(p) {
  let i = 1;
  while (i < PACE_P.length - 1 && PACE_P[i] < p) i++;
  if (p === PACE_P[i] && PACE_P[i + 1] === p) return (PACE_U[i] + PACE_U[i + 1]) / 2;
  return PACE_U[i - 1] + (PACE_U[i] - PACE_U[i - 1]) * ((p - PACE_P[i - 1]) / (PACE_P[i] - PACE_P[i - 1]));
}

/* Ende des Halts bei p (ohne Halt: die Stelle selbst) */
function uEnd(p) {
  let u = uAt(p);
  for (let i = 1; i < PACE_P.length; i++) if (PACE_P[i] === p) u = PACE_U[i];
  return u;
}

/* Wer schneller scrollt, als man zusehen kann, überholt die Geschichte: sie läuft dann mit diesem
   Tempo hinterher (Wegeinheiten je Sekunde) und holt bei großem Rückstand schneller auf. */
const FOLLOW = 105, FOLLOW_SLACK = 140, FOLLOW_GAIN = 1.3;

/*
 * Verbindet Scroll (Lenis + ScrollTrigger) mit dem Fortschritt p ∈ [0, 9].
 * p = Kapitelindex + Anteil innerhalb des Kapitels. Die Bühne, die Texte
 * und die Freigabe-Karte lesen ausschließlich diesen Wert.
 */
export function createStory({ storyEl, chapterEls, plateEls, stationEls, traceNote, reduced, onChapter }) {
  const n = chapterEls.length;
  // Kapitelgrenzen auf dem Weg, für die Fortschrittsleiste
  const CH_U = Array.from({ length: n + 1 }, (_, i) => uAt(i));
  // goal: wo der Scroll steht, u: wo die Geschichte gerade ist (beides als Weg)
  const state = { goal: 0, u: -1, raw: 0, p: 0, dir: 1, leap: false, through: false, seen: new Set(), active: new Array(n).fill(false), revealed: new Array(n).fill(false) };

  // Scrollposition, an der die Geschichte gerade wartet (siehe tick), sonst null
  let wallY = null, lastY = window.scrollY, leapUntil = 0;
  /* Sprünge laufen durch einen Halt hindurch: Fortschrittsleiste, Navigation, Anker, Ende-Taste */
  function leap(ms) {
    state.leap = true;
    leapUntil = Math.max(leapUntil, performance.now() + ms);
  }

  let lenis = null;
  const lenisRaf = (t) => lenis?.raf(t * 1000);
  if (!reduced) {
    lenis = new Lenis({
      lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.92, touchMultiplier: 1.4,
      // am Halt nimmt die Seite kein Weiterscrollen an, zurück geht es immer
      virtualScroll: ({ deltaY, event }) => {
        if (wallY == null || deltaY <= 0 || lenis.targetScroll < wallY - 1) return true;
        if (event.cancelable) event.preventDefault();
        return false;
      },
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(lenisRaf);
    gsap.ticker.lagSmoothing(0);
  }

  const trigger = ScrollTrigger.create({
    trigger: storyEl,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (st) => { state.goal = st.progress * U_TOTAL; },
  });

  let lastT = 0;
  /* instant: ohne Nachlauf, etwa solange die Bühne nicht zu sehen ist.
     holdAt: p eines Kapitel-Halts, an dem die Geschichte gerade wartet (Kapitel 05, bis Freigabe,
     Buchung und Aufsicht einmal durchgelaufen sind). Dort geht es auch für den Scroll nicht weiter.
     Gehalten wird nur, wer scrollend von vorn kommt. Wer hindurchgesprungen ist (through), wird
     erst wieder gehalten, wenn er zurück vor den Halt scrollt und erneut ankommt. */
  function tick(instant = false, holdAt = null) {
    const now = performance.now(), dt = Math.min(0.05, (now - lastT) / 1000);
    lastT = now;
    const sy = window.scrollY;
    if (Math.abs(sy - lastY) > window.innerHeight * 0.9) leap(600);   // ein Satz, kein Scrollen
    lastY = sy;
    if (state.leap && now >= leapUntil) state.leap = false;
    const wallU = holdAt == null || reduced ? null : uEnd(holdAt);
    if (wallU != null) {
      if ((state.leap || instant) && state.goal > wallU) state.through = true;
      else if (state.goal < wallU - 0.5) state.through = false;
    }
    if (wallU != null && !instant && !state.leap && !state.through && state.u >= 0) {
      wallY = trigger.start + (wallU / U_TOTAL) * (trigger.end - trigger.start);
      if (lenis) {
        if (lenis.targetScroll > wallY + 0.5) lenis.scrollTo(wallY, lenis.isScrolling === 'native' ? { immediate: true } : { lerp: 0.12 });
      } else if (sy > wallY + 0.5) window.scrollTo(0, wallY);
      if (state.goal > wallU) state.goal = wallU;
    } else {
      wallY = null;
    }
    const gap = state.goal - state.u, dist = Math.abs(gap);
    const step = (FOLLOW + Math.max(0, dist - FOLLOW_SLACK) * FOLLOW_GAIN) * dt;
    if (reduced || instant || state.u < 0 || dist <= step) state.u = state.goal;
    else state.u += Math.sign(gap) * step;
    if (gap !== 0) state.dir = Math.sign(gap);

    const raw = pAt(state.u);
    const chapter = Math.min(Math.floor(raw + 1e-4), n - 1);
    // Fortschrittsleiste: Kapitel + Anteil am Weg des Kapitels, läuft auch im Halt weiter
    state.raw = chapter + clamp01((state.u - CH_U[chapter]) / (CH_U[chapter + 1] - CH_U[chapter]));
    // Reduced Motion: eingeschwungener Zustand je Kapitel statt Zwischenstufen
    state.p = reduced ? TARGET[chapter] : raw;

    for (let i = 0; i < n; i++) {
      const el = chapterEls[i];
      const c = clamp01(raw - i);
      let o, y;
      if (reduced) {
        o = chapter === i ? 1 : 0;
        y = 0;
      } else if (i === 0) {
        o = 1 - seg(c, 0.55, 0.85);
        y = -seg(c, 0.55, 0.85) * 24;
      } else if (i === n - 1) {
        o = seg(c, 0, 0.15);
        y = (1 - seg(c, 0, 0.15)) * 24;
      } else {
        o = seg(c, 0, 0.15) * (1 - seg(c, 0.9, 0.99));
        y = (1 - seg(c, 0, 0.15)) * 24 - seg(c, 0.9, 0.99) * 24;
      }
      el.style.opacity = o.toFixed(3);
      el.style.setProperty('--ty', `${y.toFixed(1)}px`);
      const active = o > 0.01;
      if (active !== state.active[i]) {
        state.active[i] = active;
        el.classList.toggle('is-active', active);
        if (active) {
          const forward = state.dir >= 0 || !state.revealed[i];
          revealWords(el, { instant: reduced || !forward });
          state.revealed[i] = true;
        } else if (raw < i) {
          // nach oben verlassen: beim nächsten Vorwärts-Einstieg erneut einblenden
          resetWords(el);
          state.revealed[i] = false;
        }
      }
      if (c >= 0.12 && !state.seen.has(i)) {
        state.seen.add(i);
        onChapter?.(i);
      }
    }

    // Listen in Kapitel 03 und 06 folgen der Bühne
    for (let k = 0; k < plateEls.length; k++) plateEls[k].classList.toggle('is-on', state.p >= SNAP[k] - 0.001);
    traceNote?.classList.toggle('is-on', state.p >= SNAP[3] + 0.05);
    for (let k = 0; k < stationEls.length; k++) stationEls[k].classList.toggle('is-on', state.p >= STATION_P[k] - 0.005);
  }

  function scrollTo(target) {
    leap(2000);
    if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.6 });
    else document.querySelector(target)?.scrollIntoView({ behavior: 'auto' });
  }

  // Springt zu einem Fortschrittswert innerhalb der Story
  function scrollToP(p) {
    const top = storyEl.getBoundingClientRect().top + window.scrollY;
    const y = top + (uAt(p) / U_TOTAL) * (storyEl.offsetHeight - window.innerHeight);
    leap(1800);
    if (lenis) lenis.scrollTo(y, { duration: 1.4 });
    else window.scrollTo({ top: y, behavior: 'auto' });
  }

  // Abbau beim Verlassen der Seite (React-Route wechselt)
  function destroy() {
    gsap.ticker.remove(lenisRaf);
    trigger.kill();
    lenis?.destroy();
    lenis = null;
  }

  return { state, tick, scrollTo, scrollToP, destroy, get lenis() { return lenis; }, get p() { return state.p; }, get raw() { return state.raw; } };
}
