import React from "react";
import { DigitalButton } from "../DigitalButton";
import "./index.css";

export const DigitalInput = ({ setSity }) => {
  var addTime = document.getElementById('add');
  function getN() {
    var getNum = document.getElementById('get_num').value;
    setSity(getNum)
    console.log(getNum);
  }
  
  return (
    <div>
      Write time:
      <input type="text" id="get_num" name="get_num" />
      <div id="add" className="btn" onClick={()=>getN()}>Add</div>
    </div>
  );
};
