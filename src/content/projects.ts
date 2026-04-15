export type ProjectStatus = "planning" | "in-progress" | "live";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "bookclub-library",
    title: "Digital Library for My Book Club",
    summary:
      "A shared library where we can catalogue, review, and plan our next reads together. This is a project for my reading hobby that I share with friends.",
    description:
      "A full-stack app where members of this book club can build a shared digital library: add books, track who has which copy, and review titles, and vote on what to read next. The goal is to replace the scattered spreadsheets and chat messages that most clubs rely on.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "C#", "SQL"],
    status: "planning",
  },
  {
    slug: "budget-app",
    title: "Personal Finance & Budgeting App",
    summary:
      "A clean, calm budgeting app focused on monthly planning and honest spending patterns.",
    description:
      "A budgeting tool that leans into clarity — set monthly envelopes, categorise transactions, and see where the month actually went. Designed to be pleasant to open every Sunday, not another app that guilts you.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "C#", "SQL"],
    status: "planning",
  },
];
