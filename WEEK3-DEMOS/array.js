//slide 4
/*let newSection = ["world", "local", "opinion", "sports"];
document.write(newSection);
*/

//OR
//-----------------------------------
/*let newSection = new Array(4);
newSection[0] = "world";
newSection[1] = "local";
newSection[2] = "opinion";
newSection[3] = "sports";
document.write(newSection);
*/

//slide5
/*
let newSection = ["world", "local", "opinion", "sports"];
//document.write(newSection);

newSection[4] = "Entertainment";
document.write(newSection);

ghj = newSection.length;
console.log(ghj);
*/
//-----------------------------------

//-----------------------------------

//-----------------------------------

//slide 26
let p = [1, 3, 5, 10];

p.every(function stepUp5(arrValue, i, arr) {
  arr[i] = arrValue + 5; // Modify the array in place
  console.log(arr[i]); // Print the updated value
  return true; // Always return true to continue iterating
});
