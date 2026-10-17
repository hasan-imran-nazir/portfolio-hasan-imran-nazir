"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

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
    <header className="sticky top-4 z-50 w-full px-3 sm:px-4">
      {/* Floating pill navigation */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-white/60 bg-surface/80 px-4 py-2.5 shadow-lg shadow-primary/5 backdrop-blur-xl sm:px-6">
        {/* Monogram + wordmark */}
        <Link
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-sm font-extrabold text-white shadow-md transition-colors duration-200 group-hover:bg-primary">
            H
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="mono-label text-[12px] text-ink">
              HASAN.DEV{" "}
              <span className="text-subtle">{"// Front-End"}</span>
            </span>
            <span className="mt-1 flex items-center gap-1.5 font-mono text-[10px] text-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
              Open to work
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigation.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mono-label rounded-full px-3 py-2 text-[11px] transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary-deep shadow-[inset_0_0_0_1px_rgba(79,70,229,0.25)]"
                    : "text-muted hover:bg-white/70 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Resume"
            className="btn btn-sm btn-ghost hidden lg:inline-flex"
          >
            <FileText size={14} />
            Resume
          </button>

          <Link href="#contact" className="btn btn-sm btn-primary hidden sm:inline-flex">
            Get in Touch
            <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="icon-btn lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="mx-auto mt-3 w-full max-w-6xl rounded-3xl border border-white/70 bg-surface/90 p-3 shadow-xl shadow-primary/10 backdrop-blur-xl lg:hidden">
          <nav
            className="flex flex-col gap-1.5"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`mono-label flex items-center justify-between rounded-2xl px-4 py-3 text-[12px] transition-colors ${
                  activeSection === item.href
                    ? "bg-primary/10 text-primary-deep"
                    : "text-muted hover:bg-white/70 hover:text-primary"
                }`}
              >
                {item.label}
                <span className="text-subtle">{"//"}</span>
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
