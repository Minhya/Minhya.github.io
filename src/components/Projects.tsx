"use client";

import { motion } from "framer-motion";
import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="font-mono text-sm text-accent-strong"
      >
        02 — Projects
      </motion.p>
      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          What I'm building next.
        </motion.h2>
        <p className="max-w-sm text-sm text-foreground-muted">
          Placeholders for projects currently on my desk — I'll be writing them up
          here as they come together.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
