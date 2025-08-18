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
    <div className="p-10 ">
      <div className="h-230 w-80   backdrop-blur-2xl pt-5 border-gray-200 border-2 rounded-2xl">
        <p className=" pt-5 font-sans text-center text-gray-300 text-4xl">
          WeatherWise
        </p>

        <div className="h-58 w-70 mt-15 m-5  bg-black/3 backdrop-blur-2xl pt-5  rounded-2xl">
          <p className="mask-b-from-neutral-200  pt-5 font-sans   text-gray-100 text-xl">
            Status
          </p>
          <TemperatureGraph
            data={sampleData}
            pointerIndex={3} // will show "Dangerous" on Thursday
            color="#FF0000"
            label="Outdoor Temp"
          />
        </div>

        <div className="h-58 w-70 mt-25 m-5  bg-black/3 backdrop-blur-2xl pt-5  rounded-2xl">
          <p className="mask-b-from-neutral-200  pt-5 font-sans   text-gray-100 text-xl">
            Area
          </p>
          <GlobeCircle />
          <p className=" text-center mt-15 font-sans p-5   bg-black/30 backdrop-blur-2xl   rounded-2xl  text-gray-300 text-xl">
            Karachi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
