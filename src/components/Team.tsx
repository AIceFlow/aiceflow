"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { BrainCircuit, Briefcase, Users } from "lucide-react";
import felixStairs from "@/assets/felix-profile-stairs.jpeg";
import maikStairs from "@/assets/maik-profile-stairs.jpeg";
import teamStais from "@/assets/maik_felix-team-stairs.jpeg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type Founder = {
  key: "ff" | "mp";
  imageSrc: string;
  name: string;
  role: string;
  focuses: string[];
  points: string[];
};

const cardVariants: Variants = {
  offscreen: { y: 40, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 18, duration: 0.6 },
  },
};

const Team: React.FC = () => {
  const { t } = useLanguage();

  const founders: Founder[] = [
    {
      key: "ff",
      imageSrc: felixStairs as unknown as string,
      name: t("team.ff.name"),
      role: t("team.ff.role_short"),
      focuses: [t("team.ff.focus1"), t("team.ff.focus2"), t("team.ff.focus3")],
      points: [t("team.ff.point1"), t("team.ff.point2"), t("team.ff.point3")],
    },
    {
      key: "mp",
      imageSrc: maikStairs as unknown as string,
      name: t("team.mp.name"),
      role: t("team.mp.role_short"),
      focuses: [t("team.mp.focus1"), t("team.mp.focus2"), t("team.mp.focus3")],
      points: [t("team.mp.point1"), t("team.mp.point2"), t("team.mp.point3")],
    },
  ];

  return (
    <section id="team" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t("team.founders.title")}
          </h2>
          <p className="text-muted-foreground mt-3 text-lg md:text-xl">
            {t("team.founders.subtitle")}
          </p>
        </div>

        {/* Duo / How we work */}
        <motion.div
          className="max-w-5xl mx-auto bg-card rounded-xl lg:rounded-2xl border border-border shadow-card p-6 md:p-10 mb-12"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.25 }}
          variants={cardVariants}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 w-full">
              <div className="aspect-[4/3] rounded-lg bg-muted overflow-hidden">
                <img
                  src={teamStais as unknown as string}
                  alt={t("team.philosophy.imageAlt")}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3 w-full">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                {t("team.duo.title")}
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <Briefcase className="size-5 mt-1 shrink-0" />
                  <span>{t("team.duo.point1")}</span>
                </li>
                <li className="flex gap-2">
                  <BrainCircuit className="size-5 mt-1 shrink-0" />
                  <span>{t("team.duo.point2")}</span>
                </li>
                <li className="flex gap-2">
                  <Users className="size-5 mt-1 shrink-0" />
                  <span>{t("team.duo.point3")}</span>
                </li>
              </ul>

              <div className="mt-6">
                <Button
                  asChild
                  className="w-full sm:w-auto"
                  aria-label={t("team.cta.aria")}
                >
                  <a href="#contact">{t("team.cta.primary")}</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Founder cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.map((f, i) => (
            <motion.div
              key={f.key}
              className="bg-card rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-card border border-border"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="size-20 sm:size-24 rounded-full overflow-hidden bg-muted">
                  <img
                    src={f.imageSrc}
                    alt={f.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{f.name}</h3>
                  <p className="text-primary font-semibold">{f.role}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {f.focuses.map((label, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="rounded-full"
                      >
                        {label}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                {f.points.map((p, idx) => (
                  <li key={idx} className="pl-5 relative">
                    <span className="absolute left-0 top-2 size-1.5 rounded-full bg-primary/70" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
