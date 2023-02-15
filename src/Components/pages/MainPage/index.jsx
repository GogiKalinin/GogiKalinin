import React from "react";
import { SearchBlock } from "../../organisms/SearchBlock";
import { WeatherList } from "../../organisms/WeatherList";
import "./index.css";

export const MainPage = () => {
  return (
    <div className="MainPage">
      <SearchBlock />
      <WeatherList />
    </div>
  );
};
