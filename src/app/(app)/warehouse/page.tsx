"use client";
import CapacityUsageCard from "@/components/CapacityUsageCard";
import PackageStatusCard from "@/components/PackageStatusCard";
import WarehouseActivityLogCard from "@/components/WarehouseActivityLogCard";
import WarehouseInventoryChart from "@/components/WarehouseInventoryChart";
import WarehouseMapView from "@/components/WarehouseMapView";
import WarehouseStorageTable from "@/components/WarehouseStorageTable";
import { warehouseStats } from "@/data/warehouse";
import { Package, Plane, Ship, TramFront, TrendingUp, Van } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WareHousePage = () => {
  const pathname = usePathname();
  return (
    <div className="bg-gray-5 p-5 mx-auto md:mt-0 xl:mt-0 mt-10">
      {/* heading part */}
      <section className="md:flex justify-between items-center rounded-lg hidden">
        <div className="bg-gray-5 rounded-lg p-2.5">
          <h3 className="text-[24px] font-bold">Shipments</h3>
          <p className="text-[11px]">
            <span className="text-blue-1">Dashboard</span> / Warehouse
          </p>
        </div>

        <div className="flex justify-between items-center bg-white rounded-lg">
          <Link
            href="/warehouse"
            className={`hidden md:inline-flex items-center rounded-l-lg py-2 px-3 text-[12px] ${
              pathname === "/warehouse"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            <Van className="mr-2" size={20} /> Road Freight
          </Link>
          <Link
            href="/rail-freight"
            className={`hidden md:inline-flex items-center  py-2 px-3 text-[12px] ${
              pathname === "/rail-freight"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            <TramFront className="mr-2" size={20} />
            Rail Freight
          </Link>
          <Link
            href="/ocean-freight"
            className={`hidden md:inline-flex items-center  py-2 px-3  text-[12px]${
              pathname === "/ocean-freight"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            <Ship className="mr-2" size={20} />
            Ocean Freight
          </Link>
          <Link
            href="/air-freight"
            className={`hidden md:inline-flex items-center rounded-r-lg py-2 px-3 text-[12px] ${
              pathname === "/air-freight"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            <Plane className="mr-2" size={20} />
            Air Freight
          </Link>
        </div>
      </section>

      {/* body part */}
      <section>
        {/* main block */}
        <div className="flex xl:w-full">
          <div className="xl:w-[818px] flex xl:flex-row flex-col gap-5   md:w-full w-full">
            {/* three cards block*/}
            <div className="grid xl:grid-cols-1 xl:w-[200px]  w-full grid-cols-3 gap-5">
              <div className="bg-white rounded-lg p-4 md:flex-none xl:flex-none flex flex-col ">
                <p className="text-[12px] text-gray-2">Total SKU</p>
                <div className="flex md:flex-row flex-col items-start md:items-center justify-between mt-1">
                  <h3 className="text-[24px] font-bold text-gray-1">
                    {warehouseStats.totalSKU.value}
                  </h3>
                  <span className="flex items-center gap-0.5 text-[11px] text-green-500 bg-green-light rounded-full px-1.5 py-0.5">
                    <TrendingUp size={12} />
                    {warehouseStats.totalSKU.changePercent}%
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="text-[12px] text-gray-2">Quantity on Hand</p>
                <div className="flex md:flex-row flex-col items-start md:items-center justify-between mt-1">
                  <h3 className="text-[24px] font-bold text-gray-1">
                    {warehouseStats.quantityOnHand.value.toLocaleString()}
                    <span className="text-[12px] hidden md:inline  text-gray-2">
                      {warehouseStats.quantityOnHand.unit}
                    </span>
                  </h3>
                  <span className="flex items-center gap-0.5 text-[11px] text-green-600 bg-green-100  rounded-full px-1.5 py-0.5">
                    <TrendingUp size={12} />
                    {warehouseStats.quantityOnHand.changePercent}%
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="text-[12px] text-gray-2">Capacity Usage</p>
                <div className="flex md:flex-row flex-col items-start md:items-center justify-between mt-1">
                  <h3 className="text-[24px] font-bold text-gray-1">
                    {warehouseStats.capacityUsage.value}
                    {warehouseStats.capacityUsage.unit}{" "}
                    <span className="text-[12px] hidden md:inline text-gray-2">
                      {warehouseStats.capacityUsage.label}
                    </span>
                  </h3>
                  <span className="flex items-center gap-0.5 text-[11px] text-green-500 bg-green-light rounded-full px-1.5 py-0.5">
                    <TrendingUp size={12} />
                    {warehouseStats.capacityUsage.changePercent}%
                  </span>
                </div>
              </div>
            </div>
            {/* inverntory */}
            <div className="flex-1">
              <WarehouseInventoryChart></WarehouseInventoryChart>
            </div>
          </div>
          <div className="xl:flex-1 mx-5 xl:block md:hidden hidden">
            <CapacityUsageCard></CapacityUsageCard>
          </div>
        </div>

        {/* tabview */}
        <div className="md:flex xl:hidden items-center w-full gap-5 mt-5">
          <div className="w-full">
            <CapacityUsageCard></CapacityUsageCard>
          </div>
          <div className="w-full">
            <PackageStatusCard></PackageStatusCard>
          </div>
        </div>

        {/* warehouse stroage */}

        <div className="flex items-center justify-between gap-5">
          <div className="xl:w-[818px] w-full">
            <WarehouseStorageTable></WarehouseStorageTable>
          </div>
          <div className="xl:flex-1 xl:block md:hidden hidden">
            <PackageStatusCard></PackageStatusCard>
          </div>
        </div>
        {/* warehousemap */}
        <div className="flex xl:flex-row flex-col justify-between gap-5">
          <div className="xl:w-[818px] ">
            <WarehouseMapView></WarehouseMapView>
          </div>
          <div className="flex-1 h-full">
            <WarehouseActivityLogCard></WarehouseActivityLogCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WareHousePage;
