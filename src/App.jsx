// App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WeatherDetails from "./pages/WeatherDetails";
import Forecast from "./pages/Forecast";
import City from "./pages/City";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    // Retrieve the city list from local storage when the component mounts
    const storedCityList = localStorage.getItem("cities");
    if (storedCityList) {
      setCityList(JSON.parse(storedCityList));
    }
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Add the searched city to the list and keep only the last 5 cities
    const updatedCityList = [term, ...cityList.slice(0, 4)];
    setCityList(updatedCityList);
    // Save the updated city list to local storage
    localStorage.setItem("cities", JSON.stringify(updatedCityList));
    // Fetch weather and forecast data for the city
    getWeatherAndForecastData(term);
  };

  const getWeatherAndForecastData = (cityName) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        // After weatherData is set, get the forecast data for the same city
        getForecastData(cityName);
      })
      .catch((error) => {
        console.log("Error fetching weather data: ", error);
      });
  };

  const getForecastData = (cityName) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecastData(data.list);
      })
      .catch((error) => {
        console.log("Error fetching forecast data: ", error);
      });
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              weatherData={weatherData}
              handleSearch={handleSearch}
              apiKey={import.meta.env.VITE_API_KEY}
              cityList={cityList}
            />
          }
        />
        <Route
          path='/city/:city'
          element={
            <>
              <WeatherDetails
                weatherData={weatherData}
                handleSearch={handleSearch}
                apiKey={import.meta.env.VITE_API_KEY}
              />
            </>
          }
        />
        <Route
          path='/forecast/:city'
          element={
            <Forecast
              forecastData={forecastData}
              apiKey={import.meta.env.VITE_API_KEY}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
