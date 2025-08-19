"use client";
import React, { useState } from "react";
import Weather from "./api/Weather";
import Hero from "./components/Hero";
import MainPage from "./components/MainPage";

const page = () => {
  const [img, setImg] = useState("");
  return (
    <div className="flex w-full h-screen ">
      {img && (
        <img
          className="h-full absolute -z-10 w-full object-cover"
          src={img}
          alt="yale"
        />
      )}
      <Weather setImg={setImg} />
      <Hero />
      <MainPage />
    </div>
  );
};

export default page;
