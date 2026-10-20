"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { House, UserRound, BriefcaseBusiness, Mail, FileText } from "lucide-react";
import { site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const links = [
  { id: "home", label: "Home", Icon: House },
  { id: "about", label: "Biography", Icon: UserRound },
  { id: "projects", label: "Work", Icon: BriefcaseBusiness },
  { id: "resume", label: "Resumé", Icon: FileText },
  { id: "contact", label: "Contact", Icon: Mail },
];

export function Nav() {
  const [active, setActive] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });
    for (const { id } of links) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="sidebar">
      <Link href="/#home" className="wordmark" aria-label="Anna Nguyen, home">an<span>.</span></Link>
      <nav aria-label="Main navigation" className="side-nav">
        {links.map(({ id, label, Icon }) => (
          id === "resume" ? (
            <a key={id} href="/anna-nguyen-resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resumé (opens in a new tab)">
              <Icon size={18} strokeWidth={1.5} aria-hidden="true" /><span>{label}</span>
            </a>
          ) : <Link key={id} href={`/#${id}`} aria-current={pathname === "/" && active === id ? "location" : undefined}>
            <Icon size={18} strokeWidth={1.5} aria-hidden="true" /><span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="sidebar-theme"><span>Change the mood</span><ThemeToggle /></div>
        <div className="sidebar-socials">
          <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="Anna on GitHub"><GithubIcon width={19} height={19} /></a>
          <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Anna on LinkedIn"><LinkedinIcon width={17} height={17} /></a>
          <a href={`mailto:${site.email}`} aria-label="Email Anna"><Mail size={19} aria-hidden="true" /></a>
        </div>
      </div>
    </header>
  );
}
