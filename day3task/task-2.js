//Write a function that returns a new object without modifying the original

// Original user object
const originalUser = {
  name: "Swastik",
  age: 20,
  country: "Nepal",
  hobbies: ["coding", "Cricket"]
};

// Function to update age immutably
function updateUserAge(user, newAge) {
  // Use spread operator to create shallow copy
  // Only override the 'age' property
  return {
    ...user,              // Copy all properties from original
    age: newAge           // Update only age
  };
}

// Call the function
const updatedUser = updateUserAge(originalUser, 21);

// Log both objects
console.log("Original:", originalUser);
/*
{
  name: "Swastik",
  age: 20,
  country: "Nepal",
  hobbies: ["coding", "Cricket"]
}
*/

console.log("Updated:", updatedUser);
/*
{
  name: "Swastik",
  age: 21,
  country: "Nepal",
  hobbies: ["coding", "Cricket"]
}
*/

// Proof of immutability
console.log(originalUser.age === 22); // true → original not changed