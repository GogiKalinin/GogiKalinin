import React from "react";
import { NavigationBlock } from "../../organisms/NavigationBlock";
import { SearchBlock } from "../../organisms/SearchBlock";
import { WeatherList } from "../../organisms/WeatherList";
import "./index.css";

export const MainPage = ({ data, setSity }) => {
  return (
    <div className="MainPage">
      <div className="MainPageTop">
        <SearchBlock setSity={setSity}/>
      </div>
      <div className="MainPageBottom">
        <NavigationBlock />
        <WeatherList data={data} />
      </div>
    </div>
  );
};
