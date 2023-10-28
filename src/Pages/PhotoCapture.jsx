import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import "./PhotoCapture.css";
import * as faceapi from 'face-api.js';

const PhotoCapture = ({name}) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [detectedEmotion, setDetectedEmotion] = useState(null);
  const [loading, setLoading] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    detectEmotions(imageSrc);
  }, [webcamRef, setImgSrc]);

  const detectEmotions = async (imageUrl) => {
    setLoading(true);
    const img = await faceapi.fetchImage(imageUrl);

    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
    await faceapi.nets.faceExpressionNet.loadFromUri('/models');

    const detections = await faceapi.detectAllFaces(img,
      new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors().withFaceExpressions();

    if (detections.length > 0) {
      const emotions = detections[0].expressions;
      // Find the emotion with the highest confidence
      const maxEmotion = Object.keys(emotions).reduce((a, b) => (emotions[a] > emotions[b] ? a : b));
      setDetectedEmotion(maxEmotion);
    }
    setLoading(false);
  };

  return (
    <div className="photo-capture-container">
      {!imgSrc && (
        <div>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          <button onClick={capture}>Capture photo</button>
        </div>
      )}
      {imgSrc && (
        <div>
        <div className="circular-image">
          <img src={imgSrc} alt="Captured" className="rectangular-image" />
        </div>
        </div>
      )}
      {detectedEmotion && (
            <p> {name} is {detectedEmotion}</p>
          )}
    </div>
  );
};

export default PhotoCapture;
