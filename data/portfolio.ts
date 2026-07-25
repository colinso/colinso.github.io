import type { PortfolioData } from "~/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Colin O'Brien",
  title: "Senior Backend Software Engineer",
  bio: "Senior Backend Software Engineer with 8+ years designing and scaling cloud-native, service-oriented platforms. I build resilient microservices in Go, Node.js, and C#, develop critical billing, authentication, and API platforms, and deploy containerized applications to Kubernetes and AWS ECS using Terraform.",
  email: "colinsobrien@proton.me",
  location: "Utah",
  links: {
    github: "https://github.com/colinso",
    linkedin: "https://linkedin.com/in/colin-009",
  },
  skills: [
    {
      name: "Go",
      category: "Languages",
    },
    {
      name: "Terraform",
      category: "Database & DevOps",
    },
    {
      name: "AWS",
      category: "Database & DevOps",
    },
    {
      name: "Docker",
      category: "Database & DevOps",
    },
    {
      name: "Kubernetes",
      category: "Database & DevOps",
    },
    {
      name: "Node.js",
      category: "Languages",
    },
    {
      name: "TypeScript",
      category: "Languages",
    },
    {
      name: "Kafka",
      category: "Database & DevOps",
    },
    {
      name: "Redis",
      category: "Database & DevOps",
    },
    {
      name: "PostgreSQL",
      category: "Database & DevOps",
    },
    {
      name: "GitLab CI",
      category: "Database & DevOps",
    },
    {
      name: "C#",
      category: "Languages",
    },
    {
      name: "React",
      category: "Frontend",
    },
  ],
  projects: [
    {
      id: "gamelog",
      title: "GameLog",
      description:
        "An application for tracking and logging gaming backlog and reviews",
      technologies: ["Svelte", "Go", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/colinso/gamelog",
      featured: true,
      status: "In Progress",
      startDate: "2025-01-01",
    },
    {
      id: "budget-app",
      title: "Budget App",
      description:
        "A self-hosted web-app for tracking my month-to-month budget",
      technologies: ["Svelete", "Go", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/colinso/budget-app",
      featured: true,
      status: "In Progress",
      startDate: "2025-01-01",
    },
    {
      id: "recipeasy",
      title: "Recipeasy",
      description: "Recipe management and meal planning application",
      technologies: ["TypeScript", "React", "Node.js"],
      githubUrl: "https://github.com/colinso/recipeasy",
      featured: false,
      status: "In Progress",
      startDate: "2024-01-01",
    },
    {
      id: "lego",
      title: "LeGo Microservice Builder",
      description:
        "Tool for configuring Go microservices with complete API to DB stack",
      technologies: ["Go"],
      githubUrl: "https://github.com/colinso/lego",
      featured: false,
      status: "Completed",
      startDate: "2023-01-01",
      endDate: "2023-03-01",
    },
    {
      id: "micro-skeleton",
      title: "Micro-Skeleton",
      description:
        "Go microservice skeleton with clean architecture and CI/CD patterns",
      longDescription:
        "A production-ready Go microservice template showcasing clean architecture patterns, testing strategies, and CI/CD pipeline integration.",
      technologies: ["Go", "Docker", "GitHub Actions"],
      githubUrl: "https://github.com/colinso/micro-skeleton",
      featured: true,
      status: "Completed",
      startDate: "2024-06-01",
      endDate: "2024-08-01",
    },
  ],
  workExperience: [
    {
      companyName: "SchoolAI",
      companyIcon: "schoolai.jpeg",
      jobTitle: "Senior Software Engineer II",
      dates: "Mar 2026 - Aug 2026",
    },
    {
      companyName: "AgentSync",
      companyIcon: "agentsync.jpeg",
      jobTitle: "Senior Software Engineer",
      dates: "Jul 2024 - Dec 2025",
    },
    {
      companyName: "Hudl",
      companyIcon: "hudl.jpeg",
      jobTitle: "Software Engineer II / Project Lead",
      dates: "Apr 2023 - Jul 2024",
    },
    {
      companyName: "Route",
      companyIcon: "route.jpeg",
      jobTitle: "Software Engineer I/II",
      dates: "Jul 2020 - Dec 2022",
    },
    {
      companyName: "Imagine Learning",
      companyIcon: "imaginelearning.jpeg",
      jobTitle: "Associate Software Engineer",
      dates: "Jan 2019 - Apr 2020",
    },
    {
      companyName: "Brigham Young University",
      companyIcon: "byu.jpeg",
      jobTitle: "Web Developer",
      dates: "Aug 2017 - Jan 2019",
    },
  ],
};
