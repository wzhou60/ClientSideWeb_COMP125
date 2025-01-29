var fg = document.getElementById("submit");
fg.onclick = function () {
  document.getElementById("submit");
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;
  var volume = length * width * height;
  document.write(volume);
};
document.getElementById("submit").addEventListener("click")