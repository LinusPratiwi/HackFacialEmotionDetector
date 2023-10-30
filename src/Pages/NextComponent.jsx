import React from "react";
import PhotoCapture from '../Components/PhotoCapture';
import ChatBot from "../Components/ChatBot";
import { Container } from "react-bootstrap";

function NextComponent({ name }) {
  return (
    <div className="cam_container">
      <h2 className="d-flex justify-content-center mb-3">Hello, {name}!</h2>
      <PhotoCapture name={name} />
      <ChatBot />
    </div>
  )
}

export default NextComponent;
