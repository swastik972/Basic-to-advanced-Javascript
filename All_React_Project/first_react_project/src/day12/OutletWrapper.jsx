import {Outlet} from "react-router"
import MyNavbar from "./Navbar.jsx"


const OutletWrapper=()=>{
    return(
        <div>
            <MyNavbar/>
            <Outlet/>
            <h6>This is my footer</h6>
            </div>)
}
export default OutletWrapper;