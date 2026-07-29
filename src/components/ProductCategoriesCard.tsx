"use client";

import { MoreHorizontal } from "lucide-react";

const categoryData = [
  { label: "Electronics", products: 240, percent: 24, color: "#856DF3" },
  { label: "Home & Kitchen", products: 200, percent: 20, color: "#E4DFFB" },
  { label: "Apparel", products: 180, percent: 18, color: "#171717" },
  { label: "Beauty & Health", products: 140, percent: 14, color: "#757575" },
  { label: "Sports & Outdoors", products: 120, percent: 12, color: "#D9D9D9" },
  { label: "Automotive", products: 120, percent: 12, color: "#F1F1F1" },
];

const totalProducts = categoryData.reduce((sum, carrd) => sum + carrd.products, 0);

export default function ProductCategoriesCard() {
  return (
    <div className="bg-gray-3 rounded-xl p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-[16px] text-gray-1">Product Categories</h3>
        <button  className="text-gray-2">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-2">Total Products</span>
        <span className="text-2xl font-bold text-gray-1">
          {totalProducts.toLocaleString()}
        </span>
      </div>

      <div className="flex gap-1 h-[54px]">
        {categoryData.map((carrd) => (
          <div
            key={carrd.label}
            className="flex-1 rounded-lg"
            style={{ backgroundColor: carrd.color }}
            title={carrd.label}
          />
        ))}
      </div>

      <div className="flex flex-col gap-3 mt-4">
        {categoryData.map((carrd) => (
          <div key={carrd.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: carrd.color }}
              />
              <span className="text-sm text-gray-1">{carrd.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-2 bg-gray-5 rounded-md px-2 py-1">
                {carrd.products} products
              </span>
              <span className="text-xs font-medium text-gray-1 w-8 text-right">
                {carrd.percent}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}