import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaCloudBolt } from "react-icons/fa6";
import WeatherGraph from "./main-page-comp/DaysGraph";
import { useWeather } from "../api/Weather";
import { useWeatherCity } from "../api/WeatherContext";

// You can fully control these values here

const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [temp, setTemp] = useState(0);

  const { setCity } = useWeatherCity();
  const { data: location } = useWeather();
  const timeLabels = ["12AM", "3AM", "6AM", "9AM", "12PM", "3PM", "6PM", "9PM"];

  const data = timeLabels.map((label, i) => ({
    day: label,
    temp: Number(location?.weather[temp]?.hourly[i]?.tempC),
  }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputValue);

    if (inputValue) {
      setCity(inputValue);
      setInputValue("");
    }
  };
  return (
    <div className=" sm:w-5/5 lg:w-4/5 p-2 pt-3 pr-3 xl:pt-10 lg:pr-10">
      <div className="flex items-center border   border-gray-700  w-[100$] sm:w-[97%] rounded-3xl">
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full relative"
        >
          <input
            className="w-full px-4 py-2   ml-7 bg-transparent text-gray-100  text-md sm:text-xl  focus:outline-none"
            type="text"
            placeholder="Enter Your City"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <FaLocationArrow className="absolute ml-4  text-xl " />
          <button
            type="submit"
            className=" px-3 py-1 sm:px-6  sm:py-2 rounded-4xl bg-gradient-to-r from-white/20 via-gray-500 to-transparent border border-gray-600 shadow-md hover:shadow-lg text-gray-200 font-medium"
          >
            Change
          </button>
        </form>
      </div>
      <div className="flex  sm:flex-row mt-5 ">
        <IoLocationSharp className="text-2xl" />
        <h1 className="mask-b-from-60% pt-0.5 font-sans   text-gray-100 ">
          {location?.nearest_area[0]?.region[0]?.value}{" "}
          {location?.nearest_area[0]?.country[0]?.value} (
          {location?.weather[0]?.date}){" "}
        </h1>
      </div>
      {/* temperatures */}
      <div className="flex flex-col sm:flex-row py-3 sm:py-0 gap-5 sm:gap-0 justify-between mt-[2%] ">
        <div className="flex gap-6 ">
          <h1 className="mask-b-from-1%  text-center text-gray-300 text-7xl  sm:text-5xl lg:text-6xl xl:text-8xl  ">
            {location?.current_condition[0]?.temp_C}º
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-10 px-3 rounded-2xl  bg-white/7 backdrop-blur-6xl border border-gray-600 ">
              <p className="text-2xl">H</p>
              <p className="text-2xl">{location?.weather[0].maxtempC}º</p>
            </div>
            <div className="flex gap-10 px-3 rounded-2xl  bg-white/7 backdrop-blur-6xl border border-gray-600">
              <p className="text-2xl">L</p>
              <p className="text-2xl">{location?.weather[0].mintempC}º</p>
            </div>
          </div>
        </div>
        <div className=" w-full  sm:w-[50%] md:w-[40%]  lg:w-[22%]">
          <p className="mask-b-from-60% font-sans   text-gray-300 ">
            {" "}
            With real time data and advanced technology, we provide reliable
            forcast for any location around the world.{" "}
          </p>
        </div>
      </div>

      {/* heading */}

      <div className="flex flex-col py-5 sm:flex-row xl:mt-[3vh] justify-between ">
        {/* heading-1*/}
        <div>
          <h1 className=" text-2xl  sm:text-3xl lg:text-5xl xl:text-7xl bg-gradient-to-r from-white/60 to-gray-700 bg-clip-text text-transparent  ">
            {location?.current_condition[0]?.weatherDesc[0]?.value}
          </h1>
        </div>

        {/* heading 2-0 */}
        <div>
          <h1 className="ask-b-from-60% font-sans sm:p-3  text-gray-400 ">
            Recently Searched
          </h1>

          {/* boxes */}
          <div className="flex gap-[2vh]">
            {/* first box */}
            <div className=" bg-black/5 backdrop-blur-4xl border border-gray-600 h-[17vh] w-[20vh] rounded-3xl p-[2vh] flex flex-col justify-evenly">
              <div className="flex justify-between ">
                {" "}
                <FaCloudBolt className="text-3xl  sm:text-4xl 2xl:text-5xl " />
                <h1 className="mask-b-from-1% text-gray-300 text-4xl  sm:text-5xl 2xl:text-6xl ">
                  {location?.weather[0].maxtempC}º
                </h1>
              </div>
              <div className="">
                <h1 className="mask-b-from-1% text-gray-300  text-sm sm:text-md  2xl:text-lg">
                  Area: {location?.nearest_area[0]?.areaName[0]?.value}
                </h1>
                <h1 className="mask-b-from-1% text-gray-300 text-sm sm:text-md  2xl:text-lg">
                  Population:{location?.nearest_area[0]?.population}{" "}
                </h1>
              </div>
            </div>
            {/* second box */}
            <div className="bg-black/5 backdrop-blur-4xl border border-gray-600 h-[17vh] w-[20vh] rounded-3xl  p-[2vh] flex flex-col justify-evenly">
              <div className="flex justify-between ">
                {" "}
                <FaCloudBolt className=" text-3xl  sm:text-4xl 2xl:text-5xl " />
                <h1 className="mask-b-from-1% text-gray-300 text-4xl  sm:text-5xl 2xl:text-6xl">
                  {location?.weather[0].mintempC}º
                </h1>
              </div>
              <div className="">
                <h1 className="mask-b-from-1% text-gray-300 text-sm sm:text-md  2xl:text-lg">
                  Latitude: {location?.nearest_area[0]?.latitude}
                </h1>
                <h1 className="mask-b-from-1% text-gray-300 text-sm sm:text-md  2xl:text-lg">
                  Longitude: {location?.nearest_area[0]?.longitude}{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* heading end */}
      </div>

      {/* last-days weather */}
      <div className=" flex  flex-col sm:flex-row gap-2  xl:gap-4 mb-[5vh] mt-[3vh] lg:-mt-[3vh]">
        <button
          onClick={() => setTemp(0)}
          className=" px-9 py-3 rounded-3xl text-white/80font-medium backdrop-blur-md bg-gradient-to-r from-white/10 via-gray-900/60 to-black/10 border border-gray-400/40 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-[1.03] transition duration-200"
        >
          Today
        </button>
        <button
          onClick={() => setTemp(1)}
          className=" px-6 py-3 rounded-3xl text-white/80 font-medium backdrop-blur-md bg-gradient-to-r from-white/10 via-gray-900/60 to-black/10 border border-gray-400/40 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-[1.03] transition duration-200"
        >
          Tomorrow
        </button>
        <button
          onClick={() => setTemp(2)}
          className=" px-6 py-2 rounded-3xl text-white/80 font-medium backdrop-blur-md bg-gradient-to-r from-white/10 via-gray-900/60 to-black/10 border border-gray-400/40 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-[1.03] transition duration-200"
        >
          Overmorrow
        </button>
      </div>

      <div className="  mx-0  md:-mt-9 xl:mt-0   xl:-mx-5">
        <WeatherGraph data={data} />
      </div>

      {/* siraf yahi main hai */}
    </div>
  );
};

export default MainPage;
