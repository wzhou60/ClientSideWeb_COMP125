const numbers = [3, 7, 9, 12, 5];

// Named function with 'this'
function isGreaterThanTenWithThis(currentValue) {
  return currentValue > this.threshold;
}

// 'thisArg' object with a 'threshold' property
const context = { threshold: 10 };

// Using some() with the named function and 'thisArg'
const hasLargeNumberWithThis = numbers.some(isGreaterThanTenWithThis, context);

console.log(hasLargeNumberWithThis); // Output: true
