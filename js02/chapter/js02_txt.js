/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: 
      Date:   

      Filename: js02.js
 */
const EMP_COST = 100;
const BOOK_COST = 350;
const REPRO_COST = 1250;
const TRAVEL_COST = 2;

window.addEventListener("load", setupForm);

function setupForm() {
  document.getElementById("photoNum").value = 1;
  document.getElementById("photoHrs").value = 2;
  document.getElementById("makeBook").checked = false;
  document.getElementById("photoRights").checked = false;
  document.getElementById("photoDist").value = 0;
  getEstimate();

  //event handlers to change estimate based on changes
  document.getElementById("photoNum").onchange = getEstimate;
  document.getElementById("photoHrs").onchange = getEstimate;
  document.getElementById("makeBook").onchange = getEstimate;
  document.getElementById("photoRights").onchange = getEstimate;
  document.getElementById("photoDist").onchange = getEstimate;
}

//estimate total cost of service
function getEstimate() {
  let totalCost = 0;
  let photographers = document.getElementById("photoNum").value;
  let hours = document.getElementById("photoHrs").value;
  let distance = document.getElementById("photoDist").value;

  totalCost += EMP_COST * photographers * hours;
  totalCost += TRAVEL_COST * photographers * distance;

  /*let buyBook = document.getElementById("makeBook").checked;
  let buyRights = document.getElementById("photoRights").checked;
  totalCost += buyBook ? buyBook : 0;
  totalCost += buyRights ? buyRights : 0; */

  totalCost += BOOK_COST * document.getElementById("makeBook").checked;
  totalCost += REPRO_COST * document.getElementById("photoRights").checked;

  //display the cost
  document.getElementById("estimate").innerHTML = "$" + totalCost;
}
