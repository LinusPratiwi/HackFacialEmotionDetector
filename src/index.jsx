import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Home from './Pages/Home'
import Feel from './Pages/Feel'
import Feedback from './Pages/Feedback'
import DarkHome from './Pages/DarkHome'
import Entry from './Pages/Entry'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/entry',
        element: <Entry />,
      },
      {
        path: '/chat',
        element: <Feel />,
      },
      {
        path: '/feedback',
        element: <Feedback />,
      },
    ],
  },
  {
    path: '/home',
    element: <DarkHome />,
  },
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)
