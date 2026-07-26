"use client";

import { Search, SlidersHorizontal, MoreHorizontal, ArrowUpDown, SquareMenu, Ellipsis } from "lucide-react";
const shipmentData = [
  { id: "#SH9283746", company: "TechGear Inc.", companyService: "Electronics", carrier: "FedEx", route: "Los Angeles, CA → Chicago, IL", status: "In Transit", statusStyle: "bg-gray-5 text-gray-1", date: "Mar 20, 2035" },
  { id: "#SH9182635", company: "StyleHub Co.", companyService: "Apparel", carrier: "DHL", route: "New York, NY → Atlanta, GA", status: "Out for Delivery", statusStyle: "bg-purple-1/10 text-purple-1", date: "Mar 19, 2035" },
  { id: "#SH9037821", company: "FreshNest", companyService: "Home & Kitchen", carrier: "UPS", route: "Dallas, TX → Miami, FL", status: "Delivered", statusStyle: "bg-green-100 text-green-600", date: "Mar 18, 2035" },
  { id: "#SH9374652", company: "FitPlus Gear", companyService: "Sports & Outdoors", carrier: "USPS", route: "Seattle, WA → Denver, CO", status: "Processing", statusStyle: "bg-blue-100 text-blue-600", date: "Mar 21, 2035" },
  { id: "#SH9457830", company: "AutoParts Pro", companyService: "Automotive", carrier: "Aramex", route: "Detroit, MI → San Diego, CA", status: "In Transit", statusStyle: "bg-gray-5 text-gray-1", date: "Mar 20, 2035" },
];

export default function Shipmenttable() {
  return (
    <div className="bg-gray-3 rounded-xl p-4 w-[858px]">
       <div className="flex justify-between items-center bg-white h-[50px] rounded-lg p-2">
          <h5 className="text-[16px] font-bold">Recent Shipments</h5>
          <div className="flex justify-between items-center bg-gray-5 text-gray-1 gap-4 ">
          <div className="flex items-center w-[290px] h-10 gap-1.5 rounded-lg p-2.5">
            <Search size={16} className="text-gray-2" />
            <input
              type="text"
              placeholder="Search anything"
              className="rounded-lg w-full bg-transparent outline-none text-sm text-gray-1 placeholder:text-gray-2"
            />
          </div>
          
          <div>
            <button className=" items-center bg-gray-5 text-gray-1 rounded-lg py-2.5 px-4">
           <SquareMenu size={16} />
          </button>
          <button className=" items-center bg-gray-5 text-gray-1 rounded-lg py-2.5 px-4 ml-1">
           <Ellipsis size={16} />
          </button>
          </div>
        </div>
        </div>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-purple-1/10 text-gray-1 text-[10px]">
            <th className="w-10 py-3 pl-3 rounded-l-lg">
              <input type="checkbox" className="accent-purple-1" />
            </th>
            <th className="py-3 px-3 font-medium">
              <button className="flex items-center gap-1">
                Shipping ID
                <ArrowUpDown size={12} className="text-gray-2" />
              </button>
            </th>
            <th className="py-3 px-3 font-medium">
              <button className="flex items-center gap-1">
                Company
                <ArrowUpDown size={12} className="text-gray-2" />
              </button>
            </th>
            <th className="py-3 px-3 font-medium">
              <button className="flex items-center gap-1">
                Carriers
                <ArrowUpDown size={12} className="text-gray-2" />
              </button>
            </th>
            <th className="py-3 px-3 font-medium">
              <button className="flex items-center gap-1">
                Route
                <ArrowUpDown size={12} className="text-gray-2" />
              </button>
            </th>
            <th className="py-3 px-3 font-medium">
              <button className="flex items-center gap-1">
                Shipping Date
                <ArrowUpDown size={12} className="text-gray-2" />
              </button>
            </th>
            <th className="py-3 px-3 font-medium rounded-r-lg">
              <button className="flex items-center gap-1">
                Status
                <ArrowUpDown size={12} className="text-gray-2" />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {shipmentData.map((shipment) => (
            <tr key={shipment.id} className="border-b border-gray-1/10 last:border-0">
              <td className="py-3 pl-3">
                <input type="checkbox" className="accent-purple-1" />
              </td>
              <td className="py-3 px-3 text-[12px] text-purple-1 font-medium">
                {shipment.id}
              </td>
              <td className="py-3 px-3">
                <p className="text-[12px] text-gray-1">{shipment.company}</p>
                <p className="text-xs text-gray-2">{shipment.companyService}</p>
              </td>
              <td className="py-3 px-3 text-[12px] text-gray-1">{shipment.carrier}</td>
              <td className="py-3 px-3 text-[12px] text-gray-1">{shipment.route}</td>
              <td className="py-3 px-3 text-[12px] text-gray-1">{shipment.date}</td>
              <td className="py-3 px-3">
                <span
                  className={`text-[11px] font-medium rounded-full px-2.5 py-1 ${shipment.statusStyle}`}
                >
                  {shipment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}