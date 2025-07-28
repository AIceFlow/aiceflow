import { useLanguage } from "@/hooks/useLanguage";
import React from "react";

const WhyAIceFlow: React.FC = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      key: "customizable",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
          />
        </svg>
      ),
      color: "from-blue-500 to-purple-600",
    },
    {
      key: "localGlobal",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "from-green-500 to-blue-600",
    },
    {
      key: "resultsDriven",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      color: "from-purple-500 to-pink-600",
    },
    {
      key: "teamwork",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: "from-orange-500 to-red-600",
    },
  ];

  const stats = [
    { key: "projects", value: "50+" },
    { key: "satisfaction", value: "99%" },
    { key: "timeSavings", value: "80%" },
    { key: "roiTimeline", value: "3mo" },
  ];

  return (
    <section id="why-aiceflow" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("why.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("why.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {advantages.map(({ key, icon, color }) => (
            <div
              key={key}
              className="group relative overflow-hidden bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 border border-border"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 text-white group-hover:shadow-glow transition-all duration-300">
                  {icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {t(`why.${key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`why.${key}.description`)}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">{t("why.stats.title")}</h3>
            <p className="text-blue-100 text-lg">
              {t("why.stats.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map(({ key, value }) => (
              <div key={key} className="group">
                <div className="text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {value}
                </div>
                <div className="text-blue-100">
                  {t(`why.stats.${key}.label`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAIceFlow;
