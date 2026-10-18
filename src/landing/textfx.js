import gsap from 'gsap';

/* Wörter in Spans aufteilen (für wortweise Einblendung). Eingebettete Elemente wie die
   Wortmarke (span.aice) bleiben erhalten und zählen als ein Wort. */
export function splitWords(el) {
  if (el.dataset.split === '1') return;
  const nodes = [...el.childNodes];
  el.textContent = '';
  for (const node of nodes) {
    if (node.nodeType !== Node.TEXT_NODE) {
      const span = document.createElement('span');
      span.className = 'w';
      span.appendChild(node);
      el.appendChild(span);
      continue;
    }
    for (const part of node.textContent.split(/(\s+)/)) {
      if (!part) continue;
      if (/^\s+$/.test(part)) { el.appendChild(document.createTextNode(' ')); continue; }
      const span = document.createElement('span');
      span.className = 'w';
      span.textContent = part;
      el.appendChild(span);
    }
  }
  el.dataset.split = '1';
}

export function revealWords(root, { instant = false } = {}) {
  const groups = root.matches('[data-words]') ? [root] : [...root.querySelectorAll('[data-words]')];
  groups.forEach((g, gi) => {
    const words = g.querySelectorAll('.w');
    gsap.killTweensOf(words);
    if (instant) { gsap.set(words, { opacity: 1, y: 0 }); return; }
    gsap.fromTo(words, { opacity: 0, y: '0.35em' }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.04, delay: 0.08 + gi * 0.2, overwrite: true });
  });
}

export function resetWords(root) {
  const words = root.querySelectorAll('[data-words] .w');
  gsap.killTweensOf(words);
  gsap.set(words, { opacity: 0, y: '0.35em' });
}
