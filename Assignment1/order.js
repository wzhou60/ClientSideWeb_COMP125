
window.addEventListener("load", calculateTotal);


function calculateTotal() {
    // Get the quantities and prices of ordered items (you'll need to implement how to get these values from your order form dynamically. This is a basic example)
    const item1Quantity = parseInt(document.getElementById("item1-quantity").value) || 0; // Use parseInt and default to 0 if input is empty or invalid
    const item1Price = parseFloat(document.getElementById("item1-price").textContent);  // Use parseFloat to handle decimal prices

    // ... similar logic for other items


    let subtotal = 0;
    subtotal += item1Quantity * item1Price;
    // ... add other items to subtotal

    const taxRate = 0.13;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;


    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("tax").textContent = tax.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);



}