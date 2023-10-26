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
        <div class="container center-card">
          <div class="row">
            <div class="col-12 d-flex align-items-center justify-content-center">
              <div className="card" style={{ "width": "18rem", "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <div class="card-body">
                  <h5 class="card-title">Enter Your Name</h5>
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