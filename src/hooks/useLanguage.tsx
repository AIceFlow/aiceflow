import React, { useState, useContext, createContext, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    'nav.about': 'About',
    'nav.services': 'Services', 
    'nav.how-it-works': 'How It Works',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'header.cta': 'Schedule Consultation',

    // Hero
    'hero.title': 'Smarter Processes, Powered by AI',
    'hero.description': 'Transform your business operations with intelligent automation solutions. We help companies streamline workflows, reduce costs, and accelerate growth through cutting-edge AI technology.',
    'hero.cta.primary': 'Schedule Your Free Consultation',
    'hero.cta.secondary': 'View Our Work',
    'hero.stats.processes': 'Processes Automated',
    'hero.stats.satisfaction': 'Client Satisfaction',
    'hero.stats.operations': 'AI Operations',
    'hero.status.available': 'Available for new projects',
    'hero.status.location': 'Based in Europe',

    // About
    'about.title': 'About AIceFlow',
    'about.description': 'We specialize in LLM-based process automation, helping businesses harness the power of artificial intelligence to optimize their operations and drive unprecedented efficiency.',
    'about.innovation.title': 'Innovation First',
    'about.innovation.description': 'Cutting-edge AI solutions tailored to your unique business needs.',
    'about.custom.title': 'Custom Solutions',
    'about.custom.description': 'Bespoke automation strategies designed specifically for your industry.',
    'about.results.title': 'Proven Results',
    'about.results.description': 'Measurable improvements in efficiency, cost reduction, and productivity.',
  },
  de: {
    // Header
    'nav.about': 'Über uns',
    'nav.services': 'Leistungen',
    'nav.how-it-works': 'So funktioniert es',
    'nav.testimonials': 'Referenzen',
    'nav.contact': 'Kontakt',
    'header.cta': 'Beratung vereinbaren',

    // Hero  
    'hero.title': 'Intelligente Prozesse, Angetrieben von KI',
    'hero.description': 'Transformieren Sie Ihre Geschäftsprozesse mit intelligenten Automatisierungslösungen. Wir helfen Unternehmen dabei, Arbeitsabläufe zu optimieren, Kosten zu senken und das Wachstum durch modernste KI-Technologie zu beschleunigen.',
    'hero.cta.primary': 'Kostenlose Beratung vereinbaren',
    'hero.cta.secondary': 'Unsere Arbeit ansehen',
    'hero.stats.processes': 'Automatisierte Prozesse',
    'hero.stats.satisfaction': 'Kundenzufriedenheit',
    'hero.stats.operations': 'KI-Operationen',
    'hero.status.available': 'Verfügbar für neue Projekte',
    'hero.status.location': 'Ansässig in Europa',

    // About
    'about.title': 'Über AIceFlow',
    'about.description': 'Wir spezialisieren uns auf LLM-basierte Prozessautomatisierung und helfen Unternehmen dabei, die Macht der künstlichen Intelligenz zu nutzen, um ihre Abläufe zu optimieren und beispiellose Effizienz zu erreichen.',
    'about.innovation.title': 'Innovation First',
    'about.innovation.description': 'Modernste KI-Lösungen, maßgeschneidert für Ihre einzigartigen Geschäftsanforderungen.',
    'about.custom.title': 'Maßgeschneiderte Lösungen',
    'about.custom.description': 'Individuelle Automatisierungsstrategien, speziell für Ihre Branche entwickelt.',
    'about.results.title': 'Bewährte Ergebnisse',
    'about.results.description': 'Messbare Verbesserungen in Effizienz, Kostensenkung und Produktivität.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};