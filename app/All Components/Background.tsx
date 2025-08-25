"use client";
import React from "react";
import { useWeather } from "../api/Weather";

const getVideoSource = (condition: string | undefined) => {
  if (!condition) return "light.mp4";

  condition = condition.toLowerCase();

  if (condition.includes("sunny") || condition.includes("clear"))
    return "sunny.mp4";
  if (condition.includes("rain")) return "rainy.mp4";
  if (condition.includes("snow")) return "snow.mp4";
  if (
    condition.includes("fog") ||
    condition.includes("smoke") ||
    condition.includes("mist")
  )
    return "light.mp4";

  return "light.mp4";
};

const WeatherBackground = () => {
  const { data, isLoading } = useWeather();
  if (isLoading || !data) return null;

  const condition = data.current_condition[0].weatherDesc[0].value;
  const source = getVideoSource(condition);

  return (
    <video
      key={source}
      className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={`/${source}`} type="video/mp4" />
    </video>
  );
};

export default WeatherBackground;
