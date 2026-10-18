import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import SiteFooter from "./SiteFooter";
import "@/landing/landing.css";

/* Rahmen für Impressum und Datenschutz: schlichter Kopf, Text, gemeinsamer Fuß */
const LegalLayout = ({ title, children }: { title: string; children: ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} – AIceFlow`;
    return () => {
      document.title = "AIceFlow – Die Kontrollschicht für KI-Agenten";
    };
  }, [title]);

  return (
    <>
      <header className="legal-top">
        <Link className="brand" to="/" aria-label="AIceFlow, zur Startseite">
          <img src="/logo/aiceflow-horizontal.svg" alt="AIceFlow" width={95} height={28} />
        </Link>
        <Link className="btn" to="/">Zur Startseite</Link>
      </header>
      <main className="legal">
        <div className="legal__wrap">
          <h1 className="legal__title">{title}</h1>
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default LegalLayout;
