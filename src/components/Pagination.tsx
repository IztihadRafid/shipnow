"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  pageSizeOptions?: number[];
  onPageSizeChange: (size: number) => void;
}
function uiVisivlePages(currentPage: number, totalPages: number) {
  const pages: (number | "...")[] = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  }

  pages.push(1, 2, 3);
  if (currentPage > 4) pages.push("...");
  pages.push(totalPages);
  return pages;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalResults,
  pageSize,
  pageSizeOptions = [10, 12, 20, 50],
  onPageChange,
  onPageSizeChange,
}: PaginationProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const visiblePages = uiVisivlePages(currentPage, totalPages);

  return (
    <div className="xl:flex items-center justify-between mt-4  md:hidden">
      <div className="flex items-center gap-2 text-sm text-gray-2">
        <span>Show</span>
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-1 bg-white border border-gray-1/10 rounded-lg px-2 py-1 text-gray-1"
          >
            {pageSize}
            <ChevronDown size={14} />
          </button>
          {dropdownOpen && (
            <div className="absolute bottom-full mb-1 left-0 bg-white border border-gray-1/10 rounded-lg shadow-md overflow-hidden z-10">
              {pageSizeOptions.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    onPageSizeChange(size);
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-3 py-1.5 text-sm text-gray-1 hover:bg-gray-4"
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>
        <span>of {totalResults} results</span>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Previous page"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="w-7 h-7 flex items-center bg-white justify-center rounded-lg text-gray-2 disabled:opacity-40 hover:bg-gray-4"
        >
          <ChevronLeft size={16} />
        </button>

        {visiblePages.map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="w-7 h-7 flex items-center justify-center text-gray-2">
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`w-7 h-7 flex items-center justify-center rounded-lg py-1.5 px-2.5 text-sm font-medium ${
                page === currentPage ? "bg-purple-1 text-gray-3" : "text-gray-1 bg-white hover:bg-gray-4"
              }`}
            >
              {page}
            </button>
          )
        )}
        <button
          type="button"
          aria-label="Next page"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="w-7 h-7 flex items-center bg-white justify-center rounded-lg text-gray-2 disabled:opacity-40 hover:bg-gray-4"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}