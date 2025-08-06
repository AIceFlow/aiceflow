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
    "hero.title.line1": "Orchestrate Your Business",
    "hero.title.line2": "with Autonomous AI Agents",
    "hero.description":
      "We design and deploy intelligent agents that handle your complex operational tasks—from data analysis to customer communication—freeing your team to focus on what truly matters: strategic growth.",

    "hero.cta.primary": "Schedule a Strategy Call",
    "hero.cta.secondary": "See It in Action",

    "hero.pillars.tailored.title": "Tailor-Made Agents",
    "hero.pillars.tailored.description": "For your unique processes",
    "hero.pillars.integration.title": "Seamless Integration",
    "hero.pillars.integration.description": "With your existing tools",
    "hero.pillars.partnership.title": "Dedicated Partnership",
    "hero.pillars.partnership.description": "From discovery to success",

    "hero.status.available": "Available for New Projects",
    "hero.status.location": "Based in Überlingen, Lake Constance",

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
    "showcase.title": "From Operational Chaos to Strategic Clarity",
    "showcase.description":
      "Stop reacting and start leading. Our platform transforms your scattered workflows into a unified, intelligent system, giving you the real-time command center your business needs to thrive.",

    "showcase.overlay.title": "Your Business, Operating Intelligently.",

    "showcase.stats.dashboard.label": "Unified Dashboard",
    "showcase.stats.dashboard.value": "Total Control",
    "showcase.stats.monitoring.label": "Live Process Monitoring",
    "showcase.stats.monitoring.value": "Real-Time",
    "showcase.stats.architecture.label": "Agent-Based Architecture",
    "showcase.stats.architecture.value": "Built to Scale",

    "showcase.features.title": "Our Approach",
    "showcase.features.item1": "We map your existing business processes.",
    "showcase.features.item2":
      "Our experts configure and deploy autonomous agents.",
    "showcase.features.item3":
      "You monitor and manage everything from your dashboard.",
    "showcase.features.item4":
      "Gain actionable insights from automated reports.",

    "showcase.impact.title": "The Strategic Impact",
    "showcase.impact.unlock.icon": "Users",
    "showcase.impact.unlock.title": "Unlock Your Team's Potential",
    "showcase.impact.unlock.description":
      "Automate the repetitive tasks that drain creativity. Free your experts to focus on strategic initiatives and high-impact work that drives growth.",
    "showcase.impact.decisions.icon": "BarChart2",
    "showcase.impact.decisions.title": "Drive Decisions with Data, Not Guesses",
    "showcase.impact.decisions.description":
      "Our platform generates clean, structured data from every action. Turn process outputs into reliable insights for smarter, faster business decisions.",
    "showcase.impact.resilience.icon": "ShieldCheck",
    "showcase.impact.resilience.title": "Build a Resilient, Scalable Operation",
    "showcase.impact.resilience.description":
      "Create robust processes that run flawlessly 24/7. Easily scale your operations to meet growing demand without the corresponding increase in manual overhead.",

    "showcase.dots.team": "Manage your team and their permissions.",
    "showcase.dots.processes": "Live processes are running seamlessly.",
    "showcase.dots.alerts": "Get alerts for completed tasks and reports.",

    // Industries

    // Why AIceFlow
    "why.title": "Why Partner with AIceFlow?",
    "why.description":
      "We're not just another software provider. We are your dedicated partner in transforming your business through intelligent automation.",

    "why.tailored.title": "Tailored Intelligence, Not Generic Bots",
    "why.tailored.description":
      "We build solutions that fit your exact processes. Our agents are custom-configured to solve your unique challenges for maximum impact.",

    "why.partnership.title": "A True Partnership",
    "why.partnership.description":
      "Your success is our success. We work closely with you from day one to understand your goals and ensure our solutions deliver real, measurable value.",

    "why.synergy.title": "Human + AI: The Perfect Synergy",
    "why.synergy.description":
      "Our philosophy is to augment, not replace. We empower your team by automating tedious work, freeing them to be more strategic and creative.",

    "why.local.title": "Local Expertise, Global Power",
    "why.local.description":
      "Benefit from the attentive, reliable service of a local German partner while leveraging the power of world-class, global-scale AI technology.",

    "commitment.title": "Our Commitment to You",
    "commitment.description":
      "These principles are the foundation of every project we undertake.",

    "commitment.transparency.title": "Radical Transparency",
    "commitment.transparency.description":
      "No 'black boxes'. You will always have a clear understanding of what your AI agents are doing and why, ensuring you remain in full control.",

    "commitment.empowerment.title": "Team Empowerment",
    "commitment.empowerment.description":
      "Our goal is to make your experts even better. We supercharge your team's capabilities, turning institutional knowledge into an automated asset.",

    "commitment.value.title": "Measurable Value",
    "commitment.value.description":
      "We establish clear KPIs for every project. Success isn't just about launching a tool; it's about demonstrably improving the metrics that matter to you.",

    //Team
    "team.title": "The Operating System for Your Growth",
    "team.description":
      "We don't deliver concepts, but functioning, intelligent systems. As technical founders and AI specialists, we transform your complex business processes into autonomous agents that work and learn for you.",

    "team.philosophy.title": "The Engine: An Intelligent Dialogue",
    "team.philosophy.description":
      "Every business process has its own language. We founded this agency because, for the first time, modern AI speaks this language fluently. Our job is to orchestrate the dialogue between your objective and the artificial intelligence. As founders deeply rooted in both strategy and code, we ensure this dialogue is perfect: one of us ensures the strategic clarity of the conversation, the other the technical perfection of the syntax. The result is a system that thinks along—and creates real value.",
    "team.philosophy.imageAlt":
      "The founders of AIceFlow, Felix Funke and Maik Pfäffle",

    "team.expertise.business": "Strategy & Business",
    "team.expertise.tech": "Technology & Engineering",

    "team.ff.name": "Felix Funke",
    "team.ff.role": "Co-Founder | Vision & Client Strategy",
    "team.ff.bio":
      "As a full-stack engineer with a passion for growth, Felix focuses on the big picture. He excels at understanding a client's world, shaping the strategic vision, and driving the project forward with energy. He's your primary partner for turning business needs into a clear, actionable plan.",

    "team.ff.expertise.business.item1": "Process Discovery & ROI",
    "team.ff.expertise.business.item2": "Client-Centric Strategy",
    "team.ff.expertise.business.item3": "Growth Roadmapping",

    "team.ff.expertise.tech.item1": "Rapid Prototyping",
    "team.ff.expertise.tech.item2": "User-Centric Dashboards",
    "team.ff.expertise.tech.item3": "Full-Stack Application Design",

    "team.mp.name": "Maik Pfäffle",
    "team.mp.role": "Co-Founder | Precision & Technical Architecture",
    "team.mp.bio":
      "As a full-stack engineer with a focus on perfection, Maik ensures the vision is built to last. He is the thorough, detail-oriented force who architects robust systems and guarantees every line of code is secure, scalable, and flawless. He is your guarantee of technical excellence.",

    "team.mp.expertise.business.item1": "Technical Feasibility Analysis",
    "team.mp.expertise.business.item2": "Complex Workflow Automation",
    "team.mp.expertise.business.item3": "System Integration Strategy",

    "team.mp.expertise.tech.item1": "Enterprise-Grade Security",
    "team.mp.expertise.tech.item2": "Robust & Scalable Backends",
    "team.mp.expertise.tech.item3": "API & System Integration",
    // Contact
    "contact.title": "Ready to Transform Your Business?",
    "contact.description":
      "Let's discuss how AI automation can revolutionize your processes. Schedule your free consultation today and discover the possibilities.",

    // Form
    "contact.form.title": "Let's Get Started",
    "contact.form.firstNameLabel": "First Name",
    "contact.form.firstNamePlaceholder": "Your first name",
    "contact.form.lastNameLabel": "Last Name",
    "contact.form.lastNamePlaceholder": "Your last name",
    "contact.form.emailLabel": "Email Address",
    "contact.form.emailPlaceholder": "your.email@company.com",
    "contact.form.companyLabel": "Company Name",
    "contact.form.companyPlaceholder": "Your company name",
    "contact.form.phoneLabel": "Phone Number",
    "contact.form.phonePlaceholder": "+1 (555) 123-4567",
    "contact.form.needsLabel": "Tell us about your automation needs",
    "contact.form.needsPlaceholder":
      "Describe your current processes and what you're looking to automate…",
    "contact.form.submit": "Schedule a Free Consultation",
    "contact.form.requiredNote":
      "* Required fields. We'll respond within 24 hours.",
    "contact.form.submitting": "Submitting...",
    "contact.form.error":
      "An error occurred. Please check your information and try again.",
    "contact.form.successTitle": "Thank You!",
    "contact.form.successMessage":
      "Your message has been sent successfully. We will get back to you shortly.",
    "contact.form.sendAnother": "Send another message",

    // Contact Info
    "contact.info.title": "Contact Information",
    "contact.info.office.title": "Our Office",
    "contact.info.office.line1": "Lake Constance Region",
    "contact.info.office.line2": "Southern Germany",
    "contact.info.office.line3": "Baden-Württemberg",
    "contact.info.email.title": "Email",
    "contact.info.email.address": "hello@aiceflow.de",
    "contact.info.phone.title": "Phone",
    "contact.info.phone.number": "+49 (0) 7531 123 456",
    "contact.info.hours.title": "Business Hours",
    "contact.info.hours.line1": "Mon – Fri: 9:00 AM – 6:00 PM CET",
    "contact.info.hours.line2": "Sat: 10:00 AM – 2:00 PM CET",

    // Actions
    "contact.actions.title": "Quick Actions",
    "contact.actions.discovery": "Book a Discovery Call",
    "contact.actions.download": "Download Case Studies",
    "contact.actions.proposal": "Request a Proposal",

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
    "hero.title.line1": "Orchestrieren Sie Ihr Unternehmen",
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
    "team.title": "Das Betriebssystem für Ihr Wachstum",
    "team.description":
      "Wir liefern keine Konzepte, sondern funktionierende, intelligente Systeme. Als technische Gründer und KI-Spezialisten wandeln wir Ihre komplexen Geschäftsprozesse in autonome Agenten um, die für Sie arbeiten und lernen.",

    "team.philosophy.title": "Der Motor: Ein intelligenter Dialog",
    "team.philosophy.description":
      "Jeder Geschäftsprozess hat eine eigene Sprache. Wir haben diese Agentur gegründet, weil moderne KI diese Sprache erstmals fließend spricht. Unsere Aufgabe ist es, den Dialog zwischen Ihrem Ziel und der künstlichen Intelligenz zu orchestrieren. Als Gründer, die beide in Strategie und Code verwurzelt sind, stellen wir sicher, dass dieser Dialog perfekt ist: Einer sorgt für die strategische Klarheit der Konversation, der andere für die technische Perfektion der Syntax. So entsteht ein System, das mitdenkt – und echten Mehrwert schafft.",
    "team.philosophy.imageAlt":
      "Die Gründer von AIceFlow, Felix Funke und Maik Pfäffle",

    "team.expertise.business": "Strategie & Business",
    "team.expertise.tech": "Technologie & Engineering",

    "team.ff.name": "Felix Funke",
    "team.ff.role": "Co-Founder | Vision & Kundenstrategie",
    "team.ff.bio":
      "Als Full-Stack-Entwickler mit einer Leidenschaft für Wachstum konzentriert sich Felix auf das große Ganze. Er versteht die Welt des Kunden, formt die strategische Vision und treibt Projekte mit Energie voran. Er ist Ihr erster Ansprechpartner, um Geschäftsziele in einen klaren, umsetzbaren Plan zu verwandeln.",

    "team.ff.expertise.business.item1": "Prozessanalyse & ROI",
    "team.ff.expertise.business.item2": "Kundenzentrierte Strategie",
    "team.ff.expertise.business.item3": "Wachstums-Roadmapping",

    "team.ff.expertise.tech.item1": "Rapid Prototyping",
    "team.ff.expertise.tech.item2": "Nutzerzentrierte Dashboards",
    "team.ff.expertise.tech.item3": "Full-Stack-Anwendungsdesign",

    "team.mp.name": "Maik Pfäffle",
    "team.mp.role": "Co-Founder | Präzision & Technische Architektur",
    "team.mp.bio":
      "Als Full-Stack-Entwickler mit einem Fokus auf Perfektion stellt Maik sicher, dass die Vision für die Ewigkeit gebaut wird. Er ist die treibende Kraft für Gründlichkeit und Detailtreue, der robuste Systeme entwirft und garantiert, dass jede Codezeile sicher, skalierbar und makellos ist. Er ist Ihre Garantie für technische Exzellenz.",

    "team.mp.expertise.business.item1": "Technische Machbarkeitsanalyse",
    "team.mp.expertise.business.item2": "Komplexe Workflow-Automatisierung",
    "team.mp.expertise.business.item3": "System-Integrationsstrategie",

    "team.mp.expertise.tech.item1": "Enterprise-Sicherheit",
    "team.mp.expertise.tech.item2": "Robuste & Skalierbare Backends",
    "team.mp.expertise.tech.item3": "API- & Systemintegration",
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
