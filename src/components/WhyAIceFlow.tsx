import { useLanguage } from "@/hooks/useLanguage";
import React from "react";
import {
  SlidersHorizontal,
  TrendingUp,
  Bot,
  Globe,
  Eye,
  Zap,
  Target,
} from "lucide-react";

const WhyCard = ({ 
  icon: Icon, 
  title, 
  description, 
}: { 
  icon: any, 
  title: string, 
  description: string, 
}) => (
  <div className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant transition-all duration-300">
    <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">
      {description}
    </p>
  </div>
);

const StandardItem = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => (
  <div className="flex flex-col items-center text-center p-6 md:p-8 relative">
    {/* Vertical Divider for Desktop (except last item) */}
    {index < 2 && (
      <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-border"></div>
    )}
    {/* Horizontal Divider for Mobile (except last item) */}
    {index < 2 && (
      <div className="md:hidden absolute bottom-0 left-10 right-10 h-px bg-border"></div>
    )}

    <div className="mb-6 p-4 rounded-full bg-secondary text-primary">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h4 className="text-xl font-bold text-foreground mb-3">{title}</h4>
    <p className="text-muted-foreground leading-relaxed max-w-xs">
      {description}
    </p>
  </div>
);

const WhyAIceFlow: React.FC = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      key: "tailored",
      icon: SlidersHorizontal,
    },
    {
      key: "partnership",
      icon: TrendingUp,
    },
    {
      key: "synergy",
      icon: Bot,
    },
    {
      key: "local",
      icon: Globe,
    },
  ];

  const commitments = [
    { key: "transparency", icon: Eye },
    { key: "empowerment", icon: Zap },
    { key: "value", icon: Target },
  ];

  return (
    <section id="why-aiceflow" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("why.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("why.description")}
          </p>
        </div>

        {/* Main Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-32 max-w-5xl mx-auto">
          {advantages.map((adv) => (
            <WhyCard 
              key={adv.key}
              icon={adv.icon}
              title={t(`why.${adv.key}.title`)}
              description={t(`why.${adv.key}.description`)}
            />
          ))}
        </div>

        {/* Standards Section - The Foundation */}
        <div className="relative">
           {/* Section Label */}
           <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background px-6 text-sm font-semibold text-primary tracking-wider uppercase">
              {t("commitment.title")}
           </div>
           
           {/* Main Container with top border */}
           <div className="border-t border-border pt-12">
              <div className="grid md:grid-cols-3 max-w-6xl mx-auto">
                 {commitments.map((c, i) => (
                   <StandardItem 
                     key={c.key}
                     index={i}
                     icon={c.icon}
                     title={t(`commitment.${c.key}.title`)}
                     description={t(`commitment.${c.key}.description`)}
                   />
                 ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default WhyAIceFlow;