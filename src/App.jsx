import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoutesComponent from "./routes";
import axios from "axios";

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
  };
  const getForecastData = (cityName) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        setForecastData(response.data.list);
      })
      .catch((error) => {
        console.log("Error fetching forecast data: ", error);
      });
  };

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${
            import.meta.env.VITE_API_KEY
          }`
        )
        .then((response) => {
          setWeatherData(response.data);
          getForecastData(response.data.name);
        })
        .catch((error) => {
          console.log("Error fetching weather data: ", error);
        });
    }
  }, [searchTerm]);

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <RoutesComponent
        weatherData={weatherData}
        forecastData={forecastData}
        handleSearch={handleSearch}
      />
    </Router>
  );
}

export default App;
