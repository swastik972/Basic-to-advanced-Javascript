import { useContext } from "react";
import { ThemeContext } from "../../day9/ThemeContext";

let names=["Rahul","Ram","Shyam","Hari"];

let Dashboard=()=>{
  const { isLight } = useContext(ThemeContext);
    
    return(
        <div>
             <h3>Dashboard</h3>
             <p style={{ color: isLight ? "black" : "white" }}>Welcome to dashboard</p>
             <i style={{ color: isLight ? "black" : "white" }}>You are good to go</i>
             <ul>
             {
                names.map(
                    (element,index)=>{
                      return(
                        <li key={index}>{element}</li>
                      )
                    }
                )
            }
            </ul>
        </div>
    )
}
export default Dashboard;

//names.filter.map- bata aafno man anusar name lakhna milxa 
