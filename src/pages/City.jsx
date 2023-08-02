import React from "react";

const City = ({ weatherData, forecastData }) => {
  const { id } = match.params;

  // Ici, vous pouvez appeler une fonction ou une API pour obtenir les données météorologiques de la ville spécifique en utilisant l'id

  return (
    <div>
      {/* ...other code... */}
      <h2>5 Day Forecast:</h2>
      {forecastData.map((forecast, index) => (
        <Forecast key={index} data={forecast} />
      ))}
    </div>
  );
};

export default City;