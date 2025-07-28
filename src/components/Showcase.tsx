import React from "react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import { useLanguage } from "@/hooks/useLanguage";

const Showcase: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="showcase" className="py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("showcase.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("showcase.description")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
            <div className="relative group">
              <img
                src={dashboardMockup}
                alt={t("showcase.overlay.title")}
                className="w-full rounded-xl shadow-card transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay with interactive elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    {t("showcase.overlay.title")}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">
                        {t("showcase.stats.automationRate.value")}
                      </div>
                      <div className="text-sm opacity-80">
                        {t("showcase.stats.automationRate.label")}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">
                        {t("showcase.stats.latency.value")}
                      </div>
                      <div className="text-sm opacity-80">
                        {t("showcase.stats.latency.label")}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">
                        {t("showcase.stats.savings.value")}
                      </div>
                      <div className="text-sm opacity-80">
                        {t("showcase.stats.savings.label")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive dots */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full shadow-glow animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-500 rounded-full shadow-glow animate-pulse animation-delay-200"></div>
              <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-yellow-500 rounded-full shadow-glow animate-pulse animation-delay-300"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t("showcase.features.title")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {t("showcase.features.item1")}
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {t("showcase.features.item2")}
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {t("showcase.features.item3")}
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {t("showcase.features.item4")}
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t("showcase.impact.title")}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="text-muted-foreground">
                      {t("showcase.impact.item1.label")}
                    </span>
                    <span className="font-semibold text-primary">
                      {t("showcase.impact.item1.value")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="text-muted-foreground">
                      {t("showcase.impact.item2.label")}
                    </span>
                    <span className="font-semibold text-green-600">
                      {t("showcase.impact.item2.value")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="text-muted-foreground">
                      {t("showcase.impact.item3.label")}
                    </span>
                    <span className="font-semibold text-primary">
                      {t("showcase.impact.item3.value")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
