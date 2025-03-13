"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season 
      Author: 
      Date:   
      
      Filename: js09b.js
 */
// Retrieve the text of the query string
let qString = location.search.slice(1);

// Replace the encoded characters in the query string
qString = qString.replace(/\+/g, "");
qString = decodeURIComponent(qString);

// Split the fieldname pairs into separate array items
let formData = qString.split(/&/g);
for (let items of formData) {
  //Extract the field names and values
  let fieldValuePair = items.split(/=/);
  let fieldName = fieldValuePair[0];
  let fieldValue = fieldValuePair[1];
  // Create a label containing the field name
  let fieldLabel = document.createElement("label");
  fieldLabel.textContent = fieldName;
  document.getElementById("contactInfo").appendChild(fieldLabel);
  // Create an disabled input box with the field value
  let inputBox = document.createElement("input");
  inputBox.id = fieldName;
  inputBox.name = fieldName;
  inputBox.value = fieldValue;
  8;
  inputBox.disabled = true;
  document.getElementById("contactInfo").appendChild(inputBox);
}

// Store data to local storage when the user signs up
document.getElementById("signupBtn").onclick = function () {
  // data fields to be saved tp local storage
  let formFields = document.querySelectorAll("#contactInfo input, input[type=radio], textarea");
  // write each field name and value to local storage
  for (let fields of formFields) {
    localStorage.setItem(fields.name, fields.value);
    writeCookie(fields.name, fields.value);
  }
  console.log(localStorage);
};
console.log(qString);

function writeCookie(name, value, expDate, path, domain, secure) {
  if (name && value) {
    let cStr = name + "=" + encodeURIComponent(value);
    if (expDate) cStr += ";expires=" + expDate.toUTCString();
    if (path) cStr += ";path=" + path;
    if (domain) cStr += ";domain=" + domain;
    if (secure) cStr += ";secure";
    document.cookie = cStr;
  }
}
function readCookie() {
  let fields = {};
  if (document.cookie) {
    let cookieList = document.cookie.split("; ");
    for (items of cookieList) {
      let cookie = items.split("=");
      let name = cookie[0];
      let value = decodeURIComponent(cookie[1]);
      fields[name] = value;
    }
    return fields;
  }
}
