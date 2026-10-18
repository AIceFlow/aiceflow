/*
 * Film und Bühne erzählen dieselbe Geschichte. Die Seite bietet den Film deshalb nicht als
 * zweiten Abschnitt an, sondern als Wechsel: im Einstieg, an jeder Stelle der Story
 * („Im Film ab …“) und beim Pilot zum Weitergeben. Der Dialog springt ins passende Kapitel.
 * Deep Link: …/#film öffnet den Film beim Laden.
 */
// Beginn der acht Seitenkapitel im Film (Szenen-Starts aus compositions/, 88,1 s)
export const FILM_T = [0, 6.5, 15.1, 23.1, 34.5, 52.5, 71.5, 79.1];
export const fmtT = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

export function createFilm({ dialog, video, chapters, onOpen, onCopy, onPause, onResume }) {
  const chapterBtns = [...chapters.querySelectorAll('button[data-t]')];
  const sceneT = chapterBtns.map((b) => Number(b.dataset.t));   // Szenen des Films, feiner als die Seitenkapitel
  let current = -1;

  function seek(t) {
    const go = () => {
      video.currentTime = t;
      video.play().catch(() => {});
    };
    if (video.readyState >= 1) go();
    else {
      video.preload = 'auto';
      video.addEventListener('loadedmetadata', go, { once: true });
      video.load();
    }
  }

  function open(t = 0, source = 'einstieg') {
    if (!dialog.open) {
      dialog.showModal();
      onPause?.();
      onOpen?.(t, source);
    }
    seek(t);
  }

  function close() {
    if (dialog.open) dialog.close();
  }

  dialog.addEventListener('close', () => {
    video.pause();
    onResume?.();
    if (location.hash === '#film') history.replaceState(null, '', location.pathname + location.search);
  });
  // Klick neben den Inhalt schließt
  dialog.addEventListener('click', (e) => { if (e.target === dialog) close(); });
  dialog.querySelectorAll('[data-film-close]').forEach((b) => b.addEventListener('click', close));
  chapterBtns.forEach((b) => b.addEventListener('click', () => seek(Number(b.dataset.t))));

  video.addEventListener('timeupdate', () => {
    let i = 0;
    for (let k = 0; k < sceneT.length; k++) if (video.currentTime >= sceneT[k] - 0.05) i = k;
    if (i === current) return;
    current = i;
    chapterBtns.forEach((b, k) => b.toggleAttribute('aria-current', k === i));
  });

  // Alles mit data-film öffnet den Film; der Wert ist die Startzeit
  document.querySelectorAll('[data-film]').forEach((el) => {
    el.addEventListener('click', () => open(Number(el.dataset.film) || 0, el.dataset.filmSource || 'seite'));
  });

  // Link zum Film kopieren
  document.querySelectorAll('[data-copy-film]').forEach((b) => {
    b.addEventListener('click', async () => {
      const url = `${location.origin}${location.pathname}#film`;
      const status = b.parentElement.querySelector('.share__status');
      try {
        await navigator.clipboard.writeText(url);
        if (status) status.textContent = 'Link kopiert';
      } catch {
        if (status) status.textContent = url;
      }
      onCopy?.();
    });
  });

  if (location.hash === '#film') requestAnimationFrame(() => open(0, 'link'));

  return { open, close, destroy: () => { video.pause(); close(); }, get isOpen() { return dialog.open; } };
}
