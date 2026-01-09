"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const data = [
  { day: "01", lastWeek: 45, last6Days: 80 },
  { day: "02", lastWeek: 60, last6Days: 50 },
  { day: "03", lastWeek: 38, last6Days: 70 },
  { day: "04", lastWeek: 70, last6Days: 52 },
  { day: "05", lastWeek: 50, last6Days: 85 },
  { day: "06", lastWeek: 42, last6Days: 95 },
  { day: "07", lastWeek: 55, last6Days: 82 },
  { day: "08", lastWeek: 75, last6Days: 58 },
  { day: "09", lastWeek: 48, last6Days: 68 },
  { day: "10", lastWeek: 88, last6Days: 62 },
  { day: "11", lastWeek: 68, last6Days: 92 },
  { day: "12", lastWeek: 58, last6Days: 98 },
];

interface TooltipPayload {
  payload: {
    day: string;
    lastWeek: number;
    last6Days: number;
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
    return (
      <div className="bg-[#2D3958] text-white px-4 py-3 rounded-lg shadow-lg">
        <p className="text-sm font-semibold mb-1">Oluwajuwon Kayode</p>
        <p className="text-xs text-gray-300">Day {payload[0].payload.day}</p>
      </div>
    );
  }
  return null;
};

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl py-6 pr-6 pl-0 max-w-2xl">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-black mb-3">Revenue</h3>
          <p className="text-xl font-medium text-gray-900 mb-2">
            IDR 7.852.000
          </p>
          <p className="text-sm font-medium flex items-center gap-1">
            <Image
              src="/imgs/arrowup.svg"
              alt="increase"
              width={9}
              height={12}
            />
            <span className="text-green-600">2.1%</span>{" "}
            <span className="text-gray-400">vs last week</span>
          </p>
        </div>
        <button className="w-27.25 h-8 rounded-[5px] border-[0.5px] border-[#DDE4F0] shadow-[0px_2px_1px_0px_#4048520D] font-medium text-xs leading-5 tracking-[0.5px] text-[#5A6ACF] hover:cursor-pointer hover:bg-gray-50 transition-colors">
          View Report
        </button>
      </div>

      <p className="text-xs text-gray-500 mb-4">Sales from 1-12 Dec, 2020</p>

      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} barGap={4}>
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
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
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
          <Bar
            dataKey="last6Days"
            fill="#5A6ACF"
            radius={[4, 4, 0, 0]}
            barSize={12}
          />
          <Bar
            dataKey="lastWeek"
            fill="#E6E8EC"
            radius={[4, 4, 0, 0]}
            barSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
