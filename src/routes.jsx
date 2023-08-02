// routes.jsx

import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";
import Forecast from "@/pages/Forecast";
import WeatherDetails from "@/pages/WeatherDetails";

const RoutesComponent = ({ weatherData, forecastData, handleSearch }) => {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <Home
          weatherData={weatherData}
          forecastData={forecastData}
          handleSearch={handleSearch}
        />
      ), // pass forecastData to Home
    },
    {
      path: "/city/:id",
      element: <City />,
    },
    {
      path: "/forecast",
      element: (
        <Forecast
          forecastData={forecastData}
          city={forecastData && forecastData[0] && forecastData[0].name}
        />
      ), // Pass the city prop to the Forecast component
    },
    {
      path: "/weather-details/:id",
      element: <WeatherDetails />,
    },
  ]);

  return element;
};

export default RoutesComponent;
