"use client";

import { Card } from "./Card";
import { MediaImage } from "./MediaImage";
import type {
  BiteItem,
  CircleItem,
  HappeningItem,
  PersonItem,
  PlaceItem,
} from "@/lib/content";

type SharedProps = {
  onSelect: () => void;
  lit?: boolean;
};

export function PlaceCard({
  item,
  onSelect,
  lit,
}: { item: PlaceItem } & SharedProps) {
  return (
    <Card
      id={item.id}
      tag={item.tag}
      title={item.title}
      subtitle={`${item.neighborhood} · ${item.category}`}
      onClick={onSelect}
      lit={lit}
    >
      <div className="relative mt-8 h-[58%] min-h-[72px] w-full flex-1 overflow-hidden rounded-inner">
        <MediaImage
          src={item.image}
          fill
          sizes="(max-width:640px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
    </Card>
  );
}

export function BiteCard({
  item,
  onSelect,
  lit,
}: { item: BiteItem } & SharedProps) {
  return (
    <Card
      id={item.id}
      tag={item.tag}
      title={item.title}
      subtitle={`${item.cuisine} · ${"₹".repeat(item.priceLevel)}`}
      onClick={onSelect}
      lit={lit}
    >
      <div className="relative mt-8 h-[58%] min-h-[72px] w-full flex-1 overflow-hidden rounded-inner">
        <MediaImage
          src={item.image}
          fill
          sizes="(max-width:640px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
    </Card>
  );
}

export function PersonCard({
  item,
  onSelect,
  lit,
}: { item: PersonItem } & SharedProps) {
  return (
    <Card
      id={item.id}
      tag={item.tag}
      title={item.title}
      subtitle={item.subtitle}
      onClick={onSelect}
      lit={lit}
      footer={
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute bottom-4 right-4 z-20 rounded-full border border-border-hairline
            bg-bg-base/90 px-3 py-1 text-[11px] font-medium text-text-primary
            transition-colors hover:border-accent/40 hover:bg-accent-dim focus-ring"
        >
          Follow
        </button>
      }
    >
      <div className="mt-6 flex flex-1 items-center justify-center">
        <div className="relative h-20 w-20 overflow-hidden rounded-full border border-border-hairline sm:h-24 sm:w-24">
          <MediaImage
            src={item.image}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
      </div>
    </Card>
  );
}

export function HappeningCard({
  item,
  onSelect,
  lit,
}: { item: HappeningItem } & SharedProps) {
  return (
    <Card
      id={item.id}
      tag={item.tag}
      title={item.title}
      subtitle={item.venue}
      onClick={onSelect}
      lit={lit}
    >
      <div className="relative mt-8 h-[58%] min-h-[72px] w-full flex-1 overflow-hidden rounded-inner">
        <MediaImage
          src={item.image}
          fill
          sizes="(max-width:640px) 50vw, 25vw"
          className="object-cover"
        />
        <span
          className="absolute bottom-2 left-2 rounded-full border border-border-hairline
            bg-bg-base/85 px-2.5 py-1 font-mono text-[10px] font-medium text-text-primary backdrop-blur-sm"
        >
          {item.date}
        </span>
      </div>
    </Card>
  );
}

export function CircleCard({
  item,
  onSelect,
  lit,
}: { item: CircleItem } & SharedProps) {
  const avatars = item.memberAvatars.slice(0, 4);

  return (
    <Card
      id={item.id}
      tag={item.tag}
      title={item.title}
      subtitle={`${item.topic} · ${item.subtitle}`}
      onClick={onSelect}
      lit={lit}
    >
      <div className="mt-6 flex flex-1 items-center justify-center">
        <div className="relative h-24 w-36">
          {avatars.map((src, i) => (
            <div
              key={`${item.id}-av-${i}`}
              className="absolute top-1/2 h-14 w-14 -translate-y-1/2 overflow-hidden rounded-full
                border-2 border-bg-surface shadow-card"
              style={{
                left: `${i * 22}px`,
                zIndex: avatars.length - i,
                transform: `translateY(-50%) rotate(${(i - 1.5) * 6}deg)`,
              }}
            >
              <MediaImage src={src} fill sizes="56px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
