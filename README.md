# Portfolio — Issued For Construction

A single-page portfolio for an IT student applying for junior full-stack roles and On-the-Job Training, built as an engineering drawing sheet: bordered plate with zone references, a live title block, a contents index, paginated project sheets, a bill of materials, and a revision history.

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · Impeccable

---

## ⚠️ Everything in here is placeholder content

The name, projects, numbers, employers, dates and certifications that ship with this repository are **illustrative examples written to make the structure real**. None of them describe a real person's work. Replace all of them before you send this link to anyone.

Everything owner-specific lives in exactly one file:

```
src/content/portfolio.ts
```

Nothing personal is hard-coded into a component. Edit that one file and the whole site updates.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm start          # serve the production build
npm run lint       # eslint
npx tsc --noEmit   # typecheck
```

Requires Node.js 20 or later.

---

## Making it yours

### 1. Your details — `src/content/portfolio.ts`

| Export | What it is |
|---|---|
| `identity` | Name, role, course, year, school, location, availability, the opening paragraph, and the path to your CV. |
| `projects` | The paginated drawing set. Each entry has a sheet number, discipline, scope, description, role, year, issue status, stack, a small schedule of facts, and links. |
| `billOfMaterials` | The tools table. `rating` is 1–5 and is your own self-assessment. |
| `revisions` | Your history, newest first. `rev` is the revision letter shown in redline. |
| `credentials` | Certifications, seminars and awards. |
| `contactChannels` | Email, GitHub, LinkedIn, phone. Mark one `primary: true` — that one becomes the large link and the title-block action. |
| `site` | Canonical URL, page title and meta description. **Set `site.url` to your real deployed URL** before going live, or social previews and `metadataBase` will point at the placeholder. |
| `PROJECTS_PER_SHEET` | How many projects appear on one sheet. Pagination recalculates itself. |

Types are enforced, so a missing or misspelled field fails the build rather than shipping broken.

**Adding a project:** copy an existing entry, give it a unique `id` and `sheetNo`, and set `discipline` to `UI`, `API`, `DATA` or `OPS` — the filter bar and the sheet count update on their own.

**Issue status:** `as-built` (finished and in use), `issued-for-review` (done, still being reviewed), `in-progress` (actively being built). Use them honestly; an in-progress project that says so reads better than one that pretends.

### 2. Your assets — `public/`

The build does not break when these are missing; project image wells show a drawing-convention placeholder until you add them.

| File | Used for |
|---|---|
| `public/resume.pdf` | The "Download CV" button. Path is set by `identity.resume`. |
| `public/portrait.jpg` | Your photograph. Path is set by `identity.portrait`. |
| Project images | Add `image: { src: "/work/thing.png", alt: "…" }` to a project. Anything under `public/` works. |
| `src/app/opengraph-image.png` | The social preview card. Drop a 1200×630 PNG at that exact path and Next picks it up — nothing to wire. |
| `src/app/icon.svg` | The browser tab icon. A drafting mark ships by default; replace it with your own if you prefer. |

Remote image URLs need a `remotePatterns` entry in `next.config.ts`. Local files under `public/` need nothing.

### 3. Your colours (optional)

The palette, type and spacing live as CSS custom properties at the top of `src/app/globals.css` — one block for the light "Sheet" ground, one for the dark "Plot" ground. Change a value there and it propagates everywhere.

If you do change colours, keep body text at 4.5:1 contrast or better against its background. `DESIGN.md` records why each value is what it is.

---

## Deploying to Vercel

1. Push this repository to GitHub.
2. On [vercel.com/new](https://vercel.com/new), import the repository. Vercel detects Next.js; no configuration, no environment variables.
3. Deploy, then set `site.url` in `src/content/portfolio.ts` to the URL Vercel gives you and push again.

There is no database, no API key and no server-side secret — every route is statically prerendered.

---

## How it is put together

```
src/
  app/          layout (fonts, metadata, theme script), page, 404, global tokens
  sections/     masthead · work (paginated) · materials · revisions · contact
  components/   control (buttons) · title-block · sheet-frame · dimension · …
  content/      portfolio.ts  ← the only file with your details in it
  lib/          easing tuples, sheet list, URL state helpers
```

Worth knowing:

- **Pagination is addressable.** The project sheet and discipline filter are written to the URL (`?sheet=2&d=API`), so any sheet can be linked or bookmarked. The URL is the source of truth, read through `useSyncExternalStore`.
- **Two grounds.** "Sheet" (light) and "Plot" (dark) are both fully designed. The viewer's OS preference picks one; the title-block toggle overrides it and stores the choice in `localStorage`.
- **Motion respects the OS.** Every animation runs through `MotionConfig reducedMotion="user"`, so "reduce motion" turns them off without breaking layout.
- **No comments in the source**, by request. `DESIGN.md` carries the design system and this file carries the operating instructions.

`PRODUCT.md` and `DESIGN.md` are the Impeccable records for this project: what the product is, and what the visual system is. `.impeccable/` holds the surface brief and review captures. None of it ships to the browser — delete the directory if you would rather not publish it.
