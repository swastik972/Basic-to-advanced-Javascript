import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import UserHome from './day12/UserHome'
import Profile from './day12/Profile'
import UserDetails from './day12/UserDetails'
import MyOutletWrapper from './day12/OutletWrapper'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyOutletWrapper/>}>
          {/* initial route */}
          <Route index element={<UserHome />} />
          <Route path={'profile'} element={<Profile />} />
          {/* dynamic route */}
          <Route path={'details/:userid'} element={<UserDetails />} />
        </Route>
      </Routes>
      <UserHome/>
    </BrowserRouter>
   
  )
}

export default App
