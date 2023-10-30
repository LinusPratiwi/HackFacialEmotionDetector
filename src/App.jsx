import React, { useRef, useEffect } from 'react'
import './App.css'
import './Components/FaceDetection'

import { Routes, Route, UNSAFE_DataRouterStateContext } from 'react-router-dom'
import Feedback from './Pages/Feedback'
import Feel from './Pages/Feel'
import Home from './Pages/Home'
import { Container, Navbar, Row, Button, Card } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Navbar className="float-start ms-5">
        <Container>
          <Navbar.Brand href="/home" className="ms-5">
            <img
              src="bliss_sw.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            ></img>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <section id="content" className="row">
        <Outlet />

        {/* <Row>
          <div className="col-5 ps-5 align-self-center">
            <h6 className="bls-text-subheadline mb-5">
              Hi <span className="bls-text-subheadline text-decoration-underline">Lina,</span>
            </h6>
            <h1 className="bls-title-medium mb-3">Welcome to </h1>
            <h1 className="bls-title-medium mb-5">
              <img src="bliss_wl.png" className="d-inline-block align-top bls-image-span"></img>{' '}
              Official Website!
            </h1>
          </div>
          <div className="col-1 justify-content-center flex-column d-flex mt-4">
            <img
              className="bls-line-division my-3"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAV0lEQVR4nO3QwQmAUAxEwRRlKjSVKbZhSvliBX5E8DIDe9jriwAAAAAAAAAAAAAAgBlZPazHVCwB+/uA8K+s88jq3X/pjresvfkAAAAAAAAAAAAAABDPLsV99fa/9fYgAAAAAElFTkSuQmCC"
              alt="line-division"
            />
            <img
              className="bls-line-division my-3"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAV0lEQVR4nO3QwQmAUAxEwRRlKjSVKbZhSvliBX5E8DIDe9jriwAAAAAAAAAAAAAAgBlZPazHVCwB+/uA8K+s88jq3X/pjresvfkAAAAAAAAAAAAAABDPLsV99fa/9fYgAAAAAElFTkSuQmCC"
              alt="line-division"
            />
            <img
              className="bls-line-division my-3"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAV0lEQVR4nO3QwQmAUAxEwRRlKjSVKbZhSvliBX5E8DIDe9jriwAAAAAAAAAAAAAAgBlZPazHVCwB+/uA8K+s88jq3X/pjresvfkAAAAAAAAAAAAAABDPLsV99fa/9fYgAAAAAElFTkSuQmCC"
              alt="line-division"
            />
            <img
              className="bls-line-division my-3"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAV0lEQVR4nO3QwQmAUAxEwRRlKjSVKbZhSvliBX5E8DIDe9jriwAAAAAAAAAAAAAAgBlZPazHVCwB+/uA8K+s88jq3X/pjresvfkAAAAAAAAAAAAAABDPLsV99fa/9fYgAAAAAElFTkSuQmCC"
              alt="line-division"
            />
            <img
              className="bls-line-division my-3"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAV0lEQVR4nO3QwQmAUAxEwRRlKjSVKbZhSvliBX5E8DIDe9jriwAAAAAAAAAAAAAAgBlZPazHVCwB+/uA8K+s88jq3X/pjresvfkAAAAAAAAAAAAAABDPLsV99fa/9fYgAAAAAElFTkSuQmCC"
              alt="line-division"
            />
          </div>
          <div className="col-6 align-self-center" style={{ paddingRight: '85px' }}>
            
            <div id="detail" className='mt-3'>
              <Outlet />
            </div>

          </div>
        </Row> */}
      </section>
    </div>
  )
}

export default App
