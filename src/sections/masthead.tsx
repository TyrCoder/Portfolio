"use client";

import { motion } from "motion/react";
import { Control } from "@/components/control";
import { Dimension } from "@/components/dimension";
import { identity } from "@/content/portfolio";
import { easePlot } from "@/lib/motion";
import { sheetSet } from "@/lib/sheets";

const plot = {
  hidden: { opacity: 0 },
  shown: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const line = {
  hidden: { opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)" },
  shown: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 -12% 0)",
    transition: { duration: 1, ease: easePlot },
  },
};

function Annotation() {
  return (
    <motion.div
      className="relative flex flex-col items-start gap-2 text-redline-ink md:items-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.15 }}
    >
      <svg aria-hidden width="86" height="34" viewBox="0 0 86 34" fill="none">
        <motion.path
          d="M2 32L28 6h56"
          stroke="currentColor"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 1.2, ease: easePlot }}
        />
        <circle cx="2" cy="32" r="2.2" fill="currentColor" />
      </svg>
      <p className="mono-tight max-w-[24ch] text-[0.6875rem] uppercase leading-relaxed tracking-[0.14em] md:text-right">
        {identity.availability}
        <br />
        <span className="text-ink-2">Available {identity.availableFrom}</span>
      </p>
    </motion.div>
  );
}

function Contents() {
  return (
    <motion.nav
      aria-label="Drawing contents"
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.25 }}
    >
      <p className="mono-tight border-b border-rule-strong pb-2 text-[0.5625rem] uppercase tracking-[0.2em] text-ink-3">
        Contents
      </p>
      <ol>
        {sheetSet.map((sheet, index) => (
          <li key={sheet.id}>
            <a
              href={`#${sheet.id}`}
              className="group flex items-baseline gap-3 border-b border-rule py-2.5 text-ink-2 transition-colors duration-300 hover:text-redline-ink"
            >
              <span className="mono-tight tnum text-[0.6875rem] tracking-[0.1em] text-ink-3 transition-colors duration-300 group-hover:text-redline-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.8125rem] uppercase tracking-[0.06em]">{sheet.label}</span>
              <span
                aria-hidden
                className="mx-1 h-px flex-1 self-center bg-rule transition-colors duration-300 group-hover:bg-redline"
              />
              <svg
                aria-hidden
                width="13"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
                className="self-center transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M0 4.5h11M7.5 1l3.5 3.5L7.5 8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                />
              </svg>
            </a>
          </li>
        ))}
      </ol>
    </motion.nav>
  );
}

export function Masthead() {
  return (
    <section
      id="sht-1"
      aria-labelledby="masthead-name"
      className="plate flex min-h-[calc(100svh-3rem)] scroll-mt-6 flex-col gap-12 pt-20 pb-24 md:justify-between md:gap-8 lg:pt-28 lg:pb-14"
    >
      <motion.div
        className="flex flex-col justify-between gap-8 md:flex-row md:items-start"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <p className="mono-tight text-[0.6875rem] uppercase leading-[1.9] tracking-[0.14em] text-ink-2">
          {identity.program} · {identity.standing}
          <br />
          {identity.school}
          <br />
          {identity.location}
        </p>
        <Annotation />
      </motion.div>

      <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-8">
        <motion.h1
          id="masthead-name"
          variants={plot}
          initial="hidden"
          animate="shown"
          className="sheet-wide font-semibold uppercase leading-[0.84] tracking-[-0.04em] md:col-span-8"
          style={{ fontSize: "clamp(2.25rem, 10.5vw, 6rem)" }}
        >
          <motion.span variants={line} className="block">
            {identity.firstName}
          </motion.span>
          <motion.span variants={line} className="block text-ink-2">
            {identity.lastName}
          </motion.span>
        </motion.h1>
        <div className="md:col-span-4">
          <Contents />
        </div>
      </div>

      <Dimension label={`${identity.role} · ${identity.discipline}`} />

      <motion.div
        className="flex flex-col gap-9 md:flex-row md:items-end md:justify-between md:gap-12"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.05, ease: easePlot }}
      >
        <p className="measure text-pretty text-[0.9375rem] leading-relaxed text-ink-2 md:text-lg">
          {identity.summary}
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Control href="#sht-2" variant="redline" note="UI-101">
            See the work
          </Control>
          <Control href="#sht-5">Get in touch</Control>
        </div>
      </motion.div>
    </section>
  );
}
