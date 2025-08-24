import React, { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  ReferenceLine,
  YAxis,
  XAxis,
} from "recharts";

interface WeatherGraphProps {
  data: { day: string; temp: number }[];
}

const WeatherGraph = ({ data }: WeatherGraphProps) => {
  const [activeDay, setActiveDay] = useState<string>("");

  return (
    <div className="w-full text-center bg-transparent text-gray-300 select-none">
      {/* Days row */}
      <div className="flex justify-between px-2 md:px-6 text-base md:text-2xl font-semibold w-full">
        {data.map((item) => (
          <span
            key={item.day}
            className={`flex-1 text-center cursor-pointer transition-colors ${
              activeDay === item.day
                ? "text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveDay(item.day)}
          >
            {item.day}
          </span>
        ))}
      </div>

      {/* Chart */}
      <div className="relative h-[20vh] md:h-[26vh] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            key={activeDay}
            data={data}
            margin={{ top: 10, bottom: 10 }}
          >
            <YAxis domain={[20, 40]} hide />
            <XAxis dataKey="day" hide />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth={3}
              dot={false}
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            />
            {activeDay && (
              <ReferenceLine
                x={activeDay}
                stroke="rgba(255,255,255,0.9)"
                strokeWidth={2}
                strokeDasharray="3 3"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Temps row */}
      <div className="flex justify-between px-2 md:px-6 text-lg md:text-2xl mt-2 md:mt-4 w-full">
        {data.map((item) => (
          <span
            key={item.day}
            className={`flex-1 text-center cursor-pointer transition-all ${
              activeDay === item.day
                ? "text-white font-bold drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
                : "text-gray-500"
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
