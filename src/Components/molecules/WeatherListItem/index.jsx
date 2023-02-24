import React from "react";
import "./index.css";

export const WeatherListItem = ({ data }) => {
  console.log(data)
  return (
    <div className="WeatherListItem">
        {data !== [] && (
      <div>
          <p>{data.cod}</p>
          <p>{data.id}</p>
          <p>{data.dt}</p>
      </div>
        )}
    </div>
  );
};
