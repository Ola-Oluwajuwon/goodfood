import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RevenueChart from "./components/RevenueChart";
import OrderTimeChart from "./components/OrderTimeChart";
import RatingBubbles from "./components/RatingBubbles";
import MostOrderedFood from "./components/MostOrderedFood";
import OrderChart from "./components/OrderChart";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FC]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-0 lg:ml-55">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
            Dashboard
          </h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart - Spans 2 columns */}
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>

            {/* Order Time Chart */}
            <div className="lg:col-span-1">
              <OrderTimeChart />
            </div>

            {/* Rating Bubbles */}
            <div className="lg:col-span-1">
              <RatingBubbles />
            </div>

            {/* Most Ordered Food */}
            <div className="lg:col-span-1">
              <MostOrderedFood />
            </div>

            {/* Order Chart */}
            <div className="lg:col-span-1">
              <OrderChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
