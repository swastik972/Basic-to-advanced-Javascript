import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventHandling from './eventHandling/event_Handling'
import Profile from './pages/profile'


import App from './App.jsx'
import Home from './Home.jsx'
import {First} from './Home.jsx'
import {Third} from './Home.jsx'
import {Second}from './Home.jsx'
import Authpage from './day6/auth/Authpage.jsx'
import Counter from './day6/day-6-task/task1.jsx'
import ToggleText from './day6/day-6-task/task2.jsx'
import PasswordToggle from './day6/day-6-task/task3.jsx'
import TrafficLight from './day6/day-6-task/task4.jsx'
import QuoteGenerator from './day6/day-6-task/task5.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* { <App />
    <Home />
    <First/>
     <Second/>
    <Third/>
    <EventHandling/>}  */}
  
    
    <Counter/>
    <ToggleText/>
    <PasswordToggle/>
    <TrafficLight/>
    <QuoteGenerator/>
    
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