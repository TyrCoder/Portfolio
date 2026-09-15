"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { PlotToggle } from "@/components/plot-toggle";
import { easePlot } from "@/lib/motion";
import type { SheetRef } from "@/lib/sheets";

function Cell({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex min-w-0 flex-col justify-center border-l border-rule px-4 ${className}`}>
      <span className="mono-tight text-[0.5625rem] uppercase tracking-[0.2em] text-ink-3">{label}</span>
      <span className="truncate text-[0.6875rem] uppercase tracking-[0.1em] text-ink">
        {children}
      </span>
    </div>
  );
}

export function TitleBlock({
  drawnBy,
  issued,
  revision,
  sheets,
  action,
}: {
  drawnBy: string;
  issued: string;
  revision: string;
  sheets: SheetRef[];
  action: { label: string; href: string };
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = sheets
      .map((sheet) => document.getElementById(sheet.id))
      .filter((node): node is HTMLElement => node !== null);
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = sheets.findIndex((sheet) => sheet.id === visible.target.id);
        if (index >= 0) setActive(index);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sheets]);

  const current = sheets[active];

  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-rule-strong bg-sheet-2 lg:inset-x-4 lg:bottom-4 lg:border lg:border-rule-strong">
      <div className="flex h-12 items-stretch">
        <div className="hidden min-w-0 flex-col justify-center px-4 sm:flex">
          <span className="mono-tight text-[0.5625rem] uppercase tracking-[0.2em] text-ink-3">
            Drawn by
          </span>
          <span className="truncate text-[0.6875rem] uppercase tracking-[0.1em] text-ink">
            {drawnBy}
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center border-rule px-4 sm:border-l">
          <span className="mono-tight text-[0.5625rem] uppercase tracking-[0.2em] text-ink-3">
            Sheet {String(active + 1).padStart(2, "0")} of {String(sheets.length).padStart(2, "0")}
          </span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={current?.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: easePlot }}
              className="truncate text-[0.6875rem] uppercase tracking-[0.1em] text-redline-ink"
            >
              {current?.label}
            </motion.span>
          </AnimatePresence>
        </div>

        <nav aria-label="Sheet index" className="hidden items-stretch border-l border-rule md:flex">
          {sheets.map((sheet, index) => {
            const on = index === active;
            return (
              <a
                key={sheet.id}
                href={`#${sheet.id}`}
                aria-current={on ? "true" : undefined}
                className={`relative flex w-11 items-center justify-center text-[0.6875rem] mono-tight tnum transition-colors duration-300 ${
                  on ? "text-redline-ink" : "text-ink-3 hover:text-ink"
                }`}
              >
                {on ? (
                  <motion.span
                    aria-hidden
                    layoutId="title-block-mark"
                    className="absolute inset-x-0 top-0 h-0.5 bg-redline"
                    transition={{ duration: 0.4, ease: easePlot }}
                  />
                ) : null}
                {String(index + 1).padStart(2, "0")}
                <span className="sr-only">{sheet.label}</span>
              </a>
            );
          })}
        </nav>

        <Cell label="Scale" className="hidden 2xl:flex">
          1:1
        </Cell>
        <Cell label="Rev" className="hidden xl:flex">
          {revision}
        </Cell>
        <Cell label="Issued" className="hidden lg:flex">
          {issued}
        </Cell>

        <a
          href={action.href}
          className="group relative isolate flex items-center gap-2 overflow-hidden border-l border-rule bg-redline px-4 text-[0.6875rem] uppercase tracking-[0.16em] mono-tight text-on-redline transition-colors duration-300 hover:text-sheet focus-visible:text-sheet sm:px-5"
        >
          <span
            aria-hidden
            className="absolute inset-0 -z-10 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
          />
          {action.label}
          <svg
            aria-hidden
            width="13"
            height="9"
            viewBox="0 0 13 9"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M0 4.5h11M7.5 1l3.5 3.5L7.5 8"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="square"
            />
          </svg>
        </a>

        <div className="flex items-stretch border-l border-rule">
          <PlotToggle />
        </div>
      </div>
    </footer>
  );
}
