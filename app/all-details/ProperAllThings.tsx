"use client";
import React from "react";

import MainPage from "../components/MainPage";
import Loading from "../components/Loading/Loading";

import { useWeather } from "../api/Weather";

import WeatherBackground from "./Background";
import HeroSection from "../components/HeroSection";

const Page = () => {
  const { isLoading } = useWeather();

  if (isLoading) return <Loading />;

  return (
    <div className="relative w-full min-h-screen flex  flex-col-reverse sm:flex-row ">
      <WeatherBackground />

      <HeroSection />
      <MainPage />
    </div>
  );
};

export default Page;
