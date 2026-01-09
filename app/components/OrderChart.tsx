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
import Image from "next/image";

const data = [
  { day: "01", last6Days: 33, lastWeek: 50 },
  { day: "02", last6Days: 20, lastWeek: 83 },
  { day: "03", last6Days: 66, lastWeek: 33 },
  { day: "04", last6Days: 60, lastWeek: 83 },
  { day: "05", last6Days: 33, lastWeek: 50 },
  { day: "06", last6Days: 100, lastWeek: 83 },
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
    <div className="bg-white p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-black mb-3">Order</h3>
          <p className="text-3xl font-bold text-gray-900 mb-2">2.568</p>
          <p className="text-sm font-medium flex items-center gap-1">
            <Image
              src="/imgs/arrowdown.svg"
              alt="decrease"
              width={9}
              height={12}
            />
            <span className="text-red-600">2.1%</span>{" "}
            <span className="text-gray-400">vs last week</span>
          </p>
        </div>
        <button className="w-27.25 h-8 rounded-[5px] border-[0.5px] border-[#DDE4F0] shadow-[0px_2px_1px_0px_#4048520D] font-medium text-xs leading-5 tracking-[0.5px] text-[#5A6ACF] hover:cursor-pointer hover:bg-gray-50 transition-colors">
          View Report
        </button>
      </div>

      <p className="text-xs text-gray-500 mb-4">Sales from 1-6 Dec, 2020</p>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ left: 0, right: 0 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0f0f0"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            axisLine={{ stroke: "#f0f0f0" }}
            tickLine={false}
            tick={{ fill: "#9FA2B4", fontSize: 12 }}
            padding={{ left: 0, right: 0 }}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: "20px" }}
            iconType="circle"
            iconSize={8}
            align="left"
            formatter={(value) => (
              <span className="text-xs text-gray-600">
                {value === "last6Days" ? "Last 6 days" : "Last Week"}
              </span>
            )}
          />
          <Line
            type="linear"
            dataKey="last6Days"
            stroke="#6C5DD3"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="linear"
            dataKey="lastWeek"
            stroke="#DFE0EB"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
