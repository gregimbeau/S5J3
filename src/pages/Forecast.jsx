import React from "react";
import { Link } from "react-router-dom";
import ForecastCard from "@/components/ForecastCard";

const Forecast = ({ forecastData, apiKey, city }) => {
  if (forecastData) {
    return (
      <div className='forecast-list'>
        <Link to={`/weather-details/${city}`}>
          Back to detailed forecast for the day
        </Link>
        {forecastData.map((data, index) => {
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
  }

  // If the forecast data is not yet provided (e.g., during loading)
  return (
    <div>
      <p>Loading forecast...</p>
    </div>
  );
};

export default Forecast;
