import React from "react";
import { WeatherListItem } from "../../molecules/WeatherListItem";
import "./index.css";

export const WeatherList = (data) => {
  console.log(data)
  return (
    <div className="WeatherList">
      <WeatherListItem />
      <WeatherListItem />
      <WeatherListItem />
    </div>
  );
};
