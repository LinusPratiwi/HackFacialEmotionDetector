import React from "react";
import PhotoCapture from '../Components/PhotoCapture';
import ChatBot from "../Components/ChatBot";

function NextComponent({ name }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <PhotoCapture name={name}/>
      <ChatBot/>
    </div>
  );
}

export default NextComponent;
