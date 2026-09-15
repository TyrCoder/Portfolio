"use client";

import Image from "next/image";
import { useState } from "react";

export function AssetFrame({
  src,
  alt,
  label,
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div className={`relative overflow-hidden border border-rule bg-sheet-2 ${className}`}>
      {showImage && src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 640px"
          onError={() => setFailed(true)}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0">
          <svg
            aria-hidden
            className="h-full w-full text-rule"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path d="M0 0l100 100M100 0L0 100" stroke="currentColor" strokeWidth="0.35" />
          </svg>
          <span className="mono-tight absolute bottom-2 left-2 text-[0.5625rem] uppercase tracking-[0.18em] text-ink-3">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
