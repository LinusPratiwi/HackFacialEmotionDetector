import React from 'react'
import Button from 'react-bootstrap/Button'
import FaceDetection from '../Components/FaceDetection'
import './VideoChat';

function VideoChat() {
  return (
    <div>
    <div id="app" className="app">
    <div className="overlay"></div>
    <div className="d-flex align-items-center justify-content-center app-wrapper">
      <div className="text">
        <span aria-label="emoji" role="img" id="emoji">
          😐 🎉
        </span>
        How are you feeling today <span id="textStatus">...</span>?
        <div className="content">
          <Button variant="light">Scan Emotion</Button>
        </div>
      </div>
    </div>
    <FaceDetection />
  </div></div>
  )
}

export default VideoChat