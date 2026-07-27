"use client";
import { useState } from "react";
import { Filter, List, LayoutGrid, ChevronDown, SlidersHorizontal } from "lucide-react";
interface ViewToggleProps {
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
}
export type ViewMode = "table" | "grid";
export default function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="hidden md:flex items-center gap-1.5 bg-white rounded-lg px-3 py-2 text-[12px] text-gray-1"
      >
        <Filter size={14} />
        Filter
        <ChevronDown size={14} />
      </button>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="md:hidden flex items-center gap-1.5 bg-white rounded-lg px-3 py-2 text-[12px] text-gray-1"
      >
        <SlidersHorizontal size={22} />
        
        
      </button>
      {open && (
        <div className="absolute top-full mt-1 right-0 bg-white border border-gray-1/10 rounded-lg shadow-md overflow-hidden z-10 w-[110px]">
          <button
            type="button"
            onClick={() => {
              onViewChange("table");
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full text-left px-3 py-2 text-[12px] text-gray-1 hover:bg-gray-4"
          >
            <List size={14} /> Table
          </button>
          <button
            type="button"
            onClick={() => {
              onViewChange("grid");
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full text-left px-3 py-2 text-[12px] text-gray-1 hover:bg-gray-4"
          >
            <LayoutGrid size={14} /> Grid
          </button>
        </div>
      )}
    </div>
  );
}
