import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Sparkles, Mail, BrainCircuit, Database, BellRing } from "lucide-react";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

// --- Animated Background Grid ---
const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
    <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-blue-400/20 opacity-20 blur-[100px]"></div>
  </div>
);

// --- Floating Card Component ---
const FloatingCard = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  delay, 
  x, 
  y,
  colorClass = "bg-primary/10 text-primary"
}: { 
  icon: any, 
  title: string, 
  subtitle: string, 
  delay: number, 
  x: string, 
  y: string,
  colorClass?: string
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="absolute bg-card/90 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-lg flex items-center gap-3 w-56 z-10"
    style={{ 
      top: y, 
      left: x,
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07)"
    }}
  >
    <div className={`p-2 rounded-lg ${colorClass}`}>
      <Icon size={20} />
    </div>
    <div>
      <div className="font-semibold text-xs sm:text-sm text-foreground">{title}</div>
      <div className="text-[10px] sm:text-xs text-muted-foreground">{subtitle}</div>
    </div>
  </motion.div>
);

// --- Main Hero Component ---
const Hero = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  
  // Parallax for the entire right-side visual
  const yParallax = useTransform(scrollY, [0, 500], [0, 100]);

  const scrollToId = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      <BackgroundGrid />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles size={14} />
              <span>{t("hero.status.available")}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              {t("hero.title.line1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                {t("hero.title.line2")}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 h-14 rounded-full shadow-glow hover:shadow-glow/80 transition-all"
                onClick={() => scrollToId("contact")}
              >
                {t("hero.cta.primary")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 h-14 rounded-full border-2 hover:bg-secondary/50"
                onClick={() => scrollToId("showcase")}
              >
                {t("hero.cta.secondary")}
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>{t("hero.status.location")}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Abstract Visualization */}
          <div className="relative h-[600px] hidden lg:block perspective-1000">
             {/* Unified Parallax Container */}
             <motion.div style={{ y: yParallax }} className="relative w-full h-full">
               
               {/* Center Glow */}
               <motion.div 
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-primary rounded-full blur-[90px] opacity-30"
                 animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
                 transition={{ duration: 5, repeat: Infinity }}
               />

               {/* Connecting Curve (Static within the moving container) */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  {/* Define gradient for the line */}
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  
                  {/* The Path connects the centers of the cards approximately */}
                  {/* C1(10%, 10%) -> C2(60%, 30%) -> C3(15%, 60%) -> C4(55%, 85%) */}
                  {/* Converting roughly to pixels for a 500w x 600h box logic inside SVG viewBox 0 0 100 100 */}
                  <motion.path 
                    d="M 20 15 C 50 15, 50 35, 70 35 C 40 35, 40 65, 25 65 C 50 65, 50 90, 65 90" 
                    fill="none" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
               </svg>

               {/* Card 1: Trigger */}
               <FloatingCard 
                 icon={Mail} 
                 title={t("hero.flow.step1.title")} 
                 subtitle={t("hero.flow.step1.subtitle")} 
                 delay={0.2} 
                 x="5%" 
                 y="5%" 
                 colorClass="bg-blue-500/10 text-blue-500"
               />

               {/* Card 2: AI Logic */}
               <FloatingCard 
                 icon={BrainCircuit} 
                 title={t("hero.flow.step2.title")} 
                 subtitle={t("hero.flow.step2.subtitle")} 
                 delay={0.6} 
                 x="55%" 
                 y="30%" 
                 colorClass="bg-purple-500/10 text-purple-500"
               />

               {/* Card 3: Action */}
               <FloatingCard 
                 icon={Database} 
                 title={t("hero.flow.step3.title")} 
                 subtitle={t("hero.flow.step3.subtitle")} 
                 delay={1.0} 
                 x="10%" 
                 y="60%" 
                 colorClass="bg-orange-500/10 text-orange-500"
               />

               {/* Card 4: Result */}
               <FloatingCard 
                 icon={BellRing} 
                 title={t("hero.flow.step4.title")} 
                 subtitle={t("hero.flow.step4.subtitle")} 
                 delay={1.4} 
                 x="50%" 
                 y="85%" 
                 colorClass="bg-green-500/10 text-green-500"
               />

             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
