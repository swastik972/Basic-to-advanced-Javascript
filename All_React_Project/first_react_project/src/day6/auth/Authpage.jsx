import Dashboard from "./Dashboard";
import Login from "./login";

 

const Authpage=({isAuthenticated})=>{
    // conditional rendering using if-else
    if(isAuthenticated){
        return(
            <Dashboard/>
        )
    }
    else{
        return(
            <div>
                <Login/>
            </div>
        )
    }

}
export default Authpage;