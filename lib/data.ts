export const profile = {
  name: "Kumail Raza",
  role: "Applied AI Engineer",
  focus: "Senior Full Stack Engineer",
  tagline:
    "I build agentic and LLM powered products in production, turning complex business problems into reliable, intelligent systems.",
  location: "Karachi, Pakistan",
  availability: "Open to remote roles worldwide",
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
  { value: "AI", label: "Agentic systems in production" },
  { value: "15+", label: "Products shipped" },
  { value: "5", label: "Companies worked with" },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "AI / LLM",
    items: ["AWS Bedrock (Claude)", "Google Gemini", "LangGraph", "AG2 / AutoGen", "RAG", "Multi-agent"],
  },
  {
    title: "AI Infra & Data",
    items: ["Vector search", "Embeddings", "Retrieval", "LangSmith", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Express", "REST APIs", "WebSockets"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (CDK, ECS, RDS)", "Cognito / OIDC", "Docker", "Kubernetes", "GCP", "CI/CD"],
  },
  {
    title: "Practices",
    items: ["System Design", "Microservices", "IaC", "Observability", "Testing", "Clean Architecture"],
  },
];

export const marqueeSkills = [
  "AWS Bedrock", "Claude", "Gemini", "LangGraph", "AG2 / AutoGen", "RAG", "Agents", "Python",
  "FastAPI", "TypeScript", "React", "Next.js", "PostgreSQL", "MongoDB", "AWS", "Docker",
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
    role: "Senior Applied AI Engineer",
    company: "Expedey",
    type: "Full time",
    period: "Jan 2023 – Present",
    location: "Karachi, Pakistan",
    current: true,
    points: [
      "Build agentic AI systems on AWS Bedrock (Claude) and Gemini with LangGraph and AG2/AutoGen: multi agent orchestration, planner based routing, streaming, tool calling, and RAG grounded in client data.",
      "Ship AI products and scalable SaaS platforms end to end, from model selection and architecture through development, testing, deployment, and performance.",
      "Own cloud infrastructure with AWS CDK across multiple accounts (ECS Fargate, RDS, Cognito, S3) and enterprise auth with single sign on across multiple providers.",
      "Partner directly with clients to turn business goals into reliable, observable AI systems that create measurable value.",
    ],
  },
  {
    role: "Software Developer",
    company: "Kokopelli",
    type: "Full time",
    period: "Jan 2022 – Nov 2022",
    location: "Remote",
    points: [
      "Built and maintained full stack web applications for a product team, working fully remote across time zones.",
      "Delivered features across the stack with modern JavaScript frameworks and cloud hosted back ends.",
    ],
  },
  {
    role: "Software Engineer",
    company: "trades.org",
    type: "Full time",
    period: "Dec 2020 – Dec 2021",
    location: "Remote",
    points: [
      "Engineered frontend and backend features for a web platform.",
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
    name: "Arcade",
    blurb:
      "An AI native collaborative OS for augmented marketing intelligence, the platform h2's intelligence modules run on. Orchestrates multiple AI providers with planner based routing, multi agent coordination, deep research, and real time collaboration, in daily production.",
    tags: ["Next.js", "FastAPI", "AWS Bedrock + Gemini", "MongoDB", "WebSockets"],
    accent: "from-orange-500/25 to-amber-400/10",
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
      "A web platform I engineered across the stack, with a focus on performance, reliability, and maintainability.",
    tags: ["JavaScript", "Full Stack", "Web"],
    href: "https://trades.org",
    accent: "from-blue-500/25 to-indigo-400/10",
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
