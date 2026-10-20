import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="page-section contact-section">
      <div><h2 className="section-title">Let’s talk.</h2><p>I’m open to backend, systems, and fullstack development roles, on-site or remote. Have something in mind? I’d love to hear about it.</p></div>
      <div className="contact-links">
        <a className="contact-email" href={`mailto:${site.email}`}>{site.email}<ArrowUpRight size={25} aria-hidden="true" /></a>
        <div><a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a><a href={site.socials.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </div>
    </section>
  );
}
