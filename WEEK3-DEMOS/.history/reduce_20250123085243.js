const numbers = [1, 2, 3, 4, 5];

// Named function to be used as the callback in reduce
function add(accumulator, currentValue) {
  return accumulator + currentValue;
}

// Using reduce with the named function
const sum = numbers.reduce(add, 0);

document.write(sum); // Output: 15

//Explanation:
//The add function is a named function that takes two arguments: accumulator and currentValue.
//We pass the add function as the callback to reduce(), and 0 is used as the initial value for the accumulator.
The reduce() method will iterate through the array, calling the add function for each element, accumulating the sum.
