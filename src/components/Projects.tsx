import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

const order = ["note-app", "cosmigo", "bookclub-library", "vue-coffee-list", "budget-app", "blackpink-discography"];

export function Projects() {
  return (
    <section id="projects" className="page-section work-section">
      <div className="work-heading">
        <h2 className="section-title">Portfolio of projects</h2>
        <p>Things I’m building, things I’ve finished,<br className="hidden sm:block" /> and ideas I want to bring to life.</p>
      </div>
      <div className="project-grid">
        {order.map((slug) => {
          const project = projects.find((item) => item.slug === slug);
          return project ? <ProjectCard key={slug} project={project} /> : null;
        })}
      </div>
    </section>
  );
}
