"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { site } from "@/lib/site";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const links = [
  { href: `mailto:${site.email}`, label: site.email, Icon: Mail },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: site.socials.github, label: "GitHub", Icon: GithubIcon },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="font-mono text-sm text-accent-strong"
      >
        Contact
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.05 }}
        className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-6xl"
      >
        Let's talk.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.1 }}
        className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted"
      >
          Currently open to backend, systems, and fullstack development roles, on-site or remote. My inbox is open.
      </motion.p>

      <motion.ul
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.15 }}
        className="mt-10 flex flex-wrap gap-3"
      >
        {links.map(({ href, label, Icon }) => (
          <li key={href}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-accent-strong hover:bg-accent/30"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
