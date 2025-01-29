const numbers = [1, 2, 3, 4, 5];

// Named function to be used as the callback in reduceRight
function subtract(accumulator, currentValue) {
  return accumulator - currentValue;
}

// Using reduceRight with the named function
const result = numbers.reduceRight(subtract, 20);

document.write(result); // Output: 5

//Explanation:
//subtract function: This function takes two parameters (accumulator, currentValue) and subtracts currentValue from accumulator.
//reduceRight(): Instead of iterating from the beginning to the end, reduceRight() iterates over the array from the last element to the first.
//It starts with an initial accumulator value of 20.
//Then it subtracts each element from the accumulator, starting with the last element (5).
//So the iteration would look like this:

//20 - 5 = 15
//15 - 4 = 11
//11 - 3 = 8
//8 - 2 = 6
//6 - 1 = 5
//The final result is 5.