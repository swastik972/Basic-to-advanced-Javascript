//template literals or string interpolation
// id defines how to emnbed the values of variables in the string 
//syntax `${}`
let myName="Swastik Rawat"
let myAge=20;
// traditional way of string concatenation
// let myEmbedString = "My name is " + myName + " and my age is " + myAge;
// console.log("Using traditional way:", myEmbedString);

//or

//using template literals
let myOriginalEmbedString = `My name is ${myName} and my age is ${myAge}`;
console.log(`Using template literals: ${myOriginalEmbedString}`);
