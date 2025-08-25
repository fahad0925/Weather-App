"use client";
import React, { useState } from "react";
import { TemperatureGraph } from "./Hero Components/TempSideBar";
import GlobeCircle from "./Hero Components/SideBarBottom";
import { useWeather } from "../api/Weather";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Hero = () => {
  const { data } = useWeather();
  const sampleData = [
    { name: "Mon", value: 22 },
    { name: "Tue", value: 28 },
    { name: "Wed", value: 30 },
    { name: "Thu", value: 27 },
    { name: "Fri", value: 32 },
    { name: "sat", value: 32 },
    { name: "sun", value: 32 },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Toggle Button (visible only on sm + md) */}
      {/* Vertical Trapezoid Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 lg:hidden w-10 h-24 bg-gradient-to-b from-gray-900/80 to-gray-800/80 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
        style={{
          clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0% 100%)", // trapezoid shape
        }}
      >
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
        </span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transform transition-transform duration-300 
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    w-4/5 sm:w-2/5 md:w-2/5 lg:relative lg:translate-x-0 lg:w-1/5 sm:p-3 xl:p-10 z-40`}
      >
        <div className="h-full lg:h-[91vh] w-full flex items-center flex-col justify-evenly  bg-black/90   lg:bg-white/2    backdrop-blur-4xl border-gray-800 border rounded-2xl">
          <h2 className="mask-b-from-60% text-center text-gray-300 text-3xl sm:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl mt-15 sm:mt-0">
            WeatherWise
          </h2>

          <div className="w-full p-4">
            <h2 className="mask-b-from-60% text-left pt-5 font-sans text-gray-100 text-xl">
              Status
            </h2>
            <TemperatureGraph
              data={sampleData}
              pointerIndex={3} // will show "Dangerous" on Thursday
              color="#FF0000"
              label="Outdoor Temp"
            />
          </div>

          <div className="w-full p-4">
            <h2 className="mask-b-from-60% font-sans text-gray-100 text-xl">
              Area
            </h2>
            <GlobeCircle />
            <h2 className="text-center mt-16 font-sans p-4 bg-black/20 backdrop-blur-2xl rounded-3xl text-gray-300 text-md lg:text-xl">
              {data?.nearest_area[0]?.areaName[0]?.value}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
