import { useLanguage } from "@/hooks/useLanguage";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Rocket, Headphones } from "lucide-react";

const TimelineItem = ({ 
  step, 
  title, 
  description, 
  icon: Icon, 
  index 
}: { 
  step: string, 
  title: string, 
  description: string, 
  icon: any, 
  index: number 
}) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center justify-between gap-8 md:gap-16 mb-24 last:mb-0 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content Side */}
      <div className={`flex-1 hidden md:block ${isEven ? 'text-right' : 'text-left'}`}>
        {isEven ? (
          <>
            <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </>
        ) : (
          <div className="text-9xl font-bold text-slate-100 opacity-50 select-none">{step}</div>
        )}
      </div>

      {/* Center Line Node */}
      <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow text-white">
        <Icon size={32} />
      </div>

      {/* Content Side (Right) / Number Side (Left) */}
      <div className={`flex-1 ${!isEven ? 'text-right md:text-left' : 'text-left'}`}>
        {!isEven ? (
          <div className="hidden md:block">
            <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        ) : (
          <div className="hidden md:block text-9xl font-bold text-slate-100 opacity-50 select-none">{step}</div>
        )}

        {/* Mobile Layout Fallback */}
        <div className="block md:hidden pl-4">
          <div className="text-4xl font-bold text-primary/20 mb-2">{step}</div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      step: "01",
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.description"),
      icon: Search,
    },
    {
      step: "02",
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.description"),
      icon: PenTool,
    },
    {
      step: "03",
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.description"),
      icon: Rocket,
    },
    {
      step: "04",
      title: t("howItWorks.step4.title"),
      description: t("howItWorks.step4.description"),
      icon: Headphones,
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-background relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("howItWorks.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("howItWorks.description")}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2"></div>
          
          {/* Active Vertical Line */}
          <motion.div 
            style={{ height }}
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary to-blue-400 -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <TimelineItem 
                key={index}
                index={index}
                {...step}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;