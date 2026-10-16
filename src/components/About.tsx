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
  color: string;
  soft: string;
}[] = [
  { icon: FiBookOpen, label: "CSE at Feni University", sub: "4th Year · 7th Semester", color: "#7C3AED", soft: "#F3E8FF" },
  { icon: FiTarget, label: "Front-End Focus", sub: "React · Next.js · TypeScript", color: "#DC2626", soft: "#FEE2E2" },
  { icon: FiCode, label: "Building & Learning", sub: "Practical projects, always improving", color: "#0369A1", soft: "#E0F2FE" },
  { icon: FiHeart, label: "Full-Stack Growth", sub: "Expanding backend capabilities", color: "#DB2777", soft: "#FCE7F3" },
];

const interests: {
  index: string;
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
  color: string;
  soft: string;
  tint: string;
}[] = [
  {
    index: "01",
    icon: FiCode,
    title: "Front-End Development",
    description:
      "Building modern, responsive, maintainable interfaces that turn ideas into functional digital experiences.",
    color: "#0369A1",
    soft: "#E0F2FE",
    tint: "bg-cyan",
  },
  {
    index: "02",
    icon: MdLightbulb,
    title: "Learning by Building",
    description:
      "Turning new concepts into practical projects and improving through experimentation with modern web technologies.",
    color: "#B45309",
    soft: "#FEF3C7",
    tint: "bg-lime",
  },
  {
    index: "03",
    icon: MdDesignServices,
    title: "Interface Design",
    description:
      "Exploring visual design and creating clean, user-friendly experiences that prioritize usability.",
    color: "#DB2777",
    soft: "#FCE7F3",
    tint: "bg-pink-soft",
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
        className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10"
      >
        {/* Highlights */}
        <div className="grid gap-4 self-start">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="card card-sm card-hover flex items-center gap-4 p-4"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-ink shadow-[3px_3px_0_0_#1b1b1b]"
                  style={{ backgroundColor: item.soft, color: item.color }}
                >
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="h-card text-[13px] leading-snug">{item.label}</p>
                  <p className="mono-label mt-1.5 text-[10px] text-muted">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Story */}
        <div className="card p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink pb-3">
            <span className="mono-label">{"// about.txt"}</span>
            <span className="tag bg-lime">Readme</span>
          </div>

          <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted">
            <p>
              I&apos;m Hasan Imran Nazir, a Computer Science and Engineering
              student at Feni University in my fourth year, seventh semester. I
              have a strong interest in front-end development and software
              engineering.
            </p>
            <p>
              I enjoy building web applications, creating user interfaces, and
              turning ideas into clean, responsive, maintainable, and
              user-friendly digital experiences. I work with modern web
              technologies such as React, Next.js, TypeScript, and Tailwind
              CSS, improving my skills through academic and practical projects.
            </p>
            <p>
              My main interests include front-end development, modern web
              technologies, software engineering, interface design, and
              building practical web applications. Outside of programming, I
              enjoy sports and activities that help me stay active and
              balanced.
            </p>
            <p>
              My immediate goal is to grow as a front-end developer and become
              more confident in building practical web applications with modern
              JavaScript technologies, while gradually developing broader
              full-stack capabilities.
            </p>
          </div>

          <a
            href="https://github.com/hasan-imran-nazir"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline mt-6"
          >
            <FiGithub size={16} style={{ color: "#181717" }} />
            Explore my GitHub
            <FiArrowUpRight size={15} />
          </a>
        </div>
      </motion.div>

      {/* Interests */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {interests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <motion.article
              key={interest.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card card-hover flex flex-col p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center border-[3px] border-ink shadow-[3px_3px_0_0_#1b1b1b]"
                  style={{ backgroundColor: interest.soft, color: interest.color }}
                >
                  <Icon size={20} />
                </span>
                <span
                  className={`h-card flex h-9 w-9 items-center justify-center border-[3px] border-ink text-xs ${interest.tint}`}
                >
                  {interest.index}
                </span>
              </div>

              <h3 className="h-card mt-5 text-[15px]">{interest.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-muted">
                {interest.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
