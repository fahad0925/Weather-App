import React from "react";

const MainPage = () => {
  return (
    <div className="w-4/5 ">
      <input
        className="w-full px-4 py-2 hover:border hover:border-gray-400 rounded-md bg-transparent text-gray-400 text-xl placeholder-transparent focus:outline-none"
        type="text"
        placeholder="Enter Your City"
      />
    </div>
  );
};

export default MainPage;
