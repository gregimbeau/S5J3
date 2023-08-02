import React from "react";

const Home = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Please enter a city in the search bar.</div>;
  }

  return (
    <div>
      <h1>Bienvenue sur l'application météo !</h1>
      <h2>{weatherData.name}</h2>
      <h3>{weatherData.main.temp}°C</h3>
      <h3>{weatherData.weather[0].description}</h3>
      {/* Affichez ici d'autres informations météorologiques générales */}
    </div>
  );
};

export default Home;
