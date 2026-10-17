"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiMail } from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/hasan-imran-nazir", icon: FiGithub, color: "#181717" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hasanimrannazir/", icon: FiLinkedin, color: "#0A66C2" },
  { label: "Twitter", href: "https://twitter.com/", icon: FiTwitter, color: "#1DA1F2" },
  { label: "Facebook", href: "https://facebook.com/", icon: FiFacebook, color: "#1877F2" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line/40 bg-surface/70 backdrop-blur-xl">
      <div className="shell py-12">
        <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-sm font-extrabold text-white shadow-md">
                H
              </span>
              <span className="flex flex-col leading-none">
                <span className="h-card text-[15px] text-ink">
                  Hasan Imran Nazir
                </span>
                <span className="mono-label mt-1.5 text-[10px] text-subtle">
                  {"// Front-End Developer"}
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[15px] leading-7 text-muted">
              A front-end developer building clean, responsive, and
              user-friendly web applications with React and Next.js.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="icon-btn h-10 w-10"
                  >
                    <Icon size={16} style={{ color: social.color }} />
                  </a>
                );
              })}
              <a
                href="mailto:hasanimrannazir@gmail.com"
                aria-label="Email"
                className="icon-btn h-10 w-10"
              >
                <FiMail size={16} />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer navigation">
            <p className="mono-label text-subtle">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="mono-label text-[11px] text-muted transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere */}
          <div>
            <p className="mono-label text-subtle">Elsewhere</p>
            <ul className="mt-4 grid gap-y-3">
              <li>
                <a
                  href="https://github.com/hasan-imran-nazir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-label text-[11px] text-muted transition-colors hover:text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hasanimrannazir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-label text-[11px] text-muted transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hasanimrannazir@gmail.com"
                  className="mono-label text-[11px] text-muted transition-colors hover:text-primary"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line/40 pt-6 sm:flex-row sm:items-center">
          <p className="mono-label text-[11px] text-subtle">
            © {currentYear} Hasan Imran Nazir · All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="mono-label hidden text-[11px] text-subtle sm:inline">
              Built with Next.js &amp; Tailwind CSS
            </span>
            <a href="#home" className="btn btn-sm btn-ghost" aria-label="Back to top">
              <ArrowUp size={14} />
              Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
