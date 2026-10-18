import { Link } from "react-router-dom";

/* Wortmarke: „AI“ im CI-Blau, „ceFlow“ schwarz */
export const BrandMark = () => (
  <span className="aice">
    <span className="aice__ai">AI</span>ceFlow
  </span>
);

/* Cookie-Entscheidung zurücksetzen: der Banner erscheint beim Neuladen wieder */
const resetConsent = () => {
  try {
    localStorage.removeItem("cookie_consent");
  } catch {
    /* Speicher nicht verfügbar */
  }
  window.location.reload();
};

const SiteFooter = () => (
  <footer className="footer">
    <div className="wrap footer__row">
      <img className="footer__mark" src="/logo/aiceflow-mark.svg" alt="" width={32} height={32} aria-hidden="true" />
      <p className="footer__company">
        <BrandMark /> GmbH · Nussdorfer Straße 9 · 88662 Überlingen
      </p>
      <p className="footer__links">
        <a href="mailto:hello@aiceflow.de">hello@aiceflow.de</a>
        <a href="https://linkedin.com/company/aiceflow/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
        <button type="button" className="footer__consent" onClick={resetConsent}>Cookie-Einstellungen</button>
      </p>
    </div>
  </footer>
);

export default SiteFooter;
