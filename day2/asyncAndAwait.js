//async and await solves the problem of callback hell 
//makes code lok like synchronous code 
//async makes a function return a promise 
//await makes a function wait for a promise

let fetchUsers=async()=>{
    try{
let response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
let result =await response.json()
console.log("user:",result);
    }catch(error){
        console.log("something went wrong");
    }finally {
        console.log("this alway.called");
    }
}
console.log("fetching user...");
fetchUsers();
console.log("after fetching user ");