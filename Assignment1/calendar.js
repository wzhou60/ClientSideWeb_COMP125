const janOrders = {
  3: { customer: "Obama Obama", food: "Classic Burger", price: 5.99, option: "Dine-In" },
  7: { customer: "Naruto Smith", food: "Chicken Nuggets", price: 4.99, option: "Take-Out" },
  11: { customer: "Jo Trump", food: "Chicken Nuggets", price: 4.99, option: "Take-Out" },
  15: { customer: "Donald Biden", food: "French Fries", price: 2.99, option: "Dine-In" },
  20: { customer: "John Nintendo", food: "Cheese Pizza", price: 8.99, option: "Take-Out" },
  25: { customer: "Emily Clark", food: "Vanilla Milkshake", price: 3.49, option: "Dine-In" },
};

window.addEventListener("load", generateCalendar);
function generateCalendar() {
  const calendar = document.querySelector(".calendar");

  // Populate the calendar with days
  for (let day = 1; day <= 31; day++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.textContent = day;

    // Check if there's an order on this day
    if (janOrders[day]) {
      const order = janOrders[day];

      // Add order details
      const orderDetails = document.createElement("div");
      orderDetails.classList.add("order-details");
      orderDetails.innerHTML = `
                <strong>${order.food}</strong><br>
                ${order.customer}<br>
                $${order.price.toFixed(2)}<br>
                <em>${order.option}</em>
            `;
      dayCell.appendChild(orderDetails);
      dayCell.classList.add("has-order");
    }

    calendar.appendChild(dayCell);
  }
}
