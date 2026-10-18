/*
 * Startseite: verdrahtet Bühne, Story, Freigabe, Drill-down, Trace, Film und Terminbuchung.
 * Erwartet, dass das Markup (markup.html) bereits im DOM steht. Gibt eine Abbau-Funktion zurück,
 * die alles Globale wieder löst (Ticker, ScrollTrigger, Lenis, Beobachter, Fenster-Ereignisse),
 * damit React die Seite beim Routenwechsel sauber verlassen und neu betreten kann.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Stage, TARGET } from './stage.js';
import { createStory } from './story.js';
import { createApproval } from './approval.js';
import { createDrill } from './drill.js';
import { createTrace } from './trace.js';
import { createFilm, FILM_T, fmtT } from './film.js';
import { createBooking } from './booking.js';
import { splitWords } from './textfx.js';

const CHAPTER_NAMES = ['Die Kontrollschicht', 'Ohne Rahmen', 'Das Gateway entsteht', 'Identität und Berechtigungen', 'Freigabe und Aufsicht', 'AIceFlow Trace', 'Eigener Agent', 'Ein Rahmen für alle'];

/* Text mit Wortmarke setzen: „AI“ im CI-Blau, „ceFlow“ schwarz (wie span.aice im Markup) */
function setBrandText(el, text) {
  el.textContent = '';
  for (const part of text.split(/(AIceFlow)/)) {
    if (!part) continue;
    if (part !== 'AIceFlow') { el.append(part); continue; }
    const mark = document.createElement('span');
    mark.className = 'aice';
    const ai = document.createElement('span');
    ai.className = 'aice__ai';
    ai.textContent = 'AI';
    mark.append(ai, 'ceFlow');
    el.append(mark);
  }
}

export function initLanding({ onBookingOpen } = {}) {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const off = [];   // Abbau-Schritte
  const listen = (target, type, fn, opts) => { target.addEventListener(type, fn, opts); off.push(() => target.removeEventListener(type, fn, opts)); };

  gsap.registerPlugin(ScrollTrigger);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const compactQuery = matchMedia('(max-width: 1023px)');
  document.documentElement.classList.toggle('reduced', reduced);

  /* ---------- DOM ---------- */
  const storyEl = $('#story');
  const stageEl = $('#stage');
  const viewEl = $('#stage-view');
  const chapterEls = $$('.chapter', storyEl);
  const plateEls = $$('#plate-list .plate');
  const stationEls = $$('#station-list .station');
  const progressNum = $('#progress-num');
  const progressName = $('#progress-name');
  const progressBtns = $$('#progress [data-goto]');
  const progressFills = progressBtns.map((b) => $('.progress__fill', b));
  const progressFilm = $('#progress-film');

  $$('[data-words]').forEach(splitWords);

  /* ---------- Module ---------- */
  const shared = { approved: false, release: 0 };
  const stage = new Stage({ board: $('#board'), svg: $('#stage-svg') });

  const approval = createApproval({
    panel: $('#approval'), approveBtn: $('#approve-btn'), rejectBtn: $('#reject-btn'), hint: $('#approval-hint'),
    oversight: $('#oversight'), haltBtn: $('#halt-btn'), stage: stageEl, shared, reduced,
  });
  off.push(() => approval.destroy());

  const drill = createDrill({ panel: $('#drill'), roleBtns: $$('#drill .role'), levels: $$('#drill .level') });


  const story = createStory({ storyEl, chapterEls, plateEls, stationEls, traceNote: $('#trace-note'), reduced });
  off.push(() => story.destroy());

  /* ---------- Bühne in den sichtbaren Bereich einpassen ---------- */
  function layout() {
    const compact = compactQuery.matches;
    const sr = stageEl.getBoundingClientRect();
    const vr = viewEl.getBoundingClientRect();
    stage.resize({ x: vr.left - sr.left, y: vr.top - sr.top, w: vr.width, h: vr.height }, compact);
    const { ox, oy, s } = stage.fit;
    stageEl.style.setProperty('--ox', ox.toFixed(1));
    stageEl.style.setProperty('--oy', oy.toFixed(1));
    stageEl.style.setProperty('--s', s.toFixed(4));
    const root = document.documentElement.style;
    if (compact) {
      root.removeProperty('--col-w');
      root.removeProperty('--hero-w');
      return;
    }
    // Textspalte endet vor der Zeichnung (linke Klammer bei x ≈ 570, Ebenen ab x = 614).
    // Im Einstieg steht die Schicht schon auf der Bühne: die Einstiegsspalte bleibt so schmal wie alle.
    const gutter = 72;
    const col = Math.max(280, Math.min(470, ox + 560 * s - gutter - 32));
    root.setProperty('--col-w', `${Math.round(col)}px`);
    root.setProperty('--hero-w', `${Math.round(col)}px`);
  }
  layout();

  /* ---------- Kapitel-Fortschritt ---------- */
  let progressCh = -1;
  function updateProgress(raw) {
    progressFills.forEach((f, i) => {
      const v = Math.max(0, Math.min(1, raw - i)).toFixed(3);
      if (f._v !== v) { f._v = v; f.style.transform = `scaleX(${v})`; }
    });
    const ch = Math.min(7, Math.floor(raw + 1e-4));
    if (ch === progressCh) return;
    progressCh = ch;
    progressNum.textContent = `${String(ch + 1).padStart(2, '0')} / 08`;
    setBrandText(progressName, CHAPTER_NAMES[ch]);
    // Dieselbe Stelle im Film
    progressFilm.dataset.film = String(FILM_T[ch]);
    progressFilm.textContent = `Im Film ab ${fmtT(FILM_T[ch])}`;
    progressBtns.forEach((b, i) => {
      if (i === ch) b.setAttribute('aria-current', 'step');
      else b.removeAttribute('aria-current');
    });
  }
  progressBtns.forEach((b) => b.addEventListener('click', () => story.scrollToP(TARGET[Number(b.dataset.goto)])));

  // Einblendung beim Laden (zeitbasiert, Reduced Motion: sofort)
  const bootT = performance.now();
  const intro = () => (reduced ? 1 : Math.min(1, Math.max(0, (performance.now() - bootT - 250) / 1400)));

  // Erster Zustand sofort, damit vor dem ersten Frame nichts Ungesetztes aufblitzt
  story.tick();
  stage.update({ p: story.p, approved: shared.approved, release: shared.release, intro: intro() });
  if (reduced) stage.setPlaying(false);

  /* ---------- Render-Loop ---------- */
  let active = true;
  const loop = () => {
    story.tick();
    const p = story.p;
    approval.tick(p);
    drill.tick(p);
    updateProgress(story.raw);
    if (!active) return;
    stage.update({ p, approved: shared.approved, release: shared.release, card: approval.open, intro: intro() });
  };
  gsap.ticker.add(loop);
  off.push(() => gsap.ticker.remove(loop));

  /* Bühne pausiert außerhalb des Viewports und bei verstecktem Tab */
  let stageVisible = true, tabVisible = !document.hidden;
  const setActive = () => {
    active = stageVisible && tabVisible;
    stage.setPlaying(active && !reduced);
  };
  const topbar = $('#topbar');
  const stageObserver = new IntersectionObserver(([e]) => {
    stageVisible = e.isIntersecting;
    setActive();
    topbar.classList.toggle('is-solid', !e.isIntersecting);
  }, { threshold: 0 });
  stageObserver.observe(storyEl);
  off.push(() => stageObserver.disconnect());
  listen(document, 'visibilitychange', () => { tabVisible = !document.hidden; setActive(); });

  /* Resize */
  let resizeT = 0, alive = true;
  const onResize = () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => { if (alive) { layout(); ScrollTrigger.refresh(); } }, 120);
  };
  listen(window, 'resize', onResize);
  listen(compactQuery, 'change', onResize);
  document.fonts?.ready.then(() => { if (alive) { layout(); ScrollTrigger.refresh(); } });
  off.push(() => { alive = false; clearTimeout(resizeT); });

  /* ---------- Interaktionen ---------- */

  /* Sprünge innerhalb der Seite, sanft über Lenis */
  $$('a[data-log], a[data-jump]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const target = el.getAttribute('href');
      if (!target?.startsWith('#')) return;
      e.preventDefault();
      if (target === '#top') story.scrollToP(0);
      else story.scrollTo(target);
    });
  });

  /* Film: Wechsel zwischen Bühne und Film, ohne die Geschichte doppelt zu erzählen */
  const film = createFilm({
    dialog: $('#film-dialog'), video: $('#film-video'), chapters: $('#film-chapters'),
    onPause: () => story.lenis?.stop(),
    onResume: () => story.lenis?.start(),
  });
  off.push(() => film.destroy());

  createBooking({ root: $('#booking'), gate: $('#booking-gate'), loadBtn: $('#booking-load'), tabLink: $('#booking-tab'), missing: $('#booking-missing'), onLoad: onBookingOpen });

  const trace = createTrace({ trail: $('#trail'), dirBtns: $$('#trail .dir__btn'), kinds: $$('#trace-kinds .kind'), reduced });
  off.push(() => trace.destroy());

  return function destroy() {
    while (off.length) {
      try { off.pop()(); } catch { /* weiter abbauen */ }
    }
  };
}
