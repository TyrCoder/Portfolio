"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState, useSyncExternalStore } from "react";
import { AssetFrame } from "@/components/asset-frame";
import { SectionHead } from "@/components/section-head";
import { StatusMark } from "@/components/status-mark";
import {
  PROJECTS_PER_SHEET,
  disciplines,
  projects,
  type Discipline,
  type Project,
} from "@/content/portfolio";
import { easeCut, easePlot } from "@/lib/motion";
import { readQuery, serverQuery, subscribeToQuery, writeQuery } from "@/lib/url-state";

type Filter = Discipline | "ALL";

const sheet = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 28 : -28 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: easePlot } },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -28 : 28,
    transition: { duration: 0.3, ease: easeCut },
  }),
};

const row = {
  enter: { opacity: 0, y: 18 },
  center: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.06 * index, ease: easePlot },
  }),
};

function PagerArrow({ back = false }: { back?: boolean }) {
  return (
    <svg
      aria-hidden
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      className={back ? "rotate-180" : undefined}
    >
      <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}

function Drawing({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      data-row
      custom={index}
      variants={row}
      initial="enter"
      animate="center"
      className="grid grid-cols-1 gap-x-8 gap-y-6 border-t border-rule py-9 md:grid-cols-12 md:py-11"
    >
      <div className="flex items-start justify-between gap-4 md:col-span-2 md:flex-col md:justify-start md:gap-3">
        <span className="mono-tight text-[0.6875rem] uppercase tracking-[0.12em] text-redline-ink">
          {project.sheetNo}
        </span>
        <StatusMark status={project.status} />
        <span className="mono-tight text-[0.5625rem] uppercase tracking-[0.16em] text-ink-3">
          {project.year}
        </span>
      </div>

      <div className="md:col-span-6">
        <h3 className="sheet-wide text-[clamp(1.5rem,3.2vw,2.25rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm uppercase tracking-[0.06em] text-ink-3">{project.scope}</p>
        <p className="measure mt-5 text-[0.9375rem] leading-relaxed text-ink-2">{project.detail}</p>
        {project.image ? (
          <AssetFrame
            src={project.image.src}
            alt={project.image.alt}
            label={`${project.sheetNo} — image pending`}
            className="mt-6 aspect-[16/9]"
          />
        ) : null}
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="text-[0.6875rem] uppercase tracking-[0.18em] text-ink-3"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-4">
        <dl className="border-t border-rule">
          <div className="flex items-baseline justify-between gap-4 border-b border-rule py-2.5">
            <dt className="mono-tight text-[0.5625rem] uppercase tracking-[0.16em] text-ink-3">
              Role
            </dt>
            <dd className="min-w-0 text-right text-[0.8125rem] text-ink">{project.role}</dd>
          </div>
          {project.schedule.map((entry) => (
            <div
              key={entry.label}
              className="flex items-baseline justify-between gap-4 border-b border-rule py-2.5"
            >
              <dt className="mono-tight text-[0.5625rem] uppercase tracking-[0.16em] text-ink-3">
                {entry.label}
              </dt>
              <dd className="tnum mono-tight min-w-0 text-right text-[0.8125rem] text-ink">{entry.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group/link inline-flex items-center gap-2 text-[0.8125rem] uppercase tracking-[0.1em] text-ink underline decoration-rule-strong underline-offset-4 transition-colors duration-300 hover:text-redline-ink hover:decoration-redline-ink"
            >
              {link.label}
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                <PagerArrow />
              </span>
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Work() {
  const [direction, setDirection] = useState(1);
  const query = useSyncExternalStore(subscribeToQuery, readQuery, serverQuery);

  const { filter, requestedSheet } = useMemo(() => {
    const params = new URLSearchParams(query);
    const code = params.get("d");
    const sheet = Number(params.get("sheet"));
    return {
      filter:
        code && disciplines.some((entry) => entry.code === code) ? (code as Filter) : "ALL",
      requestedSheet: Number.isInteger(sheet) && sheet > 0 ? sheet : 1,
    };
  }, [query]);

  const filtered = useMemo(
    () => (filter === "ALL" ? projects : projects.filter((item) => item.discipline === filter)),
    [filter],
  );

  const sheets = Math.max(1, Math.ceil(filtered.length / PROJECTS_PER_SHEET));
  const current = Math.min(requestedSheet, sheets);
  const start = (current - 1) * PROJECTS_PER_SHEET;
  const visible = filtered.slice(start, start + PROJECTS_PER_SHEET);

  const commit = (nextFilter: Filter, nextSheet: number) => {
    const params = new URLSearchParams(window.location.search);
    if (nextFilter === "ALL") params.delete("d");
    else params.set("d", nextFilter);
    if (nextSheet === 1) params.delete("sheet");
    else params.set("sheet", String(nextSheet));
    writeQuery(params);
  };

  const goto = (next: number) => {
    if (next < 1 || next > sheets || next === current) return;
    setDirection(next > current ? 1 : -1);
    commit(filter, next);
    const list = document.getElementById("drawing-list");
    if (list && list.getBoundingClientRect().top < 0) {
      list.scrollIntoView({ block: "start" });
    }
  };

  const pick = (code: Filter) => {
    if (code === filter) return;
    setDirection(1);
    commit(code, 1);
  };

  return (
    <section id="sht-2" aria-labelledby="work-title" className="plate scroll-mt-6">
      <SectionHead
        sheet="Drawing set · 02"
        title="Selected work"
        note="Nine drawings, three to a sheet. Every one was built, deployed, and used by somebody other than me."
      />

      <div className="mt-12 flex flex-wrap items-center gap-x-1 gap-y-3 border-y border-rule py-3">
        {disciplines.map((entry) => {
          const active = filter === entry.code;
          return (
            <button
              key={entry.code}
              type="button"
              onClick={() => pick(entry.code as Filter)}
              aria-pressed={active}
              className={`relative isolate px-4 py-2 text-[0.6875rem] uppercase tracking-[0.16em] mono-tight transition-colors duration-300 ${
                active ? "text-on-redline" : "text-ink-3 hover:text-ink"
              }`}
            >
              {active ? (
                <motion.span
                  aria-hidden
                  layoutId="discipline-mark"
                  className="absolute inset-0 -z-10 bg-redline"
                  transition={{ duration: 0.4, ease: easePlot }}
                />
              ) : null}
              {entry.label}
            </button>
          );
        })}
        <span className="mono-tight w-full pr-1 text-right text-[0.5625rem] uppercase tracking-[0.18em] text-ink-3 sm:ml-auto sm:w-auto">
          {filtered.length} drawing{filtered.length === 1 ? "" : "s"}
        </span>
      </div>

      <div id="drawing-list" className="isolate-list mt-2 scroll-mt-10 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={`${filter}-${current}`}
            custom={direction}
            variants={sheet}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {visible.map((project, index) => (
              <Drawing key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <nav
        aria-label="Project sheets"
        className="flex flex-wrap items-center justify-between gap-6 border-y border-rule-strong py-4"
      >
        <button
          type="button"
          onClick={() => goto(current - 1)}
          disabled={current === 1}
          className="group inline-flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.16em] mono-tight text-ink transition-colors duration-300 enabled:hover:text-redline-ink disabled:pointer-events-none disabled:text-ink-3 disabled:opacity-40"
        >
          <span className="transition-transform duration-300 group-enabled:group-hover:-translate-x-1">
            <PagerArrow back />
          </span>
          Previous
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: sheets }, (_, index) => index + 1).map((number) => {
            const active = number === current;
            return (
              <button
                key={number}
                type="button"
                onClick={() => goto(number)}
                aria-current={active ? "true" : undefined}
                aria-label={`Sheet ${number} of ${sheets}`}
                className={`relative isolate h-10 w-10 text-[0.6875rem] mono-tight tnum transition-colors duration-300 ${
                  active ? "text-on-redline" : "text-ink-3 hover:text-ink"
                }`}
              >
                {active ? (
                  <motion.span
                    aria-hidden
                    layoutId="sheet-mark"
                    className="absolute inset-0 -z-10 bg-redline"
                    transition={{ duration: 0.4, ease: easePlot }}
                  />
                ) : (
                  <span aria-hidden className="absolute inset-0 -z-10 border border-rule" />
                )}
                {String(number).padStart(2, "0")}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => goto(current + 1)}
          disabled={current === sheets}
          className="group inline-flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.16em] mono-tight text-ink transition-colors duration-300 enabled:hover:text-redline-ink disabled:pointer-events-none disabled:text-ink-3 disabled:opacity-40"
        >
          Next
          <span className="transition-transform duration-300 group-enabled:group-hover:translate-x-1">
            <PagerArrow />
          </span>
        </button>
      </nav>

      <p aria-live="polite" className="mono-tight mt-3 text-[0.5625rem] uppercase tracking-[0.18em] text-ink-3">
        Sheet {String(current).padStart(2, "0")} of {String(sheets).padStart(2, "0")} — showing{" "}
        {visible.length} of {filtered.length} drawings
      </p>
    </section>
  );
}
