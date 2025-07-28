import React, { useState, useContext, createContext, ReactNode } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const translations = {
  en: {
    // Header
    "nav.about": "About",
    "nav.services": "Services",
    "nav.how-it-works": "How It Works",
    "nav.testimonials": "Success Stories",
    "nav.contact": "Contact",
    "header.cta": "Schedule Consultation",

    // Hero
    "hero.title": "Intelligent Processes Powered by AI",
    "hero.description":
      "Optimize your business processes with smart automation. AIceFlow helps you cut costs, save time, and accelerate growth through innovative AI solutions.",
    "hero.cta.primary": "Book Your Free Consultation",
    "hero.cta.secondary": "Explore Our Projects",
    "hero.stats.processes": "Automated Processes",
    "hero.stats.satisfaction": "Client Satisfaction",
    "hero.stats.operations": "AI-Powered Operations",
    "hero.status.available": "Available for new projects",
    "hero.status.location": "Based at Lake Constance, Germany",

    // About
    "about.title": "About AIceFlow",
    "about.description":
      "From our base at Lake Constance, we free your team from tedious routine tasks. Our tailored automations boost your productivity while giving your team complete control at all times.",

    "about.innovation.title": "Innovation Without Limits",
    "about.custom.title": "Tailored for Your Business",
    "about.results.title": "Visible Results",

    "about.innovation.description":
      "We transform complex processes into smart, adaptable workflows that grow alongside your business.",

    "about.custom.description":
      "Every solution is precisely tailored to your goals, data, and company culture – ensuring seamless integration into your daily operations.",

    "about.results.description":
      "Enjoy immediate, measurable efficiency gains and cost savings, supported by transparent dashboards and continuous improvement.",

    // Services
    "services.title": "Services for Your Team",
    "services.description":
      "We take care of routine tasks and create transparency – so you can fully focus on your core business.",

    "services.processAutomation.title": "Workflow Automation",
    "services.processAutomation.description":
      "Accelerate workflows, eliminate bottlenecks, and maintain complete control.",
    "services.processAutomation.feature1": "Reduce manual tasks",
    "services.processAutomation.feature2": "Shorten processing times",
    "services.processAutomation.feature3": "Ensure consistent quality",
    "services.processAutomation.feature4": "Receive proactive alerts",

    "services.dashboards.title": "Transparent Dashboards",
    "services.dashboards.description":
      "Keep an eye on your key metrics at all times – interactive and in real-time.",
    "services.dashboards.feature1": "Real-time data",
    "services.dashboards.feature2": "Custom KPI overview",
    "services.dashboards.feature3": "Interactive visuals",
    "services.dashboards.feature4": "Mobile-friendly",

    "services.consultation.title": "Strategic Partnership",
    "services.consultation.description":
      "Together, we identify opportunities, plan actions, and achieve sustainable improvements.",
    "services.consultation.feature1": "Detailed process analysis",
    "services.consultation.feature2": "Customized roadmap",
    "services.consultation.feature3": "Practical training",
    "services.consultation.feature4": "Continuous support",

    // How It Works
    "howItWorks.title": "How It Works",
    "howItWorks.description":
      "Our clearly structured approach delivers rapid, controlled efficiency gains through automation.",

    "howItWorks.step1.title": "Discovery Session",
    "howItWorks.step1.description":
      "We jointly analyze your processes and identify optimal automation opportunities.",

    "howItWorks.step2.title": "Customized Blueprint",
    "howItWorks.step2.description":
      "We create a tailored automation plan perfectly aligned with your workflows.",

    "howItWorks.step3.title": "Seamless Implementation",
    "howItWorks.step3.description":
      "We implement the automation and develop clear dashboards for maximum transparency.",

    "howItWorks.step4.title": "Continuous Optimization",
    "howItWorks.step4.description":
      "We continuously monitor and refine your processes to ensure lasting efficiency gains.",

    // Testimonials
    "testimonials.title": "Client Success Stories",
    "testimonials.description":
      "See how businesses are boosting productivity with AIceFlow – without additional staffing.",

    // Showcase
    "showcase.title": "Your AI-Powered Team Dashboard",
    "showcase.description":
      "Log in to manage your team, automate workflows with LLM, and track metrics in real-time.",
    "showcase.overlay.title": "Live Process Overview",

    "showcase.stats.automationRate.label": "Automation Rate",
    "showcase.stats.automationRate.value": "{{automationRate}} %",
    "showcase.stats.latency.label": "Average Latency",
    "showcase.stats.latency.value": "{{latency}} s",
    "showcase.stats.savings.label": "Estimated Monthly Savings",
    "showcase.stats.savings.value": "{{savings}}",

    "showcase.features.title": "Key Features",
    "showcase.features.item1": "AI-Driven Task Allocation",
    "showcase.features.item2": "Customizable Dashboards",
    "showcase.features.item3": "Real-Time Collaboration",
    "showcase.features.item4": "Seamless Integrations",

    "showcase.impact.title": "Business Impact",
    "showcase.impact.item1.label": "Time Saved",
    "showcase.impact.item1.value": "{{timeSaved}}",
    "showcase.impact.item2.label": "Reduced Manual Steps",
    "showcase.impact.item2.value": "{{interventionReduction}} %",
    "showcase.impact.item3.label": "ROI Period",
    "showcase.impact.item3.value": "{{roiPeriod}}",

    // Industries

    // Why AIceFlow
    "why.title": "Why Choose AIceFlow?",
    "why.description":
      "What sets us apart and why leading businesses trust our solutions.",

    "why.customizable.title": "100% Customized",
    "why.customizable.description":
      "Our solutions perfectly match your requirements – for maximum benefit.",

    "why.localGlobal.title": "Locally Rooted, Globally Minded",
    "why.localGlobal.description":
      "Local expertise combined with global innovation.",

    "why.resultsDriven.title": "Results-Oriented",
    "why.resultsDriven.description":
      "We focus on measurable outcomes and ongoing optimization.",

    "why.teamwork.title": "Human & AI in Harmony",
    "why.teamwork.description":
      "Our AI complements and supports your team without replacing it.",

    //Team

    "team.ff.name": "Felix Funke",
    "team.ff.position": "Process Architect & AI Strategist",
    "team.ff.bio":
      "Felix bridges business thinking with deep technical execution. He designs scalable LLM-based workflows and builds the systems behind them — from backend logic to interface design. Whether it's automating editorial pipelines or enabling structured human-AI collaboration, Felix turns complex processes into intuitive, intelligent platforms.",
    "team.ff.expertise.ml": "LLM Applications & Prompt Engineering",
    "team.ff.expertise.automation": "AI-Powered Process Automation",
    "team.ff.expertise.cv": "Realtime Interfaces & Data Visualization",
    "team.ff.expertise.optimization": "Operational & Cost Optimization",
    "team.expertiseTitle": "Expertise",

    "footer.company.description":
      "We help businesses across southern Germany automate their processes intelligently and efficiently using AI.",

    "footer.tagline": "Precision. Strategy. Excellence.",
  },
  de: {
    // Header
    "nav.about": "Über uns",
    "nav.services": "Leistungen",
    "nav.how-it-works": "So funktioniert's",
    "nav.testimonials": "Erfolgsgeschichten",
    "nav.contact": "Kontakt",
    "header.cta": "Beratung vereinbaren",

    // Hero
    "hero.title": "Intelligente Prozesse dank KI",
    "hero.description":
      "Optimieren Sie Ihre Geschäftsprozesse mit smarter Automatisierung. AIceFlow unterstützt Sie dabei, Kosten zu senken, Arbeitszeit zu sparen und Wachstum mit innovativer KI-Technologie zu beschleunigen.",
    "hero.cta.primary": "Kostenlose Beratung vereinbaren",
    "hero.cta.secondary": "Unsere Projekte entdecken",
    "hero.stats.processes": "Automatisierte Prozesse",
    "hero.stats.satisfaction": "Kundenzufriedenheit",
    "hero.stats.operations": "KI-gestützte Abläufe",
    "hero.status.available": "Verfügbar für neue Projekte",
    "hero.status.location": "Standort: Bodensee, Deutschland",

    // About
    "about.title": "Über AIceFlow",
    "about.description":
      "Von unserem Sitz am Bodensee aus entlasten wir Ihr Team von zeitraubenden Routineaufgaben. Unsere maßgeschneiderten Automatisierungen erhöhen Ihre Produktivität und geben Ihrem Team die volle Kontrolle – jederzeit.",

    "about.innovation.title": "Innovation ohne Grenzen",
    "about.custom.title": "Individuell wie Ihr Unternehmen",
    "about.results.title": "Sichtbare Ergebnisse",

    "about.innovation.description":
      "Wir verwandeln komplexe Prozesse in intelligente, flexible Workflows, die mit Ihrem Unternehmen wachsen.",

    "about.custom.description":
      "Jede Lösung ist genau auf Ihre Ziele, Daten und Unternehmenskultur abgestimmt – für optimale Integration in Ihren Alltag.",

    "about.results.description":
      "Profitieren Sie unmittelbar von messbaren Effizienzsteigerungen und Kosteneinsparungen – unterstützt durch klare Dashboards und kontinuierliche Optimierung.",

    // Services
    "services.title": "Unsere Leistungen für Ihr Team",
    "services.description":
      "Wir nehmen Ihnen Routineaufgaben ab und schaffen Transparenz – damit Sie sich voll auf das Kerngeschäft konzentrieren können.",

    "services.processAutomation.title": "Workflow-Automatisierung",
    "services.processAutomation.description":
      "Beschleunigen Sie Abläufe, beseitigen Sie Engpässe und behalten Sie dabei die volle Kontrolle.",
    "services.processAutomation.feature1": "Weniger manuelle Aufgaben",
    "services.processAutomation.feature2": "Kürzere Bearbeitungszeiten",
    "services.processAutomation.feature3": "Konstante Qualität",
    "services.processAutomation.feature4": "Proaktive Benachrichtigungen",

    "services.dashboards.title": "Transparente Dashboards",
    "services.dashboards.description":
      "Behalten Sie Ihre wichtigsten Kennzahlen jederzeit im Blick – interaktiv und in Echtzeit.",
    "services.dashboards.feature1": "Echtzeit-Daten",
    "services.dashboards.feature2": "Individuelle KPI-Übersicht",
    "services.dashboards.feature3": "Interaktive Grafiken",
    "services.dashboards.feature4": "Mobile Nutzung möglich",

    "services.consultation.title": "Strategische Partnerschaft",
    "services.consultation.description":
      "Gemeinsam mit Ihnen identifizieren wir Potenziale, planen Maßnahmen und sorgen langfristig für spürbare Verbesserungen.",
    "services.consultation.feature1": "Detaillierte Prozessanalyse",
    "services.consultation.feature2": "Individueller Fahrplan",
    "services.consultation.feature3": "Praxisnahe Schulungen",
    "services.consultation.feature4": "Kontinuierlicher Support",

    // How It Works
    "howItWorks.title": "So funktioniert's",
    "howItWorks.description":
      "Unser klar strukturierter Ablauf sorgt für schnelle, kontrollierte Effizienzsteigerung durch Automatisierung.",

    "howItWorks.step1.title": "Discovery-Session",
    "howItWorks.step1.description":
      "Gemeinsam analysieren wir Ihre Abläufe und identifizieren optimale Automatisierungspotenziale.",

    "howItWorks.step2.title": "Maßgeschneiderte Planung",
    "howItWorks.step2.description":
      "Wir erstellen einen individuellen Automatisierungsplan, der Ihre Prozesse perfekt ergänzt.",

    "howItWorks.step3.title": "Reibungslose Implementierung",
    "howItWorks.step3.description":
      "Wir setzen die Automatisierung um und erstellen übersichtliche Dashboards für maximale Transparenz.",

    "howItWorks.step4.title": "Kontinuierliche Optimierung",
    "howItWorks.step4.description":
      "Wir überwachen und verfeinern Ihre Prozesse kontinuierlich für nachhaltige Effizienzgewinne.",

    // Industries
    "industries.title": "Branchen, die wir stärken",
    "industries.description":
      "Ob Logistik, Marketing oder Healthcare – unsere Automatisierungslösungen passen sich Ihren Anforderungen an und ermöglichen mehr mit weniger.",

    "industries.logistics.name": "Logistik",
    "industries.logistics.description":
      "Optimieren Sie Routen und prognostizieren Sie die Nachfrage, damit Ihre Lieferkette reibungslos läuft.",

    "industries.marketing.name": "Marketing",
    "industries.marketing.description":
      "Automatisieren Sie Kampagnenabläufe, gewinnen Sie tiefere Einblicke und steigern Sie die Kundenbindung.",

    "industries.sales.name": "Vertrieb",
    "industries.sales.description":
      "Qualifizieren Sie Leads schneller, automatisieren Sie Follow-ups und pflegen Sie Kundenbeziehungen in großem Maßstab.",

    "industries.operations.name": "Betrieb",
    "industries.operations.description":
      "Optimieren Sie Kernprozesse und überwachen Sie die Leistung in Echtzeit, um Engpässe zu vermeiden.",

    "industries.manufacturing.name": "Produktion",
    "industries.manufacturing.description":
      "Verbessern Sie die Zuverlässigkeit Ihrer Fertigung mit vorausschauender Wartung und Qualitätskontrollen.",

    "industries.healthcare.name": "Healthcare",
    "industries.healthcare.description":
      "Verbessern Sie das Patientenerlebnis mit automatischer Terminplanung und sicherer Datenverarbeitung.",

    // Testimonials
    "testimonials.title": "Erfolgsgeschichten unserer Kunden",
    "testimonials.description":
      "Erfahren Sie, wie Unternehmen mit AIceFlow ihre Produktivität steigern – ohne zusätzlichen Personalaufwand.",

    //Showcase
    "showcase.title": "Ihr KI-gesteuertes Team-Dashboard",
    "showcase.description":
      "Melden Sie sich an, um Ihr Team zu verwalten, Arbeitsabläufe per LLM zu automatisieren und Kennzahlen in Echtzeit zu verfolgen.",
    "showcase.overlay.title": "Live-Prozessübersicht",

    "showcase.stats.automationRate.label": "Automatisierungsrate",
    "showcase.stats.automationRate.value": "45 %",
    "showcase.stats.latency.label": "Durchschnittliche Verzögerung",
    "showcase.stats.latency.value": "1.5 s",
    "showcase.stats.savings.label": "Geschätzte monatliche Einsparung",
    "showcase.stats.savings.value": "5000 €",

    "showcase.features.title": "Hauptfunktionen",
    "showcase.features.item1": "KI-gestützte Aufgabenverteilung",
    "showcase.features.item2": "Anpassbare Dashboards",
    "showcase.features.item3": "Echtzeit-Zusammenarbeit",
    "showcase.features.item4": "Nahtlose Integrationen",

    "showcase.impact.title": "Geschäftlicher Nutzen",
    "showcase.impact.item1.label": "Eingesparte Zeit",
    "showcase.impact.item1.value": "12 Stunden/Woche",
    "showcase.impact.item2.label": "Weniger manuelle Schritte",
    "showcase.impact.item2.value": "80 %",
    "showcase.impact.item3.label": "Amortisationszeitraum",
    "showcase.impact.item3.value": "2 Monate",
    // Why AIceFlow
    "why.title": "Warum AIceFlow?",
    "why.description":
      "Was uns besonders macht und warum führende Unternehmen auf unsere Lösungen vertrauen.",

    "why.customizable.title": "100% individuell",
    "why.customizable.description":
      "Unsere Lösungen passen sich exakt Ihren Anforderungen an – für maximalen Nutzen.",

    "why.localGlobal.title": "Regional verwurzelt, global gedacht",
    "why.localGlobal.description":
      "Lokales Verständnis kombiniert mit globaler Innovationskraft.",

    "why.resultsDriven.title": "Erfolgsorientiert",
    "why.resultsDriven.description":
      "Unser Fokus liegt auf messbaren Resultaten und stetiger Optimierung.",

    "why.teamwork.title": "Mensch & KI im Einklang",
    "why.teamwork.description":
      "Unsere KI unterstützt und ergänzt Ihr Team, ohne es zu ersetzen.",

    "why.stats.title": "AIceFlow in Zahlen",
    "why.stats.description":
      "Nachgewiesene Erfolge über diverse Branchen hinweg, mit deutlichen Effizienz- und Wachstumssteigerungen.",

    "why.stats.projects.label": "Automatisierungsprojekte",
    "why.stats.satisfaction.label": "Kundenzufriedenheit",
    "why.stats.timeSavings.label": "Durchschnittliche Zeitersparnis",
    "why.stats.roiTimeline.label": "Durchschnittlicher ROI-Zeitraum",

    //Team

    "team.ff.name": "Felix Funke",
    "team.ff.position": "Prozessarchitekt & KI-Stratege",
    "team.ff.bio":
      "Felix vereint technisches Know-how mit unternehmerischem Denken. Er konzipiert skalierbare LLM-Workflows und setzt sie von Grund auf um – vom Backend bis zur Nutzeroberfläche. Ob zur Automatisierung redaktioneller Abläufe oder für kontrollierbare Mensch-KI-Zusammenarbeit: Felix denkt Prozesse neu und macht sie intelligent und intuitiv bedienbar.",
    "team.ff.expertise.ml": "LLM-Anwendungen & Prompt Engineering",
    "team.ff.expertise.automation": "KI-gestützte Prozessautomatisierung",
    "team.ff.expertise.cv": "Echtzeit-Interfaces & Datenvisualisierung",
    "team.ff.expertise.optimization": "Workflow- & Kostenoptimierung",
    "team.expertiseTitle": "Expertise",

    // Contact
    "contact.title": "Bereit, Ihr Unternehmen zu transformieren?",
    "contact.description":
      "Lassen Sie uns besprechen, wie KI-Automatisierung Ihre Prozesse revolutionieren kann. Vereinbaren Sie noch heute Ihre kostenlose Beratung und entdecken Sie die Möglichkeiten.",

    // Form
    "contact.form.title": "Jetzt starten",
    "contact.form.firstNameLabel": "Vorname",
    "contact.form.firstNamePlaceholder": "Ihr Vorname",
    "contact.form.lastNameLabel": "Nachname",
    "contact.form.lastNamePlaceholder": "Ihr Nachname",
    "contact.form.emailLabel": "E-Mail-Adresse",
    "contact.form.emailPlaceholder": "ihre.email@unternehmen.de",
    "contact.form.companyLabel": "Firmenname",
    "contact.form.companyPlaceholder": "Ihr Firmenname",
    "contact.form.phoneLabel": "Telefonnummer",
    "contact.form.phonePlaceholder": "+49 (0) 123 456 789",
    "contact.form.needsLabel":
      "Erzählen Sie uns von Ihren Automatisierungsbedürfnissen",
    "contact.form.needsPlaceholder":
      "Beschreiben Sie Ihre aktuellen Prozesse und was Sie automatisieren möchten…",
    "contact.form.submit": "Kostenlose Beratung vereinbaren",
    "contact.form.requiredNote":
      "* Pflichtfelder. Wir antworten innerhalb von 24 Stunden.",

    // Contact Info
    "contact.info.title": "Kontaktieren Sie uns",
    "contact.info.office.title": "Standort",
    "contact.info.office.line1": "Region Bodensee",
    "contact.info.office.line2": "Süddeutschland",
    "contact.info.office.line3": "Baden-Württemberg",
    "contact.info.email.title": "E-Mail",
    "contact.info.email.address": "hallo@aiceflow.de",
    "contact.info.phone.title": "Telefon",
    "contact.info.phone.number": "+49 (0) 7531 123 456",
    "contact.info.hours.title": "Öffnungszeiten",
    "contact.info.hours.line1": "Mo – Fr: 9:00 – 18:00 Uhr CET",
    "contact.info.hours.line2": "Sa: 10:00 – 14:00 Uhr CET",

    // Actions
    "contact.actions.title": "Schnellaktionen",
    "contact.actions.discovery": "Entdeckungsgespräch buchen",
    "contact.actions.download": "Fallstudien herunterladen",
    "contact.actions.proposal": "Angebot anfordern",

    // Footer
    "footer.company.initials": "AF",
    "footer.company.name": "AIceFlow",
    "footer.company.description":
      "Wir transformieren Unternehmen in Süddeutschland mit modernsten KI-Automatisierungslösungen. Intelligente Prozesse, powered by AI.",

    "footer.nav.services.title": "Leistungen",
    "footer.nav.services.processAutomation": "Prozessautomatisierung",
    "footer.nav.services.customDashboards": "Individuelle Dashboards",
    "footer.nav.services.consultation": "Strategische Beratung",
    "footer.nav.services.implementation": "KI-Implementierung",
    "footer.nav.services.support": "Fortlaufender Support",

    "footer.nav.company.title": "Unternehmen",
    "footer.nav.company.about": "Über AIceFlow",
    "footer.nav.company.team": "Unser Team",
    "footer.nav.company.testimonials": "Referenzen",
    "footer.nav.company.contact": "Kontakt",
    "footer.nav.company.careers": "Karriere",

    "footer.copy": "© 2025 AIceFlow. Alle Rechte vorbehalten.",
    "footer.tagline": "Präzision, Strategie, Exzellenz.",

    "footer.policies.privacy": "Datenschutz",
    "footer.policies.terms": "Nutzungsbedingungen",
    "footer.policies.imprint": "Impressum",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("de");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["de"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
