export const profile = {
  name: "Kumail Raza",
  role: "Senior Software Engineer",
  focus: "Full Stack & AI Engineering",
  tagline:
    "I build fast, reliable software and AI products that turn complex business problems into clean, elegant solutions.",
  location: "Karachi, Pakistan",
  availability: "Open to remote roles in the US, UK, Europe, and Canada",
  yearsExperience: "7+",
  email: "kumailrawjani900@gmail.com",
  links: {
    github: "https://github.com/Kumail786",
    linkedin: "https://www.linkedin.com/in/kumail-raza-rawjani",
    upwork: "https://www.upwork.com/freelancers/~012b45aacc304f0892",
  },
};

export const stats = [
  { value: "7+", label: "Years building software" },
  { value: "5", label: "Companies across US & PK" },
  { value: "15+", label: "Products shipped" },
  { value: "AI", label: "Agentic systems on AWS" },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "WebSockets"],
  },
  {
    title: "AI / LLM",
    items: ["AWS Bedrock (Claude)", "LangGraph", "AG2 / AutoGen", "Pydantic AI", "RAG", "Agentic systems"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (CDK, ECS, RDS)", "Cognito / OIDC", "Docker", "Kubernetes", "GCP", "CI/CD"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "Drizzle ORM", "SQLModel", "Redis", "Migrations", "Multi tenancy"],
  },
  {
    title: "Practices",
    items: ["System Design", "Microservices", "IaC", "Observability", "Testing", "Clean Architecture"],
  },
];

export const marqueeSkills = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "FastAPI", "AWS", "Bedrock",
  "LangGraph", "PostgreSQL", "Docker", "Kubernetes", "Tailwind", "Turborepo", "AG2 / AutoGen", "GCP",
];

export type Job = {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  points: string[];
  current?: boolean;
};

export const experience: Job[] = [
  {
    role: "Senior Software Engineer",
    company: "Expedey",
    type: "Full time",
    period: "Jan 2023 – Present",
    location: "Karachi, Pakistan",
    current: true,
    points: [
      "Design and ship scalable SaaS platforms and AI products end to end, covering solution architecture, system design, development, testing, and deployment.",
      "Build agentic AI systems on AWS Bedrock (Claude) with LangGraph and AG2/AutoGen, including orchestration, streaming, tool calling, and RAG grounded in client data.",
      "Own cloud infrastructure with AWS CDK across multiple accounts (ECS Fargate, RDS, Cognito, S3) and enterprise auth with single sign on across multiple providers.",
      "Partner directly with clients to translate business goals into reliable, maintainable systems that create measurable value.",
    ],
  },
  {
    role: "Software Developer",
    company: "Kokopelli",
    type: "Full time · Remote",
    period: "Jan 2022 – Nov 2022",
    location: "United States",
    points: [
      "Built and maintained full stack web applications for a US product team, working fully remote across time zones.",
      "Delivered features across the stack with modern JavaScript frameworks and cloud hosted back ends.",
    ],
  },
  {
    role: "Software Engineer",
    company: "trades.org",
    type: "Full time · Remote",
    period: "Dec 2020 – Dec 2021",
    location: "United States",
    points: [
      "Engineered frontend and backend features for a US web platform.",
      "Focused on performance, reliability, and clean, maintainable code.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Element Softworks Ltd",
    type: "Part time",
    period: "Apr 2020 – Oct 2020",
    location: "Remote",
    points: ["Built responsive, accessible user interfaces for client web products."],
  },
  {
    role: "Junior Web Developer",
    company: "Panacloud",
    type: "Part time",
    period: "Dec 2019 – Apr 2020",
    location: "Karachi, Pakistan",
    points: ["Started my engineering career building web applications and learning production development end to end."],
  },
];

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    name: "CLEA",
    blurb:
      "A conversational research platform that automates interviews with streaming LLM conversations and multimodal input across text, voice, and images.",
    tags: ["Next.js", "FastAPI", "AWS Bedrock", "WebSockets"],
    accent: "from-violet-500/25 to-fuchsia-400/10",
  },
  {
    name: "Dextruss",
    blurb:
      "An enterprise AI agent platform running a hosted agent loop on AWS Bedrock AgentCore, with AG2/AutoGen orchestration and live streaming interfaces.",
    tags: ["React 19", "Python", "Bedrock AgentCore", "AWS CDK"],
    accent: "from-emerald-500/25 to-teal-400/10",
  },
  {
    name: "Acttov",
    blurb:
      "A serverless AI agent API with configuration driven execution that routes personas, functions, tasks, and tools through a LangGraph state machine.",
    tags: ["FastAPI", "LangGraph", "Pydantic AI", "AWS SAM"],
    accent: "from-sky-500/25 to-cyan-400/10",
  },
  {
    name: "trades.org",
    blurb:
      "A US web platform I engineered across the stack, with a focus on performance, reliability, and maintainability.",
    tags: ["JavaScript", "Full Stack", "Web"],
    href: "https://trades.org",
    accent: "from-blue-500/25 to-indigo-400/10",
  },
  {
    name: "Merlin & ES Landing",
    blurb:
      "Marketing sites and landing pages that convert, crafted, animated, and tuned for speed.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    accent: "from-rose-500/25 to-pink-400/10",
  },
];

export const certifications = [
  { name: "Google AI Essentials", issuer: "Google", year: "2024" },
  { name: "Build Your Own Chatbot, Level 1", issuer: "IBM", year: "2019" },
];

export const education = {
  degree: "BS, Computer Science",
  school: "University of Karachi",
  period: "2018 – 2022",
};
