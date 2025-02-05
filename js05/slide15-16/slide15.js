//createElement and AppendChild
/* var list = document.getElementById("topnav");
var contact = document.createElement("li");
list.appendChild(contact);
contact.innerHTML = "Contacts"; */


//----------------------------------------------------

//node.cloneNode(deep)
/* var list = document.getElementById("topnav");
var listItem = list.children;
var order = listItem[1];
var ordercopy = order.cloneNode(true);
list.appendChild(ordercopy);
ordercopy.innerHTML = "Location"; */


//----------------------------------------------------

//QuerySelectorAll and insertBefore
var list = document.getElementById("topnav");
var directions = document.createElement("li");
directions.innerHTML = "Directions";
var aboutus = document.querySelectorAll("#topnav li")[0];
list.insertBefore(directions, aboutus);

//----------------------------------------------------
//removeChild
/*
var list = document.getElementById("topnav");
var aboutus = document.querySelectorAll("#topnav li")[0];
var aboutNode = list.removeChild(aboutus);
*/
//-----------------------------------------------
