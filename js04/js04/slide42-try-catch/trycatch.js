let userName = prompt("Please enter your name"); // Declare userName properly

if (userName === null) {
  // Handle case when the user cancels the prompt
  alert("No name entered!");
} else if (userName.trim() === "Jenkins") {
  // Check if the trimmed input is "Jenkins"
  try {
    alert("The user is " + userName);
  } catch (err) {
    alert("An error occurred: " + err.message);
  }
} else {
  alert("The user is not Jenkins.");
}
