// City.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Forecast from "./Forecast";

const City = ({ apiKey }) => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (city) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched weather data: ", data);
          setWeatherData(data);
        })
        .catch((error) => {
          console.error("Error fetching weather data: ", error);
        });

      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched forecast data: ", data);
          setForecastData(data.list);
        })
        .catch((error) => {
          console.error("Error fetching forecast data: ", error);
        });
    }
  }, [city, apiKey]);

  return (
    <div>
      {/* Render weatherData and other details */}
      {/* ...other code... */}
      <h2>5 Day Forecast:</h2>
      {/* Render the Forecast component with the fetched forecastData */}
      <Forecast
        apiKey={import.meta.env.VITE_API_KEY}
        forecastData={forecastData}
      />
    </div>
  );
};

export default City;
