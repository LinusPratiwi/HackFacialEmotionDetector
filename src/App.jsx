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
      </section>
    </div>
  )
}

export default App
