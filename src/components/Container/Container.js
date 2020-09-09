import React from "react";
import "./Container.css";
import Character from "../Character";

const Container = (props) => (
  <div
    className={
      props.wrapper
        ? "container d-flex flex-wrap justify-content-center"
        : "container d-flex flex-wrap justify-content-center"
    }
  >
    {props.characters.map((image, i) => (
      <Character
        name={image.name}
        id={image.id}
        key={i}
        clickEvent={props.clickEvent}
      />
    ))}
  </div>
);

export default Container;
