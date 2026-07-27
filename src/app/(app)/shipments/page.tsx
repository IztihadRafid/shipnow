"use client";
import { ChevronDown, CircleStop, Funnel, MapPin, Plus } from "lucide-react";
import { shipmentsData } from "../../../data/ShipmentsData";
import { useState } from "react";
import SearchSortBar, { SortOrder } from "@/components/Searchsortbar";
import StatusTabs from "@/components/Statustabs";
import Pagination from "@/components/Pagination";
import { ViewMode } from "@/components/ViewToggle";
import ShipmentsTableView from "@/components/Shipmenttableview";
import Link from "next/link";
const ShipmentPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [activeStatus, setActiveStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [view, setView] = useState<ViewMode>("grid"); // <-- ADD THIS LINE

  const statusFiltered =
    activeStatus === "All"
      ? shipmentsData
      : shipmentsData.filter((item) => item.deliveryStatus === activeStatus);
  const searchFiltered = statusFiltered.filter((item) =>
    item.company.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedShipments = [...searchFiltered].sort((a, b) =>
    sortOrder === "asc"
      ? a.progressValue - b.progressValue
      : b.progressValue - a.progressValue,
  );

  const totalResults = sortedShipments.length;
  const totalPages = Math.ceil(totalResults / pageSize) || 1;

  const paginatedShipments = sortedShipments.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  //functios for filter search, sorting by newest and oldest
  const handleStatusChange = (status: string) => {
    setActiveStatus(status);
    setCurrentPage(1);
  };
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  const handleSortChange = (order: SortOrder) => {
    setSortOrder(order);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-5 p-2  mx-auto">
      <section className="md:flex justify-between items-center rounded-lg hidden">
        <div className="bg-gray-5 rounded-lg p-2.5">
          <h3 className="text-[24px] font-bold">Shipments</h3>
          <p className="text-[11px]">
            <span className="text-purple-1">Dashboard</span> / Shipments
          </p>
        </div>

        <div className="flex justify-between items-center bg-white gap-4">
          <Link
            href="/shipments/create" 
            className="hidden md:inline-flex items-center bg-black text-gray-3 rounded-lg py-2.5 px-4"
          >
            + Add New Shipping
          </Link>
          <button className="md:hidden inline-flex items-center bg-black text-gray-3 rounded-lg py-2.5 px-4">
            <Plus size={20} />
          </button>
        </div>
      </section>

      <section className="md:flex md:flex-row justify-between flex-col items-center md:mt-0 mt-25 gap-3">
        <StatusTabs
          activeStatus={activeStatus}
          onStatusChange={handleStatusChange}
        />

        <SearchSortBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
          view={view}
          onViewChange={setView}
        />
      </section>

      {/* cards or table, depending on which view is picked */}
      <section>
        {paginatedShipments.length === 0 ? (
          <p className="text-center text-gray-2 text-sm py-10">No shipments</p>
        ) : view === "table" ? (
          <ShipmentsTableView shipments={paginatedShipments} />
        ) : (
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 rounded-lg mt-4">
            {paginatedShipments.map((item) => {
              const CardIcon = item.cardIcon;
              const CompanyLogo = item.companyLogo;
              return (
                <div
                  key={item.id}
                  className="bg-white w-full rounded-lg p-4 mx-auto"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h6 className="font-bold text-[14px]">{item.id}</h6>
                      {item.deliveryStatus === "Delivered" ? (
                        <p className="text-[10px] text-center bg-green-100 rounded-full p-1 text-gray-1 font-semibold">
                          {item.deliveryStatus}
                        </p>
                      ) : item.deliveryStatus === "In Transit" ? (
                        <p className="text-[10px] text-center bg-purple-1/20 rounded-full p-1 text-gray-1 font-semibold">
                          {item.deliveryStatus}
                        </p>
                      ) : item.deliveryStatus === "Processing" ? (
                        <p className="text-[10px] text-center bg-yellow-100 rounded-full p-1 text-gray-1 font-semibold">
                          {item.deliveryStatus}
                        </p>
                      ) : item.deliveryStatus === "Out for Delivery" ? (
                        <p className="text-[10px] text-center bg-gray-5 rounded-full p-1 text-gray-1 font-semibold">
                          {item.deliveryStatus}
                        </p>
                      ) : null}
                    </div>
                    <div className="bg-gray-5 rounded-lg p-2.5">
                      <CardIcon size={20} />
                    </div>
                  </div>
                  <div className="border border-gray-4 my-2"></div>
                  <div>
                    <div className="flex items-center gap-2">
                      <CompanyLogo size={36} />
                      <div>
                        <p className="text-[12px] font-semibold">
                          {item.service}
                        </p>
                        <h6 className="font-bold text-[10px] text-gray-2">
                          {item.company}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-5 rounded-lg">
                    <div className="flex items-center justify-between gap-2 mt-2 p-2">
                      <div className="flex items-center justify-start">
                        <CircleStop size={20} color="#856df3" fill="#856df3" />
                        <span className="text-[10px] text-gray-2 ml-1">
                          Origin
                        </span>
                      </div>
                      <div>
                        <h6 className="font-semibold text-[12px]">
                          {item.initialProgress.location}
                        </h6>
                        <h6 className="text-[10px]">
                          {item.initialProgress.time}
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 p-2">
                      <div className="flex items-center justify-start">
                        <MapPin size={20} color="#856df3" />
                        <span className="text-[10px] text-gray-2 ml-1">
                          Destination
                        </span>
                      </div>
                      <div>
                        <h6 className="font-semibold text-[12px]">
                          {item.endProgress.location}
                        </h6>
                        <h6 className="text-[10px]">{item.endProgress.time}</h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center my-1">
                      <p className="text-gray-1 text-[10px]">
                        Progress{" "}
                        <span className="font-bold text-[12px]">
                          {item.progressValue}%
                        </span>
                      </p>
                      <p className="text-gray-1 text-[10px]">
                        Carriers{" "}
                        <span className="font-bold text-[12px]">
                          {item.carrier}
                        </span>
                      </p>
                    </div>
                    <div className="w-full h-1.5 bg-gray-4 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-1 rounded-full transition-all"
                        style={{ width: `${item.progressValue}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <Pagination //pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalResults={totalResults}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setCurrentPage(1);
          }}
        />
      </section>
    </div>
  );
};

export default ShipmentPage;
