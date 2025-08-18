import React from "react";
import PaginationLeftArrow from "@/components/Svgs/PaginationLeftArrow";
import PaginationRightArrow from "@/components/Svgs/PaginationRightArrow";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const visibleCount = Math.min(5, totalPages);

  // compute sliding window start
  let start = 1;
  if (totalPages > visibleCount) {
    const half = Math.floor(visibleCount / 2); // 2 for visibleCount = 5
    start = currentPage - half;
    if (start < 1) start = 1;
    if (start + visibleCount - 1 > totalPages)
      start = totalPages - visibleCount + 1;
  }

  const pages = Array.from({ length: visibleCount }, (_, i) => start + i);
  const showLeftDots = start > 1;
  const showRightDots = start + visibleCount - 1 < totalPages;

  return (
    <div className="flex items-center space-x-[5px]">
      {/* Prev */}
      <button
        aria-label="Previous page"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F0F4FF] disabled:opacity-50"
        disabled={currentPage === 1}
      >
        <div className="w-[22px] h-[22px]">
          <PaginationLeftArrow />
        </div>
      </button>

      {/* left dots if pages exist before window */}
      {showLeftDots && <span className="px-2 select-none">...</span>}

      {/* page buttons (always numbers only) */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
            currentPage === p
              ? "bg-bg-primary-blue text-white"
              : "bg-[#F0F4FF] text-[#000000DE]"
          } text-[14px] leading-[23px] font-normal`}
          aria-current={currentPage === p ? "page" : undefined}
        >
          {p}
        </button>
      ))}

      {/* right dots if pages exist after window */}
      {showRightDots && <span className="px-2 select-none">...</span>}

      {/* Next */}
      <button
        aria-label="Next page"
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F0F4FF] disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        <div className="w-[22px] h-[22px]">
          <PaginationRightArrow />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
