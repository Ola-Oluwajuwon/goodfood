"use client";

import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
      {/* Search Bar */}
      <div className="flex-1 hidden sm:block" style={{ maxWidth: "625px" }}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-4 pr-10 py-2 bg-[#F8F9FC] rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:ring-opacity-20"
            style={{ color: "#1F384C" }}
          />
          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FFE6CC" }}
            >
              <Image
                src="/imgs/burger.png"
                alt="burger icon"
                width={20}
                height={20}
              />
            </div>
            <span
              className="text-sm font-medium hidden md:inline"
              style={{ color: "#1F384C" }}
            >
              Delicious Burger
            </span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              style={{ color: "#1F384C" }}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
              <button
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
                style={{ color: "#1F384C" }}
              >
                Profile
              </button>
              <button
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
                style={{ color: "#1F384C" }}
              >
                Settings
              </button>
            </div>
          )}
        </div>

        {/* Notification Bell */}
        <button className="relative hover:bg-gray-50 p-2 rounded-lg transition-colors">
          <Image
            src="/imgs/notificon.svg"
            alt="Notifications"
            width={20}
            height={20}
          />
          <span
            className="absolute top-1 right-1 w-3 h-3 rounded-full border-2 border-white"
            style={{ backgroundColor: "#EC5252" }}
          ></span>
        </button>
      </div>
    </header>
  );
}
