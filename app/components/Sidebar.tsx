"use client";

import Image from "next/image";
import {
  BarChart3,
  ShoppingCart,
  Menu,
  MessageSquare,
  Settings,
  CreditCard,
  Users,
  HelpCircle,
  X,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { icon: BarChart3, label: "Dashboard", active: true },
  { icon: ShoppingCart, label: "Food Order", active: false },
  { icon: Menu, label: "Manage Menu", active: false },
  { icon: MessageSquare, label: "Customer Review", active: false },
];

const otherItems = [
  { icon: Settings, label: "Settings", active: false },
  { icon: CreditCard, label: "Payment", active: false },
  { icon: Users, label: "Accounts", active: false },
  { icon: HelpCircle, label: "Help", active: false },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-60 lg:hidden bg-[#6C5DD3] text-white p-2 rounded-lg shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`w-60 bg-[#F8F9FC] h-screen fixed left-0 top-0 flex flex-col z-50 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:flex`}
      >
        {/* Close Button (Mobile) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 lg:hidden text-gray-600 hover:text-gray-800"
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
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-[5px] transition-all duration-200 cursor-pointer ${
                      item.active
                        ? "bg-[#E6E8EC] text-[#6C5DD3]"
                        : "text-[#9FA2B4] hover:bg-[#E6E8EC] hover:text-[#6C5DD3]"
                    }`}
                  >
                    <Icon
                      size={20}
                      strokeWidth={2}
                      fill={item.active ? "currentColor" : "none"}
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
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[5px] text-[#9FA2B4] hover:bg-[#E6E8EC] hover:text-[#6C5DD3] transition-all duration-200 cursor-pointer"
                  >
                    <Icon size={20} strokeWidth={2} fill="none" />
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
