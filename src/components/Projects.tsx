"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="shell section">
      <SectionHeading
        index="04"
        eyebrow="Projects"
        title="Featured work."
        description="A selection of projects that reflect how I build with modern web technologies."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const shortName = project.name.split("—")[0].trim();
          const isLive = project.liveLink !== "#";
          const isRepo = project.githubLink !== "#";

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass glass-hover group flex flex-col overflow-hidden rounded-3xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />

                <span className="absolute top-3 left-3 tag border-white/25 bg-white/85 text-ink">
                  {String(index + 1).padStart(2, "0")} {"//"} {shortName}
                </span>

                <span
                  className={`absolute right-3 bottom-3 tag ${
                    isLive
                      ? "border-emerald/30 bg-emerald-soft text-emerald"
                      : "border-white/25 bg-white/85 text-muted"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isLive ? "bg-emerald animate-pulse" : "bg-subtle"
                    }`}
                  />
                  {isLive ? "Live" : "Web app"}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="h-card text-lg leading-snug text-ink">
                  {project.name}
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-7 text-muted">
                  {project.shortDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tag bg-white/70">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tag border-primary/25 bg-primary/10 text-primary">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between gap-3 border-t border-line/40 bg-white/50 px-5 py-3.5 sm:px-6">
                <Link
                  href={`/projects/${project.slug}`}
                  className="btn btn-sm btn-primary"
                >
                  View Details
                  <ArrowRight size={14} />
                </Link>

                <div className="flex items-center gap-2">
                  {isLive && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live demo`}
                      className="icon-btn h-9 w-9"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                  {isRepo && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub repository`}
                      className="icon-btn h-9 w-9"
                    >
                      <FiGithub size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
