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
    // Common
    "common.close": "Close",

    // Header
    "nav.about": "About",
    "nav.services": "Solutions",
    "nav.how-it-works": "Process",
    "nav.testimonials": "Success Stories",
    "nav.contact": "Contact",
    "header.cta": "Start a Strategy Session",

    // Hero
    "hero.title.line1": "The AI Operations Layer",
    "hero.title.dynamicWords": "Reliable|Secure|Tailored",
    "hero.title.staticRemainder": "for your Business",
    "hero.title.line2":
      "Practical Automation for SMEs and Growth-Focused Companies",
    "hero.description":
      "Turn repetitive operational work into reliable automated workflows. We design, build, and run custom AI systems that process requests, handle documents, and connect your existing tools in days, not months.",

    "hero.cta.primary": "Book a Strategy Session",
    "hero.cta.secondary": "See It In Action",

    "hero.pillars.tailored.title": "High-ROI Processes",
    "hero.pillars.tailored.description": "Focus on revenue-driving work",
    "hero.pillars.integration.title": "Seamless Connectors",
    "hero.pillars.integration.description": "Works with your existing stack",
    "hero.pillars.partnership.title": "Operations Layer",
    "hero.pillars.partnership.description": "Secure, pragmatic, managed",

    "hero.status.available": "Open for New Projects",
    "hero.status.location": "DACH Region & Remote",
    "hero.flow.step1.title": "New Inquiry",
    "hero.flow.step1.subtitle": "Captured from website",
    "hero.flow.step2.title": "AI Qualification",
    "hero.flow.step2.subtitle": "Priority and intent scored",
    "hero.flow.step3.title": "System Updated",
    "hero.flow.step3.subtitle": "CRM and task flow synced",
    "hero.flow.step4.title": "Team Notified",
    "hero.flow.step4.subtitle": "Owner informed in real time",

    // About
    "about.title": "We are",
    "about.description":
      "AIceFlow is the AI automation partner for SMEs and growth-focused companies. We help teams without an internal AI engineering unit deploy reliable automation and reduce operational friction.",

    "about.innovation.title": "Practical > Theoretical",
    "about.custom.title": "Custom Built",
    "about.results.title": "Measurable Impact",

    "about.innovation.description":
      "No abstract slideware. We deliver production-ready systems for real operational bottlenecks.",

    "about.custom.description":
      "Every automation has defined triggers, inputs, and outputs. We integrate directly with the systems you already run.",

    "about.results.description":
      "We focus on response times, quality, and measurable savings. If impact is unclear, we do not build it.",

    // Services
    "services.title": "What We Automate",
    "services.description":
      "From customer communication to finance workflows, we automate recurring process work so your teams can focus on value creation.",

    "services.processAutomation.title": "Communication & Triage",
    "services.processAutomation.description":
      "Capture every relevant request and route it reliably.",
    "services.processAutomation.feature1": "Email Triage & Routing",
    "services.processAutomation.feature2": "Lead Qualification",
    "services.processAutomation.feature3": "Support Ticket Summaries",
    "services.processAutomation.feature4": "Meeting Notes to Tasks",

    "services.dashboards.title": "Finance & Admin",
    "services.dashboards.description":
      "Automate recurring back-office work with precision and traceability.",
    "services.dashboards.feature1": "Invoice Processing",
    "services.dashboards.feature2": "Expense Categorization",
    "services.dashboards.feature3": "Contract Data Extraction",
    "services.dashboards.feature4": "Onboarding Workflows",

    "services.consultation.title": "Business Intelligence",
    "services.consultation.description":
      "Turn fragmented data into decision-ready management insights.",
    "services.consultation.feature1": "Weekly KPI Digests",
    "services.consultation.feature2": "Competitor Monitoring",
    "services.consultation.feature3": "Review Aggregation",
    "services.consultation.feature4": "Automated Reporting",

    // How It Works
    "howItWorks.title": "Our Process",
    "howItWorks.description":
      "Focused process: identify the highest-value use case, implement it fast, and anchor it in daily operations.",

    "howItWorks.step1.title": "Identify",
    "howItWorks.step1.description":
      "We analyze your workflows and select the highest-leverage process opportunity.",

    "howItWorks.step2.title": "Build",
    "howItWorks.step2.description":
      "We build the solution with secure architecture and connect it to your live system landscape.",

    "howItWorks.step3.title": "Train & Handoff",
    "howItWorks.step3.description":
      "We enable your teams with training, documentation, and clear operating standards.",

    "howItWorks.step4.title": "Support",
    "howItWorks.step4.description":
      "We monitor quality in production and continuously optimize performance and reliability.",

    // Testimonials (Placeholder)
    "testimonials.title": "Client Success",
    "testimonials.description":
      "See how SMEs and growth-focused companies save time and scale operations.",

    // Showcase
    "showcase.title": "Your AI Control Center",
    "showcase.description":
      "Automation should never be a black box. Our control layer gives you visibility into performance, quality, and intervention points.",

    "showcase.overlay.title": "Visibility & Control",

    "showcase.stats.dashboard.label": "Tasks Autom.",
    "showcase.stats.dashboard.value": "24/7",
    "showcase.stats.monitoring.label": "Error Rate",
    "showcase.stats.monitoring.value": "< 1%",
    "showcase.stats.architecture.label": "ROI",
    "showcase.stats.architecture.value": "Immediate",

    "showcase.features.title": "The Operations Layer",
    "showcase.features.item1": "Centralized view of all running agents.",
    "showcase.features.item2": "Human-in-the-loop approval flows.",
    "showcase.features.item3": "Live logs and audit trails.",
    "showcase.features.item4": "Seamless API integrations.",
    "showcase.features.item5": "Custom triggers and scheduling.",
    "showcase.features.item6": "Enterprise-grade security standards.",

    "showcase.impact.title": "Why It Matters",
    "showcase.impact.unlock.icon": "Zap",
    "showcase.impact.unlock.title": "Speed",
    "showcase.impact.unlock.description":
      "Shorter cycle times across customer and internal processes.",
    "showcase.impact.decisions.icon": "CheckCircle",
    "showcase.impact.decisions.title": "Accuracy",
    "showcase.impact.decisions.description":
      "Fewer process errors through structured, automated execution.",
    "showcase.impact.resilience.icon": "TrendingUp",
    "showcase.impact.resilience.title": "Focus",
    "showcase.impact.resilience.description":
      "More team capacity for customer, strategy, and growth initiatives.",

    // Universal (Chaos Tamer)
    "universal.title": "Operational Complexity, Controlled.",
    "universal.subtitle":
      "Whether logistics, service, or administration: recurring bottlenecks follow similar patterns. We automate them with reliable AI workflows.",
    "universal.button.idle": "Activate Process Flow",
    "universal.button.active": "Operations Stabilized",
    // Short labels for floating cards to prevent overflow
    "universal.floating.email": "Unprocessed Inquiries",
    "universal.floating.invoice": "Invoice Backlog",
    "universal.floating.meeting": "Coordination Overhead",
    "universal.floating.data": "Fragmented Data",
    "universal.floating.urgent": "Critical Escalation",
    "universal.floating.delay": "Delayed Response",
    "universal.floating.error": "Manual Error Risk",

    // Why AIceFlow
    "why.title": "Why AIceFlow?",
    "why.description":
      "We connect strategic business priorities with robust technical execution.",

    "why.tailored.title": "Implementation, Not Slideware",
    "why.tailored.description":
      "We do not stop at concept decks. We build, deploy, and operate the system in production.",

    "why.partnership.title": "Measurable Business Value",
    "why.partnership.description":
      "We prioritize use cases with transparent impact: time savings, quality gains, and economic value.",

    "why.synergy.title": "Human-Centric",
    "why.synergy.description":
      "Our automations are designed to work with your teams and remove repetitive operational load.",

    "why.local.title": "DACH Region Focus",
    "why.local.description":
      "We understand local regulations, languages, and business culture.",

    "commitment.title": "Our Standards",
    "commitment.description": "Reliable. Secure. Pragmatic.",
    "commitment.transparency.title": "Data Privacy",
    "commitment.transparency.description": "GDPR compliant implementation.",
    "commitment.empowerment.title": "No Lock-in",
    "commitment.empowerment.description": "You own your data and workflows.",
    "commitment.value.title": "Long-term Support",
    "commitment.value.description": "We are your technical partner.",

    // Team
    "team.founders.title": "Technical & Business Excellence for SMEs",
    "team.founders.subtitle":
      "Two software founders building custom AI systems for SMEs and growth-focused companies: business outcomes and adoption on one side, deep technical architecture and reliability on the other.",
    "team.shared.label": "Execution Core",
    "team.shared.title": "Custom AI Systems. Production Reliability. Measurable Impact.",
    "team.shared.subtitle":
      "We combine business prioritization with engineering depth to deliver AI systems that run reliably in daily operations.",
    "team.shared.pills":
      "Board-Ready Business Cases|Custom AI Agent Systems|Security & Compliance by Design|Stable Integrations into Existing Tools|Operational KPI Transparency|Fast Time-to-Value",
    "team.common.softwareLabel": "Execution Strength",
    "team.image.duo.logoAlt": "AIceFlow founders brand",
    "team.image.duo.caption": "Custom AI Systems. Real Business Impact.",
    "team.image.heiner.label": "Placeholder: Heiner Portrait",
    "team.image.heiner.hint": "Replace with Heiner's new profile photo.",

    "team.ff.name": "Felix Funke",
    "team.ff.role_short":
      "Co-Founder | Full-Stack Engineer, Product & Business Execution Lead",
    "team.ff.summary":
      "Combines full-stack engineering with product and business execution to ship AI workflows teams adopt quickly.",
    "team.ff.capabilityLabel": "Business + Technical Execution",
    "team.ff.software":
      "Workflow and UX Engineering|Customer Journey Design|Product-Led Rollout|Cross-Functional Delivery Leadership",
    "team.ff.specialty.title": "Commercial and Product Leadership",
    "team.ff.specialty.pills":
      "ROI and Investment Logic|Executive Stakeholder Alignment|Customer Experience Excellence|Change Adoption",
    "team.ff.points":
      "Designs user-centered AI workflows that teams trust and use in daily operations.|Transforms strategic goals into a focused roadmap with clear value milestones and delivery priorities.|Aligns leadership, operations, and users so rollout translates into measurable business outcomes.",

    "team.hdc.name": "Dr. Heiner Di Camillo",
    "team.hdc.role_short": "Co-Founder | Technical Founder",
    "team.hdc.summary":
      "Owns the technical platform for secure, robust, and scalable AI operations.",
    "team.hdc.capabilityLabel": "Technical Architecture Leadership",
    "team.hdc.software":
      "AI Systems Architecture|Enterprise Integration Strategy|API and Data Connectivity|Platform Reliability",
    "team.hdc.specialty.title": "Engineering Authority",
    "team.hdc.specialty.pills":
      "AI Readiness and Use-Case Prioritization|ERP/CRM/Microsoft Integration|Data Governance and Compliance|Secure Automation Design|Scalable Operations and Monitoring|Cost and Performance Management",
    "team.hdc.points":
      "Designs architectures that scale from pilot to core business operations.|Builds secure integration layers around legacy and modern systems without operational disruption.|Ensures production stability through strict quality standards, monitoring, and incident resilience.",

    "team.cta.primary": "Talk to the Founders",
    "team.cta.aria": "Contact the founders",
    "team.cta.caption":
      "Discuss your highest-impact automation opportunities with both business and technical leadership.",

    // Contact
    "contact.title": "Let's Automate Your Business",
    "contact.description":
      "Book a free strategy session. In 30 minutes we identify your highest-value automation opportunities.",

    // Form
    "contact.form.title": "Get in Touch",
    "contact.form.firstNameLabel": "First Name",
    "contact.form.firstNamePlaceholder": "Felix",
    "contact.form.lastNameLabel": "Last Name",
    "contact.form.lastNamePlaceholder": "Muster",
    "contact.form.emailLabel": "Work Email",
    "contact.form.emailPlaceholder": "felix@company.com",
    "contact.form.companyLabel": "Company",
    "contact.form.companyPlaceholder": "Muster GmbH",
    "contact.form.phoneLabel": "Phone",
    "contact.form.phonePlaceholder": "+49 123 45678",
    "contact.form.needsLabel": "What process do you want to fix?",
    "contact.form.needsPlaceholder":
      "e.g., handling invoices, sorting support emails...",
    "contact.form.submit": "Request Strategy Session",
    "contact.form.requiredNote":
      "* Required. We usually reply within 24h.",
    "contact.form.submitting": "Sending...",
    "contact.form.error":
      "Something went wrong. Please try again.",
    "contact.form.successTitle": "Message Sent",
    "contact.form.successMessage":
      "Thanks for reaching out. We'll be in touch shortly to discuss your automation potential.",
    "contact.form.sendAnother": "Send another",
    "contact.responseTime": "Typically replies within one business day",

    // Contact Info
    "contact.info.title": "Contact",
    "contact.info.office.title": "HQ",
    "contact.info.office.line1": "AIceFlow",
    "contact.info.office.line2": "Nussdorfer Strasse 9",
    "contact.info.office.line3": "88662 Überlingen, Germany",
    "contact.info.email.title": "Email",
    "contact.info.email.address": "hello@aiceflow.de",
    "contact.info.phone.title": "Phone",
    "contact.info.phone.number": "+49 (0) 176 6336 4095",
    "contact.info.hours.title": "Business Hours",
    "contact.info.hours.line1": "Mon – Fri: 9:00 – 18:00 CET",
    "contact.info.hours.line2": "",

    // Actions
    "contact.actions.title": "Next Steps",
    "contact.actions.discovery": "Book Strategy Call",
    "contact.actions.download": "View Examples",
    "contact.actions.proposal": "Email Us",

    // Footer
    "footer.company.initials": "AF",
    "footer.company.name": "AIceFlow",
    "footer.company.description":
      "The AI Operations Layer for DACH SMEs and growth-focused companies. Practical, secure, and tailored automation.",

    "footer.nav.services.title": "Solutions",
    "footer.nav.services.processAutomation": "Operations",
    "footer.nav.services.customDashboards": "Admin & Finance",
    "footer.nav.services.consultation": "BI & Reporting",
    "footer.nav.services.implementation": "Implementation",
    "footer.nav.services.support": "Support",

    "footer.nav.company.title": "Company",
    "footer.nav.company.about": "About",
    "footer.nav.company.team": "Team",
    "footer.nav.company.testimonials": "Success",
    "footer.nav.company.contact": "Contact",
    "footer.nav.company.careers": "Careers",

    "footer.copy": "© 2026 AIceFlow. All rights reserved.",
    "footer.tagline": "Automate. Optimize. Grow.",

    "footer.policies.privacy": "Privacy Policy",
    "footer.policies.terms": "Terms of Service",
    "footer.policies.imprint": "Imprint",
  },
  de: {
    // Common
    "common.close": "Schließen",

    // Header
    "nav.about": "Über uns",
    "nav.services": "Lösungen",
    "nav.how-it-works": "Ablauf",
    "nav.testimonials": "Erfolge",
    "nav.contact": "Kontakt",
    "header.cta": "Strategiegespräch starten",

    // Hero
    "hero.title.line1": "Die AI-Operations-Ebene",
    "hero.title.dynamicWords": "Zuverlässig|Sicher|Maßgeschneidert",
    "hero.title.staticRemainder": "für Ihr Business",
    "hero.title.line2": "Praktische Automatisierung für den Mittelstand",
    "hero.description":
      "Verwandeln Sie repetitive, manuelle Arbeit in zuverlässige automatisierte Workflows. Wir liefern praktische KI-Agenten, die E-Mails sortieren, Rechnungen verarbeiten und Ihre Tools verbinden – in Tagen, nicht Monaten.",

    "hero.cta.primary": "Strategiegespräch buchen",
    "hero.cta.secondary": "Live-Demo ansehen",

    "hero.pillars.tailored.title": "Prozesse mit hohem ROI",
    "hero.pillars.tailored.description": "Fokus auf Wertschöpfung",
    "hero.pillars.integration.title": "Nahtlose Integrationen",
    "hero.pillars.integration.description":
      "Passt in Ihre bestehende Systemlandschaft",
    "hero.pillars.partnership.title": "Operations Layer",
    "hero.pillars.partnership.description": "Sicher, pragmatisch, betreut",

    "hero.status.available": "Kapazität für neue Projekte",
    "hero.status.location": "DACH-Region & Remote",
    "hero.flow.step1.title": "Neue Anfrage",
    "hero.flow.step1.subtitle": "Von der Website erfasst",
    "hero.flow.step2.title": "AI-Qualifizierung",
    "hero.flow.step2.subtitle": "Priorität und Kontext bewertet",
    "hero.flow.step3.title": "System synchronisiert",
    "hero.flow.step3.subtitle": "CRM und Aufgabenfluss aktualisiert",
    "hero.flow.step4.title": "Team informiert",
    "hero.flow.step4.subtitle": "Verantwortliche in Echtzeit benachrichtigt",

    // About
    "about.title": "Wir sind",
    "about.description":
      "AIceFlow ist der AI-Automatisierungspartner für den Mittelstand und wachstumsorientierte Unternehmen. Wir unterstützen Teams ohne eigene AI-Engineering-Einheit dabei, operative Reibung zu reduzieren und Prozesse verlässlich zu automatisieren.",

    "about.innovation.title": "Praxis > Theorie",
    "about.custom.title": "Maßgefertigt",
    "about.results.title": "Messbarer Impact",

    "about.innovation.description":
      "Keine Folienprojekte. Wir liefern produktionsreife Lösungen für reale operative Engpässe.",

    "about.custom.description":
      "Jede Automatisierung hat klare Trigger, Inputs und Outputs. Wir integrieren direkt in Ihre bestehende Systemlandschaft.",

    "about.results.description":
      "Wir fokussieren auf Reaktionszeit, Qualität und messbare Entlastung. Wenn der Nutzen unklar ist, bauen wir es nicht.",

    // Services
    "services.title": "Unsere Automatisierungsschwerpunkte",
    "services.description":
      "Von Kundenkommunikation bis Finanzprozess: Wir automatisieren wiederkehrende Prozessarbeit, damit Ihre Teams auf Wertschöpfung fokussieren.",

    "services.processAutomation.title": "Kommunikation & Vorgangssteuerung",
    "services.processAutomation.description":
      "Erfassen, priorisieren und steuern Sie relevante Anfragen ohne Medienbrüche.",
    "services.processAutomation.feature1": "E-Mail-Triage und Routing",
    "services.processAutomation.feature2": "Lead-Qualifizierung",
    "services.processAutomation.feature3": "Support-Ticket-Zusammenfassungen",
    "services.processAutomation.feature4": "Meeting-Notizen in Aufgaben",

    "services.dashboards.title": "Finanzen & Administration",
    "services.dashboards.description":
      "Automatisieren Sie wiederkehrende Backoffice-Prozesse präzise und nachvollziehbar.",
    "services.dashboards.feature1": "Rechnungsverarbeitung",
    "services.dashboards.feature2": "Ausgaben-Kategorisierung",
    "services.dashboards.feature3": "Vertragsdaten-Extraktion",
    "services.dashboards.feature4": "Onboarding-Workflows",

    "services.consultation.title": "Unternehmenssteuerung & Reporting",
    "services.consultation.description":
      "Machen Sie aus verteilten Daten entscheidungsreife Steuerungsinformationen für Führung und Operations.",
    "services.consultation.feature1": "Wöchentliche KPI-Digests",
    "services.consultation.feature2": "Wettbewerber-Monitoring",
    "services.consultation.feature3": "Bewertungs-Aggregation",
    "services.consultation.feature4": "Automatisierte Reports",

    // How It Works
    "howItWorks.title": "So gehen wir vor",
    "howItWorks.description":
      "Klarer Ablauf: höchste Wertchance identifizieren, schnell umsetzen und im Tagesgeschäft verankern.",

    "howItWorks.step1.title": "Identifizieren",
    "howItWorks.step1.description":
      "Wir analysieren Ihre Abläufe und priorisieren den wirksamsten Automatisierungshebel.",

    "howItWorks.step2.title": "Bauen",
    "howItWorks.step2.description":
      "Wir bauen die Lösung mit sicherer Architektur und integrieren sie in Ihre aktive Systemlandschaft.",

    "howItWorks.step3.title": "Enablement & Übergabe",
    "howItWorks.step3.description":
      "Wir befähigen Ihre Teams mit Schulung, Dokumentation und klaren Betriebsstandards.",

    "howItWorks.step4.title": "Support",
    "howItWorks.step4.description":
      "Wir überwachen Qualität im Betrieb und optimieren Performance sowie Zuverlässigkeit laufend.",

    // Testimonials
    "testimonials.title": "Kundenerfolge",
    "testimonials.description":
      "Sehen Sie, wie Mittelstand und wachstumsorientierte Unternehmen Zeit sparen und skalieren.",

    // Showcase
    "showcase.title": "Ihr AI-Kontrollzentrum",
    "showcase.description":
      "Automatisierung darf keine Blackbox sein. Unsere Control-Layer zeigt Leistung, Qualität und Eingriffspunkte transparent.",

    "showcase.overlay.title": "Sichtbarkeit & Kontrolle",

    "showcase.stats.dashboard.label": "Autom. Tasks",
    "showcase.stats.dashboard.value": "24/7",
    "showcase.stats.monitoring.label": "Fehlerrate",
    "showcase.stats.monitoring.value": "< 1%",
    "showcase.stats.architecture.label": "ROI",
    "showcase.stats.architecture.value": "Kurzfristig",

    "showcase.features.title": "Die Operations-Ebene",
    "showcase.features.item1": "Zentrale Ansicht aller aktiven Agenten.",
    "showcase.features.item2": "Freigabeprozesse mit menschlicher Kontrolle.",
    "showcase.features.item3": "Live-Logs und Audit-Trails.",
    "showcase.features.item4": "Nahtlose API-Integrationen.",
    "showcase.features.item5": "Individuelle Trigger und Zeitpläne.",
    "showcase.features.item6":
      "Sicherheits- und Compliance-Standards für den produktiven Betrieb.",

    "showcase.impact.title": "Warum es zählt",
    "showcase.impact.unlock.icon": "Zap",
    "showcase.impact.unlock.title": "Geschwindigkeit",
    "showcase.impact.unlock.description":
      "Kürzere Durchlaufzeiten über Kunden- und interne Prozesse hinweg.",
    "showcase.impact.decisions.icon": "CheckCircle",
    "showcase.impact.decisions.title": "Präzision",
    "showcase.impact.decisions.description":
      "Weniger Prozessfehler durch strukturierte, automatisierte Ausführung.",
    "showcase.impact.resilience.icon": "TrendingUp",
    "showcase.impact.resilience.title": "Fokus",
    "showcase.impact.resilience.description":
      "Mehr Kapazität für Kundenarbeit, Strategie und Wachstumsvorhaben.",

    // Universal (Chaos Tamer)
    "universal.title": "Operative Komplexität. Kontrolliert automatisiert.",
    "universal.subtitle":
      "Ob Logistik, Service oder Administration: wiederkehrende Engpässe folgen ähnlichen Mustern. Wir automatisieren sie mit zuverlässigen AI-Workflows.",
    "universal.button.idle": "Prozessfluss aktivieren",
    "universal.button.active": "Betrieb stabilisiert",
    "universal.floating.email": "Unbearbeitete Anfragen",
    "universal.floating.invoice": "Offene Rechnung",
    "universal.floating.meeting": "Abstimmungsaufwand",
    "universal.floating.data": "Fragmentierte Daten",
    "universal.floating.urgent": "Eskalation",
    "universal.floating.delay": "Verzug",
    "universal.floating.error": "Manuelles Fehlerrisiko",

    // Why AIceFlow
    "why.title": "Warum AIceFlow für den Mittelstand?",
    "why.description":
      "Wir verbinden strategische Business-Ziele mit robuster technischer Umsetzung.",

    "why.tailored.title": "Umsetzung statt Folien",
    "why.tailored.description":
      "Wir stoppen nicht beim Konzept. Wir bauen, integrieren und betreiben das System produktiv.",

    "why.partnership.title": "Messbarer Geschäftswert",
    "why.partnership.description":
      "Wir priorisieren Anwendungsfälle mit transparentem Nutzen: Zeitgewinn, Qualitätsgewinn und wirtschaftlicher Effekt.",

    "why.synergy.title": "Mensch im Mittelpunkt",
    "why.synergy.description":
      "Unsere Automatisierungen arbeiten mit Ihren Teams und entlasten von repetitiver Prozessarbeit.",

    "why.local.title": "Fokus DACH Region",
    "why.local.description":
      "Wir verstehen lokale Regularien, Sprache und die Geschäftskultur.",

    "commitment.title": "Unser Qualitätsversprechen",
    "commitment.description": "Zuverlässig. Sicher. Pragmatisch.",
    "commitment.transparency.title": "Datenschutz",
    "commitment.transparency.description": "DSGVO-konforme Umsetzung.",
    "commitment.empowerment.title": "Kein Lock-in",
    "commitment.empowerment.description": "Daten und Workflows gehören Ihnen.",
    "commitment.value.title": "Langfristiger Partner",
    "commitment.value.description": "Wir bleiben als technischer Partner an Ihrer Seite.",

    // Team
    "team.founders.title": "Technische und Business-Exzellenz für den Mittelstand",
    "team.founders.subtitle":
      "Zwei Software-Gründer für maßgeschneiderte AI-Systeme im deutschen Mittelstand: Business-Impact und Adoption auf der einen Seite, tiefe technische Architektur und Zuverlässigkeit auf der anderen.",
    "team.shared.label": "Execution Core",
    "team.shared.title": "Custom AI Systems. Production Reliability. Measurable Impact.",
    "team.shared.subtitle":
      "Wir verbinden Business-Priorisierung mit technischer Tiefe und liefern AI-Systeme, die im Tagesgeschäft zuverlässig laufen.",
    "team.shared.pills":
      "Entscheidungsreife Business Cases|Maßgeschneiderte AI-Agentensysteme|Security & Compliance by Design|Stabile Integrationen in bestehende Tools|Operative KPI-Transparenz|Schneller Time-to-Value",
    "team.common.softwareLabel": "Umsetzungskompetenz",
    "team.image.duo.logoAlt": "AIceFlow Gründer-Branding",
    "team.image.duo.caption": "Custom AI Systems. Real Business Impact.",
    "team.image.heiner.label": "Platzhalter: Heiner Porträt",
    "team.image.heiner.hint": "Hier Heiners neues Profilfoto einsetzen.",

    "team.ff.name": "Felix Funke",
    "team.ff.role_short":
      "Co-Founder | Full-Stack Engineer, Product-, UX- und Business-Execution Lead",
    "team.ff.summary":
      "Verbindet Full-Stack Engineering mit Product- und Business-Execution, um AI-Workflows zu liefern, die Teams schnell übernehmen.",
    "team.ff.capabilityLabel": "Business- und technische Umsetzung",
    "team.ff.software":
      "Workflow- und UX-Engineering|Customer-Journey-Design|Product-led Rollout|Cross-funktionale Delivery-Leadership",
    "team.ff.specialty.title": "Kommerzielle und Product-Leadership",
    "team.ff.specialty.pills":
      "ROI- und Investment-Logik|Alignment mit Entscheiderkreisen|Customer-Experience-Exzellenz|Change Adoption",
    "team.ff.points":
      "Entwirft nutzerzentrierte AI-Workflows, die Teams im Tagesgeschäft vertrauen und aktiv nutzen.|Übersetzt strategische Ziele in eine fokussierte Roadmap mit klaren Wertmeilensteinen und Delivery-Prioritäten.|Hält Führung, Fachbereiche und Anwender ausgerichtet, damit Rollout in messbare Ergebnisse übersetzt wird.",

    "team.hdc.name": "Dr. Heiner Di Camillo",
    "team.hdc.role_short": "Co-Founder | Technischer Gründer & AI-Systemarchitekt",
    "team.hdc.summary":
      "Verantwortet die technische Plattform für sichere, robuste und skalierbare AI-Operations.",
    "team.hdc.capabilityLabel": "Technische Architekturführung",
    "team.hdc.software":
      "AI-Systemarchitektur|Integrationsstrategie für Unternehmenssysteme|API- und Datenanbindung|Plattformzuverlässigkeit",
    "team.hdc.specialty.title": "Technische Engineering-Autorität",
    "team.hdc.specialty.pills":
      "AI-Readiness und Use-Case-Priorisierung|Integration von ERP/CRM/Microsoft-Umgebungen|Daten-Governance und Compliance|Sicheres Automatisierungsdesign|Skalierbarer Betrieb und Monitoring|Kosten- und Performance-Steuerung",
    "team.hdc.points":
      "Entwirft Architekturen, die vom Pilot in den geschäftskritischen Betrieb skalieren.|Baut sichere Integrationsschichten zwischen Legacy- und modernen Systemen ohne operative Reibungsverluste.|Sichert Produktionsstabilität über klare Qualitätsstandards, Monitoring und Incident-Resilienz.",

    "team.cta.primary": "Mit den Gründern sprechen",
    "team.cta.aria": "Die Gründer kontaktieren",
    "team.cta.caption":
      "Besprechen Sie Ihre wichtigsten Automatisierungshebel direkt mit Business- und Technik-Lead.",

    // Contact
    "contact.title": "Ihr nächster Automatisierungsschritt",
    "contact.description":
      "Buchen Sie ein kostenloses Strategiegespräch. In 30 Minuten identifizieren wir Ihre größten Automatisierungspotenziale.",

    // Form
    "contact.form.title": "Kontakt aufnehmen",
    "contact.form.firstNameLabel": "Vorname",
    "contact.form.firstNamePlaceholder": "Felix",
    "contact.form.lastNameLabel": "Nachname",
    "contact.form.lastNamePlaceholder": "Muster",
    "contact.form.emailLabel": "Arbeits-E-Mail",
    "contact.form.emailPlaceholder": "felix@firma.de",
    "contact.form.companyLabel": "Firma",
    "contact.form.companyPlaceholder": "Muster GmbH",
    "contact.form.phoneLabel": "Telefon",
    "contact.form.phonePlaceholder": "+49 123 45678",
    "contact.form.needsLabel": "Welchen Prozess möchten Sie lösen?",
    "contact.form.needsPlaceholder":
      "z.B. Rechnungsprüfung, E-Mail Sortierung...",
    "contact.form.submit": "Strategiegespräch anfragen",
    "contact.form.requiredNote":
      "* Pflichtfeld. Rückmeldung in der Regel innerhalb eines Werktags.",
    "contact.form.submitting": "Sende...",
    "contact.form.error":
      "Es gab einen Fehler. Bitte versuchen Sie es erneut.",
    "contact.form.successTitle": "Nachricht gesendet",
    "contact.form.successMessage":
      "Danke für Ihre Nachricht. Wir melden uns in Kürze.",
    "contact.form.sendAnother": "Noch eine senden",
    "contact.responseTime": "Antwort in der Regel innerhalb eines Werktags",

    // Contact Info
    "contact.info.title": "Kontakt",
    "contact.info.office.title": "Sitz",
    "contact.info.office.line1": "AIceFlow",
    "contact.info.office.line2": "Nussdorfer Strasse 9",
    "contact.info.office.line3": "88662 Überlingen, Deutschland",
    "contact.info.email.title": "E-Mail",
    "contact.info.email.address": "hallo@aiceflow.de",
    "contact.info.phone.title": "Telefon",
    "contact.info.phone.number": "+49 (0) 176 6336 4095",
    "contact.info.hours.title": "Geschäftszeiten",
    "contact.info.hours.line1": "Mo – Fr: 9:00 – 18:00 Uhr CET",
    "contact.info.hours.line2": "",

    // Actions
    "contact.actions.title": "Nächste Schritte",
    "contact.actions.discovery": "Gespräch buchen",
    "contact.actions.download": "Beispiele ansehen",
    "contact.actions.proposal": "E-Mail schreiben",

    // Footer
    "footer.company.initials": "AF",
    "footer.company.name": "AIceFlow",
    "footer.company.description":
      "Die AI-Operations-Ebene für den DACH-Mittelstand und wachstumsorientierte Unternehmen. Praktische, sichere und maßgeschneiderte Automatisierung.",

    "footer.nav.services.title": "Lösungen",
    "footer.nav.services.processAutomation": "Betriebsprozesse",
    "footer.nav.services.customDashboards": "Administration & Finanzen",
    "footer.nav.services.consultation": "BI & Reporting",
    "footer.nav.services.implementation": "Implementierung",
    "footer.nav.services.support": "Betrieb & Support",

    "footer.nav.company.title": "Unternehmen",
    "footer.nav.company.about": "Über uns",
    "footer.nav.company.team": "Team",
    "footer.nav.company.testimonials": "Erfolge",
    "footer.nav.company.contact": "Kontakt",
    "footer.nav.company.careers": "Karriere",

    "footer.copy": "© 2026 AIceFlow. Alle Rechte vorbehalten.",
    "footer.tagline": "Automatisieren. Entlasten. Wachsen.",

    "footer.policies.privacy": "Datenschutz",
    "footer.policies.terms": "AGB",
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
