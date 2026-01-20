import React from 'react'
let Home=()=>{
    return (
         <div>
        <h1>Home Page</h1>
        <p>This is home page</p>
       
        </div>
    )
}

const First = () => {
    return (
        <div>
            <h1>First Component</h1>
            <p>This is the first component</p>
        </div>
    );
}
const Second = () => {
    return (
        <div>
            <h1>Second Component</h1>
            <p>This is the second component</p>
        </div>
    );
}

const Third = () => {
    return (
        <div>
            <h1>Third Component</h1>
            <p>This is the third component</p>
        </div>
    );
}



export default Home;
export { First, Second, Third };