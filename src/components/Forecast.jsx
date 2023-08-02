import React from "react";

const Forecast = ({ forecastData }) => {
  // Si les données de prévision sont fournies
  if (forecastData) {
    return (
      <div>
        <h2>Prévisions pour {forecastData.date}</h2>
        <p>Température : {forecastData.temp}</p>
        <p>Température ressentie : {forecastData.feels_like}</p>
        <p>Pression : {forecastData.pressure}</p>
        <p>Humidité : {forecastData.humidity}</p>
        <p>Vent : {forecastData.wind_speed}</p>
        <p>
          Conditions météorologiques : {forecastData.weather[0].description}
        </p>
        {/* Ajoutez ici d'autres informations météorologiques que vous souhaitez afficher */}
      </div>
    );
  }

  // Si les données de prévision ne sont pas encore fournies (par exemple, pendant le chargement)
  return (
    <div>
      <p>Chargement des prévisions...</p>
    </div>
  );
};

export default Forecast;
