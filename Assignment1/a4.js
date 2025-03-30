window.addEventListener("load", function () {
  var selectElements = document.querySelectorAll("select");
  for (var i = 0; i < selectElements.length; i++) {
    selectElements[i].selectedIndex = -1;
  }
  var queryArray = [];
  var age = document.getElementById("age");
  var postalCode = document.getElementById("postalCode");
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let email = document.getElementById("email");
  let province = document.getElementById("province");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");

  function validator() {
    let isValid = false;
    console.log(isValid);

    if (
      validateName() &&
      validateLastName() &&
      validateAge() &&
      validateEmail() &&
      validatePostalCode() &&
      validateProvince() &&
      validatePassword() &&
      validateMatchingPassword()
    ) {
      isValid = true;
    } else {
      isValid = false;
    }
    if (isValid) {
      console.log("Generating Query String...");
      //getQueryString();
      console.log("Query String:", queryString);

      //storeDataInCookie();
      //storeDataInLocalStorage();
      //retrieveAndLogData();

      //alert("Thanks for registering! Your customer record was created successfully.");
      //document.getElementById("reg-form").reset();
      for (var i = 0; i < selectElements.length; i++) {
        selectElements[i].selectedIndex = -1;
      }
    } else {
    }
  }

  function validateName() {
    console.log("validateName");
    if (fname.validity.valueMissing) {
      fname.setCustomValidity("Please enter your name");
      return false;
    } else {
      fname.setCustomValidity("");
      return true;
    }
  }

  function validateLastName() {
    if (lname.validity.valueMissing) {
      lname.setCustomValidity("Please enter your last name");
      return false;
    } else {
      lname.setCustomValidity("");
      return true;
    }
  }

  function validateEmail() {
    if (email.validity.valueMissing) {
      email.setCustomValidity("Please enter your email address");
      return false;
    } else if (email.validity.patternMismatch) {
      email.setCustomValidity(
        "Please enter a valid email address (Must contain a @ and . character)"
      );
      return false;
    } else {
      email.setCustomValidity("");
      return true;
    }
  }

  function validateAge() {
    if (age.validity.valueMissing) {
      age.setCustomValidity("Please enter your age");
      return false;
    } else if (age.value < 18 || age.value === "") {
      age.setCustomValidity("You must be at least 18 years old to register.");
      return false;
    } else {
      age.setCustomValidity("");
      return true;
    }
  }

  function validatePostalCode() {
    if (postalCode.validity.valueMissing) {
      postalCode.setCustomValidity("Please enter your postal code");
      return false;
    } else if (postalCode.validity.patternMismatch) {
      postalCode.setCustomValidity(
        "Please enter a valid postal code (Must be in A0A0A0 format and no spaces)"
      );
      return false;
    } else {
      postalCode.setCustomValidity("");
      return true;
    }
  }

  function validateProvince() {
    if (province.validity.valueMissing) {
      province.setCustomValidity("Please select a province");
      return false;
    } else {
      province.setCustomValidity("");
      return true;
    }
  }

  function validatePassword() {
    if (password.validity.valueMissing) {
      password.setCustomValidity("Please enter a password");
      return false;
    } else if (password.validity.patternMismatch) {
      password.setCustomValidity(
        "Password must be at least 6 characters long and contain at least one number and one uppercase letter."
      );
      return false;
    } else {
      password.setCustomValidity("");
      return true;
    }
  }

  function validateMatchingPassword() {
    if (password.value !== confirmPassword.value) {
      if (confirmPassword.validity.valueMissing) {
        document.activeElement === confirmPassword;
        confirmPassword.setCustomValidity("Please confirm your password");
      } else {
        confirmPassword.setCustomValidity("Please make sure passwords match");
      }
      return false;
    } else {
      confirmPassword.setCustomValidity("");
      password.setCustomValidity("");
      return true;
    }
  }

  function getQueryString() {
    if (window.location.search) {
      console.log("INSIDE LOCATION SEARCH");
      console.log(window.location.search);
      var queryData = window.location.search;
      //Return the text after the first query string
      var queryData = queryData.slice(1);
      console.log(queryData);
      //To convert it into an Array
      queryArray = queryData.split("&");
      console.log(queryArray);
    }
  }

  //
  //
  // A5 COOKIE STUFF
  //
  //
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires;
    console.log("Set cookie:", name, value, expires);
  }

  function storeDataInCookie() {
    let formData = new FormData(form);
    formData.forEach((value, key) => {
      setCookie(key, value, 7); // Store cookies for 7 days
    });
  }

  function storeDataInLocalStorage() {
    let formData = new FormData(form);
    formData.forEach((value, key) => {
      localStorage.setItem(key, value);
      console.log("Stored data in localStorage:", key, value);
    });
  }

  function getCookie(name) {
    let nameEQ = name + "=";
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let c = cookies[i].trim();
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
  }

  function retrieveAndLogData() {
    let storedData = {};
    form.querySelectorAll("input, select").forEach((input) => {
      let cookieValue = getCookie(input.name);
      let localStorageValue = localStorage.getItem(input.name);
      if (cookieValue) storedData[input.name] = cookieValue;
      if (localStorageValue) storedData[input.name] = localStorageValue;
    });
    console.log("Cookie in WebStorage:", storedData);
  }

  //
  //
  // A5 COOKIE STUFF
  //
  //

  let subButton = document.getElementById("register");
  // subButton.addEventListener("click", storeDataInCookie, false);
  subButton.addEventListener("click", validator);
});
