import { useState } from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            
          </Routes>
        </div>
      </div>
    </Router>
    
  )
}

export default App
