import React from "react";
import "./Character.css";

// the onClick function is defined as a callback so that the clicked elements value
// can be passed to props.clickEvent to check if the image has been clicked or not
const Character = (props) => (
  <div className="card" onClick={() => props.clickEvent(props.id)}>
    <img className="card-img-top card-height" src={props.name} alt="" />
  </div>
); 

export default Character;
