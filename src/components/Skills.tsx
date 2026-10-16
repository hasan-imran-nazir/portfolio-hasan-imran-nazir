"use client";

import { useState } from "react";
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
  tint: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    tint: "bg-lime",
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
    tint: "bg-cyan",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#323330" },
      { name: "MySQL", icon: SiMysql, color: "#00758F" },
    ],
  },
  {
    title: "Tools & Platforms",
    tint: "bg-pink-soft",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Linux", icon: SiLinux, color: "#C99A0A" },
      { name: "Deployment", icon: BiRocket, color: "#2563EB" },
    ],
  },
  {
    title: "Other Skills",
    tint: "bg-lime-strong",
    skills: [
      { name: "UI/UX Fundamentals", icon: MdOutlineDesignServices, color: "#EC4899" },
      { name: "Problem-Solving", icon: BsLightbulb, color: "#B45309" },
      { name: "Team Collaboration", icon: BsPeople, color: "#059669" },
      { name: "Dev Tools", icon: MdOutlineHandyman, color: "#475569" },
    ],
  },
];

const skillsJson = `{
  "name": "Hasan Imran Nazir",
  "role": "Front-End Developer",
  "focus": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  "backend": ["Node.js", "Express.js", "MySQL"],
  "tools": ["Git", "GitHub", "Linux", "Deployment"],
  "status": "4th Year · 7th Semester"
}`;

export default function Skills() {
  const [copied, setCopied] = useState(false);

  const copyJson = async () => {
    try {
      await navigator.clipboard.writeText(skillsJson);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="skills" className="shell section">
      <SectionHeading
        index="02"
        eyebrow="Skills"
        title="Technologies and tools I work with."
        description="What I use today, and what I'm actively learning as I grow as a developer."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="card flex flex-col"
          >
            <div
              className={`flex items-center justify-between gap-3 border-b-[3px] border-ink px-4 py-3 ${group.tint}`}
            >
              <span className="mono-label">{group.title}</span>
              <span className="tag bg-surface">
                {String(group.skills.length).padStart(2, "0")}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 p-4 sm:grid-cols-3">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="tag justify-start bg-panel-2 py-2.5 transition-colors hover:bg-lime"
                    title={skill.name}
                  >
                    <Icon size={15} style={{ color: skill.color }} />
                    <span className="truncate">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.article>
        ))}
      </div>

      {/* skills.json terminal */}
      <div className="mt-8 border-4 border-ink bg-ink p-4 shadow-[8px_8px_0_0_#1b1b1b] sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-neutral-700 pb-3">
          <span className="mono-label text-lime">
            hasan@portfolio:~$ cat skills.json
          </span>
          <button
            type="button"
            onClick={copyJson}
            className="mono-label border-2 border-neutral-600 bg-neutral-900 px-2.5 py-1 text-[10px] text-white transition-colors hover:border-lime hover:text-lime"
          >
            {copied ? "[ Copied ]" : "[ Copy JSON ]"}
          </button>
        </div>

        <pre className="mt-3 overflow-x-auto font-mono text-[12.5px] leading-relaxed whitespace-pre-wrap text-white sm:text-[13px]">
          <span className="text-cyan">{"{"}</span>
          {"\n  "}
          <span className="text-lime">&quot;name&quot;</span>:{" "}
          <span className="text-pink-soft">&quot;Hasan Imran Nazir&quot;</span>,
          {"\n  "}
          <span className="text-lime">&quot;role&quot;</span>:{" "}
          <span className="text-pink-soft">&quot;Front-End Developer&quot;</span>,
          {"\n  "}
          <span className="text-lime">&quot;focus&quot;</span>: [
          <span className="text-pink-soft">
            &quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;,
            &quot;Tailwind CSS&quot;
          </span>
          ],
          {"\n  "}
          <span className="text-lime">&quot;backend&quot;</span>: [
          <span className="text-pink-soft">
            &quot;Node.js&quot;, &quot;Express.js&quot;, &quot;MySQL&quot;
          </span>
          ],
          {"\n  "}
          <span className="text-lime">&quot;tools&quot;</span>: [
          <span className="text-pink-soft">
            &quot;Git&quot;, &quot;GitHub&quot;, &quot;Linux&quot;,
            &quot;Deployment&quot;
          </span>
          ],
          {"\n  "}
          <span className="text-lime">&quot;status&quot;</span>:{" "}
          <span className="text-pink-soft">
            &quot;4th Year · 7th Semester&quot;
          </span>
          {"\n"}
          <span className="text-cyan">{"}"}</span>
        </pre>
      </div>

      <p className="mt-5 text-xs text-muted">
        Skill list reflects my current learning and experience; I continue to
        improve through practice and projects.
      </p>
    </section>
  );
}
