import { useEffect, useRef } from "react";
import markup from "@/landing/markup.html?raw";
import { initLanding } from "@/landing/initLanding.js";
import { reportBookingOpen } from "@/utils/analytics";
import "@/landing/landing.css";

/*
 * Startseite rund um das AIceFlow Governance Gateway. Das Markup (Bühne, Story, Abschnitte,
 * Film-Dialog) kommt als HTML aus src/landing/markup.html, die Logik aus src/landing/*.js.
 * Beim Verlassen der Route wird alles Globale abgebaut und das Markup entfernt, beim
 * Zurückkommen neu aufgebaut.
 */
const Landing = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    window.scrollTo(0, 0);
    root.innerHTML = markup;
    const destroy = initLanding({ onBookingOpen: reportBookingOpen });
    return () => {
      destroy();
      root.innerHTML = "";
    };
  }, []);

  return <div ref={ref} />;
};

export default Landing;
