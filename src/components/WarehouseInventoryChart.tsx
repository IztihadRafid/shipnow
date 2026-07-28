import { warehouseInventory } from "@/data/warehouse";

const barStyles = [
  { bg: "#856DF3", striped: false },
  { bg: "#856DF3", striped: true },
  { bg: "#1A1A1A", striped: false },
  { bg: "#9E9E9E", striped: true },
  { bg: "#9E9E9E", striped: false },
  { bg: "#B5B5B5", striped: true },
];

export default function WarehouseInventoryChart() {
  const categories = warehouseInventory.categories;

  return (
    <div className="bg-white rounded-xl p-5 h-full flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <h4 className="text-[14px] font-bold">Warehouse Inventory</h4>
        <span className="text-gray-2 text-lg leading-none">···</span>
      </div>
      <p className="text-[24px] font-bold mt-1">
        {warehouseInventory.totalPackages.toLocaleString()}{" "}
        <span className="text-[12px] font-normal text-gray-2">packages</span>
      </p>

      <div className="grid grid-cols-6 mt-4">
        {categories.map((c, i) => {
          const style = barStyles[i];
          return (
            <div
              key={c.id}
              className={`flex flex-col items-center px-1 ${
                i !== 0 ? "border-l border-gray-4" : ""
              }`}
            >
              <p className="text-[10px] text-gray-2 text-center h-7 flex items-center">
                {c.name}
              </p>
             
              <div className="w-full max-w-[66px] h-[132px] flex items-end">
                <div
                  className="w-full rounded-[4px] "
                  style={{
                    height: `${c.percent}%`,
                    backgroundColor: style.bg,
                    backgroundImage: style.striped
                      ? `repeating-linear-gradient(135deg, transparent, transparent 3px, rgba(255,255,255,0.6) 3px, rgba(255,255,255,0.6) 5px)`
                      : undefined,
                  }}
                />
              </div>

              <p className="text-[10px] text-gray-1 font-semibold mt-2 whitespace-nowrap">
                {c.percent}%{" "}
                <span className="text-gray-2 font-normal">
                  · {c.units.toLocaleString()}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}