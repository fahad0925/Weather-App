import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  ReferenceLine,
} from "recharts";

type GraphProps = {
  data: { name: string; value: number }[];
  pointerIndex?: number;
  color?: string;
  label?: string;
};

// helper function for weather status
function getStatus(temp: number) {
  if (temp >= 35) return "Dangerous";
  if (temp >= 25) return "Hot";
  if (temp >= 15) return "Normal";
  return "Cold";
}

export function TemperatureGraph({
  data,
  pointerIndex = 0,
  color = "#FF6B6B",
  label = "Temperature",
}: GraphProps) {
  const pointer = data[pointerIndex] || null;
  const status = pointer ? getStatus(pointer.value) : "";

  return (
    <div className="w-full h-64 bg-transparent relative p-4">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 30, bottom: 20 }}>
          {/* X axis hidden */}
          <XAxis dataKey="name" hide />

          {/* Y axis hidden */}
          <YAxis hide domain={["auto", "auto"]} />

          {/* Main line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />

          {/* Shorter vertical line (custom crosshair) */}
          {pointer && (
            <ReferenceLine
              x={pointer.name}
              stroke="#aaa"
              strokeDasharray="3 3"
              strokeWidth={1}
              segment={[
                { x: pointer.name, y: pointer.value - 5 },
                { x: pointer.name, y: pointer.value + 5 },
              ]}
            />
          )}

          {/* Pointer dot */}
          {pointer && (
            <ReferenceDot
              x={pointer.name}
              y={pointer.value}
              r={6}
              fill="#fff"
              stroke={color}
              strokeWidth={3}
              style={{ zIndex: 10 }}
            />
          )}

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.7)",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
            formatter={(value: number) => [`${value}°C`, label]}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Status label (Dangerous/Normal/etc.) */}
      {pointer && (
        <div className="absolute left-1/2 top-6 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-lg shadow">
          {status}
        </div>
      )}
    </div>
  );
}
