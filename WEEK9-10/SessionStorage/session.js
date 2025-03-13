/*function locale() {
    var firstName = document.getElementById("fname").value;
    sessionStorage.fName = firstName;
    var y = sessionStorage.getItem("fName");
    alert(y);
}
document.getElementById("submit").addEventListener("click", locale, false);
*/

/*sessionStorage.setItem("name", "Desmond Jennings");
sessionStorage.getItem("name") // returns Desmond Jennings
sessionStorage.name // returns Desmond Jennings
sessionStorage.key(8) // returns "name"
sessionStorage.removeItem(8)
window.onstorage = function(e) {
    console.log("The " + e.key + " value waschanged from " + e.oldValue + " to " + e.newValue);
}*/

document.addEventListener("DOMContentLoaded", function() {
    var fnameInput = document.getElementById("fname");

    // Check if there's a saved value in sessionStorage for "firstname"
    if (sessionStorage.getItem("firstname")) {
        fnameInput.value = sessionStorage.getItem("firstname");
    }

    // Function to handle storing the input value in sessionStorage
    function saveFirstName() {
        var firstname = fnameInput.value;
        sessionStorage.setItem("firstname", firstname);
        console.log("Saved firstname:", firstname);
    }

    // Event listener for the submit button to save the firstname
    document.getElementById("submit").addEventListener("click", saveFirstName);
});


window.onstorage = function(e) {
      console.log("The " + e.key + " value was changed from " + e.oldValue + " to " + e.newValue);
    }
 