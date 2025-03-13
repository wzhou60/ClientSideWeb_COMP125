/*function locale() {
    var firstName = document.getElementById("fname").value;
    localStorage.fName = firstName;
    var y = localStorage.getItem("fName");
    alert(y);
}
document.getElementById("submit").addEventListener("click", locale, false);
*/

/*localStorage.setItem("name", "Desmond Jennings");
localStorage.getItem("name") // returns Desmond Jennings
localStorage.name // returns Desmond Jennings
localStorage.key(8) // returns "name"
localStorage.removeItem(8)
window.onstorage = function(e) {
    console.log("The " + e.key + " value waschanged from " + e.oldValue + " to " + e.newValue);
}*/

document.addEventListener("DOMContentLoaded", function() {
    var fnameInput = document.getElementById("fname");

    // Check if there's a saved value in localStorage for "firstname"
    if (localStorage.getItem("firstname")) {
        fnameInput.value = localStorage.getItem("firstname");
    }

    // Function to handle storing the input value in localStorage
    function saveFirstName() {
        var firstname = fnameInput.value;
        localStorage.setItem("firstname", firstname);
        console.log("Saved firstname:", firstname);
    }

    // Event listener for the submit button to save the firstname
    document.getElementById("submit").addEventListener("click", saveFirstName);
});


window.onstorage = function(e) {
      console.log("The " + e.key + " value was changed from " + e.oldValue + " to " + e.newValue);
    }
 