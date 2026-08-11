"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SpotlightProps = {
  children: ReactNode;
  enabled?: boolean;
  onLitChange?: (litIds: Set<string>) => void;
  cardSelector?: string;
};

const SPOT_SIZE = 460;
const LIT_RADIUS = 120;

export function Spotlight({
  children,
  enabled = true,
  onLitChange,
  cardSelector = "[data-card-id]",
}: SpotlightProps) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasPointer, setHasPointer] = useState(false);
  const [active, setActive] = useState(false);
  const litRef = useRef<Set<string>>(new Set());
  const rafRef = useRef<number | null>(null);

  const rawX = useMotionValue(-9999);
  const rawY = useMotionValue(-9999);
  const x = useSpring(rawX, { stiffness: 90, damping: 28, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 90, damping: 28, mass: 0.6 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setHasPointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const showSpotlight = enabled && hasPointer && !reduceMotion;

  const measureLit = useCallback(
    (cx: number, cy: number) => {
      const root = containerRef.current;
      if (!root || !onLitChange) return;

      const next = new Set<string>();
      const nodes = root.querySelectorAll<HTMLElement>(cardSelector);
      nodes.forEach((node) => {
        const id = node.dataset.cardId;
        if (!id) return;
        const rect = node.getBoundingClientRect();
        const rootRect = root.getBoundingClientRect();
        const cardCx = rect.left - rootRect.left + rect.width / 2;
        const cardCy = rect.top - rootRect.top + rect.height / 2;
        const dist = Math.hypot(cardCx - cx, cardCy - cy);
        if (dist <= LIT_RADIUS) next.add(id);
      });

      const prev = litRef.current;
      let same = prev.size === next.size;
      if (same) {
        next.forEach((id) => {
          if (!prev.has(id)) same = false;
        });
      }
      if (same) {
        return;
      }
      litRef.current = next;
      onLitChange(next);
    },
    [cardSelector, onLitChange]
  );

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!showSpotlight || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    rawX.set(px - SPOT_SIZE / 2);
    rawY.set(py - SPOT_SIZE / 2);
    setActive(true);

    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => measureLit(px, py));
  };

  const handlePointerLeave = () => {
    setActive(false);
    litRef.current = new Set();
    onLitChange?.(new Set());
  };

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {showSpotlight && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute z-0 rounded-full"
          style={{
            width: SPOT_SIZE,
            height: SPOT_SIZE,
            x,
            y,
            opacity: active ? 1 : 0,
            background:
              "radial-gradient(circle, rgba(186,255,38,0.16) 0%, rgba(186,255,38,0.06) 35%, transparent 70%)",
            filter: "blur(90px)",
            transition: "opacity 0.35s ease",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
