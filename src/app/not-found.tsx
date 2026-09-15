import Link from "next/link";
import { identity } from "@/content/portfolio";

export default function NotFound() {
  return (
    <main className="plate flex min-h-svh flex-col justify-center gap-10 py-24">
      <div className="border-y border-rule-strong py-10">
        <h1 className="sheet-wide text-[clamp(2.25rem,9vw,5.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em]">
          Sheet not
          <br />
          issued
        </h1>
        <p className="measure mt-7 text-base leading-relaxed text-ink-2">
          This drawing is not part of the set. The title sheet lists everything that is.
        </p>
        <p className="mono-tight mt-6 text-[0.6875rem] uppercase tracking-[0.2em] text-redline-ink">
          Status 404 — no such sheet
        </p>
      </div>
      <Link
        href="/"
        className="mono-tight inline-flex w-fit items-center gap-3 border border-rule-strong px-6 py-3.5 text-[0.6875rem] uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:border-redline hover:text-redline-ink"
      >
        Back to the title sheet
        <svg aria-hidden width="15" height="10" viewBox="0 0 15 10" fill="none">
          <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
        </svg>
      </Link>
      <p className="mono-tight text-[0.5625rem] uppercase tracking-[0.2em] text-ink-3">
        {identity.firstName} {identity.lastName} — {identity.role}
      </p>
    </main>
  );
}
