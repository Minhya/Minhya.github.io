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
    title: "Digital Library for Book Clubs",
    summary:
      "A shared library where book clubs can catalogue, review, and plan their next reads together.",
    description:
      "A full-stack app where members of a book club can build a shared digital library: add books, track who has which copy, rate and review titles, and vote on what to read next. The goal is to replace the scattered spreadsheets and chat messages that most clubs rely on.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "C#"],
    status: "planning",
  },
  {
    slug: "budget-app",
    title: "Personal Finance & Budgeting App",
    summary:
      "A clean, calm budgeting app focused on monthly planning and honest spending patterns.",
    description:
      "A budgeting tool that leans into clarity over gamification — set monthly envelopes, categorise transactions, and see where the month actually went. Designed to be pleasant to open every Sunday, not another app that guilts you.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "C#"],
    status: "planning",
  },
];
