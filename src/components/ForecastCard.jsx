import React from "react";

const ForecastCard = ({ data }) => {
  const date = new Date(data.dt * 1000);
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const temp = Math.round(data.main.temp - 273.15);
  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  return (
    <div className='forecast-card'>
      <h3>{day}</h3>
      <img src={iconUrl} alt={data.weather[0].description} />
      <p>Temperature: {temp}°C</p>
      {/* add any other information you need here */}
    </div>
  );
};

export default ForecastCard;
