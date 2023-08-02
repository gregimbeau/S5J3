// Home.jsx

import React from "react";

const Home = ({ weatherData, handleSearch }) => {
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
      <h1>{weatherData.name}</h1>
      <img src={iconUrl} alt={weatherData.weather[0].description} />
      <p>Current temperature: {temp}°C</p>
      <p>
        Low: {minTemp}°C / High: {maxTemp}°C
      </p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind speed: {weatherData.wind.speed} m/s</p>
      {/* add any other information you need here */}
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
