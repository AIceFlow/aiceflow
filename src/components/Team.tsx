import { useLanguage } from "@/hooks/useLanguage";
import React from "react";

const Team: React.FC = () => {
  const { t } = useLanguage();

  const founders = [
    {
      key: "ff",
      image: "FF",
      name: t("team.ff.name"),
      position: t("team.ff.position"),
      bio: t("team.ff.bio"),
      expertise: [
        t("team.ff.expertise.ml"),
        t("team.ff.expertise.automation"),
        t("team.ff.expertise.cv"),
        t("team.ff.expertise.optimization"),
      ],
    },
    {
      key: "mp",
      image: "MP",
      name: t("team.mp.name"),
      position: t("team.mp.position"),
      bio: t("team.mp.bio"),
      expertise: [
        t("team.mp.expertise.architecture"),
        t("team.mp.expertise.automation"),
        t("team.mp.expertise.integration"),
        t("team.mp.expertise.sap"),
      ],
    },
  ];

  return (
    <section id="team" className="py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("team.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("team.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.key}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 border border-border group"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:shadow-glow transition-all duration-300">
                  {founder.image}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-primary font-semibold">{founder.position}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                {founder.bio}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-center mb-4">
                  {t("team.expertiseTitle")}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {founder.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
