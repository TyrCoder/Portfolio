"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import { easePlot } from "@/lib/motion";

type Variant = "redline" | "sheet";

type ControlProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  note?: string;
  newTab?: boolean;
  download?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

const sweep = {
  rest: { clipPath: "inset(0 100% 0 0)" },
  active: { clipPath: "inset(0 0% 0 0)" },
};

const arrow = {
  rest: { x: 0 },
  active: { x: 4 },
};

const ticks = {
  rest: { opacity: 0.45, scale: 1 },
  active: { opacity: 1, scale: 1.12 },
};

function CornerTicks() {
  return (
    <motion.svg
      aria-hidden
      variants={ticks}
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      fill="none"
      vectorEffect="non-scaling-stroke"
    >
      <path d="M0 8V0h8M92 0h8v8M100 92v8h-8M8 100H0v-8" stroke="currentColor" strokeWidth="2" />
    </motion.svg>
  );
}

function Arrow() {
  return (
    <motion.svg
      aria-hidden
      variants={arrow}
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M0 5h13M9 1l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </motion.svg>
  );
}

export function Control({
  children,
  href,
  onClick,
  variant = "sheet",
  note,
  newTab,
  download,
  type = "button",
  disabled,
  className = "",
}: ControlProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 260, damping: 22, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 260, damping: 22, mass: 0.4 });

  const track = (event: PointerEvent<HTMLElement>) => {
    if (reduced || event.pointerType !== "mouse" || !ref.current) return;
    const box = ref.current.getBoundingClientRect();
    rawX.set(((event.clientX - box.left) / box.width - 0.5) * 10);
    rawY.set(((event.clientY - box.top) / box.height - 0.5) * 6);
  };

  const release = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const filled = variant === "redline";

  const base = [
    "group relative isolate inline-flex select-none items-center gap-3 overflow-hidden",
    "px-6 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] sheet-narrow",
    "transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
    filled
      ? "bg-redline text-on-redline hover:text-sheet focus-visible:text-sheet"
      : "border border-rule-strong text-ink hover:text-on-redline focus-visible:text-on-redline",
    disabled ? "pointer-events-none opacity-40" : "",
    className,
  ].join(" ");

  const inner = (
    <>
      <motion.span
        aria-hidden
        variants={sweep}
        transition={{ duration: 0.5, ease: easePlot }}
        className={`absolute inset-0 -z-10 ${filled ? "bg-ink" : "bg-redline"}`}
      />
      <CornerTicks />
      <span className="relative">{children}</span>
      {note ? (
        <span className="mono-tight relative text-[0.5625rem] tracking-[0.1em]">
          {note}
        </span>
      ) : null}
      <Arrow />
    </>
  );

  const motionProps = {
    initial: "rest" as const,
    animate: "rest" as const,
    whileHover: "active" as const,
    whileFocus: "active" as const,
    whileTap: { scale: 0.98 },
    style: { x, y },
    onPointerMove: track,
    onPointerLeave: release,
    onBlur: release,
    className: base,
  };

  if (href) {
    return (
      <motion.a
        {...motionProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        download={download}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer noopener" : undefined}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {inner}
    </motion.button>
  );
}
