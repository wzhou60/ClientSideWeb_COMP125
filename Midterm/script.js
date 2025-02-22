window.addEventListener("load", function () {
  let selectElements = document.querySelectorAll("select");
  for (let i = 0; i < selectElements.length; i++) {
    selectElements[i].selectedIndex = -1;
  }

  let inputElements = document.querySelectorAll("select,input:not([type='submit'])");

  inputElements.forEach(function (element) {
    element.style.backgroundColor = "white";
    element.style.border = "thin solid #000000";
  });

  let fname = document.getElementById("firstName");
  fname.focus();

  let subButton = document.getElementById("submit");
  subButton.addEventListener("click", validateFirstName);

  function validateFirstName() {
    console.log("validateFirstName");
    let fname = document.getElementById("firstName");
    fname.style.backgroundColor = "white";

    if (fname.validity.valueMissing) {
      fname.setCustomValidity("Please enter your first name");
      fname.style.backgroundColor = "pink";
    } else {
      fname.setCustomValidity("");
    }
    validateLastName();
    validateGender();
    validatePhone();
    validateAddress();
    validateYear();
  }

  function validateLastName() {
    let lname = document.getElementById("lastName");
    lname.style.backgroundColor = "white";

    if (lname.validity.valueMissing) {
      lname.setCustomValidity("Please enter your last name");
      lname.style.backgroundColor = "pink";
    } else {
      lname.setCustomValidity("");
    }
  }

  function validateGender() {
    let gender = document.getElementById("gender");

    if (!gender.checkValidity()) {
      gender.setCustomValidity("Please select your gender");
      gender.style.backgroundColor = "pink";
    } else {
      gender.setCustomValidity("");
    }
  }

  function validatePhone() {
    let phone = document.getElementById("phone");
    if (phone.validity.valueMissing) {
      phone.setCustomValidity("Please enter your phone number");
      phone.style.backgroundColor = "pink";
    } else {
      phone.setCustomValidity("");
    }
  }
  function validateAddress() {
    let address = document.getElementById("address");
    if (address.validity.valueMissing) {
      address.setCustomValidity("Please enter your address");
      address.style.backgroundColor = "pink";
    } else {
      address.setCustomValidity("");
    }
  }

  function validateYear() {
    let year = document.getElementById("year");
    //console.log(year.checkValidity());
    if (!year.checkValidity()) {
      year.setCustomValidity("Please enter the year");
      year.style.backgroundColor = "pink";
    } else {
      year.setCustomValidity("");
    }
  }
});
