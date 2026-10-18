/*
 * Abschnitt „Trace heißt Spur“: lesbares Protokoll einer Rechnung.
 * - Leserichtung umschalten: von der Quelle zur Buchung oder zurück.
 * - Die Liste „Was Trace mitschreibt“ hebt die passenden Stellen in der Spur hervor
 *   (Maus, Fokus oder Klick; ein zweiter Klick löst die Hervorhebung).
 * - Die Einträge blenden nacheinander ein, sobald die Spur sichtbar wird.
 */
export function createTrace({ trail, dirBtns, kinds, reduced, onDirection, onSeen }) {
  let pinned = null;

  function setDir(dir) {
    trail.classList.toggle('is-back', dir === 'back');
    dirBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.dir === dir)));
  }
  dirBtns.forEach((b) => b.addEventListener('click', () => {
    if (b.getAttribute('aria-pressed') === 'true') return;
    setDir(b.dataset.dir);
    onDirection?.(b.dataset.dir);
  }));

  function highlight(k) {
    if (k) trail.dataset.hl = k;
    else delete trail.dataset.hl;
    kinds.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.k === pinned)));
  }
  kinds.forEach((b) => {
    const k = b.dataset.k;
    b.addEventListener('mouseenter', () => highlight(k));
    b.addEventListener('mouseleave', () => highlight(pinned));
    b.addEventListener('focus', () => highlight(k));
    b.addEventListener('blur', () => highlight(pinned));
    b.addEventListener('click', () => { pinned = pinned === k ? null : k; highlight(pinned ?? k); });
  });

  if (reduced) {
    trail.classList.remove('is-pending');
  }
  const seen = new IntersectionObserver(([e], io) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    trail.classList.remove('is-pending');
    if (!reduced) trail.classList.add('is-in');
    onSeen?.();
  }, { threshold: 0.25 });
  seen.observe(trail);

  return { destroy: () => seen.disconnect() };
}
