"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

type ToastProps = {
  message: string | null;
  onDismiss: () => void;
};

export function Toast({ message, onDismiss }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const t = window.setTimeout(onDismiss, 2000);
    return () => window.clearTimeout(t);
  }, [message, onDismiss]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4">
      <AnimatePresence>
        {message && (
          <motion.div
            key={message}
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto rounded-full border border-border-hairline bg-bg-surface px-4 py-2.5
              text-sm text-text-primary shadow-card"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
