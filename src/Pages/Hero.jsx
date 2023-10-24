import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import FaceDetection from '../Components/FaceDetection'
import './Hero';
import Feel from './Feel';

function Hero() {
  const [name, setName] = useState("");
  const [showNext, setShowNext] = useState(false);

  const handleNextClick = () => {
    setShowNext(true);
  };

  return (
    <div>
    <div id="app" className="app">
    <div className="overlay"></div>
    <div className="d-flex align-items-center justify-content-center app-wrapper">
      <div className="text">
        <span aria-label="emoji" role="img" id="emoji">
          😐 🎉
        </span>
        <div>
      {showNext ? (
        <Feel name={name} />
      ) : (
        <div>
          <h2>Enter Your Name</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleNextClick}>Next</button>
        </div>
      )}
    </div>
      </div>
    </div>
    <FaceDetection />
  </div></div>
  )
}

export default Hero