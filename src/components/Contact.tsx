"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Send, ArrowUpRight, Copy, Check } from "lucide-react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { ComponentType } from "react";
import SectionHeading from "./SectionHeading";

interface IconProps {
  size?: number | string;
  style?: React.CSSProperties;
}

const EMAIL = "hin26@outlook.com";

const contactDetails: {
  label: string;
  value: string;
  href: string;
  icon: ComponentType<IconProps>;
  tile: string;
  external?: boolean;
}[] = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FiMail,
    tile: "bg-rose-soft text-tertiary",
  },
  {
    label: "Phone",
    value: "+880 1789-063974",
    href: "tel:+8801789063974",
    icon: FiPhone,
    tile: "bg-primary/10 text-primary",
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/8801789063974",
    icon: SiWhatsapp,
    tile: "bg-emerald-soft text-emerald",
    external: true,
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/hasan-imran-nazir",
    icon: FiGithub,
    color: "#181717",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hasanimrannazir/",
    icon: FiLinkedin,
    color: "#0A66C2",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailSubject = encodeURIComponent(
      subject.trim() || `Portfolio enquiry from ${name.trim() || "visitor"}`,
    );
    const mailBody = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`.trim(),
    );

    window.location.href = `mailto:${EMAIL}?subject=${mailSubject}&body=${mailBody}`;
    setNotice(true);
    setTimeout(() => setNotice(false), 6000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="shell section">
      <SectionHeading
        index="05"
        eyebrow="Contact"
        title="Let's work together."
        description="Reach out if you'd like to collaborate, discuss a project, or just say hello."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="glass rounded-3xl p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/40 pb-4">
            <span className="mono-label text-ink">{"// Dispatch message"}</span>
            <span className="tag bg-primary/10 text-primary">
              Opens your mail app
            </span>
          </div>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mono-label block text-[11px] text-muted"
                >
                  01 // Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="field mt-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mono-label block text-[11px] text-muted"
                >
                  02 // Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="field mt-2"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mono-label block text-[11px] text-muted"
              >
                03 // Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="field mt-2"
                placeholder="Subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mono-label block text-[11px] text-muted"
              >
                04 // Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="field mt-2"
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              <Send size={16} />
              Send Message
            </button>

            {notice && (
              <p className="mono-label rounded-2xl border border-primary/25 bg-primary/10 px-4 py-3 text-[11px] leading-relaxed text-primary-deep">
                {"// Opening your email app. If nothing happens, write to "}
                {EMAIL}
              </p>
            )}
          </form>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="flex flex-col gap-5"
        >
          {/* Copy email pill */}
          <div className="glass flex items-center justify-between gap-3 rounded-3xl px-5 py-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="icon-tile h-10 w-10 shrink-0 bg-primary/10 text-primary">
                <FiMail size={17} />
              </span>
              <div className="min-w-0">
                <p className="mono-label text-[11px] text-subtle">
                  Direct email
                </p>
                <p className="truncate text-base font-semibold text-ink select-all">
                  {EMAIL}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="icon-btn h-9 w-9 shrink-0"
            >
              {copied ? (
                <Check size={15} className="text-emerald" />
              ) : (
                <Copy size={15} />
              )}
            </button>
          </div>

          {contactDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <a
                key={detail.label}
                href={detail.href}
                target={detail.external ? "_blank" : undefined}
                rel={detail.external ? "noopener noreferrer" : undefined}
                className="glass glass-hover flex items-center gap-4 rounded-3xl p-4"
              >
                <span className={`icon-tile h-11 w-11 shrink-0 ${detail.tile}`}>
                  <Icon size={19} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="mono-label text-[11px] text-subtle">
                    {detail.label}
                  </p>
                  <p className="mt-1 truncate text-base font-semibold text-ink">
                    {detail.value}
                  </p>
                </div>
                <ArrowUpRight size={17} className="shrink-0 text-subtle" />
              </a>
            );
          })}

          <div className="glass rounded-3xl p-5">
            <div className="flex items-center justify-between gap-3 border-b border-line/40 pb-3">
              <span className="mono-label text-ink">{"// Social"}</span>
              <span className="tag">4 profiles</span>
            </div>
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
                    className="icon-btn"
                  >
                    <Icon size={17} style={{ color: social.color }} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
