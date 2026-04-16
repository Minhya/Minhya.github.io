import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Code2, ExternalLink, Hammer } from "lucide-react";
import type { Metadata } from "next";
import { projects } from "@/content/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

const statusConfig = {
  planning:    { label: "Coming soon", icon: Hammer },
  "in-progress": { label: "In progress", icon: Hammer },
  complete:    { label: "Built",        icon: CheckCircle2 },
  live:        { label: "Live",         icon: ExternalLink },
} as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const isComplete = project.status === "complete" || project.status === "live";
  const { label: statusLabel, icon: StatusIcon } = statusConfig[project.status];

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <div className="mt-10 flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/50 px-2.5 py-0.5 text-xs font-medium text-accent-ink">
          <StatusIcon className="h-3 w-3" />
          {statusLabel}
        </span>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium transition-colors hover:border-accent-strong"
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
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium transition-colors hover:border-accent-strong"
          >
            <ExternalLink className="h-3 w-3" />
            View live
          </a>
        )}
      </div>

      <h1 className="mt-4 font-display text-5xl font-semibold leading-tight tracking-tight">
        {project.title}
      </h1>

      <p className="mt-6 text-xl leading-relaxed text-foreground-muted">
        {project.summary}
      </p>

      <div className="mt-10 border-t border-border pt-10">
        <h2 className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
          {isComplete ? "What I built" : "The idea"}
        </h2>
        <p className="mt-3 text-lg leading-relaxed">{project.description}</p>
      </div>

      <div className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
          {isComplete ? "Stack used" : "Planned stack"}
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-surface px-3 py-1 text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {!isComplete && (
        <div className="mt-14 rounded-2xl border border-border bg-surface-muted p-6 text-sm text-foreground-muted">
          This write-up is a placeholder — check back once the project is further
          along. In the meantime, feel free to{" "}
          <Link href="/#contact" className="text-accent-strong hover:underline">
            get in touch
          </Link>
          .
        </div>
      )}
    </article>
  );
}
