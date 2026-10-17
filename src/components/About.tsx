"use client";

import { motion } from "motion/react";
import {
  FiGithub,
  FiArrowUpRight,
  FiCode,
  FiHeart,
  FiBookOpen,
  FiTarget,
} from "react-icons/fi";
import { MdDesignServices, MdLightbulb } from "react-icons/md";
import { ComponentType } from "react";
import SectionHeading from "./SectionHeading";

interface IconProps {
  size?: number | string;
  style?: React.CSSProperties;
}

const highlights: {
  icon: ComponentType<IconProps>;
  label: string;
  sub: string;
  tile: string;
}[] = [
  {
    icon: FiTarget,
    label: "Front-End Developer",
    sub: "React · Next.js · TypeScript",
    tile: "bg-primary/10 text-primary",
  },
  {
    icon: FiCode,
    label: "Building & Learning",
    sub: "Practical projects, always improving",
    tile: "bg-cyan-soft/70 text-secondary",
  },
  {
    icon: FiHeart,
    label: "Full-Stack Growth",
    sub: "Expanding backend capabilities",
    tile: "bg-rose-soft text-tertiary",
  },
  {
    icon: FiBookOpen,
    label: "CSE at Feni University",
    sub: "4th Year · Bachelor's student",
    tile: "bg-emerald-soft text-emerald",
  },
];

const interests: {
  index: string;
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
  tile: string;
}[] = [
  {
    index: "01",
    icon: FiCode,
    title: "Front-End Development",
    description:
      "Building modern, responsive, maintainable interfaces that turn ideas into functional digital experiences.",
    tile: "bg-primary/10 text-primary",
  },
  {
    index: "02",
    icon: MdLightbulb,
    title: "Learning by Building",
    description:
      "Turning new concepts into practical projects and improving through experimentation with modern web technologies.",
    tile: "bg-cyan-soft/70 text-secondary",
  },
  {
    index: "03",
    icon: MdDesignServices,
    title: "Interface Design",
    description:
      "Exploring visual design and creating clean, user-friendly experiences that prioritize usability.",
    tile: "bg-rose-soft text-tertiary",
  },
];

export default function About() {
  return (
    <section id="about" className="shell section">
      <SectionHeading
        index="01"
        eyebrow="About Me"
        title="Curious by nature, building with purpose."
        description="A short introduction to who I am, what I focus on, and where I'm heading."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8"
      >
        {/* Highlights */}
        <div className="grid gap-4 self-start">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="glass glass-hover flex items-center gap-4 rounded-3xl px-5 py-6 transition-all duration-200"
              >
                <span className={`icon-tile h-12 w-12 shrink-0 ${item.tile}`}>
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="h-card text-sm leading-snug text-ink font-medium">
                    {item.label}
                  </p>
                  <p className="mono-label mt-1 text-[11px] text-subtle">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Story */}
        <div className="glass rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/40 pb-4">
            <span className="mono-label text-ink">{"// about.md"}</span>
            <span className="tag bg-primary/10 text-primary">Readme</span>
          </div>

          <div className="mt-6 space-y-5 text-base leading-8 text-muted">
            <p>
              I am a Computer Science and Engineering student at Feni University
              focused on front-end development and modern web technologies. I
              enjoy creating clean user interfaces, building interactive web
              applications, and bringing ideas to life through thoughtful design
              and code.
            </p>
            <p>
              I primarily work with React, Next.js, TypeScript, and Tailwind CSS
              to build responsive, user-friendly web experiences. Through
              academic projects and hands-on practice, I continue to strengthen
              my development skills, explore new technologies, and expand my
              knowledge of backend development with Node.js, Express, and
              databases.
            </p>
            <p>
              My goal is to grow as a developer by building practical projects,
              improving my problem-solving skills, and writing clean,
              maintainable code. I am working toward becoming a well-rounded
              software developer who can turn ideas into useful, reliable, and
              well-crafted applications.
            </p>
          </div>

          <a
            href="https://github.com/hasan-imran-nazir"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost mt-6"
          >
            <FiGithub size={16} style={{ color: "#181717" }} />
            Explore my GitHub
            <FiArrowUpRight size={15} />
          </a>
        </div>
      </motion.div>

      {/* Interests */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {interests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <motion.article
              key={interest.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass glass-hover flex flex-col rounded-3xl p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className={`icon-tile h-12 w-12 ${interest.tile}`}>
                  <Icon size={20} />
                </span>
                <span className="font-display text-sm font-extrabold text-line">
                  {interest.index}
                </span>
              </div>

              <h3 className="h-card mt-5 text-base text-ink">
                {interest.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-7 text-muted">
                {interest.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
