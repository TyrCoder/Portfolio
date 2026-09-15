"use client";

import { motion } from "motion/react";
import { easePlot } from "@/lib/motion";

const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
const rows = ["1", "2", "3", "4", "5"];

function Marks({
  values,
  vertical = false,
  className,
}: {
  values: string[];
  vertical?: boolean;
  className: string;
}) {
  return (
    <div className={`absolute flex ${vertical ? "flex-col" : ""} ${className}`}>
      {values.map((value, index) => (
        <div
          key={value}
          className={`flex flex-1 items-center justify-center ${
            index === 0 ? "" : vertical ? "border-t border-rule" : "border-l border-rule"
          }`}
        >
          <span className="mono-tight text-[0.5625rem] tracking-[0.2em] text-ink-3">{value}</span>
        </div>
      ))}
    </div>
  );
}

export function SheetFrame() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40 hidden lg:block">
      <motion.div
        initial={{ clipPath: "inset(48% 48% 48% 48%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.1, ease: easePlot, delay: 0.05 }}
        className="absolute bottom-[4.25rem] left-4 right-4 top-4 border border-rule-strong"
      >
        <div className="absolute inset-[7px] border border-rule" />
        <Marks values={columns} className="inset-x-[7px] top-[7px] h-5" />
        <Marks values={columns} className="inset-x-[7px] bottom-[7px] h-5" />
        <Marks values={rows} vertical className="inset-y-[7px] left-[7px] w-5" />
        <Marks values={rows} vertical className="inset-y-[7px] right-[7px] w-5" />
      </motion.div>
    </div>
  );
}
