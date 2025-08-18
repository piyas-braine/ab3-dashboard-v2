import { useState, useEffect, useCallback } from "react";

type Position = {
  top: number;
  bottom: number;
  left: number;
};

export function useDropdownPosition<T extends HTMLElement>(
  target: React.RefObject<T | null> | T | null,
  isOpen: boolean,
  dropdownHeight: number = 0,
  offsetX: number = 0,
  offsetY: number = 0
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
      setPosition({
        top: rect.bottom + offsetY + window.scrollY,
        bottom: rect.top - dropdownHeight - offsetY + window.scrollY,
        left: rect.left - offsetX + window.scrollX,
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
    }
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, updatePosition]);

  // Extra: re-run when `target` changes
  useEffect(() => {
    if (isOpen) {
      updatePosition();
    }
  }, [target, isOpen, updatePosition]);

  return { position, ready };
}