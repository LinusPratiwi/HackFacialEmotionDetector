import React, { useRef, useEffect } from 'react'
import './App.css'
import './Components/FaceDetection'
import { Routes, Route } from 'react-router-dom';
import Feedback from './Pages/Feedback';
import Hero from './Pages/Hero';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/chat' element={<Hero/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
