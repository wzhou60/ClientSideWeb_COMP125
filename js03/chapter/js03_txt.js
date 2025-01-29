/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

     Filename: js03.js
 */
window.addEventListener("load", showGames);

function showGames() {
  for (let i = 0; i < gameDates.length; i++) {
    let gameInfo = "";

    switch (gameResults[i]) {
      case "W":
        gameInfo += "<p class='win'>";
        break;
      case "L":
        gameInfo += "<p class='lose'>";
        break;
      case "S":
        gameInfo += "<p class='suspended'>";
        break;
      case "P":
        gameInfo += "<p class='postponed'>";
        break;
    }
    
    //display game location
    if (gameLocations[i] === "h") {
      gameInfo += "vs. ";
    } else if (gameLocations[i] === "a") {
      gameInfo += "@ ";
    }

    gameInfo += gameOpponents[i] + "<br>";
    //results and score
    gameInfo += gameResults[i] + ": (" + runsScored[i] + "-" + runsAllowed[i] + ")";
    if (gameInnings[i] < 5) {
      gameInfo += " [" + gameInnings[i] + " ]***";
    } else if (gameInnings[i] < 9) {
      gameInfo += " [" + gameInnings[i] + " ]*";
    } else if (gameInnings[i] > 9) {
      gameInfo += " [" + gameInnings[i] + " ]";
    }

    //close paragraph
    gameInfo += "</p>";
    //write info in cell
    let tableCell = document.getElementById(gameDates[i]);
    tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
  }
}
