"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ContentItem } from "@/lib/content";
import { MediaImage } from "./MediaImage";

type DetailViewProps = {
  item: ContentItem | null;
  onClose: () => void;
  onAction: (message: string) => void;
};

function PrimaryButton({
  label,
  doneLabel,
  onClick,
}: {
  label: string;
  doneLabel: string;
  onClick: () => void;
}) {
  const [done, setDone] = useState(false);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (done) return;
        setDone(true);
        onClick();
      }}
      onPointerDown={(e) => e.stopPropagation()}
      className={`relative z-20 mt-6 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3
        text-sm font-semibold transition-colors focus-ring
        ${
          done
            ? "border border-accent/40 bg-accent-dim text-accent"
            : "bg-accent text-bg-base hover:opacity-90 active:opacity-80"
        }`}
    >
      {done && <Check size={16} strokeWidth={2.5} />}
      {done ? doneLabel : label}
    </button>
  );
}

function DetailFacts({ item }: { item: ContentItem }) {
  const highlights = item.highlights ?? [];
  return (
    <div className="mt-4 space-y-4">
      <p className="text-sm leading-relaxed text-text-secondary">{item.blurb}</p>

      {(item.address || item.hours) && (
        <div className="space-y-2 rounded-inner border border-border-hairline bg-bg-base/50 px-3.5 py-3">
          {item.address && (
            <p className="text-xs leading-relaxed text-text-secondary">
              <span className="font-mono text-[10px] uppercase tracking-wide text-text-tertiary">
                Address
              </span>
              <br />
              <span className="text-text-primary">{item.address}</span>
            </p>
          )}
          {item.hours && (
            <p className="text-xs leading-relaxed text-text-secondary">
              <span className="font-mono text-[10px] uppercase tracking-wide text-text-tertiary">
                Hours
              </span>
              <br />
              <span className="text-text-primary">{item.hours}</span>
            </p>
          )}
        </div>
      )}

      {highlights.length > 0 && (
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-text-tertiary">
            {item.kind === "bite" ? "Menu highlights" : "Good to know"}
          </p>
          <ul className="mt-2 space-y-1.5">
            {highlights.map((line) => (
              <li
                key={line}
                className="flex gap-2 text-sm leading-snug text-text-secondary"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function DetailBody({
  item,
  onAction,
}: {
  item: ContentItem;
  onAction: (message: string) => void;
}) {
  switch (item.kind) {
    case "place":
      return (
        <>
          <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-inner">
            <MediaImage
              src={item.image}
              fill
              className="object-cover object-center"
              sizes="480px"
            />
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            {item.neighborhood} · {item.category}
          </p>
          <DetailFacts item={item} />
          <PrimaryButton
            label="Get directions"
            doneLabel="Directions ready"
            onClick={() => onAction(`Directions ready for ${item.title}`)}
          />
        </>
      );
    case "bite":
      return (
        <>
          <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-inner">
            <MediaImage
              src={item.image}
              fill
              className="object-cover object-center"
              sizes="480px"
            />
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            {item.cuisine} · {"₹".repeat(item.priceLevel)}
          </p>
          <DetailFacts item={item} />
          <PrimaryButton
            label="View menu"
            doneLabel="Menu opened"
            onClick={() => onAction(`Menu opened for ${item.title}`)}
          />
        </>
      );
    case "person":
      return (
        <>
          <div className="mt-4 flex justify-center">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border-hairline">
              <MediaImage
                src={item.image}
                fill
                className="object-cover object-center"
                sizes="112px"
              />
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
          <PrimaryButton
            label="Follow"
            doneLabel="Following"
            onClick={() => onAction(`Following ${item.title}`)}
          />
        </>
      );
    case "happening":
      return (
        <>
          <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-inner">
            <MediaImage
              src={item.image}
              fill
              className="object-cover object-center"
              sizes="480px"
            />
          </div>
          <p className="mt-4 font-mono text-xs uppercase tracking-wide text-accent">
            {item.date}
          </p>
          <p className="mt-2 text-sm text-text-secondary">{item.venue}</p>
          <DetailFacts item={item} />
          <PrimaryButton
            label="Add to plans"
            doneLabel="Added to plans"
            onClick={() => onAction(`Added ${item.title} to your plans`)}
          />
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
                <MediaImage
                  src={src}
                  fill
                  className="object-cover object-center"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            {item.topic} · {item.subtitle}
          </p>
          {item.blurb && (
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {item.blurb}
            </p>
          )}
          <PrimaryButton
            label="Join circle"
            doneLabel="Joined"
            onClick={() => onAction(`Joined ${item.title}`)}
          />
        </>
      );
  }
}

export function DetailView({ item, onClose, onAction }: DetailViewProps) {
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
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-black/60"
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
            onClick={(e) => e.stopPropagation()}
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
              <DetailBody key={item.id} item={item} onAction={onAction} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
