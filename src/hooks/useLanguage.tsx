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
    "nav.services": "Solutions",
    "nav.how-it-works": "Process",
    "nav.testimonials": "Success Stories",
    "nav.contact": "Contact",
    "header.cta": "Start Automation",

    // Hero
    "hero.title.line1": "The AI Operations Layer",
    "hero.title.dynamicWords": "Reliable|Secure|Tailored",
    "hero.title.staticRemainder": "for your Business",
    "hero.title.line2": "Practical Automation for the Mittelstand",
    "hero.description":
      "Turn repetitive, manual work into reliable automated workflows. We deliver practical AI agents that triage emails, process invoices, and connect your existing tools—in days, not months.",

    "hero.cta.primary": "Get Your Custom Plan",
    "hero.cta.secondary": "See It In Action",

    "hero.pillars.tailored.title": "High-ROI Processes",
    "hero.pillars.tailored.description": "Focus on revenue-driving work",
    "hero.pillars.integration.title": "Seamless Connectors",
    "hero.pillars.integration.description": "Works with your existing stack",
    "hero.pillars.partnership.title": "Operations Layer",
    "hero.pillars.partnership.description": "Secure, pragmatic, managed",

    "hero.status.available": "Accepting New Projects",
    "hero.status.location": "DACH Region & Remote",

    // About
    "about.title": "We are",
    "about.description":
      "AIceFlow is an AI automation agency for the Mittelstand and growth-focused companies. We help teams without a dedicated internal AI engineering unit move faster and reduce errors by building the 'AI Operations Layer' tailored to how you already work.",

    "about.innovation.title": "Practical > Theoretical",
    "about.custom.title": "Custom Built",
    "about.results.title": "Measurable Impact",

    "about.innovation.description":
      "Instead of abstract 'AI consulting', we deliver ready-to-run solutions that solve actual operational headaches.",

    "about.custom.description":
      "Every automation has a clear trigger, input, and output. We connect the tools you already use (Microsoft 365, CRM, ERP).",

    "about.results.description":
      "We focus on response times, error reduction, and hours saved. If it doesn't drive value, we don't build it.",

    // Services
    "services.title": "What We Automate",
    "services.description":
      "From inbox to invoice, we deploy agents that handle the busywork so your team can focus on the big picture.",

    "services.processAutomation.title": "Communication & Triage",
    "services.processAutomation.description":
      "Never miss a lead or a critical request again.",
    "services.processAutomation.feature1": "Email Triage & Routing",
    "services.processAutomation.feature2": "Lead Qualification",
    "services.processAutomation.feature3": "Support Ticket Summaries",
    "services.processAutomation.feature4": "Meeting Notes to Tasks",

    "services.dashboards.title": "Finance & Admin",
    "services.dashboards.description":
      "Streamline the back-office chaos with precision.",
    "services.dashboards.feature1": "Invoice Processing",
    "services.dashboards.feature2": "Expense Categorization",
    "services.dashboards.feature3": "Contract Data Extraction",
    "services.dashboards.feature4": "Onboarding Workflows",

    "services.consultation.title": "Business Intelligence",
    "services.consultation.description":
      "Turn scattered data into decision-ready insights.",
    "services.consultation.feature1": "Weekly KPI Digests",
    "services.consultation.feature2": "Competitor Monitoring",
    "services.consultation.feature3": "Review Aggregation",
    "services.consultation.feature4": "Automated Reporting",

    // How It Works
    "howItWorks.title": "Our Process",
    "howItWorks.description":
      "We keep it simple: Identify the highest-ROI opportunity, build it, and ensure your team adopts it.",

    "howItWorks.step1.title": "Identify",
    "howItWorks.step1.description":
      "We audit your workflows to find high-volume, repetitive tasks that are ripe for automation.",

    "howItWorks.step2.title": "Build",
    "howItWorks.step2.description":
      "We configure secure agents and connect them to your tools (Google/Microsoft, CRM, Accounting).",

    "howItWorks.step3.title": "Train & Handoff",
    "howItWorks.step3.description":
      "We provide documentation and training to ensure your team trusts and uses the new system.",

    "howItWorks.step4.title": "Support",
    "howItWorks.step4.description":
      "We monitor performance and refine the agents as your business evolves.",

    // Testimonials (Placeholder)
    "testimonials.title": "Client Success",
    "testimonials.description":
      "See how Mittelstand and growth companies save time and scale operations.",

    // Showcase
    "showcase.title": "Your AI Control Center",
    "showcase.description":
      "Automation shouldn't be a black box. Our dashboards give you full visibility into what your agents are doing, how much time they've saved, and where they need your input.",

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
      "Respond to customers instantly, even outside business hours.",
    "showcase.impact.decisions.icon": "CheckCircle",
    "showcase.impact.decisions.title": "Accuracy",
    "showcase.impact.decisions.description":
      "Eliminate copy-paste errors and lost information.",
    "showcase.impact.resilience.icon": "TrendingUp",
    "showcase.impact.resilience.title": "Focus",
    "showcase.impact.resilience.description":
      "Free your team to work on strategy and relationships.",

    // Universal (Chaos Tamer)
    "universal.title": "Whatever You Do, Do It Faster.",
    "universal.subtitle": "Logistics, Law, or Lemonade stands. Chaos looks the same everywhere. So does the solution.",
    "universal.button.idle": "Tame the Chaos",
    "universal.button.active": "Order Restored",
    // Short labels for floating cards to prevent overflow
    "universal.floating.email": "Inbox 99+",
    "universal.floating.invoice": "Unpaid Bills",
    "universal.floating.meeting": "Scheduling",
    "universal.floating.data": "Bad Data",
    "universal.floating.urgent": "Fire Drill",
    "universal.floating.delay": "Late Delivery",
    "universal.floating.error": "Human Error",

    // Why AIceFlow
    "why.title": "Why AIceFlow?",
    "why.description":
      "We bridge the gap between complex AI technology and your daily business reality.",

    "why.tailored.title": "Not Just Consulting",
    "why.tailored.description":
      "We don't just leave you with a PDF strategy. We build, deploy, and maintain the software.",

    "why.partnership.title": "Defined ROI",
    "why.partnership.description":
      "We target processes where the impact is measurable: time saved, money saved, revenue generated.",

    "why.synergy.title": "Human-Centric",
    "why.synergy.description":
      "Our automations are designed to work *with* your people, handling the grunt work so they shine.",

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
    "team.founders.title": "Technical & Business Excellence for the Mittelstand",
    "team.founders.subtitle":
      "Two software founders building custom AI systems for Germany's Mittelstand: business outcomes and adoption on one side, deep technical architecture and reliability on the other.",
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
      "AI Solution Architecture|Backend and Integration Platforms|Data and Agent Infrastructure|Reliability Engineering",
    "team.hdc.specialty.title": "Engineering Authority",
    "team.hdc.specialty.pills":
      "Safety-Critical Engineering Standards|Computer Vision Expertise|High-Availability System Design|Observability and Quality Gates|Compliance-by-Design|Performance and Cost Control",
    "team.hdc.points":
      "Designs architectures that scale from pilot to core business operations.|Builds secure integration layers around legacy and modern systems without operational disruption.|Ensures production stability through strict quality standards, monitoring, and incident resilience.",

    "team.cta.primary": "Talk to the Founders",
    "team.cta.aria": "Contact the founders",
    "team.cta.caption":
      "Discuss your highest-impact automation opportunities with both business and technical leadership.",

    // Contact
    "contact.title": "Let's Automate Your Business",
    "contact.description":
      "Book a free strategy session. We'll identify your highest-ROI automation opportunities in 30 minutes.",

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
      "The AI Operations Layer for the DACH Mittelstand and growth companies. Practical, secure, and tailored automation.",

    "footer.nav.services.title": "Solutions",
    "footer.nav.services.processAutomation": "Operations",
    "footer.nav.services.customDashboards": "Admin & Finance",
    "footer.nav.services.consultation": "Business Intel",
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
    // Header
    "nav.about": "Über Uns",
    "nav.services": "Lösungen",
    "nav.how-it-works": "Ablauf",
    "nav.testimonials": "Erfolge",
    "nav.contact": "Kontakt",
    "header.cta": "Automatisierung Starten",

    // Hero
    "hero.title.line1": "Die AI Operations Ebene",
    "hero.title.dynamicWords": "Zuverlässig|Sicher|Maßgeschneidert",
    "hero.title.staticRemainder": "für Ihr Business",
    "hero.title.line2": "Praktische Automatisierung für den Mittelstand",
    "hero.description":
      "Verwandeln Sie repetitive, manuelle Arbeit in zuverlässige automatisierte Workflows. Wir liefern praktische KI-Agenten, die E-Mails sortieren, Rechnungen verarbeiten und Ihre Tools verbinden – in Tagen, nicht Monaten.",

    "hero.cta.primary": "Strategiegespräch Buchen",
    "hero.cta.secondary": "Live-Demo Ansehen",

    "hero.pillars.tailored.title": "High-ROI Prozesse",
    "hero.pillars.tailored.description": "Fokus auf Wertschöpfung",
    "hero.pillars.integration.title": "Nahtlose Verbinder",
    "hero.pillars.integration.description": "Passt in Ihren Tech-Stack",
    "hero.pillars.partnership.title": "Operations Layer",
    "hero.pillars.partnership.description": "Sicher, pragmatisch, betreut",

    "hero.status.available": "Neue Projekte möglich",
    "hero.status.location": "DACH Region & Remote",

    // About
    "about.title": "Wir sind",
    "about.description":
      "AIceFlow ist eine KI-Automatisierungsagentur für den Mittelstand und wachstumsorientierte Unternehmen. Wir helfen Teams ohne dedizierte interne AI-Engineering-Einheit, schneller zu werden und Fehler zu reduzieren, indem wir eine 'AI Operations Ebene' aufbauen, die genau so arbeitet, wie Sie es brauchen.",

    "about.innovation.title": "Praxis > Theorie",
    "about.custom.title": "Maßgefertigt",
    "about.results.title": "Messbarer Impact",

    "about.innovation.description":
      "Statt theoretischer 'KI-Beratung' liefern wir sofort einsatzbereite Lösungen für echte operative Probleme.",

    "about.custom.description":
      "Jede Automatisierung hat einen klaren Auslöser, Input und Output. Wir verbinden die Tools, die Sie bereits nutzen (Microsoft 365, CRM, ERP).",

    "about.results.description":
      "Wir fokussieren uns auf Reaktionszeiten, Fehlerreduktion und gesparte Stunden. Wenn es keinen Wert schafft, bauen wir es nicht.",

    // Services
    "services.title": "Was wir automatisieren",
    "services.description":
      "Vom Posteingang bis zur Rechnung: Wir setzen Agenten ein, die die Fleißarbeit erledigen, damit Ihr Team sich auf das große Ganze konzentrieren kann.",

    "services.processAutomation.title": "Kommunikation & Triage",
    "services.processAutomation.description":
      "Verpassen Sie nie wieder einen Lead oder eine wichtige Anfrage.",
    "services.processAutomation.feature1": "E-Mail Triage & Routing",
    "services.processAutomation.feature2": "Lead Qualifizierung",
    "services.processAutomation.feature3": "Support-Ticket Zusammenfassung",
    "services.processAutomation.feature4": "Meeting-Notizen zu Aufgaben",

    "services.dashboards.title": "Finanzen & Admin",
    "services.dashboards.description":
      "Bringen Sie Präzision in das Back-Office Chaos.",
    "services.dashboards.feature1": "Rechnungsverarbeitung",
    "services.dashboards.feature2": "Ausgaben-Kategorisierung",
    "services.dashboards.feature3": "Vertragsdaten-Extraktion",
    "services.dashboards.feature4": "Onboarding Workflows",

    "services.consultation.title": "Business Intelligence",
    "services.consultation.description":
      "Machen Sie aus verstreuten Daten entscheidungssichere Insights.",
    "services.consultation.feature1": "Wöchentliche KPI-Digests",
    "services.consultation.feature2": "Wettbewerber-Monitoring",
    "services.consultation.feature3": "Bewertungs-Aggregation",
    "services.consultation.feature4": "Automatisierte Reports",

    // How It Works
    "howItWorks.title": "Unser Prozess",
    "howItWorks.description":
      "Wir halten es einfach: Die größte ROI-Chance finden, bauen und sicherstellen, dass Ihr Team es nutzt.",

    "howItWorks.step1.title": "Identifizieren",
    "howItWorks.step1.description":
      "Wir auditieren Ihre Abläufe, um repetitive Aufgaben mit hohem Volumen zu finden.",

    "howItWorks.step2.title": "Bauen",
    "howItWorks.step2.description":
      "Wir konfigurieren sichere Agenten und verbinden sie mit Ihren Tools (Google/Microsoft, CRM, Buchhaltung).",

    "howItWorks.step3.title": "Training & Übergabe",
    "howItWorks.step3.description":
      "Wir schulen Ihr Team und liefern Dokumentation, damit das neue System vertrauensvoll genutzt wird.",

    "howItWorks.step4.title": "Support",
    "howItWorks.step4.description":
      "Wir überwachen die Performance und passen die Agenten an, wenn Ihr Geschäft wächst.",

    // Testimonials
    "testimonials.title": "Kundenerfolge",
    "testimonials.description":
      "Sehen Sie, wie Mittelstand und wachstumsorientierte Unternehmen Zeit sparen und skalieren.",

    // Showcase
    "showcase.title": "Ihr KI Kontrollzentrum",
    "showcase.description":
      "Automatisierung darf keine Black Box sein. Unsere Dashboards geben volle Transparenz darüber, was Ihre Agenten tun, wie viel Zeit gespart wurde und wo Ihr Input nötig ist.",

    "showcase.overlay.title": "Sichtbarkeit & Kontrolle",

    "showcase.stats.dashboard.label": "Autom. Tasks",
    "showcase.stats.dashboard.value": "24/7",
    "showcase.stats.monitoring.label": "Fehlerrate",
    "showcase.stats.monitoring.value": "< 1%",
    "showcase.stats.architecture.label": "ROI",
    "showcase.stats.architecture.value": "Sofort",

    "showcase.features.title": "Die Operations Ebene",
    "showcase.features.item1": "Zentrale Ansicht aller aktiven Agenten.",
    "showcase.features.item2": "Freigabeprozesse (Human-in-the-loop).",
    "showcase.features.item3": "Live-Logs und Audit-Trails.",
    "showcase.features.item4": "Nahtlose API-Integrationen.",
    "showcase.features.item5": "Individuelle Trigger und Zeitpläne.",
    "showcase.features.item6": "Sicherheitsstandards auf Enterprise-Niveau.",

    "showcase.impact.title": "Warum es zählt",
    "showcase.impact.unlock.icon": "Zap",
    "showcase.impact.unlock.title": "Geschwindigkeit",
    "showcase.impact.unlock.description":
      "Antworten Sie Kunden sofort, auch außerhalb der Geschäftszeiten.",
    "showcase.impact.decisions.icon": "CheckCircle",
    "showcase.impact.decisions.title": "Präzision",
    "showcase.impact.decisions.description":
      "Eliminieren Sie Copy-Paste-Fehler und verlorene Informationen.",
    "showcase.impact.resilience.icon": "TrendingUp",
    "showcase.impact.resilience.title": "Fokus",
    "showcase.impact.resilience.description":
      "Geben Sie Ihrem Team den Freiraum für Strategie und Kundenbeziehungen.",

    // Universal (Chaos Tamer)
    "universal.title": "Egal was Sie tun, tun Sie es schneller.",
    "universal.subtitle": "Logistik, Recht oder Limonadenstand. Chaos sieht überall gleich aus. Die Lösung auch.",
    "universal.button.idle": "Chaos bändigen",
    "universal.button.active": "Ordnung wiederhergestellt",
    "universal.floating.email": "Inbox 99+",
    "universal.floating.invoice": "Offene Rechnung",
    "universal.floating.meeting": "Terminchaos",
    "universal.floating.data": "Daten-Fehler",
    "universal.floating.urgent": "Eskalation",
    "universal.floating.delay": "Verzug",
    "universal.floating.error": "Human Error",

    // Why AIceFlow
    "why.title": "Warum AIceFlow?",
    "why.description":
      "Wir schlagen die Brücke zwischen komplexer KI-Technologie und Ihrer täglichen Geschäftsrealität.",

    "why.tailored.title": "Nicht nur Beratung",
    "why.tailored.description":
      "Wir lassen Sie nicht mit einem PDF-Konzept allein. Wir bauen, implementieren und warten die Software.",

    "why.partnership.title": "Definierter ROI",
    "why.partnership.description":
      "Wir zielen auf Prozesse, wo der Impact messbar ist: Zeit gespart, Kosten gesenkt, Umsatz generiert.",

    "why.synergy.title": "Mensch im Mittelpunkt",
    "why.synergy.description":
      "Unsere Automatisierungen arbeiten *für* Ihre Mitarbeiter und nehmen ihnen die Last ab.",

    "why.local.title": "Fokus DACH Region",
    "why.local.description":
      "Wir verstehen lokale Regularien, Sprache und die Geschäftskultur.",

    "commitment.title": "Unsere Standards",
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
      "AI-Solution-Architektur|Backend- und Integrationsplattformen|Daten- und Agenten-Infrastruktur|Reliability Engineering",
    "team.hdc.specialty.title": "Technische Engineering-Autorität",
    "team.hdc.specialty.pills":
      "Safety-Critical-Engineering-Standards|Computer-Vision-Expertise|Hochverfügbare Systemarchitektur|Observability und Quality Gates|Compliance-by-Design|Performance- und Kostenkontrolle",
    "team.hdc.points":
      "Entwirft Architekturen, die vom Pilot in den geschäftskritischen Betrieb skalieren.|Baut sichere Integrationsschichten zwischen Legacy- und modernen Systemen ohne operative Reibungsverluste.|Sichert Produktionsstabilität über klare Qualitätsstandards, Monitoring und Incident-Resilienz.",

    "team.cta.primary": "Mit den Gründern sprechen",
    "team.cta.aria": "Die Gründer kontaktieren",
    "team.cta.caption":
      "Besprechen Sie Ihre wichtigsten Automatisierungshebel direkt mit Business- und Technik-Lead.",

    // Contact
    "contact.title": "Automatisieren Sie Ihr Business",
    "contact.description":
      "Buchen Sie eine kostenlose Strategiesession. Wir finden in 30 Minuten Ihre größten Automatisierungs-Chancen.",

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
      "* Pflichtfeld. Antwort meist innerhalb 24h.",
    "contact.form.submitting": "Sende...",
    "contact.form.error":
      "Es gab einen Fehler. Bitte versuchen Sie es erneut.",
    "contact.form.successTitle": "Nachricht gesendet",
    "contact.form.successMessage":
      "Danke für Ihre Nachricht. Wir melden uns in Kürze.",
    "contact.form.sendAnother": "Noch eine senden",

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
      "Die AI Operations Ebene für den DACH Mittelstand und wachstumsorientierte Unternehmen. Praktische, sichere und maßgeschneiderte Automatisierung.",

    "footer.nav.services.title": "Lösungen",
    "footer.nav.services.processAutomation": "Operations",
    "footer.nav.services.customDashboards": "Admin & Finance",
    "footer.nav.services.consultation": "Business Intel",
    "footer.nav.services.implementation": "Implementierung",
    "footer.nav.services.support": "Support",

    "footer.nav.company.title": "Firma",
    "footer.nav.company.about": "Über Uns",
    "footer.nav.company.team": "Team",
    "footer.nav.company.testimonials": "Erfolge",
    "footer.nav.company.contact": "Kontakt",
    "footer.nav.company.careers": "Karriere",

    "footer.copy": "© 2026 AIceFlow. Alle Rechte vorbehalten.",
    "footer.tagline": "Automatisieren. Optimieren. Wachsen.",

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
