"use client";

import { motion } from "motion/react";
import { GraduationCap, Check, CalendarDays } from "lucide-react";
import SectionHeading from "./SectionHeading";

const educationData = [
  {
    degree: "BSc in Computer Science and Engineering (CSE)",
    institution: "Feni University",
    status: "Currently pursuing · 4th Year",
    duration: "Bachelor of Science",
    description:
      "I'm in my 4th year of a Bachelor's degree in Computer Science and Engineering, with my real focus on web development. I use my studies in software engineering principles as a foundation for the front-end work I build.",
    highlights: [
      "Front-end development focus",
      "Modern web technologies",
      "Software engineering principles",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="shell section">
      <SectionHeading
        index="03"
        eyebrow="Education"
        title="Academic background."
        description="My studies in Computer Science and Engineering give me a strong foundation for development."
      />

      <div className="mt-10">
        {educationData.map((edu, index) => (
          <motion.article
            key={edu.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="glass overflow-hidden rounded-3xl"
          >
            {/* Header strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/40 bg-linear-to-r from-primary/10 via-cyan-soft/40 to-transparent px-5 py-3.5 sm:px-7">
              <span className="mono-label text-primary-deep">
                {"// Education record"}
              </span>
              <span className="tag bg-white/80">
                <CalendarDays size={13} />
                {edu.duration}
              </span>
            </div>

            <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-start">
              <span className="icon-tile h-14 w-14 shrink-0 bg-primary/10 text-primary">
                <GraduationCap size={28} />
              </span>

              <div className="flex-1">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div>
                    <h3 className="h-card text-xl leading-snug text-ink sm:text-2xl">
                      {edu.degree}
                    </h3>
                    <p className="mt-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-base font-semibold text-primary-deep">
                      {edu.institution}
                    </p>
                  </div>

                  <span className="tag shrink-0 self-start border-emerald/30 bg-emerald-soft text-emerald">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald" />
                    {edu.status}
                  </span>
                </div>

                <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
                  {edu.description}
                </p>

                <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                  {edu.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="panel flex items-center gap-2 rounded-2xl px-3.5 py-3 text-[15px] text-muted"
                    >
                      <Check
                        size={15}
                        strokeWidth={3}
                        className="shrink-0 text-emerald"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
