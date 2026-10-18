import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { SNAP, TARGET, STATION_P } from './stage.js';
import { revealWords, resetWords } from './textfx.js';

gsap.registerPlugin(ScrollTrigger);

const clamp01 = (v) => Math.max(0, Math.min(1, v));
const seg = (p, a, b) => clamp01((p - a) / (b - a));

/*
 * Verbindet Scroll (Lenis + ScrollTrigger) mit dem Fortschritt p ∈ [0, 8].
 * p = Kapitelindex + Anteil innerhalb des Kapitels. Die Bühne, die Texte
 * und die Freigabe-Karte lesen ausschließlich diesen Wert.
 */
export function createStory({ storyEl, chapterEls, plateEls, stationEls, traceNote, reduced, onChapter }) {
  const n = chapterEls.length;
  const state = { raw: 0, p: 0, dir: 1, seen: new Set(), active: new Array(n).fill(false), revealed: new Array(n).fill(false) };

  let lenis = null;
  const lenisRaf = (t) => lenis?.raf(t * 1000);
  if (!reduced) {
    lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.92, touchMultiplier: 1.4 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(lenisRaf);
    gsap.ticker.lagSmoothing(0);
  }

  const trigger = ScrollTrigger.create({
    trigger: storyEl,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (st) => {
      state.raw = st.progress * n;
      state.dir = st.direction || 1;
    },
  });

  function tick() {
    const raw = state.raw;
    // Reduced Motion: eingeschwungener Zustand je Kapitel statt Zwischenstufen
    state.p = reduced ? TARGET[Math.min(Math.floor(raw + 1e-4), n - 1)] : raw;

    for (let i = 0; i < n; i++) {
      const el = chapterEls[i];
      const c = clamp01(raw - i);
      let o, y;
      if (reduced) {
        o = Math.min(Math.floor(raw + 1e-4), n - 1) === i ? 1 : 0;
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
    if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.6 });
    else document.querySelector(target)?.scrollIntoView({ behavior: 'auto' });
  }

  // Springt zu einem Fortschrittswert innerhalb der Story
  function scrollToP(p) {
    const top = storyEl.getBoundingClientRect().top + window.scrollY;
    const y = top + (p / n) * (storyEl.offsetHeight - window.innerHeight);
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
