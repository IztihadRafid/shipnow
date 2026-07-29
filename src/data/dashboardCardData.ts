import {
  ChevronUp,
  CircleDollarSign,
  LucideIcon,
  Truck,
  Tv,
} from "lucide-react";
export interface DashboardCardData {
  title: string;
  value: string;
  badges: string;
  icon: string | LucideIcon;
  miniIcon: string | LucideIcon;
  parcentage: string;
  description: string;
}

export const dashboardCardData = [
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