// routes.jsx

import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";
import Forecast from "./pages/Forecast";
import WeatherDetails from "./pages/WeatherDetails";

const RoutesComponent = ({ weatherData, forecastData, handleSearch }) => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home weatherData={weatherData} handleSearch={handleSearch} />,
    },
    {
      path: "/city/:id",
      element: <City />,
    },
    {
      path: "/forecast/:id",
      element: <Forecast forecastData={forecastData} />,
    },
    {
      path: "/weather-details/:id",
      element: <WeatherDetails />,
    },
  ]);

  return element;
};
export default RoutesComponent;
