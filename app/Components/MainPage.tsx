import React from "react";

const MainPage = () => {
  return (
    <div className="w-4/5 p-10">
      <input
        className="w-[130vh] px-4 py-2 hover:border hover:border-gray-700 hover:rounded-3xl pr-20 rounded-md bg-transparent text-gray-100 text-xl  focus:outline-none"
        type="text"
        placeholder="Enter Your City"
      />
    </div>
  );
};

export default MainPage;
