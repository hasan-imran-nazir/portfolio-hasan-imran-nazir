"use client";

import { motion } from "motion/react";
import { GraduationCap, Check, CalendarDays } from "lucide-react";
import SectionHeading from "./SectionHeading";

const educationData = [
  {
    degree: "BSc in Computer Science and Engineering (CSE)",
    institution: "Feni University",
    status: "Fourth Year · Seventh Semester",
    duration: "Currently pursuing",
    description:
      "Currently pursuing my Bachelor's degree in Computer Science and Engineering with a focus on web development and software engineering.",
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
            className="card card-lg overflow-hidden"
          >
            {/* Header strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-ink bg-lime px-4 py-3 sm:px-6">
              <span className="mono-label">{"// Education record"}</span>
              <span className="tag bg-surface">
                <CalendarDays size={13} />
                {edu.duration}
              </span>
            </div>

            <div className="flex flex-col gap-6 p-5 sm:p-7 lg:flex-row lg:items-start">
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center border-[3px] border-ink shadow-[4px_4px_0_0_#1b1b1b]"
                style={{ backgroundColor: "#F3E8FF", color: "#6D28D9" }}
              >
                <GraduationCap size={28} />
              </span>

              <div className="flex-1">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div>
                    <h3 className="h-card text-lg leading-snug sm:text-xl">
                      {edu.degree}
                    </h3>
                    <p className="mt-3 inline-block border-[3px] border-ink bg-cyan px-3 py-1.5 text-sm font-semibold">
                      {edu.institution}
                    </p>
                  </div>

                  <span className="tag shrink-0 self-start bg-lime sm:self-start">
                    <span className="h-2 w-2 animate-pulse bg-ink" />
                    {edu.status}
                  </span>
                </div>

                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted">
                  {edu.description}
                </p>

                <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
                  {edu.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 border-[3px] border-ink bg-surface px-3 py-2.5 text-sm shadow-[3px_3px_0_0_#1b1b1b]"
                    >
                      <Check size={15} strokeWidth={3} style={{ color: "#059669" }} />
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
