"use client";
interface StatusTabsProps {
  activeStatus: string;
  onStatusChange: (status: string) => void;
}
const statusOptions = ["All", "Delivered", "In Transit", "Processing", "Out for Delivery"]; 
export default function StatusTabs({ activeStatus, onStatusChange }: StatusTabsProps) {
  return (
    <div className="flex bg-white rounded-xl gap-0.5 p-1 flex-wrap">
      {statusOptions.map((status) => (
        <button
          key={status}
          type="button"
          onClick={() => onStatusChange(status)}
          className={`py-[7px] px-3 text-[12px] rounded-lg ${
            activeStatus === status ? "bg-black text-gray-3" : "bg-white text-gray-2"
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
}