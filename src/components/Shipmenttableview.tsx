"use client";
import { shipmentsData } from "@/data/ShipmentsData";
import { ArrowUpDown, Package, Clock, Truck, CheckCircle2 } from "lucide-react";
interface ShipmentsTableViewProps {
  shipments: typeof shipmentsData;
}

const statusColor: Record<string, string> = {
  Delivered: "bg-green-100 text-gray-1",
  "In Transit": "bg-purple-1/20 text-gray-1",
  Processing: "bg-yellow-100 text-gray-1",
  "Out for Delivery": "bg-gray-5 text-gray-1",
};

// combined for pendind  delivery and completed shipments
function getSimplifiedStatus(status: string) {
  if (status === "Processing") return "Pending";
  if (status === "In Transit" || status === "Out for Delivery")
    return "Delivery";
  if (status === "Delivered") return "Completed";
  return status;
}
export default function ShipmentsTableView({
  shipments,
}: ShipmentsTableViewProps) {
  const totalCount = shipmentsData.length;
  const pendingCount = shipmentsData.filter(
    (stats) => getSimplifiedStatus(stats.deliveryStatus) === "Pending",
  ).length;
  const deliveryCount = shipmentsData.filter(
    (stats) => getSimplifiedStatus(stats.deliveryStatus) === "Delivery",
  ).length;
  const completedCount = shipmentsData.filter(
    (stats) => getSimplifiedStatus(stats.deliveryStatus) === "Completed",
  ).length;

  const SummaryCards = [
    { label: "Total Shipments", value: totalCount, icon: Package },
    { label: "Pending", value: pendingCount, icon: Clock },
    { label: "Delivery", value: deliveryCount, icon: Truck },
    { label: "Completed", value: completedCount, icon: CheckCircle2 },
  ];

  return (
    <div>
      {/* summary cards — added above your table, table itself is untouched below */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 my-4">
        {SummaryCards.map((card) => (
          <div key={card.label} className="bg-white rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 flex items-center justify-center bg-purple-1/10 rounded-lg">
                <card.icon size={14} className="text-purple-1" />
              </div>
              <span className="text-xs text-gray-2">{card.label}</span>
            </div>
            <span className="text-2xl font-bold text-gray-1">{card.value}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-4 mt-4 overflow-x-auto">
        <table className="w-full text-left ">
          <thead className="">
            <tr className="text-gray-2 text-[11px] border-b border-gray-4">
              <th className=" py-3 w-[12px] py-[14px] px-[10px]">
                <input type="checkbox" className="accent-purple-1" />
              </th>
              <th className="text-[10px] w-[78px] py-[14px] px-[10px]">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  Shipping ID <ArrowUpDown size={12} className="text-gray-2" />
                </div>
              </th>
              <th className="text-[10px] w-[118px] py-[14px] px-[10px]">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  Company <ArrowUpDown size={12} className="text-gray-2" />
                </div>
              </th>
              <th className="text-[10px] w-[70px] py-[14px] px-[10px]">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  Carrier
                  <ArrowUpDown size={12} className="text-gray-2" />
                </div>
              </th>
              <th className="text-[10px] w-[104px] py-[14px] px-[10px]">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  Product Category
                  <ArrowUpDown size={12} className="text-gray-2" />
                </div>
              </th>
              <th className="text-[10px] w-[50px] py-[14px] px-[10px]">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  Weight
                  <ArrowUpDown size={12} className="text-gray-2" />
                </div>
              </th>
              <th className="text-[10px] w-[150px] py-[14px] px-[10px]">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  Route
                  <ArrowUpDown size={12} className="text-gray-2" />
                </div>
              </th>
              <th className="text-[10px] w-[172px] py-[14px] px-[10px]">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  Date
                  <ArrowUpDown size={12} className="text-gray-2" />
                </div>
              </th>
              <th className="text-[10px] w-[107px] py-[14px] px-[10px]">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  Progress
                  <ArrowUpDown size={12} className="text-gray-2" />
                </div>
              </th>
              <th className="text-[10px] w-[74px] py-[14px] px-[10px]">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  Status
                  <ArrowUpDown size={12} className="text-gray-2" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((item) => {
              const CardIcon = item.cardIcon;
              const CompanyLogo = item.companyLogo;
              return (
                <tr key={item.id} className="border-b border-gray-4 ">
                  <td className="">
                    <input type="checkbox" className="accent-purple-1 " />
                  </td>
                  <td className=" text-[11px] text-purple-1 py-[14px] px-[10px]">
                    {item?.id}
                    <p className="text-[9px] text-[#757575] flex items-center">
                      {CardIcon && (
                        <CardIcon
                          size={16}
                          color="#757575"
                          className="text-gray-1 mr-0.5"
                        />
                      )}
                      {item?.freightType}
                    </p>
                  </td>
                  <td className="flex items-center py-[14px] px-[10px]">
                    <p>
                      {item?.companyLogo && (
                        <CompanyLogo size={26} className="text-gray-1 mr-0.5" />
                      )}
                    </p>
                    <div>
                      <p className="text-[11px] text-gray-1 font-semibold">
                        {item?.company}
                      </p>
                      <p className="text-[10px] text-gray-2">{item?.service}</p>
                    </div>
                  </td>
                  <td className=" text-[11px] py-[14px] px-[10px]">{item?.carrier}</td>
                  <td className="py-[14px] px-[10px]">
                    <p className="text-[11px] text-gray-1">{item?.service}</p>
                  </td>
                  <td className="py-[14px] px-[10px]">
                    <p className="text-[11px] text-gray-1 font-semibold">
                      {item?.weight}
                    </p>
                  </td>
                  <td className=" text-[11px]  w-[150px] py-[14px] px-[10px]">
                    <p className="text-[11px] text-gray-1 font-semibold ">
                      {item?.initialProgress.location}
                      <span className="text-[10px] text-gray-2">
                        {" "}
                        (Origin)
                      </span>{" "}
                    </p>
                    <p className="text-[11px] text-gray-1 font-semibold text-purple-1">
                      {item?.endProgress.location}
                      <span className="text-[10px] text-gray-2">
                        {" "}
                        (Destination)
                      </span>{" "}
                    </p>
                  </td>
                  <td className=" text-[11px]  w-[150px] py-[14px] px-[10px]">
                    <p className="text-[11px] text-gray-1 font-semibold">
                      {item?.initialProgress.time}
                      <span className="text-[10px] text-gray-2">
                        {" "}
                        (ATD)
                      </span>{" "}
                    </p>
                    <p className="text-[11px] text-gray-1 font-semibold  text-purple-1">
                      {item?.endProgress.time}
                      <span className="text-[10px] text-gray-2">
                        {" "}
                        (ETA)
                      </span>{" "}
                    </p>
                  </td>
                  <td className=" w-[107px] py-[14px] px-[10px]">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-gray-4 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-1 rounded-full"
                          style={{ width: `${item?.progressValue}%` }}
                        />
                      </div>
                      <span className="text-xs">{item?.progressValue}%</span>
                    </div>
                  </td>
                  <td className="py-[14px] px-[10px]">
                    <span
                      className={`text-[10px] font-semibold rounded-full  ${
                        statusColor[item.deliveryStatus] ??
                        "bg-gray-5 text-gray-1"
                      }`}
                    >
                      {item?.deliveryStatus}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
