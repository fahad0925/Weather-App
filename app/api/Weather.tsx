"use client";
import { useQuery } from "@tanstack/react-query";
import { useWeatherCity } from "./WeatherContext";
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
    tempC?: string; // ✅ added
    temp_F: string;
    tempF?: string; // optional alias
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

  nearest_area: {
    areaName: { value: string }[];
    country: { value: string }[];
    region: { value: string }[];
    latitude: string;
    longitude: string;
    population: string;
    weatherUrl: { value: string }[];
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
      tempC?: string; // ✅ added
      temp_F: string;
      tempF?: string; // optional alias
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

  ClimateAverages: {
    month: {
      index: string;
      name: string;
      avgMinTemp: string;
      avgMinTemp_F: string;
      absMaxTemp: string;
      absMaxTemp_F: string;
      avgDailyRainfall: string;
    }[];
  }[];
};

export const useWeather = () => {
  const { city } = useWeatherCity();
  return useQuery<WeatherApiResponse>({
    queryKey: ["weather", city],
    queryFn: async () => {
      const response = await fetch(`https://wttr.in/${city}?format=j1`);
      return response.json();
    },
  });
};
// let [location, setLocation] = useState("Islamabad");

//   useEffect(() => {
//     if (!weather) return;

//     const condition =
//       weather.current_condition[0].weatherDesc[0].value.toLowerCase();

//     const imgSrc =
//       condition === "sunny"
//         ? "Weather.png"
//         : condition === "rainy"
//         ? "Weather.png"
//         : condition === "smoke"
//         ? "Weather.png"
//         : "Weather.png";

//     setImg(imgSrc);
//   }, [weather, setImg]);

//   return (
//     <div>
//       {/* <h1>Current Temp: {weather?.current_condition[0]?.temp_C}°</h1>
//       <p>{weather?.current_condition[0].weatherDesc[0].value}</p> */}
//     </div>
//   );
// };
