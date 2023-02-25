import React from "react";
import { WeatherListItem } from "../../molecules/WeatherListItem";
import "./index.css";

export const WeatherList = ({ data, weatherMode, setWeatherMode }) => {
  console.log("weatherMode", weatherMode)
  return (
    <div className="WeatherList">
      <div className="WeatherListName">
        <h1>{data.name}</h1>
      </div>
        {weatherMode === 'current' ?  
          (
            <div className="WeatherListMain">              
              <WeatherListItem data={data} />
            </div>
          ) : (
            <div>
              <WeatherListItem data={data} />
              <WeatherListItem data={data} />
              <WeatherListItem data={data}/>
            </div>
          )
        }
    </div>
  );
};
