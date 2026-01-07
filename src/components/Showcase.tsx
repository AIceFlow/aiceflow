import React, { useRef } from "react";
import dashboardMockup from "@/assets/showcase.png";
import { useLanguage } from "@/hooks/useLanguage";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Users, BarChart2, ShieldCheck, Zap } from "lucide-react";

// --- Components ---
const StatBadge = ({ label, value, color }: { label: string, value: string, color: string }) => (
  <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-3 flex flex-col items-center min-w-[100px]">
    <span className="text-xs text-white/70 uppercase tracking-wider mb-1">{label}</span>
    <span className={`text-xl font-bold ${color}`}>{value}</span>
  </div>
);

const FeatureItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function Showcase() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 3D Tilt Effect
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);
  
  // Smooth out the transform
  const smoothRotateX = useSpring(rotateX, { damping: 20, stiffness: 100 });
  const smoothScale = useSpring(scale, { damping: 20, stiffness: 100 });

  return (
    <section id="showcase" className="py-24 bg-secondary/30 relative overflow-hidden" ref={containerRef}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("showcase.title")}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("showcase.description")}
          </p>
        </div>

        {/* 3D Dashboard Container */}
        <div className="perspective-1000">
          <motion.div
            style={{ 
              rotateX: smoothRotateX,
              scale: smoothScale,
              opacity: opacity,
              transformStyle: "preserve-3d"
            }}
            className="relative max-w-6xl mx-auto bg-black rounded-xl border border-white/10 shadow-2xl overflow-hidden group"
          >
             {/* Browser Chrome (Optional decoration) */}
             <div className="h-12 bg-gray-900 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 px-3 py-1 bg-gray-800 rounded text-xs text-gray-400 font-mono">
                  aiceflow-platform.app
                </div>
             </div>

             {/* Main Image */}
             <div className="relative">
               <img
                 src={dashboardMockup}
                 alt="AIceFlow Dashboard"
                 className="w-full h-auto"
               />
               
               {/* Overlay Content (Visible on Hover/Always) */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 flex items-end justify-center pb-12">
                  <div className="grid grid-cols-3 gap-4 sm:gap-8">
                    <StatBadge 
                      label={t("showcase.stats.dashboard.label")} 
                      value={t("showcase.stats.dashboard.value")}
                      color="text-green-400"
                    />
                     <StatBadge 
                      label={t("showcase.stats.monitoring.label")} 
                      value={t("showcase.stats.monitoring.value")}
                      color="text-blue-400"
                    />
                     <StatBadge 
                      label={t("showcase.stats.architecture.label")} 
                      value={t("showcase.stats.architecture.value")}
                      color="text-yellow-400"
                    />
                  </div>
               </div>
             </div>
          </motion.div>
        </div>

        {/* Feature Grid below the dashboard */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureItem 
              icon={Zap}
              title={t("showcase.impact.unlock.title")}
              description={t("showcase.impact.unlock.description")}
            />
            <FeatureItem 
              icon={BarChart2}
              title={t("showcase.impact.decisions.title")}
              description={t("showcase.impact.decisions.description")}
            />
            <FeatureItem 
              icon={ShieldCheck}
              title={t("showcase.impact.resilience.title")}
              description={t("showcase.impact.resilience.description")}
            />
        </div>

      </div>
    </section>
  );
}