"use client";
import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Page from "./All Components/ProperAllThings";
import { WeatherProvider } from "./api/WeatherContext";

const queryClient = new QueryClient();

const page = () => {
  // const { data: weather, isLoading } = useWeather("Islamabad");

  return (
    <WeatherProvider>
      <QueryClientProvider client={queryClient}>
        <div>
          <Page />
        </div>
      </QueryClientProvider>
    </WeatherProvider>
  );
};

export default page;
