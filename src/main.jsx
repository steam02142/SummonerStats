import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='text-center bg-gradient-to-r from-cyan-400 to-blue-400 p-3 font-sans font-bold text-3xl'>
      League Stats
    </h1>
    <App />
  </StrictMode>,
)
