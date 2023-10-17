import React from 'react'
import './App.css'
import Video from './Pages/Video'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Feedback from './Pages/Feedback'

function App() {
	return (
		<div className="App">
      <Routes>
        <Route path='/videochat' element={<Video/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
	)
}

export default App
