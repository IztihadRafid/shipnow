"use client";
import { useState } from "react";
import { ArrowLeft, CalendarDays, ChevronDown } from "lucide-react";
import Link from "next/link";
import bdflag from "../../../../../public/bd.webp";
import usflag from "../../../../../public/us.webp";
import Image from "next/image";
import { shipmentsData } from "@/data/ShipmentsData";
const countryCodes = [
  { code: "+1", flagimg: usflag, label: "USA" },
  { code: "+880", flagimg: bdflag, label: "BAN" },
];
const shippingMethods = [
  "Door to Door",
  "Port to Port",
  "Warehouse Pickup",
  "Cross Docking",
];
const CreateShipmentForm = () => {
  const [senderCountry, setSenderCountry] = useState(countryCodes[0]);
  const [senderDropdownOpen, setSenderDropdownOpen] = useState(false);
  const [recipientCountry, setRecipientCountry] = useState(countryCodes[0]);
  const [recipientDropdownOpen, setRecipientDropdownOpen] = useState(false);
  const carriers = [...new Set(shipmentsData.map((item) => item.carrier))];
  const [notify, setNotify] = useState(true);
  const phoneValidation: Record<string, { regex: RegExp; message: string }> = {
    "+1": {
      regex: /^\d{10}$/,
      message: "Enter valid Phone",
    },
    "+880": {
      regex: /^1\d{9}$/,
      message: "Enter valid Phone",
    },
  };
  const [senderPhone, setSenderPhone] = useState("");
  const [senderPhoneError, setSenderPhoneError] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [recipientPhoneError, setRecipientPhoneError] = useState("");

  const validatePhone = (
    value: string,
    code: string,
    setError: (v: string) => void,
  ) => {
    const rule = phoneValidation[code];
    if (!rule) return;
    if (!value) {
      setError("");
      return;
    }
    setError(rule.regex.test(value) ? "" : rule.message);
  };

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: (v: string) => void,
    setError: (v: string) => void,
    code: string,
  ) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setValue(digitsOnly);
    validatePhone(digitsOnly, code, setError);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <div className="bg-gray-5 p-2  mx-auto">
      <section className="md:flex justify-between items-center rounded-lg hidden">
        <div className="bg-gray-5 rounded-lg p-2.5">
          <h3 className="text-[24px] font-bold flex items-center mr-1">
            <Link href="/shipments">
              <ArrowLeft />
            </Link>{" "}
            Create New Shipment
          </h3>
          <p className="text-[11px]">
            <span className="text-purple-1">Dashboard</span> /{" "}
            <span className="text-purple-1">Shipments</span> / Create New
            Shipment
          </p>
        </div>

        <div className="flex justify-between items-center bg-white gap-4">
          <Link
            href="/shipments/create"
            className="hidden md:inline-flex items-center bg-black text-gray-3 rounded-lg py-2.5 px-4"
          >
            + Add New Shipping
          </Link>
        </div>
      </section>

      <form
        onSubmit={handleSubmit}
        className="xl:w-[1177px] mx-auto  w-full bg-white rounded-xl p-5 gap-5"
      >
        <h2 className=" p-1 font-semibold text-[16px]">Shipment Form</h2>
        {/* body */}
        <div className="pb-2 mt-6 md:flex gap-5 bg-gray-5 rounded-xl">
          {/* sender */}
          <div className="p-5 gap-5 rounded-xl bg-gray-5 w-full">
            <div className="rounded-[10px] gap-5">
              <h4 className="text-[14px] font-bold">Sender Info</h4>
              <div className="mt-4">
                <div className="flex flex-col">
                  <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                    Company
                  </label>
                  <input
                    required
                    type="text"
                    name="senderCompany"
                    placeholder="Company name"
                    className="bg-white py-[9px] px-3 rounded-lg text-[12px]"
                  />
                </div>
              </div>
              <div className="mt-4 flex xl:flex-row flex-col   gap-4 ">
                <div className="mt-4 w-full">
                  <div className="flex flex-col">
                    <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="senderEmail"
                      placeholder="Enter Email"
                      className="bg-white py-[9px] px-3 rounded-lg text-[12px]"
                    />
                  </div>
                </div>
                <div className="mt-4 w-full">
                  <div className="flex flex-col">
                    <label className="text-[11px] text-gray-2 px-[1px] pb-1.5">
                      Phone
                    </label>
                    {/* FLAG */}
                    <div className="flex items-center bg-white rounded-lg border border-gray-4 overflow-visible relative">
                      <button
                        type="button"
                        onClick={() => setSenderDropdownOpen((v) => !v)}
                        className="flex items-center gap-1 px-3 py-[9px] border-r border-gray-4 text-[12px] shrink-0"
                      >
                        <Image
                          src={senderCountry?.flagimg}
                          alt={senderCountry?.label}
                          width={16}
                          height={12}
                        />
                        <span>{senderCountry.code}</span>
                        <ChevronDown size={14} className="text-gray-2" />
                      </button>

                      {senderDropdownOpen && (
                        <ul className="absolute top-full left-0 mt-1 w-32 bg-white border border-gray-4 rounded-lg shadow-md z-10">
                          {countryCodes.map((c) => (
                            <li key={c.code}>
                              <button
                                type="button"
                                onClick={() => {
                                  setSenderCountry(c);
                                  setSenderDropdownOpen(false);
                                  validatePhone(
                                    senderPhone,
                                    c.code,
                                    setSenderPhoneError,
                                  );
                                }}
                                className="flex items-center gap-2 w-full px-3 py-2 text-[12px] hover:bg-gray-5"
                              >
                                <Image
                                  src={c.flagimg}
                                  alt={c.label}
                                  width={16}
                                  height={12}
                                />
                                <span>{c.label}</span>
                                <span className="text-gray-2">{c.code}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                      <input
                        type="number"
                        name="phone1"
                        value={senderPhone}
                        onChange={(e) =>
                          handlePhoneChange(
                            e,
                            setSenderPhone,
                            setSenderPhoneError,
                            senderCountry.code,
                          )
                        }
                        placeholder="Enter Phone"
                        className="flex-1 py-[9px] px-3 text-[12px] outline-none rounded-r-lg"
                      />
                    </div>
                    {senderPhoneError && (
                      <p className="text-[11px] text-purple-1 mt-1">
                        {senderPhoneError}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-col">
                  <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                    Pickup Address
                  </label>
                  <textarea
                    rows={1}
                    required
                    name="senderAddress"
                    placeholder="Enter Address"
                    className="bg-white py-[9px] px-3 rounded-lg text-[12px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#E0E0E0] md:h-[262px] md:w-0 w-[278px] mx-auto my-auto"></div>
          {/* recipient */}
          <div className="p-5 gap-5 rounded-xl bg-gray-5 w-full">
            <div className="rounded-[10px] gap-5">
              <h4 className="text-[14px] font-bold">Sender Info</h4>
              <div className="mt-4">
                <div className="flex flex-col">
                  <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                    Company
                  </label>
                  <input
                    required
                    type="text"
                    name="recipientCompany"
                    placeholder="Company name"
                    className="bg-white py-[9px] px-3 rounded-lg text-[12px]"
                  />
                </div>
              </div>
              <div className="mt-4 flex xl:flex-row flex-col  gap-4">
                <div className="mt-4 w-full">
                  <div className="flex flex-col">
                    <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="recipientEmail"
                      placeholder="Enter Email"
                      className="bg-white py-[9px] px-3 rounded-lg text-[12px]"
                    />
                  </div>
                </div>
                <div className="mt-4 w-full">
                  <div className="flex flex-col">
                    <label className="text-[11px] text-gray-2 px-[1px] pb-1.5">
                      Phone
                    </label>
                    {/* FLAG */}
                    <div className="flex items-center bg-white rounded-lg border border-gray-4 overflow-visible relative">
                      <button
                        type="button"
                        onClick={() => setRecipientDropdownOpen((v) => !v)}
                        className="flex items-center gap-1 px-3 py-[9px] border-r border-gray-4 text-[12px] shrink-0"
                      >
                        <Image
                          src={recipientCountry?.flagimg}
                          alt={recipientCountry?.label}
                          width={16}
                          height={12}
                        />
                        <span>{recipientCountry.code}</span>
                        <ChevronDown size={14} className="text-gray-2" />
                      </button>

                      {recipientDropdownOpen && (
                        <ul className="absolute top-full left-0 mt-1 w-32 bg-white border border-gray-4 rounded-lg shadow-md z-10">
                          {countryCodes.map((c) => (
                            <li key={c.code}>
                              <button
                                type="button"
                                onClick={() => {
                                  setRecipientCountry(c);
                                  setRecipientDropdownOpen(false);
                                  validatePhone(
                                    recipientPhone,
                                    c.code,
                                    setRecipientPhoneError,
                                  );
                                }}
                                className="flex items-center gap-2 w-full px-3 py-2 text-[12px] hover:bg-gray-5"
                              >
                                <Image
                                  src={c.flagimg}
                                  alt={c.label}
                                  width={16}
                                  height={12}
                                />
                                <span>{c.label}</span>
                                <span className="text-gray-2">{c.code}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                      <input
                        type="number"
                        name="phone2"
                        value={recipientPhone}
                        onChange={(e) =>
                          handlePhoneChange(
                            e,
                            setRecipientPhone,
                            setRecipientPhoneError,
                            recipientCountry.code,
                          )
                        }
                        placeholder="Enter Phone"
                        className="flex-1 py-[9px] px-3 text-[12px] outline-none rounded-r-lg"
                      />
                    </div>
                    {recipientPhoneError && (
                      <p className="text-[11px] text-purple-1 mt-1">
                        {recipientPhoneError}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-col">
                  <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                    Pickup Address
                  </label>
                  <textarea
                    rows={1}
                    required
                    name="recipientAddress"
                    placeholder="Enter Address"
                    className="bg-white py-[9px] px-3 rounded-lg text-[12px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* package & shipment */}
        <div className="flex xl:flex-row flex-col mt-5">
          <div className="xl:w-[363px] md:w-full p-2 rounded-[10px] mx-5">
            <h4 className="text-[14px] font-bold">Package Details</h4>
            <div className="mt-4">
              <div className="flex flex-col">
                <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                  Item Description
                </label>
                <input
                  required
                  type="text"
                  name="itemDescription"
                  placeholder="Enter Item Description"
                  className=" py-[9px] px-3 rounded-lg text-[12px] w-full bg-gray-5"
                />
              </div>
            </div>

            <div className="grid xl:grid-cols-2 grid-cols-4 gap-2.5 ">
              <div className="mt-4">
                <div className="flex flex-col">
                  <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                    Quantity
                  </label>
                  <input
                    required
                    type="number"
                    name="quantity"
                    className=" py-[9px] px-3 rounded-lg text-[12px] w-full bg-gray-5"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-col">
                  <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                    Value
                  </label>
                  <input
                    required
                    type="text"
                    name="values"
                    placeholder="Enter Value"
                    className=" py-[9px] px-3 rounded-lg text-[12px] w-full bg-gray-5"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-col">
                  <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                    Weight
                  </label>
                  <input
                    required
                    type="text"
                    name="weight"
                    placeholder="Enter Weight"
                    className=" py-[9px] px-3 rounded-lg text-[12px] w-full bg-gray-5"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-col">
                <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                  Unit
                </label>
                <select
                  name="weightUnit"
                  defaultValue="kg"
                  className="py-[9px] px-3 text-[12px] bg-gray-5 rounded-lg"
                >
                  <option value="kg">kg</option>
                  <option value="gm">gm</option>
                </select>
              </div>
            </div>

            {/* dimension */}
            <div className="mt-4  md:border-b xl:border-none border-[#E0E0E0]">
              <div className="flex flex-col">
                <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                  Dimensions
                </label>
                <div className="flex gap-3">
                  <div>
                    <div className="flex ">
                      <input
                        required
                        type="text"
                        name="length"
                        placeholder="ex. 20"
                        className=" py-[9px] px-3 rounded-l-lg text-[12px] w-full bg-gray-5"
                      />
                      <div className="bg-gray-5 rounded-r-lg flex items-center justify-center text-[11px] w-[40px] text-gray-2">
                        cm
                      </div>
                    </div>
                    <label className="text-[11px] text-gray-2 px-[1px] pt-1.5 gap-1">
                      Length
                    </label>
                  </div>
                  <div>
                    <div className="flex ">
                      <input
                        required
                        type="text"
                        name="width"
                        placeholder="ex. 20"
                        className=" py-[9px] px-3 rounded-l-lg text-[12px] w-full bg-gray-5"
                      />
                      <div className="bg-gray-5 rounded-r-lg flex items-center justify-center text-[11px] w-[40px] text-gray-2">
                        cm
                      </div>
                    </div>
                    <label className="text-[11px] text-gray-2 px-[1px] pt-1.5 gap-1">
                      Width
                    </label>
                  </div>
                  <div>
                    <div className="flex ">
                      <input
                        required
                        type="text"
                        name="height"
                        placeholder="ex. 20"
                        className=" py-[9px] px-3 rounded-l-lg text-[12px] w-full bg-gray-5"
                      />
                      <div className="bg-gray-5 rounded-r-lg flex items-center justify-center text-[11px] w-[40px] text-gray-2">
                        cm
                      </div>
                    </div>
                    <label className="text-[11px] text-gray-2 px-[1px] pt-1.5 gap-1">
                      Height
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* border line */}
          <div className="border border-[#E0E0E0] xl:h-[262px]  xl:w-0  mx-auto my-auto"></div>

          <div className=" md:w-full p-2 rounded-[10px] mx-5">
            <h4 className="text-[14px] font-bold">Shipping Details</h4>
            <div>
              <div className="mt-4">
                {/* freight type */}
                <div className="flex flex-col mb-5">
                  <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                    Freight Type
                  </label>
                  <div className="grid md:grid-cols-4 grid-cols-2  gap-1.5  p-[1px]">
                    <div className="flex items-center justify-start gap-1 w-[128px]">
                      <input
                        required
                        type="radio"
                        name="freightType"
                        value="roadfreight"
                        className=" py-[9px] px-3 rounded-lg text-[12px]  bg-gray-5 accent-purple-1"
                      />
                      <label className="text-[12px] text-gray-2 px-[1px]  gap-1 whitespace-nowrap">
                        Road Freight
                      </label>
                    </div>
                    <div className="flex items-center justify-start gap-1 w-[128px] p-[1px]">
                      <input
                        required
                        type="radio"
                        name="freightType"
                        value="railfreight"
                        className=" py-[9px] px-3 rounded-lg text-[12px]  bg-gray-5 accent-purple-1"
                      />
                      <label className="text-[12px] text-gray-2 px-[1px]  gap-1 whitespace-nowrap">
                        Rail Freight
                      </label>
                    </div>
                    <div className="flex items-center justify-start gap-1 w-[128px] p-[1px]">
                      <input
                        required
                        type="radio"
                        name="freightType"
                        value="oceanfreight"
                        className=" py-[9px] px-3 rounded-lg text-[12px]  bg-gray-5 accent-purple-1"
                      />
                      <label className="text-[12px] text-gray-2 px-[1px]  gap-1 whitespace-nowrap">
                        Ocean Freight
                      </label>
                    </div>
                    <div className="flex items-center justify-start gap-1 w-[128px] p-[1px]">
                      <input
                        required
                        type="radio"
                        name="freightType"
                        value="airfreight"
                        className=" py-[9px] px-3 rounded-lg text-[12px]  bg-gray-5 accent-purple-1"
                      />
                      <label className="text-[12px] text-gray-2 px-[1px]  gap-1 whitespace-nowrap">
                        Air Freight
                      </label>
                    </div>
                  </div>
                </div>
                {/* data */}
                <div className="flex md:flex-row flex-col gap-2.5">
                  <div className="flex flex-col ">
                    <label className="text-[11px] text-gray-2  px-[1px] pb-1.5 gap-1">
                      Carrier
                    </label>
                    <select
                      required
                      name="carrier"
                      className="w-full  rounded-lg py-[9px] px-[12px]  border border-gray-300 bg-white  text-[12px]"
                      defaultValue=""
                    >
                      <option
                        value=""
                        disabled
                        className="text-[11px] bg-gray-5"
                      >
                        Select Carrier
                      </option>

                      {carriers.map((carrier) => (
                        <option
                          key={carrier}
                          value={carrier}
                          className="text-[11px] "
                        >
                          {carrier}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                      Shipping Method
                    </label>
                    <select
                      required
                      name="shppingmethod"
                      className="w-full  rounded-lg py-[9px] px-[12px]  border border-gray-300 bg-white  text-[12px]"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-[11px]">
                        Select Method
                      </option>

                      {shippingMethods.map((shppingmethod) => (
                        <option
                          key={shppingmethod}
                          value={shppingmethod}
                          className="text-[11px]"
                        >
                          {shppingmethod}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                      Shipment ID
                    </label>
                    <div className="flex gap-3">
                      <div>
                        <div className="flex ">
                          <input
                            required
                            type="text"
                            name="shipmentID"
                            placeholder="#SH9583742"
                            className=" py-[9px] px-3 rounded-lg text-[12px] w-full bg-gray-5"
                          />
                        </div>
                        <label className="text-[11px] text-gray-2 px-[1px] pt-1.5 gap-1">
                          Auto-generated
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                      Shipment Date
                    </label>
                    <div className="flex gap-3">
                      <div>
                        <div className="relative">
                          <input
                            type="date"
                            className=" py-[9px] px-3 rounded-lg text-[12px] w-full bg-gray-5"
                            name="shipmentDate"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex flex-col">
                    <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                      Note
                    </label>
                    <textarea
                      rows={2}
                      required
                      name="note"
                      placeholder="Add special delivery notes (optional)"
                      className=" py-[9px] px-3 rounded-lg text-[12px] bg-gray-5"
                    />
                  </div>
                </div>
                <div className="border border-[#E0E0E0] my-4 w-full mx-auto "></div>

                <div className="flex xl:flex-row md:flex-row flex-col gap-2.5">
                  <div className="flex flex-col">
                    <label className="text-[11px] text-gray-2 px-[1px] pb-1.5 gap-1">
                      Addional Services
                    </label>
                    <div className="flex xl:flex-row md:flex-row flex-col  gap-1.5 xl:items-center justify-start p-[1px]">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-start gap-1 w-[171px]">
                          <input
                            type="checkbox"
                            name="insurance"
                            value="insurance"
                            className=" py-[9px] px-3 rounded-lg text-[12px]  bg-gray-5 accent-purple-1"
                          />
                          <label className="text-[12px] text-gray-2 px-[1px]  gap-1 whitespace-nowrap">
                            Insurance Coverage
                          </label>
                        </div>
                        <div className="flex items-center justify-start gap-1 w-[171px] p-[1px]">
                          <input
                            type="checkbox"
                            name="signatureOnDelivery"
                            value="signatureOnDelivery"
                            className=" py-[9px] px-3 rounded-lg text-[12px]  bg-gray-5 accent-purple-1"
                          />
                          <label className="text-[12px] text-gray-2 px-[1px]  gap-1 whitespace-nowrap">
                            Signature on Delivery
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center justify-start gap-1 w-[171px] p-[1px]">
                          <input
                            type="checkbox"
                            name="temperatureControl"
                            value="temperatureControl"
                            className=" py-[9px] px-3 rounded-lg text-[12px]  bg-gray-5 accent-purple-1"
                          />
                          <label className="text-[12px] text-gray-2 px-[1px]  gap-1 whitespace-nowrap">
                            Temperature Control
                          </label>
                        </div>
                        <div className="flex items-center justify-start gap-1 w-[171px] p-[1px]">
                          <input
                            type="checkbox"
                            name="fragileItemHandling"
                            value="fragileItemHandling"
                            className=" py-[9px] px-3 rounded-lg text-[12px]  bg-gray-5 accent-purple-1"
                          />
                          <label className="text-[12px] text-gray-2 px-[1px]  gap-1 whitespace-nowrap">
                            Fragile Item Handling
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[271px]">
                    <label className="text-[11px] text-gray-2 pb-1.5">
                      Tracking & Status Updates
                    </label>

                    <label
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => setNotify(!notify)}
                    >
                      <div
                        className={`relative w-7 h-4 rounded-full transition-colors duration-300 ${
                          notify ? "bg-purple-1" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform duration-300 ${
                            notify ? "translate-x-3.5" : "translate-x-0.5"
                          }`}
                        />
                      </div>

                      <span className="text-[12px] text-gray-700">
                        Notify Recipient via Email/SMS
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#E0E0E0]   w-full  mx-auto my-5"></div>

        {/* buttons sections */}
        <div className="flex justify-center md:justify-end items-center gap-2.5">
          <button
            type="button"
            onClick={(e) => e.currentTarget.form?.reset()}
            className="text-[14px] bg-gray-5 hover:bg-gray-4 font-semibold px-[16px] py-[10px] rounded-lg"
          >
            Delete Form
          </button>
          <button
            type="submit"
            className="text-[14px] bg-gray-1 hover:bg-gray-700 text-white  font-semibold px-[16px] py-[10px] rounded-lg"
          >
            Submit Shipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateShipmentForm;
