import React, { useRef, useEffect } from 'react'

function FaceDetection() {
  const videoRef = useRef()
  const canvasRef = useRef()

  // LOAD FROM USEEFFECT
  useEffect(() => {
    startVideo()
  }, []) 

  // OPEN YOU FACE WEBCAM
  const startVideo = () => {
    // console.log('111', faceapi.nets.tinyFaceDetector.loadFromUri('/public/models'))
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream
      })
      .catch((err) => {
        console.log(err)
      })
    console.log('dasf')
  }
  
  return (
    <div>
      {/* <div className="text">
        <span aria-label="emoji" role="img" id="emoji">
          😐
        </span>
        How are you feeling today <span id="textStatus">...</span>?
      </div> */}
      <div className="mockup">
        <div id="browser " className="browser">
          <div className="browserChrome">
            <div className="browserActions"></div>
          </div>
          <canvas id="canvas" ref={canvasRef}></canvas>
          <video id="video" ref={videoRef} width="540" height="405" crossOrigin="anonymous"></video>
        </div>
      </div>
      <p className="note"></p>
    </div>
  )
}

export default FaceDetection
