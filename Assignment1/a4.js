window.addEventListener("load", function () {
  var selectElements = document.querySelectorAll("select");
  for (var i = 0; i < selectElements.length; i++) {
    selectElements[i].selectedIndex = -1;
  }

  var age = document.getElementById("age");
  var postalCode = document.getElementById("postalCode");
  let fname = document.getElementById("f-name");
  let lname = document.getElementById("l-name");
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

    console.log(isValid);
    if (isValid) {
      alert(
        "Thanks for registering with our website! Your customer record was created successfully."
      );
      document.getElementById("reg-form").reset();
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

  let subButton = document.getElementById("submit");
  subButton.addEventListener("click", validator);
});
