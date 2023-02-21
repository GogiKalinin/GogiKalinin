import React from "react";
import { WeatherListItem } from "../../molecules/WeatherListItem";
import "./index.css";

export const WeatherList = ({ data }) => {
  return (
    <div className="WeatherList">
      <WeatherListItem data={data} />
      <WeatherListItem data={data} />
      <WeatherListItem data={data} />
    </div>
  );
};
