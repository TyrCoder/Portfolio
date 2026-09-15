# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js App Router with TypeScript, Tailwind CSS v4, and Motion (motion.dev) for animation. Impeccable is installed at project scope. Deploy target is Vercel. The stack was pinned by the owner, not delegated.

## Users

Primary: hiring managers, HR screeners, and OJT/practicum coordinators at IT companies, opening the link from a resume, an application form, or a referral message. They scan for under a minute, often on a phone, and are deciding one thing: is this person worth an interview or a practicum slot.

Secondary: the owner's school practicum adviser, verifying the student has shippable work.

## Product Purpose

A personal portfolio that gets an IT student shortlisted for junior full-stack roles and for On-the-Job Training placement. Success is a reply: an interview invite or an accepted OJT application. Failure is the reviewer closing the tab without finding what the student can actually build.

## Positioning

The site is itself the work sample. A full-stack student cannot cite years of employment, so the proof of competence is the artifact the reviewer is currently standing inside: its build quality, its interaction detail, and the code behind it on GitHub. Nothing a template-based portfolio can truthfully claim.

## Operating Context

- The link travels as plain text in applications, email signatures, and chat messages, so the first viewport and the page title carry the whole first impression.
- Reviewers cross-check the GitHub repository; the source is part of the deliverable and is read.
- Screening happens on phones as often as on laptops.
- Philippine IT internship and junior hiring cycles: reviewers compare many near-identical student portfolios in one sitting.

## Capabilities and Constraints

- All owner-specific content (identity, projects, stack, experience, contact links) lives in one typed content module so it is edited in a single place; every component reads from it.
- The projects listing is paginated. Pagination is a confirmed requirement, not a byproduct of list length.
- Interactive controls and animation are confirmed requirements, not embellishment.
- The owner supplies image assets and resume files; the build must not block on them and must degrade correctly while they are missing.
- Source ships without code comments. This is an owner constraint.
- Static-friendly: no database, no authentication, no server secrets.

## Brand Commitments

The owner made these binding and they are recorded without expansion:

- No gradient color.
- No basic colors.
- No basic buttons.
- No basic fonts.

The person's name, school, and handles are not yet supplied and are placeholders in the content module.

## Evidence on Hand

None. There are no real projects, employers, dates, certifications, metrics, or testimonials on record yet. Every project, role, and credential currently in the content module is illustrative placeholder material authored to make the structure real, and is labeled as such in the file the owner edits. It must never be presented as the owner's achievement, and no metric, client, or employer may be invented into it.

Assets pending from the owner: profile image, project imagery, resume PDF, favicon source.

## Product Principles

- The artifact is the argument. Craft in the page outranks any claim typed onto it.
- One screen, one decision: a reviewer must reach "what can they build" within the first scroll.
- Every placeholder is visibly replaceable; nothing owner-specific hides inside a component.
- Truth over padding. An empty section is better than an invented credential.
- The repository is read by the same people. Source quality is user-facing.
