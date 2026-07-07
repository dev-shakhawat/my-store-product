"use client";

import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useState } from "react";

export interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  contentClassName?: string;
  onToggle?: (isOpen: boolean) => void;
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
  className = "",
  contentClassName = "",
  onToggle,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen((prev) => {
      const next = !prev;
      onToggle?.(next);
      return next;
    });
  };

  return (
    <div
      className={`overflow-hidden rounded-xl  ${className}`}
    >
      <button
        type="button"
        onClick={handleToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <h2 className="text-2xl font-medium  ">{title}</h2>

        {/* Animated Plus */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="relative h-6 w-6 shrink-0"
        >
          {/* Horizontal */}
          <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-black" />

          {/* Vertical */}
          <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rounded-full bg-black" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden"
          >
            <div className={`px-5 pb-5 ${contentClassName}`}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
