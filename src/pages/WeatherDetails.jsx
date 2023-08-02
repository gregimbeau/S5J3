// WeatherDetails.jsx

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const WeatherDetails = ({ apiKey }) => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (city) {
      // Fetch weather data for the city
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        })
        .catch((error) => {
          console.log("Error fetching weather data: ", error);
        });
    }
  }, [city, apiKey]);

  if (!weatherData) return <div>Loading...</div>;

  const temp = Math.round(weatherData.main.temp - 273.15);
  const minTemp = Math.round(weatherData.main.temp_min - 273.15);
  const maxTemp = Math.round(weatherData.main.temp_max - 273.15);
  const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return (
    <div className='weather-details'>
      <h1>{weatherData.name}</h1>
      <img src={iconUrl} alt={weatherData.weather[0].description} />
      <p>Temperature: {temp}°C</p>
      <p>
        Low: {minTemp}°C / High: {maxTemp}°C
      </p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind speed: {weatherData.wind.speed} m/s</p>
      {/* add any other detailed information you need here */}
      {/* Link to the 5-day forecast */}
      <Link to={`/forecast/${city}`}>Show 5-Day Forecast</Link>
    </div>
  );
};

export default WeatherDetails;
