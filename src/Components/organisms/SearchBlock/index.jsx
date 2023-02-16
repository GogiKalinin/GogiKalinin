import React from "react";
import { DigitalButton } from "../../atoms/DigitalButton";
import { DigitalInput } from "../../atoms/DigitalInput";
import "./index.css";

export const SearchBlock = () => {
  return( <div className="SearchBlock">
    <DigitalInput />
    <DigitalButton />
  </div>
  )
};
