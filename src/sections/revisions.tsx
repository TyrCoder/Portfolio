"use client";

import { motion } from "motion/react";
import { SectionHead } from "@/components/section-head";
import { credentials, revisions } from "@/content/portfolio";
import { easePlot } from "@/lib/motion";

export function Revisions() {
  return (
    <section id="sht-4" aria-labelledby="revisions-title" className="plate scroll-mt-6">
      <SectionHead
        sheet="Revision history · 04"
        title="How I got here"
        note="Read bottom to top. Each revision is the point where the work changed in kind, not the point where the job title did."
      />

      <ol className="mt-12 border-t border-rule-strong">
        {revisions.map((entry, index) => (
          <motion.li
            key={entry.rev}
            className="grid grid-cols-1 gap-x-8 gap-y-4 border-b border-rule py-8 md:grid-cols-12 md:py-10"
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
            transition={{ duration: 0.65, delay: index * 0.06, ease: easePlot }}
          >
            <div className="flex items-baseline gap-4 md:col-span-2 md:flex-col md:gap-2">
              <span className="sheet-wide text-[2rem] font-semibold leading-none text-redline">
                {entry.rev}
              </span>
              <span className="tnum mono-tight text-[0.6875rem] uppercase tracking-[0.16em] text-ink-3">
                {entry.date}
              </span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-[1.25rem] font-medium uppercase tracking-[-0.01em] text-ink">
                {entry.title}
              </h3>
              <p className="mono-tight mt-1.5 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-3">
                {entry.org} · {entry.place}
              </p>
              <p className="measure mt-4 text-[0.9375rem] leading-relaxed text-ink-2">
                {entry.description}
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 md:col-span-4 md:justify-end">
              {entry.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-[0.6875rem] uppercase tracking-[0.18em] text-ink-3"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>

      <div className="mt-14">
        <h3 className="mono-tight text-[0.6875rem] uppercase tracking-[0.22em] text-ink-3">
          Certifications and awards
        </h3>
        <dl className="mt-4 border-t border-rule">
          {credentials.map((item) => (
            <div
              key={item.title}
              className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-rule py-4"
            >
              <dt className="text-[0.9375rem] uppercase tracking-[0.02em] text-ink">
                {item.title}
              </dt>
              <dd className="mono-tight text-[0.6875rem] uppercase tracking-[0.14em] text-ink-3">
                {item.issuer} · {item.date}
                {item.ref ? ` · ${item.ref}` : ""}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
