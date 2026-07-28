import { warehouseStorage } from "@/data/warehouse";
import { ArrowUpDown, ChevronDown, Funnel } from "lucide-react";
export default function WarehouseStorageTable() {
  return (
    <div className="bg-white rounded-xl p-4 mt-4">
      <div className="flex justify-between items-center">
        <h4 className="text-[16px] font-semibold">Warehouse Storage</h4>
        <div className="flex items-center gap-2 ">
          <button className="flex items-center gap-1 text-[11px] text-gray-1 bg-gray-5  rounded-lg px-3 py-2">
            <Funnel size={16} />
            <span className="text-[12px] font-semibold">Filter</span>
            <ChevronDown size={16} />
          </button>
          <div className="flex items-center gap-1 text-[11px] text-gray-2">
            Sort by:
            <button className="flex items-center gap-1 text-[11px] text-gray-1 bg-gray-5  rounded-lg px-3 py-2">
              Section
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      <table className="w-full text-left mt-4">
        <thead>
          <tr className="text-gray-2 text-[11px] border-b border-gray-4">
            <th className="p-2.5">
              <div className="flex items-center gap-1 w-[37px]">
                <span className="text-[9px]">Floor </span>
                <ArrowUpDown size={12} />
              </div>
            </th>
            <th className="p-2.5">
              <div className="flex items-center gap-1 w-[47px]">
                <span className="text-[9px]">Section </span>
                <ArrowUpDown size={12} />
              </div>
            </th>
            <th className="p-2.5">
              <div className="flex items-center gap-1 w-[96px]">
                <span className="text-[9px]">Category </span>
                <ArrowUpDown size={12} />
              </div>
            </th>
            <th className="p-2.5">
              <div className="flex items-center gap-1 w-[120px]">
                <span className="text-[9px]">Storage Used </span>
                <ArrowUpDown size={12} />
              </div>
            </th>
            <th className="p-2.5">
              <div className="flex items-center gap-1 w-[64px]">
                <span className="text-[9px]">Percentage </span>
                <ArrowUpDown size={12} />
              </div>
            </th>
            <th className="p-2.5">
              <div className="flex items-center gap-1 w-[84px]">
                <span className="text-[9px]">Available Space </span>
                <ArrowUpDown size={12} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {warehouseStorage.map((row) => (
            <tr key={row.id} className="border-b border-gray-4 px-2.5 py-3 last:border-0 ">
              <td className=" text-[12px] w-[37px] text-center">{row.floor}</td>
              <td className="text-[12px]  w-[47px] text-center">
                {row.section}
              </td>
              <td className="text-[12px]  w-[96px] ">
                {row.category}
              </td>
              
              <td className="py-3 px-2 w-[120px]">
                <div className="w-full h-3 bg-gray-4 rounded-[3px] ">
                  <div
                    className="h-3 bg-purple-1 rounded-[3px]"
                    style={{ width: `${row.percentUsed}%` }}
                  />
                </div>
              </td>
              <td className="text-[12px]  w-[64px] ">
                {row.percentUsed}%
              </td>
              <td className="text-[12px]  w-[84px] ">
             <span className="text-[12px] font-semibold"> {row.availableSpace}</span>  
                <span className="text-gray-2">/{row.capacity}</span>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
