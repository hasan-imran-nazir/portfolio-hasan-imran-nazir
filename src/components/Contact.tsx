"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Send, ArrowUpRight, Mail } from "lucide-react";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
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

const contactDetails: {
  label: string;
  value: string;
  href: string;
  icon: ComponentType<IconProps>;
  color: string;
  soft: string;
  external?: boolean;
}[] = [
  {
    label: "Email",
    value: "hasanimrannazir@gmail.com",
    href: "mailto:hasanimrannazir@gmail.com",
    icon: FiMail,
    color: "#DC2626",
    soft: "#FDE8E8",
  },
  {
    label: "Phone",
    value: "+880 1234-567890",
    href: "tel:+8801234567890",
    icon: FiPhone,
    color: "#2563EB",
    soft: "#E7EEFD",
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/8801234567890",
    icon: SiWhatsapp,
    color: "#16A34A",
    soft: "#E6F8EE",
    external: true,
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/hasan-imran-nazir", icon: FiGithub, color: "#181717" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hasanimrannazir/", icon: FiLinkedin, color: "#0A66C2" },
  { label: "Twitter", href: "https://twitter.com/", icon: FiTwitter, color: "#1DA1F2" },
  { label: "Facebook", href: "https://facebook.com/", icon: FiFacebook, color: "#1877F2" },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailSubject = encodeURIComponent(
      subject.trim() || `Portfolio enquiry from ${name.trim() || "visitor"}`
    );
    const mailBody = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`.trim()
    );

    window.location.href = `mailto:hasanimrannazir@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    setNotice(true);
    setTimeout(() => setNotice(false), 6000);
  };

  return (
    <section id="contact" className="shell section">
      <SectionHeading
        index="05"
        eyebrow="Contact"
        title="Let's work together."
        description="Reach out if you'd like to collaborate, discuss a project, or just say hello."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="card card-lg p-5 sm:p-7"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink pb-3">
            <span className="mono-label">{"// Dispatch message"}</span>
            <span className="tag bg-lime">Opens your mail app</span>
          </div>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mono-label block text-[11px]">
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
                <label htmlFor="email" className="mono-label block text-[11px]">
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
              <label htmlFor="subject" className="mono-label block text-[11px]">
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
              <label htmlFor="message" className="mono-label block text-[11px]">
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
              <p className="mono-label border-[3px] border-ink bg-cyan px-3 py-2.5 text-[11px] leading-relaxed">
                {"// Opening your email app. If nothing happens, write to "}
                hasanimrannazir@gmail.com
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
          {contactDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <a
                key={detail.label}
                href={detail.href}
                target={detail.external ? "_blank" : undefined}
                rel={detail.external ? "noopener noreferrer" : undefined}
                className="card card-sm card-hover flex items-center gap-4 p-4"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-ink shadow-[3px_3px_0_0_#1b1b1b]"
                  style={{ backgroundColor: detail.soft, color: detail.color }}
                >
                  <Icon size={19} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="mono-label text-[10px] text-muted">
                    {detail.label}
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold">
                    {detail.value}
                  </p>
                </div>
                <ArrowUpRight size={17} className="shrink-0" />
              </a>
            );
          })}

          <div className="card p-4">
            <div className="flex items-center justify-between gap-3 border-b-[3px] border-ink pb-3">
              <span className="mono-label">{"// Social"}</span>
              <Mail size={15} />
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
