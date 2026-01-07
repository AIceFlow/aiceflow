"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Rocket, 
  ShieldCheck, 
  HeartHandshake, 
  Linkedin, 
  Mail 
} from "lucide-react";
import felixStairs from "@/assets/felix-profile-stairs.jpeg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const containerVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 },
  },
};

const Team: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Rocket className="w-6 h-6" />,
      text: t("team.duo.point1"),
      title: "Invisible Engine" // Hardcoded title or add to translations if critical
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      text: t("team.duo.point2"),
      title: "Stability First"
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      text: t("team.duo.point3"),
      title: "Long-term Partner"
    },
  ];

  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t("team.founders.title")}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground">
            {t("team.founders.subtitle")}
          </p>
        </div>

        <motion.div 
          className="max-w-6xl mx-auto"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Founder Profile - Main Feature */}
          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-3xl overflow-hidden shadow-elegant border border-border/50 mb-16"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image Side */}
              <div className="lg:w-2/5 relative min-h-[400px]">
                <img
                  src={felixStairs as unknown as string}
                  alt={t("team.ff.name")}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60"></div>
                <div className="absolute bottom-6 left-6 text-white lg:hidden">
                  <h3 className="text-3xl font-bold">{t("team.ff.name")}</h3>
                  <p className="opacity-90">{t("team.ff.role_short")}</p>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="hidden lg:block mb-6">
                  <h3 className="text-4xl font-bold text-foreground mb-2">{t("team.ff.name")}</h3>
                  <p className="text-xl text-primary font-medium">{t("team.ff.role_short")}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[t("team.ff.focus1"), t("team.ff.focus2"), t("team.ff.focus3")].map((focus, i) => (
                    <Badge key={i} variant="secondary" className="px-3 py-1 text-sm bg-accent text-accent-foreground border-accent-foreground/10">
                      {focus}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-4 text-muted-foreground text-lg mb-8 leading-relaxed">
                  <p>{t("team.ff.point1")}</p>
                  <p>{t("team.ff.point2")}</p>
                  <p>{t("team.ff.point3")}</p>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" onClick={() => window.location.href = 'mailto:hello@aiceflow.de'}>
                    <Mail className="w-5 h-5" />
                  </Button>
                  <Button asChild className="ml-auto" variant="default">
                    <a href="#contact">{t("team.cta.primary")}</a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-card p-8 rounded-2xl shadow-card border border-border hover:shadow-elegant transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold mb-3 text-foreground">{val.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {val.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
