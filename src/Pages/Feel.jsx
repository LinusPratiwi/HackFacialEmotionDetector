import React from 'react'
import { useState } from 'react';
import NextComponent from './NextComponent';
import "./Feel.css";

function Feel() {
  const [name, setName] = useState("");
  const [showNext, setShowNext] = useState(false);

  const handleNextClick = () => {
    setShowNext(true);
  };

  return (
    <div className='container' >
      {showNext ? (
        <NextComponent name={name} />
      ) : (
        <div className="container center-card">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="card" style={{ "width": "18rem", "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <div className="card-body">
                  <h5 className="card-title">Enter Your Name</h5>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <button href="#" onClick={handleNextClick} className="btn btn-primary">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
</div>  );
}

export default Feel