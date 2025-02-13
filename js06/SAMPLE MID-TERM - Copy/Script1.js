window.addEventListener("load", function () {
  //Get all the select elements in the form
  var selectElements = document.querySelectorAll("select");

  //Loop through each select element and set selectedIndex to -1
  for (var i = 0; i < selectElements.length; i++) {
    selectElements[i].selectedIndex = -1;
  }

  
  function validateName() {
    let fname = document.getElementById("FName");
    if (fname.validity.valueMissing) {
      fname.setCustomValidity("Enter your name as it appears");
    } else {
      fname.setCustomValidity("");
    }
      validateLastName();
    //validateStreet();
    //validateCity();
    //validateState();
    //validateZip();
    //validatePhone();
  }

  function validateLastName() {
    let lname = document.getElementById("LName");
    if (lname.validity.valueMissing) {
      lname.setCustomValidity("Enter your lastname as it appears");
    } else {
      lname.setCustomValidity("");
    }
  }

  /*
  function validateStreet() {
    let street = document.getElementById("bStreet");
    if (street.validity.valueMissing) {
      street.setCustomValidity("Enter your streetname as it appears");
    } else {
      street.setCustomValidity("");
    }
  }

  function validateCity() {
    let city = document.getElementById("bCity");
    if (city.validity.valueMissing) {
      city.setCustomValidity("Enter your cityname as it appears");
    } else {
      city.setCustomValidity("");
    }
  }

  function validateState() {
    let state = document.getElementById("bState");
    if (state.validity.valueMissing) {
      state.setCustomValidity("Enter your state as it appears");
    } else {
      state.setCustomValidity("");
    }
  }

  function validateZip() {
    let zip = document.getElementById("bZip");
    if (zip.validity.valueMissing) {
      zip.setCustomValidity("Enter your zip code as it appears");
    } else {
      zip.setCustomValidity("");
    }
  }

  function validatePhone() {
    let phone = document.getElementById("bPhone");
    if (phone.validity.valueMissing) {
      phone.setCustomValidity("Enter your phone number as it appears");
    } else {
      phone.setCustomValidity("");
    }
  }
*/

  let subButton = document.getElementById("submit");
  subButton.addEventListener("click", validateName);
});


/*
//---------------------------------------
//slide5a
 document.addEventListener("DOMContentLoaded", function () {
  let yu = document.forms["orderform"];
  console.log(yu);
}); 

//slide 5b

document.addEventListener("DOMContentLoaded", function () {
  let yu = document.forms["orderform"];
  let ty = yu.elements["FirstName"];
  console.log(ty);
});
//slide9
document.addEventListener("DOMContentLoaded", function () {
  let yu = document.forms["orderform"];
  let uu = yu.elements["State"];
  let rt = uu.length;
  console.log(rt);
});
//slide9- select.multiple
document.addEventListener("DOMContentLoaded", function () {
  let yu = document.forms["orderform"];
  let uu = yu.elements["State"];
  let rt = uu.multiple;
  console.log(rt);
  //select.name
  let er = uu.name;
  console.log(er);

  //select.option
  let gh = uu.options;
  console.log(gh);

  //select.selectedIndex
  let kl = uu.selectedIndex;
  console.log(kl);

  //select.size
  let cf = uu.size;
  console.log(cf);
});
*/
