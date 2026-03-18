import { createContext, useState } from "react"
// creating context or container
let ThemeContext = createContext()

const Themetoggle = () => {
    console.log("theme toggle component rendered")
    const [isLightTheme, setIsLightTheme] = useState(true);

    return (

        <div>
 <div className="navbar">
            <h2>Theme Toggle Example</h2>
            <b>{isLightTheme ? "Light" : "Dark"}</b>
            <button onClick={()=>setIsLightTheme(!isLightTheme)}>Toggle Theme</button>
        </div>
        </div>
    )
}
       
export default Themetoggle;