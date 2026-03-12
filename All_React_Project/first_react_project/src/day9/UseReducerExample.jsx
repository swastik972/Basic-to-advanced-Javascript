import React, { useReducer } from "react";
let myReducer = (state, action) => {
    if(action.type==="inc"){
        return state + 1;
    }else if (action.type==="dec"){
        return state - 1;   
    }else{
        return state;   
    }
}
const UseReducerExample = () => {
    const [count, dispatch] = useReducer(myReducer, 0);
    return (
        <div>
            <h1>Use Reducer Example</h1>
            {<p>Count: {count}</p> }
            <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
            <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
        </div>
    )
}
export default UseReducerExample;
