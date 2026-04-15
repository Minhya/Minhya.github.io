"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft pink blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-accent/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[22rem] w-[22rem] rounded-full bg-surface-muted blur-3xl"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 pt-20 pb-28 sm:pt-28 sm:pb-36">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-accent-strong"
        >
          Hi, I'm {site.shortName} —
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Creative developer, <br />
          <span className="italic text-accent-strong">logical </span> problem
          solver.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl"
        >
          I'm drawn to the hard parts of software — knotty architecture,
          tangled bugs, the puzzles that reward both logic and a bit of
          creative thinking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            View projects
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent-strong"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
