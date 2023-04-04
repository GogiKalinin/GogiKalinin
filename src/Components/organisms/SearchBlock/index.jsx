import React from "react";
import { DigitalButton } from "../../atoms/DigitalButton";
import { DigitalInput } from "../../atoms/DigitalInput";
import "./index.css";

export const SearchBlock = ({setCity}) => {
  return ( 
    <div className="SearchBlock">
      <DigitalInput setCity={setCity}/>
      <DigitalButton title='search'/>
    </div>
  )
};
