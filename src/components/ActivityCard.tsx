"use client";

import {
  MoreHorizontal,
  Package,
  Tag,
  RotateCcw,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
interface ActivityCardProps {
  icon: string | LucideIcon;
  description: string;
  date: string;
}
const activityData : ActivityCardProps[] = [
  {
    icon: Package,
    description: "User @TechGuru99 submitted a bulk shipment request",
    date: "12:00 PM",
  },
  {
    icon: Tag,
    description:
      "Customer Support @SupportKen added a priority tag to Order ID 77889JKL",
    date: "11:30 AM",
  },
  {
    icon: RotateCcw,
    description:
      "User @SallyMae88 initiated a return process for Order ID 44556GHI",
    date: "11:00 AM",
  },
  {
    icon: CheckCircle2,
    description:
      "Administrator @AdminLisa resolved a delivery issue for Order ID 12345XYZ",
    date: "10:15 AM",
  },
];

export default function ActivityCard() {
  return (
    <div className="bg-gray-3 rounded-xl p-4 xl:w-[299px] ">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-[16px] text-gray-1">Recent Activity</h3>
        <button  className="text-gray-2">
          <MoreHorizontal size={18} />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {activityData.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-4 flex items-center justify-center shrink-0">
              <activity.icon size={16} className="text-gray-1" />
            </div>
            <div>
              <p className="text-sm text-gray-1 ">{activity.description}</p>
              <p className="text-[10px] text-gray-2 mt-0.5">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
