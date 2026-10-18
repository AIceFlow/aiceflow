const CONVERSION_ID = "AW-17511757309";
const CONVERSION_LABEL = "SYB_CMGBxI4bEP3roJ5B'";

/* Terminkalender geöffnet (Google Kalender, Abschnitt „Gespräch“). Die Buchung selbst passiert bei Google. */
export const reportBookingOpen = () => {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") gtag("event", "termin_kalender_geoeffnet", { event_category: "termin" });
};

export const reportFormSubmitConversion = (sender: string) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: `${CONVERSION_ID}/${CONVERSION_LABEL}`,
      value: sender,
    });
    console.log("Conversion event reported to Google Ads.");
  } else {
    console.log("gtag function not found. Conversion not reported.");
  }
};
