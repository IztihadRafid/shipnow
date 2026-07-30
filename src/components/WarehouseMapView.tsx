"use client";
import { warehouseMap } from "@/data/warehouse";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function WarehouseMapView() {
  const pathname = usePathname();
  return (
    <div className="bg-white rounded-xl p-5 mt-4">
      <section className="md:flex justify-between items-center rounded-lg hidden">
        <div className="bg-white ">
          <h4 className="text-[16px] font-semibold">Warehouse Map</h4>
        </div>

        <div className="flex justify-between items-center bg-gray-5 rounded-xl">
          <Link
            href="/floo1"
            className={`flex items-center rounded-lg py-[7px] px-5 text-[12px] ${
              pathname === "/warehouse"
                ? "bg-gray-1 text-gray-3"
                : "bg-gray-5 text-black"
            }`}
          >
            Floor 1
          </Link>
          <Link
            href="/flool2"
            className={`flex items-center rounded-lg py-[7px] px-[26px] text-[12px] ${
              pathname === "/flool2"
                ? "bg-gray-1 text-gray-3"
                : "bg-gray-5 text-black"
            }`}
          >
            Floor 2
          </Link>

          <Link
            href="/flool3"
            className={`flex items-center rounded-lg py-[7px] pr-5 text-[12px] ${
              pathname === "/flool3"
                ? "bg-gray-1 text-gray-3"
                : "bg-gray-5 text-black"
            }`}
          >
            Floor 3
          </Link>
        </div>
      </section>

      <div className="bg-gray-5 rounded-xl p-4 mt-4">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {warehouseMap?.sections.map((section, index) => {
            const isSecondToLast = index === warehouseMap?.sections.length- 2
            const isLast = index === warehouseMap?.sections.length - 1
            const spanClass = isSecondToLast
              ? " xl:col-span-3 col-span-2": isLast ? "col-span-2  xl:col-span-1" : "";
            return (
              <div
                key={section.id}
                className={`bg-white rounded-xl p-4 ${spanClass}`}
              >
                <h5 className="text-[14px] font-bold">{section.category}</h5>
                <div className="flex flex-wrap gap-2.5 mt-3">
                  {section?.shelves.map((shelf) => {
                    const isFull = false;
                    return (
                      <div
                        key={shelf}
                        className={`flex items-center justify-center rounded-[6px] p-2 border text-[11px] font-medium ${
                          isFull
                            ? "bg-gray-5 text-gray-2 rounded-[8px] p-1"
                            : "bg-purple-1/10 border-purple-1/30 text-gray-1rounded-[8px] p-1"
                        }`}
                      >
                        {shelf}
                      </div>
                    );
                  })}
                </div>
                <p className="text-[9px] text-gray-2 mt-3  ">
                  <span className="mr-1">Available Space</span>
                  <span className=" text-gray-1 ">
                    <span className="text-black font-bold mx-0.5">
                      {section.availableSpace}/
                    </span>
                    <span>{section.capacity}</span>
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center ml-2 gap-1.5 mt-4 rounded-[8px]">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-[3px] bg-purple-1/40 " />
          <span className="text-[10px] text-gray-2">Available</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-[3px] bg-gray-4 " />
          <span className="text-[10px] text-gray-2">Full</span>
        </div>
      </div>
    </div>
  );
}
