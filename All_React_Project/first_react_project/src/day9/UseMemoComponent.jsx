import React, { useState, useMemo } from "react";
const expensiveCalculation = (num) => {
    for(let i=0;i<1000;i++){
        num += 1;
    }
    return num;
}


const UseMemoComponent =()=>{
    console.log("Use Memo Component Rendered");
        const [count,setCount] = useState(0);
        //using useMemo to    memoize the result of expensive calculation 
        let result = useMemo(
            () => expensiveCalculation(count),
            [count]
        );
        
        const [Toggle,setToggle] = useState(false);
        return(
            <div>
                <h1>Use Memo Component</h1>
                <h2>Count: {count}</h2>
                <h2>Expensive Calculation: {result}</h2>
                <button onClick={()=>setCount(count+1)}>Increment</button>
                <h3>Toggled</h3>
                <p>{Toggle ?"Toggle On":"Toggle Off"}</p>
                <button onClick={()=>setToggle(!Toggle)}>Toggle</button>
            </div>
    )

}
export default UseMemoComponent;