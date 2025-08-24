"use client";
import React, { useState } from "react";
import Hero from "../components/Hero";
import MainPage from "../components/MainPage";

const Page = () => {
  let [loading, isLoading] = useState(true);
  return (
    <div
      className="relative w-full min-h-screen flex  flex-col-reverse sm:flex-row "
      // className="flex w-full min-h-screen  flex-col-reverse sm:flex-row bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: "url('Weather.png')" }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/www.mp4" type="video/mp4" />
      </video>

      <Hero />
      <MainPage />
    </div>
  );
};

export default Page;
