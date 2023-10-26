import React from "react";
import PhotoCapture from "./PhotoCapture";

function NextComponent({ name }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <PhotoCapture/>
    </div>
  );
}

export default NextComponent;
