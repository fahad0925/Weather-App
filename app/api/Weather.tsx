"use client";
import React, { useEffect, useState } from "react";
type WeatherApiResponse = {
  current_condition: {
    FeelsLikeC: string;
    FeelsLikeF: string;
    cloudcover: string;
    humidity: string;
    observation_time: string;
    precipMM: string;
    pressure: string;
    temp_C: string;
    temp_F: string;
    uvIndex: number;
    visibility: string;
    weatherCode: string;
    weatherDesc: { value: string }[];
    weatherIconUrl: { value: string }[];
    winddir16Point: string;
    winddirDegree: string;
    windspeedKmph: string;
    windspeedMiles: string;
  }[];
  weather: {
    date: string;
    maxtempC: string;
    mintempC: string;
    hourly: {
      FeelsLikeC: string;
      FeelsLikeF: string;
      cloudcover: string;
      humidity: string;
      precipMM: string;
      pressure: string;
      temp_C: string;
      temp_F: string;
      time: string;
      uvIndex: number;
      visibility: string;
      weatherCode: string;
      weatherDesc: { value: string }[];
      weatherIconUrl: { value: string }[];
      winddir16Point: string;
      winddirDegree: string;
      windspeedKmph: string;
      windspeedMiles: string;
    }[];
  }[];
};
interface props {
  setImg: any;
}

const Weather = ({ setImg }: props) => {
  let [location, setLocation] = useState("Islamabad");
  let [weather, setWeather] = useState<WeatherApiResponse>();
  let api = `https://wttr.in/${location}?format=j1`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setWeather(data);
      } catch {
        console.error("Error Fetching data");
      }
    };
    fetchData();
  }, [setImg]);

  useEffect(() => {
    if (!weather) return;

    const condition =
      weather.current_condition[0].weatherDesc[0].value.toLowerCase();

    const imgSrc =
      condition === "sunny"
        ? "Weather.png"
        : condition === "rainy"
        ? "Weather.png"
        : condition === "smoke"
        ? "Weather.png"
        : "Weather.png";

    setImg(imgSrc);
  }, [weather, setImg]);

  return (
    <div>
      {/* <h1>Current Temp: {weather?.current_condition[0]?.temp_C}°</h1>
      <p>{weather?.current_condition[0].weatherDesc[0].value}</p> */}
    </div>
  );
};

export default Weather;
