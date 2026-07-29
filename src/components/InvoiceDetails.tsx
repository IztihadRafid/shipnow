import { invoiceDetailsMap } from "@/data/invoices";
import { InvoiceStatus } from "@/data/invoiceTypes";
import {
  calculateInvoiceTotals,
  calculateLineAmount,
} from "./Invoicecalculations ";
import { ArrowUpDown } from "lucide-react";

const statusStyles = {
  Paid: "bg-green-100 text-green-700",
  Unpaid: "bg-purple-1/10 text-purple-1",
  Overdue: "bg-gray-4 text-gray-1",
};

function formatDate(dt: string) {
  const newdate = new Date(dt);
  return newdate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function InvoiceDetails({ selectedId }: { selectedId: string }) {
  const invoice = invoiceDetailsMap[selectedId];

  if (!invoice) {
    return (
      <div className="bg-white rounded-xl p-5">
        <p className="text-[12px] text-gray-2">No details invoice Details</p>
      </div>
    );
  }

  const { subTotal, taxAmount, total } = calculateInvoiceTotals(
    invoice.packages,
    invoice.taxPercent,
    invoice.fee,
  );

  return (
    <div className="bg-white rounded-xl p-[12px]">
      <div className="flex justify-between items-center">
        <h4 className="text-[16px] font-semibold">Invoice Details</h4>
        <div className="flex gap-2.5">
          <button className="text-[12px] rounded-lg px-3 py-1.5">Edit</button>
          <button className="text-[12px] rounded-lg px-3 py-1.5">Hold</button>
          <button className="text-[12px] bg-gray-1 text-white rounded-lg px-3 py-1.5">
            Send Invoice
          </button>
        </div>
      </div>

      <div className="flex w-[423px] mx-auto justify-between items-start mt-4">
        <div>
          <p className="text-[14px] font-bold">
            Invoice <span className="text-purple-1">#{invoice.id}</span>
          </p>
          <span
            className={`inline-block text-[10px] font-semibold rounded-full px-2 py-[2px] mt-1 ${statusStyles[invoice.status]}`}
          >
            {invoice.status}
          </span>
        </div>
        <div className="text-right text-[11px] text-gray-2 w-[123px]">
          <p className="text-[10px]">
            Issue Date
            <span className=" text-[11px]text-gray-1 font-semibold">
              {formatDate(invoice.issueDate)}
            </span>
          </p>
          <p className="text-[10px]">
            Due Date
            <span className=" text-[11px]text-gray-1 font-semibold">
              {formatDate(invoice.dueDate)}
            </span>
          </p>
        </div>
      </div>

      <div className="bg-gray-5 rounded-lg p-3 mt-4 flex justify-between">
        <div>
          <p className="text-[10px] text-gray-2">Bill From</p>
          <p className=" font-bold mt-1 text-[16px]">{invoice.billFrom.name}</p>
          <p className="text-[11px] text-gray-2">{invoice.billFrom.email}</p>
          <p className="text-gray-2 text-[11px]">
            {invoice.billFrom.addressLine}
          </p>
          <p className="text-[11px] text-gray-2">
            {invoice.billFrom.cityStateZip}, {invoice.billFrom.country}
          </p>
          <p className="text-[11px]  text-gray-2">{invoice.billFrom.phone}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-gray-2">Bill To</p>
          <p className="font-bold mt-1 text-[16px]">{invoice.billTo.name}</p>
          <p className=" text-gray-2 text-[11px]">{invoice.billTo.email}</p>
          <p className="text-[11px] text-gray-2">
            {invoice.billTo.addressLine}
          </p>
          <p className="text-[11px] text-gray-2">
            {invoice.billTo.cityStateZip}, {invoice.billTo.country}
          </p>
          <p className="text-[11px] text-gray-2">{invoice.billTo.phone}</p>
        </div>
      </div>

      <h5 className="text-[14px] font-semibold mt-4">Package Summary</h5>
      <table className="w-full text-left mt-2 border border-gray-4 ">
        <thead>
          <tr className="text-gray-2 w-full flex items-center justify-between text-[10px] pt-3 px-2.5 pb-2 bg-gray-5 border-b border-gray-4 rounded-lg">
            <th className="w-[120px] flex items-center">
              <span className="text-[9px]">Description</span>
              <ArrowUpDown size={12} />
            </th>
            <th className="w-[79px] flex items-center ">
              <span className="text-[9px]">Shipment Type</span>
              <ArrowUpDown size={12} />
            </th>
            <th className="w-[40px] flex items-center ">
              <span className="text-[9px]">Price</span>
              <ArrowUpDown size={12} />
            </th>
            <th className="w-[30px] flex items-center ">
              <span className="text-[9px]">Qty</span>
              <ArrowUpDown size={12} />
            </th>
            <th className="w-[49px] flex items-center ">
              <span className="text-[9px]">Amount</span>
              <ArrowUpDown size={12} />
            </th>
          </tr>
        </thead>
        <tbody>
          {invoice.packages.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-4 last:border-0 p-2.5 flex items-center justify-between"
            >
              <td className="text-[10px] w-[120px] text-gray-1">
                {item.description}
              </td>
              <td className="w-[79px] text-[10px] text-gray-1">
                {item.shipmentType}
                <br />
                <span className="text-[9px] text-gray-2">
                  {item.shipmentSpeed}
                </span>
              </td>
              <td className="w-[40px] text-[10px] font-semibold text-gray-1">
                ${item.price.toFixed(2)}
              </td>
              <td className="w-[30px] text-[10px] font-semibold text-gray-1">
                {item.qty}
              </td>
              <td className="w-[49px] text-[10px] text-gray-1 font-semibold text-right">
                ${calculateLineAmount(item).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className=" w-full flex 1 text-[12px] text-gray-2 border-t-0 border-b border-x border-gray-4 rounded-lg">
       <div className="w-1/3"></div>
       <div className="w-2/3">
         <div className="flex justify-between py-1.5 px-2.5">
          <span className="text-gray-2 text-[10px] font-semibold">
            Sub Total
          </span>
          <span className="text-gray-1 text-[10px] font-semibold">
            ${subTotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between py-1.5 px-2.5">
          <span className="text-gray-2 text-[10px] font-semibold">
            Tax ({invoice.taxPercent}%)
          </span>
          <span className="text-gray-1 text-[10px] font-semibold">
            ${taxAmount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between py-1.5 px-2.5">
          <span className="text-gray-2 text-[10px] font-semibold">Fee</span>
          <span className="text-gray-1 text-[10px] font-semibold">
            ${invoice.fee.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between py-1.5 px-2.5 text-[13px] font-bold text-gray-1 pt-1 border-t border-gray-4">
          <span className="text-gray-1 text-[11px] font-bold">Total</span>
          <span className="text-gray-1 text-[12px] font-bold">
            ${total.toFixed(2)}
          </span>
        </div>
       </div>
      </div>

      <div className="mt-4">
        <p className="text-[10px] text-gray-1">Note</p>
        <p className="text-[11px] text-gray-2 mt-1">{invoice.note}</p>
      </div>
    </div>
  );
}
