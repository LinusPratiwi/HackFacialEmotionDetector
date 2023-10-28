import React from "react";
import PhotoCapture from "./PhotoCapture";

function NextComponent({ name }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <PhotoCapture name={name}/>
    </div>
  );
}

export default NextComponent;
