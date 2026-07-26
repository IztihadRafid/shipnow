"use client";

import dynamic from "next/dynamic";
import { ArrowUp, ChevronDown } from "lucide-react";

// ApexCharts touches `window`, so it can only load in the browser
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Mock data — swap with real values once available
const monthlyProfitData = [
  { month: "Jan", revenue: 45000, cost: 20000 },
  { month: "Feb", revenue: 62000, cost: 25000 },
  { month: "Mar", revenue: 78000, cost: 30000 },
  { month: "Apr", revenue: 60000, cost: 24000 },
  { month: "May", revenue: 87524, cost: 45680 },
  { month: "Jun", revenue: 55000, cost: 22000 },
  { month: "Jul", revenue: 70000, cost: 28000 },
  { month: "Aug", revenue: 82000, cost: 33000 },
];

// Which month gets the "highlighted" dark colors — everything else stays pale
const HIGHLIGHTED_MONTH = "May";

// Colors, kept in one place so they're easy to swap for real tokens later
const COLORS = {
  revenueActive: "#856DF3",
  costActive: "#171717",
  inactive: "#E4DFFB",
  axisText: "#757575",
  gridLine: "#F1F1F1",
};

// Builds the tooltip's inner HTML for a given month's data
function buildTooltipHtml(monthData: { revenue: number; cost: number }) {
  const row = (color: string, label: string, value: number) => `
    <div style="display:flex;align-items:center;gap:6px;">
      <span style="width:8px;height:8px;border-radius:50%;background:${color};"></span>
      <span style="color:${COLORS.axisText};font-size:12px;">${label}</span>
      <span style="font-weight:600;font-size:12px;margin-left:auto;">
        $${value.toLocaleString()}
      </span>
    </div>
  `;

  return `
    <div style="padding:8px 12px;">
      ${row(COLORS.revenueActive, "Revenue", monthData.revenue)}
      ${row(COLORS.costActive, "Cost", monthData.cost)}
    </div>
  `;
}

export default function ColumnChar2() {
  const series = [
    { name: "Revenue", data: monthlyProfitData.map((m) => m.revenue) },
    { name: "Cost", data: monthlyProfitData.map((m) => m.cost) },
  ];

  const options = {
    chart: {
      type: "bar" as const,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "55%",
        borderRadius: 4,
        borderRadiusApplication: "end" as const,
      },
    },
    // Each bar picks its own color depending on whether it's the highlighted month.
    // seriesIndex 0 = Revenue, seriesIndex 1 = Cost.
    colors: [
      ({ dataPointIndex, seriesIndex }: { dataPointIndex: number; seriesIndex: number }) => {
        const month = monthlyProfitData[dataPointIndex].month;
        const isHighlighted = month === HIGHLIGHTED_MONTH;

        if (seriesIndex === 0) {
          return isHighlighted ? COLORS.revenueActive : COLORS.inactive;
        }
        return isHighlighted ? COLORS.costActive : COLORS.inactive;
      },
    ],
    dataLabels: { enabled: false },
    stroke: { show: false },
    grid: {
      borderColor: COLORS.gridLine,
      xaxis: { lines: { show: false } },
    },
    legend: {
      position: "top" as const,
      horizontalAlign: "right" as const,
      fontSize: "12px",
      labels: { colors: COLORS.axisText },
      // Legend dots always show the "active" colors, not the per-bar function above
      markers: { fillColors: [COLORS.revenueActive, COLORS.costActive] },
    },
    xaxis: {
      categories: monthlyProfitData.map((m) => m.month),
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: COLORS.axisText, fontSize: "12px" } },
    },
    yaxis: {
      labels: {
        style: { colors: COLORS.axisText, fontSize: "12px" },
        formatter: (value: number) => `$${value / 1000}K`,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      custom: ({ dataPointIndex }: { dataPointIndex: number }) =>
        buildTooltipHtml(monthlyProfitData[dataPointIndex]),
    },
  };

  return (
    <div className="bg-gray-3 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-1">Profit Summary</h3>
        <button className="flex items-center bg-gray-5  gap-1 text-sm text-gray-2 border border-gray-1/10 rounded-lg px-3 py-1.5">
          Last 8 Months <ChevronDown size={14} />
        </button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-gray-1">$624,550</span>
        <span className="flex bg-[#d9f9e7] text[#007837] items-center gap-0.5 text-xs font-medium  rounded-full px-2 py-0.5">
          <ArrowUp size={12} /> 5.62%
        </span>
      </div>

      <ReactApexChart options={options} series={series} type="bar" height={220} />
    </div>
  );
}