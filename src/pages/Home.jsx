// Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";

const Home = ({ weatherData, forecastData, handleSearch, apiKey }) => {
  const cityList = localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : [];

  if (!weatherData) {
    return (
      <div>
        <p>Please enter a city in the search bar.</p>
        <h2>Last searched cities:</h2>
        <ul>
          {cityList.map((city, index) => (
            <li key={index}>
              <button onClick={() => handleSearch(city)}>{city}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // convert temperature from Kelvin to Celsius
  const temp = Math.round(weatherData.main.temp - 273.15);
  const minTemp = Math.round(weatherData.main.temp_min - 273.15);
  const maxTemp = Math.round(weatherData.main.temp_max - 273.15);
  const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return (
    <div>
      <WeatherDetails data={weatherData} />
      <Link to='/forecast'>Show Forecast</Link>{" "}
      {/* Link to the Forecast view */}
      <h2>Last searched cities:</h2>
      <ul>
        {cityList.map((city, index) => (
          <li key={index}>
            <button onClick={() => handleSearch(city)}>{city}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
