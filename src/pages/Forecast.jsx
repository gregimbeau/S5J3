import React from "react";

const Forecast = ({ match }) => {
  const { id } = match.params;

  // Ici, vous pouvez appeler une fonction ou une API pour obtenir les prévisions météorologiques du jour spécifique en utilisant l'id

  return (
    <div>
      <h1>Prévisions pour le jour : {id}</h1>
      {/* Affichez ici les prévisions météorologiques pour le jour spécifique */}
    </div>
  );
};

export default Forecast;
