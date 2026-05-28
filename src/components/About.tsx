"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

const groups: Array<{ label: string; items: readonly string[] }> = [
  { label: "Languages", items: site.skills.languages },
  { label: "Frameworks", items: site.skills.frameworks },
  { label: "Testing", items: site.skills.testing },
  { label: "Interests", items: site.skills.interests },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="font-mono text-sm text-accent-strong"
      >
        About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.05 }}
        className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl"
      >
        Curious by nature. Logical by training.
      </motion.h2>

      <div className="mt-10 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-foreground-muted">
          {site.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <div className="md:col-span-2 space-y-6">
          {groups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                {group.label}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
