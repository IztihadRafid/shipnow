"use client";
import { MoreHorizontal, FileWarning, MapPin, CloudRain, ArrowUpRight } from "lucide-react";
const alertStats = [
  { label: "Customs Clearance Delay", count: 5 },
  { label: "Incorrect Address Provided", count: 4 },
  { label: "Weather-Related Hold", count: 3 },
];
const alertList = [
  {
    icon: FileWarning,
    title: "Customs Clearance Delay",
    shipmentId: "#SH8743921",
    meta: "Ocean Freight · Mar 20",
  },
  {
    icon: MapPin,
    title: "Incorrect Address Provided",
    shipmentId: "#SH8725810",
    meta: "Road Freight · Mar 20",
  },
  {
    icon: CloudRain,
    title: "Weather-Related Hold",
    shipmentId: "#SH8790043",
    meta: "Air Freight · Mar 19",
  },
  {
    icon: FileWarning,
    title: "Incorrect Address Provided",
    shipmentId: "#SH8716654",
    meta: "Rail Freight · Mar 18",
  },
];
export default function ShipAlertCard() {
  return (
    <div className="bg-gray-3 rounded-xl p-4 w-[299px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-1">Shipment Alerts</h3>
        <button aria-label="More options" className="text-gray-2">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-gray-1">12</span>
        <span className="text-sm text-gray-2">Delays Detected</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {alertStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-purple-1/10 rounded-lg p-3 flex flex-col items-center text-center gap-1"
          >
            <span className="text-xl font-bold text-gray-1">{stat.count}</span>
            <span className="text-[11px] text-gray-2 leading-tight">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col divide-y divide-gray-1/10">
        {alertList.map((alert, index) => (
          <div key={index} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <alert.icon size={18} className="text-gray-2 shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-1">{alert.title}</p>
                <p className="text-xs text-gray-2">
                  <span className="text-purple-1">{alert.shipmentId}</span> · {alert.meta}
                </p>
              </div>
            </div>
            <button aria-label={`View ${alert.title}`} className="text-gray-2 shrink-0">
              <ArrowUpRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}