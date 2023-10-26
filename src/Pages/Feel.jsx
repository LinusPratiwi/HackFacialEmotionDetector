import React from 'react'
import { useState } from 'react';
import NextComponent from './NextComponent';

function Feel() {
  const [name, setName] = useState("");
  const [showNext, setShowNext] = useState(false);

  const handleNextClick = () => {
    setShowNext(true);
  };

  return (
    <div>
      {showNext ? (
        <NextComponent name={name} />
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
  );
}

export default Feel