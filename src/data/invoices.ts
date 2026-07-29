import {
  BadgeCheck,
  ClockFading,
  MessageSquareX,
  SquircleDashed,
} from "lucide-react";
import { InvoiceStatCard, InvoiceRow, InvoiceDetails } from "./invoiceTypes";

// Top stat cards
export const invoiceStats: InvoiceStatCard[] = [
  { label: "Paid Invoices", amount: 28890, count: 350, icon: BadgeCheck },
  { label: "Unpaid Invoices", amount: 16700, count: 120, icon: MessageSquareX },
  { label: "Pending Invoices", amount: 8050, count: 80, icon: SquircleDashed },
  { label: "Overdue Invoices", amount: 22110, count: 245, icon: ClockFading },
];

// Invoices table
export const invoices: InvoiceRow[] = [
  { id: "INV-1001", company: "TechGear Inc.", shippingId: "#SH9283746", issueDate: "2035-03-15", dueDate: "2035-03-22", amount: 1250.00, status: "Paid" },
  { id: "INV-1002", company: "StyleHub Co.", shippingId: "#SH9182635", issueDate: "2035-03-16", dueDate: "2035-03-23", amount: 980.00, status: "Unpaid" },
  { id: "INV-1003", company: "FreshNest", shippingId: "#SH9037821", issueDate: "2035-03-14", dueDate: "2035-03-21", amount: 1320.00, status: "Paid" },
  { id: "INV-1004", company: "FitPlus Gear", shippingId: "#SH9374652", issueDate: "2035-03-17", dueDate: "2035-03-24", amount: 1150.00, status: "Unpaid" },
  { id: "INV-1005", company: "AutoParts Pro", shippingId: "#SH9457830", issueDate: "2035-03-15", dueDate: "2035-03-22", amount: 1480.00, status: "Overdue" },
  { id: "INV-1006", company: "EcoLights", shippingId: "#SH8821349", issueDate: "2035-03-13", dueDate: "2035-03-20", amount: 790.00, status: "Paid" },
  { id: "INV-1007", company: "GreenHaven", shippingId: "#SH8967432", issueDate: "2035-03-14", dueDate: "2035-03-21", amount: 875.00, status: "Paid" },
  { id: "INV-1008", company: "ModaWear", shippingId: "#SH8893247", issueDate: "2035-03-16", dueDate: "2035-03-23", amount: 910.00, status: "Unpaid" },
  { id: "INV-1009", company: "SunCore Panels", shippingId: "#SH9018723", issueDate: "2035-03-17", dueDate: "2035-03-24", amount: 1600.00, status: "Unpaid" },
  { id: "INV-1010", company: "VitaFresh", shippingId: "#SH8881190", issueDate: "2035-03-15", dueDate: "2035-03-22", amount: 1120.00, status: "Overdue" },
  { id: "INV-1011", company: "SmartAppliance", shippingId: "#SH8923752", issueDate: "2035-03-18", dueDate: "2035-03-25", amount: 1050.00, status: "Paid" },
];
// 4 data for calculations
export const invoiceDetailsMap : Record<string, InvoiceDetails> = {
  "INV-1001": {
    id: "INV-1001",
    status: "Paid",
    issueDate: "2035-03-15",
    dueDate: "2035-03-22",
    billFrom: {
      name: "TechGear Inc.",
      email: "billing@techgear.com",
      addressLine: "412 Circuit Ave, Austin,",
      cityStateZip: "TX 73301",
      country: "USA",
      phone: "+1 512-555-1188",
    },
    billTo: {
      name: "ShipNow Logistics",
      email: "accounts@shipnow.com",
      addressLine: "901 Distribution Ave, Charlotte, NC",
      cityStateZip: "28217",
      country: "USA",
      phone: "+1 704-555-9911",
    },
    packages: [
      { id: "pkg-1001-1", description: "Wireless Router Kit", shipmentType: "Air Freight", shipmentSpeed: "Express", price: 250.00, qty: 3 },
      { id: "pkg-1001-2", description: "Smart Plug Set", shipmentType: "Air Freight", shipmentSpeed: "Standard", price: 100.00, qty: 5 },
    ],
    taxPercent: 8,
    fee: 15.00,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
 
  "INV-1002": {
    id: "INV-1002",
    status: "Unpaid",
    issueDate: "2035-03-16",
    dueDate: "2035-03-23",
    billFrom: {
      name: "StyleHub Co.",
      email: "billing@stylehub.com",
      addressLine: "77 Fashion Row, New York,",
      cityStateZip: "NY 10001",
      country: "USA",
      phone: "+1 212-555-3345",
    },
    billTo: {
      name: "ShipNow Logistics",
      email: "accounts@shipnow.com",
      addressLine: "901 Distribution Ave, Charlotte, NC",
      cityStateZip: "28217",
      country: "USA",
      phone: "+1 704-555-9911",
    },
    packages: [
      { id: "pkg-1002-1", description: "Denim Jacket Pack", shipmentType: "Road Freight", shipmentSpeed: "Standard", price: 140.00, qty: 4 },
      { id: "pkg-1002-2", description: "Graphic Tee Bundle", shipmentType: "Road Freight", shipmentSpeed: "Standard", price: 60.00, qty: 7 },
    ],
    taxPercent: 8,
    fee: 10.00,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
 
  "INV-1005": {
    id: "INV-1005",
    status: "Overdue",
    issueDate: "2035-03-15",
    dueDate: "2035-03-22",
    billFrom: {
      name: "AutoParts Pro",
      email: "billing@autopartspro.com",
      addressLine: "1560 Motorway Dr, Detroit,",
      cityStateZip: "MI 48201",
      country: "USA",
      phone: "+1 313-555-7723",
    },
    billTo: {
      name: "ShipNow Logistics",
      email: "accounts@shipnow.com",
      addressLine: "901 Distribution Ave, Charlotte, NC",
      cityStateZip: "28217",
      country: "USA",
      phone: "+1 704-555-9911",
    },
    packages: [
      { id: "pkg-1005-1", description: "Brake Pad Set", shipmentType: "Road Freight", shipmentSpeed: "Express", price: 185.00, qty: 4 },
      { id: "pkg-1005-2", description: "Engine Oil Filter Pack", shipmentType: "Road Freight", shipmentSpeed: "Standard", price: 148.00, qty: 5 },
    ],
    taxPercent: 8,
    fee: 20.00,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
 
  "INV-1008": {
    id: "INV-1008",
    status: "Unpaid",
    issueDate: "2035-03-16",
    dueDate: "2035-03-23",
    billFrom: {
      name: "ModaWear",
      email: "billing@modawear.com",
      addressLine: "89 Franklin St, Boston,",
      cityStateZip: "MA 02110",
      country: "USA",
      phone: "+1 617-555-2290",
    },
    billTo: {
      name: "ShipNow Logistics",
      email: "accounts@shipnow.com",
      addressLine: "901 Distribution Ave, Charlotte, NC",
      cityStateZip: "28217",
      country: "USA",
      phone: "+1 704-555-9911",
    },
    packages: [
      { id: "pkg-1008-1", description: "Lightweight Hoodie Pack", shipmentType: "Road Freight", shipmentSpeed: "Express", price: 120.00, qty: 3 },
      { id: "pkg-1008-2", description: "Autumn Jacket Set", shipmentType: "Road Freight", shipmentSpeed: "Standard", price: 180.00, qty: 2 },
      { id: "pkg-1008-3", description: "Lightweight Hoodie Pack", shipmentType: "Road Freight", shipmentSpeed: "Express", price: 95.00, qty: 2 },
    ],
    taxPercent: 8,
    fee: 10.00,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
};