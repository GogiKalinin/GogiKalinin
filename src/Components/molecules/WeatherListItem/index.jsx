import React from "react";
import "./index.css";

export const WeatherListItem = ({ data }) => {
  return (
    <div className="WeatherListItem">
      {data !== undefined && (
      <div>
        <p>{data.main.temp}</p>
        <p>{data.main.pressure}</p>
        <p>{data.wind.speed}</p>
      </div>
      )
      }
    </div>
  );
};
