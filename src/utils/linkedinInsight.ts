const LINKEDIN_INSIGHT_SCRIPT_SELECTOR = "script[data-linkedin-insight='true']";

type LinkedInTracker = {
  (...args: unknown[]): void;
  q?: unknown[][];
};

declare global {
  interface Window {
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    lintrk?: LinkedInTracker;
  }
}

let isLinkedInInsightInitialized = false;

export const initializeLinkedInInsightTag = () => {
  const partnerId = import.meta.env.VITE_LINKEDIN_PARTNER_ID?.trim();

  if (
    typeof window === "undefined" ||
    !partnerId ||
    isLinkedInInsightInitialized
  ) {
    return;
  }

  isLinkedInInsightInitialized = true;

  window._linkedin_partner_id = partnerId;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  if (!window._linkedin_data_partner_ids.includes(partnerId)) {
    window._linkedin_data_partner_ids.push(partnerId);
  }

  if (typeof window.lintrk !== "function") {
    const lintrk: LinkedInTracker = (...args: unknown[]) => {
      lintrk.q = lintrk.q || [];
      lintrk.q.push(args);
    };
    window.lintrk = lintrk;
  }

  if (document.querySelector(LINKEDIN_INSIGHT_SCRIPT_SELECTOR)) {
    return;
  }

  const insightScript = document.createElement("script");
  insightScript.type = "text/javascript";
  insightScript.async = true;
  insightScript.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  insightScript.setAttribute("data-linkedin-insight", "true");
  document.head.appendChild(insightScript);
};
