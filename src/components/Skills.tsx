"use client";

import { motion } from "motion/react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiLinux,
} from "react-icons/si";
import { BiRocket } from "react-icons/bi";
import { MdOutlineDesignServices, MdOutlineHandyman } from "react-icons/md";
import { BsPeople, BsLightbulb } from "react-icons/bs";
import { ComponentType } from "react";
import SectionHeading from "./SectionHeading";

interface Skill {
  name: string;
  icon: ComponentType<{ size?: number | string; style?: React.CSSProperties }>;
  color: string;
}

interface SkillGroup {
  title: string;
  subtitle: string;
  tile: string;
  accent: string;
  skills: Skill[];
}

const coreStack = [
  { name: "React", icon: SiReact, color: "#0EA5E9" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    subtitle: "Interfaces & UI implementation",
    tile: "bg-primary/10 text-primary",
    accent: "text-primary",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E44D26" },
      { name: "CSS3", icon: SiCss, color: "#264DE4" },
      { name: "JavaScript", icon: SiJavascript, color: "#D4A607" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#0EA5E9" },
      { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Responsive Design", icon: MdOutlineDesignServices, color: "#6366F1" },
      { name: "Component Dev", icon: SiReact, color: "#0EA5E9" },
      { name: "UI Implementation", icon: MdOutlineDesignServices, color: "#8B5CF6" },
    ],
  },
  {
    title: "Backend & Database",
    subtitle: "Server-side fundamentals",
    tile: "bg-cyan-soft/70 text-secondary",
    accent: "text-secondary",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#323330" },
      { name: "MySQL", icon: SiMysql, color: "#00758F" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Tools & Platforms",
    subtitle: "Workflow & deployment",
    tile: "bg-rose-soft text-tertiary",
    accent: "text-tertiary",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Linux", icon: SiLinux, color: "#C99A0A" },
      { name: "Deployment", icon: BiRocket, color: "#2563EB" },
    ],
  },
  {
    title: "Other Skills",
    subtitle: "Collaboration & craft",
    tile: "bg-emerald-soft text-emerald",
    accent: "text-emerald",
    skills: [
      { name: "UI/UX Fundamentals", icon: MdOutlineDesignServices, color: "#EC4899" },
      { name: "Problem-Solving", icon: BsLightbulb, color: "#B45309" },
      { name: "Team Collaboration", icon: BsPeople, color: "#059669" },
      { name: "Dev Tools", icon: MdOutlineHandyman, color: "#475569" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="shell section">
      <SectionHeading
        index="02"
        eyebrow="Skills"
        title="Technologies and tools I work with."
        description="What I use today, and what I'm actively learning as I grow as a developer."
      />

      {/* Core stack highlight strip */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="mono-label text-subtle">Core stack //</span>
        {coreStack.map((skill) => {
          const Icon = skill.icon;
          return (
            <span
              key={skill.name}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2"
            >
              <Icon size={18} style={{ color: skill.color }} />
              <span className="mono-label text-[12px] text-ink">
                {skill.name}
              </span>
            </span>
          );
        })}
      </div>

      {/* Categorised skill cards */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="glass flex flex-col rounded-3xl p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className={`icon-tile h-11 w-11 ${group.tile}`}>
                  {(() => {
                    const First = group.skills[0].icon;
                    return <First size={20} style={{ color: "currentColor" }} />;
                  })()}
                </span>
                <div>
                  <h3 className="h-card text-base text-ink">{group.title}</h3>
                  <p className="mono-label mt-1 text-[11px] text-subtle">
                    {group.subtitle}
                  </p>
                </div>
              </div>
              <span className="tag">
                {String(group.skills.length).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="tag justify-start bg-white/80 py-2.5 text-[13px] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                    title={skill.name}
                  >
                    <Icon size={17} style={{ color: skill.color }} />
                    <span>{skill.name}</span>
                  </span>
                );
              })}
            </div>

            {/* Visual proportion bar */}
            <div className="mt-auto pt-5">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-panel">
                <div
                  className={`h-full rounded-full bg-gradient-to-r from-primary to-secondary-bright ${
                    index % 2 === 0 ? "w-[78%]" : "w-[52%]"
                  }`}
                />
              </div>
              <p className={`mono-label mt-2 text-[11px] ${group.accent}`}>
                {index % 2 === 0 ? "Primary daily toolkit" : "Supporting toolkit"}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="mt-6 text-sm leading-6 text-subtle">
        Skill list reflects my current learning and experience; I continue to
        improve through practice and projects.
      </p>
    </section>
  );
}
