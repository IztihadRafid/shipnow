"use client";

import dynamic from "next/dynamic";
import { ArrowUp, ChevronDown } from "lucide-react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const monthlyData = [
  { x: "Jan", y: 1800 },
  { x: "Feb", y: 1400 },
  { x: "Mar", y: 2200 },
  { x: "Apr", y: 1600 },
  { x: "May", y: 3124 },
  { x: "Jun", y: 2600 },
  { x: "Jul", y: 3400 },
  { x: "Aug", y: 3800 },
];

export default function ShipmentStatisticChart() {
  const series = [{ name: "Shipments", data: monthlyData }];

  const options = {
    chart: {
      type: "area" as const,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "stepline" as const,
      width: 2,
      colors: ["#171717"],
    },
    fill: {
      type: "solid",
      colors: ["#F1EEFD"],
    },
    colors: ["#F1EEFD"],
    dataLabels: { enabled: false },
    grid: { show: false },
    xaxis: {
      categories: monthlyData.map((d) => d.x),
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#757575", fontSize: "12px" } },
    },
    yaxis: {
      labels: {
        style: { colors: "#757575", fontSize: "12px" },
        formatter: (val: number) => `${(val / 1000).toFixed(1)}K`,
      },
    },
    annotations: {
      points: [
        {
          x: "May",
          y: 3124,
          marker: { size: 6, fillColor: "#856DF3", strokeColor: "#fff", strokeWidth: 2 },
          label: {
            borderColor: "transparent",
            offsetY: -12,
            style: {
              background: "#856DF3",
              color: "#fff",
              fontSize: "12px",
              fontWeight: 600,
              padding: { left: 10, right: 10, top: 2, bottom: 2 },
            },
            text: "May 2030\n3,124",
          },
        },
      ],
      xaxis: [
        {
          x: "May",
          borderColor: "#856DF3",
          fillColor: "#856DF3",
          opacity: 0.15,
        },
      ],
    },
    tooltip: { enabled: false },
  };

  return (
    <div className="bg-gray-3 rounded-xl p-4 w-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-1 text-[16px]">Shipment Statistic</h3>
        <button className="flex items-center gap-1 bg-gray-5 text-[12px] text-gray-2 border border-gray-1/10 rounded-lg ">
          Last Year <ChevronDown size={14} />
        </button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-gray-1">4,352</span>
        <span className="flex items-center gap-0.5 text-[10px] font-medium bg-[#d9f9e7] text-[#007837] rounded-full px-2 py-0.5">
          <ArrowUp size={12} /> 8.7%
        </span>
      </div>

      <ReactApexChart options={options} series={series} type="area" height={200} />
    </div>
  );
}