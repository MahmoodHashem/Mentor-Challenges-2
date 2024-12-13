import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Appp from './Appp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appp />
  </StrictMode>,
)
