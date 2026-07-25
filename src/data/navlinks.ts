import { Bell, CalendarDays, CarTaxiFront, ChartNetwork, ClipboardMinus, IdCardLanyard, LayoutDashboard, LucideIcon, Mail, Settings, Truck, Tv, Warehouse } from "lucide-react";
export interface NavLinksProps {
    name: string;
    href: string;
    icon: string | LucideIcon; 
}
export const navLinks = [
    {name: "Dashboard", href: "/dashboard", icon:LayoutDashboard},
    {name: "Analytics", href: "/analytics", icon:Tv},
    {name: "Calendar", href: "/calendar", icon:CalendarDays},
    {name: "Shipments", href: "/shipments", icon:Truck},
    {name: "Tracking", href: "/tracking", icon:ChartNetwork},
    {name: "Warehouse", href: "/warehouse", icon:Warehouse},
    {name: "Fleets", href: "/fleets", icon:CarTaxiFront},
    {name: "Drivers", href: "/drivers", icon:IdCardLanyard},
    {name: "Invoices & Billing", href: "/invoices", icon:ClipboardMinus},
    {name: "Message", href: "/message", icon:Mail},
    {name: "Notification", href: "/notification", icon:Bell},
    {name: "Settings", href: "/settings", icon:Settings},
]
