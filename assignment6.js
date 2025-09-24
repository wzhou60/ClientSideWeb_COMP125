"use strict";
/*  JavaScript 7th Edition
    Chapter 12
    Chapter case

    Bonsai Expressions FAQ 
    Author: 
    Date:   

    Filename: js12.js
*/

// Run once the page is loaded and ready
$(() => {
  //div > img
  $("div > img").mouseenter((e) => {
    $(e.target).animate(
      {
        width: "300px",
        height: "300px",
      },
      1000
    );
  });
  $("div > img").mouseout((e) => {
    $(e.target).stop();
  });

  // Animate the h1 heading
  $("section > h1")
    .css({
      fontSize: 0,
      opacity: 0,
    })
    .animate(
      {
        fontSize: "2.3em",
        opacity: 1,
      },
      600
    );
});
