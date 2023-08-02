// routes.jsx

import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";
import Forecast from "./pages/Forecast";

const RoutesComponent = ({ weatherData, handleSearch }) => {
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
      element: <Forecast />,
    },
  ]);

  return element;
};

export default RoutesComponent;
