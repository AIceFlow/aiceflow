import { useLanguage } from "@/hooks/useLanguage";
import React from "react";
import { motion, Variants } from "framer-motion";
import { BrainCircuit, Briefcase, Users } from "lucide-react";
import felixStairs from "@/assets/felix-profile-stairs.jpeg";
import maikStairs from "@/assets/maik-profile-stairs.jpeg";
import teamStais from "@/assets/maik_felix-team-stairs.jpeg";

// --- Data Structure ---
// Defines the shape of founder data for cleaner code.
const getFoundersData = (t: (key: string) => string) => [
  {
    key: "ff",
    imageSrc: felixStairs,
    name: t("team.ff.name"),
    role: t("team.ff.role"),
    bio: t("team.ff.bio"),
    expertise: {
      business: {
        title: t("team.expertise.business"),
        items: [
          t("team.ff.expertise.business.item1"),
          t("team.ff.expertise.business.item2"),
          t("team.ff.expertise.business.item3"),
        ],
      },
      tech: {
        title: t("team.expertise.tech"),
        items: [
          t("team.ff.expertise.tech.item1"),
          t("team.ff.expertise.tech.item2"),
          t("team.ff.expertise.tech.item3"),
        ],
      },
    },
  },
  {
    key: "mp",
    imageSrc: maikStairs,
    name: t("team.mp.name"),
    role: t("team.mp.role"),
    bio: t("team.mp.bio"),
    expertise: {
      business: {
        title: t("team.expertise.business"),
        items: [
          t("team.mp.expertise.business.item1"),
          t("team.mp.expertise.business.item2"),
          t("team.mp.expertise.business.item3"),
        ],
      },
      tech: {
        title: t("team.expertise.tech"),
        items: [
          t("team.mp.expertise.tech.item1"),
          t("team.mp.expertise.tech.item2"),
          t("team.mp.expertise.tech.item3"),
        ],
      },
    },
  },
];

// --- Sub-Components for Readability ---
const ExpertiseColumn: React.FC<{
  title: string;
  skills: string[];
  icon: React.ReactNode;
}> = ({ title, skills, icon }) => (
  <div className="flex-1">
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
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("team.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("team.description")}
          </p>
        </div>

        {/* Our Philosophy Section */}
        <motion.div
          className="max-w-4xl mx-auto bg-card rounded-xl lg:rounded-2xl border border-border shadow-card p-8 md:p-12 mb-16"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 flex-shrink-0">
              <div className="w-48 h-48 lg:w-full lg:h-auto rounded-lg bg-muted overflow-hidden">
                {/* TODO: Add a photo of both of you together here */}
                <img
                  src={teamStais}
                  alt={t("team.philosophy.imageAlt")}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("team.philosophy.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("team.philosophy.description")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Founder Profiles Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.key}
              className="bg-card rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-card border border-border flex flex-col"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 mb-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-muted flex-shrink-0 overflow-hidden">
                  <img
                    src={founder.imageSrc}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {founder.name}
                  </h3>
                  <p className="text-primary font-semibold">{founder.role}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {founder.bio}
              </p>

              {/* Expertise */}
              <div className="border-t border-border pt-6 mt-auto">
                <div className="flex flex-col sm:flex-row gap-6 text-left">
                  <ExpertiseColumn
                    title={founder.expertise.business.title}
                    skills={founder.expertise.business.items}
                    icon={
                      <Briefcase className="w-5 h-5 text-muted-foreground" />
                    }
                  />
                  <ExpertiseColumn
                    title={founder.expertise.tech.title}
                    skills={founder.expertise.tech.items}
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
