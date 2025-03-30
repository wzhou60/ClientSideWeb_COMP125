"use strict";
/*
   JavaScript 7th Edition
   Chapter 11
   Chapter Case

   Author:   
   Date:     

   Filename: js11.js
*/

window.addEventListener("load", init);

function init() {
  // Page Objects
  let stories = document.getElementById("stories");
  let news = document.getElementById("news");
  let sInput = document.getElementById("sInput");
  let sButton = document.getElementById("sButton");
  let suggestBox = document.getElementById("suggestBox");

  // Create a request object
  const xhr = new XMLHttpRequest();

  // Handle the changing request state
  xhr.onreadyStateChange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        //Manage the response
        stories.innerHTML = xhr.responseText;
      } else {
        console.log("Request failed " + xhr.statusText);
      }
    }
  };

  console.log("Request comemtnrtary ");

  // Open the request and send it
  xhr.open("get", "commentary.html");
  xhr.send(null);

  // Retrieve archived articles from the web server
  sButton.onclick = () => {
    fetch("archives.pl?skey=" + encodeURIComponent(sInput.value))
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          return "unable to retrieve commentary";
        }
      })
      .then((context) => (stories.innerHTML = context))
      .catch((stories.innerHTML = "Network Failure"));
  };
}
