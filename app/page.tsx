"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RevenueChart from "./components/RevenueChart";
import OrderTimeChart from "./components/OrderTimeChart";
import RatingBubbles from "./components/RatingBubbles";
import MostOrderedFood from "./components/MostOrderedFood";
import OrderChart from "./components/OrderChart";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white justify-center">
      <div className="flex w-full max-w-360 relative">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Main Content */}
        <div className="flex-1 ml-0 lg:ml-60">
          {/* Header */}
          <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

          {/* Dashboard Content */}
          <main className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-4 sm:pt-20 lg:sm:pt-6">
            <h1 className="text-xl font-medium text-gray-900 mb-6 sm:mb-8">
              Dashboard
            </h1>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Revenue Chart - Spans 2 columns */}
              <div className="lg:col-span-2 lg:border-r lg:border-b lg:border-gray-200 p-0 lg:p-6">
                <RevenueChart />
              </div>

              {/* Order Time Chart */}
              <div className="lg:col-span-1 lg:border-b lg:border-gray-200 p-0 lg:p-6">
                <OrderTimeChart />
              </div>

              {/* Rating Bubbles */}
              <div className="lg:col-span-1 lg:border-r lg:border-gray-200 p-0 lg:p-6">
                <RatingBubbles />
              </div>

              {/* Most Ordered Food */}
              <div className="lg:col-span-1 lg:border-r lg:border-gray-200 p-0 lg:p-6">
                <MostOrderedFood />
              </div>

              {/* Order Chart */}
              <div className="lg:col-span-1 p-0 lg:p-6">
                <OrderChart />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
