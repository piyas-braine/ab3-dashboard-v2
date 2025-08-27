import { useState, useEffect, useCallback } from "react";

type Position = {
  top: number;
  bottom: number;
  left: number;
};

export function useDropdownPosition<T extends HTMLElement, C extends HTMLElement>(
  target: React.RefObject<T | null> | T | null,
  isOpen: boolean,
  dropdownHeight: number = 0,
  offsetX: number = 0,
  offsetY: number = 0,
  scrollContainer?: React.RefObject<C | null> | C | null // 👈 pass table wrapper ref here
) {
  const [position, setPosition] = useState<Position>({
    top: 0,
    bottom: 0,
    left: 0,
  });
  const [ready, setReady] = useState(false);

  const updatePosition = useCallback(() => {
    const el: T | null =
      target instanceof HTMLElement ? target : target?.current ?? null;

    if (el) {
      const rect = el.getBoundingClientRect();

      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      setPosition({
        top: rect.bottom + offsetY + scrollY,
        bottom: rect.top - dropdownHeight - offsetY + scrollY,
        left: rect.left - offsetX + scrollX,
      });
      setReady(true);
    }
  }, [target, dropdownHeight, offsetX, offsetY]);

  // Attach/detach listeners
  useEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);

      const scroller: C | null =
        scrollContainer instanceof HTMLElement
          ? scrollContainer
          : scrollContainer?.current ?? null;

      if (scroller) {
        scroller.addEventListener("scroll", updatePosition);
      }

      return () => {
        window.removeEventListener("scroll", updatePosition);
        window.removeEventListener("resize", updatePosition);

        if (scroller) {
          scroller.removeEventListener("scroll", updatePosition);
        }
      };
    }
  }, [isOpen, updatePosition, scrollContainer]);

  // Extra: re-run when `target` changes
  useEffect(() => {
    if (isOpen) {
      updatePosition();
    }
  }, [target, isOpen, updatePosition]);

  return { position, ready };
}