"use client";
import { ArrowUpDown, FileText,Square } from "lucide-react";
import { invoices } from "@/data/invoices";
import { InvoiceStatus } from "@/data/invoiceTypes";

const statusStyles = {
  Paid: "bg-green-100 text-green-700",
  Unpaid: "bg-purple-1/15 text-purple-1",
  Overdue: "bg-gray-4 text-gray-1",
};

function formatDate(iso: string) {
  const datenew = new Date(iso);
  return datenew.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

interface InvoicesTableProps {
  selectedId: string;
  onSelect: (id: string) => void;
}
export default function InvoicesTable({ selectedId, onSelect }: InvoicesTableProps) {
  return (
    <div className="w-full  overflow-x-auto">
      <table className="w-full text-left ">
        <thead className="border-b border-gray-4 ">
          <tr className="text-gray-2 py-3.5 px-2.5 ">
            <th className="w-[40px] py-3 px-4 "><Square size={16}/></th>
            <th className="w-[76px]">
              <div className="flex items-center gap-1 text-[10px] ">Invoice ID <ArrowUpDown size={12} /></div>
            </th>
            <th className="w-[110px]">
              <div className="flex items-center gap-1 text-[10px]">Company <ArrowUpDown size={12} /></div>
            </th>
            <th className="w-[72px]">
              <div className="flex items-center gap-1 text-[10px]">Shipping ID <ArrowUpDown size={12} /></div>
            </th>
            <th className="w-[112px]">
              <div className="flex items-center gap-1 text-[10px] ">Date <ArrowUpDown size={12} /></div>
            </th>
            <th className="w-[54px]">
              <div className="flex items-center gap-1 text-[10px]">Amount <ArrowUpDown size={12} /></div>
            </th>
            <th className="w-[62px]">
              <div className="flex items-center gap-1 text-[10px]">Status <ArrowUpDown size={12} /></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => {
            const isSelected = invoice.id === selectedId;
            return (
              <tr
                key={invoice.id}
                onClick={() => onSelect(invoice.id)}
                className="border-b border-gray-4  py-3 px-2.5 "
              >
                <td className="py-3">
                  <input
                    type="checkbox"
                    className="accent-purple-1 w-[40px] cursor-pointer "
                    checked={isSelected}
                    readOnly
                  />
                </td>
                
                <td className="w-[76px] ">
                  <span className="flex items-center gap-1 text-[11px]  text-purple-1 font-semibold">
                    {invoice.id}
                    <FileText size={12} className="text-gray-2" />
                  </span>
                </td>
                <td className="w-[110px]">
                  <span className="text-[11px] text-gray-1">{invoice.company}</span>
                </td>
                <td className="w-[72px]">
                  <span className="text-[11px] text-gray-1">{invoice.shippingId}</span>
                </td>
                <td className="w-[112px] flex flex-col">
                  <p className="text-[11px] text-gray-1 mt-1">
                    {formatDate(invoice.issueDate)}{" "}
                    <span className="text-[10px] text-gray-2">(Issued)</span>
                  </p>
                  <p className="text-[12px] text-gray-1">
                    {formatDate(invoice.dueDate)}{" "}
                    <span className="text-[10px] text-gray-2">(Due)</span>
                  </p>
                </td>
                <td className="w-[54px]">
                  <span className="text-[11px] text-gray-1 font-semibold">
                    ${invoice.amount.toFixed(2)}
                  </span>
                </td>
                <td className="w-[62px]">
                  <span
                    className={`text-[11px] font-semibold rounded-[9px] px-2 py-[3px] ${statusStyles[invoice.status]}`}
                  >
                    {invoice.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}