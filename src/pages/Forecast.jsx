import React from "react";
import { Link } from "react-router-dom";

const Forecast = ({ forecastData }) => {
  // Si les données de prévision sont fournies
  if (forecastData) {
    return (
      <div>
        <h2>Prévisions pour les 5 prochains jours</h2>
        {forecastData.map((data) => (
          <div key={data.dt}>
            <h3>{data.dt_txt}</h3>
            <p>Température : {data.main.temp}</p>
            <p>Température ressentie : {data.main.feels_like}</p>
            <p>Pression : {data.main.pressure}</p>
            <p>Humidité : {data.main.humidity}</p>
            <p>Vent : {data.wind.speed}</p>
            <p>Conditions météorologiques : {data.weather[0].description}</p>
            <Link to={`/forecast/${data.dt}`}>
              Voir les détails météorologiques pour {data.dt_txt}
            </Link>
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
