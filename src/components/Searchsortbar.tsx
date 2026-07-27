"use client";
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import ViewToggle, { ViewMode } from "@/components/ViewToggle";

export type SortOrder = "asc" | "desc";

interface SearchSortBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
}
export default function SearchSortBar({
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortChange,
  view,
  onViewChange,
}: SearchSortBarProps) {
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center bg-white gap-1.5 rounded-lg p-2.5 ">
        <Search size={16} className="text-gray-2 shrink-0" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by shipment"
          className="rounded-lg w-full bg-transparent outline-none text-sm text-gray-1 placeholder:text-gray-2"
        />
      </div>

      {/* table/grid view switcher goes here now, instead of the old funnel filter */}
      <ViewToggle view={view} onViewChange={onViewChange} />

      <div className="relative">
        <button
          type="button"
          onClick={() => setSortMenuOpen((prev) => !prev)}
          className="flex items-center justify-between bg-white rounded-lg px-3 py-2 w-[110px] text-[12px] text-gray-1"
        >
          {sortOrder === "asc" ? "Oldest first" : "Newest first"}
          <ChevronDown size={16} />
        </button>
        {sortMenuOpen && (
          <div className="absolute top-full mt-1 right-0 bg-white border border-gray-1/10 rounded-lg shadow-md overflow-hidden z-10 w-[110px]">
            <button
              type="button"
              onClick={() => {
                onSortChange("desc");
                setSortMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-[12px] text-gray-1 hover:bg-gray-4"
            >
              Newest
            </button>
            <button
              type="button"
              onClick={() => {
                onSortChange("asc");
                setSortMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-[12px] text-gray-1 hover:bg-gray-4"
            >
              Oldest
            </button>
          </div>
        )}
      </div>
    </div>
  );
}