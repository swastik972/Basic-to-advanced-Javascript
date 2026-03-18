import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

// create provider
const ThemeContextProvider=({children})=>{
    const [isLight,setLight]=useState(true);
    return(
        <ThemeContext.Provider value={{isLight, setLight}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;