import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Settings2, PlugZap, Handshake, MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";

// --- Helper Component: PillarCard (Unchanged) ---
const PillarCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="text-center h-full p-6 rounded-xl bg-card/50 shadow-card transition-shadow duration-300 border border-border">
    <div className="flex justify-center mb-3">{icon}</div>
    <h3 className="font-semibold text-lg text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

// --- Main Hero Component ---
const Hero = () => {
  const { t } = useLanguage();

  const pillars = [
    { key: "tailored", icon: <Settings2 className="w-8 h-8 text-primary" /> },
    { key: "integration", icon: <PlugZap className="w-8 h-8 text-primary" /> },
    {
      key: "partnership",
      icon: <Handshake className="w-8 h-8 text-primary" />,
    },
  ];

  // --- Reusable Helper Functions ---
  const scrollToId = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // --- Responsive Parallax & Animation Logic ---
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    // Check screen size on mount and on resize.
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Parallax transforms are only applied on large screens.
  const circle1x = useTransform(
    x,
    [-400, 400],
    isLargeScreen ? [20, -20] : [0, 0]
  );
  const circle1y = useTransform(
    y,
    [-400, 400],
    isLargeScreen ? [20, -20] : [0, 0]
  );
  const circle2x = useTransform(
    x,
    [-400, 400],
    isLargeScreen ? [-15, 15] : [0, 0]
  );
  const circle2y = useTransform(
    y,
    [-400, 400],
    isLargeScreen ? [-15, 15] : [0, 0]
  );

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isLargeScreen) {
      const { clientX, clientY } = event;
      x.set(clientX - window.innerWidth / 2);
      y.set(clientY - window.innerHeight / 2);
    }
  };

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const textContainerVariants: Variants = {
    hidden: {},
    // Slower stagger for a more graceful effect
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    // Gentler spring for a softer animation
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-hero-overlay"></div>

      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{ x: [-20, 20], y: [-20, 20] }}
        transition={{
          duration: 60,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <div
          className="h-full w-[calc(100%+40px)] -ml-[20px] -mt-[20px] w-[calc(100%+40px)]"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 49%, hsl(var(--primary) / 0.1) 50%, transparent 51%), linear-gradient(0deg, transparent 49%, hsl(var(--primary) / 0.1) 50%, transparent 51%)`,
            backgroundSize: "120px 120px",
          }}
        ></div>
      </motion.div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary/5 rounded-full"
          style={{ x: circle1x, y: circle1y }}
          animate={
            !isLargeScreen
              ? {
                  y: [0, -15, 0],
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }
              : {}
          }
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-primary/10 rounded-full"
          style={{ x: circle2x, y: circle2y }}
          animate={
            !isLargeScreen
              ? {
                  y: [0, 15, 0],
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }
              : {}
          }
        />
      </div>

      <motion.div
        className="container mx-auto px-4 py-24 sm:py-32 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            variants={textContainerVariants}
          >
            {t("hero.title.line1")
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            <span className="block text-transparent bg-clip-text bg-gradient-primary">
              {t("hero.title.line2")
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                variant="cta"
                size="lg"
                className="w-full text-base sm:text-lg px-8 py-4"
                onClick={() => scrollToId("contact")}
              >
                {t("hero.cta.primary")}
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full text-base sm:text-lg px-8 py-4 border-primary/20 text-foreground hover:bg-primary/5"
                onClick={() => scrollToId("showcase")}
              >
                {t("hero.cta.secondary")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {pillars.map(({ key, icon }) => (
              <motion.div
                key={key}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <PillarCard
                  icon={icon}
                  title={t(`hero.pillars.${key}.title`)}
                  description={t(`hero.pillars.${key}.description`)}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 p-6 sm:p-8 bg-card/30 rounded-2xl border border-border backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">{t("hero.status.available")}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border"></div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{t("hero.status.location")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
