"use client";

import { LayoutGroup, motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { ContentItem, ContentKind } from "@/lib/content";
import {
  BiteCard,
  CircleCard,
  HappeningCard,
  PersonCard,
  PlaceCard,
} from "./cards";

const spanClass: Record<1 | 2 | 3 | 4, string> = {
  1: "col-span-1 row-span-1",
  2: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-1",
  3: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
  4: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2",
};

type DiscoveryGridProps = {
  items: ContentItem[];
  loading?: boolean;
  filterLabel?: string;
  litIds?: Set<string>;
  onSelect: (item: ContentItem) => void;
};

function SkeletonCard({ weight }: { weight: 1 | 2 | 3 | 4 }) {
  return (
    <div
      className={`${spanClass[weight]} overflow-hidden rounded-card border border-border-hairline bg-bg-surface p-4`}
    >
      <div className="skeleton-shimmer mb-3 h-5 w-16 rounded-full" />
      <div className="skeleton-shimmer mb-3 h-[55%] min-h-[64px] w-full rounded-inner" />
      <div className="skeleton-shimmer mb-2 h-3.5 w-3/4 rounded" />
      <div className="skeleton-shimmer h-3 w-1/2 rounded" />
    </div>
  );
}

function renderCard(
  item: ContentItem,
  onSelect: (item: ContentItem) => void,
  lit: boolean
) {
  const props = {
    onSelect: () => onSelect(item),
    lit,
  };
  switch (item.kind) {
    case "place":
      return <PlaceCard item={item} {...props} />;
    case "bite":
      return <BiteCard item={item} {...props} />;
    case "person":
      return <PersonCard item={item} {...props} />;
    case "happening":
      return <HappeningCard item={item} {...props} />;
    case "circle":
      return <CircleCard item={item} {...props} />;
  }
}

export function DiscoveryGrid({
  items,
  loading = false,
  filterLabel = "this filter",
  litIds,
  onSelect,
}: DiscoveryGridProps) {
  const reduceMotion = useReducedMotion();

  if (loading) {
    const skeletonWeights: Array<1 | 2 | 3 | 4> = [
      4, 1, 2, 1, 3, 1, 1, 2, 1, 4, 1, 1,
    ];
    return (
      <div
        className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{ gridAutoFlow: "dense" }}
        aria-busy="true"
        aria-label="Loading discovery grid"
      >
        {skeletonWeights.map((w, i) => (
          <SkeletonCard key={`sk-${i}`} weight={w} />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-sm tracking-wide text-text-primary">
          Nothing under {filterLabel} nearby yet.
        </p>
        <p className="mt-2 max-w-sm text-sm text-text-secondary">
          Try Places, or widen your search.
        </p>
      </div>
    );
  }

  return (
    <LayoutGroup>
      <motion.div
        className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{ gridAutoFlow: "dense" }}
        layout
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              data-card-id={item.id}
              layout
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 12 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96 }
              }
              transition={
                reduceMotion
                  ? { duration: 0.15 }
                  : {
                      layout: { type: "spring", stiffness: 380, damping: 34 },
                      opacity: { duration: 0.28 },
                      y: {
                        duration: 0.35,
                        delay: Math.min(index * 0.04, 0.48),
                      },
                    }
              }
              className={`min-h-0 ${spanClass[item.weight]}`}
            >
              {renderCard(item, onSelect, litIds?.has(item.id) ?? false)}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
}

export type FilterChip = "all" | ContentKind;

export const FILTERS: { id: FilterChip; label: string }[] = [
  { id: "all", label: "All" },
  { id: "place", label: "Places" },
  { id: "bite", label: "Bites" },
  { id: "person", label: "People" },
  { id: "happening", label: "Happenings" },
  { id: "circle", label: "Circles" },
];
