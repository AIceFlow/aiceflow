import React from "react";
import dashboardMockup from "@/assets/showcase.png";
import { useLanguage } from "@/hooks/useLanguage";
import { motion, Variants } from "framer-motion";
import { Users, BarChart2, ShieldCheck, LucideProps } from "lucide-react";

const icons: { [key: string]: React.FC<LucideProps> } = {
  Users,
  BarChart2,
  ShieldCheck,
};

const FeatureListItem: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <li className="flex items-start text-muted-foreground">
    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
    {children}
  </li>
);

const ImpactCard: React.FC<{
  iconKey: string;
  title: string;
  description: string;
}> = ({ iconKey, title, description }) => {
  const IconComponent = icons[iconKey] || ShieldCheck;
  return (
    <div className="flex flex-col p-4 bg-accent/50 rounded-lg text-center md:text-left">
      <div className="flex justify-center md:justify-start items-center mb-3">
        <div className="bg-primary/10 p-2 rounded-full">
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>
        <h4 className="text-base sm:text-lg font-semibold text-foreground ml-3">
          {title}
        </h4>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default function Showcase() {
  const { t } = useLanguage();

  const overlayStats = [
    { key: "dashboard", color: "text-green-400" },
    { key: "monitoring", color: "text-blue-400" },
    { key: "architecture", color: "text-yellow-400" },
  ];

  const interactiveDots = [
    {
      key: "team",
      position: { top: "25%", left: "25%" },
      color: "bg-purple-500",
    },
    {
      key: "processes",
      position: { top: "33%", right: "33%" },
      color: "bg-green-500",
    },
    {
      key: "alerts",
      position: { bottom: "33%", left: "50%" },
      color: "bg-yellow-500",
    },
  ];

  const featureKeys = ["item1", "item2", "item3", "item4"];
  const impactKeys = ["unlock", "decisions", "resilience"];

  const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="showcase" className="py-20 sm:py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("showcase.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("showcase.description")}
          </p>
        </div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <div className="bg-card rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-elegant border border-border">
            <div className="relative group">
              <img
                src={dashboardMockup}
                alt={t("showcase.overlay.title")}
                className="w-full rounded-lg lg:rounded-xl shadow-card"
                width={1200}
                height={750}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg lg:rounded-xl flex items-end"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full p-4 sm:p-6 lg:p-8 text-white">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
                    {t("showcase.overlay.title")}
                  </h3>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                    {overlayStats.map((stat) => (
                      <div key={stat.key} className="text-center">
                        <div
                          className={`text-xs sm:text-sm lg:text-base opacity-80`}
                        >
                          {t(`showcase.stats.${stat.key}.label`)}
                        </div>
                        <div
                          className={`text-base sm:text-lg lg:text-2xl font-bold ${stat.color}`}
                        >
                          {t(`showcase.stats.${stat.key}.value`)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {interactiveDots.map((dot) => (
                <div
                  key={dot.key}
                  className="absolute hidden md:block"
                  style={{ ...dot.position }}
                >
                  <motion.div
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${dot.color} rounded-full shadow-glow`}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: Math.random() * 0.5,
                    }}
                  />
                  <div className="absolute bottom-full mb-2 w-max p-2 text-xs text-white bg-black/80 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {t(`showcase.dots.${dot.key}`)}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                  {t("showcase.features.title")}
                </h3>
                <ul className="space-y-3 text-base">
                  {featureKeys.map((key) => (
                    <FeatureListItem key={key}>
                      {t(`showcase.features.${key}`)}
                    </FeatureListItem>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                  {t("showcase.impact.title")}
                </h3>
                {impactKeys.map((key) => (
                  <ImpactCard
                    key={key}
                    iconKey={t(`showcase.impact.${key}.icon`)}
                    title={t(`showcase.impact.${key}.title`)}
                    description={t(`showcase.impact.${key}.description`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
