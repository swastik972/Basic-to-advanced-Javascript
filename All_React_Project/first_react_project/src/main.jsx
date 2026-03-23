import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import EventHandling from './eventHandling/event_Handling'
// import Profile from './pages/profile'

import App from './App.jsx'
import UserDetails from './day12/UserDetails.jsx'
import UserProfile from './day12/profile.jsx'
import Comments from './day13/Comments.jsx'
import Todo from './day13/todo.jsx'
// import Home from './Home.jsx'
// import { First } from './Home.jsx'
// import { Third } from './Home.jsx'
// import { Second } from './Home.jsx'
// import Authpage from './day6/auth/Authpage.jsx'
// import Counter from './day6/day-6-task/task1.jsx'
// import ToggleText from './day6/day-6-task/task2.jsx'
// import PasswordToggle from './day6/day-6-task/task3.jsx'
// import TrafficLight from './day6/day-6-task/task4.jsx'
// import QuoteGenerator from './day6/day-6-task/task5.jsx'
// import TaskList from './day7-task/task1.jsx'
// import Task2 from './day7-task/task2.jsx'
// import Task7 from './day6/day-6-task/task7.jsx'
// import ClickTracker from './day6/day-6-task/task8.jsx'
// import DynamicFoodMenu from './pages/DynamicFoodMenu.jsx'
// import FoodMenu from './pages/FoodMenu.jsx'
// import TaskList1 from './day7-task/task3.jsx'
// import Task4 from './day7-task/task4.jsx'
// import UseMemoComponent from './day9/UseMemoComponent.jsx'
// import USeCallbackComponent from './day9/UseCallbackButton.jsx'
// import TodoExample from './day9/Todo_Example.jsx'
// import UseReducerExample from './day9/UseReducerExample.jsx'
// import AComp from './day9/UseContextComponent.jsx'
// import Themetoggle from './day9/ThemeToggle.jsx'
// import Dashboard from './day6/auth/Dashboard.jsx'
// import ThemeContextProvider from './day9/ThemeContextProvider.jsx'

createRoot(document.getElementById('root')).render(
 

 

  <StrictMode>
  
    {/* Uncomment and use the components you need */}
      {/* <App />
    <Home />
    <First />
    <Second />
    <Third />
    <EventHandling /> 
    
     <Counter />
    <ToggleText />
    <PasswordToggle />
    <TrafficLight />
    <QuoteGenerator />
    <TaskList />
    <Task2 />
    <Task7 />
    <ClickTracker />
    <Authpage isAuthenticated={false} />
    <b>After Login::::::</b>
    <Authpage isAuthenticated={true} /> 
     <Tasks /> 
     <Profile name={"Swastik"} age={20} address={"Dhangadhi"} />
    <EventHandling />
    <Greeting name="Swastik" last="Rawat"></Greeting>
    <DaySix /> 

   Fix or remove the Food component 


   <FoodMenu/>
   <DynamicFoodMenu/>
  <UseMemoComponent/>
  <USeCallbackComponent/>
  <TodoExample/>
  <UseReducerExample/>
  <AComp/>
  <ThemeContextProvider>
  <Themetoggle/>
  <Dashboard/>
  </ThemeContextProvider>
 
     <TaskList1/>
    <Task4/>   */}

   
{/* <Comments/> */}
<Todo/>

  </StrictMode>
)
  