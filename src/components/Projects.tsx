"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

const INITIAL_COUNT = 4;

export function Projects() {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

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
          What I've been building.
        </motion.h2>
        <p className="max-w-sm text-sm text-foreground-muted">
          A mix of finished work and what's coming next.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent-strong hover:bg-surface-muted"
          >
            {expanded ? (
              <>Show less <ChevronUp className="h-4 w-4" /></>
            ) : (
              <>Show more <ChevronDown className="h-4 w-4" /></>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
