import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Hammer } from "lucide-react";
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

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <div className="mt-10 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/50 px-2.5 py-0.5 text-xs font-medium text-accent-ink">
          <Hammer className="h-3 w-3" />
          Coming soon
        </span>
      </div>

      <h1 className="mt-4 font-display text-5xl font-semibold leading-tight tracking-tight">
        {project.title}
      </h1>

      <p className="mt-6 text-xl leading-relaxed text-foreground-muted">
        {project.summary}
      </p>

      <div className="mt-10 border-t border-border pt-10">
        <h2 className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
          The idea
        </h2>
        <p className="mt-3 text-lg leading-relaxed">{project.description}</p>
      </div>

      <div className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
          Planned stack
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

      <div className="mt-14 rounded-2xl border border-border bg-surface-muted p-6 text-sm text-foreground-muted">
        This write-up is a placeholder — check back once the project is further
        along. In the meantime, feel free to{" "}
        <Link href="/#contact" className="text-accent-strong hover:underline">
          get in touch
        </Link>
        .
      </div>
    </article>
  );
}
