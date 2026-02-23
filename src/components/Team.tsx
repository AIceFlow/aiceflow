"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Cpu,
  GitBranch,
} from "lucide-react";
import felixPortrait from "@/assets/felix-profile-stairs.jpeg";
import heinerPortrait from "@/assets/portrait_bright.jpg";
import horizontalFullLogo from "@/assets/logo/horizontal-full.png";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  offscreen: { y: 24, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 110, damping: 22, duration: 0.5 },
  },
};

const parsePills = (raw: string): string[] =>
  raw
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);

const PillCloud = ({
  items,
  tone,
}: {
  items: string[];
  tone: "business" | "technical" | "shared";
}) => {
  const toneClasses =
    tone === "business"
      ? "border-amber-300/45 bg-amber-100/70 text-amber-900"
      : tone === "technical"
        ? "border-sky-300/45 bg-sky-100/70 text-sky-900"
        : "border-white/30 bg-white/10 text-slate-100";

  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide sm:px-3 sm:text-xs ${toneClasses}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

const DuoBrandPanel = ({ logoAlt, caption }: { logoAlt: string; caption: string }) => (
  <div className="relative flex h-full min-h-[230px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 sm:min-h-[300px] sm:p-8">
    <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-primary/25 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-14 -right-10 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />
    <div className="relative z-10 flex flex-col items-center">
      <img
        src={horizontalFullLogo as unknown as string}
        alt={logoAlt}
        className="w-full max-w-[260px] object-contain drop-shadow-[0_18px_36px_rgba(2,132,199,0.22)] sm:max-w-[320px]"
      />
      <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
        {caption}
      </p>
    </div>
  </div>
);

const FounderBlock = ({
  tone,
  icon,
  name,
  role,
  summary,
  softwareLabel,
  softwarePills,
  specialtyLabel,
  specialtyPills,
  points,
  imageSrc,
  imageAlt,
  imagePosition,
  imageFit,
}: {
  tone: "business" | "technical";
  icon: React.ReactNode;
  name: string;
  role: string;
  summary: string;
  softwareLabel: string;
  softwarePills: string[];
  specialtyLabel: string;
  specialtyPills: string[];
  points: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
}) => (
  <motion.article
    variants={itemVariants}
    className={`overflow-hidden rounded-[1.75rem] border bg-white/85 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)] backdrop-blur-sm ${
      tone === "business" ? "border-amber-300/50" : "border-sky-300/50"
    }`}
  >
    <div
      className={`h-1.5 w-full ${
        tone === "business"
          ? "bg-gradient-to-r from-amber-400 to-orange-500"
          : "bg-gradient-to-r from-sky-400 to-blue-500"
      }`}
    />

    <div className="relative h-56 bg-slate-100 sm:h-64">
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`h-full w-full ${imageFit === "contain" ? "object-contain" : "object-cover"}`}
        style={{ objectPosition: imagePosition ?? "50% 50%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
    </div>

    <div className="p-6 sm:p-8">
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`rounded-xl p-2 ${
            tone === "business"
              ? "bg-amber-500/15 text-amber-700"
              : "bg-sky-500/15 text-sky-700"
          }`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground sm:text-2xl">{name}</h3>
          <p className="text-xs font-semibold text-primary sm:text-sm">{role}</p>
        </div>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{summary}</p>

      <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-foreground/70">
        {softwareLabel}
      </p>
      <PillCloud items={softwarePills} tone={tone} />

      <p className="mb-2 mt-5 text-[11px] font-bold uppercase tracking-wide text-foreground/70">
        {specialtyLabel}
      </p>
      <PillCloud items={specialtyPills} tone={tone} />

      <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
        {points.map((point) => (
          <div key={point} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
            <p>{point}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.article>
);

const Team: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="relative overflow-hidden bg-secondary/30 py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-5">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {t("team.founders.title")}
          </h2>
          <div className="mx-auto mb-6 h-1.5 w-20 rounded-full bg-gradient-primary"></div>
          <p className="text-base text-muted-foreground sm:text-lg lg:text-xl">
            {t("team.founders.subtitle")}
          </p>
        </div>

        <motion.div
          className="mx-auto max-w-6xl"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="mb-10 grid gap-6 rounded-[1.75rem] border border-white/10 bg-slate-950 p-6 shadow-[0_28px_90px_-38px_rgba(15,23,42,0.9)] sm:gap-8 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:rounded-[2rem] lg:p-10"
          >
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                {t("team.shared.label")}
              </p>
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                {t("team.shared.title")}
              </h3>
              <p className="mb-6 text-slate-300">{t("team.shared.subtitle")}</p>
              <PillCloud items={parsePills(t("team.shared.pills"))} tone="shared" />
            </div>

            <DuoBrandPanel
              logoAlt={t("team.image.duo.logoAlt")}
              caption={t("team.image.duo.caption")}
            />
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            <FounderBlock
              tone="business"
              icon={<BriefcaseBusiness className="h-6 w-6" />}
              name={t("team.ff.name")}
              role={t("team.ff.role_short")}
              summary={t("team.ff.summary")}
              softwareLabel={t("team.ff.capabilityLabel")}
              softwarePills={parsePills(t("team.ff.software"))}
              specialtyLabel={t("team.ff.specialty.title")}
              specialtyPills={parsePills(t("team.ff.specialty.pills"))}
              points={parsePills(t("team.ff.points"))}
              imageSrc={felixPortrait as unknown as string}
              imageAlt={t("team.ff.name")}
            />

            <FounderBlock
              tone="technical"
              icon={<Cpu className="h-6 w-6" />}
              name={t("team.hdc.name")}
              role={t("team.hdc.role_short")}
              summary={t("team.hdc.summary")}
              softwareLabel={t("team.hdc.capabilityLabel")}
              softwarePills={parsePills(t("team.hdc.software"))}
              specialtyLabel={t("team.hdc.specialty.title")}
              specialtyPills={parsePills(t("team.hdc.specialty.pills"))}
              points={parsePills(t("team.hdc.points"))}
              imageSrc={heinerPortrait as unknown as string}
              imageAlt={t("team.hdc.name")}
              imagePosition="50% 8%"
              imageFit="contain"
            />
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border/60 bg-white/85 p-5 text-left shadow-card backdrop-blur-sm sm:flex-row sm:items-center sm:p-6"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <GitBranch className="h-5 w-5" />
              </div>
              <p className="max-w-3xl text-muted-foreground">{t("team.cta.caption")}</p>
            </div>
            <Button asChild size="lg" variant="default">
              <a href="#contact" aria-label={t("team.cta.aria")}>
                {t("team.cta.primary")}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
