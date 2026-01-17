//Task 1: Use map and filter to process an array of objects
const users = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false },
    { id: 3, name: 'Charlie', age: 35, active: true },
    { id: 4, name: 'Diana', age: 28, active: true }
];

// Filter active users and map to get their names
const activeUserNames = users
    .filter(user => user.active)
    .map(user => user.name);

console.log(activeUserNames); // ['Alice', 'Charlie', 'Diana']

// Map to get user info and filter by age
const adultUsers = users
    .map(user => ({ ...user, isAdult: user.age >= 30 }))
    .filter(user => user.isAdult);

console.log(adultUsers);