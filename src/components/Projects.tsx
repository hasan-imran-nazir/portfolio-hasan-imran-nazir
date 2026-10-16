"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

const tints = ["bg-lime", "bg-cyan", "bg-pink-soft"];

export default function Projects() {
  return (
    <section id="projects" className="shell section">
      <SectionHeading
        index="04"
        eyebrow="Projects"
        title="Featured work."
        description="A selection of projects that reflect how I build with modern web technologies."
      />

      <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
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
              className="card card-hover flex flex-col overflow-hidden"
            >
              {/* Title bar */}
              <div
                className={`flex items-center justify-between gap-3 border-b-[3px] border-ink px-4 py-3 ${tints[index % tints.length]}`}
              >
                <span className="mono-label truncate">
                  {`${String(index + 1).padStart(2, "0")} // ${shortName}`}
                </span>
                <span className="tag shrink-0 bg-surface">Web app</span>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden border-b-[3px] border-ink bg-panel-2">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />
                <span className="mono-label absolute bottom-2 left-2 border-2 border-white bg-ink px-2 py-1 text-[10px] text-lime">
                  {isLive ? "Live" : "Coming soon"}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="h-card text-[15px] leading-snug">
                  {project.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {project.shortDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tag bg-panel-2">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tag bg-lime">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between gap-3 border-t-[3px] border-ink bg-panel-2 px-4 py-3">
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
                      className="icon-btn !h-9 !w-9"
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
                      className="icon-btn !h-9 !w-9"
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
