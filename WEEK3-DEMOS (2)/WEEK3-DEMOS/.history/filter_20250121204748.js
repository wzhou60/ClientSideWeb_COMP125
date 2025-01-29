//slide24 & 25
//Sample forEach Loop:
let x = [1, 3, 5, 10];
x.filter(stepUp5);
function stepUp5(arrValue, i, arr) {
  arr[i] = arrValue + 5;
  document.write(arr[i]);
}
