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
        <Link href="/#projects" className="btn btn-sm btn-ghost">
          <ArrowLeft size={14} />
          Back to projects
        </Link>

        {/* Header */}
        <header className="glass mt-8 overflow-hidden rounded-3xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/40 bg-gradient-to-r from-primary/10 via-cyan-soft/40 to-transparent px-5 py-3.5 sm:px-7">
            <span className="mono-label text-primary-deep">
              {"// Project detail"}
            </span>
            <span className="tag bg-white/80">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <span className="tag border-primary/25 bg-primary/10 text-primary">
              Web development project
            </span>
            <h1 className="h-hero mt-4 text-ink [font-size:clamp(1.75rem,4.2vw,3.25rem)]">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
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
                  className="btn btn-ghost"
                >
                  <FiGithub size={16} style={{ color: "#181717" }} />
                  View Code
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Cover image */}
        <div className="glass relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
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
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">
          <div className="space-y-6">
            <section className="glass rounded-3xl p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3 border-b border-line/40 pb-4">
                <h2 className="mono-label text-ink">
                  {"//"} Main Technology Stack
                </h2>
                <span className="tag bg-primary/10 text-primary">
                  {project.technologies.length} Techs
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag bg-white/80 py-2">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="glass rounded-3xl p-6 sm:p-7">
              <div className="border-b border-line/40 pb-4">
                <h2 className="mono-label text-ink">{"//"} Brief Description</h2>
              </div>
              <p className="mt-4 text-base leading-8 text-muted">
                {project.description}
              </p>
            </section>

            <section className="glass rounded-3xl p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3 border-b border-line/40 pb-4">
                <h2 className="mono-label text-ink">{"//"} Challenges Faced</h2>
                <span className="tag bg-rose-soft text-tertiary">
                  {String(project.challenges.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.challenges.map((challenge, i) => (
                  <li
                    key={challenge}
                    className="panel flex gap-3 rounded-2xl p-4"
                  >
                    <span className="mono-label shrink-0 text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-7 text-muted">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass rounded-3xl p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3 border-b border-line/40 pb-4">
                <h2 className="mono-label text-ink">
                  {"//"} Potential Improvements &amp; Future Plans
                </h2>
                <span className="tag bg-cyan-soft text-secondary">
                  {String(project.improvements.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.improvements.map((improvement) => (
                  <li
                    key={improvement}
                    className="panel flex gap-3 rounded-2xl p-4"
                  >
                    <Check
                      size={16}
                      strokeWidth={3}
                      className="mt-0.5 shrink-0 text-emerald"
                    />
                    <span className="text-[15px] leading-7 text-muted">
                      {improvement}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="glass rounded-3xl p-6">
              <div className="border-b border-line/40 pb-4">
                <p className="mono-label text-ink">{"//"} Links</p>
              </div>
              {isLive || isRepo ? (
                <div className="mt-4 flex flex-col gap-3">
                  {isLive && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-primary to-primary-deep px-4 py-3 text-[15px] font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
                    >
                      Live Project
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                  {isRepo && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="panel flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-primary/40"
                    >
                      GitHub Repository
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              ) : (
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  The links for this project aren&apos;t public right now — feel
                  free to reach out if you&apos;d like a walkthrough.
                </p>
              )}

              {(isLive || isRepo) && (!isLive || !isRepo) && (
                <p className="mt-4 text-sm leading-6 text-subtle">
                  Missing links will be updated as they become available.
                </p>
              )}
            </div>

            <div className="glass rounded-3xl p-6">
              <div className="border-b border-line/40 pb-4">
                <p className="mono-label text-ink">{"//"} Details</p>
              </div>
              <dl className="mt-4 space-y-3 text-[15px]">
                <div className="flex items-center justify-between gap-4">
                  <dt className="mono-label text-[11px] text-subtle">Type</dt>
                  <dd className="font-semibold text-ink">Front-End Project</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="mono-label text-[11px] text-subtle">Status</dt>
                  <dd className="font-semibold text-ink">Personal Project</dd>
                </div>
              </dl>
            </div>

            <Link href="/#projects" className="btn btn-block btn-ghost">
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
