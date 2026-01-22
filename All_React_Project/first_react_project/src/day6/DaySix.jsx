import { useEffect, useState } from "react";
import CustomButton from "./Button";
import Loading from "./Loading";

let DaySix = () =>{
    let[count, setCount] = useState(0);
let[isLoggedin, setLoggedin] = useState(true);
let[isLoading, setIsLoading] = useState(true);
useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(false);
    }, 3000)
}, [])
return(
    <div>
        <h5>Count: {count}</h5>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
        {count % 2 == 0 ? <h6>is Even</h6> : <h6>Is odd</h6>}

        {
            //conditional rendering using ternary operator (? :)
        isLoggedin ? <CustomButton title = {"Logout"} onClickCustomButton={()=>setLoggedin(false)}></CustomButton> : <CustomButton title={"Login"} onClickCustomButton={()=>setLoggedin(true)}> </CustomButton>
        }
        {/* //conditional rendering using logical and (&&) */}

        {isLoading && <Loading/>}
        {isLoggedin && <p>You are logged in.</p>}
    </div>
)
}


export default DaySix 