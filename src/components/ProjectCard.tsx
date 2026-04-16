"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Code2, ExternalLink, Hammer, Users } from "lucide-react";
import type { Project } from "@/content/projects";

const statusConfig: Record<
  Project["status"],
  { label: string; icon: React.ElementType; className: string }
> = {
  planning: {
    label: "Coming soon",
    icon: Hammer,
    className: "bg-accent/50 text-accent-ink",
  },
  "in-progress": {
    label: "In progress",
    icon: Hammer,
    className: "bg-accent/50 text-accent-ink",
  },
  complete: {
    label: "Built",
    icon: CheckCircle2,
    className: "bg-foreground/10 text-foreground",
  },
  live: {
    label: "Live",
    icon: ExternalLink,
    className: "bg-foreground/10 text-foreground",
  },
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;
  const hasLinks = project.repoUrl || project.liveUrl;

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
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${status.className}`}>
            <StatusIcon className="h-3 w-3" />
            {status.label}
          </span>
          {project.collaboration && (
            <span className="inline-flex items-center gap-1 text-xs text-foreground-muted">
              <Users className="h-3 w-3" />
              Group project
            </span>
          )}
        </div>
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

      {hasLinks && (
        <div className="relative z-10 flex flex-wrap gap-2 border-t border-border pt-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-muted px-3 py-1 text-xs font-medium transition-colors hover:border-accent-strong"
            >
              <Code2 className="h-3 w-3" />
              View code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-muted px-3 py-1 text-xs font-medium transition-colors hover:border-accent-strong"
            >
              <ExternalLink className="h-3 w-3" />
              View live
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
