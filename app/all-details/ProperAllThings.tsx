"use client";
import React from "react";
import Hero from "../components/Hero";
import MainPage from "../components/MainPage";
import { useWeather } from "../api/Weather";

import Loading from "../components/loading/Loading";
import WeatherBackground from "./Background";

const Page = () => {
  const { isLoading } = useWeather();

  if (isLoading) return <Loading />;

  return (
    <div className="relative w-full min-h-screen flex  flex-col-reverse sm:flex-row ">
      <WeatherBackground />

      <Hero />
      <MainPage />
    </div>
  );
};

export default Page;
