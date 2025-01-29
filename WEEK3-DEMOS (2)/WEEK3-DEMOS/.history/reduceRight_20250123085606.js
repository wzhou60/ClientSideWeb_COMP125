const numbers = [1, 2, 3, 4, 5];

// Named function to be used as the callback in reduceRight
function subtract(accumulator, currentValue) {
  return accumulator - currentValue;
}

// Using reduceRight with the named function
const result = numbers.reduceRight(subtract, 20);

document.write(result); // Output: 5
