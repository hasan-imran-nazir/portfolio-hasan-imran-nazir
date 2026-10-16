"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-surface">
      <div className="shell flex h-16 items-center justify-between gap-4">
        {/* Monogram + wordmark */}
        <Link
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center border-[3px] border-ink bg-lime shadow-[3px_3px_0_0_#1b1b1b]">
            <span className="mono-label">HN</span>
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="h-card text-[15px]">Hasan Imran Nazir</span>
            <span className="mono-label mt-1 text-[10px] text-muted">
              {"// Front-End"}
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navigation.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mono-label border-[3px] border-transparent px-2.5 py-2 transition-colors lg:px-3 ${
                  isActive
                    ? "bg-lime text-ink shadow-[3px_3px_0_0_#1b1b1b]"
                    : "text-ink hover:border-ink hover:bg-cyan"
                }`}
              >
                <span className="hidden text-muted lg:inline">{"// "}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden items-center gap-2 border-[3px] border-ink bg-lime px-3 py-1.5 shadow-[3px_3px_0_0_#1b1b1b] lg:inline-flex">
            <span className="h-2.5 w-2.5 animate-pulse bg-ink" />
            <span className="mono-label text-[10px]">Open to work</span>
          </span>

          <button
            type="button"
            aria-label="Resume"
            className="btn btn-sm hidden lg:inline-flex"
          >
            <FileText size={14} />
            Resume
          </button>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="icon-btn md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t-[3px] border-ink bg-surface md:hidden">
          <nav className="shell flex flex-col gap-2 py-4" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`mono-label border-[3px] border-ink px-3 py-3 ${
                  activeSection === item.href
                    ? "bg-lime shadow-[3px_3px_0_0_#1b1b1b]"
                    : "bg-surface"
                }`}
              >
                <span className="text-muted">{"// "}</span>
                {item.label}
              </Link>
            ))}

            <button
              type="button"
              aria-label="Resume"
              onClick={() => setMenuOpen(false)}
              className="btn btn-sm mt-2 w-full"
            >
              <FileText size={14} />
              Resume
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
