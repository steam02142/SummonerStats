import { useState } from 'react'
import Home from './Home'
import Profile from './Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
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
