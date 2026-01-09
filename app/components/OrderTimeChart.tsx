"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Afternoon",
    value: 40,
    time: "1pm - 4pm",
    orders: 1890,
    color: "#5A6ACF",
  },
  {
    name: "Morning",
    value: 28,
    time: "9am - 12pm",
    orders: 1330,
    color: "#C7CEFF",
  },
  {
    name: "Evening",
    value: 32,
    time: "5pm - 8pm",
    orders: 1520,
    color: "#8593ED",
  },
];

const legendOrder = ["Afternoon", "Evening", "Morning"];

interface TooltipPayload {
  payload: {
    name: string;
    value: number;
    time: string;
    orders: number;
    color: string;
  };
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
}) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    // Check if this is the main data (not the overlay)
    if (!item.name || !item.time || !item.orders) {
      return null;
    }
    return (
      <div className="relative">
        <div
          className="px-4 py-3 rounded-lg shadow-xl text-white"
          style={{ backgroundColor: "#37375C" }}
        >
          <p className="font-medium text-xs leading-3.25 tracking-[0.3px] mb-1">
            {item.name}
          </p>
          <p className="font-normal text-xs leading-3 tracking-[0.3px] mb-2">
            {item.time}
          </p>
          <p className="font-medium text-base leading-4 tracking-[0.3px]">
            {item.orders.toLocaleString()} orders
          </p>
        </div>
        {/* Arrow pointer */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0 h-0"
          style={{
            bottom: "-8px",
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: "8px solid #37375C",
          }}
        ></div>
      </div>
    );
  }
  return null;
};

export default function OrderTimeChart() {
  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-black mb-3">Order Time</h3>
          <p className="text-xs text-gray-500 mb-4">From 1-6 Dec, 2020</p>
        </div>
        <button className="w-27.25 h-8 rounded-[5px] border-[0.5px] border-[#DDE4F0] shadow-[0px_2px_1px_0px_#4048520D] font-medium text-xs leading-5 tracking-[0.5px] text-[#5A6ACF] hover:cursor-pointer hover:bg-gray-50 transition-colors">
          View Report
        </button>
      </div>

      <div className="relative">
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={0}
              dataKey="value"
              strokeWidth={0}
              startAngle={305} // ← Start from top (12 o'clock)
              endAngle={665} // ← End at top (12 o'clock) after full circle
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-8 mt-4">
        {legendOrder.map((name) => {
          const item = data.find((d) => d.name === name)!;
          return (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-600">{item.name}</span>
                <span className="text-xs text-gray-600 font-semibold">
                  {item.value}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
