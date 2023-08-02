import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ForecastCard from "@/components/ForecastCard";

const Forecast = ({ apiKey }) => {
  const { city } = useParams();
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (city) {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched forecast data: ", data);
          setForecastData(data.list);
        })
        .catch((error) => {
          console.error("Error fetching forecast data: ", error);
        });
    }
  }, [city, apiKey]);

  return (
    <div className='forecast-list'>
      <a href='#' onClick={() => window.history.back()}>
        Back to detailed forecast for the day
      </a>
      {forecastData &&
        forecastData.map((data, index) => {
          // Only take the data from the 12:00 time slot for the next 5 days
          if (index % 8 === 0) {
            return (
              <div key={data.dt}>
                <ForecastCard data={data} />
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

export default Forecast;
