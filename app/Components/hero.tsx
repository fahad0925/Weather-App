"use client";
import React, { useState } from "react";
import { TemperatureGraph } from "../animations/TempSideBar";
import GlobeCircle from "../animations/SideBarBottom";

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
    <div className="p-10  cw-1/5  ">
      <div className="h-[91vh] w-80  bg-white/2  backdrop-blur-8xl pt-5 border-gray-800 border rounded-2xl">
        <h2 className=" mask-b-from-60% pt-5 font- text-center text-gray-300 text-3xl">
          WeatherWise
        </h2>

        <div className="h-58 w-70 mt-6 m-5    pt-5  rounded-2xl">
          <h2 className="mask-b-from-60%  pt-5 font-sans   text-gray-100 text-xl">
            Status
          </h2>
          <TemperatureGraph
            data={sampleData}
            pointerIndex={3} // will show "Dangerous" on Thursday
            color="#FF0000"
            label="Outdoor Temp"
          />
        </div>

        <div className="h-58 w-70 mt-30 m-5  pt-5  rounded-2xl">
          <h2 className="mask-b-from-60% pt-5 font-sans   text-gray-100 text-xl">
            Area
          </h2>
          <GlobeCircle />
          <h2 className=" text-center mt-15 font-sans p-4   bg-black/20 backdrop-blur-2xl   rounded-3xl  text-gray-300 text-xl">
            Karachi
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
