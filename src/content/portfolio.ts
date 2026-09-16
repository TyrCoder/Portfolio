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
  firstName: "Timothy Kyl",
  lastName: "Balbieran",
  role: "Full-stack developer",
  discipline: "Information Technology",
  school: "Laguna State Polytechnic University Sta. Cruz Campus",
  program: "BS Information Technology",
  standing: "4th year",
  location: "Pila, Laguna, PH",
  availability: "Open to OJT and junior roles",
  availableFrom: "Jan 2026",
  summary:
    "I build web applications end to end: interfaces that hold up under real use, APIs that stay predictable, and the deployment pipeline that carries them. I am looking for an on-the-job training placement or a junior position where the code I write is read by other people.",
  intro:
    "Fourth-year IT student. I ship small, finished things rather than large unfinished ones.",
  resume: "/resume.pdf",
  portrait: { src: "/portrait.jpg", alt: "Timothy Kyl Balbieran" },
} as const;

export const projects: Project[] = [
  {
    id: "liliw-virtual-guide",
    sheetNo: "UI-101",
    discipline: "UI",
    title: "Liliw Virtual Guide",
    scope: "Progressive web app for a municipality's heritage and tourism guide",
    detail:
      "Sixteen public sections covering heritage sites, attractions, dining, itineraries, news and community submissions, over an interactive Mapbox map and a set of immersive 3D views. Installs as a PWA and keeps working offline, which matters for visitors walking the town on patchy signal. Community photo uploads are screened in the browser before they ever reach the database, and the whole system ships with a user manual, an ERD and an architecture document.",
    role: "Sole developer",
    year: "2026",
    status: "as-built",
    stack: ["Next.js", "TypeScript", "Supabase", "Mapbox GL", "three.js", "TensorFlow.js"],
    schedule: [
      { label: "Public sections", value: "16" },
      { label: "Offline", value: "installable PWA" },
      { label: "Shipped with", value: "manual + ERD" },
    ],
    links: [
      { label: "Repository", href: "https://github.com/TyrCoder/liliw-frontend" },
      { label: "Live", href: "https://liliw-frontend.vercel.app" },
    ],
  },
  {
    id: "gym-manager",
    sheetNo: "DATA-201",
    discipline: "DATA",
    title: "Gym Manager",
    scope: "Membership, attendance and revenue system for a gym owner",
    detail:
      "One codebase serving Android, iPhone and laptop, all signed into the same hosted Postgres, so a payment taken on the phone at the gym is already there when the laptop opens at home. The membership rules live in Postgres as functions and row-level security policies rather than in the app, so a renewal can never half-apply and the three platforms cannot drift apart. Includes an expiry queue the owner works through: one tap to call or send a prefilled text, one tap to mark done so nobody is chased twice in a day.",
    role: "Sole developer",
    year: "2026",
    status: "as-built",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "PostgreSQL", "Electron"],
    schedule: [
      { label: "Platforms", value: "3" },
      { label: "Rules live in", value: "Postgres" },
      { label: "Access control", value: "row-level security" },
    ],
    links: [{ label: "Live", href: "https://gym-management-amber-gamma.vercel.app" }],
  },
  {
    id: "lyric-notes",
    sheetNo: "UI-102",
    discipline: "UI",
    title: "Lyric Notes",
    scope: "Desktop lyric overlay and timing editor for Windows",
    detail:
      "Reads the media session Windows already publishes, so it follows whatever is playing anywhere on the machine, a YouTube tab or Spotify included, with no browser extension and no audio captured. It cleans the track title, looks the words up on lrclib.net, and runs a floating overlay against the real playhead. The other half is an editor: open your own file, paste the words, tap Space on each line to stamp it to the beat, and it writes plain .lrc that any other player can read.",
    role: "Sole developer",
    year: "2026",
    status: "as-built",
    stack: ["Python", "pygame", "mutagen", "winsdk", "PyInstaller"],
    schedule: [
      { label: "Ships as", value: "single .exe" },
      { label: "Audio captured", value: "none" },
      { label: "Output", value: ".lrc" },
    ],
    links: [{ label: "Repository", href: "https://github.com/TyrCoder/Lyrics-Notes" }],
  },
  {
    id: "varon-ecommerce",
    sheetNo: "API-301",
    discipline: "API",
    title: "Varón",
    scope: "Multi-role e-commerce platform with its own delivery layer",
    detail:
      "Flask and Postgres behind four roles that each see a different system: buyers, sellers, riders and admins. Covers product variants and inventory, cart and checkout, order status through to delivery, rider ratings, seller replies to reviews, email OTP verification, and the restriction controls an admin needs when an account goes bad. Store locations resolve against the Philippine Standard Geographic Code API rather than free-text addresses.",
    role: "Full-stack, team of three",
    year: "2025–2026",
    status: "in-progress",
    stack: ["Flask", "Python", "PostgreSQL", "Supabase", "JavaScript"],
    schedule: [
      { label: "Roles", value: "4" },
      { label: "Contributors", value: "3" },
      { label: "Verification", value: "email OTP" },
    ],
    links: [{ label: "Repository", href: "https://github.com/TyrCoder/Var-n" }],
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
  { label: "GitHub", value: "github.com/TyrCoder", href: "https://github.com/TyrCoder" },
  { label: "LinkedIn", value: "linkedin.com/in/yourhandle", href: "https://linkedin.com/in/yourhandle" },
  { label: "Phone", value: "+63 900 000 0000", href: "tel:+639000000000" },
];

export const site = {
  url: "https://your-portfolio.vercel.app",
  title: `${identity.firstName} ${identity.lastName} — ${identity.role}`,
  description: identity.summary,
} as const;

export const disciplineLabels: Record<Discipline, string> = {
  UI: "Interface",
  API: "Services",
  DATA: "Data",
  OPS: "Operations",
};

export const disciplineOrder: Discipline[] = ["UI", "API", "DATA", "OPS"];

export const statusLabels: Record<IssueStatus, string> = {
  "as-built": "As built",
  "issued-for-review": "Issued for review",
  "in-progress": "In progress",
};

export const PROJECTS_PER_SHEET = 3;
