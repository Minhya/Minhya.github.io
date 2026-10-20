import { MapPin, Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const groups = [
  { label: "Languages", items: site.skills.languages },
  { label: "Frameworks", items: site.skills.frameworks },
  { label: "Testing", items: site.skills.testing },
  { label: "Exploring", items: site.skills.interests },
];

export function About() {
  return (
    <section id="about" className="page-section biography">
      <h2 className="section-title">Biography</h2>
      <span className="hello-note">Hello there!</span>
      <p className="bio-lead">I’m Anna Nguyen, a software developer based in Sweden. I enjoy untangling a difficult problem, understanding what’s happening underneath, and building something useful from it.</p>
      <div className="bio-grid">
        <div className="bio-copy">
          <h3>A little more about me</h3>
          {site.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="personal-details">
            <span><MapPin size={17} aria-hidden="true" />{site.location}</span>
            <a href={`mailto:${site.email}`}><Mail size={17} aria-hidden="true" />{site.email}</a>
          </div>
          <a className="text-link" href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">Find me on LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="skills-list">
          <h3>What I work with</h3>
          <dl>{groups.map(({ label, items }) => (
            <div className="skill-row" key={label}><dt>{label}</dt><dd>{items.join(", ")}</dd></div>
          ))}</dl>
        </div>
      </div>
    </section>
  );
}
