import React from "react";
import { DigitalButton } from "../../atoms/DigitalButton";
import { DigitalInput } from "../../atoms/DigitalInput";
import "./index.css";

export const SearchBlock = ({setSity}) => {
  return( <div className="SearchBlock">
    <DigitalInput setSity={setSity}/>
    <DigitalButton title='search'/>
  </div>
  )
};
