const CONVERSION_ID = "AW-17511757309";
const CONVERSION_LABEL = "SYB_CMGBxI4bEP3roJ5B'";

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
