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
