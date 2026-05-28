export type ProjectStatus = "planning" | "in-progress" | "complete" | "live";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  repoUrl?: string;
  liveUrl?: string;
  collaboration?: boolean;
};

export const projects: Project[] = [
  // ── Finished ──────────────────────────────────────────────────
  {
    slug: "cosmigo",
    title: "Cosmigo, Gamified Pomodoro",
    summary:
      "A fullstack productivity app that gamifies the Pomodoro technique. Features a timer, to-do list, rich-text notes, and a character that grows as you work.",
    description:
      "Group project built with a Vue 3 / PrimeVue frontend and a Node.js + Express backend, backed by MySQL and containerised with Docker. Users create accounts, run Pomodoro sessions, take notes in a rich-text editor, manage to-dos, and level up a personal character through XP earned by completing sessions. My contributions: I built the to-do list feature, contributed to the overall design of the application, and participated in building the backend.",
    tags: ["Vue 3", "Node.js", "Express", "MySQL", "Pinia", "PrimeVue", "Docker"],
    status: "complete",
    repoUrl: "https://github.com/JenDevs/cosmigo",
    collaboration: true,
  },
  {
    slug: "vue-coffee-list",
    title: "Vue Coffee List",
    summary:
      "A coffee drink manager built to explore Vue, log drinks by category, search and sort the list, with an admin mode for managing entries.",
    description:
      "A single-page app where you log in with a name, add coffees to your personal list (Espresso, Milk-based, Brew, Cold), search and sort the collection, and remove entries if you're an admin. Built with no external libraries — just Vue 3 and Vite — as a hands-on exercise in Vue fundamentals: computed properties, event handling, conditional rendering, and reactive state.",
    tags: ["Vue 3", "Vite", "JavaScript", "CSS"],
    status: "complete",
    repoUrl: "https://github.com/Minhya/vuecoffeelist",
  },
  {
    slug: "blackpink-discography",
    title: "BLACKPINK Discography Site",
    summary:
      "A fanmade discography website for BLACKPINK, built from scratch with plain HTML, CSS, and JavaScript.",
    description:
      "An artist website exercise built entirely without frameworks, structured HTML, hand-written CSS layouts, and vanilla JavaScript. Covers BLACKPINK's discography in a clean, browsable format. A focused demonstration of core web fundamentals before moving into framework-based work.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "complete",
    repoUrl: "https://github.com/Minhya/webbutv/tree/main/ovningar/artisthemsida",
  },

  // ── In progress / planned ─────────────────────────────────────
  {
    slug: "note-app",
    title: "glum, a shared app for writing notes and reminders",
    summary:
        "A shared note app, where we can keep up with our todos together. Need to add something to the grocery list that the other can see? Here you go.",
    description: "A fullstack app where members can share their reminders and notes together. Add notes, todos and set reminders for them.",
    tags: ["Next.js", "React Native", "Expo", "TypeScipt", "SQLite", "NativeWind"],
    status: "in-progress",
    repoUrl: "https://github.com/Minhya/glum",
  },
  {
    slug: "bookclub-library",
    title: "Digital Library for My Book Club",
    summary:
      "A shared library where we can catalogue, review, and plan our next reads together. This is a project for my reading hobby that I share with friends.",
    description:
      "A fullstack app where members of this book club can build a shared digital library: add books, track who has which copy, and review titles, and vote on what to read next. The goal is to replace the scattered spreadsheets and chat messages that most clubs rely on.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "C#", "SQL"],
    status: "planning",
  },
  {
    slug: "budget-app",
    title: "Personal Finance & Budgeting App",
    summary:
      "A clean, calm budgeting app focused on monthly planning and honest spending patterns.",
    description:
      "A budgeting tool that leans into clarity, set monthly envelopes, categorise transactions, and see where the month actually went. Designed to be pleasant to open every Sunday, not another app that guilts you.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "C#", "SQL"],
    status: "planning",
  },
];
