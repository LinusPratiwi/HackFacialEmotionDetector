import React, { useRef, useEffect } from 'react'
import './App.css'
import './FaceDetection'
import * as faceapi from 'face-api.js'
import FaceDetection from './FaceDetection'
import Button from 'react-bootstrap/Button'

function App() {
  // LOAD MODELS FROM FACE API

  // const loadModels = async () => {
  //   const net = new faceapi.SsdMobilenetv1()
  //   const re = await net.loadFromUri('public/models')
  //   console.log('dafo', re)
  // 	// console.log('092', faceapi.nets.tinyFaceDetector.loadFromUri('/public/models'))
  //   // Promise.all([
  //   //   // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
  //   //   faceapi.nets.tinyFaceDetector.loadFromUri('public/models'),
  //   //   // faceapi.nets.faceLandmark68Net.loadFromUri('public/models'),
  //   //   // faceapi.nets.faceRecognitionNet.loadFromUri('public/models'),
  //   //   // faceapi.nets.faceExpressionNet.loadFromUri('public/models'),
  //   // ]).then(() => {
  // 	// 	console.log('dafy', faceapi)
  //   //   faceMyDetect()
  //   // })
  // }

  // const faceMyDetect = () => {
  //   setInterval(async () => {
  //     const detections = await faceapi
  //       .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
  //       .withFaceLandmarks()
  //       .withFaceExpressions()

  //     // DRAW YOU FACE IN WEBCAM
  //     canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)
  //     faceapi.matchDimensions(canvasRef.current, {
  //       width: 940,
  //       height: 650,
  //     })

  //     const resized = faceapi.resizeResults(detections, {
  //       width: 940,
  //       height: 650,
  //     })

  //     faceapi.draw.drawDetections(canvasRef.current, resized)
  //     faceapi.draw.drawFaceLandmarks(canvasRef.current, resized)
  //     faceapi.draw.drawFaceExpressions(canvasRef.current, resized)
  //   }, 1000)
  // }

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
        {/* <FaceDetection /> */}
      </div>
    </div>
  )
}

export default App
