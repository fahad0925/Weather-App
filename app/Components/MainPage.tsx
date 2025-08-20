import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaCloudBolt } from "react-icons/fa6";

const MainPage = () => {
  return (
    <div className="w-4/5 pt-10">
      <div className="flex items-center border   border-gray-700 rounded-3xl">
        <input
          className="w-full px-4 py-2   ml-7 bg-transparent text-gray-100 text-xl  focus:outline-none"
          type="text"
          placeholder="Enter Your City"
        />
        <FaLocationArrow className="absolute ml-4  text-xl " />
      </div>
      <div className="flex mt-5 ">
        <IoLocationSharp className="text-2xl" />
        <h1 className="mask-b-from-60% pt-0.5 font-sans   text-gray-100 ">
          Karachi ( Wednesday, 20){" "}
        </h1>
      </div>
      {/* temperatures */}
      <div className="flex justify-between mt-[3%] pr-[4%]">
        <div className="flex gap-6 ">
          <h1 className="mask-b-from-1%  text-center text-gray-300 text-3xl lg:text-6xl xl:text-8xl  ">
            18º
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-10 px-2 rounded-2xl  bg-white/7 backdrop-blur-6xl border border-gray-600 ">
              <p className="text-2xl">H</p>
              <p className="text-2xl">29º</p>
            </div>
            <div className="flex gap-10 px-2 rounded-2xl  bg-white/7 backdrop-blur-6xl border border-gray-600">
              <p className="text-2xl">L</p>
              <p className="text-2xl">21º</p>
            </div>
          </div>
        </div>
        <div className="w-[22%]">
          <p className="mask-b-from-60% font-sans   text-gray-300 ">
            {" "}
            With real time data and advanced technology, we provide reliable
            forcast for any location around the world{" "}
          </p>
        </div>
      </div>

      {/* heading */}

      <div className="flex mt-[6%] justify-between pr-[4%]">
        {/* heading-1*/}
        <div>
          <h1 className="text-7xl bg-gradient-to-r from-white/60 to-gray-700 bg-clip-text text-transparent  ">
            Stromy <br /> with partly cloudy
          </h1>
        </div>

        {/* heading 2-0 */}
        <div>
          <h1 className="ask-b-from-60% font-sans p-3  text-gray-400 ">
            Recently Searched
          </h1>

          {/* boxes */}
          <div className="flex gap-3">
            {/* first box */}
            <div className=" bg-white/4 backdrop-blur-6xl border border-gray-900 px-15 py-10 rounded-3xl">
              <div className="flex gap-10">
                {" "}
                <FaCloudBolt className="text-5xl " />
                <h1 className="mask-b-from-1% text-gray-300">16º</h1>
              </div>
              <div>
                <h1 className="mask-b-from-1% text-gray-300">karachi, PK</h1>
                <h1 className="mask-b-from-1% text-gray-300">cloudy</h1>
              </div>
            </div>
            {/* second box */}
            <div className="bg-white/4 backdrop-blur-6xl border border-gray-900 px-15 py-10 rounded-3xl">
              <div className="flex">
                {" "}
                <FaCloudBolt className="text-2xl " />
                <h1 className="mask-b-from-1% text-gray-300">16º</h1>
              </div>
              <div>
                <h1 className="mask-b-from-1% text-gray-300">karachi, PK</h1>
                <h1 className="mask-b-from-1% text-gray-300">cloudy</h1>
              </div>
            </div>
          </div>
        </div>

        {/* heading end */}
      </div>
    </div>
  );
};

export default MainPage;
