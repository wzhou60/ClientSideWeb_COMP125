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
//slide 14
//while loop
let i = 1;
while (i <= 5) {
  document.write(i + "<br>");
  i++; // increase the value of i by 1
  //
}
document.write("<p>The value of i is equal to " + i + "</p>");
//-----------------------------------
//slide 19
//Sample for loop:
for (let i = 1; i <= 5; i++) {
  document.write(i + "<br>");
}

//-----------------------------------
//slide 20

//Sample nested for loops (outer loop iterates through a set of table rows, inner loop iterates through a set of table cells within each row):
document.write("<table>");
for (let i = 1; i <= 2; i++) {
  document.write("<tr>");
  for (let j = 1; j <= 3; j++) {
    document.write("<td>" + i + "," + j + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");

//slide24 & 25
//Sample forEach Loop:
let x = [1, 3, 5, 10];
x.forEach(stepUp5);
function stepUp5(arrValue, i, arr) {
  arr[i] = arrValue + 5;
  document.write(arr[i]);
}

let p = [1, 3, 5, 10];
x.every(stepUp5);
function stepUp5(arrValue, i, arr) {
  arr[i] = arrValue + 5;
  document.write(arr[i]);
}
