// WeatherContext.tsx
import { createContext, useContext, useState } from "react";

// Bag (context) banaya
const WeatherContext = createContext<any>(null);

// Store room jahan bag rakha hai
export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [city, setCity] = useState("california"); // default Karachi hai

  return (
    <WeatherContext.Provider value={{ city, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Shortcut: jahan bhi city chahiye, ye use karo
export const useWeatherCity = () => useContext(WeatherContext);
