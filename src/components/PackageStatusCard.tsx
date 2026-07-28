"use client";
import { useState } from "react";
import { Ellipsis, Package } from "lucide-react";
import { packageStatus } from "@/data/warehouse";

const statusStyles= {
  Sent: "bg-purple-1/10 text-purple-1",
  Received: "bg-green-100 text-green-600",
  Expected: "bg-gray-5 text-gray-1",
};



function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    minute: "2-digit",
    hour: "numeric",
    
  }).replace(",", " -");
}

export default function PackageStatusCard() {
    const tabs = ["All", "Expected", "Received", "Sent"];
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? packageStatus.packages
      : packageStatus.packages.filter((p) => p.status === activeTab);

  return (
    <div className="bg-white rounded-xl p-5 ">
      <div className="flex justify-between items-center">
        <h4 className="text-[16px] font-semibold">Package Status</h4>
        <Ellipsis size={22} className="text-gray-2" />
      </div>

      <div className="flex bg-gray-5 rounded-lg p-1 mt-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[11px] py-[7px] px-[26px] flex-1 rounded-lg ${
              activeTab === tab
                ? "bg-gray-1 text-white font-semibold"
                : "text-gray-2"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-3">
        {filtered.map((pack) => (
          <div
            key={pack.id}
            className="flex items-center justify-between py-2.5 border-b border-gray-4 last:border-0"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 flex items-center justify-center bg-purple-1/15 rounded-[6px]">
                <Package size={22} className="text-gray-1" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-1">{pack.id}</p>
                <p className="text-[11px] text-gray-2">{formatDate(pack.date)}</p>
              </div>
            </div>
            <span
              className={`text-[11px] font-semibold rounded-full px-2.5 py-1 ${statusStyles[pack.status]}`}
            >
              {pack.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}