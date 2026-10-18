import gsap from 'gsap';

/*
 * Kapitel 05, zwei Takte wie im Video:
 * 1. Freigabe vorab (Human-in-the-Loop): Die Rechnung hält an Ebene 03. Weiter geht es nach Klick
 *    auf „Freigeben" oder automatisch 2 s nachdem weitergescrollt wurde. „Ablehnen" wird
 *    protokolliert; für den Trace in Kapitel 06 zeigt die Demo danach den freigegebenen Weg.
 * 2. Aufsicht im Betrieb (Human-on-the-Loop): Nach der Buchung zeigt das Panel die Live-Aktivität,
 *    eine laufende Aktion lässt sich anhalten.
 * Reduced Motion: kein Timer, die Freigabe erfolgt beim Verlassen des Kapitels.
 */
const IN_CHAPTER = (p) => p >= 4.44 && p < 5.05;

export function createApproval({ panel, approveBtn, rejectBtn, hint, oversight, haltBtn, stage, shared, reduced, onApprove, onReject, onHalt }) {
  let timer = null;
  let rejected = false;
  let halted = false;

  function approve(how) {
    if (shared.approved) return;
    shared.approved = true;
    if (timer) { clearTimeout(timer); timer = null; }
    if (reduced || how === 'reduced') {
      shared.release = 1;
    } else {
      gsap.to(shared, { release: 1, duration: 1.5, ease: 'power2.inOut' });
    }
    onApprove?.(how);
  }

  function reject() {
    if (rejected || shared.approved) return;
    rejected = true;
    rejectBtn.disabled = true;
    panel.classList.add('is-rejected');
    hint.textContent = 'Abgelehnt: Die Rechnung ginge zurück an die Buchhaltung. Die Demo zeigt weiter den freigegebenen Weg.';
    onReject?.();
  }

  function halt() {
    if (halted) return;
    halted = true;
    oversight.classList.add('is-halted');
    onHalt?.();
  }

  function setOpen(el, open, focus) {
    if (open === el.classList.contains('is-open')) return false;
    el.classList.toggle('is-open', open);
    el.setAttribute('aria-hidden', String(!open));
    if (open && focus) focus.focus({ preventScroll: true });
    return true;
  }

  approveBtn.addEventListener('click', () => approve('click'));
  rejectBtn.addEventListener('click', reject);
  haltBtn.addEventListener('click', halt);

  function tick(p) {
    setOpen(panel, IN_CHAPTER(p) && !shared.approved, approveBtn);
    // Aufsicht erst, wenn die Rechnung gebucht ist
    const watch = IN_CHAPTER(p) && shared.approved && shared.release >= 0.999;
    if (setOpen(oversight, watch) && watch) oversight.classList.add('is-live');
    stage.classList.toggle('is-oversight', watch);

    if (reduced) {
      if (!shared.approved && p >= 5.05) approve('reduced');
      return;
    }
    if (!shared.approved && p >= 4.6) {
      if (!timer) timer = setTimeout(() => approve('scroll'), 2000);
    } else if (timer && p < 4.55) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function destroy() {
    if (timer) clearTimeout(timer);
    timer = null;
    gsap.killTweensOf(shared);
  }

  return { tick, approve, destroy, get open() { return panel.classList.contains('is-open'); } };
}
