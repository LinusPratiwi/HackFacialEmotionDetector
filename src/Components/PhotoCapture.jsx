import React, { useCallback, useEffect, useRef, useState, Route } from 'react'
import Webcam from 'react-webcam'
import './PhotoCapture.css'
import * as faceapi from 'face-api.js'
import { Image, Button } from 'react-bootstrap'
import ChatBot from '../Components/ChatBot'
const PhotoCapture = ({ name }) => {
  const webcamRef = useRef(null)
  const [imgSrc, setImgSrc] = useState(null)
  const [detectedEmotion, setDetectedEmotion] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showChat, setShowChatbot] = useState(false)

  const capture = useCallback(async () => {
    const imageSrc = await webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
    if (localStorage.getItem('imageSrc') === '' || !localStorage.getItem('imageSrc'))
      localStorage.setItem('imageSrc', imageSrc)
    detectEmotions(imageSrc)
  }, [webcamRef, setImgSrc])

  const detectEmotions = async (imageUrl) => {
    setLoading(true)
    const img = await faceapi.fetchImage(imageUrl)

    await faceapi.nets.tinyFaceDetector.loadFromUri('/models')
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
    await faceapi.nets.faceExpressionNet.loadFromUri('/models')

    const detections = await faceapi
      .detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors()
      .withFaceExpressions()

    if (detections.length > 0) {
      const emotions = detections[0].expressions
      // Find the emotion with the highest confidence
      const maxEmotion = Object.keys(emotions).reduce((a, b) => (emotions[a] > emotions[b] ? a : b))
      console.log(maxEmotion, 'emotion')
      if (localStorage.getItem('emotion') === '' || !localStorage.getItem('emotion'))
        localStorage.setItem('emotion', maxEmotion)
      setDetectedEmotion(maxEmotion)
    }
    setLoading(false)
  }

  const showChatbot = () => {
    setShowChatbot(!showChat)
  }

  return (
    <div>
      <div className="photo-capture-container">
        {!imgSrc && (
          <div>
            <Webcam
              className="col-9 webcam rounded-3"
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <div className="mt-3 col-12 d-flex justify-content-center">
              <Button className="" onClick={capture}>
                Capture
              </Button>
              <Button variant="disabled" className="" onClick={capture}>
                Retake
              </Button>
            </div>
          </div>
        )}
        {imgSrc && (
          <div>
            <img src={imgSrc} alt="Captured" className="col-9 rounded-3" />
            <Button variant="disabled" className="" onClick={capture}>
              Retake
            </Button>
          </div>
        )}
        {detectedEmotion && <h3>{detectedEmotion}</h3>}
        <Image src="conversation.png" className="bls-float-msg" onClick={showChatbot} />
        {showChat && <ChatBot />}
      </div>
    </div>
  )
}

export default PhotoCapture
