// Pure function: same input → same output, no side effects
function add(a, b) {
  return a + b; // Only depends on parameters a and b
}

console.log(add(5, 3)); // Output: 8
console.log(add(5, 3)); // Output: 8 (always the same)