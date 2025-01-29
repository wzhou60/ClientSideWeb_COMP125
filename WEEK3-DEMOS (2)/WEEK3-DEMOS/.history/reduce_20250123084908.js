const numbers = [1, 2, 3, 4, 5];

// Named function to be used as the callback in reduce
function add(accumulator, currentValue) {
  return accumulator + currentValue;
}

// Using reduce with the named function
const sum = numbers.reduce(add, 0);

document(sum); // Output: 15
