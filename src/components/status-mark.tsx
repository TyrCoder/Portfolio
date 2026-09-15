import type { IssueStatus } from "@/content/portfolio";
import { statusLabels } from "@/content/portfolio";

const tone: Record<IssueStatus, string> = {
  "as-built": "text-ink-2",
  "issued-for-review": "text-construction",
  "in-progress": "text-redline-ink",
};

export function StatusMark({ status }: { status: IssueStatus }) {
  return (
    <span
      className={`mono-tight inline-flex items-center gap-1.5 text-[0.5625rem] uppercase tracking-[0.16em] ${tone[status]}`}
    >
      <svg aria-hidden width="7" height="9" viewBox="0 0 7 9" fill="none">
        <path d="M6 1H1v7h5" stroke="currentColor" strokeWidth="1" />
      </svg>
      {statusLabels[status]}
      <svg aria-hidden width="7" height="9" viewBox="0 0 7 9" fill="none">
        <path d="M1 1h5v7H1" stroke="currentColor" strokeWidth="1" />
      </svg>
    </span>
  );
}
