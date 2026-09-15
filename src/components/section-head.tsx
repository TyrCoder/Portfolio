"use client";

import { motion } from "motion/react";
import { DrawRule } from "@/components/draw-rule";
import { easePlot } from "@/lib/motion";

export function SectionHead({
  sheet,
  title,
  note,
}: {
  sheet: string;
  title: string;
  note: string;
}) {
  return (
    <div className="pt-20 md:pt-28">
      <DrawRule />
      <div className="flex flex-col gap-6 pt-6 md:flex-row md:items-end md:justify-between md:gap-12">
        <motion.h2
          className="sheet-wide max-w-[14ch] text-[clamp(1.875rem,5.6vw,4.25rem)] font-semibold uppercase leading-[0.9] tracking-[-0.038em]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          transition={{ duration: 0.75, ease: easePlot }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="flex max-w-md flex-col gap-3 md:items-end md:text-right"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <span className="mono-tight text-[0.6875rem] uppercase tracking-[0.2em] text-redline-ink">
            {sheet}
          </span>
          <p className="text-sm leading-relaxed text-ink-2">{note}</p>
        </motion.div>
      </div>
    </div>
  );
}
