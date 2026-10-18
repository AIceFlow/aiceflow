/*
 * Terminbuchung über Google Kalender (Terminplan). Der Kalender wird erst nach Klick geladen,
 * weil dabei Daten an Google gehen (Zwei-Klick-Lösung, ohne Cookie-Banner).
 * BOOKING_URL: Terminplan-Adresse für die Einbettung (mit ?gv=true erlaubt Google das Einbetten).
 * BOOKING_LINK: der kurze Teilen-Link, für „In neuem Tab öffnen“.
 */
export const BOOKING_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3t44tb_hJKFWh6EcBnyM08Kh3DAyDZRmntmHs0qc5wa1s1CtHPyBfWY1cnM03H0HfNIG6um8cC';
export const BOOKING_LINK = 'https://calendar.app.google/4akp6gfpSMuBh3yT9';

export function createBooking({ root, gate, loadBtn, tabLink, missing, onLoad }) {
  if (BOOKING_LINK || BOOKING_URL) tabLink.href = BOOKING_LINK || BOOKING_URL;
  else tabLink.hidden = true;

  loadBtn.addEventListener('click', () => {
    if (!BOOKING_URL) {
      missing.hidden = false;
      return;
    }
    const url = new URL(BOOKING_URL);
    url.searchParams.set('gv', 'true');
    const frame = document.createElement('iframe');
    frame.className = 'booking__frame';
    frame.src = url.toString();
    frame.title = 'Termin mit AIceFlow buchen (Google Kalender)';
    gate.replaceWith(frame);
    root.classList.add('is-loaded');
    onLoad?.();
  });
}
