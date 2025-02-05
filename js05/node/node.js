/*
// Get the container element
const container = document.getElementById("container");

// Use node.firstChild to get the first child of the container
const firstChild = container.firstChild;

// Log the first child node (which will be a text node, because of whitespace before the first <p>)
console.log(firstChild);

// To get the first element child (ignoring text nodes), we can use firstElementChild
const firstElementChild = container.firstElementChild;
console.log(firstElementChild);

// Display the first child element in the browser
document.body.insertAdjacentHTML(
  "beforeend",
  `<p>The first element child is: ${firstElementChild.innerHTML}</p>`
);
*/

document.addEventListener("DOMContentLoaded", () => {
  // Get the container element
  const element = document.getElementById("container");
  if (element) {
    // Use node.firstChild to get the first child of the element and log it in the console
    console.log(element.firstChild);
  }
  // To get the first element child (ignoring text nodes), we can use firstElementChild
  const firstElementChild = element.firstElementChild;
  console.log(firstElementChild);

  //--------------------------------------------------
  //lastChild
  if (element) {
    console.log(element.lastChild);
  }

  const lastElementChild = element.lastElementChild;
  console.log(lastElementChild);

  //node.childNodes;
  if (element) {
    console.log(element.childNodes);
    console.log(element.childNodes[0]);
  }
  //------------------
  //node.children
  const Children = element.children;
  console.log(Children);
  //---------------------------------
  //node.previousSiblings
  if (element) {
    console.log(element.previousSibling);
  }
  const previousElementSiblings = element.previousElementSibling;
  console.log(previousElementSiblings);
  //---------------------------------
  //node.nextSiblings

  if (element) {
    console.log(element.nextSiblings);
  }
  const nextElementSiblings = element.nextElementSibling;
  console.log(nextElementSiblings);
  //------------------------------------
  //node.parentNode
  if (element) {
    console.log(element.parentNode);
  }
  const parentElement = element.parentElementNode;
  console.log(parentElement);

  //------------------------------------
  //node.ownerDocument
  if (element) {
    console.log(element.ownerDocument);
  }
  const ownerDocument = element.ownerDocument;
  console.log(ownerDocument);

  //Query SelectorAll
  const allElements = document.querySelectorAll("#container");
  console.log(allElements);

  //query SelectorAll
  if (element) {
    //console.log(element.nextSiblings);
    console.log(element.querySelectorAll("p")[1]);
  }

  //query Selector
  if (element) {
    //console.log(element.nextSiblings);
    console.log(element.querySelector("p"));
  }

  //slide 14-Sample code for creating the documents Fragments <h1>My Slideshow</h1>
  let mainHeading = document.createElement("h1");
  let headingTxt = document.createTextNode("My Slideshow");
  mainHeading.appendChild(headingTxt);
  document.body.appendChild(mainHeading);
});
