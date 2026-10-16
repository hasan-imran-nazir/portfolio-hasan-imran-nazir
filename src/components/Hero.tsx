"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/hasan-imran-nazir",
    icon: FiGithub,
    color: "#181717",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hasanimrannazir/",
    icon: FiLinkedin,
    color: "#0A66C2",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    icon: FiTwitter,
    color: "#1DA1F2",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: FiFacebook,
    color: "#1877F2",
  },
];

const phrases = [
  "React · Next.js · TypeScript · Tailwind CSS",
  "Responsive, component-based UI development",
  "Turning ideas into user-friendly web experiences",
];

const stats = [
  { label: "Department", value: "CSE" },
  { label: "Academic status", value: "4th Year · 7th Sem" },
  { label: "Professional focus", value: "Front-End" },
  { label: "Core stack", value: "React / Next.js" },
];

const statTints = ["bg-panel-2", "bg-lime", "bg-cyan", "bg-surface"];

export default function Hero() {
  const [typed, setTyped] = useState(phrases[0]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = phrases[phraseIndex];

      if (deleting) {
        charIndex -= 1;
        if (charIndex <= 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          charIndex = 0;
          setTyped("");
          timer = setTimeout(tick, 400);
          return;
        }
        setTyped(current.slice(0, charIndex));
        timer = setTimeout(tick, 22);
        return;
      }

      charIndex += 1;
      setTyped(current.slice(0, charIndex));
      if (charIndex >= current.length) {
        deleting = true;
        timer = setTimeout(tick, 2600);
        return;
      }
      timer = setTimeout(tick, 55);
    };

    timer = setTimeout(tick, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="shell pb-16 pt-8 lg:pb-24 lg:pt-12">
      <div className="card card-lg p-4 sm:p-5 lg:p-7">
        {/* Terminal title bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 border-2 border-ink bg-pink" />
            <span className="h-3.5 w-3.5 border-2 border-ink bg-lime" />
            <span className="h-3.5 w-3.5 border-2 border-ink bg-cyan" />
            <span className="mono-label ml-2 hidden text-muted sm:inline">
              bash ~ hasan-portfolio.sh
            </span>
          </div>
          <span className="tag bg-lime">
            <span className="h-2 w-2 animate-pulse bg-ink" />
            Sys status: online
          </span>
        </div>

        <div className="grid gap-8 pt-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pt-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="tag bg-cyan">{"// Front-End Developer"}</span>

            <h1 className="h-hero mt-5">
              Building clean, fast &amp; responsive web experiences.
            </h1>

            {/* Typewriter terminal output */}
            <div className="mt-6 border-4 border-ink bg-ink p-4 shadow-[8px_8px_0_0_#1b1b1b]">
              <div className="flex items-start gap-2 font-mono text-[13px] leading-relaxed sm:text-sm">
                <span className="shrink-0 select-none text-cyan">&gt;</span>
                <div className="min-w-0">
                  <span className="font-bold text-white">i build with:</span>
                  <span className="ml-1.5 font-bold break-words text-lime">
                    {typed}
                  </span>
                  <span className="ml-0.5 inline-block h-3.5 w-2 translate-y-0.5 animate-pulse bg-lime" />
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              I&apos;m Hasan Imran Nazir, a Computer Science and Engineering
              student at Feni University who enjoys turning ideas into
              responsive, accessible, and user-friendly interfaces with React
              and Next.js.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link href="#projects" className="btn btn-primary">
                View Projects
                <ArrowRight size={16} />
              </Link>

              <button type="button" className="btn btn-outline" aria-label="Resume">
                <FileText size={16} />
                Resume
              </button>
            </div>

            {/* Social links */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="mono-label text-muted">Connect //</span>
              <div className="flex flex-wrap gap-2.5">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="icon-btn"
                    >
                      <Icon size={17} style={{ color: social.color }} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Profile photo — transparent cutout on a brutalist colour block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-square overflow-hidden border-4 border-ink bg-lime shadow-[8px_8px_0_0_#1b1b1b]">
              <Image
                src="/Image.png"
                alt="Hasan Imran Nazir"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 32vw"
                className="object-contain object-bottom p-4"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 border-[3px] border-ink bg-surface px-4 py-3 shadow-[4px_4px_0_0_#1b1b1b]">
              <div className="min-w-0">
                <p className="h-card truncate text-sm">Hasan Imran Nazir</p>
                <p className="mono-label mt-1 text-[10px] text-muted">
                  Front-End Developer
                </p>
              </div>
              <span className="tag shrink-0 bg-pink-soft">CSE · Feni Uni</span>
            </div>
          </motion.div>
        </div>

        {/* Quick facts */}
        <div className="mt-8 grid grid-cols-2 gap-3 border-t-[3px] border-ink pt-5 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`border-[3px] border-ink p-3 shadow-[4px_4px_0_0_#1b1b1b] ${statTints[index]}`}
            >
              <span className="mono-label text-[10px] text-muted">
                {stat.label}
              </span>
              <p className="h-card mt-2 text-sm sm:text-base">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
