import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import "./PhotoCapture.css";

const PhotoCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div className="photo-capture-container">
      {!imgSrc && <div><Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture photo</button></div>}
      {imgSrc && <div className="circular-image">
    <img src={imgSrc} alt="Captured" className="rectangular-image" />
  </div>}
    </div>
  );
};

export default PhotoCapture;
