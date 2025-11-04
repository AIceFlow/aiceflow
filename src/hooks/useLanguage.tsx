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
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.how-it-works": "How It Works",
    "nav.testimonials": "Success Stories",
    "nav.contact": "Contact",
    "header.cta": "Book a Consultation",

    // Hero
    "hero.title.line1": "Orchestrate Your Business",
    "hero.title.dynamicWords": "Automate|Optimize|Orchestrate",
    "hero.title.staticRemainder": "Your Business",
    "hero.title.line2": "with Autonomous AI Agents",
    "hero.description":
      "We develop and implement intelligent agents that handle your complex operational tasks—from data analysis to customer communications. This lets your team focus on what matters most: strategic growth.",

    "hero.cta.primary": "Book a Strategy Session",
    "hero.cta.secondary": "Watch the Live Demo",

    "hero.pillars.tailored.title": "Tailor-Made Agents",
    "hero.pillars.tailored.description": "For your unique processes",
    "hero.pillars.integration.title": "Seamless Integration",
    "hero.pillars.integration.description": "Into your existing tools",
    "hero.pillars.partnership.title": "Dedicated Partnership",
    "hero.pillars.partnership.description": "From analysis to success",

    "hero.status.available": "Available for New Projects",
    "hero.status.location": "Based in Überlingen on Lake Constance",

    // About
    "about.title": "About",
    "about.description":
      "From our base on Lake Constance, we relieve your team of time-consuming routine tasks. Our tailored automations boost your productivity while keeping your team in full control at all times.",

    "about.innovation.title": "Innovation Without Limits",
    "about.custom.title": "As Individual as Your Business",
    "about.results.title": "Visible Results",

    "about.innovation.description":
      "We turn complex processes into intelligent, flexible workflows that grow with your company.",

    "about.custom.description":
      "Every solution is precisely aligned with your goals, data, and company culture—ensuring seamless integration into your daily operations.",

    "about.results.description":
      "Benefit immediately from measurable efficiency gains and cost savings, backed by clear dashboards and continuous improvement.",

    // Services
    "services.title": "Our Services for Your Team",
    "services.description":
      "We take routine tasks off your plate and create transparency—so you can focus fully on your core business.",

    "services.processAutomation.title": "Process Automation",
    "services.processAutomation.description":
      "Accelerate your processes, eliminate bottlenecks, and maintain full control.",
    "services.processAutomation.feature1": "Fewer manual tasks",
    "services.processAutomation.feature2": "Shorter processing times",
    "services.processAutomation.feature3": "Consistent quality",
    "services.processAutomation.feature4": "Proactive notifications",

    "services.dashboards.title": "Transparent Dashboards",
    "services.dashboards.description":
      "Keep your key metrics in view at all times—interactive and in real time.",
    "services.dashboards.feature1": "Real-time data",
    "services.dashboards.feature2": "Tailored KPI overview",
    "services.dashboards.feature3": "Interactive visuals",
    "services.dashboards.feature4": "Mobile-ready experience",

    "services.consultation.title": "Strategic Partnership",
    "services.consultation.description":
      "Together we identify opportunities, plan measures, and ensure lasting improvements.",
    "services.consultation.feature1": "Detailed process analysis",
    "services.consultation.feature2": "Tailored roadmap",
    "services.consultation.feature3": "Hands-on implementation",
    "services.consultation.feature4": "Continuous support",

    // How It Works
    "howItWorks.title": "How It Works",
    "howItWorks.description":
      "Our clearly structured approach delivers rapid, controlled efficiency gains through automation.",

    "howItWorks.step1.title": "Potential Analysis",
    "howItWorks.step1.description":
      "Together we analyze your processes and identify optimal automation potential.",

    "howItWorks.step2.title": "Tailored Planning",
    "howItWorks.step2.description":
      "We create an individual automation plan that fits your workflows perfectly.",

    "howItWorks.step3.title": "Seamless Implementation",
    "howItWorks.step3.description":
      "We implement the automation and build clear dashboards for maximum transparency.",

    "howItWorks.step4.title": "Continuous Optimization",
    "howItWorks.step4.description":
      "We continuously monitor and refine your processes to secure lasting efficiency gains.",

    // Testimonials
    "testimonials.title": "Our Clients' Success Stories",
    "testimonials.description":
      "Discover how companies boost productivity with AIceFlow—without adding headcount.",

    // Showcase
    "showcase.title": "From Operational Chaos to Strategic Clarity",
    "showcase.description":
      "Act instead of react. Our platform transforms your scattered workflows into a unified, intelligent system and gives you the real-time command center your business needs to succeed.",

    "showcase.overlay.title": "Your business, run intelligently.",

    "showcase.stats.dashboard.label": "Unified Dashboard",
    "showcase.stats.dashboard.value": "Total Control",
    "showcase.stats.monitoring.label": "Live Process Monitoring",
    "showcase.stats.monitoring.value": "In real time",
    "showcase.stats.architecture.label": "Agent-Based Architecture",
    "showcase.stats.architecture.value": "Scalable",

    "showcase.features.title": "Our Approach",
    "showcase.features.item1":
      "We capture your existing business processes.",
    "showcase.features.item2":
      "Our specialists configure and implement autonomous agents.",
    "showcase.features.item3":
      "You monitor and control everything through your dashboard.",
    "showcase.features.item4":
      "Gain actionable insights from automated reports.",
    "showcase.features.item5":
      "We integrate your databases, CRM systems, and other applications programmatically.",
    "showcase.features.item6":
      "We ensure secure, controlled data flows across every process.",

    "showcase.impact.title": "The Strategic Value",
    "showcase.impact.unlock.icon": "Users",
    "showcase.impact.unlock.title": "Unleash Your Team's Potential",
    "showcase.impact.unlock.description":
      "Automate repetitive tasks that drain creativity. Give your experts the freedom to focus on strategic initiatives and growth-driving work.",
    "showcase.impact.decisions.icon": "BarChart2",
    "showcase.impact.decisions.title": "Make Decisions with Data, Not Guesses",
    "showcase.impact.decisions.description":
      "Our platform generates clean, structured data from every action. Turn process outputs into reliable insights for smarter, faster business decisions.",
    "showcase.impact.resilience.icon": "ShieldCheck",
    "showcase.impact.resilience.title": "Build a Robust, Scalable Operation",
    "showcase.impact.resilience.description":
      "Establish stable processes that run flawlessly around the clock. Scale to meet growing demand without increasing manual effort.",

    "showcase.dots.team": "Manage your team and their permissions.",
    "showcase.dots.processes": "Live processes run seamlessly.",
    "showcase.dots.alerts":
      "Receive notifications for completed tasks and reports.",

    // Industries
    "industries.title": "Industries We Strengthen",
    "industries.description":
      "Whether logistics, marketing, or healthcare—our automation solutions adapt to your requirements and let you achieve more with less.",

    "industries.logistics.name": "Logistics",
    "industries.logistics.description":
      "Optimize routes and forecast demand so your supply chain keeps moving smoothly.",

    "industries.marketing.name": "Marketing",
    "industries.marketing.description":
      "Automate campaign workflows, gain deeper insights, and boost customer engagement.",

    "industries.sales.name": "Sales",
    "industries.sales.description":
      "Qualify leads faster, automate follow-ups, and manage customer relationships at scale.",

    "industries.operations.name": "Operations",
    "industries.operations.description":
      "Optimize core processes and monitor performance in real time to avoid bottlenecks.",

    "industries.manufacturing.name": "Production",
    "industries.manufacturing.description":
      "Improve production reliability with predictive maintenance and quality control.",

    "industries.healthcare.name": "Healthcare",
    "industries.healthcare.description":
      "Enhance the patient experience with automated appointment scheduling and secure data handling.",

    // Why AIceFlow
    "why.title": "Why Partner with AIceFlow?",
    "why.description":
      "We're not just another software provider. We're your dedicated partner for transforming your business through intelligent automation.",

    "why.tailored.title": "Tailored Intelligence, Not Off-the-Shelf Bots",
    "why.tailored.description":
      "We build solutions precisely around your processes. Our agents are individually configured to solve your unique challenges for maximum impact.",

    "why.partnership.title": "A True Partnership",
    "why.partnership.description":
      "Your success is our success. From day one we work closely with you to understand your goals and ensure our solutions deliver measurable value.",

    "why.synergy.title": "People + AI: The Perfect Synergy",
    "why.synergy.description":
      "Our philosophy is to augment, not replace. We empower your team by automating tedious work so they can focus on strategic and creative initiatives.",

    "why.local.title": "Local Expertise, Global Strength",
    "why.local.description":
      "Benefit from the attentive, reliable service of a local German partner while leveraging world-class, global AI technology.",

    "commitment.title": "Our Promise to You",
    "commitment.description":
      "These principles are the foundation of every project we undertake.",

    "commitment.transparency.title": "Radical Transparency",
    "commitment.transparency.description":
      "No 'black boxes.' You'll always understand what your AI agents are doing and why, keeping you in full control.",

    "commitment.empowerment.title": "Empowering Your Team",
    "commitment.empowerment.description":
      "Our goal is to elevate your experts. We amplify your team's capabilities and turn institutional knowledge into an automated asset.",

    "commitment.value.title": "Measurable Value",
    "commitment.value.description":
      "We define clear KPIs for every project. Success means demonstrably improving the metrics that matter to you.",

    // Team
    "team.founders.title": "Founders",
    "team.founders.subtitle": "Strategy × Engineering—from a single source.",
    "team.duo.title": "How We Work",
    "team.duo.point1":
      "We turn objectives into a clear automation roadmap—delivered in small, validated increments.",
    "team.duo.point2":
      "End-to-end architecture, integrations, and data flows tailored to your stack (SAP, CRM, DB, APIs).",
    "team.duo.point3":
      "After the first success, we harden everything: security, stability, monitoring, and clean handover.",
    "team.cta.primary": "Book a meeting with both founders",
    "team.cta.aria": "Open the contact section to book a meeting",

    "team.ff.name": "Felix Funke",
    "team.ff.role_short": "Vision, Client Strategy & Full-Stack",
    "team.ff.focus1": "Strategy",
    "team.ff.focus2": "Full-Stack & AI",
    "team.ff.focus3": "Client Advisory",
    "team.ff.point1":
      "Turns your business goals into an actionable automation plan.",
    "team.ff.point2":
      "Keeps the focus on UX and dashboards that teams actually use.",
    "team.ff.point3": "Drives measurable outcomes and clear KPIs.",

    "team.mp.name": "Maik Pfäffle",
    "team.mp.role_short": "SAP, Process Automation & Architecture",
    "team.mp.focus1": "SAP & Integrations",
    "team.mp.focus2": "Architecture",
    "team.mp.focus3": "Process Automation",
    "team.mp.point1":
      "Designs scalable, secure systems and clean data pipelines.",
    "team.mp.point2":
      "Leads enterprise integrations (SAP, CRM, APIs, databases).",
    "team.mp.point3":
      "Builds in reliability, monitoring, and quality from the start.",

    // Contact
    "contact.title": "Ready to Transform Your Business?",
    "contact.description":
      "Let's discuss how AI automation can revolutionize your processes. Book your free consultation today and explore the possibilities.",

    // Form
    "contact.form.title": "Start Now",
    "contact.form.firstNameLabel": "First Name",
    "contact.form.firstNamePlaceholder": "Your first name",
    "contact.form.lastNameLabel": "Last Name",
    "contact.form.lastNamePlaceholder": "Your last name",
    "contact.form.emailLabel": "Email Address",
    "contact.form.emailPlaceholder": "your.email@company.com",
    "contact.form.companyLabel": "Company Name",
    "contact.form.companyPlaceholder": "Your company name",
    "contact.form.phoneLabel": "Phone Number",
    "contact.form.phonePlaceholder": "+49 (0) 176 6336 4095",
    "contact.form.needsLabel": "Tell us about your automation needs",
    "contact.form.needsPlaceholder":
      "Describe your current processes and what you'd like to automate…",
    "contact.form.submit": "Book a Free Consultation",
    "contact.form.requiredNote":
      "* Required fields. We'll reply within 24 hours.",
    "contact.form.submitting": "Sending...",
    "contact.form.error":
      "An error occurred. Please check your information and try again.",
    "contact.form.successTitle": "Thank You!",
    "contact.form.successMessage":
      "Your message has been sent successfully. We will get back to you shortly.",
    "contact.form.sendAnother": "Send another message",

    // Contact Info
    "contact.info.title": "Contact Us",
    "contact.info.office.title": "Location",
    "contact.info.office.line1": "AIceFlow GmbH",
    "contact.info.office.line2": "Nussdorfer Strasse 9",
    "contact.info.office.line3": "88662 Ueberlingen, Germany",
    "contact.info.email.title": "Email",
    "contact.info.email.address": "hello@aiceflow.de",
    "contact.info.phone.title": "Phone",
    "contact.info.phone.number": "+49 (0) 176 6336 4095",
    "contact.info.hours.title": "Opening Hours",
    "contact.info.hours.line1": "Mon – Fri: 9:00 – 18:00 CET",
    "contact.info.hours.line2": "Sat: 10:00 – 14:00 CET",

    // Actions
    "contact.actions.title": "Quick Actions",
    "contact.actions.discovery": "Book a Discovery Session",
    "contact.actions.download": "Download Case Studies",
    "contact.actions.proposal": "Request a Proposal",

    // Footer
    "footer.company.initials": "AF",
    "footer.company.name": "AIceFlow",
    "footer.company.description":
      "We transform companies in southern Germany with cutting-edge AI automation solutions. Intelligent processes, powered by AI.",

    "footer.nav.services.title": "Services",
    "footer.nav.services.processAutomation": "Process Automation",
    "footer.nav.services.customDashboards": "Custom Dashboards",
    "footer.nav.services.consultation": "Strategic Consulting",
    "footer.nav.services.implementation": "AI Implementation",
    "footer.nav.services.support": "Ongoing Support",

    "footer.nav.company.title": "Company",
    "footer.nav.company.about": "About AIceFlow",
    "footer.nav.company.team": "Our Team",
    "footer.nav.company.testimonials": "References",
    "footer.nav.company.contact": "Contact",
    "footer.nav.company.careers": "Careers",

    "footer.copy": "© 2025 AIceFlow GmbH. All rights reserved.",
    "footer.tagline": "Precision. Strategy. Excellence.",

    "footer.policies.privacy": "Privacy Policy",
    "footer.policies.terms": "Terms of Use",
    "footer.policies.imprint": "Imprint",
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
    "hero.title.line1": "Orchestrieren Sie Ihr Unternehmen",
    "hero.title.dynamicWords": "Automatisieren|Optimieren|Orchestrieren",
    "hero.title.staticRemainder": "Sie Ihr Unternehmen",
    "hero.title.line2": "mit autonomen KI-Agenten",
    "hero.description":
      "Wir entwickeln und implementieren intelligente Agenten, die Ihre komplexen operativen Aufgaben erledigen – von der Datenanalyse bis zur Kundenkommunikation. So kann sich Ihr Team auf das Wesentliche konzentrieren: strategisches Wachstum.",

    "hero.cta.primary": "Strategiegespräch vereinbaren",
    "hero.cta.secondary": "Live-Demo ansehen",

    "hero.pillars.tailored.title": "Maßgeschneiderte Agenten",
    "hero.pillars.tailored.description": "Für Ihre einzigartigen Prozesse",
    "hero.pillars.integration.title": "Nahtlose Integration",
    "hero.pillars.integration.description": "In Ihre bestehenden Tools",
    "hero.pillars.partnership.title": "Engagierte Partnerschaft",
    "hero.pillars.partnership.description": "Von der Analyse bis zum Erfolg",

    "hero.status.available": "Verfügbar für neue Projekte",
    "hero.status.location": "Standort: Überlingen am Bodensee",

    // About
    "about.title": "Über",
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

    "services.processAutomation.title": "Prozess-Automatisierung",
    "services.processAutomation.description":
      "Beschleunigen Sie Ihre Prozesse, beseitigen Sie Engpässe und behalten Sie dabei die volle Kontrolle.",
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
    "services.consultation.feature3": "Praxisnahe Umsetzung",
    "services.consultation.feature4": "Kontinuierlicher Support",

    // How It Works
    "howItWorks.title": "So funktioniert's",
    "howItWorks.description":
      "Unser klar strukturierter Ablauf sorgt für schnelle, kontrollierte Effizienzsteigerung durch Automatisierung.",

    "howItWorks.step1.title": "Potentialanalyse",
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
    "industries.title": "Bereiche, die wir stärken",
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

    "showcase.title": "Vom operativen Chaos zur strategischen Klarheit",
    "showcase.description":
      "Handeln statt reagieren. Unsere Plattform verwandelt Ihre verstreuten Arbeitsabläufe in ein einheitliches, intelligentes System und gibt Ihnen die Echtzeit-Kommandozentrale, die Ihr Unternehmen zum Erfolg braucht.",

    "showcase.overlay.title": "Ihr Unternehmen, intelligent betrieben.",

    "showcase.stats.dashboard.label": "Einheitliches Dashboard",
    "showcase.stats.dashboard.value": "Totale Kontrolle",
    "showcase.stats.monitoring.label": "Live-Prozessüberwachung",
    "showcase.stats.monitoring.value": "In Echtzeit",
    "showcase.stats.architecture.label": "Agenten-basierte Architektur",
    "showcase.stats.architecture.value": "Skalierbar",

    "showcase.features.title": "Unser Ansatz",
    "showcase.features.item1":
      "Wir erfassen Ihre bestehenden Geschäftsprozesse.",
    "showcase.features.item2":
      "Unsere Experten konfigurieren und implementieren autonome Agenten.",
    "showcase.features.item3":
      "Sie überwachen und steuern alles über Ihr Dashboard.",
    "showcase.features.item4":
      "Gewinnen Sie handlungsrelevante Einblicke aus automatisierten Berichten.",
    "showcase.features.item5":
      "Wir binden Ihre Datenbanken, CRM-Systeme und weitere Anwendungen programmatisch ein.",
    "showcase.features.item6":
      "Für einen sicheren und kontrollierten Datenfluss in allen Prozessen wird gesorgt.",

    "showcase.impact.title": "Der strategische Mehrwert",
    "showcase.impact.unlock.icon": "Users",
    "showcase.impact.unlock.title": "Entfesseln Sie das Potenzial Ihres Teams",
    "showcase.impact.unlock.description":
      "Automatisieren Sie repetitive Aufgaben, die Kreativität rauben. Geben Sie Ihren Experten die Freiheit, sich auf strategische Initiativen und wachstumsfördernde Arbeit zu konzentrieren.",
    "showcase.impact.decisions.icon": "BarChart2",
    "showcase.impact.decisions.title":
      "Entscheidungen auf Basis von Daten, nicht Vermutungen",
    "showcase.impact.decisions.description":
      "Unsere Plattform erzeugt aus jeder Aktion saubere, strukturierte Daten. Verwandeln Sie Prozessergebnisse in verlässliche Einblicke für intelligentere und schnellere Geschäftsentscheidungen.",
    "showcase.impact.resilience.icon": "ShieldCheck",
    "showcase.impact.resilience.title":
      "Schaffen Sie einen robusten, skalierbaren Betrieb",
    "showcase.impact.resilience.description":
      "Etablieren Sie stabile Prozesse, die rund um die Uhr fehlerfrei laufen. Skalieren Sie Ihren Betrieb, um der wachsenden Nachfrage gerecht zu werden, ohne den manuellen Aufwand zu erhöhen.",

    "showcase.dots.team": "Verwalten Sie Ihr Team und dessen Berechtigungen.",
    "showcase.dots.processes": "Aktive Prozesse laufen nahtlos ab.",
    "showcase.dots.alerts":
      "Erhalten Sie Benachrichtigungen für abgeschlossene Aufgaben und Berichte.",
    // Why AIceFlow

    "why.title": "Warum eine Partnerschaft mit AIceFlow?",
    "why.description":
      "Wir sind nicht nur ein weiterer Softwareanbieter. Wir sind Ihr engagierter Partner bei der Transformation Ihres Unternehmens durch intelligente Automatisierung.",

    "why.tailored.title": "Maßgeschneiderte Intelligenz, keine Standard-Bots",
    "why.tailored.description":
      "Wir entwickeln Lösungen, die exakt auf Ihre Prozesse zugeschnitten sind. Unsere Agenten werden individuell konfiguriert, um Ihre einzigartigen Herausforderungen mit maximaler Wirkung zu lösen.",

    "why.partnership.title": "Eine echte Partnerschaft",
    "why.partnership.description":
      "Ihr Erfolg ist unser Erfolg. Wir arbeiten vom ersten Tag an eng mit Ihnen zusammen, um Ihre Ziele zu verstehen und sicherzustellen, dass unsere Lösungen einen echten, messbaren Mehrwert liefern.",

    "why.synergy.title": "Mensch + KI: Die perfekte Synergie",
    "why.synergy.description":
      "Unsere Philosophie ist es, zu erweitern, nicht zu ersetzen. Wir stärken Ihr Team, indem wir mühsame Arbeit automatisieren und Freiraum für strategische und kreative Aufgaben schaffen.",

    "why.local.title": "Lokale Expertise, globale Stärke",
    "why.local.description":
      "Profitieren Sie vom aufmerksamen, zuverlässigen Service eines lokalen deutschen Partners und nutzen Sie gleichzeitig die Stärke von erstklassiger, globaler KI-Technologie.",

    "commitment.title": "Unser Versprechen an Sie",
    "commitment.description":
      "Diese Prinzipien sind das Fundament jedes Projekts, das wir durchführen.",

    "commitment.transparency.title": "Radikale Transparenz",
    "commitment.transparency.description":
      "Keine 'Black Boxes'. Sie haben jederzeit ein klares Verständnis dafür, was Ihre KI-Agenten tun und warum. So behalten Sie die volle Kontrolle.",

    "commitment.empowerment.title": "Stärkung des Teams",
    "commitment.empowerment.description":
      "Unser Ziel ist es, Ihre Experten noch besser zu machen. Wir laden die Fähigkeiten Ihres Teams auf und verwandeln institutionelles Wissen in einen automatisierten Vorteil.",

    "commitment.value.title": "Messbarer Mehrwert",
    "commitment.value.description":
      "Wir definieren für jedes Projekt klare KPIs. Erfolg bedeutet für uns nicht nur, ein Tool zu starten, sondern die für Sie wichtigen Kennzahlen nachweislich zu verbessern.",

    //Team
    "team.founders.title": "Founders",
    "team.founders.subtitle": "Strategie × Engineering – aus einer Hand.",
    "team.duo.title": "So arbeiten wir",
    "team.duo.point1":
      "Aus Zielen wird ein klarer Automatisierungs-Fahrplan – umgesetzt in kleinen, verifizierten Schritten.",
    "team.duo.point2":
      "Architektur, Integrationen und Datenflüsse Ende-zu-Ende – passend zu Ihrem Stack (SAP, CRM, DB, APIs).",
    "team.duo.point3":
      "Nach dem ersten Erfolg härten wir: Sicherheit, Stabilität, Monitoring und saubere Übergabe.",
    "team.cta.primary": "Termin mit beiden Founder buchen",
    "team.cta.aria": "Kontaktbereich öffnen, um einen Termin zu buchen",

    "team.ff.name": "Felix Funke",
    "team.ff.role_short": "Vision, Kundenstrategie & Full-Stack",
    "team.ff.focus1": "Strategie",
    "team.ff.focus2": "Full-Stack & KI",
    "team.ff.focus3": "Kundenberatung",
    "team.ff.point1":
      "Überführt Geschäftsziele in einen umsetzbaren Automatisierungs-Plan.",
    "team.ff.point2": "Fokus auf UX/Dashboards, die Teams wirklich nutzen.",
    "team.ff.point3": "Steuert messbare Ergebnisse und klare KPIs.",

    "team.mp.name": "Maik Pfäffle",
    "team.mp.role_short": "SAP, Prozess-Automation & Architektur",
    "team.mp.focus1": "SAP & Integrationen",
    "team.mp.focus2": "Architektur",
    "team.mp.focus3": "Prozessautomatisierung",
    "team.mp.point1":
      "Entwirft skalierbare, sichere Systeme und saubere Datenpipelines.",
    "team.mp.point2":
      "Steuert Enterprise-Integrationen (SAP, CRM, APIs, Datenbanken).",
    "team.mp.point3":
      "Verankert Zuverlässigkeit, Monitoring und Qualität von Beginn an.",
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
    "contact.form.phonePlaceholder": "+49 (0) 176 6336 4095",
    "contact.form.needsLabel":
      "Erzählen Sie uns von Ihren Automatisierungsbedürfnissen",
    "contact.form.needsPlaceholder":
      "Beschreiben Sie Ihre aktuellen Prozesse und was Sie automatisieren möchten…",
    "contact.form.submit": "Kostenlose Beratung vereinbaren",
    "contact.form.requiredNote":
      "* Pflichtfelder. Wir antworten innerhalb von 24 Stunden.",
    "contact.form.submitting": "Wird gesendet...",
    "contact.form.error":
      "Ein Fehler ist aufgetreten. Bitte überprüfen Sie Ihre Angaben und versuchen Sie es erneut.",
    "contact.form.successTitle": "Vielen Dank!",
    "contact.form.successMessage":
      "Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.",
    "contact.form.sendAnother": "Weitere Nachricht senden",

    // Contact Info
    "contact.info.title": "Kontaktieren Sie uns",
    "contact.info.office.title": "Standort",
    "contact.info.office.line1": "AIceFlow GmbH",
    "contact.info.office.line2": "Nussdorfer Strasse 9",
    "contact.info.office.line3": "88662 Ueberlingen, Deutschland",
    "contact.info.email.title": "E-Mail",
    "contact.info.email.address": "hallo@aiceflow.de",
    "contact.info.phone.title": "Telefon",
    "contact.info.phone.number": "+49 (0) 176 6336 4095",
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

    "footer.copy": "© 2025 AIceFlow GmbH. Alle Rechte vorbehalten.",
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
