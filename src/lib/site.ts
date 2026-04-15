export const site = {
  name: "Anna Nguyen",
  shortName: "Anna",
  tagline: "Software developer with an MSc in Strategic HRM",
  url: "https://minhya.github.io",
  email: "anna.nguyen0221@gmail.com",
  location: "Sweden",
  bio: [
    "With a master's degree in Strategic HRM, I bring clear communication and structure into my code. I'm looking for a role in systems / backend development — on-site or remote.",
    "I work mainly in C#, Java and Spring Boot with databases (SQL among others) and the web stack, and have hands-on experience with APIs, React, JavaScript, JUnit and Mockito.",
    "I'm also drawn to cloud services like AWS and to cybersecurity. Off the clock I nerd out on tech and games.",
  ],
  socials: {
    github: "https://github.com/Minhya",
    linkedin: "https://www.linkedin.com/in/anna-nguyenn/",
  },
  resumeUrl: "/resume.pdf",
  skills: {
    languages: ["C#", "Java", "JavaScript", "TypeScript", "SQL"],
    frameworks: ["Spring Boot", ".NET", "React", "Next.js", "Tailwind CSS"],
    testing: ["JUnit", "Mockito"],
    interests: ["AWS", "Cloud", "Cybersecurity", "APIs"],
  },
} as const;

export type Site = typeof site;
