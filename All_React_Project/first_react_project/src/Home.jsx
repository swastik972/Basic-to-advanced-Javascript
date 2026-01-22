import React from 'react'

function Home() {
    return (
        <>
            <h1>Home</h1>
            <p>This is home page</p>
        </>
    )
}

function First(){
    return(
        <>
          <h1>first</h1>
            <p>This is first page</p>
        </>
    )
}

function Second(){
    return(
        <>
          <h1>second</h1>
            <p>This is second page</p>
        </>
    )
}

function Third(){
    return(
        <>
          <h1>third</h1>
            <p>This is third page</p>
        </>
    )
}

function Greeting({name, last}){
    return (
        <div>
            <h4>"hello its me  " {name} {last} </h4>
        </div>
    )
}

export default Home
export {First, Greeting, Third, Second}