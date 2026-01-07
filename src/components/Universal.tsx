import { useLanguage } from "@/hooks/useLanguage";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  FileText, 
  Calendar, 
  Database, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  AlertCircle, 
  FileWarning 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ChaosElement = ({ 
  icon: Icon, 
  label, 
  isTamed, 
  index 
}: { 
  icon: any, 
  label: string, 
  isTamed: boolean, 
  index: number 
}) => {
  // Wilder random positions for chaos state
  const randomRotate = [45, -30, 60, -45, 15, -25, 40][index % 7];
  const randomX = [80, -120, 100, -90, 50, -60, 110][index % 7];
  const randomY = [-100, 80, -120, 110, -50, 40, -90][index % 7];

  return (
    <motion.div
      layout
      animate={{
        rotate: isTamed ? 0 : randomRotate,
        x: isTamed ? 0 : randomX,
        y: isTamed ? 0 : randomY,
        scale: isTamed ? 1 : 1.1,
        opacity: isTamed ? 1 : 0.8,
      }}
      transition={{ 
        type: "spring", 
        stiffness: isTamed ? 80 : 40, 
        damping: isTamed ? 15 : 10 
      }}
      className={`
        flex items-center gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-700
        ${isTamed 
          ? 'bg-white border-primary/20 shadow-primary/10 w-full min-w-[160px] md:min-w-[180px]' 
          : 'bg-white/90 border-red-300 shadow-red-500/20 absolute z-20'
        }
      `}
      style={{
         position: isTamed ? "relative" : "absolute",
         top: isTamed ? "auto" : "50%",
         left: isTamed ? "auto" : "50%",
         marginTop: isTamed ? 0 : -30,
         marginLeft: isTamed ? 0 : -80,
      }}
    >
      <div className={`p-2 rounded-lg ${isTamed ? 'bg-primary/10 text-primary' : 'bg-red-100 text-red-500'} transition-colors duration-500`}>
        <Icon size={20} />
      </div>
      <span className={`font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis ${isTamed ? 'text-foreground' : 'text-red-800'}`}>
        {label}
      </span>
      <AnimatePresence>
        {isTamed && (
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            className="ml-auto text-green-500 flex-shrink-0"
          >
            <Sparkles size={14} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Universal: React.FC = () => {
  const { t } = useLanguage();
  const [isTamed, setIsTamed] = useState(false);

  const elements = [
    { key: "email", icon: Mail },
    { key: "invoice", icon: FileText },
    { key: "meeting", icon: Calendar },
    { key: "data", icon: Database },
    { key: "urgent", icon: AlertCircle },
    { key: "delay", icon: Clock },
    { key: "error", icon: FileWarning },
  ];

  return (
    <section className="py-32 bg-secondary/30 overflow-hidden relative">
      <motion.div 
        animate={{ 
          backgroundColor: isTamed ? "rgba(34, 197, 94, 0.05)" : "rgba(239, 68, 68, 0.05)" 
        }}
        className="absolute inset-0 transition-colors duration-1000"
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left z-30">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t("universal.title")}
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t("universal.subtitle")}
            </p>
            
            <div className="relative inline-block group">
              {!isTamed && (
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:bg-primary/80 transition-colors"
                />
              )}
              
              <Button 
                size="lg" 
                className={`
                  relative text-xl px-12 h-16 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 active:scale-95
                  ${isTamed ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:bg-primary/90'}
                `}
                onClick={() => setIsTamed(!isTamed)}
              >
                {isTamed ? (
                  <span className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6" /> {t("universal.button.active")}
                  </span>
                ) : (
                  <span className="flex items-center gap-3">
                    {t("universal.button.idle")} <ArrowRight className="w-6 h-6" />
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Right: Animation Area */}
          <div className="lg:w-1/2 h-[500px] w-full relative flex items-center justify-center">
            <motion.div 
              animate={{ 
                scale: isTamed ? [1, 1.05, 1] : [1, 1.3, 1],
                opacity: isTamed ? 0.2 : 0.4
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className={`absolute inset-0 m-auto w-[400px] h-[400px] rounded-full blur-[100px] transition-colors duration-1000 ${isTamed ? 'bg-green-400' : 'bg-red-400'}`}
            />

            <div className={`
              relative w-full h-full flex items-center justify-center transition-all duration-1000
              ${isTamed ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-lg mx-auto content-center' : ''}
            `}>
              {elements.map((el, index) => (
                <ChaosElement 
                  key={el.key}
                  index={index}
                  isTamed={isTamed}
                  icon={el.icon}
                  label={t(`universal.floating.${el.key}`)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Universal;
