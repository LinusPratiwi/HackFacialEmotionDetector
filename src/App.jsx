import React, { useRef, useEffect } from 'react'
import './App.css'
import './Components/FaceDetection'
import { Routes, Route } from 'react-router-dom';
import Feedback from './Pages/Feedback';
import Feel from './Pages/Feel';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/chat' element={<Feel/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
