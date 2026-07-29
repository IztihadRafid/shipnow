"use client";
import InvoiceDetails from "@/components/InvoiceDetails";
import InvoicesTable from "@/components/InvoicesTable";
import { invoiceStats, invoices } from "@/data/invoices";
import { ChevronLeft, Plus, Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

const InvoiceBillingPage = () => {
  const [selectedId, setSelectedId] = useState(invoices[0].id);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSelectInvoice = (id: string) => {
    setSelectedId(id);
    setIsDrawerOpen(true);
  };

  return (
    <div className="p-5 bg-gray-5 min-h-screen xl:mt-0 mt-10">
      {/* Header section */}
      <section className="md:flex justify-between items-center rounded-lg hidden">
        <div className="bg-gray-5 rounded-lg p-2.5">
          <h3 className="text-[24px] font-bold">Invoices & Billing</h3>
          <p className="text-[11px]">
            <span className="text-blue-1">Dashboard</span> / Invoice & Billing
          </p>
        </div>
        <div className="flex items-center bg-white gap-1.5 rounded-lg p-2.5">
          <Search size={20} className="text-gray-2" />
          <input
            type="text"
            placeholder="Search anything"
            className="rounded-lg bg-transparent outline-none text-sm text-gray-1 placeholder:text-gray-2"
          />
        </div>
      </section>

      {/* Overview stats block */}
      <section className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5 mt-4">
        {invoiceStats.map((item, idx) => {
          const OverviewIcon = item.icon;
          return (
            <div
              key={idx}
              className="md:flex items-center gap-3 py-4 px-6 rounded-xl justify-between bg-white"
            >
              <div>
                <div className="w-[52px] h-[52px] p-3 flex items-center justify-center rounded-lg bg-purple-1">
                  <OverviewIcon size={24} className="text-white" />
                </div>
              </div>
              <div className="mt-2.5 md:mt-0">
                <h6 className="text-[12px] text-gray-2 font-semibold md:text-right text-left">
                  {item?.label}
                </h6>
                <p className="font-bold text-[28px] md:text-right text-left">
                  {item?.amount}
                </p>
                <p className="text-[10px] text-gray-2 md:text-right text-left">
                  from{" "}
                  <span className="px-[6px] py-[1px] bg-green-100 rounded-[10px]">
                    {item.count}
                  </span>{" "}
                  Invoices
                </p>
              </div>
            </div>
          );
        })}
      </section>

      
      <section className="w-full mt-5 flex items-start gap-4 relative overflow-hidden">
        {/* Invoice table */}
        <div className="bg-white rounded-xl p-4 flex-1 min-w-0 w-full">
          <div>
            <section className="flex justify-between items-center rounded-lg">
              <div className="rounded-lg p-2.5">
                <h3 className="text-[16px] font-semibold">Invoices</h3>
              </div>
              <div className="flex items-center justify-between gap-2.5">
                <div>
                  <div className="md:flex items-center bg-gray-5 gap-1.5 rounded-lg p-[6px] hidden">
                  <Search size={20} className="text-gray-2" />
                  <input
                    type="text"
                    placeholder="Search invoices"
                    className="rounded-lg bg-transparent text-sm text-gray-2"
                  />
                </div>
                <div className="flex items-center bg-gray-5 gap-1.5 rounded-lg p-[6px]  xl:hidden md:hidden">
                  <Search size={20} className="text-gray-2" />
                  <input
                    type="text"
                    className="rounded-lg w-1 bg-transparent text-sm text-gray-1 text-gray-2"
                  />
                </div>
                </div>
                <div className="rounded-lg p-[6px] bg-gray-5 cursor-pointer">
                  <SlidersHorizontal size={16} />
                </div>
                <div>
                  <button className="md:block xl:block hidden text-gray-3 text-[12px] font-semibold py-[6px] px-2.5 rounded-lg bg-gray-1">
                    New Invoice
                  </button>
                  <button className="md:hidden xl:hidden block text-gray-3 text-[12px] font-semibold py-[6px] px-2.5 rounded-lg bg-gray-1">
                    <Plus size={16}></Plus>  
                  </button>
                </div>
              </div>
            </section>
            <div>
              <InvoicesTable
                selectedId={selectedId}
                onSelect={handleSelectInvoice}
              />
            </div>
          </div>
        </div>

        {/* darwer opacity block */}
        {isDrawerOpen && (
          <div
            onClick={() => setIsDrawerOpen(false)}
            className="absolute inset-0 bg-black/20 z-40 xl:hidden rounded-xl"
          />
        )}

        <div
          className={` absolute top-0 right-0 z-50 h-full w-[479px] max-w-full bg-white p-4 overflow-y-auto transition-transform duration-300 ease-in-out rounded-xl
            ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}
            xl:static xl:translate-x-0 xl:z-auto xl:w-[479px] xl:h-auto xl:p-0 xl:block xl:overflow-visible
          `}
        >
          <div className="flex justify-end xl:hidden mb-2 absolute top-[30px] left-2 ">
            <button >
             <ChevronLeft   onClick={() => setIsDrawerOpen(false)}/>
            </button>
          </div>

          <InvoiceDetails selectedId={selectedId}/>
        </div>
      </section>
    </div>
  );
};

export default InvoiceBillingPage;