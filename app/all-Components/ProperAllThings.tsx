"use client";
import React from "react";
import Hero from "../components/Hero";
import MainPage from "../components/MainPage";
import { useWeather } from "../api/Weather";

import Loading from "../components/Loading/Loading";
import WeatherBackground from "./Background";

const Page = () => {
  const { isLoading } = useWeather();

  if (isLoading) return <Loading />;

  return (
    <div
      className="relative w-full min-h-screen flex  flex-col-reverse sm:flex-row "
      // className="flex w-full min-h-screen  flex-col-reverse sm:flex-row bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: "url('Weather.png')" }}
    >
      <WeatherBackground />

      <Hero />
      <MainPage />
    </div>
  );
};

export default Page;
