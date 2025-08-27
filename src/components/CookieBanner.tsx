import React, { useState, useEffect } from "react";

type ConsentType =
  | "ad_storage"
  | "analytics_storage"
  | "ad_user_data"
  | "ad_personalization";

declare global {
  interface Window {
    gtag: (
      command: "consent" | "event",
      action: "default" | "update" | "conversion",
      params: Record<string, string | boolean | number>
    ) => void;
  }
}

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.gtag("consent", "default", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });

    const consent = localStorage.getItem("cookie_consent");
    if (consent === null) {
      setIsVisible(true);
    } else if (consent === "accepted") {
      handleAccept(false);
    }
  }, []);

  const updateConsent = (
    consent: Record<ConsentType, "granted" | "denied">
  ) => {
    window.gtag("consent", "update", consent);
  };

  const handleAccept = (setLocalStorage = true) => {
    // FIX: Explizite Typisierung des Objekts, um den Typfehler zu beheben.
    const consentStatus: Record<ConsentType, "granted" | "denied"> = {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    };
    updateConsent(consentStatus);
    if (setLocalStorage) {
      localStorage.setItem("cookie_consent", "accepted");
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    // FIX: Explizite Typisierung des Objekts, um den Typfehler zu beheben.
    const consentStatus: Record<ConsentType, "granted" | "denied"> = {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    };
    updateConsent(consentStatus);
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up bg-gray-900 p-4 text-white shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          Wir verwenden Cookies, um die Leistung unserer Website zu analysieren.
          Indem Sie auf „Akzeptieren“ klicken, stimmen Sie der Verwendung von
          Tracking-Technologien für Marketingzwecke zu.
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <button
            onClick={handleDecline}
            className="rounded-md bg-gray-700 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-600"
          >
            Ablehnen
          </button>
          <button
            onClick={() => handleAccept(true)}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-500"
          >
            Akzeptieren
          </button>
        </div>
      </div>
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;
