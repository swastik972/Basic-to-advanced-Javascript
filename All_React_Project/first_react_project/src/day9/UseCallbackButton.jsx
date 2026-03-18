import { useCallback, useState } from "react"
import CustomButton from "./custom_button"


const UseCallbackComponent=()=>{
    console.log("UseCallback componnent")
    const [count,setCount]=useState(0)
    const [toggle,settoggle]=useState(false)
    const handlehelpme=useCallback(()=>{
    console.log("Help me button clicked");
   setCount((prevCount)=>prevCount+1)

},[]
    )
        const handletoggle=useCallback(()=>{
            console.log("togglebutton clicked")
            settoggle((prevToggle)=>!prevToggle)
        },[])

    return(
        <div>
            <h1>Use callback hook example</h1>
            <p>Count:{count}</p>
            <p>Toggle: {toggle ? "ON" : "OFF"}</p>
            {/* <button onClick={()=>setCount(count+1)}>increment</button> */}
            <CustomButton  onClick={handlehelpme} title={"increment"}/>
            <CustomButton onClick={handletoggle} title="Toggle"/>
        </div>
    )
}
export default UseCallbackComponent;