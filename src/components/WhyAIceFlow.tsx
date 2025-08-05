import { useLanguage } from "@/hooks/useLanguage";
import React from "react";
import {
  SlidersHorizontal,
  Handshake,
  Bot,
  Globe,
  Eye,
  Zap,
  Target,
} from "lucide-react";

// --- Helper Components ---

const AdvantageCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}> = ({ icon, title, description, gradient }) => (
  <div className="group relative overflow-hidden bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-[1.03] border border-border">
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
    ></div>
    <div className="relative z-10">
      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 text-white group-hover:shadow-glow transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

const CommitmentCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-primary mb-4">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-blue-100 max-w-xs">{description}</p>
  </div>
);

// --- Main Component ---

const WhyAIceFlow: React.FC = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      key: "tailored",
      icon: <SlidersHorizontal className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600",
    },
    {
      key: "partnership",
      icon: <Handshake className="w-8 h-8" />,
      color: "from-green-500 to-blue-600",
    },
    {
      key: "synergy",
      icon: <Bot className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      key: "local",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
    },
  ];

  const commitments = [
    { key: "transparency", icon: <Eye className="w-6 h-6" /> },
    { key: "empowerment", icon: <Zap className="w-6 h-6" /> },
    { key: "value", icon: <Target className="w-6 h-6" /> },
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
            <AdvantageCard
              key={key}
              icon={icon}
              title={t(`why.${key}.title`)}
              description={t(`why.${key}.description`)}
              gradient={color}
            />
          ))}
        </div>

        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">{t("commitment.title")}</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              {t("commitment.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {commitments.map(({ key, icon }) => (
              <CommitmentCard
                key={key}
                icon={icon}
                title={t(`commitment.${key}.title`)}
                description={t(`commitment.${key}.description`)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAIceFlow;
