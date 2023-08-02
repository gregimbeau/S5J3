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
      <RoutesComponent weatherData={weatherData} />
    </Router>
  );
}

export default App;
