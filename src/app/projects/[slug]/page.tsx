import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ArrowUpRight, Check } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { projects } from "@/data/projects";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((p) => p.slug === project.slug);
  const isLive = project.liveLink !== "#";
  const isRepo = project.githubLink !== "#";

  return (
    <div className="min-h-screen">
      <main className="shell py-10 sm:py-14">
        <Link href="/#projects" className="btn btn-sm">
          <ArrowLeft size={14} />
          Back to projects
        </Link>

        {/* Header */}
        <header className="card card-lg mt-8 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-ink bg-lime px-4 py-3 sm:px-6">
            <span className="mono-label">{"// Project detail"}</span>
            <span className="tag bg-surface">
              {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="p-5 sm:p-8">
            <span className="tag bg-cyan">Web development project</span>
            <h1 className="h-hero mt-4 text-[clamp(1.75rem,4.2vw,3.25rem)]">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              {isLive && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={16} />
                  Live Project
                </a>
              )}
              {isRepo && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FiGithub size={16} style={{ color: "#181717" }} />
                  View Code
                </a>
              )}
              {!isLive && !isRepo && (
                <span className="tag bg-pink-soft py-2.5">
                  Live &amp; repo links coming soon
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Cover image */}
        <div className="relative mt-8 aspect-[16/9] overflow-hidden border-4 border-ink bg-panel-2 shadow-[8px_8px_0_0_#1b1b1b]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 90vw"
            className="object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
          <div className="space-y-8">
            <section className="card p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b-[3px] border-ink pb-3">
                <h2 className="mono-label">{"//"} Main Technology Stack</h2>
                <span className="tag bg-lime">
                  {project.technologies.length} Techs
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag bg-panel-2 py-2">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="card p-5 sm:p-6">
              <div className="border-b-[3px] border-ink pb-3">
                <h2 className="mono-label">{"//"} Brief Description</h2>
              </div>
              <p className="mt-4 text-[15px] leading-7 text-muted">
                {project.description}
              </p>
            </section>

            <section className="card p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b-[3px] border-ink pb-3">
                <h2 className="mono-label">{"//"} Challenges Faced</h2>
                <span className="tag bg-pink-soft">
                  {String(project.challenges.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.challenges.map((challenge, i) => (
                  <li
                    key={challenge}
                    className="flex gap-3 border-[3px] border-ink bg-surface p-3.5 shadow-[4px_4px_0_0_#1b1b1b]"
                  >
                    <span className="mono-label shrink-0 text-pink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-6 text-muted">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="card p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b-[3px] border-ink pb-3">
                <h2 className="mono-label">
                  {"//"} Potential Improvements &amp; Future Plans
                </h2>
                <span className="tag bg-cyan">
                  {String(project.improvements.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.improvements.map((improvement) => (
                  <li
                    key={improvement}
                    className="flex gap-3 border-[3px] border-ink bg-surface p-3.5 shadow-[4px_4px_0_0_#1b1b1b]"
                  >
                    <Check
                      size={16}
                      strokeWidth={3}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />
                    <span className="text-sm leading-6 text-muted">
                      {improvement}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="card p-5">
              <div className="border-b-[3px] border-ink pb-3">
                <p className="mono-label">{"//"} Links</p>
              </div>
              <div className="mt-4 flex flex-col gap-2.5">
                <a
                  href={project.liveLink}
                  target={isLive ? "_blank" : undefined}
                  rel={isLive ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-between border-[3px] border-ink px-3.5 py-3 text-sm font-semibold shadow-[3px_3px_0_0_#1b1b1b] transition-colors ${
                    isLive
                      ? "bg-lime hover:bg-lime-strong"
                      : "cursor-not-allowed bg-panel-2 text-muted"
                  }`}
                >
                  Live Project
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href={project.githubLink}
                  target={isRepo ? "_blank" : undefined}
                  rel={isRepo ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-between border-[3px] border-ink px-3.5 py-3 text-sm font-semibold shadow-[3px_3px_0_0_#1b1b1b] transition-colors ${
                    isRepo
                      ? "bg-cyan hover:bg-cyan-soft"
                      : "cursor-not-allowed bg-panel-2 text-muted"
                  }`}
                >
                  GitHub Repository
                  <ArrowUpRight size={15} />
                </a>
              </div>

              {(!isLive || !isRepo) && (
                <p className="mt-4 text-xs leading-5 text-muted">
                  Links will be updated as they become available.
                </p>
              )}
            </div>

            <div className="card p-5">
              <div className="border-b-[3px] border-ink pb-3">
                <p className="mono-label">{"//"} Details</p>
              </div>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="mono-label text-[11px] text-muted">Type</dt>
                  <dd className="font-semibold">Front-End Project</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="mono-label text-[11px] text-muted">Status</dt>
                  <dd className="font-semibold">Personal Project</dd>
                </div>
              </dl>
            </div>

            <Link href="/#projects" className="btn btn-block">
              <ArrowLeft size={15} />
              All Projects
            </Link>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
