"use client";
import { Search, Plus, Minus, Navigation, Truck } from "lucide-react";
const trackedShipment = {
  id: "#SH8743921",
  status: "In Transit",
  schedule: "On Schedule",
  courier: "Daniel Cooper",
  courierCompany: "SkyLogix Express",
  origin: { city: "San Francisco, CA, USA", time: "Mar 19, 2035 - 10:30 AM" },
  destination: { city: "New York, NY, USA", time: "Mar 23, 2035 - 03:00 PM (estimated)" },
  progressPercent: 55, 
};

export default function TrackCard() {
  return (
    <div className="relative border-8 border-gray-3 p-1 bg-gray-5 rounded-xl overflow-hidden  min-h-[440px]">
      <div className="absolute top-4 bg-gray-5 left-4 right-16 z-10 w-[254px]">
        <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
          <Search size={16} className="text-gray-2 " />
          <input
            type="text"
            placeholder="Search by Shipping ID..."
            className="w-full bg-transparent outline-none text-sm text-gray-1 placeholder:text-gray-2"
          />
        </div>
      </div>
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <button
          aria-label="Zoom in"
          className="w-9 h-9 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-1"
        >
          <Plus size={16} />
        </button>
        <button
          aria-label="Zoom out"
          className="w-9 h-9 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-1"
        >
          <Minus size={16} />
        </button>
      </div>
      <div className="relative h-40 mt-18 bg-gray-5">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 160"
          preserveAspectRatio="none"
        >
          <line x1="20" y1="130" x2="200" y2="70" stroke="#171717" strokeWidth="3" />
          <line x1="200" y1="70" x2="380" y2="30" stroke="#856DF3" strokeWidth="3" />
        </svg>
        <div
          className="absolute w-9 h-9 rounded-full bg-purple-1 flex items-center justify-center   -translate-x-1/2 -translate-y-1/2"
          style={{ left: "50%", top: "44%" }}
        >
          <Navigation size={16} className="text-gray-3 rotate-40" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 mx-4 mb-4 bg-white  rounded-lg p-4 ">
        <div className="flex items-start justify-between  mb-3">
          <div>
            <p className="font-semibold text-gray-1">{trackedShipment.id}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs bg-purple-1/10 text-purple-1 rounded-full px-2 py-0.5">
                {trackedShipment.status}
              </span>
              <span className="text-xs text-gray-2">{trackedShipment.schedule}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-2">Courier:</p>
            <p className="text-sm font-medium text-gray-1">{trackedShipment.courier}</p>
            <p className="text-xs text-gray-2">{trackedShipment.courierCompany}</p>
          </div>
        </div>
        <div className="relative flex items-center mb-3 ">
          <span className="w-3 h-3 rounded-full bg-purple-1 shrink-0 z-10" />
          <div className="flex-1 h-1 bg-gray-4 mx-1 relative">
            <div
              className="absolute inset-y-0 left-0 bg-purple-1"
              style={{ width: `${trackedShipment.progressPercent}%` }}
            />
            <Truck
              size={16}
              className="absolute -top-1.5 text-gray-3 bg-purple-1 rounded-full p-0.5"
              style={{ left: `calc(${trackedShipment.progressPercent}% - 8px)` }}
            />
          </div>
          <span className="w-3 h-3 rounded-full bg-gray-4 shrink-0 z-10" />
        </div>
        <div className="flex items-center justify-between text-xs ">
          <div>
            <p className="text-gray-1">{trackedShipment.origin.city}</p>
            <p className="text-gray-2">{trackedShipment.origin.time}</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-gray-1">{trackedShipment.destination.city}</p>
            <p className="text-gray-2">{trackedShipment.destination.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}