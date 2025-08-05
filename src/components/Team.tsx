import { useLanguage } from "@/hooks/useLanguage";
import React from "react";
import { motion, Variants } from "framer-motion";
import { BrainCircuit, Briefcase } from "lucide-react";

// --- Data Structure ---
// It's often cleaner to define complex structures outside the component.
const getFoundersData = (t: (key: string) => string) => [
  {
    key: "ff",
    imageSrc: "/path-to-felix-funke.jpg", // TODO: Replace with actual image path
    name: t("team.ff.name"),
    position: t("team.ff.position"),
    bio: t("team.ff.bio"),
    expertise: {
      business: [
        t("team.ff.expertise.business.item1"),
        t("team.ff.expertise.business.item2"),
        t("team.ff.expertise.business.item3"),
      ],
      tech: [
        t("team.ff.expertise.tech.item1"),
        t("team.ff.expertise.tech.item2"),
        t("team.ff.expertise.tech.item3"),
      ],
    },
  },
  {
    key: "mp",
    imageSrc: "/path-to-michael-preiss.jpg", // TODO: Replace with actual image path
    name: t("team.mp.name"),
    position: t("team.mp.position"),
    bio: t("team.mp.bio"),
    expertise: {
      business: [
        t("team.mp.expertise.business.item1"),
        t("team.mp.expertise.business.item2"),
        t("team.mp.expertise.business.item3"),
      ],
      tech: [
        t("team.mp.expertise.tech.item1"),
        t("team.mp.expertise.tech.item2"),
        t("team.mp.expertise.tech.item3"),
      ],
    },
  },
];

// --- Sub-Components for Cleanliness ---
const ExpertiseColumn: React.FC<{
  title: string;
  skills: string[];
  icon: React.ReactNode;
}> = ({ title, skills, icon }) => (
  <div>
    <div className="flex items-center mb-3">
      {icon}
      <h4 className="font-semibold text-foreground ml-2">{title}</h4>
    </div>
    <div className="flex flex-col items-start gap-2">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// --- Main Component ---
const Team: React.FC = () => {
  const { t } = useLanguage();
  const founders = getFoundersData(t);

  const cardVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
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
    <section id="team" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("team.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("team.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.key}
              className="bg-card rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-card border border-border overflow-hidden"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 mb-6">
                <motion.div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-primary flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* TODO: Replace div with <img src={founder.imageSrc} ... /> */}
                  <div className="w-full h-full border-4 border-card rounded-full"></div>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {founder.name}
                  </h3>
                  <p className="text-primary font-semibold">
                    {founder.position}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {founder.bio}
              </p>

              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground text-center mb-4 text-lg">
                  {t("team.expertiseTitle")}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <ExpertiseColumn
                    title={t("team.ff.expertise.business.title")}
                    skills={founder.expertise.business}
                    icon={
                      <Briefcase className="w-5 h-5 text-muted-foreground" />
                    }
                  />
                  <ExpertiseColumn
                    title={t("team.ff.expertise.tech.title")}
                    skills={founder.expertise.tech}
                    icon={
                      <BrainCircuit className="w-5 h-5 text-muted-foreground" />
                    }
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
