import React, { useRef, useEffect } from 'react'
import './App.css'
import './FaceDetection'
import * as faceapi from 'face-api.js'
import FaceDetection from './FaceDetection'
import Button from 'react-bootstrap/Button'

function App() {
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
      </div>
    </div>
  )
}

export default App
