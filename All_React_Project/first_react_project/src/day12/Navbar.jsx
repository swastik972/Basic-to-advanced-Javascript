import { Link } from "react-router";
const MyNavbar=()=>{
    return(
        <div>
            <h1>My Navbar</h1>
            <Link to ={"/"}>Home</Link><br></br>
            <Link to ={"/profile"}>Profile</Link><br></br>
            <Link to ={"/details/1"}>Details</Link>
        </div>
    )
}
export default MyNavbar;