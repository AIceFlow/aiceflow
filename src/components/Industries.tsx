import { useLanguage } from "@/hooks/useLanguage";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Truck, 
  Megaphone, 
  ShoppingBag, 
  Building2, 
  Factory, 
  Stethoscope,
  ArrowRight 
} from "lucide-react";

const Industries: React.FC = () => {
  const { t } = useLanguage();
  const [activeKey, setActiveKey] = useState<string>("logistics");

  const industries = [
    { key: "logistics", icon: Truck },
    { key: "marketing", icon: Megaphone },
    { key: "sales", icon: ShoppingBag },
    { key: "operations", icon: Building2 },
    { key: "manufacturing", icon: Factory },
    { key: "healthcare", icon: Stethoscope },
  ];

  return (
    <section id="industries" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("industries.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("industries.description")}
          </p>
        </div>

        {/* Desktop: Horizontal Accordion - Clean & Readable */}
        <div className="hidden lg:flex h-[500px] gap-4 max-w-7xl mx-auto">
          {industries.map((ind) => {
            const isActive = activeKey === ind.key;
            return (
              <motion.div
                key={ind.key}
                layout
                initial={false}
                animate={{ 
                  flex: isActive ? 3 : 0.5,
                  backgroundColor: isActive ? "hsl(var(--card))" : "hsl(var(--background))"
                }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer shadow-card border transition-colors duration-300 ${isActive ? 'border-primary/20 shadow-elegant' : 'border-border hover:bg-card'}`}
                onClick={() => setActiveKey(ind.key)}
                onHoverStart={() => setActiveKey(ind.key)}
              >
                {/* Active Content */}
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute inset-0 p-10 flex flex-col justify-between"
                    >
                       <div>
                         <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <ind.icon size={32} />
                         </div>
                         <h3 className="text-3xl font-bold text-foreground mb-6">
                           {t(`industries.${ind.key}.name`)}
                         </h3>
                         <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                           {t(`industries.${ind.key}.description`)}
                         </p>
                       </div>
                       
                       <div className="flex items-center text-primary font-semibold group">
                          <span>See Use Cases</span>
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                       </div>
                    </motion.div>
                  ) : (
                    /* Collapsed Content */
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col items-center py-8"
                    >
                      <div className="text-muted-foreground mb-8">
                         <ind.icon size={28} />
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                         <h3 className="text-lg font-bold text-muted-foreground -rotate-90 whitespace-nowrap tracking-wide">
                            {t(`industries.${ind.key}.name`)}
                         </h3>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Simple Grid (Better than stacked cards for scanning) */}
        <div className="lg:hidden grid md:grid-cols-2 gap-4">
          {industries.map((ind) => (
            <div key={ind.key} className="bg-card rounded-xl p-6 shadow-sm border border-border">
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                    <ind.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t(`industries.${ind.key}.name`)}</h3>
                    <p className="text-muted-foreground text-sm">{t(`industries.${ind.key}.description`)}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
