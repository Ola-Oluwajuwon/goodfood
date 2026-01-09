"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "01", last6Days: 45, lastWeek: 50 },
  { day: "02", last6Days: 52, lastWeek: 65 },
  { day: "03", last6Days: 68, lastWeek: 55 },
  { day: "04", last6Days: 65, lastWeek: 75 },
  { day: "05", last6Days: 48, lastWeek: 68 },
  { day: "06", last6Days: 88, lastWeek: 85 },
];

interface TooltipPayload {
  payload: {
    day: string;
    last6Days: number;
    lastWeek: number;
  };
  value: number;
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 px-4 py-3 rounded-lg shadow-lg">
        <p className="text-sm font-semibold text-gray-800 mb-1">
          Day {payload[0].payload.day}
        </p>
        <p className="text-xs text-[#6C5DD3] font-medium">
          Last 6 days: {payload[0].value} orders
        </p>
        {payload[1] && (
          <p className="text-xs text-gray-500 font-medium">
            Last Week: {payload[1].value} orders
          </p>
        )}
      </div>
    );
  }
  return null;
};

export default function OrderChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-gray-800 font-semibold text-lg mb-3">Order</h3>
          <p className="text-3xl font-bold text-gray-900 mb-2">2.568</p>
          <p className="text-sm text-red-600 font-medium">
            ↓ 2.1% vs last week
          </p>
        </div>
        <button className="text-[#6C5DD3] text-sm font-medium hover:underline">
          View Report
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-4">Sales from 1-6 Dec, 2020</p>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0f0f0"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9FA2B4", fontSize: 12 }}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: "20px" }}
            iconType="circle"
            formatter={(value) => (
              <span className="text-sm text-gray-600">
                {value === "last6Days" ? "Last 6 days" : "Last Week"}
              </span>
            )}
          />
          <Line
            type="monotone"
            dataKey="last6Days"
            stroke="#6C5DD3"
            strokeWidth={3}
            dot={{ fill: "#6C5DD3", r: 5 }}
            activeDot={{ r: 7 }}
          />
          <Line
            type="monotone"
            dataKey="lastWeek"
            stroke="#DFE0EB"
            strokeWidth={3}
            dot={{ fill: "#DFE0EB", r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
