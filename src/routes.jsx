// routes.jsx

import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import City from "./pages/City";
import WeatherDetails from "./pages/WeatherDetails";

const RoutesComponent = ({ apiKey }) => {
  const cityList = localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : [];

  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      // Update the route for city-specific views
      path: "/city/:city",
      element: <City />,
    },
    {
      // Add a route for the WeatherDetails view
      path: "/:city",
      element: <WeatherDetails apiKey={apiKey} />,
    },
    {
      path: "/forecast/:city",
      element: <Forecast apiKey={apiKey} />,
    },
  ]);

  return element;
};

export default RoutesComponent;
