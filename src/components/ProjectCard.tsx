import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectThumbnail } from "./ProjectArtwork";

export const projectStatus = {
  planning: "Up next",
  "in-progress": "In progress",
  complete: "Completed",
  live: "Live",
} as const;

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}/`} className="project-art-link" aria-label={`Read about ${project.title}`}>
        <ProjectThumbnail slug={project.slug} />
        <span className="project-open" aria-hidden="true"><ArrowUpRight size={24} /></span>
      </Link>
      <div className="project-meta"><span className={`status-tag status-${project.status}`}>{projectStatus[project.status]}</span><span>{project.collaboration ? "Group project" : project.tags.slice(0, 2).join(" / ")}</span></div>
      <h3><Link href={`/projects/${project.slug}/`}>{project.title}</Link></h3>
      <p>{project.summary}</p>
    </article>
  );
}
