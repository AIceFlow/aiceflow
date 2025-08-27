const CONVERSION_ID = "AW-17511757309";
const CONVERSION_LABEL = "your_unique_conversion_label_here";

export const reportFormSubmitConversion = () => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: `${CONVERSION_ID}/${CONVERSION_LABEL}`,
    });
    console.log("Conversion event reported to Google Ads.");
  } else {
    console.log("gtag function not found. Conversion not reported.");
  }
};
