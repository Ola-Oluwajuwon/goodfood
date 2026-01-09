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

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: any[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#2D3958] text-white px-4 py-3 rounded-lg shadow-lg">
        <p className="text-sm font-semibold mb-1">Silvernus Ifoghale</p>
        <p className="text-xs text-gray-300">Day {payload[0].payload.day}</p>
      </div>
    );
  }
  return null;
};

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-gray-800 font-semibold text-lg mb-3">Revenue</h3>
          <p className="text-3xl font-bold text-gray-900 mb-2">IDR 7.852.000</p>
          <p className="text-sm text-green-600 font-medium">
            ↑ 2.1% vs last week
          </p>
        </div>
        <button className="text-[#6C5DD3] text-sm font-medium hover:underline">
          View Report
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-4">Sales from 1-12 Dec, 2020</p>

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
            formatter={(value) => (
              <span className="text-sm text-gray-600">
                {value === "last6Days" ? "Last 6 days" : "Last Week"}
              </span>
            )}
          />
          <Bar
            dataKey="last6Days"
            fill="#6C5DD3"
            radius={[4, 4, 0, 0]}
            barSize={12}
          />
          <Bar
            dataKey="lastWeek"
            fill="#C5C7CD"
            radius={[4, 4, 0, 0]}
            barSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
