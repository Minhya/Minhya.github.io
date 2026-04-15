"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Hammer } from "lucide-react";
import type { Project } from "@/content/projects";

const statusLabels: Record<Project["status"], string> = {
  planning: "Coming soon",
  "in-progress": "In progress",
  live: "Live",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-strong"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/50 px-2.5 py-0.5 text-xs font-medium text-accent-ink">
          <Hammer className="h-3 w-3" />
          {statusLabels[project.status]}
        </span>
        <ArrowUpRight className="h-4 w-4 text-foreground-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>

      <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight">
        <Link href={`/projects/${project.slug}/`} className="after:absolute after:inset-0">
          {project.title}
        </Link>
      </h3>

      <p className="text-sm leading-relaxed text-foreground-muted">
        {project.summary}
      </p>

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-2 py-0.5 font-mono text-xs text-foreground-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
