"use client";

import { useState } from "react";
import { LineChart, Line, ResponsiveContainer, ReferenceLine } from "recharts";

interface WeatherGraphProps {
  data: { day: string; temp: number }[];
}

const WeatherGraph = ({ data }: WeatherGraphProps) => {
  const [activeDay, setActiveDay] = useState<string>("");

  return (
    <div className="w-full py-6 md:py-10 text-center text-gray-200">
      {/* Days row */}
      <div className="flex justify-between px-2 md:px-6 text-xs md:text-base font-medium mb-2 md:mb-4 w-full">
        {data.map((item) => (
          <span key={item.day} className="flex-1 text-center">
            {item.day}
          </span>
        ))}
      </div>

      {/* Chart */}
      <div className="relative h-36 md:h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#bbb"
              strokeWidth={3}
              dot={false}
            />
            {activeDay && (
              <ReferenceLine
                x={activeDay}
                stroke="#fff"
                strokeWidth={2}
                strokeDasharray="4 4"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Temps row */}
      <div className="flex justify-between px-2 md:px-6 text-sm md:text-xl mt-2 md:mt-4 w-full">
        {data.map((item) => (
          <span
            key={item.day}
            className={`flex-1 text-center cursor-pointer transition-colors ${
              activeDay === item.day ? "text-white font-bold" : "text-gray-400"
            }`}
            onClick={() => setActiveDay(item.day)}
          >
            {item.temp}°
          </span>
        ))}
      </div>
    </div>
  );
};

export default WeatherGraph;
