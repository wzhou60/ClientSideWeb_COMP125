// array of order ids
let orders = ["33-104", "21-098", "88-001", "14-791"];
// find the first order that has not shipped
if (orders.find) {
  // the find method is supported by the browser
  let firstUnshipped = orders.find(unshipped);
} else {
  // alternate code in place of the find method
  window.alert("Your browser does not support the find method");
}
function unshipped(arrValue) {
  // callback function to determine whether an order has shipped
  document.write(orders);
}
