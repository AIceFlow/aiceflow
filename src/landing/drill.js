/*
 * Kapitel 06: Drill-down bis zur Modell-Begründung. Die Ebenen öffnen sich beim Scrollen
 * (Aktion → Entscheidung → Modell-Begründung). Ein Klick auf eine Rolle zeigt, was diese
 * Rolle sieht; tiefere Ebenen bleiben dann geschlossen.
 */
export const DRILL_P = [5.72, 5.77, 5.82];   // Aktion, Entscheidung, Modell-Begründung
const IN_CHAPTER = (p) => p >= DRILL_P[0] - 0.02 && p < 5.97;

export function createDrill({ panel, roleBtns, levels, onRole }) {
  let userRole = null;
  let shown = -1;

  roleBtns.forEach((b) => b.addEventListener('click', () => {
    userRole = Number(b.dataset.role);
    apply(userRole);
    onRole?.(b.textContent.trim());
  }));

  function apply(depth) {
    if (depth === shown) return;
    shown = depth;
    levels.forEach((el, i) => el.classList.toggle('is-locked', i > depth));
    roleBtns.forEach((b, i) => b.setAttribute('aria-pressed', String(i === depth)));
  }

  function tick(p) {
    const open = IN_CHAPTER(p);
    if (open !== panel.classList.contains('is-open')) {
      panel.classList.toggle('is-open', open);
      panel.setAttribute('aria-hidden', String(!open));
      if (!open) userRole = null;
    }
    const depth = p >= DRILL_P[2] ? 2 : p >= DRILL_P[1] ? 1 : 0;
    apply(userRole ?? depth);
  }

  return { tick, get open() { return panel.classList.contains('is-open'); } };
}
