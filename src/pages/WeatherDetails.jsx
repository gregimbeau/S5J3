import React from "react";

const WeatherDetails = ({ weatherDetails }) => {
  // Si les détails météo sont fournis
  if (weatherDetails) {
    return (
      <div>
        <p>Température : {weatherDetails.temp} °C</p>
        <p>Température ressentie : {weatherDetails.feels_like} °C</p>
        <p>Pression atmosphérique : {weatherDetails.pressure} hPa</p>
        <p>Humidité : {weatherDetails.humidity} %</p>
        <p>Vitesse du vent : {weatherDetails.wind_speed} m/s</p>
        {/* Ajoutez ici d'autres détails météo que vous souhaitez afficher */}
      </div>
    );
  }

  // Si les détails météo ne sont pas encore fournis (par exemple, pendant le chargement)
  return (
    <div>
      <p>Chargement des détails météo...</p>
    </div>
  );
};

export default WeatherDetails;
