import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-stage">
        <h1 className="hero-name"><span>Anna</span><span>Nguyen</span></h1>
        <div className="identity-card" aria-label="AN, Anna Nguyen, software developer">
          <span className="identity-caption">A little logic. A lot of curiosity.</span>
          <span className="identity-initials" aria-hidden="true">an.</span>
          <div className="identity-footer"><span>Software developer</span><span>{site.location}</span></div>
        </div>
        <div className="hero-intro">
          <span className="hello-mark" aria-hidden="true">✳</span>
          <h2>Hi, I’m Anna.<br />I like a good problem.</h2>
          <p>I build software with .NET, Java, and a curious mind. Drawn to the backend, the tricky bugs, and figuring out how things fit together.</p>
          <a href="#projects" className="outline-link">Explore my work <ArrowLeft size={18} aria-hidden="true" /></a>
        </div>
        <a className="hero-scroll" href="#about"><ArrowDown size={16} aria-hidden="true" /> A little about me</a>
      </div>
      <a href="#contact" className="availability-rail"><span>Open to opportunities</span><ArrowUpRight size={27} aria-hidden="true" /></a>
    </section>
  );
}
