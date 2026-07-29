import { LucideIcon } from "lucide-react";

export type InvoiceStatus = "Paid" | "Unpaid" | "Overdue";

export interface InvoiceStatCard {
  label: string;
  amount: number;
  count: number;
  icon: string | LucideIcon;
}
export interface InvoiceRow {
  id: string;
  company: string;
  shippingId: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  status: InvoiceStatus;
}
export interface PackageSummaryItem {
  id: string;
  description: string;
  shipmentType: string;
  shipmentSpeed: string;
  price: number;
  qty: number;
}

export interface BillingParty {
  name: string;
  email: string;
  addressLine: string;
  cityStateZip: string;
  country: string;
  phone: string;
}

export interface InvoiceDetails {
  id: string;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  billFrom: BillingParty;
  billTo: BillingParty;
  packages: PackageSummaryItem[];
  taxPercent: number;
  fee: number;
  note: string;
}