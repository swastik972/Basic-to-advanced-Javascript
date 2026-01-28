// ### Example: Pure Function
// Pure function: same input → same output, no side effects


function add(a, b) {
  return a + b; // Only depends on parameters a and b
}

console.log(add(5, 3)); // Output: 8
console.log(add(5, 3)); // Output: 8 (always the same)

//Write a pure function isEven(num) that returns true if the number is even, false otherwise.
// function isEven(num){
//   if(num === 0){
//     return true;
//   }
//   else {
//     return num % 2 === 0;
//   }
// }
// console.log(isEven(4));

function capitalize(str) {
  if (str.length === 0) return str; // Handle empty string
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("hello")); // Output: Hello
console.log(capitalize("world")); // Output: World

function getFullName(firstName, lastName){
return firstName + ' ' + lastName;
}
console.log(getFullName("John", "Doe")); // Example usage


function formatDate(year, month, day) 
{
  return year + '-' + month + '-' + day;
}
console.log(formatDate(2026, 01, 23));


function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([3, 4, 5, 7])); // Output: 7
















