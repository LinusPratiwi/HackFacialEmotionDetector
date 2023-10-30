import React from "react";
import PhotoCapture from "./PhotoCapture";
import { Container } from "react-bootstrap";

function NextComponent({ name }) {
  return (
    <div className="cam_container">
      <h2 className="d-flex justify-content-center mb-3">Hello, {name}!</h2>
      <PhotoCapture name={name} />
    </div>
  )
}

export default NextComponent;
