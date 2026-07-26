"use client";
import {
  ChevronDown,
  CircleStop,
  Funnel,
  MapPin,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { shipmentsData } from "../../../data/ShipmentsData";

const ShipmentPage = () => {
  return (
    <div className="bg-gray-5 p-2 xl:w-[1217px] md:w-[746px] w-[358px] mx-auto">
      <section className="md:flex justify-between items-center rounded-lg hidden ">
        <div className="bg-gray-5  rounded-lg p-2.5">
          <h3 className="text-[24px] font-bold">Shipments</h3>
          <p className="text-[11px]">
            <span className="text-purple-1">Dashboard</span> / Shipments
          </p>
        </div>

        <div className="flex justify-between items-center bg-white gap-4  ">
          <button className="hidden md:inline-flex items-center bg-black text-gray-3 rounded-lg py-2.5 px-4">
            + Add New Shipping
          </button>
          <button className="md:hidden inline-flex items-center bg-black text-gray-3 rounded-lg py-2.5 px-4">
            <Plus size={20} />
          </button>
        </div>
      </section>

      <section className="md:flex md:flex-row justify-between flex-col items-center md:mt-0 mt-25">
        <div className="flex bg-white  rounded-xl gap-0.5 md:w-[431px] w-[358px]">
          <button className="bg-black py-[7px] px-3 text-[12px]  rounded-l-xl rounded-r-lg text-gray-3 ml-1.5">
            All
          </button>
          <button className="bg-white py-[7px] px-3 text-[12px] rounded-lg text-gray-2 md:ml-1.5">
            Delivered
          </button>
          <button className="bg-white py-[7px] px-3 text-[12px] rounded-lg text-gray-2 md:ml-1.5">
            In Transit
          </button>
          <button className="bg-white py-[7px] px-3 text-[12px] rounded-lg text-gray-2 md:ml-1.5">
            Processing
          </button>
          <button className="bg-white py-[7px] px-3 text-[12px] rounded-lg text-gray-2 md:ml-1.5">
            Out for Delivery
          </button>
        </div>

        <div className="flex md:justify-end items-center  w-[465px]">
          <div className="flex items-center bg-white w-[223px] md:hidden xl:inline-flex mr-1 gap-1.5 rounded-lg p-2.5">
            <Search size={16} className="text-gray-2" />
            <input
              type="text"
              placeholder="Search Shipment"
              className="  rounded-lg w-full bg-transparent outline-none text-sm text-gray-1 placeholder:text-gray-2"
            />
          </div>

          <div className="xl:flex items-center justify-between hidden bg-white rounded-lg px-3 py-2  w-[89px]">
            <Funnel size={16} />
            <button className="text-[12px] mx-0.5">Filter </button>
            <ChevronDown />
          </div>

          <div className="flex items-center md:justify-end justify-center gap-1.5">
            <div className="xl:hidden md:inline-flex bg-white rounded-lg  p-1 ">
            <Search
              size={24}
              className="xl:hidden md:inline-flex bg-white rounded-lg  p-1 "
            />{" "}
          </div>
          <div className="xl:hidden md:inline-flex bg-white rounded-lg  p-1 ">
            <SlidersHorizontal />
          </div>
          </div>
          <div className="md:flex items-center justify-between hidden">
            <span className="text-[11px]">Sort by: </span>
            <button className="bg-white rounded-lg px-3 py-2  w-[84px] text-[12px] flex items-center justify-between">
              Newest
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* cards */}
      <section>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 rounded-lg mt-4">
          {shipmentsData.map((item) => {
            const CardIcon = item.cardIcon;
            const CompanyLogo = item.companyLogo;
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg p-4 xl:w-[279px] w-[343px] mx-auto"
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
                    <CompanyLogo size={36} className=" " />
                    <div>
                      <p className="text-[12px] font-semibold ">
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
                      <h6 className=" text-[10px]">
                        {item.initialProgress.time}
                      </h6>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2  p-2">
                    <div className="flex items-center justify-start">
                      <MapPin size={20} color="#856df3" />
                      <span className="text-[10px] text-gray-2 ml-1">
                        Origin
                      </span>
                    </div>
                    <div>
                      <h6 className="font-semibold text-[12px]">
                        {item.initialProgress.location}
                      </h6>
                      <h6 className=" text-[10px]">
                        {item.initialProgress.time}
                      </h6>
                    </div>
                  </div>
                </div>

                {/* progresbar */}
                <div>
                  <div className="flex justify-between items-center  my-1">
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
      </section>
    </div>
  );
};

export default ShipmentPage;
