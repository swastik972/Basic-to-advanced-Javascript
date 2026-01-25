import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventHandling from './eventHandling/event_Handling'
import Profile from './pages/profile'


import App from './App.jsx'
import Home from './Home.jsx'
import {First} from './Home.jsx'
import {Third} from './Home.jsx'
import Authpage from './day6/auth/Authpage.jsx'
import Counter from './day6/day-6-task/task1.jsx'
import ToggleText from './day6/day-6-task/task2.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Home />
    <First/>
    <Third/>
    <EventHandling/> */}
    
    <Counter/>
    <ToggleText/>
    
    <Authpage isAuthenticated={false}/>
    <b>After  Login::::::</b>
    <Authpage isAuthenticated={true}/>

    {/* <Profile name={"Swastik"} age={20}
    address={"Dhangadhi"}/>
       <EventHandling/>
  <Greeting name = "Swastik" last = "Rawat"></Greeting>
  <DaySix/> */}


  </StrictMode>
)