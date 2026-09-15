export type Discipline = "UI" | "API" | "DATA" | "OPS";

export type IssueStatus = "as-built" | "issued-for-review" | "in-progress";

export type Project = {
  id: string;
  sheetNo: string;
  discipline: Discipline;
  title: string;
  scope: string;
  detail: string;
  role: string;
  year: string;
  status: IssueStatus;
  stack: string[];
  schedule: { label: string; value: string }[];
  links: { label: string; href: string }[];
  image?: { src: string; alt: string };
};

export type BillOfMaterialsRow = {
  item: string;
  spec: string;
  since: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export type Revision = {
  rev: string;
  date: string;
  title: string;
  org: string;
  place: string;
  description: string;
  tags: string[];
};

export type Credential = {
  title: string;
  issuer: string;
  date: string;
  ref?: string;
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
  primary?: boolean;
};

export const identity = {
  firstName: "Juan",
  lastName: "Dela Cruz",
  role: "Full-stack developer",
  discipline: "Information Technology",
  school: "Your University",
  program: "BS Information Technology",
  standing: "4th year",
  location: "Metro Manila, PH",
  availability: "Open to OJT and junior roles",
  availableFrom: "Jan 2026",
  summary:
    "I build web applications end to end: interfaces that hold up under real use, APIs that stay predictable, and the deployment pipeline that carries them. I am looking for an on-the-job training placement or a junior position where the code I write is read by other people.",
  intro:
    "Fourth-year IT student. I ship small, finished things rather than large unfinished ones.",
  resume: "/resume.pdf",
  portrait: { src: "/portrait.jpg", alt: "Portrait photograph" },
} as const;

export const projects: Project[] = [
  {
    id: "transit-board",
    sheetNo: "UI-101",
    discipline: "UI",
    title: "Transit Board",
    scope: "Live arrivals display for a campus shuttle route",
    detail:
      "A departures board that reads a GTFS feed and renders the next six departures for whichever stop the screen is mounted at. Runs unattended on a wall-mounted tablet, recovers from network loss without a refresh, and falls back to the printed timetable when the feed is stale for more than four minutes.",
    role: "Sole developer",
    year: "2025",
    status: "as-built",
    stack: ["Next.js", "TypeScript", "WebSocket", "Redis"],
    schedule: [
      { label: "Stops served", value: "14" },
      { label: "Refresh", value: "8s" },
      { label: "Uptime observed", value: "31d" },
    ],
    links: [
      { label: "Repository", href: "https://github.com/" },
      { label: "Live", href: "https://example.com/" },
    ],
  },
  {
    id: "ledger-api",
    sheetNo: "API-201",
    discipline: "API",
    title: "Ledger",
    scope: "Double-entry bookkeeping service for a student org",
    detail:
      "An HTTP service that records contributions and disbursements as balanced journal entries, so the treasurer's report is derived rather than typed. Every mutation is append-only and carries the officer who authorised it. Includes a reconciliation endpoint that reports the difference between the ledger and an uploaded bank statement.",
    role: "Backend, schema design",
    year: "2025",
    status: "as-built",
    stack: ["Node.js", "PostgreSQL", "Zod", "Vitest"],
    schedule: [
      { label: "Endpoints", value: "18" },
      { label: "Test coverage", value: "84%" },
      { label: "Entries recorded", value: "2,140" },
    ],
    links: [{ label: "Repository", href: "https://github.com/" }],
  },
  {
    id: "enrollment-load",
    sheetNo: "DATA-301",
    discipline: "DATA",
    title: "Enrollment Load",
    scope: "Section capacity analysis for the registrar",
    detail:
      "A pipeline that ingests five semesters of enrollment exports and reports which sections consistently overflow, which run under capacity, and where the two collide in the same timeslot. Output is a single sheet the registrar can hand to a department chair without translation.",
    role: "Data modelling, reporting",
    year: "2024",
    status: "as-built",
    stack: ["Python", "DuckDB", "Polars"],
    schedule: [
      { label: "Terms analysed", value: "5" },
      { label: "Rows", value: "412k" },
      { label: "Runtime", value: "9s" },
    ],
    links: [{ label: "Repository", href: "https://github.com/" }],
  },
  {
    id: "deploy-warden",
    sheetNo: "OPS-401",
    discipline: "OPS",
    title: "Deploy Warden",
    scope: "Preview environments for a two-person project",
    detail:
      "A small control plane that gives every pull request a disposable environment with its own database branch, then tears it down when the branch merges. Built after the third time a demo broke because two people were sharing one staging server.",
    role: "Sole developer",
    year: "2025",
    status: "issued-for-review",
    stack: ["Docker", "GitHub Actions", "Caddy", "Go"],
    schedule: [
      { label: "Spin-up", value: "42s" },
      { label: "Environments", value: "per PR" },
      { label: "Cost ceiling", value: "fixed" },
    ],
    links: [{ label: "Repository", href: "https://github.com/" }],
  },
  {
    id: "field-notes",
    sheetNo: "UI-102",
    discipline: "UI",
    title: "Field Notes",
    scope: "Offline-first note capture for practicum logs",
    detail:
      "A note-taking client for students logging practicum hours from sites with unreliable signal. Writes land locally first and reconcile on reconnect with a visible, resolvable conflict view instead of a silent last-write-wins.",
    role: "Sole developer",
    year: "2024",
    status: "as-built",
    stack: ["React", "IndexedDB", "CRDT", "Vite"],
    schedule: [
      { label: "Works offline", value: "fully" },
      { label: "Sync conflicts", value: "surfaced" },
      { label: "Bundle", value: "61kB" },
    ],
    links: [{ label: "Repository", href: "https://github.com/" }],
  },
  {
    id: "queue-desk",
    sheetNo: "API-202",
    discipline: "API",
    title: "Queue Desk",
    scope: "Window queueing for the university cashier",
    detail:
      "Ticketing for a service counter: students take a number from their phone, the counter display advances it, and the service-time history tells the office when to open a second window. Replaced a paper roll and a handwritten tally.",
    role: "Backend, realtime",
    year: "2024",
    status: "in-progress",
    stack: ["Fastify", "SQLite", "Server-Sent Events"],
    schedule: [
      { label: "Windows", value: "4" },
      { label: "Peak queue", value: "60+" },
      { label: "Median wait", value: "logged" },
    ],
    links: [{ label: "Repository", href: "https://github.com/" }],
  },
  {
    id: "asset-tagger",
    sheetNo: "DATA-302",
    discipline: "DATA",
    title: "Asset Tagger",
    scope: "Equipment inventory with QR reconciliation",
    detail:
      "Laboratory equipment inventory where each item carries a printed code. A phone scan reconciles what is physically present against what the records claim, and the report names only the discrepancies.",
    role: "Sole developer",
    year: "2024",
    status: "as-built",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    schedule: [
      { label: "Items tracked", value: "870" },
      { label: "Audit time", value: "-70%" },
      { label: "Rooms", value: "12" },
    ],
    links: [{ label: "Repository", href: "https://github.com/" }],
  },
  {
    id: "runbook",
    sheetNo: "OPS-402",
    discipline: "OPS",
    title: "Runbook",
    scope: "Incident checklists that execute themselves",
    detail:
      "Operational checklists written in Markdown where each step can carry a command. Running a step records who ran it and what it returned, so the incident log writes itself instead of being reconstructed afterwards.",
    role: "Sole developer",
    year: "2025",
    status: "in-progress",
    stack: ["Go", "Markdown", "SQLite"],
    schedule: [
      { label: "Checklists", value: "9" },
      { label: "Audit trail", value: "automatic" },
      { label: "Binary", value: "single" },
    ],
    links: [{ label: "Repository", href: "https://github.com/" }],
  },
  {
    id: "seat-plan",
    sheetNo: "UI-103",
    discipline: "UI",
    title: "Seat Plan",
    scope: "Examination seating generator",
    detail:
      "Generates examination seating that keeps students from the same section apart, prints one sheet per room, and regenerates in place when a late registration arrives.",
    role: "Sole developer",
    year: "2023",
    status: "as-built",
    stack: ["Svelte", "TypeScript", "jsPDF"],
    schedule: [
      { label: "Rooms", value: "24" },
      { label: "Constraints", value: "3" },
      { label: "Generation", value: "instant" },
    ],
    links: [{ label: "Repository", href: "https://github.com/" }],
  },
];

export const billOfMaterials: BillOfMaterialsRow[] = [
  { item: "TypeScript", spec: "Application language, strict mode", since: "2022", rating: 5 },
  { item: "React / Next.js", spec: "App Router, server components", since: "2022", rating: 5 },
  { item: "Node.js", spec: "HTTP services, background jobs", since: "2022", rating: 4 },
  { item: "PostgreSQL", spec: "Schema design, indexing, migrations", since: "2023", rating: 4 },
  { item: "Python", spec: "Data processing and analysis", since: "2021", rating: 4 },
  { item: "Docker", spec: "Local parity, deployment images", since: "2023", rating: 3 },
  { item: "Go", spec: "Single-binary tools and services", since: "2024", rating: 3 },
  { item: "Git / GitHub Actions", spec: "Review flow, CI, release", since: "2021", rating: 4 },
  { item: "Linux", spec: "Server administration, shell tooling", since: "2021", rating: 4 },
  { item: "Figma", spec: "Interface specification and handoff", since: "2023", rating: 3 },
];

export const revisions: Revision[] = [
  {
    rev: "D",
    date: "2025",
    title: "Freelance web developer",
    org: "Independent",
    place: "Remote",
    description:
      "Built and maintained sites and internal tools for three small clients, handling scope, delivery and the support that follows it.",
    tags: ["Next.js", "PostgreSQL", "Client work"],
  },
  {
    rev: "C",
    date: "2024",
    title: "Software engineering intern",
    org: "Your Internship Company",
    place: "Metro Manila",
    description:
      "Worked in the internal tools team on ticket triage and two shipped features, with code reviewed by senior engineers before merge.",
    tags: ["React", "REST", "Code review"],
  },
  {
    rev: "B",
    date: "2023",
    title: "Technical lead, capstone project",
    org: "Your University",
    place: "Metro Manila",
    description:
      "Led a team of four through requirements, architecture and delivery of the capstone system, and ran the weekly integration.",
    tags: ["Team of 4", "Architecture", "Defence passed"],
  },
  {
    rev: "A",
    date: "2022",
    title: "Started building for other people",
    org: "Student organisations",
    place: "Metro Manila",
    description:
      "First work with users who were not me: registration forms, event sites, and the first time a bug meant someone else's evening.",
    tags: ["HTML/CSS", "JavaScript", "First users"],
  },
];

export const credentials: Credential[] = [
  { title: "Your Certification", issuer: "Issuing Body", date: "2025", ref: "CERT-0000" },
  { title: "Your Seminar or Training", issuer: "Organiser", date: "2024" },
  { title: "Your Competition Placement", issuer: "Organiser", date: "2024" },
];

export const contactChannels: ContactChannel[] = [
  { label: "Email", value: "you@example.com", href: "mailto:you@example.com", primary: true },
  { label: "GitHub", value: "github.com/yourhandle", href: "https://github.com/yourhandle" },
  { label: "LinkedIn", value: "linkedin.com/in/yourhandle", href: "https://linkedin.com/in/yourhandle" },
  { label: "Phone", value: "+63 900 000 0000", href: "tel:+639000000000" },
];

export const site = {
  url: "https://your-portfolio.vercel.app",
  title: `${identity.firstName} ${identity.lastName} — ${identity.role}`,
  description: identity.summary,
} as const;

export const disciplines: { code: Discipline | "ALL"; label: string }[] = [
  { code: "ALL", label: "All sheets" },
  { code: "UI", label: "Interface" },
  { code: "API", label: "Services" },
  { code: "DATA", label: "Data" },
  { code: "OPS", label: "Operations" },
];

export const statusLabels: Record<IssueStatus, string> = {
  "as-built": "As built",
  "issued-for-review": "Issued for review",
  "in-progress": "In progress",
};

export const PROJECTS_PER_SHEET = 3;
