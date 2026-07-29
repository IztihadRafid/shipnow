import ActivityCard from "@/components/ActivityCard";
import ApexChart from "@/components/ApexChart";
import ColumnChar1 from "@/components/ColumnChar1";
import ColumnChar2 from "@/components/ColumnChar2";
import ProductCategoriesCard from "@/components/ProductCategoriesCard";
import ShipAlertCard from "@/components/ShipAlertCard";
import Shipmenttable from "@/components/Shipmenttable";
import TrackCard from "@/components/TrackCard";
import { dashboardCardData } from "@/data/dashboardCardData";
import {
  ChevronUp,
  CircleDollarSign,
  Ellipsis,
  Plus,
  Search,
  SquareMenu,
  Truck,
  Tv,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-5 bg-gray-5 w-full mb-5 mt-12 md:mt-0">
      {/* dashboard header and searchbar */}
      <section className="flex justify-between items-center w-full  bg-gray-5 rounded-lg">
        <div className="bg-gray-5 w-[596px] md:block hidden xl:block h-full rounded-lg p-2.5">
          <h3 className="text-[16px]">Hello John!</h3>
          <p className="text-[24px] font-bold">Good Morning</p>
        </div>

        <div className="flex justify-between items-center bg-white gap-4 ">
          <div className="flex items-center w-full md:w-[290px]  gap-1.5 rounded-lg p-2.5">
            <Search size={16} className="text-gray-2 " />
            <input
              type="text"
              placeholder="Search anything"
              className="rounded-lg w-full bg-transparent outline-none text-sm text-gray-1"
            />
          </div>
          <button className="hidden text-[14px] font-semibold md:inline-flex items-center bg-black text-gray-3 rounded-lg py-2.5 px-4">
            + Add New Shipping
          </button>
          <button className="md:hidden inline-flex items-center bg-black text-gray-3 rounded-lg py-2.5 px-4">
            <Plus size={20} />
          </button>
        </div>
      </section>

      {/* dashboard Top content */}
      <section className="flex flex-row justify-between gap-4 mb-5 xl:w-[1177px]">
        <section className="flex flex-col justify-around w-full">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {dashboardCardData.map((card, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-3 rounded-lg pl-4 py-4 pr-6 "
              >
                <div>
                  <p className="text-[12px] font-semibold text-gray-2">
                    {card.title}
                  </p>

                  <div className="flex justify-start items-baseline gap-1">
                    <h3 className="text-[28px] font-bold text-gray-1">
                      {card.value}
                    </h3>
                    <span className="text-[12px] text-gray-2">
                      {card.badges}
                    </span>
                  </div>

                  <div className="flex justify-start items-center gap-1 mt-2">
                    <div className="flex items-center gap-1 bg-green-light rounded-full p-1">
                      <card.miniIcon
                        className="text-green-500 bg-green-100 rounded-full "
                        size={16}
                      />
                    </div>
                    <span className="text-green-500 font-medium text-[10px]">
                      {card.parcentage}
                    </span>
                    <p className="text-gray-2 text-[10px]">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="bg-purple-1 p-3 rounded-xl">
                  <card.icon className="text-gray-3" size={22} />
                </div>
              </div>
            ))}
          </section>

          <section className="xl:flex md:flex hidden gap-5  mt-4 w-full">
            {/* left */}
            <div className="">
              <ColumnChar1></ColumnChar1>
            </div>

            {/* right */}
            <div className="w-[469px] h-[259px]">
              <ColumnChar2></ColumnChar2>
            </div>
          </section>
        </section>
        {/* pie chart */}
        <section className="mt-5 xl:block hidden">
          <ApexChart></ApexChart>
        </section>
      </section>

      {/* dashboard middle content */}
      <section className="hidden xl:flex flex-col xl:flex-row justify-between items-stretch gap-4 mb-5 w-full xl:w-[1178px]">
        <div className="w-full xl:w-[470px] xl:flex-shrink-0 ">
          <ProductCategoriesCard />
        </div>

        <div className="w-full xl:flex-1 xl:min-w-0">
          <TrackCard />
        </div>

        <div className="w-full xl:w-[299px] xl:flex-shrink-0">
          <ShipAlertCard />
        </div>
      </section>

      {/* botom section */}
      <section className="xl:w-[1178px]">
        {/* table */}
        <div className=" hidden xl:flex flex-row justify-between">
          <Shipmenttable></Shipmenttable>
          <ActivityCard></ActivityCard>
        </div>
      </section>

      {/* tabview */}
      <section className="md:flex items-center justify-between gap-5 xl:hidden hidden mt-5">
        <div className="">
          <ApexChart></ApexChart>
        </div>
        <div className="w-[383px] ">
          <ProductCategoriesCard />
        </div>
      </section>
      <div className="w-full md:block hidden xl:hidden mt-5">
        <TrackCard />
      </div>

      <section className="mt-5 xl:hidden hidden md:block w-full">
        <div className="flex items-stretch justify-between gap-5 ">
          <div className="w-1/2">
            <ShipAlertCard />
          </div>
          <div className="w-1/2">
            <ActivityCard />
          </div>
        </div>
      </section>

      <section className="w-full mt-5 xl:hidden hidden md:block">
        <Shipmenttable></Shipmenttable>
      </section>

      {/* mobile view */}
      <section className="mt-5 flex xl:hidden md:hidden gap-5  flex-col">
        <ColumnChar1></ColumnChar1>
        <ColumnChar2></ColumnChar2>
        <ApexChart></ApexChart>
        <ProductCategoriesCard />
        <TrackCard />
         <ShipAlertCard />
         <Shipmenttable></Shipmenttable>
         <ActivityCard />
      </section>
    </div>
  );
};

export default Dashboard;
