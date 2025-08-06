"use client";

import { useEffect, useRef, useState } from "react";

const TableScrollGrabber = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (scrollRef.current) {
        const hasOverflow =
          scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
        setIsOverflowing(hasOverflow);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    // Only prevent default if we're starting a drag
    if (isOverflowing) {
      e.preventDefault();
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);

      // Add selection prevention to document only during drag
      document.body.style.userSelect = "none";
      document.body.style.webkitUserSelect = "none";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Remove selection prevention from document
    document.body.style.userSelect = "";
    document.body.style.webkitUserSelect = "";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const getCursorClasses = () => {
    if (!isOverflowing) return "";
    return isDragging ? "cursor-grabbing" : "cursor-grab";
  };

  return (
    <div
      ref={scrollRef}
      className={`overflow-x-auto scroll-smooth  ${getCursorClasses()}`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default TableScrollGrabber;