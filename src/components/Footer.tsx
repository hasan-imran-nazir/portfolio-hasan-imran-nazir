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

const marqueeItems = [
  "/// Front-End Developer",
  "/// React & Next.js",
  "/// TypeScript & Tailwind CSS",
  "/// Responsive Interface Design",
  "/// Component-Based Development",
];

function MarqueeHalf() {
  return (
    <div className="flex shrink-0 items-center">
      {marqueeItems.map((item) => (
        <span key={item} className="mono-label px-5 text-sm whitespace-nowrap">
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-ink bg-surface">
      {/* Marquee strip */}
      <div className="overflow-hidden border-b-4 border-ink bg-lime py-3">
        <div className="animate-marquee">
          <MarqueeHalf />
          <MarqueeHalf />
        </div>
      </div>

      <div className="shell py-12">
        <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border-[3px] border-ink bg-cyan shadow-[3px_3px_0_0_#1b1b1b]">
                <span className="mono-label">HN</span>
              </span>
              <span className="h-card text-[15px]">Hasan Imran Nazir</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              A Computer Science and Engineering student passionate about
              building clean, responsive, and user-friendly web applications.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mono-label text-muted">{"//"} Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="mono-label text-[11px] transition-colors hover:text-pink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mono-label text-muted">{"//"} Elsewhere</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="icon-btn !h-10 !w-10"
                  >
                    <Icon size={16} style={{ color: social.color }} />
                  </a>
                );
              })}
              <a
                href="mailto:hasanimrannazir@gmail.com"
                aria-label="Email"
                className="icon-btn !h-10 !w-10"
              >
                <FiMail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t-4 border-ink pt-6 sm:flex-row sm:items-center">
          <p className="mono-label text-[11px] text-muted">
            © {currentYear} Hasan Imran Nazir // All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="mono-label text-[11px] text-muted">
              Build: neo-brutal // Status: online
            </span>
            <a
              href="#home"
              className="btn btn-sm"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
              Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
