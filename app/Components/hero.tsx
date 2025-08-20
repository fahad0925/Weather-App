"use client";
import React, { useState } from "react";
import { TemperatureGraph } from "./Hero Components/TempSideBar";
import GlobeCircle from "./Hero Components/SideBarBottom";

const Hero = () => {
  const sampleData = [
    { name: "Mon", value: 22 },
    { name: "Tue", value: 28 },
    { name: "Wed", value: 30 },
    { name: "Thu", value: 27 },
    { name: "Fri", value: 32 },
    { name: "sat", value: 32 },
    { name: "sun", value: 32 },
  ];

  return (
    <div className="p-10  cw-1/5   ">
      <div className="h-[91vh] w-[31vh] flex items-center flex-col  justify-evenly  bg-white/2  backdrop-blur-6xl border-gray-800 border rounded-2xl">
        <h2 className=" mask-b-from-60%  text-center text-gray-300  lg:text-2xl xl:text-3xl  ">
          WeatherWise
        </h2>

        <div className="w-full p-4 ">
          <h2 className="mask-b-from-60% text-left pt-5 font-sans   text-gray-100 text-xl">
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
          <h2 className="mask-b-from-60% font-sans   text-gray-100 text-xl">
            Area
          </h2>
          <GlobeCircle />
          <h2 className=" text-center mt-15 m-4 font-sans p-4   bg-black/20 backdrop-blur-2xl   rounded-3xl  text-gray-300 text-xl">
            Karachi
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
