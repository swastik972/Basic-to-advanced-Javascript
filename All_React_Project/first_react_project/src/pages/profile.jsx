//destructing :ket (a,b,c)={a:1,b:2,c:3}
//destructing props

import { useState } from 'react';

let Profile=({address,name,age})=>{
    // const [count, setCount] = useState(0);

    console.log("Props:",address)
    console.log("Props:",name)
    console.log("Props:",age)
    // let count =10;
    let [count,Setc]=useState(0);


    return(
        <div>
            <h1>Profile Page</h1>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Address:{address}</p>
            <p>Count:{count}</p>
            <button onClick={
                ()=>{
                    //count =count +1;
                Setc(count + 1);
                console.log("count:",count + 1)
                }

            }>Increase count</button>
        </div>
    )
}
export default Profile;