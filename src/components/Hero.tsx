"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

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
];

const phrases = [
  "React · Next.js · TypeScript · Tailwind CSS",
  "Building Responsive, Modern Interfaces",
  "Turning Ideas into Functional Web Apps",
];

const stats = [
  { label: "Primary focus", value: "Front-End Development" },
  { label: "Core stack", value: "React / Next.js" },
  { label: "Also building with", value: "TypeScript · Tailwind" },
  { label: "Academic", value: "4th Year" },
];

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
    <section id="home" className="shell pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left column — introduction */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/70 bg-surface/90 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald" />
            </span>
            <span className="mono-label text-[10px] text-muted">
              Front-End Developer · Open to opportunities
            </span>
          </div>

          <h1 className="h-hero mt-6">
            Turning ideas into{" "}
            <span className="gradient-text">meaningful web experiences.</span>
          </h1>

          {/* Typewriter line */}
          <div className="code-panel mt-6 max-w-xl px-4 py-3.5 sm:px-5">
            <div className="flex items-start gap-2 font-mono text-[13px] leading-relaxed sm:text-sm">
              <span className="shrink-0 select-none text-cyan">&gt;</span>
              <div className="min-w-0">
                <span className="font-medium text-white/70">i build with:</span>
                <span className="ml-1.5 wrap-break-word font-bold text-cyan">
                  {typed}
                </span>
                <span className="ml-0.5 inline-block h-3.5 w-2 translate-y-0.5 animate-pulse bg-cyan" />
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
            I enjoy the process of turning ideas into something people can
            actually use. From shaping intuitive interfaces to building
            responsive web applications, I&apos;m always exploring better ways
            to bring design and functionality together. React, Next.js, and
            TypeScript are my tools of choice, and every project is an
            opportunity to learn, experiment, and build something better.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={16} />
            </Link>

            <button type="button" className="btn btn-ghost" aria-label="Resume">
              <FileText size={16} />
              Download Resume
            </button>
          </div>

          {/* Social links */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="mono-label text-subtle">Connect //</span>
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

        {/* Right column — portrait card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
        >
          <div className="relative">
            {/* Soft gradient aura */}
            <div className="absolute -inset-2 rounded-4xl bg-linear-to-tr from-primary/25 via-cyan/20 to-rose-soft/40 opacity-75 blur-xl" />

            <div className="glass relative overflow-hidden rounded-4xl p-4 shadow-2xl">
              {/* Card header */}
              <div className="mb-3 flex items-center justify-between rounded-2xl border border-line/30 bg-white/60 px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-[11px] tracking-wider text-subtle">
                  HASAN_IMRAN.NAZIR
                </span>
              </div>

              {/* Portrait */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-linear-to-br from-ink via-[#1c2338] to-[#2b3350] shadow-inner">
                <Image
                  src="/Image.png"
                  alt="Hasan Imran Nazir"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 32vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-display text-lg font-bold text-white">
                      Hasan Imran Nazir
                    </p>
                    <p className="font-mono text-[11px] text-white/80">
                      Front-End Developer
                    </p>
                  </div>
                  <span className="tag border-white/25 bg-white/85 text-ink">
                    CSE · Feni Uni
                  </span>
                </div>
              </div>

              {/* Specification ribbon */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                <div className="rounded-xl border border-line/30 bg-white/70 px-3 py-2">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-subtle">
                    Discipline
                  </span>
                  <span className="mono-label text-[12px] text-primary">
                    Front-End Development
                  </span>
                </div>
                <div className="rounded-xl border border-line/30 bg-white/70 px-3 py-2">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-subtle">
                    Studying
                  </span>
                  <span className="mono-label text-[12px] text-ink">
                    CSE · 4th Year
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge 1 */}
            <div className="absolute -top-5 -left-4 hidden items-center gap-2.5 rounded-2xl border border-white/80 bg-white/85 px-3.5 py-2 shadow-lg backdrop-blur-md sm:flex">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="mono-label text-[11px] text-ink">
                React &amp; Next.js
              </span>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -right-4 -bottom-5 hidden items-center gap-2.5 rounded-2xl border border-white/80 bg-white/85 px-4 py-2.5 shadow-lg backdrop-blur-md sm:flex">
              <span className="mono-label text-[11px] text-secondary">
                TypeScript
              </span>
              <ArrowUpRight size={14} className="text-primary" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick facts */}
      <div className="mt-12 grid grid-cols-2 gap-4 border-t border-line/40 pt-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className="space-y-1">
            <p className="font-display text-xl font-extrabold text-ink sm:text-2xl">
              {index === 0 ? (
                <span className="gradient-text">{stat.value}</span>
              ) : (
                stat.value
              )}
            </p>
            <span className="mono-label text-[10px] text-subtle">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
