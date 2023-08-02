import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoutesComponent from "./routes";
import axios from "axios";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState(null);

const handleSearch = (term) => {
  setSearchTerm(term);

  // Get the current list of cities
  const cityList = JSON.parse(localStorage.getItem("cities")) || [];

  // If the city is already in the list, remove it
  const index = cityList.indexOf(term);
  if (index > -1) {
    cityList.splice(index, 1);
  }

  // Add the new city to the beginning of the list
  cityList.unshift(term);

  // If the list has more than 5 cities, remove the last one
  if (cityList.length > 5) {
    cityList.pop();
  }

  // Store the updated list in localStorage
  localStorage.setItem("cities", JSON.stringify(cityList));
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
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
  }, [searchTerm]);

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <RoutesComponent weatherData={weatherData} handleSearch={handleSearch} />
    </Router>
  );
}

export default App;
