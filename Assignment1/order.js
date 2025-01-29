const taxRate = 0.13; // 13% tax
let subtotal = 0;

// Prices for each item
const prices = {
  item1: 5.99, // Classic Burger
  item2: 8.99, // Cheese Pizza
  item3: 4.99, // Chicken Nuggets (6 pcs)
  item4: 2.99, // French Fries
  item5: 3.99, // Poutine
  item6: 3.49, // Vanilla Milkshake
  item7: 4.99, // Fish Burger
  item8: 5.99, // Chicken Burger
};

window.addEventListener("load", setupForm);

function setupForm() {
  document.getElementById("item1").value = 0;
  document.getElementById("item2").value = 0;
  document.getElementById("item3").value = 0;
  document.getElementById("item4").value = 0;
  document.getElementById("item5").value = 0;
  document.getElementById("item6").value = 0;
  document.getElementById("item7").value = 0;
  document.getElementById("item8").value = 0;
  calculateTotal();

  document.getElementById("item1").onchange = calculateTotal;
  document.getElementById("item2").onchange = calculateTotal;
  document.getElementById("item3").onchange = calculateTotal;
  document.getElementById("item4").onchange = calculateTotal;
  document.getElementById("item5").onchange = calculateTotal;
  document.getElementById("item6").onchange = calculateTotal;
  document.getElementById("item7").onchange = calculateTotal;
  document.getElementById("item8").onchange = calculateTotal;
}

function calculateTotal() {
  let item1 = document.getElementById("item1").value;
  let item2 = document.getElementById("item2").value;
  let item3 = document.getElementById("item3").value;
  let item4 = document.getElementById("item4").value;
  let item5 = document.getElementById("item5").value;
  let item6 = document.getElementById("item6").value;
  let item7 = document.getElementById("item7").value;
  let item8 = document.getElementById("item8").value;

  subtotal =
    item1 * prices.item1 +
    item2 * prices.item2 +
    item3 * prices.item3 +
    item4 * prices.item4 +
    item5 * prices.item5 +
    item6 * prices.item6 +
    item7 * prices.item7 +
    item8 * prices.item8;
  // Calculate tax and total
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  // Update the order summary in HTML
  document.getElementById("subtotal").innerHTML = subtotal.toFixed(2);
  document.getElementById("tax").innerHTML = tax.toFixed(2);
  document.getElementById("total").innerHTML = total.toFixed(2);
}
