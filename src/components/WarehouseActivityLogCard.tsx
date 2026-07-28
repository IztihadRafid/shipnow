import { Ellipsis, CheckCheck, UserPlus, Truck, FileText, SquareCheck, Server, Van, FilePlus } from "lucide-react";
import { warehouseActivityLog } from "@/data/warehouse";
const iconStyles = [
  { icon: SquareCheck, bg_color: "bg-gray-1" },
  { icon: Server, bg_color: "bg-purple-1" },
  { icon: Van, bg_color: "bg-gray-1" },
  { icon: FilePlus, bg_color: "bg-purple-1" },
];

export default function WarehouseActivityLogCard() {
  return (
    <div className="bg-white rounded-xl p-5 mt-5 ">
      <div className="flex justify-between items-center">
        <h4 className="text-[16px] font-semibold">Warehouse Activity Log</h4>
        <Ellipsis size={22} className="text-gray-2" />
      </div>

      <div className="mt-[15px]">
        {warehouseActivityLog.map((item, idx) => {
          const style = iconStyles[idx % iconStyles.length];
          const Icon = style.icon;
          return (
            <div
              key={item.id}
              className="flex gap-[15px] py-2.5 border-b border-gray-4 last:border-0"
            >
              <div
                className={`w-[34px] h-[34px] shrink-0 flex items-center justify-center rounded-[16px] ${style.bg_color}`}
              >
                <Icon size={18} className="text-white" />
              </div>
              <div>
                <p className="text-[12px] text-gray-1 font-semibold ">
                  <span className="text-purple-1 font-semibold">{item.user}</span>{" "}
                  {item.action} in Section {item.section} ({item.category})
                </p>
                <p className="text-[10px] text-gray-2 mt-0.5">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}