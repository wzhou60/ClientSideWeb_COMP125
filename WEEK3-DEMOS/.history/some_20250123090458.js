const numbers = [3, 7, 9, 12, 5];

// Named function with 'this'
function isGreaterThanTenWithThis(currentValue) {
  return currentValue > this.threshold;
}

// 'thisArg' object with a 'threshold' property
const context = { threshold: 10 };

// Using some() with the named function and 'thisArg'
const hasLargeNumberWithThis = numbers.some(isGreaterThanTenWithThis, context);

document.write(hasLargeNumberWithThis); // Output: true

//Explanation:
//Here, the thisArg (provided as the context object) sets the threshold property to 10.
Inside the isGreaterThanTenWithThis function, this.threshold refers to the threshold property from the context object, so it checks if the numbers are greater than 10.