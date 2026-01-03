//default parameter example 
const multiply = (a,b)=>a*b;
// function call 
let res =multiply(3,4);
console.log(`result of multiply:${res}`);

let res1=multiply(6);
console.log(`result of multiply:${res1}`);

let res2=multiply();
console.log(`result of multiply:${res2}`);


let Swa=multiply(0);
console.log(`multiply of:${Swa}`);

function sayHello(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

sayHello("Swastik");
sayHello();