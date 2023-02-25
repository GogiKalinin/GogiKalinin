import React from "react";
import "./index.css";

export const DigitalInput = ({ setCity }) => {
  var addTime = document.getElementById('add');

  function getN() {
    var getNum = document.getElementById('get_num').value;
    setCity(getNum)
    console.log(getNum);
  }
  
  return (
    <div>
      Write time:
      <input className="DigitalInputInput" type="text" id="get_num" name="get_num" />
      <div id="add" className="btn" onClick={()=>getN()}>Add</div>
    </div>
  );
};
