import { useState, useEffect } from "react";
//custom hook to fetch data from api
let useFetch = (url) => {
   
    let [data,setData]=useState([]);
    useEffect(
        ()=>{
           fetch(url)
      .then(response => response.json())
      .then(
        data=> setData(data)
    )
    
    },
    //dependency array
    []
)
    return [data,setData];
}
export default useFetch;