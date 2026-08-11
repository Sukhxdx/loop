"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type CardProps = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
  onClick?: () => void;
  lit?: boolean;
  layoutId?: string;
};

export function Card({
  id,
  tag,
  title,
  subtitle,
  children,
  footer,
  className = "",
  onClick,
  lit = false,
  layoutId,
}: CardProps) {
  return (
    <motion.button
      type="button"
      layoutId={layoutId ?? `card-${id}`}
      onClick={onClick}
      className={`
        group relative flex h-full w-full flex-col overflow-hidden rounded-card
        border bg-bg-surface p-4 text-left transition-[border-color,box-shadow,transform]
        duration-300 focus-ring
        ${
          lit
            ? "border-accent shadow-card-lit -translate-y-1.5"
            : "border-border-hairline shadow-card hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover"
        }
        ${className}
      `}
      aria-label={`${title}. ${subtitle}. ${tag}`}
    >
      <span
        className="pointer-events-none absolute left-4 top-4 z-20 rounded-full border border-border-hairline
          bg-bg-base/80 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-accent backdrop-blur-sm"
      >
        {tag}
      </span>

      {/* Media slot: fixed share of card height — never underlays the text block */}
      <div className="relative z-10 mt-7 min-h-0 w-full flex-[0_0_58%] overflow-hidden">
        {children}
      </div>

      {/* Text always below media, never shrinks away on tall/featured spans */}
      <div className={`relative z-10 mt-3 shrink-0 pb-0.5 ${footer ? "pr-16" : "pr-1"}`}>
        <h3 className="font-body text-sm font-medium leading-snug text-text-primary line-clamp-2">
          {title}
        </h3>
        <p className="mt-1 text-xs leading-snug text-text-secondary line-clamp-2">
          {subtitle}
        </p>
      </div>

      {footer}
    </motion.button>
  );
}
