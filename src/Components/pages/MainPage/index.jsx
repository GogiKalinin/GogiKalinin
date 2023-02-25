import React from "react";
import { NavigationBlock } from "../../organisms/NavigationBlock";
import { SearchBlock } from "../../organisms/SearchBlock";
import { WeatherList } from "../../organisms/WeatherList";
import "./index.css";

export const MainPage = ({ data, setCity, setWeatherMode, weatherMode }) => {
  return (
    <div className="MainPage">
      <div className="MainPageTop">
        <SearchBlock setCity={setCity}/>
      </div>
      <div className="MainPageBottom">
        <NavigationBlock setWeatherMode={setWeatherMode}/>
        <WeatherList data={data} weatherMode={weatherMode} setWeatherMode={setWeatherMode}/>
      </div>
    </div>
  );
};
