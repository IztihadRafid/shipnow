"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import logo1 from "../../public/logo.png";
import adminImg from "../../public/adminImg.jpg";
import { navLinks, NavLinksProps } from "@/data/navlinks";

export default function Sidebar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const NavLinks = ({
    sideNavlinks,
  }: {
    sideNavlinks: NavLinksProps | boolean;
  }) => (
    <nav className="flex flex-col gap-2 w-[191px] mt-5">
      {navLinks.map(({ name, href, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={() => setDrawerOpen(false)}
            className={`flex items-center gap-3 pl-3.5 pr-2.5 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-purple-2 text-blue-1"
                : "text-gray-2 hover:bg-gray-1/5"
            }`}
          >
            <Icon size={20} className="shrink-0" />
            {sideNavlinks && (
              <span className="text-sm font-seminibold ">{name}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop  sidebar */}
      <aside className="hidden  xl:flex fixed top-0 left-0 h-screen w-[223px] items-center bg-white  flex-col px-4 py-5 z-40">
        {/* logo section */}
        <div className="h-14  flex w-[191px] items-center gap-2 px-2">
          <Image src={logo1} alt="ShipNow logo" className="w-7 h-7" />
          <span className="font-black italic text-xl text-gray-1">SHIPNOW</span>
        </div>
        {/* profile section */}
        <div className="flex mt-5 items-center justify-between w-[191px] mx-auto bg-gray-5 rounded-lg">
          <div className="flex items-center justify-start gap-2 p-2 rounded-lg ">
            <Image
              src={adminImg}
              alt="Admin profile"
              className="w-8 h-8 rounded-full "
              width={32}
              height={32}
            />
            <div className="flex flex-col items-start">
              <h5 className="font-semibold text-[14px]">John Doe</h5>
              <p className="text-[10px]">Admin</p>
            </div>
          </div>
          <div className="w-[28px] h-[28px]  flex items-center justify-center ">
            <ChevronDown className="w-[16px] h-[16px]" />
          </div>
        </div>
        <NavLinks sideNavlinks />
      </aside>
      {/* Mobile sticky top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-gray-3 border-b border-gray-1/10 flex items-center justify-between px-4 z-40">
        <Image
          src={logo1}
          alt="ShipNow logo"
          className="w-7 h-7"
          width={32}
          height={32}
        />
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu size={24} className="text-gray-1" />
        </button>
      </div>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile drawer panel */}
      <aside
        className={`md:hidden fixed top-0 left-0 h-screen w-64 bg-gray-3 z-50 transform transition-transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-14 border-b border-gray-1/10">
          <Image
            src={logo1}
            alt="ShipNow logo"
            className="w-7 h-7"
            width={32}
            height={32}
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          >
            <X size={22} className="text-gray-1" />
          </button>
        </div>
        <NavLinks sideNavlinks />
      </aside>

      {/* Tablet icon rail */}
      <aside className="hidden md:flex xl:hidden fixed top-0 left-0 h-screen w-16 bg-gray-3 border-r border-gray-1/10 flex-col items-center z-40">
        <div className="h-14 flex items-center">
          <Image src={logo1} alt="ShipNow logo" width={32} height={32} />
        </div>
        <NavLinks sideNavlinks={false} />
      </aside>
    </>
  );
}
