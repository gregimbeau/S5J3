import React from "react";

const CityWeather = ({ weatherData }) => {
  // Si les données météo sont fournies
  if (weatherData) {
    return (
      <div>
        <h2>{weatherData.name}</h2>
        <p>Température : {weatherData.main.temp}</p>
        <p>Température ressentie : {weatherData.main.feels_like}</p>
        <p>Température min : {weatherData.main.temp_min}</p>
        <p>Température max : {weatherData.main.temp_max}</p>
        <p>Pression : {weatherData.main.pressure}</p>
        <p>Humidité : {weatherData.main.humidity}</p>
        <p>Vent : {weatherData.wind.speed}</p>
        <p>Conditions météorologiques : {weatherData.weather[0].description}</p>
      </div>
    );
  }

  // Si les données météo ne sont pas encore fournies (par exemple, pendant le chargement)
  return (
    <div>
      <p>Chargement des données météorologiques...</p>
    </div>
  );
};

export default CityWeather;
