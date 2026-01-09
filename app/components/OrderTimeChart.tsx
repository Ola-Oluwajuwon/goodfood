"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Afternoon",
    value: 40,
    time: "1pm - 4pm",
    orders: 1890,
    color: "#6C5DD3",
  },
  {
    name: "Evening",
    value: 32,
    time: "5pm - 8pm",
    orders: 1520,
    color: "#A8A3E8",
  },
  {
    name: "Morning",
    value: 28,
    time: "9am - 12pm",
    orders: 1330,
    color: "#D5D2F5",
  },
];

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: any[];
}) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    return (
      <div className="bg-[#2D3958] text-white px-5 py-4 rounded-lg shadow-xl">
        <p className="font-semibold text-base mb-1">{item.name}</p>
        <p className="text-sm text-gray-300 mb-2">{item.time}</p>
        <p className="text-lg font-bold">
          {item.orders.toLocaleString()} orders
        </p>
      </div>
    );
  }
  return null;
};

export default function OrderTimeChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-gray-800 font-semibold text-lg mb-1">
            Order Time
          </h3>
          <p className="text-sm text-gray-500">From 1-6 Dec, 2020</p>
        </div>
        <button className="text-[#6C5DD3] text-sm font-medium hover:underline">
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
              paddingAngle={2}
              dataKey="value"
              strokeWidth={0}
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
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <div className="text-sm">
              <span className="text-gray-700">{item.name}</span>
              <span className="text-gray-900 font-semibold ml-2">
                {item.value}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
