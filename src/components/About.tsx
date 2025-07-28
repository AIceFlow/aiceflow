import { useLanguage } from '@/hooks/useLanguage';
import React from 'react';


const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            {t('about.title')}
          </h2>

          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-12"></div>

          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            {t('about.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-xl bg-accent/50 hover:shadow-card transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t('about.innovation.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('about.innovation.description')}
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-accent/50 hover:shadow-card transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t('about.custom.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('about.custom.description')}
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-accent/50 hover:shadow-card transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t('about.results.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('about.results.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;