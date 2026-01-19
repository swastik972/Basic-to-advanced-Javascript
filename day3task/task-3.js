//Immutability Principles 
//Update an object's age from 25 to 26 immutably using spread operator.
const person = { name: "Swastik", age: 20 };
const updatedPerson = { ...person, age: 20};
console.log(updatedPerson); // { name: "Swastik", age: 20 }
console.log(person); // { name: "Swastik", age: 20} (original unchanged)