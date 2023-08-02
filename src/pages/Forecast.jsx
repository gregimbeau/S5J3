import React from "react";
import ForecastCard from "@/components/ForecastCard";

const Forecast = ({ forecastData, apiKey }) => {
  if (forecastData) {
    return (
      <div className='forecast-list'>
        {forecastData.map((data, index) => {
          // Only take the data from the 12:00 time slot for the next 5 days
          if (index % 8 === 0) {
            return <ForecastCard key={data.dt} data={data} />;
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
