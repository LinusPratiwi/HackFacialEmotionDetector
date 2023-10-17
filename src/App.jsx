import React, { useRef, useEffect } from 'react'
import './App.css'
import './Components/FaceDetection'
import { Routes, Route } from 'react-router-dom';
import Feedback from './Pages/Feedback';
import VideoChat from './Pages/VideoChat';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/feedback' element={<Feedback/>}/>
\        <Route path='/chat' element={<VideoChat/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
