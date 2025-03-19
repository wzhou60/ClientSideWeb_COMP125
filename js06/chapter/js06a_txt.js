"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: 
      Date:   

      Filename: js06a.js
 */

window.addEventListener("load", function () {
  let orderForm = document.forms.orderForm;
  let model = orderForm.elements.model;
  //Select Model selection list when form opens
  model.focus();

  //Add an event Listener for every form element
  for (let i = 0; i < orderForm.elements.length; i++) {
    orderForm.elements[i].addEventListener("change", calcOrder);
  }

  //calc the order cost
  calcOrder();
  function calcOrder() {
    //Determine the selected model
    let mIndex = model.selectedIndex;
    let mValue = models.options[mIndex].value;

    //determine the selected quantity
    let qIndex = orderForm.elements.qty.selectedIndex;
    let quantity = orderForm.elements.qty[qIndex].value;

    //model cost = model cost x quantity
    let modelCost = mValue * quantity;
    orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    // Retrieve the cost of the protection plan
    let planValue = document.querySelector('input[name="plan"]:checked').value;
    //Charge the plan to each item ordered
    let planCost = planValue * quantity;
    orderForm.elements.planCost.value = planCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    //Calculate the order subtotal
    let subtotal = modelCost + planCost;
    orderForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    //Calculate the 5% sales tax
    let salesTax = subtotal * 0.05;
    orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    //Calculate the total cost of the order
    let totalCost = subtotal + salesTax;
    orderForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    orderForm.elements.modelName.value = model.options[mIndex].text;
    let selectedPlan = document.querySelector('input[name:"plan"]:checked');
    orderForm.elements.planName.value = selectedPlan.labels[0].textContent;

    //Check if the owner's name is entered on the card
    function validateName() {
      let cardName = document.getElementById("cardName");
      if (cardName.validity.valueMissing) {
        cardName.setCustomValidity("Enter your name as it appears on the card");
      } else {
        cardName.setCustomValidity("");
      }
    }
    let subButton = document.getElementById("subButton");
    // Validate the payment when the submit button is clicked
    subButton.addEventListener("click", validateName);


    
    //Check if a credit card has been selected
    function validateCard() {
      let card = document.forms.payment.elements.credit[0];
      if (card.validity.valueMissing) {
        card.setCustomValidity("Select you credit card");
      } else {
        card.setCustomValidity("");
      }
    }
    //Check if the card number is valid
    function validateNumber() {
      let cNum = document.getElementById("cardNumber");
      if (cNum.validity.valueMissing) {
        cNum.setCustomValidity("Enter your card number");
      } else if (cNum.validity.patterMismatch) {
        cNum.setCustomValidity("Enter a valid card number");
      } else if (luhn(cNum.value) === false) {
        cNum.setCustomValidity("Enter a legitimate card number");
      } else {
        cNum.setCustomValidity("");
      }
    }
    //Check that a month is selected for the expiration date
    function validateMonth() {
      let month = document.getElementById("expMonth");
      if (month.selectedIndex === 0) {
        month.setCustomValidity("Select the expiration month");
      } else {
        month.setCustomValidity("");
      }
    }
    // Check that a year is selected for the expiration date
    function validateYear() {
      let year = document.getElementById("expYear");
      if (year.selectedIndex === 0) {
        year.setCustomValidity("Select the expiration year");
      } else {
        year.setCustomValidity("");
      }
    }
    function validateCVC() {
      //Determine which card was selected
      let card = document.querySelector('input [name="credit"]:checked').value;
      let cvc = document.getElementById("cvc");
      //Validate the CVC value
      if (cvc.validity.valueMissing) {
        cvc.setCustomValidity("Enter your number");
      } else if (card === "amex" && !/^\d{4}$/.test(cvc.value)) {
        cvc.setCustomValidity("Enter a 4-digit number");
      } else if (card !== "amex" && !/^\d{3}$/.test(cvc.value)) {
        cvc.setCustomValidity("Enter a 3-digit number");
      } else {
        cvc.setCustomValidity("");
      }
    }
  }
});
