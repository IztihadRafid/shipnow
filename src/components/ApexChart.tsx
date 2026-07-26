"use client";

import dynamic from "next/dynamic";
import { MoreHorizontal } from "lucide-react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const shipmentTypeData = [
  { label: "Road Freight", value: 46, count: "1,150 shipment", color: "#856DF3" },
  { label: "Air Freight", value: 28, count: "700 shipments", color: "#171717" },
  { label: "Ocean Freight", value: 17, count: "425 shipments", color: "#757575" },
  { label: "Rail Freight", value: 9, count: "225 shipments", color: "#D9D9D9" },
];

const totalShipments = "2,500";

export default function ShipmentTypeChart() {
  const series = shipmentTypeData.map((d) => d.value);
  const colors = shipmentTypeData.map((d) => d.color);

  const options = {
    chart: { type: "donut" as const },
    labels: shipmentTypeData.map((d) => d.label),
    colors,
    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total Shipment",
              color: "#757575",
              fontSize: "13px",
              formatter: () => totalShipments,
            },
            value: {
              fontSize: "28px",
              fontWeight: 700,
              color: "#171717",
            },
          },
        },
      },
    },
    tooltip: { enabled: true },
  };

  return (
    <div className="bg-gray-3 rounded-xl p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-1">Shipment Type</h3>
        <button aria-label="More options" className="text-gray-2">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="flex justify-center">
        <ReactApexChart options={options} series={series} type="donut" width={220} />
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4">
        {shipmentTypeData.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-semibold shrink-0"
              style={{ backgroundColor: item.color }}
            >
              {item.value}%
            </div>
            <div>
              <p className="text-sm font-medium text-gray-1">{item.label}</p>
              <p className="text-xs text-gray-2">{item.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}