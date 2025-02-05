import { useState } from 'react'
import Home from './Home'
import Profile from './Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex justify-center bg-gradient-to-br from-[#667db6] via-[#0082c8] to-[#667db6]  text-gray-800">
        <div className="content max-w-4xl w-full">
          <Routes>
            <Route 
              path="/" 
              element={<Home/>}>
            </Route>
            <Route 
              path="/profile/:id" 
              element={<Profile/>}>
            </Route>

          </Routes>
        </div>
      </div>
    </Router>
    
  )
}

export default App
