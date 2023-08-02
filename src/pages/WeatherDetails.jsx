import React from "react";

const WeatherDetails = ({ data }) => {
  // Use the data prop to display more detailed weather information for the day

  const temp = Math.round(data.main.temp - 273.15);
  const minTemp = Math.round(data.main.temp_min - 273.15);
  const maxTemp = Math.round(data.main.temp_max - 273.15);
  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  return (
    <div className='weather-details'>
      <h1>{data.name}</h1>
      <img src={iconUrl} alt={data.weather[0].description} />
      <p>Temperature: {temp}°C</p>
      <p>
        Low: {minTemp}°C / High: {maxTemp}°C
      </p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind speed: {data.wind.speed} m/s</p>
      {/* add any other detailed information you need here */}
    </div>
  );
};

export default WeatherDetails;
