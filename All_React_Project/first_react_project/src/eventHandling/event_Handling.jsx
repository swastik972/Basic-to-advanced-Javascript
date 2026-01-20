import Profile from "../pages/setting"

let EventHandling=()=>{
    let handleIncrement=(event)=>{
        console.log("Increment button clicked")
        event.target.style.backgroundColor="red"
        event.target.style.fontsize="40px"
    }
    let person={
        name:"Ram",
        age:30,
        address:"ktm"
    }
/* 
let event= {
target:{
title:"increment",
style:{
background:"red",
fontSize:"40px",
onClick:()=>{},
}
}

 */
let handleOnChange=(event)=>{
    console.log("input changed")
    console.log(event.target.placeholder)
    console.log(event.target.value)
}
return(
    <div>
        <h1>Event handling Page</h1>
        <input onChange={handleOnChange} placeholder="Enter your fullname" type="text"/>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={
            (event)=>{
                console.log("Decrement Clicked")
                console.log(event.target)
            }
        }>Decrement</button>
        <Profile {...person}/>
      
    </div>
)
}

export default EventHandling 