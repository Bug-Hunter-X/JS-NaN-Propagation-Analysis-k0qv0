function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (x < 0) {
    return -1; // Handle negative numbers
  } else if (isNaN(x)) {
    return -2; // Handle NaN case
  } else {
    return x + 1; // Standard case
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(-1));  // Output: -1
console.log(foo(5));   // Output: 6
console.log(foo(NaN)); // Output: -2