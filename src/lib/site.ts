export const site = {
  name: "Anna Nguyen",
  shortName: "Anna",
  tagline: "Creative software developer and logical problem solver",
  url: "https://minhya.github.io",
  email: "anna.nguyen0221@gmail.com",
  location: "Sweden",
  bio: [
    "I'm a curious, creative developer who lights up around hard problems. I'm looking for a role in systems / backend development, on-site or remote.",
    "I work mainly in .NET, Java and Spring Boot with SQL and the web stack, and have hands-on experience with APIs, React, JavaScript, JUnit and Mockito.",
    "I'm also drawn to cloud services like AWS and to cybersecurity — fields where the puzzles stay interesting. Off the clock, I nerd out on tech and games.",
  ],
  socials: {
    github: "https://github.com/Minhya",
    linkedin: "https://www.linkedin.com/in/anna-nguyenn/",
  },
  skills: {
    languages: ["C#", "Java", "JavaScript", "TypeScript", "SQL"],
    frameworks: ["Spring Boot", ".NET", "React", "Next.js", "Tailwind CSS"],
    testing: ["JUnit", "Mockito"],
    interests: [ "Azure", "Amazon Web Services", "Cybersecurity", "APIs"],
  },
} as const;

export type Site = typeof site;
