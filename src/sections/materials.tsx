"use client";

import { motion } from "motion/react";
import { SectionHead } from "@/components/section-head";
import { billOfMaterials } from "@/content/portfolio";
import { easePlot } from "@/lib/motion";

function Rating({ value, label }: { value: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-1" title={`${label}: ${value} of 5`}>
      <span className="sr-only">{`${value} of 5`}</span>
      {[1, 2, 3, 4, 5].map((step) => (
        <span
          key={step}
          aria-hidden
          className={`h-2 w-2 border md:h-2.5 md:w-2.5 ${
            step <= value ? "border-redline bg-redline" : "border-rule-strong"
          }`}
        />
      ))}
    </span>
  );
}

export function Materials() {
  return (
    <section id="sht-3" aria-labelledby="materials-title" className="plate scroll-mt-6">
      <SectionHead
        sheet="Bill of materials · 03"
        title="What I build with"
        note="Specified by what I have actually shipped with, not by what I have read about. Confidence is my own assessment."
      />

      <table className="mt-12 w-full border-collapse text-left">
        <caption className="sr-only">
          Tools and technologies, with years of use and self-assessed confidence
        </caption>
        <thead>
          <tr className="border-y border-rule-strong">
            <th
              scope="col"
              className="mono-tight py-3 pr-3 text-[0.5625rem] font-normal uppercase tracking-[0.2em] text-ink-3 md:pr-6"
            >
              Item
            </th>
            <th
              scope="col"
              className="mono-tight py-3 pr-3 text-[0.5625rem] font-normal uppercase tracking-[0.2em] text-ink-3 md:pr-6"
            >
              Specification
            </th>
            <th
              scope="col"
              className="mono-tight hidden py-3 pr-6 text-[0.5625rem] font-normal uppercase tracking-[0.2em] text-ink-3 md:table-cell"
            >
              Since
            </th>
            <th
              scope="col"
              className="mono-tight py-3 text-right text-[0.5625rem] font-normal uppercase tracking-[0.2em] text-ink-3 md:text-left"
            >
              Confidence
            </th>
          </tr>
        </thead>
        <tbody>
          {billOfMaterials.map((entry, index) => (
            <motion.tr
              key={entry.item}
              className="border-b border-rule align-top"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.04, ease: easePlot }}
            >
              <th
                scope="row"
                className="py-4 pr-3 text-left text-[0.9375rem] font-medium uppercase tracking-[0.02em] text-ink md:pr-6 md:text-[0.9375rem] md:tracking-[0.04em]"
              >
                {entry.item}
                <span className="mono-tight mt-1 block text-[0.5625rem] tracking-[0.12em] text-ink-3 md:hidden">
                  Since {entry.since}
                </span>
              </th>
              <td className="py-4 pr-3 text-[0.8125rem] leading-relaxed text-ink-2 md:pr-6 md:text-[0.9375rem]">
                {entry.spec}
              </td>
              <td className="tnum mono-tight hidden py-4 pr-6 text-[0.8125rem] text-ink-3 md:table-cell">
                {entry.since}
              </td>
              <td className="py-4 text-right md:text-left">
                <Rating value={entry.rating} label={entry.item} />
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
