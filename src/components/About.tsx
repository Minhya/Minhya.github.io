import { MapPin, Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const groups = [
  { label: "Languages", items: site.skills.languages },
  { label: "Frameworks", items: site.skills.frameworks },
  { label: "Testing", items: site.skills.testing },
  { label: "Exploring", items: site.skills.interests },
];

const education = [
  {
    programme: "Bachelor’s Programme in Human Resources, specialising in Work and Organisational Psychology",
    institution: "University West",
    start: "2017-08", end: "2020-06", dates: "08/2017 to 06/2020",
  },
  {
    programme: "Master’s Programme in Strategic Human Resource Management and Labour Relations",
    institution: "University of Gothenburg",
    start: "2021-08", end: "2023-06", dates: "08/2021 to 06/2023",
  },
  {
    programme: "Java Development",
    institution: "IT-Högskolan",
    start: "2024-08", end: "2026-06", dates: "08/2024 to 06/2026",
    placement: "LIA placement: Systems Developer at arena, 11/2025 to 06/2026.",
  },
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
      <div className="education-section">
        <h3 className="section-title">Education</h3>
        <ol className="education-timeline">
          {education.toReversed().map((entry) => (
            <li key={entry.start}>
              <div className="education-period">
                <span>{entry.dates}</span>
                {entry.institution ? <p>{entry.institution}</p> : null}
              </div>
              <div className="education-programme">
                <h4>{entry.programme}</h4>
                {entry.placement ? <p className="education-placement">{entry.placement}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
