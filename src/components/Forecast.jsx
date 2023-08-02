import React from "react";

const Forecast = ({ forecastData }) => {
  // Si les données de prévision sont fournies
  if (forecastData) {
    return (
      <div>
        <h2>Prévisions pour les 5 prochains jours</h2>
        {forecastData.map((data) => (
          <div key={data.date}>
            <h3>{data.date}</h3>
            <p>Température : {data.temp}</p>
            <p>Température ressentie : {data.feels_like}</p>
            <p>Pression : {data.pressure}</p>
            <p>Humidité : {data.humidity}</p>
            <p>Vent : {data.wind_speed}</p>
            <p>Conditions météorologiques : {data.weather[0].description}</p>
            {/* Ajoutez ici d'autres informations météorologiques que vous souhaitez afficher */}
          </div>
        ))}
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
