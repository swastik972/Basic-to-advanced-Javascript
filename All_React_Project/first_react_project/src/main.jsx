import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import First from './First.jsx'
import Second from './Second.jsx'
import Third from './Third.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
    <First/>
    <second/>
    <third/>
  </StrictMode>,
)
