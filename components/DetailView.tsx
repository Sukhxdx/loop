"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { ContentItem } from "@/lib/content";
import { MediaImage } from "./MediaImage";

type DetailViewProps = {
  item: ContentItem | null;
  onClose: () => void;
};

function PrimaryButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-6 w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg-base
        transition-opacity hover:opacity-90 focus-ring"
    >
      {label}
    </button>
  );
}

function DetailBody({ item }: { item: ContentItem }) {
  switch (item.kind) {
    case "place":
      return (
        <>
          <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-inner">
            <MediaImage src={item.image} fill className="object-cover" sizes="480px" />
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            {item.neighborhood} · {item.category}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {item.subtitle}. Open late most nights — worth the short walk from the main lane.
          </p>
          <PrimaryButton label="Get directions" />
        </>
      );
    case "bite":
      return (
        <>
          <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-inner">
            <MediaImage src={item.image} fill className="object-cover" sizes="480px" />
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            {item.cuisine} · {"₹".repeat(item.priceLevel)}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {item.subtitle}. Expect a short wait during dinner rush.
          </p>
          <PrimaryButton label="View menu" />
        </>
      );
    case "person":
      return (
        <>
          <div className="mt-4 flex justify-center">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border-hairline">
              <MediaImage src={item.image} fill className="object-cover" sizes="112px" />
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-xs text-text-tertiary">
            {item.username}
          </p>
          <p className="mt-3 text-center text-sm leading-relaxed text-text-secondary">
            {item.bio ?? item.subtitle}
          </p>
          <div className="mt-5 flex justify-center gap-8 text-center">
            <div>
              <p className="font-mono text-sm text-text-primary">
                {(item.followers ?? 0).toLocaleString()}
              </p>
              <p className="text-xs text-text-tertiary">Followers</p>
            </div>
            <div>
              <p className="font-mono text-sm text-text-primary">
                {(item.following ?? 0).toLocaleString()}
              </p>
              <p className="text-xs text-text-tertiary">Following</p>
            </div>
            <div>
              <p className="font-mono text-sm text-text-primary">{item.mutuals}</p>
              <p className="text-xs text-text-tertiary">Mutuals</p>
            </div>
          </div>
          <PrimaryButton label="Follow" />
        </>
      );
    case "happening":
      return (
        <>
          <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-inner">
            <MediaImage src={item.image} fill className="object-cover" sizes="480px" />
          </div>
          <p className="mt-4 font-mono text-xs uppercase tracking-wide text-accent">
            {item.date}
          </p>
          <p className="mt-2 text-sm text-text-secondary">{item.venue}</p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {item.subtitle}
          </p>
          <PrimaryButton label="Add to plans" />
        </>
      );
    case "circle":
      return (
        <>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {item.memberAvatars.map((src, i) => (
              <div
                key={`${item.id}-m-${i}`}
                className="relative aspect-square overflow-hidden rounded-full border border-border-hairline"
              >
                <MediaImage src={src} fill className="object-cover" sizes="80px" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            {item.topic} · {item.subtitle}
          </p>
          <PrimaryButton label="Join circle" />
        </>
      );
  }
}

export function DetailView({ item, onClose }: DetailViewProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
          <motion.button
            type="button"
            aria-label="Close detail"
            className="absolute inset-0 bg-black/60 focus-ring"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            layoutId={`card-${item.id}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`detail-title-${item.id}`}
            className="relative z-10 flex max-h-[88vh] w-full max-w-lg flex-col overflow-hidden
              rounded-t-card border border-border-hairline bg-bg-surface shadow-card-lit
              sm:rounded-card"
            initial={reduceMotion ? false : { y: 24, opacity: 0.96 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { y: 16, opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0.15 }
                : { type: "spring", stiffness: 320, damping: 32 }
            }
          >
            <div className="flex items-start justify-between gap-4 border-b border-border-hairline px-5 py-4">
              <div className="min-w-0">
                <span className="inline-block rounded-full border border-border-hairline bg-bg-base/80 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-accent">
                  {item.tag}
                </span>
                <h2
                  id={`detail-title-${item.id}`}
                  className="mt-3 font-display text-3xl leading-tight text-text-primary"
                >
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-text-secondary">{item.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-full border border-border-hairline p-2 text-text-secondary
                  transition-colors hover:border-accent/40 hover:text-text-primary focus-ring"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5">
              <DetailBody item={item} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
