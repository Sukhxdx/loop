"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ToastProps = {
  message: string | null;
  onDismiss: () => void;
};

export function Toast({ message, onDismiss }: ToastProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!message) return;
    const t = window.setTimeout(onDismiss, 2200);
    return () => window.clearTimeout(t);
  }, [message, onDismiss]);

  if (!mounted) return null;

  return createPortal(
    <div className="pointer-events-none fixed inset-x-0 bottom-8 z-[100] flex justify-center px-4">
      <AnimatePresence>
        {message && (
          <motion.div
            key={message}
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto rounded-full border border-accent/40 bg-bg-surface px-5 py-3
              text-sm font-medium text-text-primary shadow-card-lit"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    document.body
  );
}
