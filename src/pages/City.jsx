import React from "react";

const City = ({ match }) => {
  const { id } = match.params;

  // Ici, vous pouvez appeler une fonction ou une API pour obtenir les données météorologiques de la ville spécifique en utilisant l'id

  return (
    <div>
      <h1>Ville : {id}</h1>
      {/* Affichez ici les informations météorologiques de la ville */}
    </div>
  );
};

export default City;
