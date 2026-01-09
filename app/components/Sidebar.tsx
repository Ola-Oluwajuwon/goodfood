"use client";

import Image from "next/image";
import { X } from "lucide-react";

const menuItems = [
  { icon: "/icons/chart.svg", label: "Dashboard", active: true },
  { icon: "/icons/buy.svg", label: "Food Order", active: false },
  { icon: "/icons/document.svg", label: "Manage Menu", active: false },
  { icon: "/icons/chat.svg", label: "Customer Review", active: false },
];

const otherItems = [
  { icon: "/icons/setting.svg", label: "Settings", active: false },
  { icon: "/icons/wallet.svg", label: "Payment", active: false },
  { icon: "/icons/profile.svg", label: "Accounts", active: false },
  { icon: "/icons/infosquare.svg", label: "Help", active: false },
];

export default function Sidebar({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`w-60 bg-[#F8F9FC] h-screen fixed left-0 top-0 flex flex-col z-50 transition-transform duration-300 xl:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button (Mobile) */}
        <button
          onClick={onToggle}
          className="absolute top-4 right-4 xl:hidden text-gray-600 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="h-16 flex items-center px-5 border-b border-gray-100">
          <Image
            src="/goodfood-logo.svg"
            alt="GoodFood logo"
            width={101}
            height={24}
            priority
            className="h-6 w-auto"
          />
        </div>

        <div className="flex-1 p-5 flex flex-col">
          {/* Menu Section */}
          <div className="mb-8">
            <p className="text-[#9FA2B4] text-xs mb-4 tracking-wide">MENU</p>
            <nav className="space-y-1">
              {menuItems.map((item) => {
                return (
                  <button
                    key={item.label}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-[5px] transition-all duration-200 cursor-pointer ${
                      item.active
                        ? "bg-[#E6E8EC] text-[#6C5DD3]"
                        : "text-[#9FA2B4] hover:bg-[#E6E8EC] hover:text-[#6C5DD3]"
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Others Section */}
          <div>
            <p className="text-[#9FA2B4] text-xs mb-4 tracking-wide">OTHERS</p>
            <nav className="space-y-1">
              {otherItems.map((item) => {
                return (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[5px] text-[#9FA2B4] hover:bg-[#E6E8EC] hover:text-[#6C5DD3] transition-all duration-200 cursor-pointer"
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
