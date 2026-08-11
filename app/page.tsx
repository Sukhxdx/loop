"use client";

import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { content, type ContentItem } from "@/lib/content";
import {
  DiscoveryGrid,
  FILTERS,
  type FilterChip,
} from "@/components/DiscoveryGrid";
import { Spotlight } from "@/components/Spotlight";
import { DetailView } from "@/components/DetailView";

const FILTER_LABELS: Record<FilterChip, string> = {
  all: "All",
  place: "Places",
  bite: "Bites",
  person: "People",
  happening: "Happenings",
  circle: "Circles",
};

export default function HomePage() {
  const [filter, setFilter] = useState<FilterChip>("all");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<ContentItem | null>(null);
  const [litIds, setLitIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 400);
    return () => window.clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return content.filter((item) => {
      if (filter !== "all" && item.kind !== filter) return false;
      if (!q) return true;
      const hay = `${item.title} ${item.subtitle} ${item.tag}`.toLowerCase();
      return hay.includes(q);
    });
  }, [filter, query]);

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <header className="mb-8 sm:mb-10">
        <h1
          className="font-display text-text-primary"
          style={{
            fontSize: "clamp(40px, 6vw, 88px)",
            lineHeight: 1.05,
          }}
        >
          Good evening.
          <br />
          Here&apos;s Pune tonight.
        </h1>

        <label className="relative mt-8 block max-w-xl">
          <span className="sr-only">Search</span>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary"
            size={18}
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search places, people, plans…"
            className="w-full rounded-full border border-border-hairline bg-bg-surface py-3.5 pl-11 pr-4
              text-sm text-text-primary placeholder:text-text-tertiary
              transition-colors hover:border-white/15 focus-ring"
          />
        </label>

        <div
          className="mt-5 flex gap-2 overflow-x-auto scrollbar-none pb-1"
          role="tablist"
          aria-label="Content filters"
        >
          {FILTERS.map((chip) => {
            const active = filter === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(chip.id)}
                className={`
                  shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-ring
                  ${
                    active
                      ? "bg-accent text-bg-base"
                      : "border border-border-hairline text-text-secondary hover:border-white/15 hover:text-text-primary"
                  }
                `}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </header>

      <Spotlight enabled={!loading && !selected} onLitChange={setLitIds}>
        <DiscoveryGrid
          items={filtered}
          loading={loading}
          filterLabel={FILTER_LABELS[filter]}
          litIds={litIds}
          onSelect={setSelected}
        />
      </Spotlight>

      <DetailView item={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
