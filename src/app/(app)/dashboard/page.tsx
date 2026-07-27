import ActivityCard from "@/components/ActivityCard";
import ApexChart from "@/components/ApexChart";
import ColumnChar1 from "@/components/ColumnChar1";
import ColumnChar2 from "@/components/ColumnChar2";
import ProductCategoriesCard from "@/components/ProductCategoriesCard";
import ShipAlertCard from "@/components/ShipAlertCard";
import Shipmenttable from "@/components/Shipmenttable";
import TrackCard from "@/components/TrackCard";
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
  const dashboardCardData = [
    {
      title: "Active Shipments",
      value: "1,284",
      badges: "shipments",
      icon: Truck,
      miniIcon: ChevronUp,
      parcentage: "+8.7% ",
      description: "from last week",
    },
    {
      title: "Delivery Performance",
      value: "94.3%",
      badges: "on-time",
      icon: Tv,
      miniIcon: ChevronUp,
      parcentage: "-1.2%",
      description: "from last week",
    },
    {
      title: "Revenue",
      value: "$82,450",
      badges: "",
      icon: CircleDollarSign,
      miniIcon: ChevronUp,
      parcentage: "+12.4%",
      description: "from last month",
    },
  ];
  const shipmentData = [
    {
      id: "#SH9283746",
      company: "TechGear Inc.",
      companyService: "Electronics",
      carries: "FedEx",
      routes: "Los Angeles, CA → Chicago, IL",
      status: "In Transit",
      date: "Mar 20, 2035",
    },
    {
      id: "#SH9182635",
      company: "StyleHub Co.",
      companyService: "Apparel",
      carries: "DHL",
      routes: "New York, NY → Atlanta, GA",
      status: "Out for Delivery",
      date: "Mar 19, 2035",
    },
    {
      id: "#SH9037821",
      company: "FreshNest",
      companyService: "Home & Kitchen",
      carries: "UPS",
      routes: "Dallas, TX → Miami, FL",
      status: "Delivered",
      date: "Mar 18, 2035",
    },
    {
      id: "#SH9374652",
      company: "FitPlus Gear",
      companyService: "Sports & Outdoors",
      carries: "USPS",
      routes: "Seattle, WA → Denver, CO",
      status: "Processing",
      date: "Mar 21, 2035",
    },
    {
      id: "#SH9457830",
      company: "AutoParts Pro",
      companyService: "Automotive",
      carries: "Aramex",
      routes: "Detroit, MI → San Diego, CA",
      status: "In Transit",
      date: "Mar 20, 2035",
    },
  ];
  return (
    <div className="p-5  bg-gray-5 w-full mb-5">
      {/* dashboard header and searchbar */}
      <section className="flex justify-between items-center w-full  bg-gray-5 rounded-lg">
        <div className="bg-gray-5 w-1/2 md:block hidden xl:block h-full rounded-lg p-2.5">
          <h3 className="text-[16px]">Hello John!</h3>
          <p className="text-[24px] font-bold">Good Morning</p>
        </div>

        <div className="flex justify-between items-center bg-white gap-4 md:w-1/2 w-full">
          <div className="flex items-center w-[290px] h-10 gap-1.5 rounded-lg p-2.5">
            <Search size={16} className="text-gray-2" />
            <input
              type="text"
              placeholder="Search anything"
              className="rounded-lg w-full bg-transparent outline-none text-sm text-gray-1 placeholder:text-gray-2"
            />
          </div>
          <button className="hidden md:inline-flex items-center bg-black text-gray-3 rounded-lg py-2.5 px-4">
            + Add New Shipping
          </button>
          <button className="md:hidden inline-flex items-center bg-black text-gray-3 rounded-lg py-2.5 px-4">
            <Plus size={20} />
          </button>
        </div>
      </section>

      {/* dashboard Top content */}
      <section className="flex flex-row justify-between gap-4 mb-5">
        <section className="flex flex-col justify-around ">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
            {dashboardCardData.map((card, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-3 rounded-lg p-4 "
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

                  <div className="flex justify-start items-center gap-2 mt-2">
                    <div className="flex items-center gap-1 bg-green-light rounded-full p-1">
                      <card.miniIcon
                        className="text-green-500 bg-green-100 rounded-full "
                        size={16}
                      />
                    </div>
                    <span className="text-green-500 font-medium text-[13px]">
                      {card.parcentage}
                    </span>
                    <p className="text-gray-2 text-[13px]">
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

          <section className="flex gap-5  mt-4 ">
            {/* left */}
            <div className="">
              <ColumnChar1></ColumnChar1>
            </div>

            {/* right */}
            <div className="w-[469px] ">
              <ColumnChar2></ColumnChar2>
            </div>
          </section>
        </section>
        {/* pie chart */}
        <section className="mt-5 w-[299px]">
          <ApexChart></ApexChart>
        </section>
      </section>
      {/* dashboard middle content */}
      <section className="flex flex-row justify-between gap-4 mb-5">
        <ProductCategoriesCard></ProductCategoriesCard>
        <TrackCard></TrackCard>
        <ShipAlertCard></ShipAlertCard>
      </section>

      {/* botom section */}
      <section className="">
        {/* table */}
        <div className="flex flex-row justify-between">
          <Shipmenttable></Shipmenttable>
          <ActivityCard></ActivityCard>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
