import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventHandling from './eventHandling/event_Handling'
import Profile from './pages/profile'


import App from './App.jsx'
import Home from './Home.jsx'
import {First} from './Home.jsx'
import {Third} from './Home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
    <First/>
    <Third/>
    
    <EventHandling/>
  
    <Profile name={"Swastik"} age={20}
    address={"Dhangadhi"}/>
       <EventHandling/>
  <Greeting name = "Swastik" last = "Rawat"></Greeting>
  <DaySix/>
  </StrictMode>
)