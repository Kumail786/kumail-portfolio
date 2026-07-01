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
  { value: "6", label: "Companies worked with" },
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
    role: "AI Engineer",
    company: "BetterFuture Labs",
    type: "Contract",
    period: "2025 – Present",
    location: "Remote",
    current: true,
    points: [
      "Build LLM powered features and agentic workflows, taking AI capabilities from prototype to production.",
      "Collaborate remotely on applied AI products, integrating models, retrieval, and tooling into real user experiences.",
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
  slug: string;
  name: string;
  tagline: string;
  category: string;
  blurb: string;
  summary: string;
  features: string[];
  stack: string[];
  tags: string[];
  href?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "clea",
    name: "CLEA",
    tagline: "Conversational research, automated by AI",
    category: "Applied AI · Research",
    blurb:
      "A conversational research platform that runs interviews as streaming LLM conversations, with text, voice, and image input.",
    summary:
      "CLEA turns qualitative research interviews into natural, streaming conversations with an AI interviewer. Respondents reply by text, voice, or image, while an admin console lets researchers design studies and review results. I helped rebuild it from a validated prototype into a clean, production ready architecture.",
    features: [
      "Streaming LLM interviews on AWS Bedrock (Claude) that adapt in real time",
      "Real time voice capture and transcription with AssemblyAI, plus text and image input",
      "Separate admin console and respondent portal with internationalization",
      "Turborepo monorepo: decoupled Next.js front end and Python FastAPI back end",
      "PostgreSQL with SQLModel and disciplined Alembic migrations",
      "Deployed on AWS ECS Fargate with S3 backed media",
    ],
    stack: ["Next.js", "React", "Python FastAPI", "AWS Bedrock (Claude)", "AssemblyAI", "PostgreSQL", "WebSockets", "AWS ECS", "Turborepo"],
    tags: ["Next.js", "FastAPI", "AWS Bedrock", "WebSockets"],
    accent: "from-violet-500/25 to-fuchsia-400/10",
  },
  {
    slug: "arcade",
    name: "Arcade",
    tagline: "AI native OS for augmented marketing intelligence",
    category: "Applied AI · Platform",
    blurb:
      "The AI native collaborative OS that h2's intelligence modules run on, orchestrating multiple AI providers in daily production.",
    summary:
      "Arcade is the operating system for h2's augmented intelligence modules (BELA, CLEA, QORA, PIVO, DRIO). It manages a contextual hierarchy of organizations, workspaces, threads, and artifacts, and treats summarization as an orchestration layer that routes work across models. It is in daily production for the internal team, clients, and partners.",
    features: [
      "Multi provider AI: AWS Bedrock (Claude Sonnet and Haiku), Google Gemini, and Perplexity",
      "Planner based routing with summarization as an orchestration layer",
      "Real time collaboration: presence, typing indicators, and artifact locking",
      "Deep Research panels with sources, reports, and follow ups",
      "Rich text artifact editing (TipTap) with versioning and export",
      "Role based access, Cognito auth, and sovereign private deployment",
    ],
    stack: ["Next.js", "React", "Redux", "Python FastAPI", "MongoDB", "AWS Bedrock", "Google Gemini", "Socket.io", "AWS Cognito", "LangSmith"],
    tags: ["Next.js", "FastAPI", "Bedrock + Gemini", "MongoDB"],
    accent: "from-orange-500/25 to-amber-400/10",
  },
  {
    slug: "dextruss",
    name: "Dextruss",
    tagline: "Enterprise AI agent platform on Bedrock AgentCore",
    category: "Applied AI · Agents",
    blurb:
      "A multi tenant AI agent platform running a hosted agent loop on AWS Bedrock AgentCore, with multi agent orchestration and streaming UIs.",
    summary:
      "Dextruss is an enterprise agent platform where a hosted agent loop runs on AWS Bedrock AgentCore and coordinates multiple agents with AG2/AutoGen. It streams results to chat and admin interfaces and runs across isolated dev, stage, and production AWS accounts with strong auth and observability.",
    features: [
      "Hosted agent loop on AWS Bedrock AgentCore with AG2/AutoGen multi agent orchestration",
      "Live SSE streaming to chat and admin interfaces",
      "Multi account infrastructure as code with AWS CDK (dev, stage, prod)",
      "Cognito auth with Entra ID federation and user auto provisioning",
      "Encrypted secret management and disciplined PostgreSQL migrations",
      "Observability with OpenTelemetry, Pino, and Logfire",
    ],
    stack: ["Next.js 16", "React 19", "Python FastAPI", "AG2 / AutoGen", "Bedrock AgentCore", "AWS CDK", "AWS Cognito", "PostgreSQL"],
    tags: ["React 19", "Bedrock AgentCore", "AG2 / AutoGen", "AWS CDK"],
    accent: "from-emerald-500/25 to-teal-400/10",
  },
  {
    slug: "acttov",
    name: "Acttov",
    tagline: "Serverless agent API driven by config",
    category: "Applied AI · Agents",
    blurb:
      "A serverless, multi tenant agent API where configuration drives execution through a LangGraph state machine.",
    summary:
      "Acttov is a configuration driven agent backend: a single execution agent routes work through personas, functions, tasks, and tools using a LangGraph state machine, returning structured, streaming results. It is built for multi tenant use with careful secret handling and multi provider auth.",
    features: [
      "Configuration driven execution: personas route to functions, tasks, and tools",
      "LangGraph state machine with structured, streaming results",
      "AES-256-GCM secret encryption with key versioning and rotation",
      "Multi provider auth (Cognito RS256 and ALB ES256 tokens)",
      "Serverless deployment with AWS SAM, ECS Fargate, and an ALB",
      "Type safe Python with ruff and mypy",
    ],
    stack: ["Python FastAPI", "LangGraph", "Pydantic AI", "AWS SAM", "ECS Fargate", "AWS Cognito", "PostgreSQL"],
    tags: ["FastAPI", "LangGraph", "Pydantic AI", "AWS SAM"],
    accent: "from-sky-500/25 to-cyan-400/10",
  },
  {
    slug: "trades",
    name: "trades.org",
    tagline: "Full stack web platform",
    category: "Full Stack · Web",
    blurb:
      "A web platform I engineered across the stack, with a focus on performance, reliability, and maintainability.",
    summary:
      "trades.org is a web platform I contributed to across frontend and backend, delivering features with an eye on performance, reliability, and clean, maintainable code.",
    features: [
      "Frontend and backend feature development across the stack",
      "Focus on performance and reliability",
      "Clean, maintainable, well structured code",
    ],
    stack: ["JavaScript", "Frontend", "Backend", "Web"],
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
