"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Ellipsis } from "lucide-react";
import { capacityUsage } from "@/data/warehouse";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function CapacityUsageCard() {
  const options: ApexOptions = {
    chart: {
      type: "donut",
      sparkline: { enabled: true },
    },
    colors: ["#856DF3", "#FFFFFF"],
    stroke: { width: 0 },
    dataLabels: { enabled: false },
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total Usage",
              color: "#B5B5B5",
              fontSize: "12px",
              formatter: () => `${capacityUsage.totalUsagePercent}%`,
            },
            value: {
              show: true,
              color: "#FFFFFF",
              fontSize: "28px",
              fontWeight: 700,
            },
          },
        },
      },
    },
  };

  const series = [
    capacityUsage.loadedShelves,
    capacityUsage.emptyShelves,
  ];

  return (
    <div className="bg-[#292929] rounded-xl p-5 text-white h-full">
      <div className="flex justify-between items-center">
        <h4 className="text-[16px] font-semibold">Capacity Usage</h4>
        <Ellipsis size={16} className="text-white" />
      </div>

      <div className="flex justify-center mt-2">
        <Chart options={options} series={series} type="donut" width={180} />
      </div>

      <div className="flex justify-between mt-4 ">
        <div className="w-[80px] text-right">
          <p className="text-[11px] text-gray-3">Loaded</p>
          <p className="text-[14px] font-bold">{capacityUsage.loadedShelves} shelves</p>
        </div>
        <div className="w-[80px]">
          <p className="text-[11px] text-gray-3">Empty</p>
          <p className="text-[14px] font-bold">{capacityUsage.emptyShelves} shelves</p>
        </div>
      </div>
    </div>
  );
}