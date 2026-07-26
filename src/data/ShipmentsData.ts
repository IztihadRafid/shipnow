import { Cpu, Triangle, Home, Dumbbell, Zap, Asterisk, Shield, Shirt, Sun, Package, Apple, Target, Plane, Truck, Ship, TramFront, Train, LucideIcon } from "lucide-react";
interface Progress {
  location: string;
  time: string;
}
export interface shipmentProps {
  id: string;
  deliveryStatus: string;
  cardIcon: LucideIcon;
  company: string;
  companyLogo: LucideIcon;
  service: string;
  initialProgress: Progress;
  endProgress: Progress;
  progressValue: number;
  carrier: string;
}

export const shipmentsData: shipmentProps[] = [
  {
    id: "#SH9283746",
    deliveryStatus: "In Transit",
    cardIcon: Plane,
    company: "TechGear Inc.",
    companyLogo: Cpu,
    service: "Electronics",
    initialProgress: { location: "Los Angeles, CA", time: "Mar 20, 2035 - 10:00 AM" },
    endProgress: { location: "Chicago, IL", time: "Mar 23, 2035 - 03:00 PM" },
    progressValue: 60,
    carrier: "FedEx",
  },
  {
    id: "#SH9182635",
    deliveryStatus: "Out for Delivery",
    cardIcon: Truck,
    company: "StyleHub Co.",
    companyLogo: Triangle,
    service: "Apparel",
    initialProgress: { location: "New York, NY", time: "Mar 19, 2035 - 11:30 AM" },
    endProgress: { location: "Atlanta, GA", time: "Mar 22, 2025 - 01:00 PM" },
    progressValue: 75,
    carrier: "DHL",
  },
  {
    id: "#SH9037821",
    deliveryStatus: "Delivered",
    cardIcon: Ship,
    company: "FreshNest",
    companyLogo: Home,
    service: "Home & Kitchen",
    initialProgress: { location: "Dallas, TX", time: "Mar 18, 2035 - 09:00 AM" },
    endProgress: { location: "Miami, FL", time: "Mar 21, 2025 - 06:00 PM" },
    progressValue: 100,
    carrier: "UPS",
  },
  {
    id: "#SH9374652",
    deliveryStatus: "Processing",
    cardIcon: TramFront,
    company: "FitPlus Gear",
    companyLogo: Dumbbell,
    service: "Sports & Outdoors",
    initialProgress: { location: "Seattle, WA", time: "Mar 21, 2035 - 08:45 AM" },
    endProgress: { location: "Denver, CO", time: "Mar 25, 2035 - 04:30 PM" },
    progressValue: 40,
    carrier: "USPS",
  },
  {
    id: "#SH8821349",
    deliveryStatus: "Out for Delivery",
    cardIcon: Truck,
    company: "EcoLights",
    companyLogo: Zap,
    service: "Electronics",
    initialProgress: { location: "Austin, TX", time: "Mar 19, 2035 - 12:00 PM" },
    endProgress: { location: "Phoenix, AZ", time: "Mar 21, 2025 - 05:00 PM" },
    progressValue: 90,
    carrier: "FedEx",
  },
  {
    id: "#SH9457830",
    deliveryStatus: "Delivered",
    cardIcon: Plane,
    company: "AutoParts Pro",
    companyLogo: Asterisk,
    service: "Automotive",
    initialProgress: { location: "Detroit, MI", time: "Mar 20, 2035 - 07:15 AM" },
    endProgress: { location: "San Diego, CA", time: "Mar 26, 2035 - 02:00 PM" },
    progressValue: 100,
    carrier: "Aramex",
  },
  {
    id: "#SH8967432",
    deliveryStatus: "In Transit",
    cardIcon: Truck,
    company: "GreenHaven",
    companyLogo: Shield,
    service: "Home & Garden",
    initialProgress: { location: "Portland, OR", time: "Mar 18, 2035 - 02:45 PM" },
    endProgress: { location: "Salt Lake City, UT", time: "Mar 22, 2035 - 11:00 AM" },
    progressValue: 65,
    carrier: "USPS",
  },
  {
    id: "#SH8893247",
    deliveryStatus: "Out for Delivery",
    cardIcon: Truck,
    company: "ModaWear",
    companyLogo: Shirt,
    service: "Apparel",
    initialProgress: { location: "Boston, MA", time: "Mar 20, 2035 - 01:00 PM" },
    endProgress: { location: "Charlotte, NC", time: "Mar 23, 2035 - 08:00 AM" },
    progressValue: 80,
    carrier: "DHL",
  },
  {
    id: "#SH9018723",
    deliveryStatus: "Processing",
    cardIcon: Train,
    company: "SunCore Panels",
    companyLogo: Sun,
    service: "Electronics",
    initialProgress: { location: "San Diego, CA", time: "Mar 21, 2035 - 09:30 AM" },
    endProgress: { location: "Reno, NV", time: "Mar 24, 2035 - 01:30 PM" },
    progressValue: 30,
    carrier: "UPS",
  },
  {
    id: "#SH9113471",
    deliveryStatus: "In Transit",
    cardIcon: Truck,
    company: "QuickParts",
    companyLogo: Package,
    service: "Automotive",
    initialProgress: { location: "Tampa, FL", time: "Mar 20, 2035 - 04:00 PM" },
    endProgress: { location: "Houston, TX", time: "Mar 23, 2035 - 12:00 PM" },
    progressValue: 90,
    carrier: "Aramex",
  },
  {
    id: "#SH8881190",
    deliveryStatus: "Out for Delivery",
    cardIcon: Truck,
    company: "VitaFresh",
    companyLogo: Apple,
    service: "Food & Beverage",
    initialProgress: { location: "Nashville, TN", time: "Mar 21, 2035 - 06:00 AM" },
    endProgress: { location: "Jacksonville, FL", time: "Mar 22, 2035 - 10:00 AM" },
    progressValue: 85,
    carrier: "Local Courier",
  },
  {
    id: "#SH8776103",
    deliveryStatus: "In Transit",
    cardIcon: Plane,
    company: "StyleDepot",
    companyLogo: Target,
    service: "Fashion",
    initialProgress: { location: "Minneapolis, MN", time: "Mar 19, 2035 - 10:15 AM" },
    endProgress: { location: "Kansas City, MO", time: "Mar 22, 2035 - 03:30 PM" },
    progressValue: 60,
    carrier: "FedEx",
  },
];