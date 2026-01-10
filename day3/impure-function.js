let taxRate = 0.1; // External variable

// Impure: depends on external state and result changes if taxRate changes
function calculateTax(price) {
  return price * taxRate; // Relies on external variable
}